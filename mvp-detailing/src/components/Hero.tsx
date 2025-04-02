import { useEffect, useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/mvplogo.jpg";

const Hero = () => {
  const [scale, setScale] = useState(1.25);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight;
      const scaleValue = Math.max(1, 1.25 - scrollTop / maxScroll * 0.25);
      setScale(scaleValue);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen bg-[#0e111d] text-white flex items-center justify-center overflow-hidden"
    >
      {/* Logo w tle */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src={logo}
          alt="MVP Detailing Background"
          className="opacity-10 object-contain max-w-[120vw] sm:max-w-[100vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw]"
          style={{ transform: `scale(${scale})`, transition: "transform 0.3s ease-out" }}
        />
      </div>

      {/* Tekst */}
      <div ref={textRef} className="relative text-center max-w-2xl z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          MVP Detailing
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ScrollLink
          to="afterhero"
          smooth
          duration={600}
          className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 font-medium rounded-md transition"
        >
          Umów wizytę
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;