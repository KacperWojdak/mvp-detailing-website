import detailingImage from "../assets/autodetail2.jpg";

const AboutUs = () => {
  return (
    <section id="aboutus" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Kim jesteśmy?</h2>
          <p className="text-slate-700 text-lg">
            Jesteśmy Paweł i Wiktor, dwójka młodych pasjonatów motoryzacji, którzy postanowili połączyć swoje hobby z biznesem i stworzyć MVP Detailing- studio detailingu samochodowego.
          </p>
          <p className="text-slate-600">
            MVP Detailing to więcej niż tylko studio pielęgnacji samochodów — to pasja, precyzja i zamiłowanie do perfekcji. Specjalizujemy się w profesjonalnym detailingu, który wydobywa z Twojego auta to, co najlepsze.          </p>
        </div>
        <div className="relative w-full h-72 md:h-full rounded-2xl overflow-hidden shadow-lg">
          <img
            src={detailingImage}
            alt="Detailing samochodu"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;