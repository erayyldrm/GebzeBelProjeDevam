import { motion } from "framer-motion";
import { MapPin, Phone, Info, X } from 'lucide-react';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Atölye merkezi verileri
const merkezler = [
    {
        id: 3,
        name: "Aile Danışmanlık Merkezi",
        phone: "0262 641 11 82",
        address: "HACI HALİL MAH. ATATÜRK CAD. NO: 8 15 TEMMUZ MİLLİ İRADE KENT MEYDANI",
        image: "/images/hizmetler/merkezler/aile.jpg",
        mapLink:" https://www.google.com/maps/place/Gebze+Belediyesi+Aile+Dan%C4%B1%C5%9Fma+Merkezi/@40.7981127,29.4299788,20z/data=!4m6!3m5!1s0x14cb210e77e0d881:0xa86456b62361061f!8m2!3d40.7977299!4d29.4297186!16s%2Fg%2F11g4bhf69f?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D",
        details: "Sanat, kültür ve bilim alanlarında çeşitli atölyeler ve aktiviteler sunuyoruz.",
        detailPage: "/hizmetler/merkezler/aile" // Buradaki path'i güncelledim
    },
    {
        id: 1,
        name: "Arapçeşme Bilim ve Sanat Merkezi",
        phone: "0262 643 99 15",
        address: "ARAPÇEŞME MAH. 1065 SOKAK. NO: 28 GEBZE/KOCAELİ",
        image: "/images/hizmetler/merkezler/arapçeşme.jpeg",
        mapLink: "https://www.google.com/maps/place/Arap%C3%A7e%C5%9Fme+Bilim+ve+Sanat+Merkezi/@40.8089479,29.4478023,17z/data=!3m1!4b1!4m5!3m4!1s0x14cb218c872ba7cb:0xd9ac3808d8983b27!8m2!3d40.8089439!4d29.449991?shorturl=1",
        details: "Çocukların yaratıcı ve eğitsel gelişimini destekleyen çeşitli aktiviteler sunuyoruz.",
        detailPage: "/hizmetler/merkezler/arapcesme"
    },
    {
        id: 2,
        name: "Atlı Eğitim Merkezi",
        phone: " 0262 642 66 90",
        address: "GAZİLER MAH.1793 SOK. NO: 58 KOCAELİ/GEBZE",
        image: "/images/hizmetler/merkezler/atlı.jpg",
        mapLink: "https://www.google.com/maps/place/Gebze+Belediyesi+Atl%C4%B1+E%C4%9Fitim+Merkezi/@40.8206705,29.4269493,15z/data=!4m6!3m5!1s0x14cb21919411d8b3:0xc02b5ca41c3cfd37!8m2!3d40.8215662!4d29.4263812!16s%2Fg%2F11g0gpt7v9?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D",
        details: "Gençlerin yetenek ve becerilerini geliştirmek için özel programlar ve etkinlikler düzenliyoruz.",
        detailPage: "/hizmetler/merkezler/atli"
    },
    {
        id: 5,
        name: "Beylikbağı Bilim ve Sanat Merkezi",
        phone: " 0262 642 18 95",
        address: "BEYLİKBAĞI MAH. ANKARA CAD.NO:7 GEBZE/KOCAELİ",
        image: "/images/hizmetler/merkezler/beylikbagı.jpg",
        mapLink: "https://www.google.com/maps/place/Beylikba%C4%9F%C4%B1+Bilim+ve+Sanat+Merkezi/@40.8060484,29.383749,15z/data=!4m6!3m5!1s0x14cadfa7d2168009:0x9d4de4e27aefbc48!8m2!3d40.8060484!4d29.383749!16s%2Fg%2F11dfj9z7ym?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D",
        details: "Çocukların fiziksel ve zihinsel gelişimini destekleyen çeşitli spor aktiviteleri düzenliyoruz.",
        detailPage: "/hizmetler/merkezler/beylikbagi"
    },
    {
        id: 4,
        name: "Eray Şamdan Spor Okulları",
        phone: "0262 641 24 93",
        address: "Cumhuriyet Mah. Necip Fazıl Cad. No:102 Gebze Kocaeli",
        image: "/images/hizmetler/merkezler/eray.jpg",
        mapLink: "https://www.google.com/maps/place/Cumhuriyet,+Yeni+Ba%C4%9Fdat+Cd.+No:119,+41400+Gebze%2FKocaeli/@40.808397,29.377807,18z/data=!3m1!4b1!4m6!3m5!1s0x14cadfa98c371e2f:0x21939a9f1a7d9e94!8m2!3d40.808397!4d29.377807!16s%2Fg%2F11csd3bsr5?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D",
        details: "Çocukların fiziksel ve zihinsel gelişimini destekleyen çeşitli spor aktiviteleri düzenliyoruz.",
        detailPage: "/hizmetler/merkezler/eray"
    },
    {
        id: 8,
        name: "Gebze Kültür Merkezi ",
        phone: "0262 644 56 89 ",
        address: "HACI HALİL MAH. ATATÜRK CAD. NO: 8 15 TEMMUZ MİLLİ İRADE KENT MEYDANI",
        image: "/images/hizmetler/merkezler/gebze.jpg",
        mapLink: "https://www.google.com/maps/place/Gebze+K%C3%BClt%C3%BCr+Merkezi/@40.8074201,29.4398777,15z/data=!4m6!3m5!1s0x14cb2088792c7b75:0x6f17b50e45cc6c97!8m2!3d40.7982109!4d29.43007!16s%2Fg%2F11cltwggz7?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D",
        details: "Çocukların fiziksel ve zihinsel gelişimini destekleyen çeşitli spor aktiviteleri düzenliyoruz.",
        detailPage: "/hizmetler/merkezler/gebze"
    },
    {
        id: 9,
        name: "Gesmek",
        phone: "0262 644 33 78",
        address: "Hacı Halil Mah. Zübeyde Hanım Cad. Eyüp Güvenç İş Merkezi Gebze Kocaeli",
        image: "/images/hizmetler/merkezler/gesmek.jpg",
        mapLink: "https://www.google.com/maps/place/GESMEKHac%C4%B1%20Halil%20Mah.%20Z%C3%BCbeyde%20Han%C4%B1m%20Cad.%20Ey%C3%BCp%20G%C3%BCven%C3%A7%20%C4%B0%C5%9F%20Merkezi%20Gebze%20Kocaeli+-+Gebze+Belediyesi+G%C3%BCzel+Sanatlar+ve+Meslek+E%C4%9Fitimi+Kurslar%C4%B1/@40.799833,29.433036,15z/data=!4m6!3m5!1s0x14cb208ec548401f:0x51d3b10ec2b5859a!8m2!3d40.799833!4d29.433036!16s%2Fg%2F11g6xrd_n2?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
        details: "Çocukların fiziksel ve zihinsel gelişimini destekleyen çeşitli spor aktiviteleri düzenliyoruz.",
        detailPage: "/hizmetler/merkezler/gesmek"
    },
    {
        id: 10,
        name: "Güzide Gençlik Merkezi",
        phone: "0262 646 95 86",
        address: "Hacıhalil Mah. Adliye Cad. No: 38 41400 Gebze / KOCAELİ",
        image: "/images/hizmetler/merkezler/güzidegençlik.png",
        mapLink: "https://www.google.com.tr/maps/place/https://www.google.com.tr/maps/search/40.796793,+29.436732?entry=tts%C2%B047%2748.5%22N+29%C2%B026%2712.2%22E/@40.796793,29.436732,17z/data=!3m1!4b1!4m4!3m3!8m2!3d40.796793!4d29.436732?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
        details: "Çocukların fiziksel ve zihinsel gelişimini destekleyen çeşitli spor aktiviteleri düzenliyoruz.",
        detailPage: "/hizmetler/merkezler/güzide"
    },
    {
        id: 11,
        name: "İstasyon Bilim ve Sanat Merkezi",
        phone: "0262 655 25 54",
        address: "İSTASYON MAH. ŞEHİT ABDULLAH HOROZ CAD. NO: 26 GEBZE/ KOCAELİ",
        image: "/images/hizmetler/merkezler/istasyon.jpg",
        mapLink: "https://www.google.com/maps/place/Gebze+Belediyesi+Bilim+ve+Sanat+Merkezi/@40.784984,29.410849,15z/data=!4m6!3m5!1s0x14cadf8c6861acd5:0x8e61b03f09c2b2c2!8m2!3d40.784984!4d29.410849!16s%2Fg%2F11g876pktq?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
        details: "Çocukların fiziksel ve zihinsel gelişimini destekleyen çeşitli spor aktiviteleri düzenliyoruz.",
        detailPage: "/hizmetler/merkezler/istasyon"
    },
    {
        id: 12,
        name: "Sokak Hayvanları Tedavi, Rehabilitasyon ve Eğitim Merkezi",
        phone: "0262 642 04 30",
        address: "Pelitli Mahallesi Yeni Mezarlık Yolu Caddesi No:49 Gebze Kocaeli",
        image: "/images/hizmetler/merkezler/hayvan.jpg",
        mapLink: "https://www.google.com/maps/place/Pelitli,+Yeni+Mezarl%C4%B1k+Yolu+no:49,+41400+Gebze%2FKocaeli/@40.8503446,29.4677041,17z/data=!4m6!3m5!1s0x14cb26fcdbcadd9b:0xc9a68e98eff20ce9!8m2!3d40.8503446!4d29.4677041!16s%2Fg%2F11rcwln59g?hl=tr-TR&entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
        details: "Çocukların fiziksel ve zihinsel gelişimini destekleyen çeşitli spor aktiviteleri düzenliyoruz.",
        detailPage: "/hizmetler/merkezler/hayvan"
    }

];

// Atölye Merkezi Kartı Bileşeni
const WorkshopCenterCard = ({ center }: { center: typeof merkezler[0] }) => {
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

export default function Merkezlersayfasi() {
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
                                 MERKEZLER
                                </div>
                            </motion.div>

                            {/* Kartlar */}
                            <div className="flex flex-wrap justify-center gap-6">
                                {merkezler.map((center) => (
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
