import { motion } from "framer-motion";

import { MapPin, Phone, Info, X } from 'lucide-react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Atölye merkezi verileri
const atolyeMerkezleri = [
    {
        id: 3,
        name: "Güzide Gençlik Merkezi Atölyeleri",
        phone: "0262 646 95 86",
        address: "Hacıhalil Mah. Adliye Cad. No: 38 41400 Gebze / KOCAELİ",
        image: "/images/hizmetler/atölyeler/güzide.jpg",
        mapLink: "https://www.google.com.tr/maps/search/40.796793,+29.436732?entry=tts",
        details: "Sanat, kültür ve bilim alanlarında çeşitli atölyeler ve aktiviteler sunuyoruz.",
        detailPage: "/hizmetler/atolyeler/guzide" // Buradaki path'i güncelledim
    },
    {
        id: 1,
        name: "Enderun Çocuk Atölyeleri",
        phone: "0262 643 03 30",
        address: "Mustafapaşa Mah. 712/2 Sok. No:2 Gebze / Kocaeli",
        image: "/images/hizmetler/atölyeler/enderun.webp",
        mapLink: "https://www.google.com/maps/place/Mustafapa%C5%9Fa,+712%2F2.+Sk.+No:2,+41400+Gebze%2FKocaeli/@40.802388,29.427409,18z/data=!4m6!3m5!1s0x14cb2085a55b34a1:0xfb2fb8bc3b387035!8m2!3d40.802388!4d29.427409!16s%2Fg%2F11c2927bq_?hl=tr&entry=tts&g_ep=EgoyMDI0MDYyNi4wKgBIAVAD",
        details: "Çocukların yaratıcı ve eğitsel gelişimini destekleyen çeşitli aktiviteler sunuyoruz."
    },
    {
        id: 2,
        name: "Gençlik Atölyesi",
        phone: "0262 644 33 78",
        address: "Hacı Halil Mah. Zübeyde Hanım Cad. Eyüp Güvenç İş Merkezi Gebze",
        image: "/images/hizmetler/atölyeler/gençlik.jpg",
        mapLink: "https://www.google.com/maps/place/GESMEK+-+Gebze+Belediyesi+G%C3%BCzel+Sanatlar+ve+Meslek+E%C4%9Fitimi+Kurslar%C4%B1/@40.799833,29.433036,15z/data=!4m6!3m5!1s0x14cb208ec548401f:0x51d3b10ec2b5859a!8m2!3d40.799833!4d29.433036!16s%2Fg%2F11g6xrd_n2?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D",
        details: "Gençlerin yetenek ve becerilerini geliştirmek için özel programlar ve etkinlikler düzenliyoruz."
    },
    {
        id: 4,
        name: "Sportif Çocuk Atölyesi",
        phone: "0262 641 24 92",
        address: "Cumhuriyet Mah. Necip Fazıl Cad. No:102 Gebze Kocaeli",
        image: "/images/hizmetler/atölyeler/sportif.jpg",
        mapLink: "https://www.google.com/maps/place/Cumhuriyet,+Yeni+Ba%C4%9Fdat+Cd.+No:119,+41400+Gebze%2FKocaeli/@40.808399,29.3767127,18z/data=!3m1!4b1!4m5!3m4!1s0x14cadfa98c371e2f:0x21939a9f1a7d9e94!8m2!3d40.808397!4d29.377807?shorturl=1",
        details: "Çocukların fiziksel ve zihinsel gelişimini destekleyen çeşitli spor aktiviteleri düzenliyoruz."
    }
];

// Atölye Merkezi Kartı Bileşeni - İyileştirilmiş versiyon
const WorkshopCenterCard = ({ center }: { center: typeof atolyeMerkezleri[0] }) => {
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
            whileHover={{ scale: 1.01 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-all relative flex flex-col h-auto"
        >
            {/* Resim */}
            <div className="h-60 w-full flex items-center justify-center">
                <img
                    src={center.image}
                    alt={center.name}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* İçerik */}
            <div className="p-4 flex flex-col flex-1">
                <h2 className="text-lg font-bold text-blue-800 mb-3">{center.name}</h2>

                <div className="space-y-3 mb-4 text-sm">
                    <div className="flex items-start">
                        <MapPin className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">{center.address}</p>
                    </div>

                    <div className="flex items-center">
                        <Phone className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                        <p className="text-gray-700">{center.phone}</p>
                    </div>
                </div>

                {/* Butonlar */}
                <div className="flex space-x-3 mt-auto">
                    <a
                        href={center.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-black rounded-md hover:from-blue-600 hover:to-blue-800 transition-all shadow-sm font-medium text-sm flex-1"
                    >
                        <MapPin className="w-4 h-4 mr-2" />
                        Konum
                    </a>

                    <button
                        onClick={handleDetailsClick}
                        className={`flex items-center justify-center px-4 py-2 rounded-md transition-all shadow-sm font-medium text-sm flex-1 ${
                            showDetails
                                ? "bg-gradient-to-r from-gray-400 to-gray-500 text-black hover:from-gray-500 hover:to-gray-600"
                                : "bg-gradient-to-r from-green-500 to-green-700 text-black hover:from-green-600 hover:to-green-800"
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

export default function AtolyelerSayfasi() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1">


                {/* Ana İçerik Alanı */}
                <div className="flex-1 p-4">
                    {/* Atölye Merkezleri - Satır başına 2 kart */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-6 flex items-center border-b pb-3">
                            <span className="text-blue-700">Atölye Merkezleri</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                            {atolyeMerkezleri.map((center) => (
                                <WorkshopCenterCard key={center.id} center={center} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}