import { useMemo, useState } from "react";
import { Check, Egg, Drumstick, Bird, Calculator, Sparkles, ArrowRight, Info } from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading, WA_LINK, WhatsAppIcon } from "./ui";

type ProductKey = "layer" | "broiler" | "kienyeji";

const products: Record<
  ProductKey,
  {
    name: string;
    tagline: string;
    badge: string;
    price: string;
    unit: string;
    image: string;
    imageAlt: string;
    imageFallback: string;
    protein: string;
    specs: { label: string; value: string }[];
    mix: { label: string; pct: number; color: string }[];
    benefits: string[];
  }
> = {
  layer: {
    name: "Elite Layer 35%",
    tagline: "For layers 18–80 weeks. Peak lay, heavy eggs, strong shells.",
    badge: "★ Most Popular",
    price: "TZS 185,000",
    unit: "per 50kg bag",
    image: `${import.meta.env.BASE_URL}images/salevi-bag.png`,
    imageAlt: "Salevi Elite Layer Concentrate 50kg bag",
    imageFallback: "https://placehold.co/600x660/0b3b1f/d4af37?text=Salevi+Layer+35%25",
    protein: "35% CP",
    specs: [
      { label: "Crude Protein", value: "35%" },
      { label: "Calcium", value: "9.5%" },
      { label: "Lysine / Meth.", value: "2.1 / 0.9%" },
      { label: "Lay Rate", value: "up to 95%" },
    ],
    mix: [
      { label: "Salevi", pct: 35, color: "bg-gold-500" },
      { label: "Maize", pct: 55, color: "bg-amber-300" },
      { label: "Bran", pct: 10, color: "bg-forest-600" },
    ],
    benefits: ["Peak production in 14–21 days", "Egg weight 60–65g, fewer cracks", "Longer lay persistency to 80 weeks"],
  },
  broiler: {
    name: "Broiler Max 38%",
    tagline: "Starter to finisher. 2.4kg live weight in just 42 days.",
    badge: "Fastest Growth",
    price: "TZS 195,000",
    unit: "per 50kg bag",
    image: "https://images.pexels.com/photos/17064389/pexels-photo-17064389.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    imageAlt: "Healthy broilers raised on Salevi Broiler Max",
    imageFallback: "https://placehold.co/600x660/0b3b1f/d4af37?text=Salevi+Broiler+Max",
    protein: "38% CP",
    specs: [
      { label: "Crude Protein", value: "38%" },
      { label: "Energy (ME)", value: "2950 kcal" },
      { label: "FCR", value: "1.65" },
      { label: "42-day Weight", value: "2.4 kg" },
    ],
    mix: [
      { label: "Salevi", pct: 40, color: "bg-gold-500" },
      { label: "Maize", pct: 52, color: "bg-amber-300" },
      { label: "Bran", pct: 8, color: "bg-forest-600" },
    ],
    benefits: ["-7 days to market vs ordinary feed", "Full breast, low mortality <3%", "Same formula starter → finisher"],
  },
  kienyeji: {
    name: "Kienyeji Improver 30%",
    tagline: "For improved kienyeji & dual-purpose. Hardy birds, tasty eggs.",
    badge: "Best for Kienyeji",
    price: "TZS 175,000",
    unit: "per 50kg bag",
    image: "https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    imageAlt: "Free-range kienyeji hens thriving on Salevi Improver",
    imageFallback: "https://placehold.co/600x660/0b3b1f/d4af37?text=Salevi+Kienyeji",
    protein: "30% CP",
    specs: [
      { label: "Crude Protein", value: "30%" },
      { label: "Calcium", value: "7.0%" },
      { label: "Scavenging+", value: "Supplement" },
      { label: "Eggs/Year", value: "220+" },
    ],
    mix: [
      { label: "Salevi", pct: 30, color: "bg-gold-500" },
      { label: "Maize", pct: 55, color: "bg-amber-300" },
      { label: "Bran", pct: 15, color: "bg-forest-600" },
    ],
    benefits: ["2× more eggs than scavenging only", "Cocks reach 2kg in 5 months", "Perfect semi-intensive system"],
  },
};

const tabs: { key: ProductKey; label: string; icon: typeof Egg }[] = [
  { key: "layer", label: "Layers", icon: Egg },
  { key: "broiler", label: "Broilers", icon: Drumstick },
  { key: "kienyeji", label: "Kienyeji", icon: Bird },
];

