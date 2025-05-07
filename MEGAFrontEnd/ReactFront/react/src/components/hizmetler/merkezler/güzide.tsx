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

const Güzide: React.FC<ServiceDetailProps> = ({
                                                title = "GÜZİDE GENÇLİK MERKEZİ",
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
                            src="/images/hizmetler/merkezler/güzidegençlik.png"
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
                            Güzide Gençlik Merkezi, Gebze’nin merkezi sayılabilecek bir konumunda, eski Gebze adliye binasının restore edilmesiyle ortaya çıkan ve mülkü Gebze Belediyesine ait olan bir yapıdır. Lise gençlik merkezi olarak kurgulanan bu yapıda hali hazırda lise okuyan ve yeni mezun olan gençlere hizmet verilmektedir. Yaş itibariyle 14-21 yaş arası bu yapıdan hizmet alabilmektedir.
                            <br/>
                            Güzide Gençlik Merkezinde akademik program Türk Dili ve Edebiyatı ile Matematik derslerinin merkeze alındığı ve yoğun olarak işlendiği bir anlayışla inşa edilmiştir. Ayrıca diğer branşlar; seminerler, özel çalışma grupları ve farklı eğitim metotları üzerinden öğrencilere sunulmaktadır.
                            <br/>
                            Akademik programın yanı sıra Güzide Gençlik Merkezinde beden ve ruh sağlığına matuf, sosyoloji, psikoloji, fizyoloji, eğitim bilimleri, aile danışmanlığı, akademik ve manevi rehberlik alanlarından müteşekkil çalışmalar “Denge” başlığı altında toplanmıştır. Denge’den maksat, yukarıda mezkûr tüm alanlarda öğrencilerimize dengeli olmayı ‘teklif’ etmektir.

                            <br/>
                            <br/>
                            Hizmetler:
                            <br/>
                            Güzide Teras
                            <br/>
                            Kütüphane
                            <br/>
                            Dergihane
                            <br/>
                            Sesli Kitap Atölyesi
                            <br/>
                            Edebiyat Derslikleri
                            <br/>
                            Matematik Derslikleri
                            <br/>
                            Geleneksel Sanat Atölyeleri ( Hat, Tezhip, Kaligrafi, Ebru, Minyatür, Kat’ı )
                            <br/>
                            El Sanatları Atölyesi ( Kanaviçe, Biçki, Dikiş, Örgü )
                            <br/>
                            Resim Atölyesi ( Kara Kalem, Yağlı Boya, Kuru Boya, Toz Pastel, Akrilik )
                            <br/>
                            Gastronomi Atölyesi
                            <br/>
                            Savunma Sanatı  ( Kick-Box )
                            <br/>
                            Klasik Oyun Salonu ( Satranç, Mangala, Ahşap Oyunlar )
                            <br/>
                            Robotik Atölyesi
                            <br/>
                            Güzide Garaj ( Teknofest Çalışma Alanı )
                            <br/>
                            Yazılım Sınıfları
                            <br/>
                            Dijital Eğitim Sınıfları
                            <br/>
                            3 D Baskı Atölyesi
                            <br/>
                            Uçuş Simülatörü
                            <br/>
                            Araç Simülatörü
                            <br/>
                            VR ( Sanal Gerçeklik Gözlüğü )
                            <br/>
                            Dijital Oyun Salonu
                            <br/>
                            PS 5
                            <br/>
                            Klasik Atari
                            <br/>
                            Psikolog
                            <br/>
                            Aile Danışmanı
                            <br/>
                            Eğitim Danışmanı
                            <br/>
                            Aile İletişim Ofisi
                            <br/>
                            Değerler Eğitimi
                            <br/>
                            Çok Amaçlı Eğitim Salonları
                            <br/>
                            Hemşire
                            <br/>
                            Diyetisyen
                            <br/>
                            XR Laboratuvarı ( Genişletilmiş Gerçeklik Teknolojisi )
                            <br/>
                            Güzide Kafe
                            <br/>
                            Greenbox Stüdyo
                            <br/>
                            Podcast Stüdyosu
                            <br/>
                            Bilardo Salonları
                            <br/>
                            Masa Tenisi
                            <br/>
                            Langırt
                            <br/>
                            Shuffleboard
                            <br/>
                            Fitness Salonu
                            <br/>
                            Pilates
                            <br/>
                            Laser Tag  </p>
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
                                        HACI HALİL MAH. ATATÜRK CAD. NO: 8 15 TEMMUZ MİLLİ İRADE KENT MEYDANI
                                        {" "}
                                        {address}
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700"> 0262 644 56 89
                                        {phone}</p>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">kultur@gebze.bel.tr</p>
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

export default Güzide;
