import { useState } from "react";
import { CheckCircle2, Clock, Phone, ShieldCheck, Users } from "lucide-react";
import { Reveal, WA_LINK, whatsappLink, WhatsAppIcon } from "./ui";

export default function CTA() {
  const [form, setForm] = useState({ name: "", phone: "", birds: "200–500", need: "Order feed" });
  const [ready, setReady] = useState(false);
  const formLink = whatsappLink(
    `Habari Salevi! Naomba maelezo.\nJina: ${form.name.trim()}\nSimu: ${form.phone.trim()}\nIdadi ya kuku: ${form.birds}\nOmbi: ${form.need}`
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setReady(true);
    window.open(formLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden bg-forest-950 py-20 sm:py-28">
      {/* BG */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src="https://images.pexels.com/photos/35877061/pexels-photo-35877061.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
          alt=""
          className="h-full w-full object-cover opacity-[0.12]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/85 to-forest-950" />
        <div className="absolute left-1/2 top-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gold-500/15 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-gold-300">
                <Clock className="h-3.5 w-3.5" /> This week only: free delivery 5+ bags
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-5 text-balance text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
                Ready to collect <span className="text-gold-gradient font-black italic">more trays</span> tomorrow morning?
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-cream-50/70 sm:text-lg lg:mx-0">
                Join 4,800+ farmers already earning more per bird. Order before <strong className="text-white">4pm</strong> for
                same-day dispatch from Arusha — or request a free callback and we'll plan your mix together.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-magnetic gold-sheen flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 px-8 py-4 text-[15px] font-black text-forest-950 shadow-[0_20px_50px_-12px_rgba(212,175,55,0.6)]">
                  <WhatsAppIcon className="h-5 w-5" /> Order on WhatsApp
                </a>
                <a href="tel:+255766679472" className="btn-magnetic flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/[0.07] px-8 py-4 text-[15px] font-bold text-white backdrop-blur-md hover:bg-white/[0.12]">
                  <Phone className="h-4 w-4 text-gold-300" /> 0766 679 472
                </a>
              </div>
            </Reveal>
            <Reveal delay={290}>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-bold text-cream-50/60 lg:justify-start">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald-400" /> 21-day guarantee</span>
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-gold-400" /> Free vet support included</span>
              </div>
            </Reveal>
          </div>

          {/* Lead form card */}
          <Reveal delay={160} variant="right">
            <div className="glass relative overflow-hidden rounded-[1.8rem] border border-white/50 p-6 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.5)] sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-forest-700 via-gold-500 to-forest-700" />
              {!ready ? (
                <>
                  <h3 className="font-display text-xl font-bold text-forest-950 sm:text-2xl">Request a callback or quote</h3>
                  <p className="mt-1.5 text-sm font-semibold text-forest-900/60">Share your details with Salevi on WhatsApp.</p>
                  <form onSubmit={submit} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="cta-name" className="text-[13px] font-extrabold text-forest-950">Your name</label>
                      <input
                        id="cta-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Neema Kimaro"
                        className="mt-1.5 w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3.5 text-[15px] font-semibold text-forest-950 placeholder:text-forest-900/35 outline-none transition-all focus:border-gold-500 focus:ring-4 focus:ring-gold-500/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="cta-phone" className="text-[13px] font-extrabold text-forest-950">Phone / WhatsApp</label>
                      <input
                        id="cta-phone" required type="tel" pattern="[0-9+ ]{9,15}" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="e.g. 0766 679 472"
                        className="mt-1.5 w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3.5 text-[15px] font-semibold text-forest-950 placeholder:text-forest-900/35 outline-none transition-all focus:border-gold-500 focus:ring-4 focus:ring-gold-500/20"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="cta-birds" className="text-[13px] font-extrabold text-forest-950">Birds</label>
                        <select id="cta-birds" value={form.birds} onChange={(e) => setForm({ ...form, birds: e.target.value })} className="mt-1.5 w-full rounded-xl border border-forest-900/15 bg-white px-3 py-3.5 text-sm font-bold text-forest-950 outline-none focus:border-gold-500 focus:ring-4 focus:ring-gold-500/20">
                          <option>Under 200</option>
                          <option>200–500</option>
                          <option>500–1,000</option>
                          <option>1,000–5,000</option>
                          <option>5,000+</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="cta-need" className="text-[13px] font-extrabold text-forest-950">I want to…</label>
                        <select id="cta-need" value={form.need} onChange={(e) => setForm({ ...form, need: e.target.value })} className="mt-1.5 w-full rounded-xl border border-forest-900/15 bg-white px-3 py-3.5 text-sm font-bold text-forest-950 outline-none focus:border-gold-500 focus:ring-4 focus:ring-gold-500/20">
                          <option>Order feed</option>
                          <option>Get price list</option>
                          <option>Become a dealer</option>
                          <option>Free vet advice</option>
                        </select>
                      </div>
                    </div>
                    <button type="submit" className="btn-magnetic gold-sheen w-full rounded-2xl bg-forest-950 px-6 py-4 text-[15px] font-black text-white shadow-xl hover:bg-forest-900">
                      Continue to WhatsApp
                    </button>
                    <p className="text-center text-xs font-semibold text-forest-900/50">Your message is sent only when you confirm it in WhatsApp.</p>
                  </form>
                </>
              ) : (
                <div className="py-10 text-center" role="status">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 ring-8 ring-emerald-50">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </span>
                  <h3 className="font-display mt-5 text-2xl font-bold text-forest-950">Your message is ready, {form.name.split(" ")[0] || "Mkulima"}.</h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm font-semibold leading-relaxed text-forest-900/65">
                    Please confirm and send your request in WhatsApp. If it did not open, use the button below.
                  </p>
                  <a href={formLink} target="_blank" rel="noreferrer" className="btn-magnetic mx-auto mt-6 flex w-fit items-center gap-2 rounded-2xl bg-[#1FA855] px-6 py-3.5 text-sm font-black text-white shadow-lg">
                    <WhatsAppIcon className="h-4 w-4" /> Open WhatsApp
                  </a>
                  <button onClick={() => setReady(false)} className="mt-3 text-[13px] font-bold text-forest-900/50 underline underline-offset-4 hover:text-forest-900">
                    Edit your details
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
