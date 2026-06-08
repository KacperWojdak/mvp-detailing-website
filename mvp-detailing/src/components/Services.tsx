import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CarFront, ShieldCheck, Lightbulb, Brush } from "lucide-react";

const services = [
  {
    title: "Detailing zewnętrzny",
    description:
      "Kompleksowa pielęgnacja karoserii: mycie ręczne, dekontaminacja, glinkowanie, korekta lakieru, woskowanie i zabezpieczenie powłoką.",
    icon: CarFront,
  },
  {
    title: "Detailing wnętrza",
    description:
      "Czyszczenie i impregnacja tapicerki, plastików, podsufitki, szyb i detali. Pracujemy zarówno na skórze, jak i materiałach tekstylnych.",
    icon: Brush,
  },
  {
    title: "Zabezpieczenia ceramiczne",
    description:
      "Trwała ochrona karoserii przed czynnikami atmosferycznymi. Nadajemy połysk i głębię koloru na wiele miesięcy.",
    icon: ShieldCheck,
  },
  {
    title: "Renowacja reflektorów",
    description:
      "Przywracamy przejrzystość i wygląd reflektorom, poprawiając bezpieczeństwo i estetykę pojazdu.",
    icon: Lightbulb,
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className="dark:bg-gradient-to-b dark:from-[#111523] dark:via-[#0e111d] dark:to-[#111523] bg-gradient-to-b from-[#e8f5ff] via-[#f0f7ff] to-[#e8f5ff] py-24 px-6 md:px-12"
    >
      <div className="max-w-6xl 2xl:max-w-screen-xl mx-auto">

        {/* Badge */}
        <div className="flex flex-col items-center mb-12 gap-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-5 dark:bg-sky-400 bg-[#0050d8]" />
            <span className="text-[11px] 2xl:text-[13px] font-bold tracking-[0.14em] uppercase dark:text-sky-400 text-[#0050d8]">
              Usługi
            </span>
            <span className="h-px w-5 dark:bg-sky-400 bg-[#0050d8]" />
          </div>
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold dark:text-white text-slate-900 text-center">
            Nasze usługi
          </h2>
        </div>

        {/* Karty */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                className="group relative rounded-2xl p-6 2xl:p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 dark:[background:rgba(255,255,255,0.04)] [background:rgba(255,255,255,0.5)] dark:[border:1px_solid_rgba(255,255,255,0.08)] [border:1px_solid_rgba(0,80,216,0.2)]"
                style={{ backdropFilter: "blur(12px)" }}
              >
                {/* Gradient top na hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.6), transparent)",
                  }}
                />
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:hidden"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(0,80,216,0.5), transparent)",
                  }}
                />

                {/* Glow w tle przy hoverze */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl dark:block hidden"
                  style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.06), transparent)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl dark:hidden block"
                  style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,80,216,0.06), transparent)",
                  }}
                />

                {/* Ikona */}
                <div
                  className="mb-5 w-12 h-12 2xl:w-14 2xl:h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 dark:[background:rgba(56,189,248,0.1)] [background:rgba(0,80,216,0.08)] dark:[border:1px_solid_rgba(56,189,248,0.2)] [border:1px_solid_rgba(0,80,216,0.25)]"
                >
                  <Icon className="w-5 h-5 2xl:w-6 2xl:h-6 dark:text-sky-400 text-[#0050d8]" />
                </div>

                <h3 className="text-[16px] 2xl:text-[18px] font-semibold dark:text-white text-slate-900 mb-2">{service.title}</h3>
                <p className="text-[13px] 2xl:text-[15px] dark:text-slate-400 text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;