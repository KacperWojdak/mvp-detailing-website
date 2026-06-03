import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeStore } from "../store/useThemeStore";

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
  const [themeMenu, setThemeMenu] = useState(false);
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  const themeIcons = {
    light: <Sun className="w-4 h-4" />,
    dark: <Moon className="w-4 h-4" />,
    system: <Monitor className="w-4 h-4" />,
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
        ? "dark:bg-[#080a12]/90 bg-white/80 backdrop-blur-lg dark:border-white/[0.06] border-slate-200/80 border-b shadow-lg dark:shadow-black/20 shadow-slate-200/50"
        : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-5 sm:px-8 2xl:px-16 py-4 2xl:py-5">

        {/* Brand */}
        <ScrollLink
          to="hero"
          smooth
          duration={600}
          className="cursor-pointer flex items-center gap-2.5 select-none"
          onClick={close}
        >
          <span className="h-2 w-2 rounded-full dark:bg-sky-400 bg-[#0050d8]" />
          <span className="text-[14px] xl:text-[15px] 2xl:text-[17px] font-bold tracking-[0.1em] uppercase dark:text-slate-100 text-slate-800">
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
              className="text-[13px] xl:text-[14px] 2xl:text-[16px] font-medium tracking-wide dark:text-slate-400 text-slate-600 hover:text-[#0050d8] dark:hover:text-sky-400 cursor-pointer transition-colors duration-200"
            >
              {l.label}
            </ScrollLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Przełącznik motywu */}
          <div className="relative">
            <button
              onClick={() => setThemeMenu((v) => !v)}
              className="p-2 rounded-lg dark:text-slate-400 text-slate-500 dark:hover:text-sky-400 hover:text-[#0050d8] dark:hover:bg-white/5 hover:bg-slate-100 transition-all duration-200"
              aria-label="Zmień motyw"
            >
              {themeIcons[theme]}
            </button>

            <AnimatePresence>
              {themeMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-10 rounded-xl overflow-hidden shadow-xl z-50"
                  style={{
                    background: "var(--theme-menu-bg, #0f172a)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    minWidth: "140px",
                  }}
                >
                  {(["light", "dark", "system"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => { setTheme(t); setThemeMenu(false); }}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-medium transition-colors duration-150 ${
                        theme === t
                          ? "text-sky-400 dark:text-sky-400"
                          : "dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900"
                      } dark:hover:bg-white/5 hover:bg-slate-100`}
                    >
                      {themeIcons[t]}
                      {{ light: "Jasny", dark: "Ciemny", system: "Systemowy" }[t]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <ScrollLink
            to="contact"
            smooth
            duration={600}
            className="cursor-pointer inline-block dark:bg-sky-400 bg-[#0050d8] dark:hover:bg-sky-300 hover:bg-[#0040b8] dark:text-[#080a12] text-white text-[12px] xl:text-[13px] 2xl:text-[15px] font-bold tracking-[0.08em] uppercase px-5 2xl:px-7 py-2 2xl:py-2.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 select-none"
          >
            Umów wizytę
          </ScrollLink>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setThemeMenu((v) => !v)}
            className="p-2 dark:text-slate-300 text-slate-500 transition-colors"
          >
            {themeIcons[theme]}
          </button>
          <button
            className="p-2 dark:text-slate-300 text-slate-600 hover:text-[#0050d8] dark:hover:text-sky-400 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          >
            <motion.div
              animate={open ? "open" : "closed"}
              variants={{ open: { rotate: 90 }, closed: { rotate: 0 } }}
              transition={{ duration: 0.25 }}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Theme menu mobile */}
      <AnimatePresence>
        {themeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden absolute right-14 top-14 rounded-xl overflow-hidden shadow-xl z-50"
            style={{
              background: "#0f172a",
              border: "1px solid rgba(255,255,255,0.08)",
              minWidth: "140px",
            }}
          >
            {(["light", "dark", "system"] as const).map((t) => (
              <button
                key={t}
                onClick={() => { setTheme(t); setThemeMenu(false); }}
                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-medium transition-colors ${
                  theme === t ? "text-sky-400" : "text-slate-400 hover:text-white"
                } hover:bg-white/5`}
              >
                {themeIcons[t]}
                {{ light: "Jasny", dark: "Ciemny", system: "Systemowy" }[t]}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden dark:bg-[#0a0d18]/95 bg-white/95 backdrop-blur-xl dark:border-white/[0.06] border-slate-200/80 border-t"
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
                  className="py-3 text-[14px] font-medium dark:text-slate-300 text-slate-600 hover:text-[#0050d8] dark:hover:text-sky-400 transition-colors cursor-pointer dark:border-white/[0.05] border-slate-200/80 border-b last:border-none"
                >
                  {l.label}
                </ScrollLink>
              ))}
              <ScrollLink
                to="contact"
                smooth
                duration={600}
                onClick={close}
                className="mt-3 mb-1 text-center cursor-pointer dark:bg-sky-400 bg-[#0050d8] dark:hover:bg-sky-300 hover:bg-[#0040b8] dark:text-[#080a12] text-white text-[13px] font-bold tracking-wide uppercase py-3 rounded-lg transition-colors select-none"
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