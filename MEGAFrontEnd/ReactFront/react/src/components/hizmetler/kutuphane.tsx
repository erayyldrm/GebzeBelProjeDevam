import { motion } from "framer-motion";
import { MapPin, Phone, Info, X } from 'lucide-react';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Atölye merkezi verileri
const kutuphanemerkezi = [
    {
        id: 3,
        name: "Arapçeşme Bilim ve Sanat Merkezi Kütüphanesi",
        phone: " 0262 643 99 15",
        address: " ARAPÇEŞME MAH. 1065 SOKAK. NO: 28 GEBZE/KOCAELİ",
        image: "/images/hizmetler/kütüphane/arapçeşme.jpg",
        mapLink: "https://www.google.com/maps/place/Arap%C3%A7e%C5%9Fme+Bilim+ve+Sanat+Merkezi/@40.8089479,29.4478023,17z/data=!3m1!4b1!4m5!3m4!1s0x14cb218c872ba7cb:0xd9ac3808d8983b27!8m2!3d40.8089439!4d29.449991?shorturl=1",
        details: "Sanat, kültür ve bilim alanlarında çeşitli atölyeler ve aktiviteler sunuyoruz.",
        detailPage: "/hizmetler/kutuphane/arapbilim" // Buradaki path'i güncelledim
    },
    {
        id: 1,
        name: "Barış Sosyal Tesisleri",

        address: "Barış Mahallesi 1819/1 Sokak No:52 41400 Gebze/KOCAELİ",
        image: "/images/hizmetler/kütüphane/barış.jpg",
        mapLink: "https://www.google.com/maps/place//@40.7784393,29.4255709,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
        details: "Çocukların yaratıcı ve eğitsel gelişimini destekleyen çeşitli aktiviteler sunuyoruz.",
        detailPage: "/hizmetler/kutuphane/baris"
    },
    {
        id: 2,
        name: "Beylikbağı Bilim ve Sanat Merkezi Kütüphanesi",
        phone: "0262 642 18 95",
        address:" BEYLİKBAĞI MAH. ANKARA CAD.NO:7 GEBZE/KOCAELİ",
        image: "/images/hizmetler/kütüphane/beylikbagıbilim.jpg",
        mapLink: "https://www.google.com/maps/place/Beylikba%C4%9F%C4%B1+Bilim+ve+Sanat+Merkezi/@40.8060484,29.383749,15z/data=!4m5!3m4!1s0x0:0x9d4de4e27aefbc48!8m2!3d40.8060359!4d29.3837509?sa=X&ved=2ahUKEwiVtv6y6ITmAhXcQUEAHVKOBLcQ_BIwCnoECBUQCA&shorturl=1&shorturl=1",
        details: "Gençlerin yetenek ve becerilerini geliştirmek için özel programlar ve etkinlikler düzenliyoruz.",
        detailPage: "/hizmetler/kutuphane/beylikbilim"
    },
    {
        id: 5,
        name: "Çoban Mustafa Paşa Kütüphanesi",
        phone: "02626420430 - 1773",
        address: "HACI HALİL MAH. ATATÜRK CAD. NO: 10 GEBZE KOCAELİ",
        image: "/images/hizmetler/kütüphane/çobanmustafa.jpg",
        mapLink: "https://www.google.com/maps/place/Gebze+%C3%87oban+Mustafa+Pa%C5%9Fa+K%C3%BCt%C3%BCphanesi/@40.7977228,29.4316221,19z/data=!4m6!3m5!1s0x14cb21c719aca3e9:0x9a7a3a97fbcfd89c!8m2!3d40.7977141!4d29.4319093!16s%2Fg%2F11h0crlgh4?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
        details: "Çocukların fiziksel ve zihinsel gelişimini destekleyen çeşitli spor aktiviteleri düzenliyoruz.",
        detailPage: "/hizmetler/kutuphane/coban"
    },
    {
        id: 4,
        name: "İstasyon Bilim ve Sanat Merkezi Kütüphanesi",
        phone: "0262 655 25 54",
        address: "İSTASYON MAH. ŞEHİT ABDULLAH HOROZ CAD. NO: 26 GEBZE/ KOCAELİ",
        image: "/images/hizmetler/kütüphane/istasyonbilim.jpg",
        mapLink: "https://www.google.com/maps/place/Gebze+K%C3%BClt%C3%BCr+Merkezi/@40.8074201,29.4398777,15.25z/data=!4m5!3m4!1s0x0:0x6f17b50e45cc6c97!8m2!3d40.7979754!4d29.4299296?shorturl=1",
        details: "Çocukların fiziksel ve zihinsel gelişimini destekleyen çeşitli spor aktiviteleri düzenliyoruz.",
        detailPage: "/hizmetler/kutuphane/istasyonbilim"
    }
];

// Atölye Merkezi Kartı Bileşeni
const WorkshopCenterCard = ({ center }: { center: typeof kutuphanemerkezi[0] }) => {
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

export default function kutuphanesayfasi() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1">
                <br />
                {/* Ana İçerik Alanı */}
                <div className="flex-1 px-6 pt-0 mt-[0px] pb-10"><br/>
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
                                    KÜTÜPHANE
                                </div>
                            </motion.div>



                            {/* Kartlar */}
                            <div className="flex flex-wrap justify-center gap-6">
                                {kutuphanemerkezi.map((center) => (
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
