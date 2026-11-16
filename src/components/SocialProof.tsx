import { BadgeCheck, MapPin } from "lucide-react";
import { Counter, Reveal } from "./ui";

const towns = ["Arusha", "Moshi", "Dodoma", "Mwanza", "Morogoro", "Tanga", "Mbeya", "Kilimanjaro", "Singida", "Babati"];
const partners = ["Kilimo Agrovet", "TFA Arusha", "AgroKings", "Mifugo Hub", "Chakula Bora", "FarmCare+", "Shamba Mart", "VetZone"];

const stats = [
  { value: 4800, suffix: "+", label: "Happy farmers", sub: "across Tanzania" },
  { value: 12, suffix: "M", label: "Eggs per month", sub: "from Salevi flocks" },
  { value: 95, suffix: "%", label: "Peak lay rate", sub: "layers 24–60 wks" },
  { value: 32, suffix: "%", prefix: "+", label: "Avg. profit lift", sub: "vs ordinary feed" },
];

export default function SocialProof() {
  return (
    <section id="proof" className="relative bg-cream-50 py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-[12px] font-bold uppercase tracking-[0.24em] text-forest-900/55">
            Powering profitable poultry farms across Northern Tanzania
          </p>
        </Reveal>

        {/* Marquee towns */}
        <Reveal delay={100} className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-3 pr-3">
            {[...towns, ...towns].map((t, i) => (
              <span key={i} className="flex shrink-0 items-center gap-1.5 rounded-full border border-forest-900/10 bg-white px-4 py-2 text-sm font-bold text-forest-900 shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-gold-600" /> {t}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={160} className="relative mt-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee-reverse gap-3 pr-3">
            {[...partners, ...partners].map((t, i) => (
              <span key={i} className="flex shrink-0 items-center gap-1.5 rounded-full bg-forest-900/[0.06] px-4 py-2 text-sm font-bold text-forest-900/70">
                <BadgeCheck className="h-3.5 w-3.5 text-forest-700" /> {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="card-lift group relative overflow-hidden rounded-2xl border border-forest-900/10 bg-white p-5 text-center shadow-[0_10px_35px_-18px_rgba(11,59,31,0.35)] sm:p-7">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-forest-700 via-gold-500 to-forest-700 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="font-display text-3xl font-black tracking-tight text-forest-950 sm:text-[2.6rem]">
                  <Counter to={s.value} suffix={s.suffix} prefix={s.prefix ?? ""} />
                </p>
                <p className="mt-1 text-sm font-extrabold text-forest-900">{s.label}</p>
                <p className="text-xs font-semibold text-forest-900/55">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
