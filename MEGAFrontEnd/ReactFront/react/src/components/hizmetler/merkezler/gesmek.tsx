
import { motion } from "framer-motion";
import {MapPin, Phone, Mail} from "lucide-react";

interface ServiceDetailProps {
    title: string;
    description: string;
    imageUrl: string;
    address: string;
    phone: string;
    workingHours: string;
    announcements: string[];
}


const Gesmek: React.FC<ServiceDetailProps> = ({
                                                title = "GESMEK",
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
                {/* Başlık Kartı */}
                <div className="bg-blue-500 rounded-xl shadow-lg w-full py-6 px-8 mb-4">
                    <div className="text-2xl md:text-3xl font-semibold text-white text-center">{title}</div>
                </div>

                {/* Başlık + Resim Kartı */}
                <div className="relative flex justify-center w-full mb-2">
                    <div className="w-full max-w-[850px]  rounded-xl overflow-hidden">
                        <img
                            src="/images/hizmetler/merkezler/gesmek.jpg"
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
                            61 branşta 11 kurs merkezinde; sanat, meslek, hobi, kişisel gelişim ve dil kursları alanlarında 14 yaş ve üzeri yetişkin eğitimi verilmektedir.
                            <br/>
                        <div className="font-semibold"> Branşlarımız;</div>
                            <br/>
                            Hobi kursları
<br/>
                            Örgü oyuncak,

                            El nakışı,
                            Kumaş boyama,

                            Makine nakışı,

                            Tel kırma,

                            Keçe yapımı,

                            Kırkyama,

                            Bebek odası,

                            İğne oyası,

                            Çeyiz ürünleri hazırlama,

                            Dekoratif ev aksesuarları,

                            Dikiş,

                            Kadın giysileri kalıp hazırlama,

                            Türk halk müziği,

                            Bağlama,

                            Keman,

                            Gitar,

                            Ney,

                            Def/ritim,

                            Türk tasavvuf müziği,

                            Türk sanat müziği,

                            Tiyatro,

                            Halk oyunları,

                            Dantel anglez,

                            Goblen,

                            Dekoratif ahşap süsleme,

                            Fotoğraf çekimi,

                            Deri çanta kemer ve aksesuarları,

                            Takı tasarım,

                            Atık kağıt ev aksesuarları
                            <br/>
                            <br/>
                            <div className="font-semibold"> Sanat kursları</div>
                            <br/>
                            Hüsn-i hat,
                            Minyatür,

                            Tezhip,

                            Kaligrafi,

                            Ebru,

                            Resim,

                            Çiçek ressamlığı,

                            Seramik biçimlendirme,

                            Cam süsleme,

                            Boyacı/çini,
                            Kağıt rolyef,

                            Naht
                            <br/>
                            <br/>
                            <div className="font-semibold">  Meslek kursları</div>
                            <br/>
                            Ofis programları

                            Autocad

                            Solidworks

                            Hızlı klavye kullanımı

                            Genel muhasebe
                            <br/>
                            <br/>
                            <div className="font-semibold">    Kişisel gelişim kursları</div>
<br/>
                            Diksiyon/spikerlik/sunuculuk

                            Türk işaret dili

                            Okul öncesi gelişimi ve eğitimi

                            Kuranı kerimi tilaveti ve tashih-i huruf eğitimi 1

                            Kuranı kerim okuma

                            Kuranı kerimi tecvidli okuma

                            Yetişkinler için 1.kademe okuma-yazma

                            Yabancılar için türkçe a1 seviyesi
                            <br/>
                            <br/>
                            <div className="font-semibold">   Dil kursları</div>
                            <br/>
                            ingilizce a1

                            İngilizce a2

                            İngilizce b1

                            Arapça a1

                            Arapça a2

                            Arapça b1



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
                    <div className="w-full">
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
