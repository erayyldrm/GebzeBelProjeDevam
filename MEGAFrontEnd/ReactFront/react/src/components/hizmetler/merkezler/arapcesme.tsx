import React, { useState } from "react";
import { motion } from "framer-motion";
import {MapPin, Phone, Clock, ChevronDown, ChevronUp, Mail} from "lucide-react";

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

const Arapcesme: React.FC<ServiceDetailProps> = ({
                                                      title = "ARAPÇEŞME BİLİM VE SANAT MERKEZİ ",
                                                      description = "",
                                                      imageUrl = "",
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
            className="min-h-screen flex flex-col items-center px-4 py-10 space-y-8"
        >
            {/* Ana Kart */}
            <div className="relative bg-white rounded-xl shadow-lg w-full  max-w-[950px] p-6 space-y-6">

                {/* Başlık Kartı */}
                <div className="bg-[#891737] rounded-xl shadow-lg w-full py-6 px-8 mb-4">
                    <div className="text-2xl md:text-3xl font-semibold text-white text-center">{title}</div>
                </div>

                {/* Başlık + Resim Kartı */}
                <div className="relative flex justify-center w-full mb-6">
                    <div className="w-full sm:w-[650px] md:w-[750px] h-[450px] rounded-xl overflow-hidden">
                        {/* Resim kartı tamamen kaplasın */}
                        <img
                            src="/images/hizmetler/merkezler/arapçeşme.jpeg"
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Verilen Hizmetler ve İletişim Bilgileri Kartı */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Verilen Hizmetler */}
                    <section className="flex-1 text-justify space-y-4">
                        <h3 className="text-lg font-semibold text-blue-700">Verilen Hizmetler</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            MERKEZİMİZDE ÇOCUK VE YETİŞKİNLERE YÖNELİK KURSLARLARIMIZ BULUNMAKTADIR BRANŞLARIMIZ; JİMNASTİK, MASA TENİSİ, SATRANÇ, OKÇULUK ZEKA OYUNLARI,BAĞLAMA, RESİM VE EBRU. GESMEK YETİŞKİN BRANŞLARI; OFİS PROĞRAMLARI, İNGİLİZCE, İĞNE OYASI, EL NAKIŞI, MEFRUŞAT, DİKİŞ, TAKI TASARIM VE STEP AEROBİK.DESTEK EGİTİM DERSLERİMİZ; İNGİLİZCE, MATEMATİK, FEN BİLİMLERİ, TÜRKÇE.AYRICA HAFTANIN BELLİ GÜNLERİNDE ÇOCUK PEDAGOGUMUZDA MEVCUTTUR.</p>
                    </section>

                    {/* Dikey Çizgi */}
                    <div className="hidden md:flex w-px bg-gray-300" />

                    {/* İletişim Bilgileri */}
                    <div className="md:w-1/3 max-w-sm w-full">
                        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">
                                İletişim Bilgileri
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <p className="text-gray-700">
                                        ARAPÇEŞME MAH. 1065 SOKAK. NO: 28 GEBZE/KOCAELİ
                                        {" "}
                                        {address}
                                    </p>
                                </div>
                                <br />
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">0262 643 99 15
                                        {phone}</p>
                                </div>

                                <br />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Arapcesme;
