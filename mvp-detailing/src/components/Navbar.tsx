import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { to: "aboutus", label: "O nas" },
  { to: "services", label: "Usługi" },
  { to: "pricing", label: "Cennik" },
  { to: "location", label: "Mapa" },
  { to: "contact", label: "Kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080a12]/90 backdrop-blur-lg border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
        {/* Brand */}
        <ScrollLink to="hero" smooth duration={600} className="cursor-pointer flex items-center gap-2.5 select-none" onClick={close}>
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          <span className="text-[14px] font-bold tracking-[0.1em] uppercase text-slate-100">
            MVP Detailing
          </span>
        </ScrollLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <ScrollLink
              key={l.to}
              to={l.to}
              smooth
              duration={600}
              offset={-60}
              className="text-[13px] font-medium tracking-wide text-slate-400 hover:text-sky-400 cursor-pointer transition-colors duration-200"
            >
              {l.label}
            </ScrollLink>
          ))}
        </nav>

        {/* CTA */}
        <ScrollLink
          to="contact"
          smooth
          duration={600}
          className="hidden md:inline-block cursor-pointer bg-sky-400 hover:bg-sky-300 text-[#080a12] text-[12px] font-bold tracking-[0.08em] uppercase px-5 py-2 rounded-md transition-all duration-200 hover:-translate-y-0.5 select-none"
        >
          Umów wizytę
        </ScrollLink>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-sky-400 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        >
          <motion.div animate={open ? "open" : "closed"} variants={{ open: { rotate: 90 }, closed: { rotate: 0 } }} transition={{ duration: 0.25 }}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0d18]/95 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <nav className="flex flex-col px-5 py-3 gap-1">
              {NAV_LINKS.map((l) => (
                <ScrollLink
                  key={l.to}
                  to={l.to}
                  smooth
                  duration={600}
                  offset={-60}
                  onClick={close}
                  className="py-3 text-[14px] font-medium text-slate-300 hover:text-sky-400 transition-colors cursor-pointer border-b border-white/[0.05] last:border-none"
                >
                  {l.label}
                </ScrollLink>
              ))}
              <ScrollLink
                to="contact"
                smooth
                duration={600}
                onClick={close}
                className="mt-3 mb-1 text-center cursor-pointer bg-sky-400 hover:bg-sky-300 text-[#080a12] text-[13px] font-bold tracking-wide uppercase py-3 rounded-lg transition-colors select-none"
              >
                Umów wizytę
              </ScrollLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
