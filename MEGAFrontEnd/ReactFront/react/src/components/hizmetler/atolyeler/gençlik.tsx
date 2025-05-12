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

const Genclik: React.FC<ServiceDetailProps> = ({
                                                   title = "GENÇLİK ATÖLYESİ",
                                                   address = "",
                                                   phone = "",
                                               }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col items-center px-4 py-6 space-y-4"
        >
            {/* Ana Kart */}
            <div className="relative bg-white rounded-xl shadow-lg w-full max-w-[950px] p-4 space-y-4">
                {/* Başlık Kartı */}
                <div className="bg-blue-500 rounded-xl shadow-lg w-full py-4 px-6 mb-2">
                    <div className="text-2xl md:text-3xl font-semibold text-white text-center">{title}</div>
                </div>
<br/>
                {/* Başlık + Resim Kartı */}
                <div className="relative flex justify-center w-full mb-2">
                    <div className="w-full max-w-[850px] rounded-xl overflow-hidden">
                        <img
                            src="/images/hizmetler/atölyeler/gençlik.jpg"
                            alt={title}
                            className="w-full h-auto max-h-[440px] object-cover"
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
                            Bu program Gebze bölgesinde eğitim gören 9,10 ve 11. sınıf öğrencilerinin psikolojik, fiziksel ve manevi enerjilerini doğru yönlendirmek, alanında uzman rol model eğitmenler aracılığı ile ilgi duydukları alanda hem kendilerini geliştirmelerini, hem de değerlerine sahip çıkan bir gençlik olma yolunda deneyimlenmelerini hedefleyen bir eğitim programıdır. Ayrıca program içerisinde kişisel gelişim, sağlıklı yaşam ve sosyal proje alanlarında eğitim ve etkinlikler gerçekleştirilir.
                            <br />
                            <br />
                            <strong>Konu Başlıkları</strong><br />
                            İngilizce, Resim, Müzik, Fotoğrafçılık ve Tiyatro olmak üzere 5 farklı atölyesi ile 28 haftalık bir eğitim dönemini kapsar. Eğitimler hafta sonları 1 gün, 4 ders şeklinde yapılır.
                            <br />
                            <br />
                            <strong>İstihdam Alanları</strong><br />
                            Öğrencilerinin psikolojik, fiziksel ve manevi enerjilerini doğru yönlendirmeyi amaçlayan program aynı zamanda öğrencilerin lisans eğitim hayatı için bir temel oluşturur.
                            <br />
                            <br />
                            <strong>Kayıt Şartları</strong><br />
                            <u>İngilizce Atölyesi</u><br />
                            *Atölyeye dil becerisi en az A2 seviyesinde olanlar başvurabilirler.
                            <br />
                            <u>Resim Atölyesi</u><br />
                            *Resme ilgisi ve yeteneği olan, güzel sanatları hedefleyen öğrenciler başvuru yapabilirler.
                            <br />
                            <u>Müzik Atölyesi</u><br />
                            *İyi derecede en az bir müzik aleti çalabilen öğrenciler başvuru yapabilirler.
                            <br />
                            <u>Fotoğrafçılık Atölyesi</u><br />
                            *Fotoğrafa ilgisi olan, tercihen fotoğraf makinası olan öğrencilerimiz başvuru yapabilir.
                            <br />
                            <u>Tiyatro Atölyesi</u><br />
                            *Bu alanda yetenekli, üniversitede ilgili bölümleri hedefleyen öğrenciler başvuru yapabilir.
                            <br />
                            <br />
                            <strong>KURS VERİLEN MERKEZLER</strong><br />
                            GESMEK Kurs Merkezi
                            <br />
                            <strong>Kayıt İçin Gerekli Evraklar</strong><br />
                            Öğrenci Belgesi<br />
                            1 Adet Kimlik Fotokopisi
                        </p>
                    </section>

                    {/* İletişim Bilgileri */}
                    <div className="w-full">
                        <div className="bg-blue-50 rounded-lg p-4 shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">İletişim Bilgileri</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <p className="text-gray-700 text-sm">
                                        Hacı Halil Mah. Zübeyde Hanım Cad. Eyüp Güvenç İş Merkezi Gebze {address}
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700 text-sm">0262 644 33 78 {phone}</p>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700 text-sm">kultur.gesmek@gebze.bel.tr</p>
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