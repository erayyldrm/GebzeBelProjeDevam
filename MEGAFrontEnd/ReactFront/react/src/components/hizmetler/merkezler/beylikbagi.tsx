import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ChevronDown, ChevronUp } from "lucide-react";

interface ServiceDetailProps {
    title: string;
    description: string;
    imageUrl: string;
    address: string;
    phone: string;
    workingHours: string;
    announcements: string[];
}

const workshopData = [];

const Beylikbagi: React.FC<ServiceDetailProps> = ({
                                                title = "BEYLİKBAĞI BİLİM VE SANAT MERKEZİ",
                                                description = "",
                                                imageUrl = "/images/hizmetler/merkezler/aile.jpg",
                                                address = "",
                                                phone = "",
                                                workingHours = "",
                                            }) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleIndex = (index: number) => {
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center min-h-screen px-4"
        >
            {/* Kart İçeriği: Başlık, Resim, Verilen Hizmetler ve İletişim Bilgileri */}
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-6 w-full max-w-5xl">

                {/* Başlık ve Resim */}
                <div className="mb-8 text-center text-blue-800">
                    <div className="text-2xl md:text-2xl font-semibold text-blue-500 mb-3">
                        {title}
                    </div>

                    <div className="flex justify-center">
                        <div className="relative h-[500px] sm:h-[600px] md:h-[750px] lg:h-[850px] w-[90%] sm:w-3/4 md:w-2/3 lg:w-2/3 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/images/hizmetler/merkezler/beylikbagı.jpg"
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t flex items-center justify-center">
                                <div className="text-white text-center px-4 max-w-2xl">
                                    <p className="text-lg md:text-xl font-medium">{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>

                {/* 2 Sütun: Verilen Hizmetler ve İletişim Bilgileri Yan Yana */}
                <div className="flex flex-col md:flex-row gap-5">

                    {/* Sol: Verilen Hizmetler */}
                    <div className="md:w-2/3 w-full">
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b pb-2">
                                Verilen Hizmetler
                            </h2>
                            <p className="text-gray-700 mb-4 text-sm sm:text-base">MERKEZİMİZDE 7-14 YAŞ ARASI DESTEK EĞİTİM DERSLERİMİZ BULUNMAKTADIR. BRANŞLARIMIZ; TÜRKÇE, MATEMATİK, İNGİLİZCE, SOSYAL BİLGİLER, DOĞA VE FEN BİLİMLERİ.SANAT BRANŞLARIMIZ; DRAMA, EBRU, RESİM, BAĞLAMA, SATRANÇ, ZEKA OYUNLARI.GESMEK YETİŞKİN KURSLARIMIZ; OFİS PROGRAMLARI, İĞNE OYASI, EL NAKIŞI,MEFRUŞAT, DİKİŞ.YETİŞKİN OKUMA YAZMA PROGRAMI KAPSAMINDA YETİŞKİNLERE OKUR-YAZARLIK DERSLERİ VERİLMEKTEDİR.İLKOKUL VE ORTAOKUL ÖĞRENCİLERİNE YÖNELİK PSİKOLOJİK DANIŞMANLIK HİZMETİMİZDE MEVCUTTUR.     </p>  </section>

                        {/* Atölyeler */}
                        <section className="mb-16">
                            <div className="space-y-4">
                                {workshopData.map((item, index) => (
                                    <div key={index} className="bg-blue-50 rounded-lg p-4 shadow-sm">
                                        <button
                                            onClick={() => toggleIndex(index)}
                                            className="flex items-center justify-between w-full text-left"
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-600 text-lg">•</span>
                                                <span className="text-blue-800 font-medium">
                                                    {item.title}
                                                </span>
                                            </div>
                                            {openIndexes.includes(index) ? (
                                                <ChevronUp size={18} />
                                            ) : (
                                                <ChevronDown size={18} />
                                            )}
                                        </button>
                                        {openIndexes.includes(index) && (
                                            <ul className="mt-2 ml-6 list-disc text-sm text-gray-700 space-y-1">
                                                {item.sub.map((subItem, i) => (
                                                    <li key={i}>{subItem}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sağ: İletişim Bilgileri */}
                    <div className="md:w-1/3 max-w-sm w-full">
                        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">
                                İletişim Bilgileri
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <p className="text-gray-700">
                                        BEYLİKBAĞI MAH. ANKARA CAD.NO:7 GEBZE/KOCAELİ{" "}
                                        {address}
                                    </p>
                                </div>
                                <br />
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">0262 642 18 95 {phone}</p>
                                </div>
                                <br />
                                <div className="flex items-center">
                                    <Clock className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">08:00 - 20:00 {workingHours}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Beylikbagi;
