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

const Gesmek: React.FC<ServiceDetailProps> = ({
                                                title = "GESMEK",
                                                description = "",
                                                imageUrl = "/images/hizmetler/merkezler/gesmek.jpg",
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
                            61 BRANŞTA 11 KURS MERKEZİNDE; SANAT, MESLEK, HOBİ, KİŞİSEL GELİŞİM, VE DİL KURSLARI ALANLARINDA 14 YAŞ VE ÜZERİ YETİŞKİN EĞİTİMİ VERİLMEKTEDİR.
                            <br/>
                            BRANŞLARIMIZ;
                            <br/>
                            HOBİ KURSLARI
                            <br/>
                            ÖRGÜ OYUNCAK
                            <br/>
                            EL NAKIŞI
                            <br/>
                            KUMAŞ BOYAMA
                            <br/>
                            MAKİNE NAKIŞI
                            <br/>
                            TEL KIRMA
                            <br/>
                            KEÇE YAPIMI
                            <br/>
                            KIRKYAMA
                            <br/>
                            BEBEK ODASI
                            <br/>
                            İĞNE OYASI
                            <br/>
                            ÇEYİZ ÜRÜNLERİ HAZIRLAMA
                            <br/>
                            DEKORATİF EV AKSESUARLARI
                            <br/>
                            DİKİŞ
                            <br/>
                            KADIN GİYİSİLERİ KALIP HAZIRLAMA
                            <br/>
                            TÜRK HALK MÜZİĞİ
                            <br/>
                            BAĞLAMA
                            <br/>
                            KEMAN
                            <br/>
                            GİTAR
                            <br/>
                            NEY
                            <br/>
                            DEF/RİTİM
                            <br/>
                            TÜRK TASAVVUF MÜZİĞİ
                            <br/>
                            TÜRK SANAT MÜZİĞİ
                            <br/>
                            TİYATRO
                            <br/>
                            HALK OYUNLARI
                            <br/>
                            DANTEL ANGLEZ
                            <br/>
                            GOBLEN
                            <br/>
                            DEKORATİF AHŞAP SÜSLEME
                            <br/>
                            FOTOĞRAF ÇEKİMİ
                            <br/>
                            DERİ ÇANTA KEMER VE AKSESUARLARI
                            <br/>
                            TAKI TASARIM
                            <br/>
                            ATIK KAĞIT EV AKSESUARLARI
                            <br/>
                            <br/>
                            SANAT KURSLARI
                            <br/>
                            HÜSN-İ HAT
                            <br/>
                            MİNYATÜR
                            <br/>
                            TEZHİP
                            <br/>
                            KALİGRAFİ
                            <br/>
                            EBRU
                            <br/>
                            RESİM
                            <br/>
                            ÇİÇEK RESSAMLIĞI
                            <br/>
                            SERAMİK BİÇİMLENDİRME
                            <br/>
                            CAM SÜSLEME
                            <br/>
                            BOYACI/ÇİNİ
                            <br/>
                            KAĞIT ROLYEF
                            <br/>
                            NAHT

                            <br/>
                            <br/>
                            MESLEK KURSLARI
                            <br/>
                            OFİS PROGRAMLARI
                            <br/>
                            AUTOCAD
                            <br/>
                            SOLİDWORKS
                            <br/>
                            HIZLI KLAVYE KULLANIMI
                            <br/>
                            GENEL MUHASEBE

                            <br/>
                            <br/>
                            KİŞİSEL GELİŞİM KURSLARI
                            <br/>
                            DİKSİYON/SPİKERLİK/SUNUCULUK
                            <br/>
                            TÜRK İŞARET DİLİ
                            <br/>
                            OKUL ÖNCESİ GELİŞİMİ VE EĞİTİMİ
                            <br/>
                            KURANI KERİMİ TİLAVETİ VE TASHİH-İ HURUF EĞİTİMİ 1
                            <br/>
                            KURANI KERİM OKUMA
                            <br/>
                            KURANI KERİMİ TECVİDLİ OKUMA
                            <br/>
                            YETİŞKİNLER İÇİN 1.KADEME OKUMA-YAZMA
                            <br/>
                            YABANCILAR İÇİN TÜRKÇE A1 SEVİYESİ

                            <br/>
                            <br/>
                            DİL KURSLARI
                            <br/>
                            İNGİLİZCE A1
                            <br/>
                            İNGİLİZCE A2
                            <br/>
                            İNGİLİZCE B1
                            <br/>
                            ARAPÇA A1
                            <br/>
                            ARAPÇA A2
                            <br/>
                            ARAPÇA B1



                        </p>
                        <a
                        href="https://www.gesmek.org/"
                        className=" font-semibold inline-block mt-2 text-blue bg-blue-600 hover:bg-blue-700 transitionflex items-center justify-center px-4 py-3 rounded-md transition-all shadow-md text-xs flex-2"
                    >
                        WEB SAYFASI
                    </a>     </section>
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
                                        Hacı Halil Mah. Zübeyde Hanım Cad. Eyüp Güvenç İş Merkezi Gebze Kocaeli{address}
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">0262 644 33 78
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

export default Gesmek;
