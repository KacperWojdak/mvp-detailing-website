import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { IoMdPin } from "react-icons/io";

const position: [number, number] = [51.217739, 16.075089];

const customIcon = new L.DivIcon({
  html: renderToStaticMarkup(<IoMdPin className="text-red-500 text-4xl" />),
  iconSize: [40, 50],
  className: "custom-pin",
});

const Location = () => {
  return (
    <section
      id="location"
      className="bg-gradient-to-b from-[#0e111d] to-[#141829] py-24 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Nasza lokalizacja</h2>
        <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg mx-2 sm:mx-0">
          <MapContainer 
            center={position} 
            zoom={15} 
            scrollWheelZoom={true}
            className="w-full h-full z-10"
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
                <Popup className="custom-popup">
                    <div className="space-y-1">
                    <h3 className="font-bold">MVP Detailing</h3>
                    <p>Gniewomirowice 320C<br />59-222</p>
                    <a
                        href={`https://www.google.com/maps?daddr=${position[0]},${position[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-blue-600 hover:underline text-sm"
                    >
                        <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        Otwórz w Google Maps©
                        </span>
                    </a>
                    </div>
                </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Location;