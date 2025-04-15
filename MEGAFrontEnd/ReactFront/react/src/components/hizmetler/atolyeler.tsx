import { motion } from "framer-motion";
import Sidebar from "../SideBar/sidebar.tsx";
import { gebze } from "../_SayfaBilgileri/Sayfalar.tsx";
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
            whileHover={{ scale: 1.03, y: -4 }}
            className="  w-[288px] h-[250px]  bg-white border border-orange-200 shadow-xl rounded-xl overflow-hidden transition-all relative flex flex-col items-center justify-center h-auto hover:shadow-xl text-center"
        >

        {/* Resim */}


            <div className="  flex items-center justify-center  w-[300px] h-[185px] ">
                <img
                    src={center.image}
                    alt={center.name}
                    className="object-cover w-full h-full"
                />
            </div>
            {/* Ayırıcı çizgi */}
            <div className="h-2 w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent shadow-md" />

            {/* İçerik */}
            <div className="p-6 flex flex-col flex-1">

                <p  style={{ fontSize: "14px", fontWeight: "bold", textAlign: "center" , color:"dodgerblue" }} >{center.name}</p>
                <hr className="my-2 border-t border-gray-300" />
                <div className="space-y-3 mb-4 text-sm">
                    <div className="flex items-start">
                        <MapPin className="w-4 h-4  font-bold  text-blue-600 mr-2  flex-shrink-0" />
                        <p  style={{ fontSize: "12px", fontWeight: "semibold", textAlign: "center" }} >{center.address}</p>
                    </div>

                    <div className="flex items-center">
                        <Phone className="w-4 h-4 font-bold text-blue-600 mr-2 flex-shrink-0" />
                        <p  style={{ fontSize: "12px", fontWeight: "semibold", textAlign: "center" }}>{center.phone}</p>
                    </div>
                </div>

                {/* Butonlar */}
                <div className="flex space-x-4 mt-auto">
                    {/* KONUM Butonu */}
                    <a
                        href={center.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-8 py-3
               bg-gradient-to-r from-sky-500 to-sky-700
               text-blue-800 rounded-md
               hover:from-sky-600 hover:to-sky-800
               transition-all shadow-md font-medium text-sm flex-1"
                    >
                        <MapPin className="w-4 h-4 mr-2" />
                        Konum
                    </a>

                    {/* DETAYLI BİLGİ / GİZLE Butonu */}
                    {/* Örnek: Mor tonlarında geçişli detay butonu */}
                    <button
                        onClick={handleDetailsClick}
                        className={`flex items-center justify-center px-8 py-3 
              rounded-md transition-all shadow-md font-medium text-sm flex-1 ${
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
                <div style={{ width: '20%', minWidth: '200px' }}>
                    <br/>
                    <Sidebar items={gebze} title={"ATÖLYELER"} />
                </div>
                <br/>
                {/* Ana İçerik Alanı */}
                <div className="flex-1 p-4">
                    {/* Atölye Merkezleri - Satır başına 2 kart */}
                    <section className="mb-10">
                        <br/>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-xl shadow-xl mb-10"
                        >

                            <h2 className="text-3xl font-bold text-orange-400 mb-4 flex items-center justify-between">
        <span className="text-orange-400
        ">
            Atölye Merkezleri
        </span>
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-4 sm:grid-cols-4 gap-6 justify-center">
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