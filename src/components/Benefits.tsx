import { ArrowRight, CheckCircle2, MessageCircle, PackageCheck, ShoppingBag } from "lucide-react";
import { formatPrice, productKeys, products } from "../data/products";
import { Reveal, SectionHeading, WA_LINK } from "./ui";

const steps = [
  { icon: ShoppingBag, title: "1. Choose your product", desc: "Select a Salevi poultry concentrate or the day-old chicks you need." },
  { icon: PackageCheck, title: "2. Plan your order", desc: "Concentrates are in 50kg bags; chicks are priced individually." },
  { icon: MessageCircle, title: "3. Contact Salevi", desc: "Send your order on WhatsApp and ask our team about availability and delivery." },
];

export default function Benefits() {
  return (
    <section id="results" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal variant="zoom" className="mb-14">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-forest-950/25">
            <img src={`${import.meta.env.BASE_URL}images/farm-background.jpg`} alt="Poultry on a farm" className="h-56 w-full object-cover sm:h-72" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/55 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-gold-300">Salevi Poultry Farm | Arusha, Tanzania</p>
              <p className="font-display mt-2 max-w-lg text-2xl font-semibold leading-tight text-white sm:text-4xl">Feed and chicks for your poultry farm.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Layer concentrate", "Broiler concentrate", "Day-old chicks"].map((label) => <span key={label} className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-extrabold text-white backdrop-blur-md">{label}</span>)}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <Reveal variant="left">
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-forest-950/20">
                <img src={`${import.meta.env.BASE_URL}images/farmer-chicken.jpg`} alt="A farmer holding a chicken" className="aspect-[4/4.6] w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={200} variant="zoom" className="absolute -bottom-8 -right-2 w-[52%] sm:-right-6">
              <div className="overflow-hidden rounded-3xl border-4 border-cream-50 shadow-2xl"><img src={`${import.meta.env.BASE_URL}images/farm-eggs.jpg`} alt="A basket of brown eggs" className="aspect-square w-full object-cover" loading="lazy" /></div>
            </Reveal>
            <Reveal delay={280} className="absolute -left-2 top-6 sm:-left-5">
              <div className="glass animate-float rounded-2xl border border-white/60 px-4 py-3 shadow-xl"><p className="font-display text-2xl font-black text-forest-950">50kg</p><p className="text-[11px] font-extrabold uppercase tracking-wide text-forest-900/60">per bag</p></div>
            </Reveal>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="The Salevi Difference" title={<>Poultry nutrition, <span className="italic text-gold-600">made with purpose.</span></>} sub="Salevi offers specialized concentrate solutions for layer and broiler farmers, with quality and consistent performance in mind." />
            <Reveal delay={140}>
              <div className="mt-8 overflow-hidden rounded-2xl border border-forest-900/10 bg-white shadow-xl shadow-forest-950/[0.07]">
                <div className="grid grid-cols-[1.3fr_0.7fr_1fr] bg-forest-950 px-4 py-3 text-[11px] font-black uppercase tracking-wider sm:text-xs"><span className="text-cream-50/60">Product</span><span className="text-center text-cream-50/60">For</span><span className="text-center text-gold-400">50kg bag</span></div>
                {productKeys.map((key, index) => {
                  const product = products[key];
                  return <div key={key} className={`grid grid-cols-[1.3fr_0.7fr_1fr] items-center px-4 py-4 text-[13px] sm:text-sm ${index ? "bg-cream-50/60" : "bg-white"}`}><span className="font-bold text-forest-950/80">{product.name}</span><span className="text-center font-semibold text-forest-950/65">{key === "layer" ? "Layers" : "Broilers"}</span><span className="flex items-center justify-center gap-1 text-center font-extrabold text-forest-800"><CheckCircle2 className="hidden h-4 w-4 shrink-0 text-emerald-600 sm:block" />{formatPrice(product.price)}</span></div>;
                })}
              </div>
            </Reveal>
            <Reveal delay={220}><a href="#pricing" className="group mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-forest-900"><span className="border-b-2 border-gold-500 pb-0.5">See product prices and order</span><ArrowRight className="h-4 w-4 text-gold-600 transition-transform group-hover:translate-x-1" /></a></Reveal>
          </div>
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="Ordering With Salevi" title={<>Three simple steps <span className="italic text-gold-600">to your order.</span></>} />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 120}>
                <div className="card-lift relative overflow-hidden rounded-3xl border border-forest-900/10 bg-white p-7">
                  <span className="font-display pointer-events-none absolute -right-2 -top-4 text-[6rem] font-black text-forest-900/[0.05]">{index + 1}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-950 text-gold-400 shadow-lg"><step.icon className="h-6 w-6" /></span>
                  <h3 className="mt-5 text-lg font-extrabold text-forest-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-950/65">{step.desc}</p>
                  {index === 2 && <a href={WA_LINK} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-forest-800">Chat with Salevi <ArrowRight className="h-4 w-4" /></a>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
