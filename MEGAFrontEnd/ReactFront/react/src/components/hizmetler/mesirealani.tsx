import { motion } from "framer-motion";
import { MapPin, Phone, Info, X } from 'lucide-react';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Atölye merkezi verileri
const egitimlermerkezi = [
    {
        id: 3,
        name: "Cumaköy Mesire Alanı",
        phone: "Belirtilmemiş",
        address: "Cumaköy Cumhuriyet Caddesi, No:136C, Cumaköy, Gebze İlçesi, Kocaeli",
        image: "/images/hizmetler/mesirealani/cumaköy.jpg",
        mapLink: "https://www.google.com/maps/dir//Cumak%C3%B6y,+41400+Gebze%2FKocaeli/@40.9101111,29.4104837,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cb290075c9e929:0xa93baeb721fda3b2!2m2!1d29.4928845!2d40.9101404?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoASAFQAw%3D%3D",
        details: "Sanat, kültür ve bilim alanlarında çeşitli atölyeler ve aktiviteler sunuyoruz.",
        detailPage: "/hizmetler/mesirealani/cumakoy" // Buradaki path'i güncelledim
    },
    {
        id: 1,
        name: "Gaziler Dağı Mesire Alanı",
        phone: "Belirtilmemiş",
        address: "Gaziler, Dicle Cd. No:48, 41400 Gebze/Kocaeli",
        image: "/images/hizmetler/mesirealani/gazilerdağı.jpg",
        mapLink: "https://www.google.com/maps/dir//Gaziler,+Dicle+Cd.+No:48,+41400+Gebze%2FKocaeli/@40.83049,29.3447269,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cb21e3f92f3d03:0xf3e8a2e6ff3f0764!2m2!1d29.4271277!2d40.8305193?hl=tr&entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoASAFQAw%3D%3D",
        details: "Çocukların yaratıcı ve eğitsel gelişimini destekleyen çeşitli aktiviteler sunuyoruz.",
        detailPage: "/hizmetler/mesirealani/gaziler"
    },
    {
        id: 2,
        name: "Yumrukaya Mesire Alanı",
        phone: "Belirtilmemiş",
        address: "Gaziler, İbrahim Ağa cd. 41400 Gebze/Kocaeli",
        image: "/images/hizmetler/mesirealani/yumrukaya.jpg",
        mapLink: "https://www.google.com/maps?sca_esv=178908ee291956e1&rlz=1C1CHBD_trTR1158TR1158&sxsrf=AHTn8zqCf6rECRs5rKleWVxA8AXMPnECTQ:1745583921085&gs_lp=Egxnd3Mtd2l6LXNlcnAiE3l1bXJ1IG1lc2lyZSBhbGFuxLEqAggAMgYQABgHGB4yCBAAGKIEGIkFMggQABiiBBiJBTIIEAAYgAQYogQyBRAAGO8FSMcaUABYnBBwAHgAkAEAmAHBA6ABzBKqAQkwLjEuMS40LjG4AQPIAQD4AQGYAgSgApMKwgIKEAAYgAQYQxiKBZgDAJIHCTAuMS4wLjIuMaAHhCKyBwkwLjEuMC4yLjG4B5MK&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&geocode=KUWYmaSxIMsUMZsOUWLuUeoe&daddr=Gaziler,+%C4%B0brahim+A%C4%9Fa+Cd.,+41400+Gebze/Kocaeli",
        details: "Gençlerin yetenek ve becerilerini geliştirmek için özel programlar ve etkinlikler düzenliyoruz.",
        detailPage: "/hizmetler/mesirealani/yumrukaya"
    }

];

// Atölye Merkezi Kartı Bileşeni
const WorkshopCenterCard = ({ center }: { center: typeof egitimlermerkezi[0] }) => {
    const [showDetails, setShowDetails] = useState(false);
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        if (center.detailPage) {
            navigate(center.detailPage);
        } else {
            setShowDetails(!showDetails);
        }
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            className="w-full md:w-2/5 sm:w-3/5 bg-white border border-orange-200 shadow-xl rounded-xl overflow-hidden transition-all relative flex flex-col md:flex-row min-h-[300px] p-4"
        >
            {/* Sol: Resim */}
            <div className="w-full md:w-1/3 h-[200px] md:h-auto">

                <img
                    src={center.image}
                    alt={center.name}
                    className="object-cover w-full h-full max-h-[270px] rounded-lg"
                />

            </div>

            {/* Sağ: İçerik */}
            <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
                <div>
                    <Link
                        to={center.detailPage}
                        className="text-lg font-bold text-blue-500 border-b-2 border-blue-400 pb-1 block"
                    >
                        {center.name}
                    </Link>
                    <br/>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                            <MapPin className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                            <p>{center.address}</p>
                        </div>

                        <div className="flex items-center">
                            <Phone className="w-5 h-5 text-blue-600 mr-2" />
                            <p>{center.phone}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <a
                        href={center.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-3 py-2 bg-gradient-to-r from-sky-500 to-sky-700 text-blue-800 rounded-md hover:from-sky-600 hover:to-sky-800 transition-all shadow-md text-xs flex-1"
                    >
                        <MapPin className="w-4 h-4 mr-2" />
                        Konum
                    </a>

                    <button
                        onClick={handleDetailsClick}
                        className={`flex items-center justify-center px-3 py-2 rounded-md transition-all shadow-md text-xs flex-1 ${
                            showDetails
                                ? "bg-gradient-to-r from-rose-400 to-pink-500 text-blue-800 hover:from-rose-500 hover:to-pink-600"
                                : "bg-gradient-to-r from-indigo-500 to-purple-600 text-blue-800 hover:from-indigo-600 hover:to-purple-700"
                        }`}
                    >
                        {showDetails ? (
                            <>
                                <X className="w-4 h-4 mr-2" />
                                Gizle
                            </>
                        ) : (
                            <>
                                <Info className="w-4 h-4 mr-2" />
                                Detaylı Bilgi
                            </>
                        )}
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default function Egitimlersayfasi() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1">
                <br />
                {/* Ana İçerik Alanı */}
                <div className="flex-1 px-6 pt-0 mt-[0px] pb-5"><br/>
                    {/* Atölye Merkezleri */}
                    <section className="mb-40">
                        <div className="max-w-6xl mx-auto px-4">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-[#891737] p-4 rounded-xl shadow-xl mb-5"
                            >
                                <div className="text-2xl font-semibold text-white text-center">
                               MESİRE ALANLARI
                                </div>
                            </motion.div>

                            {/* Kartlar */}
                            <div className="flex flex-wrap justify-center gap-6">
                                {egitimlermerkezi.map((center) => (
                                    <WorkshopCenterCard key={center.id} center={center} />
                                ))}
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
