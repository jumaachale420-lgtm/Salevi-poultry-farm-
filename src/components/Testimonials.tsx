import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading } from "./ui";

const testimonials = [
  {
    name: "Mama Neema Kimaro",
    role: "500 Layers • Arusha",
    img: "https://images.pexels.com/photos/33993456/pexels-photo-33993456.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    quote: "My lay rate jumped from 68% to 91% in just three weeks. I now collect 15 trays daily instead of 11. Salevi paid for itself in the first month.",
    badge: "+4 trays / day",
    stars: 5,
  },
  {
    name: "Juma Achale",
    role: "2,000 Broilers • Moshi",
    img: "https://images.pexels.com/photos/7782993/pexels-photo-7782993.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    quote: "I sold at 38 days with 2.4kg average — buyers now call ME. Mortality dropped to almost zero. The mixing training alone was worth it.",
    badge: "2.4kg in 38 days",
    stars: 5,
  },
  {
    name: "Ester Mushi",
    role: "300 Kienyeji • Kilimanjaro",
    img: "https://images.pexels.com/photos/32413927/pexels-photo-32413927.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    quote: "My improved kienyeji now lay like layers but the eggs still taste like kienyeji. Customers pay premium. Nimefungua banda la pili!",
    badge: "220 eggs/hen/year",
    stars: 5,
  },
  {
    name: "Baraka Lyimo",
    role: "Agrovet Dealer • Dodoma",
    img: "https://images.pexels.com/photos/40566516/pexels-photo-40566516.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    quote: "As an agrovet, I stock what moves. Salevi moves. Farmers come back asking by name and bring their neighbours. Margins are the best I get.",
    badge: "120 bags / month",
    stars: 5,
  },
  {
    name: "Amina Said",
    role: "150 Layers • Tanga",
    img: "https://images.pexels.com/photos/20118295/pexels-photo-20118295.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    quote: "I started with one bag to test. Cracked eggs almost disappeared and yolks became deep orange. My mama-ntilie customers noticed immediately.",
    badge: "0% cracks",
    stars: 5,
  },
  {
    name: "David Mwakalinga",
    role: "1,000 Layers • Mbeya",
    img: "https://images.pexels.com/photos/35877061/pexels-photo-35877061.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    quote: "Delivery to Mbeya was fast and the vet support on WhatsApp is real — they helped me fix my lighting program free. Production up 28%.",
    badge: "+28% production",
    stars: 5,
  },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[110px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Farmer Stories"
          title={<>Loved from Arusha <span className="italic text-gold-600">to Mbeya.</span></>}
          sub="4.9/5 from 1,200+ verified reviews. Real farmers, real trays, real bank deposits."
        />

        {/* Rating summary */}
        <Reveal delay={100}>
          <div className="mx-auto mt-8 flex w-fit flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-forest-900/10 bg-cream-50 px-8 py-4 shadow-sm">
            <div className="text-center">
              <p className="font-display text-3xl font-black text-forest-950">4.9</p>
              <div className="flex justify-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />)}
              </div>
            </div>
            <span className="hidden h-10 w-px bg-forest-900/10 sm:block" />
            <div className="text-center sm:text-left">
              <p className="text-sm font-extrabold text-forest-950">96% would recommend</p>
              <p className="text-xs font-semibold text-forest-900/60">to a fellow farmer</p>
            </div>
            <span className="hidden h-10 w-px bg-forest-900/10 sm:block" />
            <div className="text-center sm:text-left">
              <p className="text-sm font-extrabold text-forest-950">78% reorder</p>
              <p className="text-xs font-semibold text-forest-900/60">within 30 days</p>
            </div>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
          {visible.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <figure className="card-lift relative flex h-full flex-col rounded-3xl border border-forest-900/10 bg-cream-50 p-6 sm:p-7">
                <Quote className="absolute right-6 top-6 h-8 w-8 text-gold-500/25" aria-hidden="true" />
                <div className="flex gap-0.5" aria-label={`${t.stars} stars`}>
                  {Array.from({ length: t.stars }).map((_, s) => <Star key={s} className="h-4 w-4 fill-gold-500 text-gold-500" />)}
                </div>
                <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-forest-950/80">“{t.quote}”</blockquote>
                <span className="mt-4 w-fit rounded-full bg-forest-950 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-gold-300">{t.badge}</span>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-forest-900/10 pt-4">
                  <img src={t.img} alt={t.name} className="h-11 w-11 rounded-full object-cover ring-2 ring-gold-500/40" loading="lazy" />
                  <div>
                    <p className="flex items-center gap-1 text-sm font-extrabold text-forest-950">
                      {t.name} <BadgeCheck className="h-4 w-4 text-emerald-600" />
                    </p>
                    <p className="text-xs font-bold text-forest-900/55">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((page - 1 + pages) % pages)}
            aria-label="Previous testimonials"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-900/15 bg-white text-forest-900 shadow-sm transition-all hover:bg-forest-950 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={cn("h-2.5 rounded-full transition-all duration-300", i === page ? "w-8 bg-forest-950" : "w-2.5 bg-forest-900/20 hover:bg-forest-900/40")}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((page + 1) % pages)}
            aria-label="Next testimonials"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-900/15 bg-white text-forest-900 shadow-sm transition-all hover:bg-forest-950 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
