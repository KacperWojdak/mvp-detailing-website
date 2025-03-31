import { useEffect, useState } from "react";
import logo from "../assets/mvplogo.webp";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <ScrollLink to="hero" smooth duration={600} className="cursor-pointer flex items-center gap-3">
          <img src={logo} alt="MVP Detailing" className="h-10 w-auto" />
          <span className="text-lg font-semibold tracking-wider text-sky-500">M.V.P Detailing</span>
        </ScrollLink>

        <nav className="hidden md:flex items-center gap-6 text-slate-700 font-medium">
          <ScrollLink to="about" smooth duration={600} className="hover:text-sky-500 cursor-pointer">O nas</ScrollLink>
          <ScrollLink to="services" smooth duration={600} className="hover:text-sky-500 cursor-pointer">Usługi</ScrollLink>
          <ScrollLink to="gallery" smooth duration={600} className="hover:text-sky-500 cursor-pointer">Galeria</ScrollLink>
          <ScrollLink to="contact" smooth duration={600} className="hover:text-sky-500 cursor-pointer">Kontakt</ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;