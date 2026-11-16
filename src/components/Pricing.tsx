import { Check, Flame, Truck, GraduationCap, Headset, BadgeCheck } from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading, WA_LINK, WhatsAppIcon } from "./ui";

const plans = [
  {
    name: "Starter Trial",
    desc: "Perfect to prove it on 50–150 birds",
    price: "185,000",
    unit: "1 × 50kg bag",
    cta: "Start Trial",
    features: ["1 bag Elite Layer / Broiler / Kienyeji", "Free mixing chart + recipe card", "WhatsApp vet support (7 days)", "Lay-improvement guide", "Pickup: Arusha HQ or agrovet"],
    featured: false,
  },
  {
    name: "Growth Pack",
    desc: "For 200–800 birds. Best value + free delivery",
    price: "895,000",
    unit: "5 × 50kg bags",
    save: "SAVE TZS 30,000",
    cta: "Order Growth Pack",
    features: [
      "5 bags — mix formulas freely",
      "FREE delivery Arusha & Moshi",
      "FREE on-farm mixing training",
      "Priority vet hotline (30 days)",
      "Free 1kg Mycotoxin Guard booster",
      "Pay 50% now, 50% on delivery",
    ],
    featured: true,
  },
  {
    name: "Commercial / Agrovet",
    desc: "20+ bags. Distributor margins up to 12%",
    price: "Custom",
    unit: "20+ bags / monthly",
    cta: "Get Dealer Quote",
    features: [
      "Distributor pricing (up to 12% off)",
      "Nationwide transport arranged",
      "Branded shop banner + charts",
      "Staff training & demo days",
      "30-day credit (approved dealers)",
      "Dedicated account manager",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-cream-50 py-20 sm:py-28">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Simple Pricing"
          title={<>Start small. <span className="italic text-gold-600">Scale when trays overflow.</span></>}
          sub="No contracts. No hidden fees. Every pack is backed by our 21-day lay-improvement guarantee — love the results or we refund the difference."
        />

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120} className="h-full">
              <article
                className={cn(
                  "card-lift relative flex h-full flex-col rounded-[1.8rem] p-7 sm:p-8",
                  plan.featured
                    ? "border border-gold-500/40 bg-forest-950 text-white shadow-[0_35px_80px_-25px_rgba(11,59,31,0.6)] lg:scale-[1.045]"
                    : "border border-forest-900/10 bg-white"
                )}
              >
                {plan.featured && (
                  <>
                    <div className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-4 py-1.5 text-[11px] font-black uppercase tracking-wider text-forest-950 shadow-lg">
                      <Flame className="h-3.5 w-3.5" /> Most Popular — {plan.save}
                    </div>
                    <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gold-500/20 blur-3xl" aria-hidden="true" />
                  </>
                )}
                <h3 className={cn("font-display text-xl font-bold", plan.featured ? "text-white" : "text-forest-950")}>{plan.name}</h3>
                <p className={cn("mt-1 text-sm font-semibold", plan.featured ? "text-cream-50/60" : "text-forest-900/60")}>{plan.desc}</p>

                <div className="mt-5 flex items-end gap-2">
                  {plan.price !== "Custom" && <span className={cn("pb-1.5 text-xs font-black uppercase", plan.featured ? "text-gold-300" : "text-gold-700")}>TZS</span>}
                  <span className={cn("font-display text-[2.6rem] font-black leading-none tracking-tight", plan.featured ? "text-gold-gradient" : "text-forest-950")}>
                    {plan.price}
                  </span>
                </div>
                <p className={cn("mt-1 text-[13px] font-bold", plan.featured ? "text-cream-50/60" : "text-forest-900/55")}>{plan.unit}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className={cn("flex items-start gap-2.5 text-[13.5px] font-semibold", plan.featured ? "text-cream-50/85" : "text-forest-950/75")}>
                      <span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", plan.featured ? "bg-gold-500/20 ring-1 ring-gold-500/40" : "bg-emerald-600/10 ring-1 ring-emerald-600/25")}>
                        <Check className={cn("h-3 w-3", plan.featured ? "text-gold-300" : "text-emerald-700")} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "btn-magnetic mt-7 flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-black transition-all",
                    plan.featured
                      ? "gold-sheen bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-forest-950 shadow-lg shadow-gold-500/30"
                      : "border-2 border-forest-950 bg-transparent text-forest-950 hover:bg-forest-950 hover:text-white"
                  )}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {plan.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Guarantee strip */}
        <Reveal delay={180}>
          <div className="mt-8 grid gap-3 rounded-3xl border border-emerald-700/20 bg-emerald-50/70 p-5 sm:grid-cols-3 sm:gap-5 sm:p-7">
            {[
              { icon: BadgeCheck, title: "21-Day Guarantee", desc: "No lay improvement? We refund the difference." },
              { icon: Truck, title: "Fast Delivery", desc: "Same-day Arusha • 24–72h nationwide." },
              { icon: Headset, title: "Free Vet Support", desc: "Real poultry vets on WhatsApp, 7am–8pm." },
            ].map((g) => (
              <div key={g.title} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-white shadow-md">
                  <g.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-forest-950">{g.title}</p>
                  <p className="text-[13px] font-medium text-forest-900/65">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-6 flex items-center justify-center gap-2 text-center text-[13px] font-bold text-forest-900/55">
            <GraduationCap className="h-4 w-4 text-gold-600" />
            Prices include VAT & mixing chart. M-Pesa, Tigo Pesa, bank & cash accepted. Halal & TBS certified.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
