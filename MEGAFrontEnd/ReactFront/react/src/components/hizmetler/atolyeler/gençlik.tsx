import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail , Clock, ChevronDown, ChevronUp } from "lucide-react";

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

const Genclik: React.FC<ServiceDetailProps> = ({
                                                   title = " Gençlik Atölyesi",
                                                   description = "",
                                                   imageUrl = "/images/hizmetler/atölyeler/gençlik.jpg",
                                                   address = "Hacıhalil Mah. Adliye Cad. No: 38 41400 Gebze / KOCAELİ",
                                                   phone = "(0262) 646 95 86",
                                                   workingHours = "Pazartesi-Cuma: 08:30-17:30",
                                                   mail ="kultur.gesmek@gebze.bel.tr"

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
            <div className="relative bg-white rounded-xl shadow-lg w-full max-w-[880px] p-6 space-y-6">

                {/* Başlık Kartı */}
                <div className="bg-[#891737] rounded-xl shadow-lg w-full py-6 px-8 mb-4">
                    <div className="text-2xl md:text-3xl font-semibold text-white text-center">{title}</div>
                </div>

                {/* Başlık + Resim Kartı */}
                <div className="relative flex justify-center w-full mb-6">
                    <div className="w-full sm:w-[650px] md:w-[750px] h-[450px] rounded-xl overflow-hidden">
                        {/* Resim kartı tamamen kaplasın */}
                        <img
                            src={imageUrl}
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
                            Bu program Gebze bölgesinde eğitim gören 9,10 ve 11. sınıf öğrencilerinin psikolojik, fiziksel ve manevi enerjilerini doğru yönlendirmek, alanında uzman rol model eğitmenler aracılığı ile ilgi duydukları alanda hem kendilerini geliştirmelerini, hem de değerlerine sahip çıkan bir gençlik olma yolunda deneyimlenmelerini hedefleyen bir eğitim programıdır. Ayrıca program içerisinde kişisel gelişim, sağlıklı yaşam ve sosyal proje alanlarında eğitim ve etkinlikler gerçekleştirilir.
<br/>
                            Konu Başlıkları
                            <br/>
                            İngilizce, Resim, Müzik, Fotoğrafçılık ve Tiyatro olmak üzere 5 farklı atölyesi ile 28 haftalık bir eğitim dönemini kapsar. Eğitimler hafta sonları 1 gün, 4 ders şeklinde yapılır.
                            <br/>
                            İstihdam Alanları
                            <br/>
                            Öğrencilerinin psikolojik, fiziksel ve manevi enerjilerini doğru yönlendirmeyi amaçlayan program aynı zamanda öğrencilerin lisans eğitim hayatı için bir temel oluşturur.
                            <br/>
                            Kayıt Şartları
                            <br/>
                            İngilizce Atölyesi
                            <br/>
                            *Atölyeye dil becerisi en az A2 seviyesinde olanlar başvurabilirler.
                            <br/>
                            Resim Atölyesi
                            <br/>
                            *Resme ilgisi ve yeteneği olan, güzel sanatları hedefleyen öğrenciler başvuru yapabilirler.
                            <br/>
                            Müzik Atölyesi
                            <br/>
                            *İyi derecede en az bir müzik aleti çalabilen öğrenciler başvuru yapabilirler.
                            <br/>
                            Fotoğrafçılık Atölyesi
                            <br/>
                            *Fotoğrafa ilgisi olan, tercihen fotoğraf makinası olan öğrencilerimiz başvuru yapabilir.
                            <br/>
                            Tiyatro Atölyesi
                            <br/>
                            *Bu alanda yetenekli, üniversitede ilgili bölümleri hedefleyen öğrenciler başvuru yapabilir.
                            <br/>
                            KURS VERİLEN MERKEZLER
                            <br/>
                            GESMEK Kurs Merkezi
                            <br/>
                            Kayıt İçin Gerekli Evraklar
                            <br/>
                            Öğrenci Belgesi
                            <br/>
                            1 Adet Kimlik Fotokopisi   </p>
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
                                        Hacı Halil Mah. Zübeyde Hanım Cad. Eyüp Güvenç İş Merkezi Gebze
                                        {" "}
                                        {address}
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">0262 644 33 78 {phone}</p>
                                </div>
<br/>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">kultur.gesmek@gebze.bel.tr</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default Genclik;
