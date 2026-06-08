import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { usePricingStore } from "../store/usePricingStore";

const plans = [
  {
    name: "Basic",
    desc: "Odświeżenie i podstawowa ochrona",
    featured: false,
    total: "120 zł",
    items: [
      { name: "Mycie ręczne + wosk", price: "120 zł" },
      { name: "Odkurzanie wnętrza", price: "wliczone" },
      { name: "Czyszczenie szyb", price: "wliczone" },
    ],
  },
  {
    name: "Premium",
    desc: "Kompleksowa pielęgnacja zewnątrz i wnętrza",
    featured: true,
    badge: "Najpopularniejszy",
    total: "od 400 zł",
    items: [
      { name: "Detailing wnętrza", price: "250 zł" },
      { name: "Korekta lakieru (1 etap)", price: "400 zł" },
      { name: "Pranie tapicerki", price: "200 zł" },
    ],
  },
  {
    name: "Elite",
    desc: "Pełna ochrona ceramiczna i renowacja",
    featured: false,
    total: "od 750 zł",
    items: [
      { name: "Zabezpieczenie ceramiczne", price: "600 zł" },
      { name: "Renowacja reflektorów", price: "150 zł" },
      { name: "Korekta lakieru full", price: "od 400 zł" },
    ],
  },
  {
    name: "Wycena indywidualna",
    desc: "Masz specyficzne potrzeby? Skontaktuj się z nami — dopasujemy zakres i cenę do Twojego auta.",
    featured: false,
    total: "Zapytaj",
    items: [
      { name: "Dowolny zakres usług", price: "—" },
      { name: "Ustalana indywidualnie", price: "—" },
      { name: "Elastyczny termin", price: "—" },
    ],
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const setSelectedPackage = usePricingStore((s) => s.setSelectedPackage);

  return (
    <section
      id="pricing"
      className="dark:bg-gradient-to-b dark:from-[#0e111d] dark:via-[#111523] dark:to-[#0e111d] bg-gradient-to-b from-[#f0f7ff] via-[#e8f5ff] to-[#f0f7ff] py-24 2xl:py-36 px-6 md:px-12 2xl:px-24"
    >
      <div className="max-w-6xl 2xl:max-w-screen-xl mx-auto">

        {/* Badge */}
        <div className="flex flex-col items-center mb-12 gap-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-5 dark:bg-sky-400 bg-[#0050d8]" />
            <span className="text-[11px] 2xl:text-[13px] font-bold tracking-[0.14em] uppercase dark:text-sky-400 text-[#0050d8]">
              Cennik
            </span>
            <span className="h-px w-5 dark:bg-sky-400 bg-[#0050d8]" />
          </div>
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold dark:text-white text-slate-900 text-center">
            Pakiety usług
          </h2>
          <p className="dark:text-slate-500 text-slate-600 text-[15px] 2xl:text-[17px] text-center">
            Wybierz pakiet dopasowany do potrzeb Twojego auta.
          </p>
        </div>

        {/* Karty */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, boxShadow: "0 0 32px rgba(56,189,248,0.1)" }}
              className="relative rounded-2xl p-6 2xl:p-8 flex flex-col group overflow-visible dark:hover:[border-color:rgba(56,189,248,0.4)]"
              style={{
                background: p.featured
                  ? "rgba(56,189,248,0.05)"
                  : "rgba(255,255,255,0.03)",
                backdropFilter: "blur(12px)",
                border: p.featured
                  ? "1px solid rgba(56,189,248,0.35)"
                  : "1px solid rgba(255,255,255,0.08)",
                transition: "border-color 0.3s ease",
              }}
            >
              {/* Jasny tryb — nadpisuje tło i ramkę karty */}
              <div
                className="absolute inset-0 rounded-2xl dark:hidden transition-all duration-300 group-hover:[border-color:rgba(0,80,216,0.35)]"
                style={{
                  background: p.featured
                    ? "rgba(0,80,216,0.06)"
                    : "rgba(255,255,255,0.6)",
                  border: p.featured
                    ? "1px solid rgba(0,80,216,0.35)"
                    : "1px solid rgba(0,80,216,0.15)",
                  backdropFilter: "blur(12px)",
                }}
              />

              {/* Świecąca linia */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.7), transparent)",
                  borderRadius: "16px 16px 0 0",
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 dark:hidden"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(0,80,216,0.6), transparent)",
                  borderRadius: "16px 16px 0 0",
                }}
              />

              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 dark:bg-sky-400 bg-[#0050d8] dark:text-[#0e111d] text-white text-[10px] font-extrabold tracking-[0.1em] uppercase px-4 py-1 rounded-full whitespace-nowrap z-10">
                  {p.badge}
                </div>
              )}

              <div className="relative z-10 text-[20px] 2xl:text-[22px] font-bold dark:text-slate-50 text-slate-900 mb-1">{p.name}</div>
              <div className="relative z-10 text-[12px] 2xl:text-[14px] dark:text-slate-500 text-slate-500 mb-6 leading-snug">{p.desc}</div>

              <ul className="relative z-10 flex-1 space-y-0 mb-6">
                {p.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-center justify-between py-2.5 text-[13px] 2xl:text-[15px] dark:border-white/[0.04] border-[#0050d8]/10 border-b last:border-none"
                  >
                    <span className="flex items-center gap-2 dark:text-slate-400 text-slate-600">
                      <Check className="w-3.5 h-3.5 dark:text-sky-400 text-[#0050d8] flex-shrink-0" />
                      {item.name}
                    </span>
                    <span className="dark:text-sky-400 text-[#0050d8] font-semibold ml-2 whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>

              <div
                className="relative z-10 flex items-center justify-between pt-4 mb-5 dark:border-sky-400/15 border-[#0050d8]/15"
                style={{ borderTop: "1px solid" }}
              >
                <span className="text-[10px] font-bold tracking-widest uppercase dark:text-slate-600 text-slate-400">Łącznie</span>
                <span className="text-[20px] 2xl:text-[24px] font-extrabold dark:text-slate-50 text-slate-900">{p.total}</span>
              </div>

              <ScrollLink
                to="contact"
                smooth
                duration={700}
                onClick={() => setSelectedPackage(p.name as any)}
                className={`relative z-10 block text-center text-[13px] 2xl:text-[15px] font-semibold py-3 2xl:py-4 rounded-lg cursor-pointer transition-all duration-200 select-none ${
                  p.featured
                    ? "dark:bg-sky-400 bg-[#0050d8] dark:text-[#0e111d] text-white dark:hover:bg-sky-300 hover:bg-[#0040b8]"
                    : "dark:bg-white/5 bg-white/60 dark:border-white/10 border-[#0050d8]/20 dark:text-slate-300 text-[#0050d8] dark:hover:border-sky-400/40 hover:border-[#0050d8]/40 dark:hover:text-sky-400 hover:text-[#0040b8] border"
                }`}
              >
                {p.name === "Wycena indywidualna" ? "Skontaktuj się" : `Wybierz ${p.name}`}
              </ScrollLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;