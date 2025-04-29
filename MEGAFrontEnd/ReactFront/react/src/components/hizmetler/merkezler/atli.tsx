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

const Atli: React.FC<ServiceDetailProps> = ({
                                                      title = "ATLI EĞİTİM MERKEZİ",
                                                      description = "",
                                                      imageUrl = "/images/hizmetler/bebekbakım/bebekbakim.jpg",
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
                <div className="bg-[#891737] rounded-xl shadow-lg w-full py-6 px-8 mb-4">
                    <div className="text-2xl md:text-3xl font-semibold text-white text-center">{title}</div>
                </div>

                {/* Başlık + Resim Kartı */}
                <div className="relative flex justify-center w-full mb-6">
                    <div className="w-full sm:w-[650px] md:w-[750px] h-[450px] rounded-xl overflow-hidden">
                        {/* Resim kartı tamamen kaplasın */}
                        <img
                            src="/images/hizmetler/merkezler/hayvan.jpg"
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
                            Gebze ve çevresindeki il ve ilçelerde yaşayan vatandaşlarımıza binicilik branşın’da binicilik eğitimleri vermek, gezintiler, çeşitli projeler ve sosyal etkinliklerle bireyleri binicilik sporu ile tanıştırmaktayız.
                            <br/>
                            Online randevu alan vatandaşlarımıza tesisimizde gezinti ve biniş eğitimleri verilmektedir. Eğitimler başlangıç seviyesinden başlatılıp 10 haftalık eğitim programına göre verilmektedir. 8 yaş ve üzeri çocuklarımıza, yetişkinlere 20 dakika süren temel binicilik eğitimi sonunda eğitimini tamamlayan binicilere katılım sertifikası verilmektedir.
                            <br/>
                            Bu program içerisinde çocuklarımız ile yetişkinlerimize atı tanıma, ata yaklaşma ve ata biniş eğitimleri vermekteyiz. 4 yaş ve üzeri bireyler için düzenlenen biniş alanımızda 5 tur şeklinde gezinti faaliyeti gerçekleştirilmektedir.
                            <br/>
                            Özel gereksinimli çocuk ve bireylere Atlı hippoterapi eğitimi uygulayarak bireylerin fiziksel ve psikolojik yönden kendilerini daha iyi hissetmelerini sağlamak ve tedavi süreçlerine katkı sağlamaktayız.

                            <br/>
                            <br/>
                            HİZMET ALANLARIMIZ
                            <br/>
                            Anaokulları,
                            <br/>
                            İlkokullar,
                            <br/>
                            Ortaokullar,
                            <br/>
                            Liseler,
                            <br/>
                            Üniversite öğrencileri,
                            <br/>
                            Dezavantajlı(engelli) bireyler,
                            <br/>
                            KYK,
                            <br/>
                            Sevgi Evleri,
                            <br/>
                            Gençlik Merkezi,
                            <br/>
                            Yaz Okulları ve online randevu sisteminde kayıt olan bireyler.

                            <br/>
                            <br/>
                            ENGELLİ BİREYLER ATLI LİDERLİK (15-25 Yaş)
                            <br/>
                            Atlı Eğitim Merkezi’mizde, özel gereksinimli bireylere hayvan sevgisi kazandırmak, fiziksel ve psikolojik tedavi süreçlerine katkı sağlamak amacıyla atlı terapi tekniği uygulanmaktadır.
                            <br/>
                            Bireylerde görülen davranış bozukluklarının at eşliğinde terapi ile fonksiyonel açıdan iyileşme ve gelişme gösterdiği gözlenmektedir.


                        </p> <a
                        href="https://hizmet.gebze.bel.tr/"
                        className=" font-semibold inline-block mt-2 text-blue bg-blue-600 hover:bg-blue-700 transitionflex items-center justify-center px-4 py-3 rounded-md transition-all shadow-md text-xs flex-2"
                    >
                        Online Randevu İçin Tıklayınız
                    </a>  </section>
                    <br/>




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
                                        GAZİLER MAH.1793 SOK. NO: 58 KOCAELİ/GEBZE {address}
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">0262 642 66 90
                                        {phone}</p>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">genclik.spor@gebze.bel.tr</p>
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

export default Atli;
