import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { Reveal, SectionHeading, WA_LINK } from "./ui";

const faqs = [
  {
    q: "How exactly do I mix Salevi Concentrate?",
    a: "Very simple: for Elite Layer, mix 35kg Salevi + 55kg ground maize + 10kg bran (wheat/rice) to make 100kg of complete feed. Mix dry for 5 minutes until uniform. Every bag includes a laminated recipe card, and our team offers free on-farm mixing training for 5+ bags in Arusha/Moshi — or video guidance on WhatsApp anywhere.",
  },
  {
    q: "How much feed does each bird need per day?",
    a: "Layers: 115–125g per bird per day from 18 weeks. Broilers: about 4.2kg total per bird over 42 days (ad-lib feeding). Kienyeji: 80–100g supplement plus scavenging. A 500-layer farm uses roughly 4–5 bags of concentrate per month.",
  },
  {
    q: "How fast will I see results?",
    a: "Most farmers report visibly bigger yolks and stronger shells within 7–10 days, and a measurable lay-rate lift within 14–21 days — which is why we back every pack with a 21-day improvement guarantee. Broiler weight differences show clearly by week 4–5.",
  },
  {
    q: "Do you deliver outside Arusha? How much?",
    a: "Yes — we deliver nationwide via trusted transporters. Delivery is FREE in Arusha & Moshi for 5+ bags. For Dodoma, Mwanza, Mbeya, Tanga and Dar es Salaam, cost is shared and quoted upfront on WhatsApp (typically TZS 8,000–15,000 per bag). Dealer orders of 20+ bags get arranged wholesale transport.",
  },
  {
    q: "Can I use Salevi for kienyeji (local) chickens?",
    a: "Absolutely — our Kienyeji Improver 30% is made exactly for that. Improved kienyeji hens jump from ~80 to 220+ eggs per year, and cocks reach 2kg in about 5 months instead of 8. For pure local birds under full scavenging, feed as a supplement (50–80g/bird/day).",
  },
  {
    q: "How should I store the concentrate?",
    a: "Store bags off the floor on pallets in a cool, dry, ventilated store — away from direct sun and walls. Use within 3 months of manufacture (date printed on every bag). Once mixed into complete feed, use within 2–3 weeks for peak freshness.",
  },
  {
    q: "What payment methods do you accept?",
    a: "M-Pesa, Tigo Pesa, Airtel Money, bank transfer and cash on pickup. Growth Pack (5 bags) can be split 50% now / 50% on delivery. Approved agrovet dealers get up to 30-day credit terms.",
  },
  {
    q: "How do I become a Salevi dealer / agrovet partner?",
    a: "Start with 20 bags and you unlock distributor pricing (up to 12% margin), a branded shop banner, staff training and a dedicated account manager. Message us on WhatsApp with your shop name + location and we'll send the dealer pack within 24 hours.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Questions? Answered."
          title={<>Everything farmers <span className="italic text-gold-600">ask us.</span></>}
          sub="Still unsure? Our poultry vets reply on WhatsApp in under 10 minutes, 7 days a week."
        />

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={Math.min(i * 60, 300)}>
              <details className="faq-item group rounded-2xl border border-forest-900/10 bg-cream-50 transition-all duration-300 open:border-gold-500/40 open:bg-white open:shadow-[0_20px_50px_-20px_rgba(11,59,31,0.25)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left sm:px-7">
                  <span className="text-[15px] font-extrabold text-forest-950 sm:text-base">{f.q}</span>
                  <span className="faq-chevron flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-950 text-gold-400 transition-transform duration-300 group-open:rotate-180">
                    <ChevronDown className="h-4.5 w-4.5" />
                  </span>
                </summary>
                <div className="faq-answer">
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-[14.5px] leading-relaxed text-forest-950/70 sm:px-7">{f.a}</p>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl bg-forest-950 px-6 py-6 text-center sm:flex-row sm:gap-4">
            <p className="text-sm font-bold text-white">Have a different question? Talk to a real vet —</p>
            <div className="flex gap-2.5">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-magnetic flex items-center gap-2 rounded-xl bg-[#1FA855] px-5 py-2.5 text-sm font-extrabold text-white">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a href="tel:+255766679472" className="btn-magnetic flex items-center gap-2 rounded-xl border border-white/25 px-5 py-2.5 text-sm font-extrabold text-white hover:bg-white/10">
                <Phone className="h-4 w-4" /> 0766 679 472
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
