import { BadgeCheck, Check, Headset, PackageCheck } from "lucide-react";
import { chickProductKeys, formatPrice, productKeys, products } from "../data/products";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading, productOrderLink, WhatsAppIcon } from "./ui";

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Product Pricing"
          title={<>Straightforward prices. <span className="italic text-gold-600">Built for your flock.</span></>}
          sub="Concentrates are priced per 50kg bag; day-old chicks are priced individually."
        />
        <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-5 md:grid-cols-2">
          {productKeys.map((key, index) => {
            const product = products[key];
            const featured = key === "layer";
            return (
              <Reveal key={key} delay={index * 120} className="h-full">
                <article className={cn("card-lift relative flex h-full flex-col rounded-[1.8rem] p-7 sm:p-8", featured ? "border border-gold-500/40 bg-forest-950 text-white shadow-[0_35px_80px_-25px_rgba(11,59,31,0.6)]" : "border border-forest-900/10 bg-white")}>
                  <p className={cn("text-xs font-black uppercase tracking-[0.18em]", featured ? "text-gold-300" : "text-gold-700")}>For {product.audience}</p>
                  <h3 className={cn("font-display mt-3 text-2xl font-bold", featured ? "text-white" : "text-forest-950")}>{product.name}</h3>
                  <p className={cn("mt-2 text-sm font-semibold", featured ? "text-cream-50/65" : "text-forest-900/60")}>{product.description}</p>
                  <p className={cn("font-display mt-6 text-[2.4rem] font-black leading-none tracking-tight sm:text-[2.7rem]", featured ? "text-gold-gradient" : "text-forest-950")}>{formatPrice(product.price)}</p>
                  <p className={cn("mt-2 text-sm font-bold", featured ? "text-cream-50/65" : "text-forest-900/55")}>per 50kg bag</p>
                  <ul className="mt-7 flex-1 space-y-3">
                    {["50kg bag", `Developed for ${product.audience.toLowerCase()}`, "Proprietary concentrate formulation"].map((feature) => (
                      <li key={feature} className={cn("flex items-start gap-2.5 text-sm font-semibold", featured ? "text-cream-50/85" : "text-forest-950/75")}>
                        <span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", featured ? "bg-gold-500/20 ring-1 ring-gold-500/40" : "bg-emerald-600/10 ring-1 ring-emerald-600/25")}><Check className={cn("h-3 w-3", featured ? "text-gold-300" : "text-emerald-700")} /></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={productOrderLink(product)} target="_blank" rel="noreferrer" className={cn("btn-magnetic mt-7 flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-black transition-all", featured ? "gold-sheen bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-forest-950 shadow-lg shadow-gold-500/30" : "border-2 border-forest-950 bg-transparent text-forest-950 hover:bg-forest-950 hover:text-white")}>
                    <WhatsAppIcon className="h-4 w-4" /> ORDER VIA WHATSAPP
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-5xl">
            <h3 className="font-display text-2xl font-bold text-forest-950">Day-old chicks</h3>
            <div className="mt-4 divide-y divide-forest-900/10 border-y border-forest-900/10">
              {chickProductKeys.map((key) => {
                const product = products[key];
                return (
                  <div key={key} className="flex flex-wrap items-center justify-between gap-3 py-5">
                    <div><p className="font-extrabold text-forest-950">{product.name}</p><p className="mt-1 text-sm font-semibold text-forest-900/65">{formatPrice(product.price)} per chick</p></div>
                    <a href={productOrderLink(product)} target="_blank" rel="noreferrer" className="btn-magnetic inline-flex items-center gap-2 rounded-xl bg-forest-900 px-4 py-3 text-xs font-black text-white hover:bg-forest-700"><WhatsAppIcon className="h-4 w-4" /> ORDER VIA WHATSAPP</a>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-8 grid gap-3 rounded-3xl border border-emerald-700/20 bg-emerald-50/70 p-5 sm:grid-cols-3 sm:gap-5 sm:p-7">
            {[
              { icon: PackageCheck, title: "50kg Bags", desc: "Two specialized poultry concentrates." },
              { icon: BadgeCheck, title: "Salevi Quality", desc: "Quality-controlled poultry nutrition." },
              { icon: Headset, title: "Order Support", desc: "Contact our team about availability and delivery." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-white shadow-md"><item.icon className="h-5 w-5" /></span>
                <div><p className="text-sm font-extrabold text-forest-950">{item.title}</p><p className="text-[13px] font-medium text-forest-900/65">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={220}><p className="mt-6 text-center text-[13px] font-bold text-forest-900/55">Contact Salevi on WhatsApp for availability and delivery details.</p></Reveal>
      </div>
    </section>
  );
}
