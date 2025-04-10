import { useEffect, useState } from "react";
import logo from "../assets/mvplogo.webp";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollY > 100;
  const background = isScrolled ? "bg-white/90 shadow" : "bg-transparent";
  const textColor = isScrolled ? "text-gray-800" : "text-white";
  const showBrand = isScrolled;
  const mobileMenuBg = isScrolled ? "bg-white/95" : "bg-[#0e111d]/95";
  const mobileMenuText = isScrolled ? "text-gray-800" : "text-white";

  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.3
      }
    },
    exit: { 
      y: "-100%",
      opacity: 0,
      transition: {
        ease: "easeIn",
        duration: 0.2
      }
    }
  };

  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${background}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <ScrollLink 
          to="hero" 
          smooth 
          duration={600} 
          className="cursor-pointer flex items-center gap-3"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src={logo}
            alt="MVP Detailing"
            className={`transition-all duration-300 ${
              showBrand ? "h-10" : "h-0"
            } w-auto overflow-hidden`}
          />
          <span className={`transition-all duration-300 ${
              showBrand ? "opacity-100" : "opacity-0"
            } text-lg font-semibold tracking-wider ${textColor}`}>
            MVP Detailing
          </span>
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-6 font-medium ${textColor}`}>
          <ScrollLink to="aboutus" smooth duration={600} className="hover:text-sky-500 cursor-pointer transition">O nas</ScrollLink>
          <ScrollLink to="services" smooth duration={600} className="hover:text-sky-500 cursor-pointer transition">Usługi</ScrollLink>
          <ScrollLink to="pricing" smooth duration={600} className="hover:text-sky-500 cursor-pointer transition">Cennik</ScrollLink>
          <ScrollLink to="location" smooth duration={600} className="hover:text-sky-500 cursor-pointer transition">Mapa</ScrollLink>
          <ScrollLink to="contact" smooth duration={600} className="hover:text-sky-500 cursor-pointer transition">Kontakt</ScrollLink>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          animate={mobileMenuOpen ? "open" : "closed"}
          variants={iconVariants}
          transition={{ duration: 0.3 }}
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${textColor}`} />
          ) : (
            <Menu className={`w-6 h-6 ${textColor}`} />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className={`md:hidden ${mobileMenuBg} backdrop-blur-md w-full absolute top-full left-0 shadow-lg overflow-hidden`}
          >
            <nav className="flex flex-col items-center py-4 gap-1">
              <ScrollLink 
                to="aboutus" 
                smooth 
                duration={600} 
                className={`w-full text-center py-3 px-4 ${mobileMenuText} hover:bg-white/10 transition`}
                onClick={() => setMobileMenuOpen(false)}
              >
                O nas
              </ScrollLink>
              <ScrollLink 
                to="services" 
                smooth 
                duration={600} 
                className={`w-full text-center py-3 px-4 ${mobileMenuText} hover:bg-white/10 transition`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Usługi
              </ScrollLink>
              <ScrollLink 
                to="pricing" 
                smooth 
                duration={600} 
                className={`w-full text-center py-3 px-4 ${mobileMenuText} hover:bg-white/10 transition`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Cennik
              </ScrollLink>
              <ScrollLink 
                to="location" 
                smooth 
                duration={600} 
                className={`w-full text-center py-3 px-4 ${mobileMenuText} hover:bg-white/10 transition`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Mapa
              </ScrollLink>
              <ScrollLink 
                to="contact" 
                smooth 
                duration={600} 
                className={`w-full text-center py-3 px-4 ${mobileMenuText} hover:bg-white/10 transition`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </ScrollLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;