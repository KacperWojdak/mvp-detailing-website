import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import detailingImage from "../assets/autodetail2.jpg";

const AboutUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="aboutus"
      className="dark:bg-gradient-to-b dark:from-[#0e111d] dark:via-[#111523] dark:to-[#0e111d] bg-gradient-to-b from-[#f0f7ff] via-[#e8f5ff] to-[#f0f7ff] py-24 2xl:py-36 px-6 md:px-12"
    >
      <div
        ref={ref}
        className="max-w-6xl 2xl:max-w-screen-xl mx-auto grid md:grid-cols-2 items-center gap-8 md:gap-12 2xl:gap-20 px-4"
      >
        {/* Tekst */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-5 order-2 md:order-1"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-5 dark:bg-sky-400 bg-[#0050d8]" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase dark:text-sky-400 text-[#0050d8]">
              O nas
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold dark:text-white text-slate-900">
            Kim jesteśmy?
          </h2>

          <p className="dark:text-slate-300 text-slate-700 text-base sm:text-lg 2xl:text-xl leading-relaxed">
            Jesteśmy Paweł i Wiktor, dwójka młodych pasjonatów motoryzacji, którzy
            postanowili połączyć swoje hobby z biznesem i stworzyć MVP Detailing —
            studio detailingu samochodowego.
          </p>
          <p className="dark:text-slate-400 text-slate-600 2xl:text-lg leading-relaxed">
            MVP Detailing to więcej niż tylko studio pielęgnacji samochodów — to
            pasja, precyzja i zamiłowanie do perfekcji. Specjalizujemy się w
            profesjonalnym detailingu, który wydobywa z Twojego auta to, co
            najlepsze.
          </p>
        </motion.div>

        {/* Zdjęcie */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.12 }}
          className="relative w-full h-64 sm:h-72 md:h-96 2xl:h-[480px] rounded-2xl overflow-hidden order-1 md:order-2"
          style={{ border: "1px solid rgba(0,80,216,0.15)" }}
        >
          <img
            src={detailingImage}
            alt="Detailing samochodu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-[#0e111d]/40 bg-gradient-to-t from-[#e8f5ff]/20 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;