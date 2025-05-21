import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

interface ServiceDetailProps {
    title: string;
    description: string;
    imageUrl: string;
    address: string;
    phone: string;
    workingHours: string;
    announcements: string[];
}

const Sportif: React.FC<ServiceDetailProps> = ({
                                                   title = "SPORTİF ÇOCUK ATÖLYESİ",
                                                   address = "",
                                                   phone = "",
                                               }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col items-center px-2 sm:px-4 py-6 sm:py-10 space-y-4 sm:space-y-8 mt-2 sm:mt-0"
        >
            {/* Ana Kart */}
            <div className="relative bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg w-full max-w-[950px] p-3 sm:p-6 space-y-4 sm:space-y-6">
                {/* Başlık */}
                <div className="bg-blue-500 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg w-full py-4 sm:py-6 px-4 sm:px-8 mb-2 sm:mb-4 overflow-x-auto">
                    <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center break-words">
                        {title}
                    </div>
                </div>

                {/* Resim Kartı */}
                <div className="relative flex justify-center w-full mb-1 sm:mb-2">
                    <div className="w-full max-w-[850px] rounded-lg sm:rounded-xl overflow-hidden">
                        <img
                            src="/images/hizmetler/atölyeler/sportif.jpg"
                            alt={title}
                            className="w-full h-auto max-h-[300px] sm:max-h-[440px] object-cover"
                        />
                    </div>
                </div>

                {/* İçerik */}
                <div className="flex flex-col gap-4 sm:gap-6">
                    {/* Verilen Hizmetler */}
                    <section className="text-justify space-y-2 sm:space-y-4 w-full">
                        <h3 className="text-base sm:text-lg font-semibold text-blue-700">Verilen Hizmetler</h3>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                            5-8 yaş arası çocuklarımızın spor branşları ile tanışıp, temel eğitimlerinin ardından uygulanan testler sonrasında branşlara yönlendirilmesi ve sporcu kimliklerinin oluşturulması amaçlanmıştır.
                            <br />
                            <strong>Branşlar:</strong>
                            <br />
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                                <div>Okçuluk</div>
                                <div>Basketbol</div>
                                <div>Masa Tenisi</div>
                                <div>Kort Tenisi</div>
                                <div>Futsal</div>
                                <div>Cimnastik</div>
                                <div>Badminton</div>
                                <div>Voleybol</div>
                                <div>Eğlenceli Atletizm</div>
                                <div className="col-span-2 sm:col-span-1">Beceri ve Koordinasyon Parkurları</div>
                                <div className="col-span-2 sm:col-span-1">Yetenek Taraması</div>
                            </div>
                        </p>
                    </section>

                    {/* Yatay Çizgi */}
                    <div className="w-full h-px bg-gray-300" />

                    {/* İletişim Bilgileri */}
                    <div className="w-full">
                        <div className="bg-blue-50 rounded-lg p-3 sm:p-6 shadow-sm">
                            <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2 sm:mb-4">İletişim Bilgileri</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-start">
                                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                                    <p className="text-xs sm:text-sm text-gray-700">
                                        Cumhuriyet Mah. Necip Fazıl Cad. No:102 Gebze Kocaeli {address}
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                                    <p className="text-xs sm:text-sm text-gray-700">0262 641 24 92 {phone}</p>
                                </div>

                                <div className="flex items-center">
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                                    <p className="text-xs sm:text-sm text-gray-700">genclik.spor@gebze.bel.tr</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Sportif;