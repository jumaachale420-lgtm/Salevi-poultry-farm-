import { useState } from "react";
import { ChevronLeft, ChevronRight, Egg, HeartHandshake, Leaf, MessageCircle, PackageCheck, Sparkles } from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading, WA_LINK } from "./ui";

const highlights = [
  { title: "For layer farmers", text: "Salevi Layer Concentrate is a premium nutrition solution developed for layer chickens.", tag: "Layer", icon: Egg },
  { title: "For broiler farmers", text: "Salevi Broiler Concentrate is a quality nutrition solution developed for broiler chickens.", tag: "Broiler", icon: Leaf },
  { title: "Focused on quality", text: "Quality-controlled production supports our approach to poultry nutrition.", tag: "Quality", icon: BadgeIcon },
  { title: "Simple product choices", text: "Choose the concentrate designed for your flock, available in a 50kg bag.", tag: "50kg bags", icon: PackageCheck },
  { title: "Support for your order", text: "Contact Salevi to discuss product availability, ordering and delivery.", tag: "Get in touch", icon: HeartHandshake },
  { title: "Share your experience", text: "We welcome your feedback and would love to hear about your poultry farm.", tag: "Your story", icon: MessageCircle },
];

function BadgeIcon({ className }: { className?: string }) {
  return <Sparkles className={className} />;
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(highlights.length / perPage);
  const visible = highlights.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[110px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="For Farmers" title={<>Poultry nutrition with <span className="italic text-gold-600">your farm in mind.</span></>} sub="Discover the Salevi approach to specialized poultry concentrates and personal support." />
        <Reveal delay={100}><p className="mx-auto mt-8 max-w-xl text-center text-sm font-semibold text-forest-900/60">Have a question or a story to share? <a href={WA_LINK} target="_blank" rel="noreferrer" className="font-extrabold text-forest-900 underline decoration-gold-500 underline-offset-4">Talk to Salevi on WhatsApp.</a></p></Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5" aria-live="polite">
          {visible.map((item, index) => (
            <Reveal key={item.title} delay={index * 110}>
              <article className="card-lift relative flex h-full flex-col rounded-3xl border border-forest-900/10 bg-cream-50 p-6 sm:p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest-950 text-gold-400"><item.icon className="h-5 w-5" /></span>
                <h3 className="mt-4 text-lg font-extrabold text-forest-950">{item.title}</h3>
                <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-forest-950/70">{item.text}</p>
                <span className="mt-5 w-fit rounded-full bg-forest-950 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-gold-300">{item.tag}</span>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button onClick={() => setPage((page - 1 + pages) % pages)} aria-label="Previous highlights" className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-900/15 bg-white text-forest-900 shadow-sm transition-all hover:bg-forest-950 hover:text-white"><ChevronLeft className="h-5 w-5" /></button>
          <div className="flex gap-2">
            {Array.from({ length: pages }).map((_, index) => <button key={index} onClick={() => setPage(index)} aria-label={`Go to highlights page ${index + 1}`} aria-current={index === page ? "true" : undefined} className={cn("h-2.5 rounded-full transition-all duration-300", index === page ? "w-8 bg-forest-950" : "w-2.5 bg-forest-900/20 hover:bg-forest-900/40")} />)}
          </div>
          <button onClick={() => setPage((page + 1) % pages)} aria-label="Next highlights" className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-900/15 bg-white text-forest-900 shadow-sm transition-all hover:bg-forest-950 hover:text-white"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>
    </section>
  );
}
