import { ArrowRight, Egg, MessageCircle, PackageCheck } from "lucide-react";
import { Reveal, SectionHeading, WA_LINK } from "./ui";

const services = [
  { title: "Poultry Feeds", description: "Explore layer and broiler concentrates in 50kg bags.", href: "#products", icon: PackageCheck },
  { title: "Day-Old Chicks", description: "Explore Kienyeji, hybrid layer and broiler chick options.", href: "#chicks", icon: Egg },
  { title: "Ordering Support", description: "Ask the Salevi team about products, availability and orders.", href: WA_LINK, icon: MessageCircle },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Our Services" title={<>Solutions for <span className="italic text-gold-600">your poultry farm.</span></>} sub="Explore Salevi products and contact our team for ordering information." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 100} className="h-full">
              <a href={service.href} target={service.href.startsWith("https://") ? "_blank" : undefined} rel={service.href.startsWith("https://") ? "noreferrer" : undefined} className="card-lift group flex h-full flex-col rounded-3xl border border-forest-900/10 bg-cream-50 p-6 sm:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-950 text-gold-400"><service.icon className="h-6 w-6" /></span>
                <h3 className="mt-5 text-lg font-extrabold text-forest-950">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-950/65">{service.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-extrabold text-forest-800">Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}