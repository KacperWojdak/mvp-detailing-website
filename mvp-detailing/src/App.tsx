import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Pricing />
      <Location />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
