import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError('');
  
    if (!formRef.current?.from_name.value?.trim()) {
      setError('Podaj imię i nazwisko');
      setIsSending(false);
      return;
    }
  
    if (!formRef.current?.from_email.value?.trim()) {
      setError('Podaj adres email');
      setIsSending(false);
      return;
    }

    const validateEmail = (email: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
  
    if (!validateEmail(formRef.current.from_email.value)) {
      setError('Podaj poprawny adres email (np. przyklad@domena.pl)');
      setIsSending(false);
      return;
    }
  
    if (!formRef.current?.message.value?.trim()) {
      setError('Wpisz treść wiadomości');
      setIsSending(false);
      return;
    }
    
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID!,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
      formRef.current!,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
    )
    
    .then(() => {
      setIsSent(true);
      formRef.current?.reset();
    })
    .catch((err) => {
      setError('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.');
      console.error('EmailJS Error:', err);
    })
    .finally(() => {
      setIsSending(false);
    });

  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#141829] to-[#0e111d] py-24 px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Skontaktuj się z nami i umów wizytę!
        </h2>
        
        {isSent ? (
          <div className="bg-green-500/20 text-green-400 p-6 rounded-lg border border-green-500/30">
            <h3 className="text-xl font-bold mb-2">Wiadomość wysłana!</h3>
            <p>Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.</p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={sendEmail} className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="from_name"
                placeholder="Imię i nazwisko"
                required
                className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Adres e-mail"
                required
                className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Wiadomość..."
              rows={6}
              required
              className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>
            
            {error && (
              <div className="text-red-400 bg-red-500/20 p-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className={`cursor-pointer bg-sky-500 hover:bg-sky-600 text-white py-3 px-8 rounded-lg font-medium transition duration-300 ${
                isSending ? 'opacity-70 cursor-wait' : ''
              }`}
            >
              {isSending ? 'Wysyłanie...' : 'Wyślij wiadomość'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;