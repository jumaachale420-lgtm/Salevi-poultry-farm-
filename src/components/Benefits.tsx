import { CheckCircle2, XCircle, Wheat, Scale, PackageCheck, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const comparison = [
  { label: "Lay rate (peak)", salevi: "90–95%", ordinary: "60–70%" },
  { label: "Egg weight", salevi: "60–65 g", ordinary: "52–56 g" },
  { label: "Cracked eggs", salevi: "< 2%", ordinary: "6–10%" },
  { label: "Broiler 42-day weight", salevi: "2.3–2.5 kg", ordinary: "1.7–1.9 kg" },
  { label: "Mortality", salevi: "< 3%", ordinary: "5–9%" },
  { label: "Feed cost / tray", salevi: "Lower (FCR 1.65)", ordinary: "Higher (FCR 2.1+)" },
];

const steps = [
  { icon: Wheat, title: "1. Grind your maize", desc: "Grind clean, dry maize + rice/wheat bran. We give you the exact recipe card." },
  { icon: Scale, title: "2. Mix 35 + 55 + 10", desc: "35kg Salevi + 55kg maize + 10kg bran. Mix evenly for 5 minutes." },
  { icon: PackageCheck, title: "3. Feed & collect", desc: "120g/bird/day for layers. Watch trays fill up in 2–3 weeks." },
];

export default function Benefits() {
  return (
    <section id="results" className="relative overflow-hidden bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Quality banner using Salevi feed closeup */}
        <Reveal variant="zoom" className="mb-14">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-forest-950/25">
            <img
              src={`${import.meta.env.BASE_URL}images/salevi-feed.jpg`}
              alt="Golden Salevi concentrate pellets with fresh farm eggs"
              className="h-56 w-full object-cover sm:h-72"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.pexels.com/photos/12390124/pexels-photo-12390124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/55 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-gold-300">Milled fresh in Arusha • Lab-tested every batch</p>
              <p className="font-display mt-2 max-w-lg text-2xl font-semibold leading-tight text-white sm:text-4xl">
                You can see the quality. Your birds can taste it.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["No fillers", "No urea", "Aflatoxin-checked maize"].map((b) => (
                  <span key={b} className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-extrabold text-white backdrop-blur-md">
                    ✓ {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image collage */}
          <div className="relative">
            <Reveal variant="left">
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-forest-950/20">
                <img
                  src="https://images.pexels.com/photos/7782993/pexels-photo-7782993.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                  alt="Tanzanian farmer proudly holding a healthy chicken raised on Salevi"
                  className="aspect-[4/4.6] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={200} variant="zoom" className="absolute -bottom-8 -right-2 w-[52%] sm:-right-6">
              <div className="overflow-hidden rounded-3xl border-4 border-cream-50 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/19996701/pexels-photo-19996701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Basket of fresh brown eggs from Salevi-fed layers"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={280} className="absolute -left-2 top-6 sm:-left-5">
              <div className="glass animate-float rounded-2xl border border-white/60 px-4 py-3 shadow-xl">
                <p className="font-display text-2xl font-black text-forest-950">+32%</p>
                <p className="text-[11px] font-extrabold uppercase tracking-wide text-forest-900/60">avg. profit lift</p>
              </div>
            </Reveal>
          </div>

          {/* Copy + comparison */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Real Results"
              title={<>Farmers don't buy feed. <span className="italic text-gold-600">They buy trays of eggs.</span></>}
              sub="We measured 240 farms before and after switching to Salevi. Here's the honest average — verified by our field vets."
            />

            <Reveal delay={140}>
              <div className="mt-8 overflow-hidden rounded-2xl border border-forest-900/10 bg-white shadow-xl shadow-forest-950/[0.07]">
                <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-forest-950 px-4 py-3 text-[11px] font-black uppercase tracking-wider sm:text-xs">
                  <span className="text-cream-50/60">Measure</span>
                  <span className="text-center text-gold-400">Salevi ✓</span>
                  <span className="text-center text-cream-50/50">Ordinary</span>
                </div>
                {comparison.map((r, i) => (
                  <div key={r.label} className={`grid grid-cols-[1.2fr_1fr_1fr] items-center px-4 py-3 text-[13px] sm:text-sm ${i % 2 ? "bg-cream-50/60" : "bg-white"}`}>
                    <span className="font-bold text-forest-950/80">{r.label}</span>
                    <span className="flex items-center justify-center gap-1 text-center font-extrabold text-forest-800">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" /> {r.salevi}
                    </span>
                    <span className="flex items-center justify-center gap-1 text-center font-semibold text-forest-950/45">
                      <XCircle className="h-4 w-4 shrink-0 text-red-400/70" /> {r.ordinary}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={220}>
              <a href="#pricing" className="group mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-forest-900">
                <span className="border-b-2 border-gold-500 pb-0.5">See packs & start your 21-day trial</span>
                <ArrowRight className="h-4 w-4 text-gold-600 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* How to mix steps */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="Dead Simple"
            title={<>Mixing takes <span className="italic text-gold-600">10 minutes.</span> No machine needed.</>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="card-lift relative overflow-hidden rounded-3xl border border-forest-900/10 bg-white p-7">
                  <span className="font-display pointer-events-none absolute -right-2 -top-4 text-[6rem] font-black text-forest-900/[0.05]">{i + 1}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-950 text-gold-400 shadow-lg">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold text-forest-950">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-950/65">{s.desc}</p>
                  {i < 2 && (
                    <span className="absolute right-6 top-1/2 hidden -translate-y-1/2 md:block" aria-hidden="true">
                      {/* connector */}
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
