import { MapPin, Phone, Mail, BadgeCheck, ArrowUpRight } from "lucide-react";
import { allProductKeys, products } from "../data/products";
import BrandLogo from "./BrandLogo";
import { WA_LINK, WhatsAppIcon } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-[#03130a] pb-8 pt-16 text-cream-50/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <BrandLogo className="h-12 w-[76px] rounded-lg bg-white p-1" />
              <span className="leading-none">
                <span className="font-display block text-xl font-bold text-white">Salevi</span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-gold-400">Poultry Farm</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Poultry concentrates and day-old chicks for farmers in Tanzania.
              Salevi Poultry Farm is based in Arusha.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-300">
              <BadgeCheck className="h-4 w-4" /> Quality-controlled poultry nutrition
            </div>
            <div className="mt-5 flex gap-2.5">
              <a href={WA_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-10 items-center gap-2 rounded-xl bg-[#1FA855] px-4 text-sm font-extrabold text-white transition-all hover:-translate-y-1">
                <WhatsAppIcon className="h-4 w-4" /> Chat
              </a>
            </div>
          </div>

          {/* Products */}
          <nav aria-label="Products">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-400">Products</p>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold">
              {allProductKeys.map((key) => (
                <li key={key}>
                  <a href={products[key].category === "feed" ? "#products" : "#chicks"} className="transition-colors hover:text-gold-300">{products[key].name}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-400">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold">
              {[
                { l: "About Salevi", h: "#about" },
                { l: "Why Salevi", h: "#features" },
                { l: "Our Services", h: "#services" },
                { l: "Benefits", h: "#results" },
                { l: "Pricing", h: "#pricing" },
                { l: "Order Calculator", h: "#calculator" },
                { l: "FAQ", h: "#faq" },
                { l: "Contact Us", h: "#contact" },
                { l: "Become a Dealer", h: "#pricing" },
              ].map((x) => (
                <li key={x.l}>
                  <a href={x.h} className="transition-colors hover:text-gold-300">{x.l}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-400">Visit / Call Us</p>
            <ul className="mt-4 space-y-3.5 text-sm font-semibold">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>Arusha, Tanzania</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold-500" />
                <a href="tel:+255766679472" className="hover:text-gold-300">0766 679 472</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-gold-500" />
                <a href="mailto:info@salevipoultry.co.tz" className="hover:text-gold-300">info@salevipoultry.co.tz</a>
              </li>
            </ul>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="mt-5 flex items-center justify-between rounded-2xl border border-gold-500/30 bg-gold-500/10 px-4 py-3 text-sm font-extrabold text-gold-300 transition-all hover:bg-gold-500/20">
              Get today's price list <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs font-semibold text-cream-50/40 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Salevi Poultry Farm, Arusha. All rights reserved. | Karibu Salevi.</p>
          <div className="flex gap-5">
            <a href="#products" className="hover:text-gold-300">Products</a>
            <a href="#chicks" className="hover:text-gold-300">Chicks</a>
            <a href="#faq" className="hover:text-gold-300">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