function formatTZS(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}k`;
  return `${Math.round(n)}`;
}

export default function Showcase() {
  const [active, setActive] = useState<ProductKey>("layer");
  const [birds, setBirds] = useState(500);
  const [eggPrice, setEggPrice] = useState(400);
  const [calcType, setCalcType] = useState<"layers" | "broilers">("layers");
  const p = products[active];

  const calc = useMemo(() => {
    if (calcType === "layers") {
      const feedDay = birds * 0.12;
      const bagsMonth = (feedDay * 30 * 0.35) / 50;
      const eggsSalevi = birds * 0.9 * 30;
      const eggsOrd = birds * 0.66 * 30;
      const extraEggs = eggsSalevi - eggsOrd;
      const extraRev = extraEggs * eggPrice;
      const feedCost = bagsMonth * 185000 + (feedDay * 30 * 0.65 * 950);
      return { bagsMonth, extraEggs, extraRev, feedCost, trays: extraEggs / 30 };
    }
    const cycles = 6;
    const extraKg = birds * 0.55;
    const extraRevCycle = extraKg * 8000;
    const extraRevYear = extraRevCycle * cycles;
    const bagsCycle = (birds * 4.2 * 0.4) / 50;
    return { bagsMonth: bagsCycle, extraEggs: extraKg, extraRev: extraRevCycle, feedCost: bagsCycle * 195000, trays: extraRevYear, cycles };
  }, [birds, eggPrice, calcType]);

  return (
    <section id="products" className="relative overflow-hidden bg-forest-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-0 h-[440px] w-[440px] animate-blob rounded-full bg-forest-600/30 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[440px] w-[440px] animate-blob rounded-full bg-gold-500/15 blur-[130px] [animation-delay:3s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Product Range"
          title={<>One bag. Three ways <span className="text-gold-gradient italic">to win.</span></>}
          sub="Pick the formula built for your birds. Every bag includes a free mixing chart, WhatsApp vet support and our lay-improvement guarantee."
        />

        {/* Tabs */}
        <Reveal delay={120}>
          <div role="tablist" aria-label="Product formulas" className="mx-auto mt-10 flex w-fit max-w-full gap-1.5 overflow-x-auto rounded-2xl border border-white/12 bg-white/[0.06] p-1.5 backdrop-blur-xl no-scrollbar">
            {tabs.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={active === t.key}
                onClick={() => setActive(t.key)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-xl px-5 py-3 text-sm font-extrabold transition-all duration-300 sm:px-7",
                  active === t.key
                    ? "bg-gradient-to-r from-gold-500 to-gold-400 text-forest-950 shadow-lg shadow-gold-500/30"
                    : "text-cream-50/70 hover:bg-white/10 hover:text-white"
                )}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Panel */}
        <Reveal delay={180}>
          <div key={active} className="tab-panel mt-8 overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/[0.05] backdrop-blur-xl">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              {/* Image side */}
              <div className="relative min-h-[300px] overflow-hidden lg:min-h-[540px]">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = p.imageFallback; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/10 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full bg-gold-500 px-3.5 py-1.5 text-xs font-black text-forest-950 shadow-lg">{p.badge}</span>
                  <span className="rounded-full border border-white/25 bg-forest-950/60 px-3.5 py-1.5 text-xs font-black text-white backdrop-blur-md">{p.protein}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-forest-950/60 p-4 backdrop-blur-xl">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-300">Mix recipe — 100kg complete feed</p>
                  <div className="mt-2.5 flex h-3.5 overflow-hidden rounded-full ring-1 ring-white/20">
                    {p.mix.map((m) => (
                      <div key={m.label} className={cn("h-full transition-all duration-700", m.color)} style={{ width: `${m.pct}%` }} title={`${m.label} ${m.pct}%`} />
                    ))}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                    {p.mix.map((m) => (
                      <span key={m.label} className="flex items-center gap-1.5 text-xs font-bold text-white/85">
                        <span className={cn("h-2 w-2 rounded-full", m.color)} /> {m.label} {m.pct}%
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="p-6 sm:p-10">
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{p.name}</h3>
                <p className="mt-2 text-[15px] font-medium text-cream-50/70">{p.tagline}</p>

                <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  {p.specs.map((s) => (
                    <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-3.5 text-center">
                      <p className="font-display text-lg font-black text-gold-300">{s.value}</p>
                      <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wide text-cream-50/55">{s.label}</p>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 space-y-2.5">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm font-semibold text-cream-50/85">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40">
                        <Check className="h-3 w-3 text-emerald-300" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-gold-500/25 bg-gold-500/[0.08] p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-2xl font-black text-white">{p.price}</p>
                    <p className="text-xs font-bold text-cream-50/60">{p.unit} • Agrovet & bulk discounts</p>
                  </div>
                  <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-magnetic gold-sheen flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-600 to-gold-400 px-6 py-3 text-sm font-black text-forest-950 shadow-lg shadow-gold-500/25">
                    <WhatsAppIcon className="h-4 w-4" /> Order {p.name.split(" ")[0]}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ---------- Profit Calculator ---------- */}
        <div id="calculator" className="mt-14 scroll-mt-28">
          <Reveal>
            <div className="overflow-hidden rounded-[1.8rem] border border-gold-500/25 bg-gradient-to-br from-white/[0.09] to-white/[0.03] shadow-2xl backdrop-blur-xl">
              <div className="grid lg:grid-cols-[1fr_1fr]">
                {/* Controls */}
                <div className="border-b border-white/10 p-6 sm:p-10 lg:border-b-0 lg:border-r">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-500 text-forest-950 shadow-lg shadow-gold-500/30">
                      <Calculator className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">Profit Calculator</h3>
                      <p className="text-sm font-semibold text-cream-50/60">Drag the sliders. Watch your money grow.</p>
                    </div>
                  </div>

                  <div className="mt-7 flex gap-2 rounded-2xl bg-forest-950/60 p-1.5 ring-1 ring-white/10">
                    {(["layers", "broilers"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setCalcType(t)}
                        aria-pressed={calcType === t}
                        className={cn(
                          "flex-1 rounded-xl px-4 py-2.5 text-sm font-extrabold capitalize transition-all duration-300",
                          calcType === t ? "bg-white text-forest-950 shadow" : "text-cream-50/60 hover:text-white"
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <div className="mt-7 space-y-7">
                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="birds" className="text-sm font-extrabold text-white">Number of birds</label>
                        <span className="rounded-lg bg-gold-500/15 px-3 py-1 font-display text-lg font-black text-gold-300 ring-1 ring-gold-500/30">{birds.toLocaleString()}</span>
                      </div>
                      <input
                        id="birds"
                        type="range" min={50} max={5000} step={50} value={birds}
                        onChange={(e) => setBirds(+e.target.value)}
                        className="mt-3 w-full accent-[#D4AF37]"
                        aria-valuetext={`${birds} birds`}
                      />
                      <div className="flex justify-between text-[11px] font-bold text-cream-50/40"><span>50</span><span>5,000</span></div>
                    </div>
                    {calcType === "layers" && (
                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="eggprice" className="text-sm font-extrabold text-white">Egg price (TZS / egg)</label>
                          <span className="rounded-lg bg-gold-500/15 px-3 py-1 font-display text-lg font-black text-gold-300 ring-1 ring-gold-500/30">{eggPrice}</span>
                        </div>
                        <input
                          id="eggprice"
                          type="range" min={300} max={600} step={10} value={eggPrice}
                          onChange={(e) => setEggPrice(+e.target.value)}
                          className="mt-3 w-full accent-[#D4AF37]"
                        />
                        <div className="flex justify-between text-[11px] font-bold text-cream-50/40"><span>300</span><span>600</span></div>
                      </div>
                    )}
                  </div>

                  <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-cream-50/50">
                    <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    Estimates use Salevi field data: 90% vs 66% lay rate, 380–600 TZS/egg, 0.55kg extra broiler weight. Actual results vary by management.
                  </p>
                </div>

                {/* Results */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gold-500 via-gold-400 to-amber-300 p-6 sm:p-10">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/25 blur-3xl" aria-hidden="true" />
                  <div className="relative">
                    <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-forest-950/70">
                      <Sparkles className="h-4 w-4" /> Your extra profit with Salevi
                    </p>
                    <p className="font-display mt-2 text-5xl font-black tracking-tight text-forest-950 sm:text-6xl">
                      {formatTZS(calc.extraRev)}
                      <span className="ml-1 align-middle text-lg font-extrabold">TZS{calcType === "layers" ? "/mo" : "/cycle"}</span>
                    </p>
                    <p className="mt-2 text-sm font-bold text-forest-950/70">
                      {calcType === "layers"
                        ? `≈ ${Math.round(calc.extraEggs).toLocaleString()} extra eggs / ${Math.round((calc as { trays: number }).trays).toLocaleString()} extra trays monthly`
                        : `≈ ${Math.round((calc as { extraEggs: number }).extraEggs).toLocaleString()} kg extra meat per cycle • ${(calc as { cycles: number }).cycles} cycles/year`}
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-forest-950/[0.08] p-4 ring-1 ring-forest-950/10">
                        <p className="font-display text-2xl font-black text-forest-950">{calc.bagsMonth.toFixed(1)}</p>
                        <p className="text-xs font-extrabold text-forest-950/60">{calcType === "layers" ? "bags / month needed" : "bags / cycle needed"}</p>
                      </div>
                      <div className="rounded-2xl bg-forest-950/[0.08] p-4 ring-1 ring-forest-950/10">
                        <p className="font-display text-2xl font-black text-forest-950">{formatTZS(calc.feedCost)}</p>
                        <p className="text-xs font-extrabold text-forest-950/60">TZS est. feed investment</p>
                      </div>
                    </div>

                    <a href={`${WA_LINK}`} target="_blank" rel="noreferrer" className="btn-magnetic mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-forest-950 px-6 py-4 text-[15px] font-black text-white shadow-xl hover:bg-forest-900">
                      <WhatsAppIcon className="h-5 w-5 text-emerald-400" />
                      Claim This Profit — Order Now
                    </a>
                    <p className="mt-3 text-center text-xs font-bold text-forest-950/60">Free mixing training + delivery quote in under 10 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
