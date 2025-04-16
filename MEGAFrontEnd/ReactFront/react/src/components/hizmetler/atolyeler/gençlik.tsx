import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Users, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceDetailProps {
    title: string;
    description: string;
    imageUrl: string;
    address: string;
    phone: string;
    workingHours: string;
    announcements: string[];
}

const workshopData = [

];



const Genclik: React.FC<ServiceDetailProps> = ({
                                                                title = "Güzide Gençlik Merkezi",
                                                                description = "",
                                                                imageUrl = "/images/hizmetler/atölyeler/gençlik.jpg",
                                                                address = "Hacıhalil Mah. Adliye Cad. No: 38 41400 Gebze / KOCAELİ",
                                                                phone = "(0262) 646 95 86",
                                                                workingHours = "Pazartesi-Cuma: 08:30-17:30",

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
            className="max-w-6xl mx-auto"
        >
            {/* Sayfa üstü boşluk */}
            <div className="h-8" />

            {/* Başlık ve Hero Görsel */}
            <div className="mb-8 max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 text-center">{title}</h1>

                <div className="relative h-[600px] rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="/images/hizmetler/atölyeler/gençlik.jpg"
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t  flex items-center justify-center">
                        <div className="text-white text-center px-4 max-w-2xl">
                            <p className="text-lg md:text-xl font-medium">{description}</p>
                        </div>
                    </div>
                </div>

                <div className="h-8" />
            </div>

            {/* İki Sütunlu Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Ana İçerik */}
                <div className="lg:col-span-2">
                    {/* Hakkında Bölümü */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b pb-2">Verilen Hizmetler</h2>
                        <p className="text-gray-700 mb-4">Bu program Gebze bölgesinde eğitim gören 9,10 ve 11. sınıf öğrencilerinin psikolojik, fiziksel ve manevi enerjilerini doğru yönlendirmek, alanında uzman rol model eğitmenler aracılığı ile ilgi duydukları alanda hem kendilerini geliştirmelerini, hem de değerlerine sahip çıkan bir gençlik olma yolunda deneyimlenmelerini hedefleyen bir eğitim programıdır. Ayrıca program içerisinde kişisel gelişim, sağlıklı yaşam ve sosyal proje alanlarında eğitim ve etkinlikler gerçekleştirilir.
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
                            1 Adet Kimlik Fotokopisi
                        </p>
                    </section>

                    {/* Atölyelerimiz */}
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
                                            <span className="text-blue-800 font-medium">{item.title}</span>
                                        </div>
                                        {openIndexes.includes(index) ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
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

                {/* Yan Bilgi Çubuğu */}
                <div className="space-y-6">
                    {/* İletişim Bilgileri */}
                    <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-blue-800 mb-4">İletişim Bilgileri</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-700"> Hacı Halil Mah. Zübeyde Hanım Cad. Eyüp Güvenç İş Merkezi Gebze{address}</p>

                            </div>
                            <br/>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                <p className="text-gray-700"> 0262 644 33 78 {phone}</p>
                            </div>
                            <br/>
                            <div className="flex items-center">
                                <Clock className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                <p className="text-gray-700"> 08:00 - 16:00{workingHours}</p>
                            </div>
                        </div>
                    </div>

                    {/* Hızlı Erişim */}


                    {/* Harita */}

                </div>
            </div>
        </motion.div>
    );
};

export default Genclik;
