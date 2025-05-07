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

const Nislemleri: React.FC<ServiceDetailProps> = ({
                                                   title = "NİKAH İŞLEMLERİ",
                                                   description = "",
                                                   imageUrl = "",
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
            <div className="relative bg-white rounded-xl shadow-lg w-full max-w-[950px] p-6 space-y-6">

                {/* Başlık Kartı */}
                <div className="bg-[#891737] rounded-xl shadow-lg w-full py-6 px-8 mb-4">
                    <div className="text-2xl md:text-3xl font-semibold text-white text-center">{title}</div>
                </div>

                {/* Başlık + Resim Kartı */}
                <div className="relative flex justify-center w-full mb-6">
                    <div className="w-full sm:w-[650px] md:w-[750px] h-[450px] rounded-xl overflow-hidden">
                        {/* Resim kartı tamamen kaplasın */}
                        <img
                            src="/images/hizmetler/evlendirme/nikah.jpg"
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
                            NİKÂH İÇİN GEREKLİ OLAN EVRAK LİSTESİ
                            <br/>
                            1.	Çiftler T.C. Nüfus Cüzdanlarıyla (daha önce boşanma, ölüm varsa nüfus cüzdanlarına işlenmiş son medeni halleri yazılı olacak.) 1 adet Nüfus Cüzdan fotokopileri.
                            <br/>
                            2.	Son altı ay içerisinde çekilmiş 3(Yabancı evlilikte 4)’er adet vesikalık fotoğraf, (fotokopi veya biometrik kabul edilmez.)
                            <br/>
                            3.	Aile Hekimlerinden (Yabancı gelin veya damat Merkez Sağlık Ocağından) (4721, 1593, 123-124 maddelerin yazılı olduğu Evlendirme Yönetmeliği’nin 14-15 maddesine uygun)  Evlenme Sağlık Raporu, (özellikle fotoğrafın üzerine kaşe – imza yaptırılacak)
                            <br/>
                            4.	Kızlık soyadını kullanmak isteyen bayanlar müracaat sırasında soyadı dilekçesi vermelidir.(Memurluğumuzda matbu halde bulunmaktadır.)
                            <br/>
                            5.	Mal Rejimi Sözleşmesi varsa evraklarını müracaat sırasında teslim etmeleri gerekmektedir.

                            <br/>
                            <br/>
                            REŞİT OLMAYANLAR
                            <br/>
                            1-	18 yaşını bitirmiş olanlar kendi başına evlenebilir.
                            <br/>
                            2-	17 yaşını bitirmiş olanlar da anne, baba muvafakat imzaları nikâh memurluğumuzda,  anne baba gelememe durumlarında, muvafakat name noterden alınacak. (anne - baba ölmüş, boşanmış veya vasi durumunda iseler Nüfus Müdürlüğünden vukuatlı nüfus kayıt örneği getirilecek.)
                            <br/>
                            3-	16 yaşını bitirmiş olanlar aile mahkemesinden kesinleşmiş evlenmeye izin kararı ile evlenebilirler.

                            <br/>
                            <br/>
                            BOŞANMIŞ VE DUL OLAN BAYANLAR
                            <br/>
                            1-	Boşanmış ve dul olan bayanlar, boşanma ve eşinin ölüm tarihi nüfusa işlendikten sonra 10 ay (300 gün ) evlenemezler.
                            <br/>
                            2-	Bu süre bitmeden nikâh yaptırmak isteyen Bayanlar 10 ay evlenme yasağını (bekleme süresini) kaldırmak için, kesinleşmiş mahkeme kararı almaları gerekmektedir.
<br/>
                        </p> <div className="flex items-center mt-8 space-x-3 bg-blue-50 p-4 rounded-lg shadow-sm">
                        <img
                            src="/images/hizmetler/evlendirme/pdf.png.png"
                            alt="PDF Icon"
                            className="w-8 h-8 object-contain"
                        />
                        <a
                            href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fwww.gebze.bel.tr%2Fdosya%2F20250107100448.docx&wdOrigin=BROWSELINK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 font-medium hover:underline"
                        >
                            2025 Yılı Nikah Ücret Tarifesi
                        </a>
                    </div>
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
                                        Hacıhalil, Şht. Numan Dede Cd. No:8, 41400 Gebze/Kocaeli  {" "}
                                        {address}
                                    </p>
                                </div>
                                <br />
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">0262 6465313
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

export default Nislemleri
