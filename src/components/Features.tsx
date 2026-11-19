import { Dna, ShieldCheck, Egg, Layers, Sparkles, PackageCheck, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const features = [
  {
    icon: Dna,
    color: "bg-forest-900 text-gold-400",
    title: "SALEVI ADVANCED NUTRITION TECHNOLOGY",
    desc: "Professionally developed poultry nutrition solutions designed to support healthy growth, efficient production and better farm performance.",
    tag: "Nutrition",
  },
  {
    icon: Egg,
    color: "bg-gold-500 text-forest-950",
    title: "Scientifically Balanced Nutrition",
    desc: "Specialized poultry nutrition developed with the needs of your flock in mind.",
    tag: "Balanced",
  },
  {
    icon: ShieldCheck,
    color: "bg-emerald-600 text-white",
    title: "Quality-Controlled Production",
    desc: "A focus on quality throughout the production of Salevi poultry concentrates.",
    tag: "Quality",
  },
  {
    icon: Layers,
    color: "bg-amber-600 text-white",
    title: "Formulated for Consistent Performance",
    desc: "Thoughtful poultry nutrition solutions designed to support everyday farm performance.",
    tag: "Consistency",
  },
  {
    icon: Sparkles,
    color: "bg-teal-700 text-white",
    title: "Proprietary Concentrate Formulation",
    desc: "Salevi's specialized approach to poultry nutrition keeps product formulations confidential.",
    tag: "Salevi",
  },
  {
    icon: PackageCheck,
    color: "bg-lime-600 text-forest-950",
    title: "Two Concentrates, One Purpose",
    desc: "Choose Salevi Layer for layers or Salevi Broiler for broiler chickens, both in 50kg bags.",
    tag: "For your flock",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-gold-500/10 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-[420px] w-[420px] rounded-full bg-forest-600/10 blur-[100px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Salevi"
          title={<>Thoughtful nutrition for <span className="font-display italic text-gold-600">your poultry farm.</span></>}
          sub="Specialized concentrates for layer and broiler farmers, created with quality and consistency in mind."
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
                    Discover Salevi <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Nutrition message */}
        <Reveal delay={150}>
          <div className="mt-8 overflow-hidden rounded-3xl bg-forest-950 p-[1.5px] shadow-2xl shadow-forest-950/25">
            <div className="flex flex-col items-center justify-between gap-5 rounded-[calc(1.5rem-1.5px)] bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 px-6 py-6 sm:flex-row sm:px-10">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-400">Smart Nutrition. Better Poultry Performance.</p>
                  <p className="font-display mt-1 text-xl font-semibold text-white sm:text-2xl">Salevi develops specialized poultry concentrate solutions to help farmers achieve better feeding efficiency, healthy birds and sustainable poultry production.</p>
                </div>
              </div>
              <a href="#products" className="btn-magnetic shrink-0 rounded-2xl bg-white px-6 py-3.5 text-sm font-black text-forest-950 shadow-xl hover:bg-gold-200">
                Explore Products
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
