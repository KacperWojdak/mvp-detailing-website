import { FaFacebookF, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  return (
    <footer className="dark:bg-[#161b2d] bg-[#e8f5ff] dark:text-slate-300 text-slate-700 dark:border-white/10 border-[#0050d8]/10 border-t py-12 2xl:py-16 px-6 md:px-12 2xl:px-24">
      <div ref={ref} className="max-w-6xl 2xl:max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 2xl:gap-16">

        {/* Brand */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full dark:bg-sky-400 bg-[#0050d8]" />
            <span className="text-[13px] 2xl:text-[15px] font-bold tracking-[0.1em] uppercase dark:text-slate-100 text-slate-900">
              MVP Detailing
            </span>
          </div>
          <p className="text-[13px] 2xl:text-[15px] dark:text-slate-500 text-slate-600 leading-relaxed">
            Profesjonalna pielęgnacja Twojego pojazdu.<br />
            Pasja, precyzja i zamiłowanie do perfekcji.
          </p>
        </motion.div>

        {/* Kontakt */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
          <h4 className="text-[12px] 2xl:text-[14px] font-bold tracking-[0.1em] uppercase dark:text-slate-400 text-slate-500 mb-5">Kontakt</h4>
          <ul className="space-y-3 text-[13px] 2xl:text-[15px] dark:text-slate-500 text-slate-600">
            <li className="flex items-center gap-2.5">
              <FaPhoneAlt className="dark:text-sky-400 text-[#0050d8] text-[11px] flex-shrink-0" />
              +48 604 589 815 - Paweł
            </li>
            <li className="flex items-center gap-2.5">
              <FaPhoneAlt className="dark:text-sky-400 text-[#0050d8] text-[11px] flex-shrink-0" />
              +48 790 590 465 - Wiktor
            </li>
            <li className="flex items-center gap-2.5">
              <FaEnvelope className="dark:text-sky-400 text-[#0050d8] text-[11px] flex-shrink-0" />
              infomvpdetailing@gmail.com
            </li>
            <li className="flex items-center gap-2.5">
              <FaMapMarkerAlt className="dark:text-sky-400 text-[#0050d8] text-[11px] flex-shrink-0" />
              Wilczyce 45, 59-223
            </li>
          </ul>
        </motion.div>

        {/* Nawigacja */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
          <h4 className="text-[12px] 2xl:text-[14px] font-bold tracking-[0.1em] uppercase dark:text-slate-400 text-slate-500 mb-5">Nawigacja</h4>
          <ul className="space-y-2.5 text-[13px] 2xl:text-[15px] dark:text-slate-500 text-slate-600">
            {[
              { to: "aboutus", label: "O nas" },
              { to: "services", label: "Usługi" },
              { to: "pricing", label: "Cennik" },
              { to: "location", label: "Lokalizacja" },
              { to: "contact", label: "Kontakt" },
            ].map((l) => (
              <li key={l.to}>
                <ScrollLink
                  to={l.to}
                  smooth
                  duration={600}
                  className="dark:hover:text-sky-400 hover:text-[#0050d8] cursor-pointer transition-colors duration-200"
                >
                  {l.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
          <h4 className="text-[12px] font-bold tracking-[0.1em] uppercase dark:text-slate-400 text-slate-500 mb-5">Social Media</h4>
          <a
            href="https://www.facebook.com/profile.php?id=61573451274213"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-[13px] 2xl:text-[15px] dark:text-sky-400 text-[#0050d8] dark:hover:text-sky-300 hover:text-[#0040b8] transition-colors duration-200"
          >
            <FaFacebookF />
            <span>Facebook</span>
          </a>
        </motion.div>

      </div>

      <div className="mt-12 pt-6 text-center text-[12px] 2xl:text-[14px] dark:text-slate-600 text-slate-400" style={{ borderTop: "1px solid rgba(0,80,216,0.08)" }}>
        © {new Date().getFullYear()} MVP Detailing. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
};

export default Footer;