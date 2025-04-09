const Contact = () => {
    return (
      <section
        id="contact"
        className="bg-gradient-to-b from-[#141829] to-[#0e111d] py-24 px-6 md:px-12"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Skontaktuj się z nami i umów wizytę!
          </h2>
          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Imię i nazwisko"
                className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="email"
                placeholder="Adres e-mail"
                className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <textarea
              placeholder="Wiadomość..."
              rows={6}
              className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>
            <button
              type="submit"
              className="cursor-pointer bg-sky-500 hover:bg-sky-600 text-white py-3 px-8 rounded-lg font-medium transition duration-300"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  