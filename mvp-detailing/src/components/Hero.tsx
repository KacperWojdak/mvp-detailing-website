import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-slate-950 text-white flex items-center justify-center px-4"
    >
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Profesjonalny detailing samochodowy
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8">
          Zadbaj o wygląd swojego auta z klasą i precyzją. Detailing klasy premium w Twoim mieście.
        </p>
        <ScrollLink
          to="contact"
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