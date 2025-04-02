import { useEffect, useState } from "react";
import logo from "../assets/mvplogo.webp";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const background = scrollY > 100 ? "bg-white/90 shadow" : "bg-transparent";
  const textColor = scrollY > 100 ? "text-raisin-100" : "text-white";
  const showBrand = scrollY > 100;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-600 ease-in-out ${background}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <ScrollLink to="hero" smooth duration={600} className="cursor-pointer flex items-center gap-3">
          <img
            src={logo}
            alt="MVP Detailing"
            className={`transition-all duration-300 ${
              scrollY > 100 ? "h-10" : "h-0"
            } w-auto overflow-hidden`}
          />
          <span className={`transition-all duration-300 ${
              showBrand ? "opacity-100" : "opacity-0"
            } text-lg font-semibold tracking-wider ${textColor}`}>MVP Detailing</span>
        </ScrollLink>

        <nav className={`hidden md:flex items-center gap-6 font-medium ${textColor}`}>
          <ScrollLink to="aboutus" smooth duration={600} className="hover:text-sky-500 cursor-pointer">O nas</ScrollLink>
          <ScrollLink to="services" smooth duration={600} className="hover:text-sky-500 cursor-pointer">Usługi</ScrollLink>
          <ScrollLink to="gallery" smooth duration={600} className="hover:text-sky-500 cursor-pointer">Galeria</ScrollLink>
          <ScrollLink to="contact" smooth duration={600} className="hover:text-sky-500 cursor-pointer">Kontakt</ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;