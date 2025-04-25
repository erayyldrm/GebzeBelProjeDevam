import { useState } from "react";
import { MapPin } from "lucide-react";

const hizmetNoktalari = [
    {
        id: 1,
        ad: "Basın Yayın ve Halkla İlişkiler Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 1,
        ad: "Bilgi İşlem Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 1,
        ad: "Destek Hizmetleri Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 1,
        ad: "Makina İkmal Bakım Onarım Servisi",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 1,
        ad: "Otobüs İşleri Servisi",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 1,
        ad: "Emlak ve İstimlak Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 1,
        ad: "Numarataj Şefliği",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 1,
        ad: "Fen İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 1,
        ad: "Fen İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 1,
        ad: "İmar ve Şehircilik Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 1,
        ad: "İnsan Kaynakları ve Eğitim Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 1,
        ad: "İstihdam Büro",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 1,
        ad: "İşletme ve İştirakler Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 1,
        ad: "Kültür İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 1,
        ad: "Evlendirme Memurluğu",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 1,
        ad: "Mali Hizmetler Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 1,
        ad: "Mezarlıklar Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 2,
        ad: "Özel Kalem Müdürlüğü",
        kategori: "Birimler",
        adres: "Arapçeşme Mahallesi, Gebze",
        konumUrl: "https://goo.gl/maps/example2",
    },
    {
        id: 2,
        ad: "Park ve Bahçeler Müdürlüğü",
        kategori: "Birimler",
        adres: "Arapçeşme Mahallesi, Gebze",
        konumUrl: "https://goo.gl/maps/example2",
    },
    {
        id: 2,
        ad: "Ruhsat ve Denetim Müdürlüğü",
        kategori: "Birimler",
        adres: "Arapçeşme Mahallesi, Gebze",
        konumUrl: "https://goo.gl/maps/example2",
    },
    {
        id: 2,
        ad: "Sosyal Destek Hizmetleri Müdürlüğü",
        kategori: "Birimler",
        adres: "Arapçeşme Mahallesi, Gebze",
        konumUrl: "https://goo.gl/maps/example2",
    },
    {
        id: 2,
        ad: "Teftiş Kurulu Müdürlüğü",
        kategori: "Birimler",
        adres: "Arapçeşme Mahallesi, Gebze",
        konumUrl: "https://goo.gl/maps/example2",
    },
    {
        id: 2,
        ad: "Temizlik İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "Arapçeşme Mahallesi, Gebze",
        konumUrl: "https://goo.gl/maps/example2",
    },
    {
        id: 2,
        ad: "Veteriner İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "Arapçeşme Mahallesi, Gebze",
        konumUrl: "https://goo.gl/maps/example2",
    },
    {
        id: 2,
        ad: "Yazı İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "Arapçeşme Mahallesi, Gebze",
        konumUrl: "https://goo.gl/maps/example2",
    },
    {
        id: 2,
        ad: "Evrak Kayıt Servisi",
        kategori: "Birimler",
        adres: "Arapçeşme Mahallesi, Gebze",
        konumUrl: "https://goo.gl/maps/example2",
    },
    {
        id: 2,
        ad: "Zabıta Müdürlüğü",
        kategori: "Birimler",
        adres: "Arapçeşme Mahallesi, Gebze",
        konumUrl: "https://goo.gl/maps/example2",
    },
    {
        id: 2,
        ad: "Trafik ve Eğitim Okulu Zabıta Amirliği",
        kategori: "Birimşler",
        adres: "Arapçeşme Mahallesi, Gebze",
        konumUrl: "https://goo.gl/maps/example2",
    },
    {
        id: 2,
        ad: "Çarşı ve Seyyar Zabıta Amirliği",
        kategori: "Birimler",
        adres: "Arapçeşme Mahallesi, Gebze",
        konumUrl: "https://goo.gl/maps/example2",
    },
    {
        id: 2,
        ad: "Terminal Zabıta Amirliği",
        kategori: "Birimler",
        adres: "Arapçeşme Mahallesi, Gebze",
        konumUrl: "https://goo.gl/maps/example2",
    },
    {
        id: 2,
        ad: "Mollafenari Zabıta Amirliği",
        kategori: "Birimler",
        adres: "Arapçeşme Mahallesi, Gebze",
        konumUrl: "https://goo.gl/maps/example2",
    },
    {
        id: 2,
        ad: "Beylikbağı Karakolu",
        kategori: "Birimler",
        adres: "Arapçeşme Mahallesi, Gebze",
        konumUrl: "https://goo.gl/maps/example2",
    },
    {
        id: 2,
        ad: "Kamyon Tır Garajı Zabıta Karakolu",
        kategori: "Birimler",
        adres: "Arapçeşme Mahallesi, Gebze",
        konumUrl: "https://goo.gl/maps/example2",
    },
    {
        id: 3,
        ad: "Arapçeşme Bilim Sanat Merkezi",
        kategori: "Sosyal Tesisler",
        adres: "Gebze Mahallesi",
        konumUrl: "https://goo.gl/maps/example3",
    },
    {
        id: 4,
        ad: "Beylikbağı Bilim ve Sanat Merkezi",
        kategori: "Bilim Sanat Merkezleri",
        adres: "Barış Mahallesi",
        konumUrl: "https://goo.gl/maps/example4",
    },
    {
        id: 5,
        ad: "İstasyon Bilim ve Sanat Merkezi",
        kategori: "Diğer",
        adres: "Organize Sanayi Bölgesi",
        konumUrl: "https://goo.gl/maps/example5",
    },
];

const kategoriler = [
    "Birimler",
    "Bilim Sanat Merkezleri",
    "Sosyal Tesisler",
    "Eğitim",
    "Diğer",
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
                        key={kategori}
                        onClick={() => {
                            setSeciliKategori(kategori);
                            setTiklananId(null); // kategori değişince tüm butonlar sıfırlanır
                        }}
                        className={`px-5 py-2 rounded-full text-sm font-semibold shadow transition-all duration-300
                        ${
                            seciliKategori === kategori
                                ? "bg-orange-600 text-blue"
                                : "bg-blue-900 text-white hover:bg-blue-800"
                        }`}
                    >
                        {kategori}
                    </button>
                ))}
            </div>

            {/* Hizmet Noktaları Listesi */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtrelenmisNoktalar.map((nokta) => (
                    <div
                        key={nokta.id}
                        className="border rounded-2xl p-5 shadow-md hover:shadow-xl transition-all bg-white"
                    >
                        <h2 className="text-lg font-bold mb-2 text-gray-800">{nokta.ad}</h2>
                        <p className="text-sm text-gray-600 mb-5">{nokta.adres}</p>

                        {tiklananId === nokta.id ? (
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-green-700 text-white transition-colors">
                                <MapPin className="w-4 h-4" />
                                Yönlendiriliyor...
                            </div>
                        ) : (
                            <a
                                href={nokta.konumUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setTiklananId(nokta.id)}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-red-600 text-white hover:bg-green-600 transition-colors"
                            >
                                <MapPin className="w-4 h-4" />
                                Konuma Git
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
