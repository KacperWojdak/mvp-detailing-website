const services = [
    { name: "Mycie ręczne + wosk", price: "120 zł" },
    { name: "Detailing wnętrza", price: "250 zł" },
    { name: "Korekta lakieru (1 etap)", price: "400 zł" },
    { name: "Zabezpieczenie ceramiczne", price: "600 zł" },
    { name: "Pranie tapicerki materiałowej", price: "200 zł" },
    { name: "Renowacja reflektorów", price: "150 zł" },
  ];
  
  const Pricing = () => {
    return (
      <section
        id="pricing"
        className="bg-gradient-to-b from-[#1F2333] to-[#0e111d] py-24 px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Cennik usług
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-sky-500 text-white text-left">
                  <th className="py-4 px-6 text-lg font-medium">Usługa</th>
                  <th className="py-4 px-6 text-lg font-medium text-right">Cena</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-white/10 text-white" : "bg-white/5 text-slate-200"
                    }
                  >
                    <td className="py-4 px-6 text-left">{service.name}</td>
                    <td className="py-4 px-6 text-right">{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  };
  
  export default Pricing;
  