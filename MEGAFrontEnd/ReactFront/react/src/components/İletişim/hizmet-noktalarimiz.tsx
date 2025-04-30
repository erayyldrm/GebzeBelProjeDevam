import { useState } from "react";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const hizmetNoktalari = [
    {
        id: 1,
        ad: "📊 Basın Yayın ve Halkla İlişkiler Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "https://www.google.com/maps/place/Gebze+Belediye+Ba%C5%9Fkanl%C4%B1%C4%9F%C4%B1/@40.805905,29.440195,1707m/data=!3m1!1e3!4m6!3m5!1s0x14cb2088efaa11d3:0x575a512b11a2fd35!8m2!3d40.805905!4d29.440195!16s%2Fg%2F1tk69xgw?hl=tr&entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D",
    },
    {
        id: 2,
        ad: " 💻  Bilgi İşlem Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "https://www.google.com/maps/place/Gebze+Belediye+Ba%C5%9Fkanl%C4%B1%C4%9F%C4%B1/@40.805905,29.440195,1707m/data=!3m1!1e3!4m6!3m5!1s0x14cb2088efaa11d3:0x575a512b11a2fd35!8m2!3d40.805905!4d29.440195!16s%2Fg%2F1tk69xgw?hl=tr&entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D",
    },
    {
        id: 3,
        ad: "🛠️ Destek Hizmetleri Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 6,
        ad: "🏠 Emlak ve İstimlak Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },

    {
        id: 8,
        ad: "🚧 Fen İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 9,
        ad: "⚖️ Hukuk İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 10,
        ad: "🏘️ İmar ve Şehircilik Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 11,
        ad: "👥 İnsan Kaynakları ve Eğitim Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 12,
        ad: "🧑‍💼 İstihdam Büro",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 4,
        ad: "🏗️ Makina İkmal Bakım Onarım Servisi",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 5,
        ad: "🚌  Otobüs İşleri Servisi",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },

    {
        id: 7,
        ad: "🔢  Numarataj Şefliği",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 13,
        ad: "📈 İşletme ve İştirakler Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 14,
        ad: "📚 Kültür İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 15,
        ad: "👰‍♀️🤵‍♂️ Evlendirme Memurluğu",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 16,
        ad: "💰 Mali Hizmetler Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 17,
        ad: "🪦 Mezarlıklar Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 18,
        ad: " 🗂️  Özel Kalem Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 19,
        ad: "🌳 Park ve Bahçeler Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 20,
        ad: "🗺️ Plan ve Proje Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 21,
        ad: "📄 Ruhsat ve Denetim Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 22,
        ad: "🫂 Sosyal Destek Hizmetleri Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 23,
        ad: "📋  Teftiş Kurulu Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 24,
        ad: "🗑️ Temizlik İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 25,
        ad: "🐾 Veteriner İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "",
    },
    {
        id: 26,
        ad: "📝  Yazı İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 27,
        ad: "📑  Evrak Kayıt Servisi",
        kategori: "Birimler",
        adres: "",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 28,
        ad: "🛡️ Zabıta Müdürlüğü",
        kategori: "Birimler",
        adres: "",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 29,
        ad: "🚦 Trafik ve Eğitim Okulu Zabıta Amirliği",
        kategori: "Birimler",
        adres: "",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 30,
        ad: " 🛍️  Çarşı ve Seyyar Zabıta Amirliği",
        kategori: "Birimler",
        adres: "",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 31,
        ad: "🏢 Terminal Zabıta Amirliği",
        kategori: "Birimler",
        adres: "",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 32,
        ad: "🛡️ Mollafenari Zabıta Amirliği",
        kategori: "Birimler",
        adres: "",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 33,
        ad: "🛡️ Beylikbağı Karakolu",
        kategori: "Birimler",
        adres: "",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 34,
        ad: "🛡️ Kamyon Tır Garajı Zabıta Karakolu",
        kategori: "Birimler",
        adres: "",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 35,
        ad: "🔭 Beylikbağı Bilim ve Sanat Merkezi",
        kategori: "Bilim Sanat Merkezleri",
        adres: "",
        konumUrl: "https://goo.gl/maps/example4",
    },
    {
        id: 36,
        ad: "🔬 Arapçeşme Bilim Ve Sanat Merkezi",
        kategori: "Bilim Sanat Merkezleri",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 37,
        ad: "🧬 İstasyon Bilim ve Sanat Merkezi",
        kategori: "Bilim Sanat Merkezleri",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 38,
        ad: "🕊️ Güzide Cumhuriyet Meydanı",
        kategori: "Sosyal Tesisler",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 39,
        ad: "🏟️ Güzide Kent Meydanı",
        kategori: "Sosyal Tesisler",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 40,
        ad: "🏇 Atlı Eğitim Merkezi",
        kategori: "Eğitim",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 41,
        ad: "🏋️ Cumhuriyet Spor Salonu",
        kategori: "Eğitim",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 42,
        ad: "🧩 Enderun Çocuk Atölyeleri",
        kategori: "Eğitim",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 43,
        ad: "🏫 GESMEK Ademyavuz Mahalle Kursu",
        kategori: "Eğitim",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 44,
        ad: "📘 GESMEK Gaziler Mahalle Kursu",
        kategori: "Eğitim",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 45,
        ad: "🏛️ GESMEK Merkez",
        kategori: "Eğitim",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 46,
        ad: "🧑‍🏫 GESMEK Yenikent Mahalle Kursu",
        kategori: "Eğitim",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 47,
        ad: "🪦 Adem Yavuz Mezarlığı",
        kategori: "Diğer",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 48,
        ad: "🤝 Elden Ele Gönül Çarşısı",
        kategori: "Diğer",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 49,
        ad: "🎖️ Gebze Merkez Mezarlığı ve Şehitliği",
        kategori: "Diğer",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 50,
        ad: "🚌 Gebze Terminali",
        kategori: "Diğer",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 51,
        ad: "🚛 Kamyon ve Tır Parkı",
        kategori: "Diğer",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 52,
        ad: "🛍️ Mevlana Kapalı Pazar Alanı",
        kategori: "Diğer",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 53,
        ad: "🪦 Mimar Sinan Mezarlığı",
        kategori: "Diğer",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 54,
        ad: "🪦 Osman Yılmaz Mezarlığı",
        kategori: "Diğer",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 55,
        ad: "🪦 Pelitli Mezarlığı",
        kategori: "Diğer",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 56,
        ad: "🐾 Sokak Hayvanları Tedavi, Rehabilitasyon ve Eğitim Merkezi",
        kategori: "Diğer",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 57,
        ad: "🧺 Tatlıkuyu Pazar Alanı",
        kategori: "Diğer",
        adres: "",
        konumUrl: "https://goo.gl/maps/example5",
    }
];



const kategoriler = [
    { etiket: "🏛️ Birimler", deger: "Birimler" },
    { etiket: "🏫 Bilim Sanat Merkezleri", deger: "Bilim Sanat Merkezleri" },
    { etiket: "🏢 Sosyal Tesisler", deger: "Sosyal Tesisler" },
    { etiket: "📖 Eğitim", deger: "Eğitim" },
    { etiket: "🗨️ Diğer", deger: "Diğer" },
];

export default function HizmetNoktalari() {
    const [seciliKategori, setSeciliKategori] = useState("Birimler");
    const [tiklananId, setTiklananId] = useState<number | null>(null);

    const filtrelenmisNoktalar = hizmetNoktalari.filter(
        (nokta) => nokta.kategori === seciliKategori
    );

    return (
        <div className="p-4 md:p-10 max-w-screen-xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
                Hizmet Noktalarımız
            </h1>

            {/* Kategoriler Sekmesi */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {kategoriler.map((kategori) => (
                    <button
                        key={kategori.deger}
                        onClick={() => {
                            setSeciliKategori(kategori.deger);
                            setTiklananId(null);
                        }}
                        className={`px-5 py-2 rounded-full text-sm font-semibold shadow transition-all duration-300 ${
                            seciliKategori === kategori.deger
                                ? "bg-orange-600 text-black"
                                : "bg-blue-900 text-white hover:bg-blue-800"
                        }`}
                    >
                        {kategori.etiket}
                    </button>
                ))}
            </div>

            {/* Hizmet Noktaları Listesi */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={seciliKategori}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {filtrelenmisNoktalar.map((nokta) => {
                        const [emoji, ...baslikKelimeleri] = nokta.ad.trim().split(" ");
                        const baslik = baslikKelimeleri.join(" ");

                        return (
                            <div
                                key={nokta.id}
                                className="flex flex-col justify-between h-full border rounded-2xl p-4 shadow-md hover:shadow-lg transition-all bg-white items-center text-center"
                            >
                                <div>
                                    <div className="text-4xl mb-2">{emoji}</div>
                                    <h2 className="text-base font-semibold mb-2 text-gray-800">{baslik}</h2>
                                    <p className="text-sm text-gray-600 mb-5">{nokta.adres}</p>
                                </div>

                                {tiklananId === nokta.id ? (
                                    <div className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-green-700 text-white transition-colors">
                                        <MapPin className="w-4 h-4" />
                                        Yönlendiriliyor...
                                    </div>
                                ) : (
                                    <a
                                        href={nokta.konumUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setTiklananId(nokta.id)}
                                        className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-green-600 transition-colors"
                                    >
                                        <MapPin className="w-4 h-4" />
                                        Konuma Git
                                    </a>
                                )}
                            </div>
                        );
                    })}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
