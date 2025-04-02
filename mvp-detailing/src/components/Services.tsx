const services = [
    {
      title: "Detailing zewnętrzny",
      description:
        "Kompleksowa pielęgnacja karoserii: mycie ręczne, dekontaminacja, glinkowanie, korekta lakieru, woskowanie i zabezpieczenie powłoką.",
      icon: "🚗",
    },
    {
      title: "Detailing wnętrza",
      description:
        "Czyszczenie i impregnacja tapicerki, plastików, podsufitki, szyb i detali. Pracujemy zarówno na skórze, jak i materiałach tekstylnych.",
      icon: "🧼",
    },
    {
      title: "Zabezpieczenia ceramiczne",
      description:
        "Trwała ochrona karoserii przed czynnikami atmosferycznymi. Nadajemy połysk i głębię koloru na wiele miesięcy.",
      icon: "🛡️",
    },
    {
      title: "Renowacja reflektorów",
      description:
        "Przywracamy przejrzystość i wygląd reflektorom, poprawiając bezpieczeństwo i estetykę pojazdu.",
      icon: "💡",
    },
  ];
  
  const Services = () => {
    return (
      <section id="services" className="bg-slate-50 py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Nasze usługi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;