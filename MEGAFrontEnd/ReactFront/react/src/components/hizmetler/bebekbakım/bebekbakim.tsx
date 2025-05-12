import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

interface ServiceDetailProps {
    title: string;
    description: string;
    imageUrl: string;
    address: string;
    phone: string;
    workingHours: string;
    announcements: string[];
}

const Bebekbakim: React.FC<ServiceDetailProps> = ({
                                                      title = "GÜZİDE BEBEK VE ÇOCUK BAKIM EVİ",
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
                {/* Başlık Kartı */}
                <div className="bg-blue-500 rounded-xl shadow-lg w-full py-6 px-8 mb-4">
                    <div className="text-2xl md:text-3xl font-semibold text-white text-center">{title}</div>
                </div>

                {/* Başlık + Resim Kartı */}
                <div className="relative flex justify-center w-full mb-2">
                    <div className="w-full max-w-[850px] rounded-xl overflow-hidden">
                        <img
                            src="/images/hizmetler/bebekbakim/bebekbakım.jpg"
                            alt={title}
                            className="w-full h-auto max-h-[440px]] object-cover"
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
                            “Gece gündüz demeden, sevgiyle…” düsturuyla yola çıktığımız Güzide Bebek ve Çocuk Bakımevi Türkiye’de bir ilke imza atarak, 7/24 bebek ve çocuk bakım hizmeti veren ilk kuruluş olmuştur.
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Güzide Bebek ve Çocuk Bakımevi 0-66 ay arası çocuklara hizmet vermektedir. Günün her saatinde kendilerini güvende hissetmelerini sağlamak, temel öz bakımlarını ve gelişimsel ihtiyaçlarını karşılamak hedeflerimizin başında gelmektedir. Ayrıca İngilizce, Değerler Eğitimi ve Sanat Atölyeleri ile gelişimleri desteklenmektedir.
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Ferah ve geniş bahçesiyle de çocuklarımıza büyüme, gelişme ve eğlenme ortamı sunulmaktadır.
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Kurumumuz anne şefkati ile deneyimli öğretmenleri, hizmetli personeli ve yönetimiyle hizmet vermeye devam etmektedir.
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
                                        Osman Yılmaz Mah. 608/2 Sk. No:7 Gebze / Kocaeli

                                        {" "}
                                        {address}
                                    </p>
                                </div>
                                <br />
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700"> 0262 642 82 00 - 0530 557 42 59
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

export default Bebekbakim;
