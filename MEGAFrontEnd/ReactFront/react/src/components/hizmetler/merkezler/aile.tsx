
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

const Aile: React.FC<ServiceDetailProps> = ({
                                                      title = "AİLE DANIŞMANLIK MERKEZİ",
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
                    <div className="w-full max-w-[850px] rounded-xl overflow-hidden">
                        <img
                            src="/images/hizmetler/merkezler/aile.jpg"
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
                            Aile Danışmanlık Merkezi alanında uzman ve deneyimli psikolog kadrosu ile 2016 Aralık ayından itibaren tüm Gebze halkına ücretsiz hizmet vermektedir. Merkezde, evlilik öncesi, evlilikte yaşanan ilişki sorunları ve boşanma dönemi ve sonrası süreçlerde çiftlere destek sağlanmaktadır.
                            <br/>
                            Merkezimizde aynı zamanda depresyon, kaygı bozuklukları, travma sonrası stres bozukluğu, bağımlılık, panik atak, sosyal fobi gibi bir çok alanda kişiyi rahatsız eden, işlevselliği bozan alanlarda bireysel psikoterapi hizmetleri de verilmektedir.
                            <br/>
                            Gebze Belediyesi Aile Danışmanlık Merkezi “Mutlu Aile Güzel  Gelecek” proje kapsamı adı altında yıl içerisinde aşağıdaki konu başlıklı seminerleri halka açık ücretsiz olarak vermiştir.
                            <br/>
                            •	Evlilikte Saygı ve Sevgi
                            <br/>
                            •	Anne-Baba Olmak
                            <br/>
                            •	Aile Eşit Değildir Şiddet ve Bağımlılığa
                            <br/>
                            •	Boşanma Ve Çocuk
                            <br/>
                            •	Evliliğin İlk Yılları
                            <br/>
                            •	Hayat Arkadaşımı Nasıl Seçerim
                            <br/>
                            •	Hısım, Akraba ve Evliliğimiz
                            <br/>
                            •	Sosyal Medya ve Aile
                            <br/>
                            •	Bağımlılık
                            <br/>
                            •	Kadın Ve Erkek
                            <br/>
                            •	Spor Psikolojisi

                            <br/>
                            <br/>
                            Aile Danışmanlık Merkezine kimler başvurabilir?
                            <br/>
                            Gebze’de ikamet eden herkes merkeze ücretsiz başvuruda bulunabilir.
                            <br/>
                            Aile Danışmanlık Merkezine nasıl başvurulur?
                            <br/>
                            0262 641 11 82 numaralı telefonu arayarak randevu alabilirsiniz
                        </p>
                    </section>

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
                                        HACI HALİL MAH. ATATÜRK CAD. NO: 8 15 TEMMUZ MİLLİ İRADE KENT MEYDANI
                                        {" "}
                                        {address}
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">0262 641 11 82
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

export default Aile;
