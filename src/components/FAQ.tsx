import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { formatPrice, products } from "../data/products";
import { Reveal, SectionHeading, WA_LINK } from "./ui";

const faqs = [
  { q: "Which Salevi concentrates are available?", a: "Salevi Layer Concentrate is for layer chickens, and Salevi Broiler Concentrate is for broiler chickens. Both products are available in 50kg bags." },
  { q: "What does each 50kg bag cost?", a: `${products.layer.name} is ${formatPrice(products.layer.price)} per 50kg bag. ${products.broiler.name} is ${formatPrice(products.broiler.price)} per 50kg bag.` },
  { q: "Which day-old chicks do you offer?", a: `${products.ruster.name} costs ${formatPrice(products.ruster.price)}, ${products.hybrid.name} costs ${formatPrice(products.hybrid.price)}, and ${products.broilerChicks.name} costs ${formatPrice(products.broilerChicks.price)}. Each price is per chick.` },
  { q: "How do I choose the right product?", a: "Choose Layer for layer chickens and Broiler for broiler chickens. Contact our team if you need help choosing a product for your flock." },
  { q: "How should I use the concentrate?", a: "Follow the guidance on the product packaging and contact Salevi for advice appropriate to your flock." },
  { q: "Can I arrange delivery?", a: "Contact Salevi on WhatsApp with your location and order details to confirm delivery availability and costs." },
  { q: "How should I store the concentrate?", a: "Keep the bag in a cool, dry, well-ventilated place and follow the storage instructions on the packaging." },
  { q: "Can I order more than one bag or chick?", a: "Yes. Let our team know the product and quantity you need when you contact us on WhatsApp." },
  { q: "How do I become a dealer or ask about payment?", a: "Send your shop details or payment questions to our team on WhatsApp for the latest information." },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Questions? Answered." title={<>Everything farmers <span className="italic text-gold-600">ask us.</span></>} sub="Need more information? The Salevi team is available on WhatsApp." />
        <div className="mt-10 space-y-3">
          {faqs.map((item, index) => (
            <Reveal key={item.q} delay={Math.min(index * 60, 300)}>
              <details className="faq-item group rounded-2xl border border-forest-900/10 bg-cream-50 transition-all duration-300 open:border-gold-500/40 open:bg-white open:shadow-[0_20px_50px_-20px_rgba(11,59,31,0.25)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"><span className="text-[15px] font-extrabold text-forest-950 sm:text-base">{item.q}</span><span className="faq-chevron flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-950 text-gold-400 transition-transform duration-300 group-open:rotate-180"><ChevronDown className="h-4.5 w-4.5" /></span></summary>
                <div className="faq-answer"><div className="overflow-hidden"><p className="px-5 pb-6 text-[14.5px] leading-relaxed text-forest-950/70 sm:px-7">{item.a}</p></div></div>
              </details>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl bg-forest-950 px-6 py-6 text-center sm:flex-row sm:gap-4">
            <p className="text-sm font-bold text-white">Have another question? Contact Salevi.</p>
            <div className="flex flex-wrap justify-center gap-2.5">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-magnetic flex items-center gap-2 rounded-xl bg-[#1FA855] px-5 py-2.5 text-sm font-extrabold text-white"><MessageCircle className="h-4 w-4" /> WhatsApp Us</a>
              <a href="tel:+255766679472" className="btn-magnetic flex items-center gap-2 rounded-xl border border-white/25 px-5 py-2.5 text-sm font-extrabold text-white hover:bg-white/10"><Phone className="h-4 w-4" /> 0766 679 472</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
