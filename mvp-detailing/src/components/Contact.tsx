import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import { usePricingStore } from "../store/usePricingStore";

const PACKAGES = ["", "Basic", "Premium", "Elite", "Wycena indywidualna"];
const COOLDOWN_MS = 5 * 60 * 1000;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const { selectedPackage, setSelectedPackage } = usePricingStore();

  const canSend = () => {
    const last = localStorage.getItem("mvp_last_sent");
    if (!last) return true;
    return Date.now() - parseInt(last) > COOLDOWN_MS;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError("");

    if (!canSend()) {
    setError("Możesz wysłać kolejną wiadomość dopiero za kilka minut.");
    setIsSending(false);
    return;
    }
    
    const form = formRef.current!;
    
    if ((form.elements.namedItem("website") as HTMLInputElement)?.value)  {
    setIsSent(true);
    setIsSending(false);
    return;
}

    if (!form.from_name.value?.trim()) { setError("Podaj imię i nazwisko."); setIsSending(false); return; }
    if (!form.from_email.value?.trim()) { setError("Podaj adres email."); setIsSending(false); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email.value)) { setError("Podaj poprawny adres email."); setIsSending(false); return; }
    if (!form.message.value?.trim()) { setError("Wpisz treść wiadomości."); setIsSending(false); return; }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(() => { setIsSent(true); form.reset(); setSelectedPackage(""); localStorage.setItem("mvp_last_sent", Date.now().toString()); })
      .catch((err) => { setError("Wystąpił błąd podczas wysyłania. Spróbuj ponownie."); console.error(err); })
      .finally(() => setIsSending(false));
  };

  const inputCls = "w-full px-4 2xl:px-5 py-3.5 2xl:py-4 rounded-xl text-[14px] 2xl:text-[16px] dark:text-slate-100 text-slate-800 dark:placeholder-slate-600 placeholder-slate-500 outline-none transition-all duration-200 dark:[background:rgba(255,255,255,0.04)] [background:rgba(255,255,255,0.7)] dark:[border:1px_solid_rgba(255,255,255,0.08)] [border:1px_solid_rgba(0,80,216,0.25)] dark:focus:[border-color:rgba(56,189,248,0.5)] focus:[border-color:rgba(0,80,216,0.5)]";

  return (
    <section
      id="contact"
      className="dark:bg-gradient-to-b dark:from-[#0e111d] dark:via-[#111523] dark:to-[#0e111d] bg-gradient-to-b from-[#f0f7ff] via-[#e8f5ff] to-[#f0f7ff] py-24 2xl:py-36 px-6 md:px-12 2xl:px-24"
    >
      <div ref={sectionRef} className="max-w-2xl 2xl:max-w-3xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center mb-12 gap-3"
        >
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-5 dark:bg-sky-400 bg-[#0050d8]" />
            <span className="text-[11px] 2xl:text-[13px] font-bold tracking-[0.14em] uppercase dark:text-sky-400 text-[#0050d8]">
              Kontakt
            </span>
            <span className="h-px w-5 dark:bg-sky-400 bg-[#0050d8]" />
          </div>
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold dark:text-white text-slate-900 text-center">
            Umów wizytę
          </h2>
          <p className="dark:text-slate-500 text-slate-600 text-[15px] 2xl:text-[17px] text-center">
            Napisz do nas — odezwiemy się.
          </p>
        </motion.div>

        {/* Form */}
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
              <div className="dark:text-sky-400 text-[#0050d8] text-[40px] mb-3">✓</div>
              <h3 className="text-[18px] font-bold dark:text-slate-100 text-slate-900 mb-2">Wiadomość wysłana!</h3>
              <p className="text-[14px] dark:text-slate-400 text-slate-600">Dziękujemy za kontakt. Skontaktujemy się najszybciej jak to możliwe.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={sendEmail} className="space-y-3">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Imię i nazwisko"
                  className={inputCls}
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Adres e-mail"
                  className={inputCls}
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Numer telefonu (opcjonalnie)"
                className={inputCls}
              />

              <select
                name="package"
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value as any)}
                className={inputCls}
                style={{ appearance: "none" }}
              >
                <option value="" className="dark:bg-[#0e111d] bg-[#e8f5ff]">Wybierz pakiet (opcjonalnie)</option>
                {PACKAGES.filter(p => p !== "").map((p) => (
                  <option key={p} value={p} className="dark:bg-[#0e111d] bg-[#e8f5ff]">{p}</option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Opisz swój samochód i czego potrzebujesz..."
                rows={5}
                className={`${inputCls} resize-none`}
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
                className={`w-full py-4 2xl:py-5 rounded-xl text-[14px] 2xl:text-[16px] font-bold tracking-wide transition-all duration-200 ${
                  isSending
                    ? "opacity-60 cursor-wait dark:bg-sky-400 bg-[#0050d8] dark:text-[#0e111d] text-white"
                    : "dark:bg-sky-400 bg-[#0050d8] dark:hover:bg-sky-300 hover:bg-[#0040b8] dark:text-[#0e111d] text-white hover:-translate-y-0.5"
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