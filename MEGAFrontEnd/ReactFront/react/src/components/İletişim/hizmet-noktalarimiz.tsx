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
        id: 2,
        ad: "Bilgi İşlem Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 3,
        ad: "Destek Hizmetleri Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 4,
        ad: "Makina İkmal Bakım Onarım Servisi",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 5,
        ad: "Otobüs İşleri Servisi",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 6,
        ad: "Emlak ve İstimlak Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 7,
        ad: "Numarataj Şefliği",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 8,
        ad: "Fen İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 9,
        ad: "Hukuk İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 10,
        ad: "İmar ve Şehircilik Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 11,
        ad: "İnsan Kaynakları ve Eğitim Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 12,
        ad: "İstihdam Büro",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 13,
        ad: "İşletme ve İştirakler Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 14,
        ad: "Kültür İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 15,
        ad: "Evlendirme Memurluğu",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 16,
        ad: "Mali Hizmetler Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 17,
        ad: "Mezarlıklar Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 18,
        ad: "Özel Kalem Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 19,
        ad: "Park ve Bahçeler Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 20,
        ad: "Plan ve Proje Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 21,
        ad: "Ruhsat ve Denetim Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 22,
        ad: "Sosyal Destek Hizmetleri Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 23,
        ad: "Teftiş Kurulu Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 24,
        ad: "Temizlik İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 25,
        ad: "Veteriner İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 26,
        ad: "Yazı İşleri Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 27,
        ad: "Evrak Kayıt Servisi",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 28,
        ad: "Zabıta Müdürlüğü",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 29,
        ad: "Trafik ve Eğitim Okulu Zabıta Amirliği",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 30,
        ad: "Çarşı ve Seyyar Zabıta Amirliği",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 31,
        ad: "Terminal Zabıta Amirliği",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 32,
        ad: "Mollafenari Zabıta Amirliği",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 33,
        ad: "Beylikbağı Karakolu",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 34,
        ad: "Kamyon Tır Garajı Zabıta Karakolu",
        kategori: "Birimler",
        adres: "Gebze Belediyesi Hizmet Binası",
        konumUrl: "https://goo.gl/maps/example1",
    },
    {
        id: 35,
        ad: "Beylikbağı Bilim ve Sanat Merkezi",
        kategori: "Bilim Sanat Merkezleri",
        adres: "Barış Mahallesi",
        konumUrl: "https://goo.gl/maps/example4",
    },
    {
        id: 36,
        ad: "Arapçeşme Bilim Ve Sanat Merkezi",
        kategori: "Bilim Sanat Merkezleri",
        adres: "Organize Sanayi Bölgesi",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 37,
        ad: "İstasyon Bilim ve Sanat Merkezi",
        kategori: "Bilim Sanat Merkezleri",
        adres: "Organize Sanayi Bölgesi",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 38,
        ad: "Güzide Cumhuriyet Meydanı",
        kategori: "Sosyal Tesisler",
        adres: "Organize Sanayi Bölgesi",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 40,
        ad: "Güzide Kent Meydanı",
        kategori: "Sosyal Tesisler",
        adres: "Organize Sanayi Bölgesi",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 41,
        ad: "Güzide Kent Meydanı",
        kategori: "Sosyal Tesisler",
        adres: "Organize Sanayi Bölgesi",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 42,
        ad: "Atlı Eğitim Merkezi",
        kategori: "Eğitim",
        adres: "Organize Sanayi Bölgesi",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 43,
        ad: "Cumhuriyet Spor Salonu",
        kategori: "Eğitim",
        adres: "Organize Sanayi Bölgesi",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 44,
        ad: "Enderun Çocuk Atölyeleri",
        kategori: "Eğitim",
        adres: "Organize Sanayi Bölgesi",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 45,
        ad: "GESMEK Ademyavuz Mahalle Kursu",
        kategori: "Eğitim",
        adres: "Organize Sanayi Bölgesi",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 46,
        ad: "GESMEK Gaziler Mahalle Kursu",
        kategori: "Eğitim",
        adres: "Organize Sanayi Bölgesi",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 47,
        ad: "GESMEK Merkez",
        kategori: "Eğitim",
        adres: "Organize Sanayi Bölgesi",
        konumUrl: "https://goo.gl/maps/example5",
    },
    {
        id: 48,
        ad: "GESMEK Yenikent Mahalle Kursu",
        kategori: "Eğitim",
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
                        key={nokta.ad}
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
