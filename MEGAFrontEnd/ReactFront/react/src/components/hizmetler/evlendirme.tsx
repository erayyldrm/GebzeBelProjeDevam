import { motion } from "framer-motion";
import Sidebar from "../SideBar/sidebar.tsx";
import { gebze } from "../_SayfaBilgileri/Sayfalar.tsx";
import { MapPin, Phone, Mail, Info, ExternalLink } from 'lucide-react';

// Atölye merkezi verileri
const atolyeMerkezleri = [
    {
        id: 1,
        name: "Enderun Çocuk Atölyeleri",
        phone: "0262 643 03 30",
        address: "Mustafapaşa Mah. 712/2 Sok. No:2 Gebze / Kocaeli",
        image: "/api/placeholder/400/250",
        mapLink: "https://maps.google.com/?q=Mustafapaşa+Mahallesi+Gebze+Kocaeli"
    },
    {
        id: 2,
        name: "Gençlik Atölyesi",
        phone: "0262 644 33 78",
        email: "kultur.gesmek@gebze.bel.tr",
        address: "Hacı Halil Mah. Zübeyde Hanım Cad. Eyüp Güvenç İş Merkezi Gebze",
        image: "/api/placeholder/400/250",
        mapLink: "https://maps.google.com/?q=Hacı+Halil+Mahallesi+Zübeyde+Hanım+Caddesi+Gebze"
    },
    {
        id: 3,
        name: "Güzide Gençlik Merkezi Atölyeleri",
        phone: "0262 646 95 86",
        address: "Hacıhalil Mah. Adliye Cad. No: 38 41400 Gebze / KOCAELİ",
        image: "/api/placeholder/400/250",
        mapLink: "https://maps.google.com/?q=Hacıhalil+Mahallesi+Adliye+Caddesi+38+Gebze"
    }
];

// Atölye türleri (örnek veriler)
const atolyeTurleri = [
    { id: 1, name: "Resim Atölyesi", icon: "🎨", center: "Enderun Çocuk Atölyeleri" },
    { id: 2, name: "Müzik Atölyesi", icon: "🎵", center: "Enderun Çocuk Atölyeleri" },
    { id: 3, name: "Robotik Kodlama", icon: "🤖", center: "Gençlik Atölyesi" },
    { id: 4, name: "El Sanatları", icon: "✂️", center: "Gençlik Atölyesi" },
    { id: 5, name: "Drama ve Tiyatro", icon: "🎭", center: "Güzide Gençlik Merkezi Atölyeleri" },
    { id: 6, name: "Satranç", icon: "♟️", center: "Güzide Gençlik Merkezi Atölyeleri" },
    { id: 7, name: "Ahşap Oyuncak Yapımı", icon: "🪵", center: "Enderun Çocuk Atölyeleri" },
    { id: 8, name: "Zeka Oyunları", icon: "🧩", center: "Gençlik Atölyesi" },
    { id: 9, name: "Bilim Atölyesi", icon: "🔬", center: "Güzide Gençlik Merkezi Atölyeleri" }
];

// Atölye Merkezi Kartı Bileşeni
const WorkshopCenterCard = ({ center }: { center: typeof atolyeMerkezleri[0] }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white shadow-lg rounded-2xl overflow-hidden transition-all"
    >
        <img
            src={center.image}
            alt={center.name}
            className="w-full h-48 object-cover"
        />
        <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">{center.name}</h2>

            <div className="space-y-3 mb-6">
                <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{center.address}</p>
                </div>

                <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{center.phone}</p>
                </div>

                {center.email && (
                    <div className="flex items-center">
                        <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <p className="text-gray-700">{center.email}</p>
                    </div>
                )}
            </div>

            <div className="flex space-x-3">
                <a
                    href={center.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex-1"
                >
                    <MapPin className="w-4 h-4 mr-2" />
                    Konum
                </a>

                <a
                    href="#"
                    className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex-1"
                >
                    <Info className="w-4 h-4 mr-2" />
                    Detaylı Bilgi
                </a>
            </div>
        </div>
    </motion.div>
);

// Atölye Türü Kartı Bileşeni
const WorkshopTypeCard = ({ workshop }: { workshop: typeof atolyeTurleri[0] }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-md rounded-xl overflow-hidden transition-all hover:shadow-lg"
    >
        <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{workshop.icon}</span>
                <h3 className="text-lg font-semibold">{workshop.name}</h3>
            </div>
            <p className="text-gray-600 text-sm">
                <span className="font-medium">Konum:</span> {workshop.center}
            </p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center">
                <Info className="w-4 h-4 mr-1" />
                Detayları Görüntüle
            </button>
        </div>
    </motion.div>
);

export default function AtolyelerSayfasi() {
    return (
        <div id="pcoded" className="pcoded">
            <br /><br /><br /><br /><br /><br />
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <div className="flex flex-row gap-4">
                                            {/* Sidebar - %20 genişlikte ve sabit */}
                                            <div style={{ width: '20%', minWidth: '200px' }}>
                                                <Sidebar items={gebze} title={"ATÖLYELER"} />
                                            </div>

                                            {/* Ana İçerik Alanı */}
                                            <div className="flex-1 p-4">
                                                <div className="bg-blue-800 text-white py-6 px-8 rounded-2xl mb-8">
                                                    <h1 className="text-3xl font-bold">Gebze Belediyesi Atölyeleri</h1>
                                                    <p className="mt-2 opacity-90">
                                                        Gebze Belediyesi olarak vatandaşlarımızın sosyal, kültürel ve sanatsal gelişimlerine
                                                        katkıda bulunmak amacıyla farklı lokasyonlarda çeşitli atölyeler düzenliyoruz.
                                                    </p>
                                                </div>

                                                {/* Atölye Merkezleri */}
                                                <section className="mb-10">
                                                    <h2 className="text-2xl font-semibold mb-6 flex items-center border-b pb-3">
                                                        <span className="text-blue-700">Atölye Merkezlerimiz</span>
                                                    </h2>
                                                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                                                        {atolyeMerkezleri.map((center) => (
                                                            <WorkshopCenterCard key={center.id} center={center} />
                                                        ))}
                                                    </div>
                                                </section>

                                                {/* Atölye Türleri */}
                                                <section className="mb-10">
                                                    <h2 className="text-2xl font-semibold mb-6 flex items-center border-b pb-3">
                                                        <span className="text-blue-700">Atölye Türlerimiz</span>
                                                    </h2>
                                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                                        {atolyeTurleri.map((workshop) => (
                                                            <WorkshopTypeCard key={workshop.id} workshop={workshop} />
                                                        ))}
                                                    </div>
                                                </section>

                                                {/* Kayıt Bilgileri */}
                                                <section className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                                    <h2 className="text-xl font-semibold mb-4 text-blue-700">Kayıt ve Katılım Bilgileri</h2>
                                                    <div className="space-y-3 text-gray-700">
                                                        <p>
                                                            Gebze Belediyesi atölyelerine kayıt olmak için ilgili atölye merkezine şahsen başvurabilir veya
                                                            telefon numaralarından bilgi alabilirsiniz.
                                                        </p>
                                                        <p>
                                                            Atölyelerimizde kontenjan sınırlıdır ve kayıtlar başvuru sırasına göre değerlendirilmektedir.
                                                        </p>
                                                        <p className="font-medium">
                                                            Tüm atölyelerimiz Gebze Belediyesi tarafından ücretsiz olarak sunulmaktadır.
                                                        </p>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium"
                                                    >
                                                        Daha fazla bilgi için tıklayınız
                                                        <ExternalLink className="w-4 h-4 ml-1" />
                                                    </a>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}