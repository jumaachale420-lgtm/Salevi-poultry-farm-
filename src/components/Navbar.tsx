import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronRight, BadgeCheck, Truck } from "lucide-react";
import { cn } from "../utils/cn";
import { WA_LINK, WhatsAppIcon } from "./ui";

const links = [
  { label: "Why Salevi", href: "#features" },
  { label: "Products", href: "#products" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open ]);

  return (
    <>
      {/* Top announcement bar */}
      <div className="fixed inset-x-0 top-0 z-[60] flex items-center justify-center gap-2 bg-forest-950 px-4 py-2 text-center text-[12px] font-semibold tracking-wide text-cream-50 sm:text-[13px]">
        <Truck className="h-3.5 w-3.5 shrink-0 text-gold-400" />
        <p className="truncate">
          <span className="text-gold-300">FREE delivery</span> in Arusha & Moshi on 5+ bags this week
          <span className="ml-2 hidden rounded-full bg-gold-500/20 px-2 py-0.5 text-gold-300 sm:inline-block">Ends Sunday</span>
        </p>
      </div>

      <header
        className={cn(
          "fixed inset-x-0 top-[33px] z-50 transition-all duration-500",
          scrolled ? "py-2" : "py-3"
        )}
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-5">
          <nav
            aria-label="Primary"
            className={cn(
              "flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-5",
              scrolled
                ? "glass border-white/60 shadow-[0_18px_50px_-20px_rgba(11,59,31,0.45)]"
                : "border-white/25 bg-forest-950/35 shadow-lg shadow-forest-950/10 backdrop-blur-xl"
            )}
          >
            {/* Logo */}
            <a href="#top" className="group flex items-center gap-2.5" aria-label="Salevi home">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-forest-800 via-forest-900 to-forest-950 shadow-md shadow-forest-950/30 ring-1 ring-gold-500/40 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                <span className="font-display text-xl font-black text-gold-400">S</span>
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold-500">
                  <BadgeCheck className="h-3 w-3 text-forest-950" />
                </span>
              </span>
              <span className="leading-none">
                <span className={cn("font-display block text-[19px] font-bold tracking-tight transition-colors", scrolled ? "text-forest-950" : "text-white")}>
                  Salevi
                </span>
                <span className={cn("block text-[10px] font-bold uppercase tracking-[0.22em]", scrolled ? "text-gold-700" : "text-gold-300")}>
                  Elite Concentrate
                </span>
              </span>
            </a>

            {/* Desktop links */}
            <ul className="hidden items-center gap-1 lg:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/20",
                      scrolled ? "text-forest-900 hover:bg-forest-900/5" : "text-white/90 hover:text-white"
                    )}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-2.5 lg:flex">
              <a
                href="tel:+255766679472"
                className={cn(
                  "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold transition-colors",
                  scrolled ? "text-forest-900 hover:bg-forest-900/5" : "text-white/90 hover:bg-white/10"
                )}
              >
                <Phone className="h-4 w-4" />
                0766 679 472
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-magnetic gold-sheen group flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 bg-[length:200%_auto] px-5 py-2.5 text-sm font-extrabold text-forest-950 shadow-lg shadow-gold-500/30 ring-1 ring-gold-300 hover:shadow-xl hover:shadow-gold-500/40"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Order Now
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl transition-colors lg:hidden",
                scrolled ? "bg-forest-900/5 text-forest-950" : "bg-white/15 text-white"
              )}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "mx-auto max-w-7xl px-3 transition-all duration-500 sm:px-5 lg:hidden",
            open ? "pointer-events-auto mt-2 opacity-100" : "pointer-events-none mt-0 opacity-0"
          )}
        >
          <div
            className={cn(
              "glass overflow-hidden rounded-2xl border border-white/60 shadow-2xl transition-all duration-500",
              open ? "translate-y-0 scale-100" : "-translate-y-3 scale-[0.98]"
            )}
          >
            <ul className="space-y-1 p-3">
              {links.map((l, i) => (
                <li key={l.href} style={{ transitionDelay: `${i * 40}ms` }} className={cn("transition-all duration-500", open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0")}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-bold text-forest-950 transition-colors hover:bg-forest-900/5"
                  >
                    {l.label}
                    <ChevronRight className="h-4 w-4 text-gold-600" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-2.5 border-t border-forest-900/10 bg-cream-50/60 p-3">
              <a href="tel:+255766679472" className="flex items-center justify-center gap-2 rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-sm font-extrabold text-forest-900">
                <Phone className="h-4 w-4" /> Call Us
              </a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[#1FA855] px-4 py-3 text-sm font-extrabold text-white shadow-lg shadow-green-900/20">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
