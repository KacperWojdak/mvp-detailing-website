import { FaFacebookF, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#161b2d] text-slate-300 border-t border-white/10 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-center">
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">MVP Detailing</h3>
          <p className="text-sm text-center">
            Profesjonalna pielęgnacja Twojego pojazdu.
          </p>
        </div>

        <div>
          <h4 className="text-white text-lg font-medium mb-4">Kontakt</h4>
          <ul className="space-y-2 text-sm mx-auto text-center">
            <li className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-sky-500" /> +48 511 751 029
            </li>
            <li className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-sky-500" /> infomvpdetailing@gmail.com
            </li>
            <li className="flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-sky-500" /> Gniewomirowice 320C, 59-222
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-medium mb-4">Social Media</h4>
          <div className="flex flex-col items-center gap-2 text-sky-500 text-sm">
            <a
              href="https://www.facebook.com/profile.php?id=61573451274213"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaFacebookF className="text-lg" />
              <span>Odwiedź nasz profil na Facebooku</span>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 mt-12">
        &copy; {new Date().getFullYear()} MVP Detailing. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
};

export default Footer;
