import { useParams, useNavigate } from "react-router-dom";


// Son Haberler için örnek veri (API'den çekilebilir)
const mockSonHaberler = [
    {
        id: 1,
        baslik: "Gebze'de Yeni Park Alanı Hizmete Açıldı",
        gorsel: "/images/Haberler/habergörselleri/egitimvegenclik/egitim1.jpg",
    },
    {
        id: 2,
        baslik: "Spor Kompleksi Açılışı",
        gorsel: "/images/Haberler/habergörselleri/egitimvegenclik/egitim1-2.jpg",
    },
    {
        id: 3,
        baslik: "Çevre Temizlik Kampanyası",
        gorsel: "/images/Haberler/habergörselleri/cevretemizligeridönüsüm/cevre1.jpg",
    },
    {
        id: 4,
        baslik: "Gençlik Festivali Başladı",
        gorsel: "/images/Haberler/habergörselleri/egitimvegenclik/egitim2.jpg",
    },
    {
        id: 5,
        baslik: "Yeni Kütüphane Açıldı",
        gorsel: "/images/Haberler/habergörselleri/sosyalyardımvehizmetler/sosyal1.jpg",
    },
];

// Alt galeri için örnek 4 haber resmi
const galleryHaberler = [
    {
        id: 101,
        baslik: "Çocuk Şenliği",
        gorsel: "/images/Haberler/habergörselleri/egitimvegenclik/egitim3.jpg",
    },
    {
        id: 102,
        baslik: "Spor Turnuvası",
        gorsel: "/images/Haberler/habergörselleri/spor/spor2.jpg",
    },
    {
        id: 103,
        baslik: "Çevre Günü Etkinliği",
        gorsel: "/images/Haberler/habergörselleri/cevretemizligeridönüsüm/cevre2.jpg",
    },
    {
        id: 104,
        baslik: "Kültür Sanat Gecesi",
        gorsel: "/images/Haberler/habergörselleri/kultur/kultur1.jpg",
    },
];

const SonHaberlerSlider = ({ haberler, navigate }: { haberler: typeof mockSonHaberler, navigate: any }) => {
    // Sabit 5 haber göster, scroll veya otomatik geçiş yok
    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex-1 flex flex-col gap-2 w-full">
                {haberler.slice(0, 5).map((haber) => (
                    <div key={haber.id} className="flex items-center w-full bg-transparent rounded-lg p-2">
                        <img
                            src={haber.gorsel}
                            alt={haber.baslik}
                            className="w-16 h-16 object-cover rounded-lg mr-3 shadow" // boyut büyütüldü
                        />
                        <div className="flex flex-col flex-1">
                            <span className="text-gray-700 font-medium text-sm line-clamp-2">{haber.baslik}</span>
                            <button
                                onClick={() => navigate(`/haberdetay/${haber.id}`)}
                                className="flex items-center text-blue-600 hover:underline text-xs mt-1 self-start"
                            >
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <circle cx="12" cy="16" r="1" />
                                </svg>
                                Detaylı Bilgi
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const HaberDetay = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Mock veri örneği
    const haber = {
        id,
        baslik: "Gebze'de Yeni Park Alanı Hizmete Açıldı",
        tarih: "26 Mayıs 2025",
        kategori: "Çevre ve Şehircilik",
        gorsel: "/images/Haberler/habergörselleri/egitimvegenclik/egitim1.jpg",
        icerik: [
            "Gebze Belediyesi, vatandaşların sosyal alan ihtiyacını karşılamak amacıyla yeni bir park alanını hizmete açtı.",
            "Parkta çocuk oyun alanları, yürüyüş yolları, spor aletleri ve yeşil alanlar bulunuyor.",
            "Belediye Başkanı yaptığı açıklamada, 'Gebze'yi daha yaşanabilir bir şehir haline getirmek için çalışmalarımıza devam ediyoruz.' dedi."
        ]
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-start justify-center py-8">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
                {/* Orta: Detay Kartı - sola doğru genişletildi */}
                <div className="flex-1 max-w-5xl mx-auto"> {/* Bir birim kısaltıldı */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto min-h-[900px]"> {/* min-h artırıldı */}
                        <button
                            onClick={() => navigate(-1)}
                            className="mb-4 text-blue-600 hover:underline"
                        >
                            ← Geri Dön
                        </button>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{haber.baslik}</h1>
                        <div className="text-sm text-gray-500 mb-6 flex flex-wrap gap-4">
                            <span>📅 {haber.tarih}</span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                {haber.kategori}
                            </span>
                        </div>
                        <img
                            src={haber.gorsel}
                            alt="Haber görseli"
                            className="w-full h-auto rounded-lg shadow-md mb-6"
                        />
                        <div className="text-gray-700 leading-relaxed text-justify">
                            {haber.icerik.map((paragraf, index) => (
                                <p key={index} className="mb-0">{paragraf}</p>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Sağ: Son Haberler Sonsuz Slider + Alt Galeri Ayrı Kartta */}
                <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-8">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 pt-16 flex flex-col items-center"> {/* pt-16 ile slider biraz daha aşağıya uzatıldı */}
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Son Haberler</h2>
                        <SonHaberlerSlider haberler={mockSonHaberler} navigate={navigate} />
                    </div>
                    {/* Alt Galeri Ayrı Kart */}
                    <div className="bg-white rounded-2xl shadow-2xl p-4 flex flex-col items-center">
                        <div className="grid grid-cols-2 gap-3 w-full">
                            {galleryHaberler.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-gray-100 rounded-lg shadow p-2 flex flex-col items-center cursor-pointer hover:shadow-md transition"
                                    onClick={() => navigate(`/haberdetay/${item.id}`)}
                                >
                                    <img
                                        src={item.gorsel}
                                        alt={item.baslik}
                                        className="w-28 h-20 object-cover rounded mb-1" // boyut büyütüldü
                                    />
                                    <span className="text-xs text-gray-700 text-center font-medium line-clamp-2">{item.baslik}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HaberDetay;
