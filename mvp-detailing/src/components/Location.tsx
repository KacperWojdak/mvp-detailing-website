import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { IoMdPin } from "react-icons/io";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const position: [number, number] = [51.162510, 16.048417];

const customIcon = new L.DivIcon({
  html: renderToStaticMarkup(<IoMdPin className="text-sky-400 text-4xl" />),
  iconSize: [40, 50],
  className: "custom-pin",
});

const Location = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="location"
      className="bg-gradient-to-b from-[#111523] via-[#0e111d] to-[#111523] py-24 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">

        {/* Badge */}
        <div className="flex flex-col items-center mb-12 gap-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-5 bg-sky-400" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-sky-400">
              Lokalizacja
            </span>
            <span className="h-px w-5 bg-sky-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Nasza lokalizacja
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6 items-stretch">

          {/* Karta informacyjna */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl p-7 flex flex-col gap-6 justify-between"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="space-y-5">
              {/* Adres */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}
                >
                  <MapPin className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-slate-500 mb-1">Adres</p>
                  <p className="text-slate-200 font-medium">Wilczyce 45</p>
                  <p className="text-slate-400 text-sm">59-223</p>
                </div>
              </div>

              {/* Godziny */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}
                >
                  <Clock className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-slate-500 mb-1">Godziny pracy</p>
                  <p className="text-slate-200 font-medium">Pon – Pt: 8:00 – 18:00</p>
                  <p className="text-slate-400 text-sm">Sob: 9:00 – 15:00</p>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-widets uppercase text-slate-500 mb-1">Telefon</p>
                  <p className="text-slate-200 font-medium">+48 604 589 815 - Paweł</p>
                  <p className="text-slate-200 font-medium">+48 790 590 465 - Wiktor</p>
                </div>
              </div>
            </div>

            {/* Przycisk Google Maps */}
            <a
              href={`https://www.google.com/maps?daddr=${position[0]},${position[1]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-[14px] text-sky-400 transition-all duration-200 hover:bg-sky-400 hover:text-[#0e111d]"
              style={{ border: "1px solid rgba(56,189,248,0.3)" }}
            >
              <Navigation className="w-4 h-4" />
              Otwórz w Google Maps
            </a>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.08)", minHeight: "340px" }}
          >
            <MapContainer
              center={position}
              zoom={15}
              scrollWheelZoom={false}
              className="w-full h-full"
              style={{ minHeight: "340px", zIndex: 0 }}
            >
              <TileLayer
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              />
              <Marker position={position} icon={customIcon}>
                <Popup>
                  <div className="space-y-1">
                    <h3 className="font-bold">MVP Detailing</h3>
                    <p>Wilczyce 45<br />59-223</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Location;