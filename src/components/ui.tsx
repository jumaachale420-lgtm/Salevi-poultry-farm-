import { useEffect, useRef, useState, type ReactNode } from "react";
import { formatPrice, type Product } from "../data/products";
import { cn } from "../utils/cn";

/* Scroll reveal wrapper */
export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  variant?: "up" | "left" | "right" | "zoom";
  className?: string;
  as?: "div" | "section" | "span" | "li" | "h2" | "p";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error polymorphic ref
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn(
        "reveal",
        variant === "left" && "reveal-left",
        variant === "right" && "reveal-right",
        variant === "zoom" && "reveal-zoom",
        visible && "is-visible",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/* Animated counter */
export function Counter({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1800,
  className,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 4);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

/* Section heading */
export function SectionHeading({
  eyebrow,
  title,
  sub,
  dark = false,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  dark?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]",
            dark
              ? "border-gold-500/30 bg-gold-500/10 text-gold-300"
              : "border-forest-900/15 bg-white/70 text-forest-800 shadow-sm"
          )}
        >
          <span className={cn("h-1.5 w-1.5 rounded-full", dark ? "bg-gold-400" : "bg-gold-500")} />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={90}>
        <h2
          className={cn(
            "font-display mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-[3.4rem]",
            dark ? "text-cream-50" : "text-forest-950"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={170}>
          <p className={cn("mt-5 text-pretty text-base leading-relaxed sm:text-lg", dark ? "text-cream-50/70" : "text-forest-950/65")}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* WhatsApp icon */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function whatsappLink(message: string) {
  return `https://wa.me/255766679472?text=${encodeURIComponent(message)}`;
}

export const WA_LINK = whatsappLink(
  "Hello Salevi Poultry Farm, I would like information about your poultry feed and day-old chicks."
);

export function productOrderMessage(product: Product, quantity = 1) {
  const count = Number.isFinite(quantity) ? Math.max(1, Math.floor(quantity)) : 1;
  const productLabel = product.category === "feed" ? `${product.name} 50kg` : product.name;
  const unit = product.category === "feed" ? (count === 1 ? "bag" : "bags") : (count === 1 ? "chick" : "chicks");
  const total = count > 1 ? ` Product total: ${formatPrice(product.price * count)}.` : "";
  return `Hello Salevi Poultry Farm, I am interested in purchasing ${productLabel} at ${formatPrice(product.price)} per ${product.unit}. Quantity: ${count} ${unit}.${total} Please provide ordering information.`;
}

export function productOrderLink(product: Product, quantity = 1) {
  return whatsappLink(productOrderMessage(product, quantity));
}
