
import { motion } from "framer-motion";
import {MapPin, Phone} from "lucide-react";

interface ServiceDetailProps {
    title: string;
    description: string;
    imageUrl: string;
    address: string;
    phone: string;
    workingHours: string;
    announcements: string[];
}



const Guresss: React.FC<ServiceDetailProps> = ({
                                                   title = "Çoban Mustafa Paşa Kütüphanesi",
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
                            src="/images/hizmetler/kütüphane/çobanmustafa.jpg"
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
                            Çoban Mustafa Paşa Kütüphanemiz Haftaiçi ve Haftasonu 09:00/24:00 saatleri arasında her gün tüm halkımıza açıktır. Kütüphanemizdeki oturma alanlarını kullanabilmek için https://kutuphane.gebze.bel.tr/yordam web adresi üzerinden üyelik bilgileriniz ile oturum açarak rezervasyon yaptırmanız gerekmektedir. Ayrıca web adresi üzerinden üyelik bilgileriniz ile oturum açarak Online Kitap Arama, Süre Uzatma, Kitap Ayırtma ve Rezervasyon işlemlerinizi gerçekleştirebilirsiniz.

                            Kütüphanemizde 10 Kişilik ve 12 Kişilik Grup Çalışma Odası bulunmakta olup bu alanlarda ekip arkadaşlarınızla proje tasarlayabilir ve Smart TV ile görsel paylaşım yapabilirsiniz.

                            Kütüphanemizde 20,000 Adet Yetişkin, Çocuk ve Okul Öncesi yaş gruplarına ait koleksiyon bulunmaktadır. Süreli yayın koleksiyonumuzla her yaş grubunda farklı içerikleri okuyucularımızla buluşturuyoruz.

                            Kütüphanemizde ziyaretçilerimizin kullanımına sunduğumuz bilgisayarlar ile İnternete erişim sağlayabilirsiniz. Kütüphanemizin her noktasında ziyaretçilerimizin kendi kişisel tablet, telefon ve bilgisayarları ile kullanabilecekleri Ücretsiz Wi-Fİ ağımız bulunmaktadır.

                            .</p>
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
                                        HACI HALİL MAH. ATATÜRK CAD. NO: 10 GEBZE KOCAELİ
                                        {" "}
                                        {address}
                                    </p>
                                </div>
                                <br />
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">02626420430 - 1773
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

export default Guresss;
