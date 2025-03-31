export default function Navbar() {
    return (
      <nav className="fixed w-full bg-white shadow z-10">
        <ul className="flex justify-center gap-8 py-4">
          <li><a href="#hero" className="hover:text-blue-500">Start</a></li>
          <li><a href="#about" className="hover:text-blue-500">O nas</a></li>
          <li><a href="#services" className="hover:text-blue-500">Usługi</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Kontakt</a></li>
        </ul>
      </nav>
    );
  }
  