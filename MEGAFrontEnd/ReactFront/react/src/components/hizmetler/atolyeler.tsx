import { motion } from "framer-motion";

import { MapPin, Phone, Info, X } from 'lucide-react';
import React, { useState } from "react";
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
        details: "Çocukların yaratıcı ve eğitsel gelişimini destekleyen çeşitli aktiviteler sunuyoruz.",
        detailPage: "/hizmetler/atolyeler/enderun"
    },
    {
        id: 2,
        name: "Gençlik Atölyesi",
        phone: "0262 644 33 78",
        address: "Hacı Halil Mah. Zübeyde Hanım Cad. Eyüp Güvenç İş Merkezi Gebze",
        image: "/images/hizmetler/atölyeler/gençlik.jpg",
        mapLink: "https://www.google.com/maps/place/GESMEK+-+Gebze+Belediyesi+G%C3%BCzel+Sanatlar+ve+Meslek+E%C4%9Fitimi+Kurslar%C4%B1/@40.799833,29.433036,15z/data=!4m6!3m5!1s0x14cb208ec548401f:0x51d3b10ec2b5859a!8m2!3d40.799833!4d29.433036!16s%2Fg%2F11g6xrd_n2?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D",
        details: "Gençlerin yetenek ve becerilerini geliştirmek için özel programlar ve etkinlikler düzenliyoruz.",
        detailPage: "/hizmetler/atolyeler/genclik"
    },
    {
        id: 4,
        name: "Sportif Çocuk Atölyesi",
        phone: "0262 641 24 92",
        address: "Cumhuriyet Mah. Necip Fazıl Cad. No:102 Gebze Kocaeli",
        image: "/images/hizmetler/atölyeler/sportif.jpg",
        mapLink: "https://www.google.com/maps/place/Cumhuriyet,+Yeni+Ba%C4%9Fdat+Cd.+No:119,+41400+Gebze%2FKocaeli/@40.808399,29.3767127,18z/data=!3m1!4b1!4m5!3m4!1s0x14cadfa98c371e2f:0x21939a9f1a7d9e94!8m2!3d40.808397!4d29.377807?shorturl=1",
        details: "Çocukların fiziksel ve zihinsel gelişimini destekleyen çeşitli spor aktiviteleri düzenliyoruz.",
        detailPage: "/hizmetler/atolyeler/sportıf"
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
    whileHover={{ scale: 1.03, y: -4 }}
    className=" w-[500px] max-w-xs bg-white border border-orange-200 shadow-xl rounded-xl overflow-hidden transition-all relative flex flex-col items-center justify-between hover:shadow-xl text-center mx-auto"
        >
        {/* Resim */}
    <div className="w-full h-44 sm:h-48 md:h-52 lg:h-56">
        <img
            src={center.image}
            alt={center.name}
            className="object-cover w-full h-full"
        />
    </div>

    {/* Ayırıcı çizgi */}
    <div className="h-1 w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent shadow-md" />

    {/* İçerik */}
    <div className="p-4 flex flex-col flex-1 w-full">
        <p className="text-sm font-bold text-blue-500 text-center">{center.name}</p>
        <hr className="my-2 border-t border-gray-300" />

        <div className="space-y-2 mb-4 text-xs sm:text-sm">
            <div className="flex items-start">
                <MapPin className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                <p className="text-left">{center.address}</p>
            </div>

            <div className="flex items-center">
                <Phone className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                <p>{center.phone}</p>
            </div>
        </div>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
            <a
                href={center.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-700 text-blue-800 rounded-md hover:from-sky-600 hover:to-sky-800 transition-all shadow-md text-xs sm:text-sm flex-1"
            >
                <MapPin className="w-4 h-4 mr-2" />
                Konum
            </a>

            <button
                onClick={handleDetailsClick}
                className={`flex items-center justify-center px-4 py-2 rounded-md transition-all shadow-md text-xs sm:text-sm flex-1 ${
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

export default function AtolyelerSayfasi() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1">
                {/* Sidebar - %20 genişlikte ve sabit */}

                <br/>
                {/* Ana İçerik Alanı */}
                <div className="flex-1 p-4">
                    {/* Atölye Merkezleri - Satır başına 2 kart */}
                    <section className="mb-40">
                        <br/>


                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-10 ">
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