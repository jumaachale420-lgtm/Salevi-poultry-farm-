import { ArrowRight } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { Reveal, SectionHeading } from "./ui";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-forest-100/70 blur-[100px]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <BrandLogo className="mb-6 h-28 w-[210px]" />
          <SectionHeading
            align="left"
            eyebrow="About Salevi Poultry Farm"
            title={<>Poultry farming, <span className="italic text-gold-600">with farmers in mind.</span></>}
            sub="Based in Arusha, Tanzania, Salevi Poultry Farm offers poultry concentrates and day-old chicks for layer, broiler and Kienyeji farmers."
          />
          <Reveal delay={180}>
            <a href="#services" className="group mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-forest-900">
              <span className="border-b-2 border-gold-500 pb-0.5">Explore our services</span>
              <ArrowRight className="h-4 w-4 text-gold-600 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
        <Reveal variant="right">
          <div className="overflow-hidden rounded-3xl shadow-xl shadow-forest-950/10">
            <img src={`${import.meta.env.BASE_URL}images/farmer-chicken.jpg`} alt="A farmer holding a chicken" className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}