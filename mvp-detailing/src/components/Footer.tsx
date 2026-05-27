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
    <footer className="bg-[#161b2d] text-slate-300 border-t border-white/10 py-12 px-6 md:px-12">
      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            <span className="text-[13px] font-bold tracking-[0.1em] uppercase text-slate-100">
              MVP Detailing
            </span>
          </div>
          <p className="text-[13px] text-slate-500 leading-relaxed">
            Profesjonalna pielęgnacja Twojego pojazdu.<br />
            Pasja, precyzja i zamiłowanie do perfekcji.
          </p>
        </motion.div>

        {/* Kontakt */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
          <h4 className="text-[12px] font-bold tracking-[0.1em] uppercase text-slate-400 mb-5">Kontakt</h4>
          <ul className="space-y-3 text-[13px] text-slate-500">
            <li className="flex items-center gap-2.5">
              <FaPhoneAlt className="text-sky-400 text-[11px] flex-shrink-0" />
              +48 604 589 815 - Paweł
            </li>
            <li className="flex items-center gap-2.5">
              <FaPhoneAlt className="text-sky-400 text-[11px] flex-shrink-0" />
              +48 790 590 465 - Wiktor
            </li>
            <li className="flex items-center gap-2.5">
              <FaEnvelope className="text-sky-400 text-[11px] flex-shrink-0" />
              infomvpdetailing@gmail.com
            </li>
            <li className="flex items-center gap-2.5">
              <FaMapMarkerAlt className="text-sky-400 text-[11px] flex-shrink-0" />
              Wilczyce 45, 59-223
            </li>
          </ul>
        </motion.div>

        {/* Nawigacja */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
          <h4 className="text-[12px] font-bold tracking-[0.1em] uppercase text-slate-400 mb-5">Nawigacja</h4>
          <ul className="space-y-2.5 text-[13px] text-slate-500">
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
                  className="hover:text-sky-400 cursor-pointer transition-colors duration-200"
                >
                  {l.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
          <h4 className="text-[12px] font-bold tracking-[0.1em] uppercase text-slate-400 mb-5">Social Media</h4>
          <a
            href="https://www.facebook.com/profile.php?id=61573451274213"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-[13px] text-sky-400 hover:text-sky-300 transition-colors duration-200"
          >
            <FaFacebookF />
            <span>Facebook</span>
          </a>
        </motion.div>

      </div>

      <div className="mt-12 pt-6 text-center text-[12px] text-slate-600" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        © {new Date().getFullYear()} MVP Detailing. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
};

export default Footer;