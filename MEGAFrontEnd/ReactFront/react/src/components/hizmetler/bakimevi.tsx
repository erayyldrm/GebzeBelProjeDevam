
import { motion } from "framer-motion";
import { MapPin, Phone, Info, X } from 'lucide-react';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// Atölye merkezi verileri
const bebekbakimmerkezi = [
    {
        id: 3,
        name: "Güzide 7/24 Bebek ve Çocuk Bakım Evi",
        phone: " 0262 642 82 00 - 0530 557 42 59",
        address: "Osman Yılmaz Mah. 608/2 Sk. No:7 Gebze / Kocaeli",
        image: "/images/hizmetler/bebekbakım/bebekbakım.jpg",
        mapLink: "https://www.google.com.tr/maps/search/40.796793,+29.436732?entry=tts",
        details: "Sanat, kültür ve bilim alanlarında çeşitli atölyeler ve aktiviteler sunuyoruz.",
        detailPage: "/hizmetler/bebekbakım/bebekbakim" // Buradaki path'i güncelledim
    },

];

// Atölye Merkezi Kartı Bileşeni - İyileştirilmiş versiyon
const WorkshopCenterCard = ({ center }: { center: typeof bebekbakimmerkezi[0] }) => {
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
            className="h-[270px] w-[900px] bg-white border border-orange-200 shadow-xl rounded-xl overflow-hidden transition-all relative flex flex-row items-stretch hover:shadow-xl mx-auto"
        >
            {/* Sol: Resim */}
            <div className="w-1/3 h-auto">
                <img
                    src="/images/hizmetler/bebekbakım/bebekbakım.jpg"
                    alt={center.name}
                    className="object-cover w-[300px] h-[270px]"
                />
            </div>

            {/* Sağ: İçerik */}
            <div className="w-2/3 p-4 flex flex-col justify-between">
                <div>
                    <p className="text-lg font-bold text-blue-500">{center.name}</p>
                    <hr className="my-2 border-t border-gray-300" />

                    <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                            <MapPin className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />
                            <p>{center.address}</p>
                        </div>

                        <div className="flex items-center">
                            <Phone className="w-4 h-4 text-blue-600 mr-2" />
                            <p>{center.phone}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                    <a
                        href={center.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-700 text-blue-800 rounded-md hover:from-sky-600 hover:to-sky-800 transition-all shadow-md text-sm flex-1"
                    >
                        <MapPin className="w-4 h-4 mr-2" />
                        Konum
                    </a>

                    <button
                        onClick={handleDetailsClick}
                        className={`flex items-center justify-center px-4 py-2 rounded-md transition-all shadow-md text-sm flex-1 ${
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


export default function Bebekbakimsayfasi() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1">
                {/* Sidebar - %20 genişlikte ve sabit */}

                <br/>
                {/* Ana İçerik Alanı */}
                <div className="flex-1 px-10 pt-0 mt-[0px] pb-5">
                    {/* Atölye Merkezleri - Satır başına 2 kart */}
                    <section className="mb-40">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-xl shadow-xl mb-5"
                        >
                            <div className="text-3xl font-semibold text-blue-500 text-center">
                              Bebek ve Çocuk Bakım Evi
                            </div>
                        </motion.div>

                        {/* Kartları alt alta ve ortalanmış şekilde göster */}
                        <div className="flex flex-col items-center gap-6 px-4">
                            {bebekbakimmerkezi.map((center) => (
                                <WorkshopCenterCard key={center.id} center={center} />
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}