import { ArrowRight } from "lucide-react";
import { chickProductKeys, formatPrice, products } from "../data/products";
import ProductBag from "./ProductBag";
import { productOrderLink, Reveal, SectionHeading, WhatsAppIcon } from "./ui";

export default function Chicks() {
  return (
    <section id="chicks" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-gold-500/10 blur-[100px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Day-Old Chicks"
          title={<>The right start for <span className="italic text-gold-600">your poultry farm.</span></>}
          sub="Explore Salevi's day-old Kienyeji, hybrid layer and broiler chicks. All prices are per chick."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {chickProductKeys.map((key, index) => {
            const product = products[key];
            return (
              <Reveal key={key} delay={index * 100} className="h-full">
                <article className="card-lift flex h-full flex-col rounded-3xl border border-forest-900/10 bg-white p-5 shadow-[0_12px_35px_-25px_rgba(11,59,31,0.45)] sm:p-6">
                  <ProductBag product={product} className="aspect-[4/3] w-full rounded-2xl" />
                  <p className="mt-5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-700">Day-old chicks</p>
                  <h3 className="font-display mt-2 text-xl font-bold text-forest-950">{product.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-950/65">{product.description}</p>
                  <p className="font-display mt-5 text-2xl font-black text-forest-950">{formatPrice(product.price)} <span className="font-sans text-sm font-bold text-forest-900/60">/ chick</span></p>
                  <a href={productOrderLink(product)} target="_blank" rel="noreferrer" className="btn-magnetic mt-5 flex items-center justify-center gap-2 rounded-xl bg-forest-900 px-4 py-3.5 text-xs font-black text-white hover:bg-forest-700">
                    <WhatsAppIcon className="h-4 w-4" /> ORDER VIA WHATSAPP <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}