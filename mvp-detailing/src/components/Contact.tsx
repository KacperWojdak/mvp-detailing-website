import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError("");

    const form = formRef.current!;

    if (!form.from_name.value?.trim()) {
      setError("Podaj imię i nazwisko.");
      setIsSending(false);
      return;
    }
    if (!form.from_email.value?.trim()) {
      setError("Podaj adres email.");
      setIsSending(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email.value)) {
      setError("Podaj poprawny adres email.");
      setIsSending(false);
      return;
    }
    if (!form.message.value?.trim()) {
      setError("Wpisz treść wiadomości.");
      setIsSending(false);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setIsSent(true);
        form.reset();
      })
      .catch((err) => {
        setError("Wystąpił błąd podczas wysyłania. Spróbuj ponownie.");
        console.error("EmailJS Error:", err);
      })
      .finally(() => setIsSending(false));
  };

  const inputCls =
    "w-full px-4 py-3.5 rounded-xl text-[14px] text-slate-100 placeholder-slate-600 outline-none transition-all duration-200 focus:border-sky-400/50";
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#0e111d] via-[#111523] to-[#0e111d] py-24 px-6 md:px-12"
    >
      <div ref={sectionRef} className="max-w-2xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center mb-12 gap-3"
        >
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-5 bg-sky-400" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-sky-400">
              Kontakt
            </span>
            <span className="h-px w-5 bg-sky-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Umów wizytę
          </h2>
          <p className="text-slate-500 text-[15px] text-center">
            Napisz do nas — odpiszemy najszybciej jak to możliwe.
          </p>
        </motion.div>

        {/* Form / Success */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          {isSent ? (
            <div
              className="rounded-2xl p-10 text-center"
              style={{ background: "rgba(56,189,248,0.06)", border: "1px solid rgba(56,189,248,0.2)" }}
            >
              <div className="text-sky-400 text-[40px] mb-3">✓</div>
              <h3 className="text-[18px] font-bold text-slate-100 mb-2">Wiadomość wysłana!</h3>
              <p className="text-[14px] text-slate-400">
                Dziękujemy za kontakt. Odpiszemy najszybciej jak to możliwe.
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={sendEmail} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Imię i nazwisko"
                  className={inputCls}
                  style={inputStyle}
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Adres e-mail"
                  className={inputCls}
                  style={inputStyle}
                />
              </div>
              <textarea
                name="message"
                placeholder="Opisz swój samochód i czego potrzebujesz..."
                rows={5}
                className={`${inputCls} resize-none`}
                style={inputStyle}
              />

              {error && (
                <div
                  className="rounded-lg px-4 py-3 text-[13px] text-red-400"
                  style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-4 rounded-xl text-[14px] font-bold tracking-wide transition-all duration-200 ${
                  isSending
                    ? "opacity-60 cursor-wait bg-sky-400 text-[#0e111d]"
                    : "bg-sky-400 hover:bg-sky-300 text-[#0e111d] hover:-translate-y-0.5"
                }`}
              >
                {isSending ? "Wysyłanie..." : "Wyślij wiadomość →"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;