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
        image: "/images/hizmetler/egitimler/41genç.jpg",
        mapLink: "https://www.google.com.tr/maps/place/Cumak%C3%B6y,+41400+Gebze%2FKocaeli/@40.9264301,29.4788978,13z/data=!3m1!4b1!4m6!3m5!1s0x14cb2ed02b79abf9:0xf12cb2e4521d3b6!8m2!3d40.9239106!4d29.5165713!16s%2Fg%2F11dxb218n_?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
        details: "Sanat, kültür ve bilim alanlarında çeşitli atölyeler ve aktiviteler sunuyoruz.",
        detailPage: "/hizmetler/egitimler/genc" // Buradaki path'i güncelledim
    },
    {
        id: 1,
        name: "Doğru Tercih Hazırlık Kursları",
        phone: "0262 641 24 93",
        address: "Cumhuriyet Mah. Necip Fazıl Cad. No:102 Gebze Kocaeli",
        image: "/images/hizmetler/egitimler/hazırkurslar.jpg",
        mapLink: "https://www.google.com/maps/place/Cumhuriyet,+Yeni+Ba%C4%9Fdat+Cd.+No:119,+41400+Gebze%2FKocaeli/@40.808399,29.3767127,18z/data=!3m1!4b1!4m5!3m4!1s0x14cadfa98c371e2f:0x21939a9f1a7d9e94!8m2!3d40.808397!4d29.377807?shorturl=1",
        details: "Çocukların yaratıcı ve eğitsel gelişimini destekleyen çeşitli aktiviteler sunuyoruz.",
        detailPage: "/hizmetler/egitimler/tercih"
    },
    {
        id: 2,
        name: "Fıtness",
        phone: "0262 641 24 92",
        address: "Cumhuriyet Mah. Necip Fazıl Cad. No:102 Gebze/KOCAELİ",
        image: "/images/hizmetler/egitimler/fıtness.jpg",
        mapLink: "https://www.google.com/maps/place/Eray+%C5%9Eamdan+Spor+Salonu/@40.8090748,29.3786323,18z/data=!4m6!3m5!1s0x14cadf018db0cbf7:0x98b7941fd4f10fb3!8m2!3d40.8091904!4d29.3782963!16s%2Fg%2F11sw47tbj0?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D",
        details: "Gençlerin yetenek ve becerilerini geliştirmek için özel programlar ve etkinlikler düzenliyoruz.",
        detailPage: "/hizmetler/egitimler/fitness"
    },
    {
        id: 5,
        name: "Step Aorebik",
        phone: " 0262 641 24 92",
        address: " Cumhuriyet Mah. Necip Fazıl Cad. No:102 Gebze/KOCAELİ",
        image: "/images/hizmetler/egitimler/step.jpg",
        mapLink: "https://www.google.com/maps/place/Eray+%C5%9Eamdan+Spor+Salonu/@40.8090748,29.3786323,18.5z/data=!4m6!3m5!1s0x14cadf018db0cbf7:0x98b7941fd4f10fb3!8m2!3d40.8091904!4d29.3782963!16s%2Fg%2F11sw47tbj0?entry=tts&g_ep=EgoyMDI1MDQwOC4wIPu8ASoASAFQAw%3D%3D&skid=3b4bc55a-cb80-40d2-9128-3176014feaa3",
        details: "Çocukların fiziksel ve zihinsel gelişimini destekleyen çeşitli spor aktiviteleri düzenliyoruz.",
        detailPage: "/hizmetler/egitimler/Aerobic"
    },
    {
        id: 4,
        name: "Yaz ve Kış Okulları",
        phone: "0262 641 24 92",
        address: "Cumhuriyet Mah. Necip Fazıl Cad. No:102 Gebze Kocaeli",
        image: "/images/hizmetler/egitimler/yazkışokulları.jpg",
        mapLink: "https://www.google.com/maps/place/Gebze+K%C3%BClt%C3%BCr+Merkezi/@40.8074201,29.4398777,15.25z/data=!4m5!3m4!1s0x0:0x6f17b50e45cc6c97!8m2!3d40.7979754!4d29.4299296?shorturl=1",
        details: "Çocukların fiziksel ve zihinsel gelişimini destekleyen çeşitli spor aktiviteleri düzenliyoruz.",
        detailPage: "/hizmetler/egitimler/yaz"
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
                                    EĞİTİMLER
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
