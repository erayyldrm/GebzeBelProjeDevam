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


    const Guzide: React.FC<ServiceDetailProps> = ({
                                                      title = " Güzide Gençlik Merkezi Atölyeleri",
                                                      description = "",
                                                      imageUrl = "/images/hizmetler/atölyeler/guzide.jpg",
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
                <div className="relative bg-white rounded-xl shadow-lg w-full max-w-[880px] p-6 space-y-6">

                    {/* Başlık Kartı */}
                    <div className="bg-white rounded-xl shadow-lg w-full py-6 px-8 mb-4">
                        <div className="text-2xl md:text-3xl font-semibold text-blue-500 text-center">{title}</div>
                    </div>

                    {/* Başlık + Resim Kartı */}
                    <div className="relative flex justify-center w-full mb-6">
                        <div className="w-full sm:w-[650px] md:w-[750px] h-[450px] rounded-xl overflow-hidden">
                            {/* Resim kartı tamamen kaplasın */}
                            <img
                                src="/images/hizmetler/atölyeler/güzide.jpg"
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Hizmetler ve İletişim Kartları */}
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Verilen Hizmetler */}
                        <section className="flex-1 text-justify space-y-4">
                            <h3 className="text-lg font-semibold text-blue-700">Verilen Hizmetler</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Güzide Gençlik Merkezinde atölye faaliyetleri lise öğrencilerini hem akademiye hem de hayata hazırlayacak şekilde organize edilmektedir.
                                <br/>
                                Akademik atölyeler başlığında Türk Dili ve Edebiyatı, Matematik ve Geometri derslerinin haricinde; XR Laboratuvarında yapılan faaliyetler, sosyal bilimlere dair atölyeler ve sınavlara ilişkin çalışmalar şeklinde üçlü bir yapılanma mevcuttur.
                                <br/>
                                Hayata hazırlama amacı güden ve çeşitli yaşam becerilerini de kapsama alan atölye çalışmalarında ise Merkez içi yahut dışında yapılan bazı aktiviteler, genel kültüre katkı sunacak çalışmalar ve tekno-eğitim/tekno-eğlence faaliyetleri şeklinde yine üçlü bir yapılanma üzerinden gidilmektedir.

                                <br/>
                                <br/>
                                ATÖLYELER:
                                <br/>

                                <br/>
                                Akademik Atölyeler,

                                Güzide Yarıyıl Kampı,

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

                                Klasik Şiir Atölyesi
                                <br/>
                                <br/>
                                Tekno-Akademik Atölyeler

                                XR Tanıtım Atölyesi,

                                XR Fizik,

                                XR Kimya,

                                XR Biyoloji,

                                XR Matematik,
                                XR Geometri
                                <br/>
                                <br/>

                                Sınav Atölyeleri

                                YKS (TYT-AYT) Denemeleri,

                                Soru Çözüm Kampları,

                                Konu Tekrar Kampları,

                                Sınav Analizleri
                                <br/>
                                <br/>
                                Genel Kültür Atölyeleri

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

                                Sanat Atölyeleri

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

                                Yazılım Atölyeleri,

                                (C#, Java, Python, Web [HTML-CSS], Web Tasarım, GeoGebra),

                                Robotik Atölyeleri,

                                (Arduino, Esp 32, Rex, Mblock 5, Pinoo),

                                Güzide Garaj,

                                Dijital Eğitim Sınıfları,

                                3 D Yazıcı Atölyesi,

                                Greenbox Stüdyosu,

                                Podcast Stüdyosu
                                <br/>
                                <br/>

                                Tekno-Eğlence Atölyeleri

                                Laser-Tag,

                                VR ( Sanal Gerçeklik Gözlüğü ),

                                Uçuş Simülatörü,

                                Araç Simülatörü,

                                PS 5,

                                Klasik Atari
                                <br/>
                                <br/>

                                Spor Atölyeleri

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

                                Zarafet Atölyesi

                                <br/>
                                <br/>
                                Diğer Atölyeler

                                Mangala,

                                Lego,

                                Resfebe,

                                Zekâ Oyunları,

                                Materyal Tasarım,

                                Kriptoloji,

                                Tabu,

                                MaTabu,


                                Mukabele </p>
                        </section>
                        <div className="hidden md:flex w-px bg-gray-300" />
                        {/* İletişim Bilgileri Kartı */}
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

    export default Guzide;



