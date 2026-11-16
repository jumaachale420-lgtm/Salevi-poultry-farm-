import { MapPin, Phone, Mail, Clock, Globe, AtSign, Play, BadgeCheck, ArrowUpRight } from "lucide-react";
import { WA_LINK, WhatsAppIcon } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-[#03130a] pb-8 pt-16 text-cream-50/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-forest-700 to-forest-950 ring-1 ring-gold-500/40">
                <span className="font-display text-xl font-black text-gold-400">S</span>
              </span>
              <span className="leading-none">
                <span className="font-display block text-xl font-bold text-white">Salevi</span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-gold-400">Elite Concentrate</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Premium poultry feed concentrates, formulated by vets and milled in Arusha, Tanzania.
              Helping 4,800+ farmers turn feed into gold since 2019.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-300">
              <BadgeCheck className="h-4 w-4" /> TBS Certified • Batch lab-tested • Halal
            </div>
            <div className="mt-5 flex gap-2.5">
              {[
                { icon: Globe, label: "Website" },
                { icon: AtSign, label: "Social" },
                { icon: Play, label: "Videos" },
              ].map((s) => (
                <a key={s.label} href="#top" aria-label={s.label} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-cream-50/70 transition-all hover:-translate-y-1 hover:border-gold-500/40 hover:text-gold-300">
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
              <a href={WA_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-10 items-center gap-2 rounded-xl bg-[#1FA855] px-4 text-sm font-extrabold text-white transition-all hover:-translate-y-1">
                <WhatsAppIcon className="h-4 w-4" /> Chat
              </a>
            </div>
          </div>

          {/* Products */}
          <nav aria-label="Products">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-400">Products</p>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold">
              {["Elite Layer 35%", "Broiler Max 38%", "Kienyeji Improver 30%", "Mycotoxin Guard Booster", "Mixing Charts & Training", "Dealer Packs (20+ bags)"].map((l) => (
                <li key={l}>
                  <a href="#products" className="transition-colors hover:text-gold-300">{l}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-400">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold">
              {[
                { l: "Why Salevi", h: "#features" },
                { l: "Results & Reviews", h: "#results" },
                { l: "Pricing", h: "#pricing" },
                { l: "Profit Calculator", h: "#calculator" },
                { l: "FAQ", h: "#faq" },
                { l: "Become a Dealer", h: "#pricing" },
              ].map((x) => (
                <li key={x.l}>
                  <a href={x.h} className="transition-colors hover:text-gold-300">{x.l}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-400">Visit / Call Us</p>
            <ul className="mt-4 space-y-3.5 text-sm font-semibold">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>Njiro Road, Arusha, Tanzania<br /><span className="text-cream-50/50">Agrovets in Moshi • Dodoma • Mwanza</span></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold-500" />
                <a href="tel:+255766679472" className="hover:text-gold-300">0766 679 472</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-gold-500" />
                <a href="mailto:info@salevipoultry.co.tz" className="hover:text-gold-300">info@salevipoultry.co.tz</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-gold-500" />
                <span>Mon–Sat 7am–8pm • Sun 9am–4pm</span>
              </li>
            </ul>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="mt-5 flex items-center justify-between rounded-2xl border border-gold-500/30 bg-gold-500/10 px-4 py-3 text-sm font-extrabold text-gold-300 transition-all hover:bg-gold-500/20">
              Get today's price list <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs font-semibold text-cream-50/40 sm:flex-row sm:text-left">
          <p>© 2026 Salevi Poultry Farm Ltd, Arusha. All rights reserved. • Karibu Salevi — Chakula Bora, Faida Kubwa.</p>
          <div className="flex gap-5">
            <a href="#top" className="hover:text-gold-300">Privacy</a>
            <a href="#top" className="hover:text-gold-300">Terms</a>
            <a href="#faq" className="hover:text-gold-300">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
