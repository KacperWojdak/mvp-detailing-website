import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const plans = [
  {
    tier: "Pakiet",
    name: "Basic",
    desc: "Odświeżenie i podstawowa ochrona",
    featured: false,
    totalLabel: "od",
    total: "120 zł",
    items: [
      { name: "Mycie ręczne + wosk", price: "120 zł" },
      { name: "Odkurzanie wnętrza", price: "wliczone" },
      { name: "Czyszczenie szyb", price: "wliczone" },
    ],
  },
  {
    tier: "Pakiet",
    name: "Premium",
    desc: "Kompleksowa pielęgnacja zewnątrz i wnętrza",
    featured: true,
    badge: "Najpopularniejszy",
    totalLabel: "od",
    total: "400 zł",
    items: [
      { name: "Detailing wnętrza", price: "250 zł" },
      { name: "Korekta lakieru (1 etap)", price: "400 zł" },
      { name: "Pranie tapicerki materiałowej", price: "200 zł" },
    ],
  },
  {
    tier: "Pakiet",
    name: "Elite",
    desc: "Pełna ochrona ceramiczna i renowacja",
    featured: false,
    totalLabel: "od",
    total: "750 zł",
    items: [
      { name: "Zabezpieczenie ceramiczne", price: "600 zł" },
      { name: "Renowacja reflektorów", price: "150 zł" },
      { name: "Korekta lakieru full", price: "od 400 zł" },
    ],
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="pricing"
      className="bg-[#0a0d18] py-24 px-5 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-5 bg-sky-400" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-sky-400">Cennik</span>
            <span className="h-px w-5 bg-sky-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-3">Pakiety usług</h2>
          <p className="text-[15px] text-slate-500">
            Wybierz pakiet dopasowany do potrzeb Twojego auta.
            <br />
            <span className="text-slate-600 text-[13px]">Wszystkie usługi możesz też zamówić osobno — zapytaj przez formularz.</span>
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl p-6 flex flex-col"
              style={{
                background: p.featured ? "rgba(56,189,248,0.05)" : "rgba(255,255,255,0.025)",
                border: p.featured ? "1px solid rgba(56,189,248,0.35)" : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {p.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#080a12] text-[10px] font-extrabold tracking-[0.1em] uppercase px-4 py-1 rounded-full whitespace-nowrap"
                  style={{ background: "#38bdf8" }}
                >
                  {p.badge}
                </div>
              )}

              <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-slate-600 mb-1">{p.tier}</div>
              <div className="text-[22px] font-bold text-slate-50 mb-1">{p.name}</div>
              <div className="text-[12px] text-slate-500 mb-6 leading-snug">{p.desc}</div>

              <ul className="flex-1 space-y-0 mb-6">
                {p.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-center justify-between py-2.5 text-[13px] border-b border-white/[0.04] last:border-none"
                  >
                    <span className="flex items-center gap-2 text-slate-400">
                      <Check className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                      {item.name}
                    </span>
                    <span className="text-sky-400 font-semibold ml-4 whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>

              <div
                className="flex items-center justify-between pt-4 mb-5"
                style={{ borderTop: "1px solid rgba(56,189,248,0.15)" }}
              >
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-600">Łącznie</span>
                <span className="text-[22px] font-extrabold text-slate-50">{p.total}</span>
              </div>

              <ScrollLink
                to="contact"
                smooth
                duration={700}
                className={`block text-center text-[13px] font-semibold py-3 rounded-lg cursor-pointer transition-all duration-200 select-none ${
                  p.featured
                    ? "bg-sky-400 text-[#080a12] hover:bg-sky-300"
                    : "bg-white/5 border border-white/10 text-slate-300 hover:border-sky-400/40 hover:text-sky-400"
                }`}
              >
                Wybierz {p.name}
              </ScrollLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
