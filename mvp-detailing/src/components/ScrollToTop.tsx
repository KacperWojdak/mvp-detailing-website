// src/components/ScrollToTop.tsx
import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => scroll.scrollToTop({ duration: 600, smooth: true })}
      aria-label="Wróć na górę"
      className={`cursor-pointer fixed bottom-6 right-6 2xl:bottom-10 2xl:right-10 z-50 w-11 h-11 2xl:w-14 2xl:h-14 rounded-full bg-sky-400 hover:bg-sky-300 text-[#0e111d] flex items-center justify-center shadow-lg transition-all duration-300 ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ChevronUp className="w-5 h-5 2xl:w-6 2xl:h-6" />
    </button>
  );
};

export default ScrollToTop;