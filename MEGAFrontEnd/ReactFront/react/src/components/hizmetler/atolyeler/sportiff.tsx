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
            className="min-h-screen flex flex-col items-center px-4 py-10 space-y-8 mt-[-30px]"  // mt-[-20px] ekledim
        >
            {/* Ana Kart */}
            <div className="relative bg-white rounded-xl shadow-lg w-full max-w-[950px] p-6 space-y-6">
                <div className="bg-blue-500 rounded-xl shadow-lg w-full py-6 px-8 mb-4 overflow-x-auto">
                    <div className="text-2xl md:text-3xl font-semibold text-white text-center break-words">
                        {title}
                    </div>
                </div>

                {/* Resim Kartı */}
                <div className="relative flex justify-center w-full mb-2">
                    <div className="w-full max-w-[850px] rounded-xl overflow-hidden">
                        <img
                            src="/images/hizmetler/atölyeler/sportif.jpg"
                            alt={title}
                            className="w-full h-auto max-h-[440px] object-cover"
                        />
                    </div>
                </div>
                <br/>


                <div className="flex flex-col gap-4">
                    {/* Verilen Hizmetler */}
                    <section className="text-justify space-y-4">
                        <h3 className="text-lg font-semibold text-blue-700">Verilen Hizmetler</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            5-8 yaş arası çocuklarımızın spor branşları ile tanışıp, temel eğitimlerinin ardından uygulanan testler sonrasında branşlara yönlendirilmesi ve sporcu kimliklerinin oluşturulması amaçlanmıştır.
                            <br />
                            <strong>Branşlar:</strong>
                            <br />
                            Okçuluk<br />
                            Basketbol<br />
                            Masa Tenisi<br />
                            Kort Tenisi<br />
                            Futsal<br />
                            Cimnastik<br />
                            Badminton<br />
                            Voleybol<br />
                            Eğlenceli Atletizm<br />
                            Beceri ve Koordinasyon Parkurları<br />
                            Yetenek Taraması
                        </p>
                    </section>

                    {/* Dikey Çizgi */}
                    <div className="hidden md:flex w-px bg-gray-300" />

                    {/* İletişim Bilgileri */}
                    <div className="w-full">
                        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">İletişim Bilgileri</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <p className="text-gray-700">
                                        Cumhuriyet Mah. Necip Fazıl Cad. No:102 Gebze Kocaeli {address}
                                    </p>
                                </div>
                                <br />
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">0262 641 24 92 {phone}</p>
                                </div>
                                <br />
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">genclik.spor@gebze.bel.tr</p>
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
