import { useRef, useState } from "react";
import { ShieldCheck, ArrowRight, Egg, Calculator, Leaf, Award, ChevronDown } from "lucide-react";
import { products, formatPrice } from "../data/products";
import BrandLogo from "./BrandLogo";
import { productOrderLink, WhatsAppIcon } from "./ui";

export default function Hero() {
  const tiltRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouse = (e: React.MouseEvent) => {
    const r = tiltRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -10;
    setTilt({ x, y });
  };

  return (
    <section id="top" className="grain relative overflow-hidden bg-forest-950 pb-16 pt-[150px] sm:pb-24 sm:pt-[170px]">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 -top-40 h-[560px] w-[560px] animate-blob rounded-full bg-forest-600/40 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[500px] w-[500px] animate-blob rounded-full bg-gold-500/25 blur-[130px] [animation-delay:2s]" />
        <div className="absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: "radial-gradient(rgba(212,175,55,0.5) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
          }}
        />
        {/* Farm image wash */}
        <img
          src={`${import.meta.env.BASE_URL}images/farm-background.jpg`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.10] [mask-image:linear-gradient(to_bottom,black_30%,transparent_85%)]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-950/40 to-forest-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <BrandLogo className="hero-in mx-auto mb-5 h-24 w-[180px] rounded-lg bg-white p-2 lg:mx-0" />
            <div className="hero-in inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-gold-500/30 bg-white/[0.06] py-1.5 pl-2 pr-4 text-xs font-bold text-cream-50 shadow-lg backdrop-blur-md sm:text-[13px]">
              <span className="flex items-center gap-1 rounded-full bg-gold-500 px-2.5 py-1 text-[11px] font-black uppercase tracking-wide text-forest-950">
                <Award className="h-3 w-3" /> Salevi Poultry Farm
              </span>
              <span className="text-cream-50/90">Feed and day-old chicks for farmers in Tanzania</span>
            </div>

            <h1
              className="hero-in font-display mt-6 text-balance text-[2.7rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.6rem]"
              style={{ "--hero-delay": "80ms" } as React.CSSProperties}
            >
              Salevi <span className="text-gold-gradient font-black italic">Poultry Farm.</span>
            </h1>

            <p
              className="hero-in mx-auto mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-cream-50/75 sm:text-lg lg:mx-0"
              style={{ "--hero-delay": "160ms" } as React.CSSProperties}
            >
              Poultry concentrates in 50kg bags and day-old chicks for layer, broiler and Kienyeji farmers.
              Feed starts at <strong className="font-bold text-white">{formatPrice(products.layer.price)} per bag</strong> and chicks at{" "}
              <strong className="font-bold text-white">{formatPrice(products.broilerChicks.price)} per chick</strong>.
            </p>

            {/* CTAs */}
            <div
              className="hero-in mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
              style={{ "--hero-delay": "240ms" } as React.CSSProperties}
            >
              <a
                href={productOrderLink(products.layer)}
                target="_blank"
                rel="noreferrer"
                className="btn-magnetic gold-sheen group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 bg-[length:200%_auto] px-7 py-4 text-[15px] font-black text-forest-950 shadow-[0_20px_50px_-12px_rgba(212,175,55,0.6)] ring-1 ring-gold-200/60 sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                ORDER VIA WHATSAPP
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#calculator"
                className="btn-magnetic group flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/[0.07] px-7 py-4 text-[15px] font-bold text-white backdrop-blur-md hover:border-gold-500/40 hover:bg-white/[0.12] sm:w-auto"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500/20 ring-1 ring-gold-500/40 transition-transform group-hover:scale-110">
                  <Calculator className="h-4 w-4 text-gold-300" />
                </span>
                Calculate My Order
              </a>
            </div>

            {/* Trust row */}
            <div
              className="hero-in mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
              style={{ "--hero-delay": "320ms" } as React.CSSProperties}
            >
              <div className="flex items-center gap-2 text-xs font-bold text-cream-50/70">
                <Egg className="h-5 w-5 text-gold-400" />
                Poultry feed and day-old chicks
              </div>
              <span className="hidden h-10 w-px bg-white/15 sm:block" />
              <div className="flex items-center gap-2 text-xs font-bold text-cream-50/70">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                Quality-controlled production
              </div>
            </div>
          </div>

          {/* Visual — product tilt card */}
          <div
            ref={tiltRef}
            onMouseMove={onMouse}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            className="hero-in relative mx-auto w-full max-w-[480px] [perspective:1200px]"
            style={{ "--hero-delay": "200ms" } as React.CSSProperties}
          >
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/25 blur-[90px]" aria-hidden="true" />
            <div
              className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-b from-white/[0.12] to-white/[0.03] p-3 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-transform duration-300 ease-out will-change-transform"
              style={{ transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
            >
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <img src={`${import.meta.env.BASE_URL}images/farm-background.jpg`} alt="Poultry on a farm" className="aspect-[4/4.4] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-transparent to-transparent" />
                {/* Bottom info bar inside image */}
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-2xl border border-white/15 bg-forest-950/55 px-4 py-3 backdrop-blur-xl">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-300">Salevi Poultry Farm</p>
                    <p className="font-display text-lg font-bold text-white">Poultry feed &amp; chicks</p>
                  </div>
                  <a href="#pricing" className="btn-magnetic rounded-xl bg-gold-500 px-4 py-2.5 text-[13px] font-black text-forest-950 shadow-lg shadow-gold-500/30">
                    View Prices
                  </a>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -left-4 top-8 animate-float rounded-2xl border border-white/50 bg-white/85 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-10" aria-hidden="true">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-900 text-gold-400">
                  <Egg className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm font-black text-forest-950">50kg Feed</p>
                  <p className="text-[11px] font-bold text-forest-900/60">Layer &amp; Broiler</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-3 top-[57%] animate-float-delayed rounded-2xl border border-white/50 bg-white/85 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-8" aria-hidden="true">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-500 text-forest-950">
                  <Leaf className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm font-black text-forest-950">Day-old Chicks</p>
                  <p className="text-[11px] font-bold text-forest-900/60">For your farm</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-8 hidden animate-float-slow items-center gap-2 rounded-full border border-white/20 bg-forest-950/70 px-4 py-3 shadow-xl backdrop-blur-xl sm:flex" aria-hidden="true">
              <p className="text-xs font-bold text-white">Salevi Poultry Farm <span className="text-gold-300">| Arusha, Tanzania</span></p>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <a href="#proof" className="mx-auto mt-14 flex w-fit flex-col items-center gap-1 text-[11px] font-bold uppercase tracking-[0.22em] text-cream-50/50 transition-colors hover:text-gold-300" aria-label="Scroll to explore Salevi">
          Explore Salevi
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>

      {/* Bottom curve */}
      <svg viewBox="0 0 1440 70" className="absolute bottom-0 left-0 w-full text-cream-50" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,40 C360,90 1080,-10 1440,40 L1440,70 L0,70 Z" fill="currentColor" />
      </svg>
    </section>
  );
}
