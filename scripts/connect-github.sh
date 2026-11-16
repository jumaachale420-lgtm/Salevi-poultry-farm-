#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd -P)"
target="${1:-jumaachale420-lgtm/Salevi-poultry-farm-}"
target="${target#https://github.com/}"
target="${target#git@github.com:}"
target="${target%/}"
target="${target%.git}"

fail() {
  printf '\n%s\n' "$*" >&2
  exit 1
}

(( $# <= 1 )) || fail "Matumizi: bash scripts/connect-github.sh [OWNER/REPOSITORY]"
[[ "$target" =~ ^[a-zA-Z0-9_.-]+/[a-zA-Z0-9_.-]+$ ]] || fail "Tumia jina la repository la aina OWNER/REPOSITORY."
command -v git >/dev/null 2>&1 || fail "Git haijasakinishwa. Sakinisha Git: https://git-scm.com/downloads"

work_dir="$(mktemp -d "${TMPDIR:-/tmp}/salevi-github.XXXXXX")"
trap 'rm -rf -- "$work_dir"' EXIT

# The existing repository has both Index.html and index.html.
touch "$work_dir/casecheck"
[[ ! -e "$work_dir/CASECHECK" ]] || fail "Tumia mfumo unaotofautisha herufi kubwa na ndogo ili kulinda Index.html na index.html."

if ! command -v gh >/dev/null 2>&1; then
  [[ "$(uname -s)" == "Linux" ]] || fail "Sakinisha GitHub CLI kisha ujaribu tena: https://cli.github.com/"
  for tool in curl tar sha256sum; do
    command -v "$tool" >/dev/null 2>&1 || fail "Programu $tool inahitajika kusakinisha GitHub CLI kwa muda."
  done

  version="2.103.3"
  case "$(uname -m)" in
    x86_64|amd64)
      architecture="amd64"
      expected_sha="4c806978ffce1cec70853302a56d70ac6da4f19bae7adca4e1a8ab00633dd91d"
      ;;
    aarch64|arm64)
      architecture="arm64"
      expected_sha="ee32df2323c8847f5fac6cb6b4b69ca75828e9329a8f22f677021f7b3306ce63"
      ;;
    *) fail "Sakinisha GitHub CLI kwa mfumo huu: https://cli.github.com/" ;;
  esac

  archive="gh_${version}_linux_${architecture}.tar.gz"
  printf 'Inapakua GitHub CLI rasmi kwa matumizi ya muda...\n'
  curl -fsSL --retry 2 -o "$work_dir/$archive" "https://github.com/cli/cli/releases/download/v${version}/${archive}"
  printf '%s  %s\n' "$expected_sha" "$work_dir/$archive" | sha256sum --check --status || fail "Uthibitisho wa GitHub CLI umeshindikana."
  mkdir -p "$work_dir/bin"
  tar -xzf "$work_dir/$archive" -C "$work_dir/bin" --strip-components=2 "gh_${version}_linux_${architecture}/bin/gh"
  chmod 755 "$work_dir/bin/gh"
  export PATH="$work_dir/bin:$PATH"
fi

if ! gh auth status --hostname github.com >/dev/null 2>&1; then
  [[ -t 0 ]] || fail "Fungua terminal ya mradi kisha endesha script hii ili uidhinishe GitHub kwenye kivinjari."
  printf '\nIngia GitHub na idhinisha GitHub CLI pamoja na ruhusa ya workflow.\n'
  gh auth login --hostname github.com --git-protocol https --web --scopes workflow
fi

# Classic OAuth credentials need the workflow scope to push Actions files.
auth_status="$(gh auth status --hostname github.com 2>&1)"
scope_line="$(printf '%s\n' "$auth_status" | grep -i 'token scopes:' | head -1 || true)"
if [[ -n "$scope_line" ]] && ! printf '%s\n' "$scope_line" | grep -Eqi '(^|[^[:alnum:]_])workflow([^[:alnum:]_]|$)'; then
  [[ -z "${GH_TOKEN:-}${GITHUB_TOKEN:-}" ]] || fail "GitHub token ya mazingira haina ruhusa ya workflow. Idhinisha GitHub CLI yenye ruhusa hiyo."
  [[ -t 0 ]] || fail "Ruhusa ya workflow inahitajika. Endesha: gh auth refresh --hostname github.com --scopes workflow"
  printf '\nIdhinisha ruhusa ya workflow ili uchapishaji wa moja kwa moja ufanye kazi.\n'
  gh auth refresh --hostname github.com --scopes workflow
fi

