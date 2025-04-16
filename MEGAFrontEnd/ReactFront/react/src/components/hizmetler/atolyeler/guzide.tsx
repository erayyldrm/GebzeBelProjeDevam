import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock,  ChevronDown, ChevronUp } from 'lucide-react';

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



const GuzideGenclikMerkezi: React.FC<ServiceDetailProps> = ({
                                                                title = "Güzide Gençlik Merkezi",
                                                                description = "",
                                                                imageUrl = "/images/hizmetler/atölyeler/guzide.jpg",
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
            className="max-w-6xl mx-auto "
        >
            {/* Sayfa üstü boşluk */}
            <div className="h-8" />

            {/* Başlık ve Hero Görsel */}
            <div className="mb-8 max-w-6xl text-center mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">{title}</h1>

                <div className="flex justify-center">
                    <div className="relative h-[500px] w-[950px] rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/images/hizmetler/atölyeler/güzide.jpg"
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

                <div className="h-8" />
            </div>


            {/* İki Sütunlu Layout */}
            <div className="flex justify-center items-start gap-16 px-4 py-8 flex-wrap">
                {/* Ana İçerik */}
                <div className="max-w-md ">
                    {/* Hakkında Bölümü */}
                    <section className="mb-5">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b pb-2">Verilen Hizmetler</h2>
                        <p className="text-gray-700 mb-4">
                            Güzide Gençlik Merkezinde atölye faaliyetleri lise öğrencilerini hem akademiye hem de hayata hazırlayacak şekilde organize edilmektedir.
                            <br /><br />
                            Akademik atölyeler başlığında Türk Dili ve Edebiyatı, Matematik ve Geometri derslerinin haricinde; XR Laboratuvarında yapılan faaliyetler, sosyal bilimlere dair atölyeler ve sınavlara ilişkin çalışmalar şeklinde üçlü bir yapılanma mevcuttur.
                            <br /><br />
                            Hayata hazırlama amacı güden ve çeşitli yaşam becerilerini de kapsama alan atölye çalışmalarında ise Merkez içi yahut dışında yapılan bazı aktiviteler, genel kültüre katkı sunacak çalışmalar ve tekno-eğitim/tekno-eğlence faaliyetleri şeklinde yine üçlü bir yapılanma üzerinden gidilmektedir.
                        </p>
                    </section>

                    {/* Atölyelerimiz */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b pb-2">Atölyelerimiz</h2>
                        <div className="space-y-4">
                            <p>Akademik Atölyeler
                                <br/>
                                Güzide Yarıyıl Kampı ,

                                Güzide Yaz Okulu,

                                Fizik Dersleri,

                                Arapça Dersleri,
                                Osmanlıca Dersleri,

                                Kur’an-ı Kerim Dersleri,

                                Tarih Seminerleri,

                                Sosyoloji Okumaları,

                                Din Kültürü ve Ahlak Bilgisi Dersleri,

                                Felsefe Okumaları,

                                Psikoloji Okumaları,

                                Güzide Edebiyat Kartları (GEK),

                                Klasik Şiir Atölyesi,
                                <br/>
                                <br/>
                                Tekno-Akademik Atölyeler
                                <br/>
                                XR Tanıtım Atölyesi,

                                XR Fizik,

                                XR Kimya,

                                XR Biyoloji,

                                XR Matematik,

                                XR Geometri,
                                <br/>
                                <br/>

                                Sınav Atölyeleri
                               <br/>
                                YKS (TYT-AYT) Denemeleri,

                                Soru Çözüm Kampları,

                                Konu Tekrar Kampları,

                                Sınav Analizleri
                                <br/>
                                <br/>

                                Genel Kültür Atölyeleri
<br/>
                                Güzide Doğa Okulu,

                                (Güz, Kış ve Yaz Doğa Kampları, Geziler, İstikamet Programları),
                                Yazarlık Okulu,

                                Kitap Tahlilleri,

                                Sesli Kitap Atölyesi,

                                Etimoloji Atölyesi,

                                Bilgi Yarışmaları,

                                Diksiyon ve Hitabet Dersleri,

                                Edebiyat Söyleşileri,

                                Dergicilik Okulu,

                                Film Okumaları,

                                Münazara

                                <br/>
                                <br/>
                                Sanat Atölyeleri,
<br/>
                                Geleneksel Sanat Atölyeleri,

                                ( Hat, Tezhip, Kaligrafi, Ebru, Minyatür, Kat’ı ),

                                Modern Sanat Atölyeleri,

                                ( Resim / Kara Kalem, Yağlı Boya, Kuru Boya, Toz Pastel, Akrilik ),

                                Tiyatro,

                                Drama,

                                El Sanatları Atölyesi,

                                ( Kanaviçe, Örgü, Biçki, Dikiş),
                                   Savunma Sanatı,

                                ( Kick-Box ),

                                Mutfak Sanatları Atölyesi,

                                Ahşap,

                                Cam Takı,

                                Mimarlık Atölyesi,

                                Müzik Atölyesi,

                                (Bendir, Kalimba),

                                Sergiler

                                <br/>
                                <br/>
                                Tekno-Eğitim Atölyeleri
                                <br/>
                                Yazılım Atölyeleri,

                                (C#, Java, Python, Web [HTML-CSS], Web Tasarım, GeoGebra),

                                Robotik Atölyeleri,

                                (Arduino, Esp 32, Rex, Mblock 5, Pinoo),

                                Güzide Garaj,

                                Dijital Eğitim Sınıfları,

                                3 D Yazıcı Atölyesi,

                                Greenbox Stüdyosu,

                                Podcast Stüdyosu,

                                <br/>
                                <br/>
                                Tekno-Eğlence Atölyeleri
                                <br/>
                                Laser-Tag,

                                VR ( Sanal Gerçeklik Gözlüğü ),
                                Uçuş Simülatörü,

                                Araç Simülatörü,

                                PS 5,

                                Klasik Atari
                                <br/>
                                <br/>

                                Spor Atölyeleri
                                <br/>
                                Fitness,

                                Pilates,

                                Masa Tenisi,
                                  Bilardo,

                                Langırt,

                                Shuffleboard,

                                Satranç,

                                Okçuluk,

                                Voleybol,

                                Futsal,

                                Cornhole

                                <br/>
                                <br/>
                                Rehberlik-Psikolojik Danışmanlık Atölyeleri
<br/>
                                Manevi Danışmanlık,

                                (Değerler Eğitimi),

                                Psikolog,
                                (Psikoloji Kulübü, Grup Etkinlikleri),

                                Psikolojik Danışman,

                                (Kariyer Okulu, Sınav Kaygısı, Sınav Stratejileri Seminerleri),

                                Aile Danışmanı,

                                (Ebeveyn Psikoloji Atölyeleri, Ergenlik, Akademik Başarı Seminerleri),
                                Eğitim Danışmanı,

                                (Tercih Danışmanlığı, Sınav Bilgilendirme Seminerleri),
                                         Sağlık Danışmanlığı (Hemşire),

                                (Beslenme ve Diyetetik, Geleneksel Tıp, Kadın Sağlığı, Spor ve Sağlık Seminerleri),

                                Öğrenci Seminerleri,

                                Veli Seminerleri,

                                Zarafet Atölyesi,

                                <br/>
                                <br/>
                                Diğer Atölyeler
<br/>
                                Mangala,

                                Lego,

                                Resfebe,

                                Zekâ Oyunları,

                                Materyal Tasarım,
                                Kriptoloji,

                                Tabu,

                                MaTabu,


                                Mukabele</p>
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
                                <p className="text-gray-700">Hacıhalil Mah. Adliye Cad. No: 38 41400 Gebze / KOCAELİ {address}</p>

                            </div>
                            <br/>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                <p className="text-gray-700">0262 646 95 86 {phone}</p>
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

export default GuzideGenclikMerkezi;
