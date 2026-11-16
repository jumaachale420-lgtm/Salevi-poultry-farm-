import { Dna, ShieldCheck, Egg, Wheat, FlaskConical, Sprout, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const features = [
  {
    icon: Dna,
    color: "bg-forest-900 text-gold-400",
    title: "35% Concentrated Protein",
    desc: "Premium soya, fishmeal & sunflower blend with precision lysine + methionine for maximum egg mass and rapid broiler growth.",
    tag: "Core Power",
  },
  {
    icon: Egg,
    color: "bg-gold-500 text-forest-950",
    title: "Strong-Shell Mineral Matrix",
    desc: "Bio-available calcium, phosphorus, Vitamin D3 & trace minerals for fewer cracks, heavier eggs and longer lay cycles.",
    tag: "+18% shell strength",
  },
  {
    icon: ShieldCheck,
    color: "bg-emerald-600 text-white",
    title: "Mycotoxin Guard™",
    desc: "Triple-action toxin binder + gut-health probiotics protect your flock from mouldy maize — the #1 silent profit killer.",
    tag: "Flock insurance",
  },
  {
    icon: Wheat,
    color: "bg-amber-600 text-white",
    title: "Simple 35% Mix Ratio",
    desc: "35kg Salevi + 55kg maize + 10kg bran = 100kg complete feed. No guesswork. Free mixing chart & training with every bag.",
    tag: "Zero waste",
  },
  {
    icon: FlaskConical,
    color: "bg-teal-700 text-white",
    title: "Vet-Formulated, TBS Certified",
    desc: "Formulated by poultry nutritionists, lab-tested batch by batch in Arusha. Consistent quality you can taste in every tray.",
    tag: "Lab verified",
  },
  {
    icon: Sprout,
    color: "bg-lime-600 text-forest-950",
    title: "Works for Layers, Broilers & Kienyeji",
    desc: "Three targeted formulas — Elite Layer, Broiler Max & Kienyeji Improver — each tuned for age, breed and your market goals.",
    tag: "3 formulas",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-gold-500/10 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-[420px] w-[420px] rounded-full bg-forest-600/10 blur-[100px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Salevi Wins"
          title={<>Everything your birds need. <span className="font-display italic text-gold-600">Nothing they don't.</span></>}
          sub="Ordinary feeds dilute nutrition to cut costs. Salevi concentrates it — so every beakful drives eggs, weight gain and profit."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 110}>
              <article className="card-lift group relative h-full overflow-hidden rounded-3xl border border-forest-900/10 bg-cream-50 p-6 sm:p-7">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-gold-500/15 to-transparent blur-2xl transition-all duration-500 group-hover:scale-150" aria-hidden="true" />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${f.color} shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}>
                      <f.icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full border border-gold-600/25 bg-gold-500/10 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-gold-700">
                      {f.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold tracking-tight text-forest-950">{f.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-forest-950/65">{f.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-extrabold text-forest-800 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Included in every bag <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Formula strip */}
        <Reveal delay={150}>
          <div className="mt-8 overflow-hidden rounded-3xl bg-forest-950 p-[1.5px] shadow-2xl shadow-forest-950/25">
            <div className="flex flex-col items-center justify-between gap-5 rounded-[calc(1.5rem-1.5px)] bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 px-6 py-6 sm:flex-row sm:px-10">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <span className="font-display hidden text-5xl font-black text-gold-500/30 sm:block">35%</span>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-400">The Salevi Formula</p>
                  <p className="font-display mt-1 text-xl font-semibold text-white sm:text-2xl">35kg Salevi + 55kg Maize + 10kg Bran = 100kg complete feed</p>
                </div>
              </div>
              <a href="#calculator" className="btn-magnetic shrink-0 rounded-2xl bg-white px-6 py-3.5 text-sm font-black text-forest-950 shadow-xl hover:bg-gold-200">
                Try Mix Calculator
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