account="$(gh api user --jq .login)"
account_id="$(gh api user --jq .id)"
[[ -n "$account" && "$account_id" =~ ^[0-9]+$ ]] || fail "Imeshindikana kutambua akaunti ya GitHub."
repo_info="$(gh repo view "$target" --json viewerPermission,defaultBranchRef --jq '[.viewerPermission, .defaultBranchRef.name] | join("|")')" || fail "Repository haipatikani: $target"
IFS='|' read -r permission branch <<< "$repo_info"
case "$permission" in
  ADMIN|MAINTAIN|WRITE) ;;
  *) fail "Akaunti $account haina ruhusa ya kupakia kwenye $target." ;;
esac
[[ "$branch" == "main" ]] || fail "Workflow imeandaliwa kwa branch main; branch ya repository hii ni $branch."

printf '\nAkaunti: %s\nRepository: https://github.com/%s\n' "$account" "$target"
printf 'Ukurasa wa mwanzo utasasishwa; faili nyingine za repository zitahifadhiwa.\n'

checkout="$work_dir/repository"
remote_url="https://github.com/$target.git"
export GIT_TERMINAL_PROMPT=0
git -c credential.helper= -c 'credential.https://github.com.helper=!gh auth git-credential' \
  clone --quiet --single-branch --branch "$branch" "$remote_url" "$checkout"
git -C "$checkout" config --local --add credential.https://github.com.helper ''
git -C "$checkout" config --local --add credential.https://github.com.helper '!gh auth git-credential'

if [[ -z "$(git -C "$checkout" config --get user.name || true)" ]]; then
  git -C "$checkout" config --local user.name "$account"
fi
if [[ -z "$(git -C "$checkout" config --get user.email || true)" ]]; then
  git -C "$checkout" config --local user.email "${account_id}+${account}@users.noreply.github.com"
fi

# Overlay only the application files; unrelated existing repository files stay intact.
for directory in public src scripts; do
  if [[ -d "$project_dir/$directory" ]]; then
    mkdir -p "$checkout/$directory"
    cp -R "$project_dir/$directory/." "$checkout/$directory/"
  fi
done
for file in .gitignore GITHUB.md index.html package.json package-lock.json tsconfig.json vite.config.ts; do
  if [[ -f "$project_dir/$file" ]]; then
    cp "$project_dir/$file" "$checkout/$file"
  fi
done
mkdir -p "$checkout/.github/workflows"
cp "$project_dir/.github/workflows/deploy.yml" "$checkout/.github/workflows/deploy.yml"

git -C "$checkout" add --all
has_changes=0
if ! git -C "$checkout" diff --cached --quiet; then
  git -C "$checkout" commit -m "Publish Salevi landing page"
  has_changes=1
fi

page_info="$(gh api "repos/$target/pages" --jq '[(.build_type // "legacy"), (.source.branch // ""), (.source.path // "")] | join("|")')" || fail "Imeshindikana kusoma mipangilio ya Pages; hakikisha akaunti ina ruhusa ya kuisimamia."
IFS='|' read -r previous_type previous_branch previous_path <<< "$page_info"
pages_changed=0
if [[ "$previous_type" != "workflow" ]]; then
  printf '\nInaweka GitHub Pages itumie GitHub Actions...\n'
  gh api --method PUT "repos/$target/pages" -f build_type=workflow >/dev/null || fail "Imeshindikana kubadili mipangilio ya GitHub Pages; repository haikupakiwa."
  pages_changed=1
fi

restore_pages() {
  if [[ "$pages_changed" == 1 && "$previous_type" == legacy ]]; then
    args=(--method PUT "repos/$target/pages" -f build_type=legacy)
    if [[ -n "$previous_branch" && -n "$previous_path" ]]; then
      args+=(-f "source[branch]=$previous_branch" -f "source[path]=$previous_path")
    fi
    if gh api "${args[@]}" >/dev/null; then
      printf 'Mipangilio ya awali ya GitHub Pages imerejeshwa.\n' >&2
    else
      printf 'Rejesha mipangilio ya awali kwenye GitHub Settings > Pages.\n' >&2
    fi
  fi
}

if [[ "$has_changes" == 1 ]]; then
  printf '\nInapakia mabadiliko kwenye GitHub...\n'
  if ! git -C "$checkout" push origin "HEAD:refs/heads/$branch"; then
    restore_pages
    fail "Kupakia kumeshindikana. Hakuna force push iliyofanywa; angalia ruhusa na ujaribu tena."
  fi
else
  printf '\nHakuna mabadiliko mapya; inaomba uchapishaji upya...\n'
  if ! gh workflow run deploy.yml --repo "$target" --ref "$branch"; then
    restore_pages
    fail "Imeshindikana kuanzisha workflow. Angalia GitHub Actions kwenye repository."
  fi
fi

printf '\nMabadiliko yamewasilishwa. Angalia hali ya uchapishaji:\n'
printf 'https://github.com/%s/actions/workflows/deploy.yml\n' "$target"
printf 'Tovuti: https://%s.github.io/%s/\n' "${target%%/*}" "${target#*/}"