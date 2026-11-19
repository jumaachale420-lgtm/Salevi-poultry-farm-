import { useState, type KeyboardEvent } from "react";
import { ArrowRight, Calculator, Check, Drumstick, Egg, Info, Sparkles } from "lucide-react";
import { productImages } from "../data/assets";
import { allProductKeys, formatPrice, productKeys, products, type FeedKey, type ProductKey } from "../data/products";
import { cn } from "../utils/cn";
import ProductBag from "./ProductBag";
import { Reveal, SectionHeading, productOrderLink, WhatsAppIcon } from "./ui";

const tabs = [
  { key: "layer" as const, label: "Layers", icon: Egg },
  { key: "broiler" as const, label: "Broilers", icon: Drumstick },
];

export default function Showcase() {
  const [active, setActive] = useState<FeedKey>("layer");
  const [orderKey, setOrderKey] = useState<ProductKey>("layer");
  const [quantity, setQuantity] = useState(1);
  const product = products[active];
  const orderProduct = products[orderKey];
  const total = orderProduct.price * quantity;
  const quantityUnit = orderProduct.category === "feed" ? "bags" : "chicks";
  const maxQuantity = orderProduct.category === "feed" ? 100 : 5000;

  const selectFeed = (key: FeedKey) => {
    setActive(key);
    setOrderKey(key);
    setQuantity(1);
  };

  const changeTab = (event: KeyboardEvent<HTMLButtonElement>, current: FeedKey) => {
    const index = productKeys.indexOf(current);
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % productKeys.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + productKeys.length) % productKeys.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = productKeys.length - 1;
    else return;
    event.preventDefault();
    selectFeed(productKeys[next]);
    document.getElementById(`tab-${productKeys[next]}`)?.focus();
  };

  return (
    <section id="products" className="relative overflow-hidden bg-forest-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-0 h-[440px] w-[440px] animate-blob rounded-full bg-forest-600/30 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[440px] w-[440px] animate-blob rounded-full bg-gold-500/15 blur-[130px] [animation-delay:3s]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Product Range"
          title={<>Two concentrates. <span className="text-gold-gradient italic">One focus: your flock.</span></>}
          sub="Choose a specialized 50kg poultry concentrate for your layers or broilers. Contact Salevi for product guidance and availability."
        />

        <Reveal delay={120}>
          <div role="tablist" aria-label="Poultry concentrates" className="mx-auto mt-10 flex w-fit max-w-full gap-1.5 overflow-x-auto rounded-2xl border border-white/12 bg-white/[0.06] p-1.5 backdrop-blur-xl no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                id={`tab-${tab.key}`}
                role="tab"
                type="button"
                aria-controls="product-panel"
                aria-selected={active === tab.key}
                tabIndex={active === tab.key ? 0 : -1}
                onClick={() => selectFeed(tab.key)}
                onKeyDown={(event) => changeTab(event, tab.key)}
                className={cn("flex shrink-0 items-center gap-2 rounded-xl px-5 py-3 text-sm font-extrabold transition-all duration-300 sm:px-7", active === tab.key ? "bg-gradient-to-r from-gold-500 to-gold-400 text-forest-950 shadow-lg shadow-gold-500/30" : "text-cream-50/70 hover:bg-white/10 hover:text-white")}
              >
                <tab.icon className="h-4 w-4" /> {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div id="product-panel" role="tabpanel" aria-labelledby={`tab-${active}`} key={active} className="tab-panel mt-8 overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/[0.05] backdrop-blur-xl">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[340px] overflow-hidden lg:min-h-[540px]">
                <ProductBag product={product} className="absolute inset-0 transition-transform duration-700 hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full bg-gold-500 px-3.5 py-1.5 text-xs font-black text-forest-950 shadow-lg">{product.audience}</span>
                  <span className="rounded-full border border-white/25 bg-forest-950/60 px-3.5 py-1.5 text-xs font-black text-white backdrop-blur-md">50kg bag</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-forest-950/60 p-4 backdrop-blur-xl">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-300">Salevi Poultry Farm</p>
                  <p className="mt-1 text-sm font-bold text-white">Specialized poultry concentrate for {product.audience.toLowerCase()}.</p>
                  {productImages[active] && <a href={productImages[active]} target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs font-extrabold text-gold-300 underline underline-offset-4">View full product photo</a>}
                </div>
              </div>

              <div className="p-6 sm:p-10">
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{product.name}</h3>
                <p className="mt-2 text-[15px] font-medium text-cream-50/70">{product.description}</p>
                <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  {[
                    { value: "50kg", label: "Bag size" },
                    { value: product.shortName, label: "Product" },
                    { value: active === "layer" ? "Layers" : "Broilers", label: "For" },
                    { value: "Salevi", label: "Brand" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-3.5 text-center">
                      <p className="font-display text-lg font-black text-gold-300">{item.value}</p>
                      <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wide text-cream-50/55">{item.label}</p>
                    </div>
                  ))}
                </div>
                <ul className="mt-6 space-y-2.5">
                  {["Scientifically balanced nutrition", "Quality-controlled production", "Proprietary concentrate formulation"].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm font-semibold text-cream-50/85">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40"><Check className="h-3 w-3 text-emerald-300" /></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-gold-500/25 bg-gold-500/[0.08] p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-2xl font-black text-white">{formatPrice(product.price)}</p>
                    <p className="text-xs font-bold text-cream-50/60">per 50kg bag</p>
                  </div>
                  <a href={productOrderLink(product)} target="_blank" rel="noreferrer" className="btn-magnetic gold-sheen flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-600 to-gold-400 px-6 py-3 text-sm font-black text-forest-950 shadow-lg shadow-gold-500/25">
                    <WhatsAppIcon className="h-4 w-4" /> ORDER VIA WHATSAPP <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div id="calculator" className="mt-14 scroll-mt-28">
          <Reveal>
            <div className="overflow-hidden rounded-[1.8rem] border border-gold-500/25 bg-gradient-to-br from-white/[0.09] to-white/[0.03] shadow-2xl backdrop-blur-xl">
              <div className="grid lg:grid-cols-[1fr_1fr]">
                <div className="border-b border-white/10 p-6 sm:p-10 lg:border-b-0 lg:border-r">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-500 text-forest-950 shadow-lg shadow-gold-500/30"><Calculator className="h-5 w-5" /></span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">Order Calculator</h3>
                      <p className="text-sm font-semibold text-cream-50/60">Choose a product and quantity.</p>
                    </div>
                  </div>
                  <div className="mt-7">
                    <label htmlFor="order-product" className="text-sm font-extrabold text-white">Product</label>
                    <select id="order-product" value={orderKey} onChange={(event) => { setOrderKey(event.target.value as ProductKey); setQuantity(1); }} className="mt-2 w-full rounded-xl border border-white/15 bg-forest-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30">
                      {allProductKeys.map((key) => <option key={key} value={key}>{products[key].name} - {formatPrice(products[key].price)} per {products[key].unit}</option>)}
                    </select>
                  </div>
                  <div className="mt-7">
                    <div className="flex items-center justify-between">
                      <label htmlFor="bag-count" className="text-sm font-extrabold text-white">Number of {orderProduct.category === "feed" ? "50kg bags" : "chicks"}</label>
                      <span className="rounded-lg bg-gold-500/15 px-3 py-1 font-display text-lg font-black text-gold-300 ring-1 ring-gold-500/30">{quantity}</span>
                    </div>
                    <input id="bag-count" type="range" min={1} max={maxQuantity} step={1} value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} className="mt-3 w-full accent-[#D4AF37]" aria-valuetext={`${quantity} ${quantityUnit}`} />
                    <div className="flex justify-between text-[11px] font-bold text-cream-50/40"><span>1 {orderProduct.category === "feed" ? "bag" : "chick"}</span><span>{maxQuantity.toLocaleString("en-US")} {quantityUnit}</span></div>
                  </div>
                  <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-cream-50/50"><Info className="mt-0.5 h-3.5 w-3.5 shrink-0" /> Product total only. Contact Salevi to confirm availability and delivery costs.</p>
                </div>
                <div className="relative overflow-hidden bg-gradient-to-br from-gold-500 via-gold-400 to-amber-300 p-6 sm:p-10">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/25 blur-3xl" aria-hidden="true" />
                  <div className="relative" aria-live="polite">
                    <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-forest-950/70"><Sparkles className="h-4 w-4" /> Estimated product total</p>
                    <p className="font-display mt-2 text-4xl font-black tracking-tight text-forest-950 sm:text-5xl">{formatPrice(total)}</p>
                    <p className="mt-2 text-sm font-bold text-forest-950/70">{quantity} {quantity === 1 ? (orderProduct.category === "feed" ? "bag" : "chick") : quantityUnit} of {orderProduct.name}</p>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-forest-950/[0.08] p-4 ring-1 ring-forest-950/10"><p className="font-display text-2xl font-black text-forest-950">{orderProduct.category === "feed" ? `${quantity * 50}kg` : quantity}</p><p className="text-xs font-extrabold text-forest-950/60">{orderProduct.category === "feed" ? "total product weight" : "chicks ordered"}</p></div>
                      <div className="rounded-2xl bg-forest-950/[0.08] p-4 ring-1 ring-forest-950/10"><p className="font-display text-xl font-black text-forest-950">{formatPrice(orderProduct.price)}</p><p className="text-xs font-extrabold text-forest-950/60">per {orderProduct.unit}</p></div>
                    </div>
                    <a href={productOrderLink(orderProduct, quantity)} target="_blank" rel="noreferrer" className="btn-magnetic mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-forest-950 px-6 py-4 text-[15px] font-black text-white shadow-xl hover:bg-forest-900"><WhatsAppIcon className="h-5 w-5 text-emerald-400" /> ORDER VIA WHATSAPP</a>
                    <p className="mt-3 text-center text-xs font-bold text-forest-950/60">Send your order to Salevi on WhatsApp.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
