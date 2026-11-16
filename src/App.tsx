import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { WA_LINK, WhatsAppIcon } from "./components/ui";
import { ArrowUp } from "lucide-react";
import { cn } from "./utils/cn";

function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Salevi on WhatsApp"
        className="group fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1FA855] text-white shadow-[0_15px_40px_-10px_rgba(31,168,85,0.7)] transition-all duration-300 hover:scale-110 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#1FA855]" aria-hidden="true" />
        <WhatsAppIcon className="relative h-7 w-7" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xl bg-forest-950 px-3.5 py-2 text-[13px] font-bold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 sm:block">
          Chat with a vet — replies in ~10 min
        </span>
        <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 text-[10px] font-black text-forest-950 ring-2 ring-cream-50">
          1
        </span>
      </a>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "fixed bottom-20 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-forest-900/10 bg-white/90 text-forest-950 shadow-xl backdrop-blur-md transition-all duration-500 hover:bg-forest-950 hover:text-white sm:bottom-6 sm:left-6",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest-900/10 bg-white/92 px-3 py-2.5 backdrop-blur-xl sm:hidden" style={{ background: "rgba(255,251,240,0.94)" }}>
        <div className="grid grid-cols-2 gap-2">
          <a href="tel:+255766679472" className="flex items-center justify-center gap-1.5 rounded-xl border-2 border-forest-950 py-3 text-sm font-black text-forest-950">
            Call 0766 679 472
          </a>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 rounded-xl bg-[#1FA855] py-3 text-sm font-black text-white shadow-lg">
            <WhatsAppIcon className="h-4 w-4" /> Order Now
          </a>
        </div>
      </div>
    </>
  );
}

export default function App() {
  useEffect(() => {
    // Ensure reveal elements above the fold in hero animate in
    document.querySelectorAll("#top .reveal").forEach((el) => {
      requestAnimationFrame(() => el.classList.add("is-visible"));
    });
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 font-sans text-forest-950 antialiased">
      <a href="#products" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-gold-500 focus:px-4 focus:py-2 focus:font-bold focus:text-forest-950">
        Skip to products
      </a>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Showcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingButtons />
      {/* Spacer for sticky mobile CTA */}
      <div className="h-[68px] sm:hidden" aria-hidden="true" />
    </div>
  );
}
