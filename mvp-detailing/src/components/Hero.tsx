import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/mvplogo.jpg";
import logoBright from "../assets/mvplogo_bright.png";

const Hero = () => {
  const [scale, setScale] = useState(1.25);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight;
      const scaleValue = Math.max(1, 1.25 - (scrollTop / maxScroll) * 0.25);
      setScale(scaleValue);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen dark:bg-[#0e111d] bg-[#f8fafc] dark:text-white text-slate-900 flex items-center justify-center overflow-hidden"
    >
      {/* Watermark logo */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src={logoBright}
          alt=""
          aria-hidden="true"
          className="dark:hidden block opacity-10 object-contain max-w-[120vw] sm:max-w-[100vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw]"
          style={{ transform: `scale(${scale * 0.75})`, transition: "transform 0.3s ease-out" }}
        />
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="dark:block hidden opacity-10 object-contain max-w-[120vw] sm:max-w-[100vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw]"
          style={{ transform: `scale(${scale})`, transition: "transform 0.3s ease-out" }}
        />
      </div>

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% -10%, rgba(0,80,216,0.08) 0%, transparent 65%),
            radial-gradient(ellipse 40% 30% at 20% 80%, rgba(0,80,216,0.05) 0%, transparent 60%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 rounded-full dark:border-sky-400/20 border-[#0050d8]/20 dark:bg-sky-400/10 bg-[#0050d8]/8 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full dark:bg-sky-400 bg-[#0050d8] animate-pulse" />
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase dark:text-sky-400 text-[#0050d8]">
            MVP - Profesjonalny detailing samochodowy
          </span>
        </div>

        <h1 className="text-4xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight dark:text-white text-slate-900">
          Twój samochód zasługuje na{" "}
          <span className="dark:text-sky-400 text-[#0050d8]">więcej</span>
        </h1>

        <p className="text-base sm:text-lg xl:text-xl 2xl:text-2xl dark:text-white text-black mb-12 px-2 leading-relaxed">
          Specjalizujemy się w precyzyjnej pielęgnacji lakieru, detailingu wnętrza
          i zabezpieczeniach ceramicznych. Każde auto traktujemy z pasją i dbałością
          o każdy detal.
        </p>

        <div className="flex flex-row gap-3 justify-center">
          <ScrollLink
            to="contact"
            smooth
            duration={600}
            className="cursor-pointer inline-block dark:bg-sky-400 bg-[#0050d8] dark:hover:bg-sky-300 hover:bg-[#0040b8] dark:text-[#0e111d] text-white px-8 2xl:px-12 py-3 2xl:py-4 font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base 2xl:text-lg select-none"
          >
            Umów wizytę
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth
            duration={600}
            className="cursor-pointer inline-block dark:border-white/20 border-slate-300 dark:hover:border-sky-400/50 hover:border-[#0050d8] dark:hover:text-sky-400 hover:text-[#0050d8] dark:text-slate-200 text-slate-600 border px-8 2xl:px-12 py-3 2xl:py-4 font-semibold rounded-lg transition-all duration-200 text-sm sm:text-base 2xl:text-lg select-none"
          >
            Zobacz usługi
          </ScrollLink>
        </div>
      </div>
  </section>
  );
};

export default Hero;