import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/mvplogo.jpg";

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
      className="relative h-screen bg-[#0e111d] text-white flex items-center justify-center overflow-hidden"
    >
      {/* Watermark logo */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="opacity-10 object-contain max-w-[120vw] sm:max-w-[100vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw]"
          style={{ transform: `scale(${scale})`, transition: "transform 0.3s ease-out" }}
        />
      </div>

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% -10%, rgba(56,189,248,0.18) 0%, transparent 65%),
            radial-gradient(ellipse 40% 30% at 20% 80%, rgba(99,102,241,0.1) 0%, transparent 60%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-sky-400">
            MVP - Profesjonalny detailing samochodowy
          </span>
        </div>

        <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight">
          Twój samochód zasługuje na{" "}
          <span className="text-sky-400">więcej</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 mb-12 px-2 leading-relaxed">
          Specjalizujemy się w precyzyjnej pielęgnacji lakieru, detailingu wnętrza
          i zabezpieczeniach ceramicznych. Każde auto traktujemy z pasją i dbałością
          o każdy detal.
        </p>

        <div className="flex flex-row gap-3 justify-center">
          <ScrollLink
            to="contact"
            smooth
            duration={600}
            className="cursor-pointer inline-block bg-sky-400 hover:bg-sky-300 text-[#0e111d] px-8 py-3 font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base select-none"
          >
            Umów wizytę
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth
            duration={600}
            className="cursor-pointer inline-block border border-white/20 hover:border-sky-400/50 hover:text-sky-400 text-slate-200 px-8 py-3 font-semibold rounded-lg transition-all duration-200 text-sm sm:text-base select-none"
          >
            Zobacz usługi
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;