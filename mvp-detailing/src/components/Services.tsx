import { motion } from "framer-motion";
import {
    CarFront,
    ShieldCheck,
    Lightbulb,
    Brush,
  } from "lucide-react";
  
  const services = [
    {
      title: "Detailing zewnętrzny",
      description:
        "Kompleksowa pielęgnacja karoserii: mycie ręczne, dekontaminacja, glinkowanie, korekta lakieru, woskowanie i zabezpieczenie powłoką.",
      icon: <CarFront className="w-10 h-10 text-white" />,
    },
    {
      title: "Detailing wnętrza",
      description:
        "Czyszczenie i impregnacja tapicerki, plastików, podsufitki, szyb i detali. Pracujemy zarówno na skórze, jak i materiałach tekstylnych.",
      icon: <Brush className="w-10 h-10 text-white" />,
    },
    {
      title: "Zabezpieczenia ceramiczne",
      description:
        "Trwała ochrona karoserii przed czynnikami atmosferycznymi. Nadajemy połysk i głębię koloru na wiele miesięcy.",
      icon: <ShieldCheck className="w-10 h-10 text-white" />,
    },
    {
      title: "Renowacja reflektorów",
      description:
        "Przywracamy przejrzystość i wygląd reflektorom, poprawiając bezpieczeństwo i estetykę pojazdu.",
      icon: <Lightbulb className="w-10 h-10 text-white" />,
    },
  ];
  
  const Services = () => {
    return (
        <section
        id="services"
        className="bg-gradient-to-b from-[#141829] to-[#1F2333] py-24 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Nasze usługi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transform transition hover:-translate-y-1"
              >
                <div className="mb-3 sm:mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  