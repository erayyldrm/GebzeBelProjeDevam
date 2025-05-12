import React from "react";
import { motion } from "framer-motion";
import {MapPin, Phone} from "lucide-react";

interface ServiceDetailProps {
    title: string;
    description: string;
    imageUrl: string;
    address: string;
    phone: string;
    workingHours: string;
    announcements: string[];
}

const Enderunokulları: React.FC<ServiceDetailProps> = ({
                                                           title = "ENDERUN ÇOCUK ATÖLYELERİ",
                                                           address = "",
                                                           phone = ""
                                                       }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center px-4 py-4 space-y-4 mt-[-20px]" // mt-[-20px] ile yukarı kaydırdık
        >
            {/* Ana Kart */}
            <div className="relative bg-white rounded-xl shadow-lg w-full max-w-[950px] p-4 space-y-10">
                {/* Başlık Kartı */}
                <div className="bg-blue-500 rounded-xl shadow-lg w-full py-6 px-8 mb-4">
                    <div className="text-2xl md:text-3xl font-semibold text-white text-center">{title}</div>
                </div>

                {/* Başlık + Resim Kartı */}
                <div className="relative flex justify-center w-full mb-2">
                    <div className="w-full max-w-[850px] rounded-xl overflow-hidden">
                        <img
                            src="/images/hizmetler/atölyeler/enderun.jpg"
                            alt={title}
                            className="w-full h-auto max-h-[440px] object-cover"
                        />
                    </div>
                </div>
                <br/>

                {/* Verilen Hizmetler ve İletişim Bilgileri Kartı */}
                <div className="flex flex-col gap-4">
                    {/* Verilen Hizmetler */}
                    <section className="text-justify space-y-4">
                        <h3 className="text-lg font-semibold text-blue-700">Verilen Hizmetler</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Enderun çocuk atölyeleri'nde 0-6 yaş grubuna hizmet verilmektedir.
                            <br/>
                            Atölyelerimiz çocukların oyun yoluyla gelişimlerini desteklemeyi amaçlamaktadır, farklı yaş gruplarına ve ilgi alanlarına uygun çeşitli etkinlikler yapılmaktadır.
                            <br/>
                            Hizmetlerimizden bazıları; çocuk gelişim atölyesi, sanat atölyesi, bilim atölyesi, ebru atölyesi, resim atölyesi, akıl ve zeka atölyesi, değerler eğitimi, eğlenceli matematik, geleneksel oyunlar, hareket parkuru, spor aktiviteleri, ingilizce, geziler, atlı eğitim merkezi gezisi.
                            <br/>
                            <br/>
                            Enderun çocuk atölyeleri 4 birimden oluşmaktadır;
                            <br/>

                            Enderun çocuk atölyeleri merkez binası

                            <br/>
                            Arapçeşme bilim sanat merkezi

                            <br/>
                            İstasyon bilim sanat merkezi

                            <br/>
                            Eray şamdan spor kompleksi
                        </p>
                    </section>

                    {/* Dikey Çizgi */}
                    <div className="hidden md:flex w-px bg-gray-300" />

                    {/* İletişim Bilgileri */}
                    <div className="w-full">
                        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">
                                İletişim Bilgileri
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <p className="text-gray-700">
                                        Mustafapaşa Mah. 712/2 Sok. No:2 Gebze / Kocaeli {" "}
                                        {address}
                                    </p>
                                </div>
                                <br />
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700"> 0262 643 03 30
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

export default Enderunokulları;