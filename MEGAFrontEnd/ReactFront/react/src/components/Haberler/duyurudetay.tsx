import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// İkonlar
import { TreePine, Users, Heart, Music, Car, Leaf, Bell, BookOpen, GraduationCap, Dumbbell, Building2, Stethoscope } from "lucide-react";

// Son Haberler için örnek veri (API'den çekilebilir)
const mockSonHaberler = [
    {
        id: 1,
        baslik: "Gebze'de Yeni Park Alanı Hizmete Açıldı",
        kategori: "Çevre",
        gorsel: "/images/Haberler/habergörselleri/egitimvegenclik/egitim1.jpg",
    },
    {
        id: 2,
        baslik: "Spor Kompleksi Açılışı",
        kategori: "Sosyal Hizmetler",
        gorsel: "/images/Haberler/habergörselleri/egitimvegenclik/egitim1-2.jpg",
    },
    {
        id: 3,
        baslik: "Çevre Temizlik Kampanyası",
        kategori: "Çevre",
        gorsel: "/images/Haberler/habergörselleri/cevretemizligeridönüsüm/cevre1.jpg",
    },
    {
        id: 4,
        baslik: "Gençlik Festivali Başladı",
        kategori: "Kültür",
        gorsel: "/images/Haberler/habergörselleri/egitimvegenclik/egitim2.jpg",
    },
    {
        id: 5,
        baslik: "Yeni Kütüphane Açıldı",
        kategori: "Kültür",
        gorsel: "/images/Haberler/habergörselleri/sosyalyardımvehizmetler/sosyal1.jpg",
    },
    {
        id: 6,
        baslik: "Gebze'de Sağlık Semineri Düzenlendi",
        kategori: "Toplantı",
        gorsel: "/images/Haberler/habergörselleri/sosyalyardımvehizmetler/sosyal1.jpg",
    },
];

// Başlığa uygun ve farklı ikon seçici
const getHaberIcon = (baslik: string, kategori: string) => {
    const b = baslik.toLowerCase();
    if (b.includes('park') || b.includes('yeşil')) return TreePine;
    if (b.includes('temizlik') || b.includes('çevre')) return Leaf;
    if (b.includes('meclis') || b.includes('toplantı') || kategori === "Toplantı") return Users;
    if (b.includes('sosyal') || b.includes('yardım')) return Heart;
    if (b.includes('kültür') || b.includes('etkinlik') || b.includes('konser')) return Music;
    if (b.includes('yol') || b.includes('ulaşım') || b.includes('asfalt')) return Car;
    if (b.includes('kütüphane') || b.includes('kitap')) return BookOpen;
    if (b.includes('gençlik') || b.includes('festival')) return GraduationCap;
    if (b.includes('spor') || b.includes('turnuva') || b.includes('kompleks')) return Dumbbell;
    if (b.includes('sağlık') || b.includes('hastane') || b.includes('semineri')) return Stethoscope;
    if (b.includes('belediye') || b.includes('bina')) return Building2;
    return Bell;
};

// SonHaberlerSlider: Alt alta 6 haber ve geçiş süresi uzatıldı (4000ms)
const SonHaberlerSlider = ({ haberler, navigate }: { haberler: typeof mockSonHaberler, navigate: any }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Yukarıdan aşağıya kayma için bir önceki habere geç
            setCurrent((prev) => (prev === 0 ? haberler.length - 1 : prev - 1));
        }, 4000); // geçiş süresi uzatıldı
        return () => clearInterval(interval);
    }, [haberler.length]);

    // 6'lı pencere, sonsuz döngü
    const getVisibleHaberler = () => {
        const visible = [];
        for (let i = 0; i < 6; i++) {
            // current'tan geriye doğru sırala, sonsuz döngü için mod al
            visible.push(haberler[(current + i) % haberler.length]);
        }
        return visible;
    };

    const visibleHaberler = getVisibleHaberler();

    return (
        <div className="relative w-full flex flex-col items-center min-h-[520px]">
            <h2 className="text-xl font-bold text-gray-800 mb-4 mt-2">Son Duyurular</h2>
            <div className="flex-1 flex flex-col gap-2 w-full transition-all duration-500 ease-in-out">
                {visibleHaberler.map((haber, idx) => {
                    const IconComponent = getHaberIcon(haber.baslik, haber.kategori);
                    return (
                        <div
                            key={haber.id + "-" + current}
                            className="flex items-center w-full bg-white border border-gray-200 rounded-lg p-2 shadow-sm transition-all duration-500 ease-in-out"
                            style={{
                                opacity: 1,
                                transform: `translateY(0px)`,
                                marginTop: idx === 0 ? "0.25rem" : "0",
                            }}
                        >
                            {/* Resim yerine ikon, biraz küçültüldü */}
                            <IconComponent className="w-10 h-10 text-blue-600 mr-3 flex-shrink-0" />
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
                    );
                })}
            </div>
        </div>
    );
};

// Detay kartı için örnek galeri görselleri
const detayGorseller = [
    "/images/Haberler/habergörselleri/egitimvegenclik/egitim1.jpg",
    "/images/Haberler/habergörselleri/egitimvegenclik/egitim1-2.jpg",
    "/images/Haberler/habergörselleri/cevretemizligeridönüsüm/cevre1.jpg",
    "/images/Haberler/habergörselleri/egitimvegenclik/egitim2.jpg",
    "/images/Haberler/habergörselleri/sosyalyardımvehizmetler/sosyal1.jpg",
    "/images/Haberler/habergörselleri/sosyalyardımvehizmetler/sosyal1.jpg",
];

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

    // Galeri slider state
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Seçilen resmi ortaya kaydırmak için
    const handleThumbClick = (idx: number) => {
        setSelectedIndex(idx);
    };

    // Sol/sağ oklar ile geçiş
    const goPrev = () => {
        setSelectedIndex((prev) => (prev === 0 ? detayGorseller.length - 1 : prev - 1));
    };
    const goNext = () => {
        setSelectedIndex((prev) => (prev === detayGorseller.length - 1 ? 0 : prev + 1));
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
                        {/* Görsel slider */}
                        <div className="w-full flex flex-col items-center mb-6">
                            <div className="relative w-full flex items-center justify-center">
                                <button onClick={goPrev} className="absolute left-0 p-2 bg-white/80 rounded-full shadow hover:bg-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <img
                                    src={detayGorseller[selectedIndex]}
                                    alt="Haber görseli"
                                    className="w-full max-h-[500px] object-cover rounded-lg shadow-md"
                                    style={{ maxWidth: 900, aspectRatio: "3/2" }}
                                />
                                <button onClick={goNext} className="absolute right-0 p-2 bg-white/80 rounded-full shadow hover:bg-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                            {/* Alt galeri: küçük resimler, genişlik üstteki resimle aynı ve karta sığıyor */}
                            <div className="flex justify-center mt-4 w-full">
                                <div
                                    className="flex gap-2 w-full"
                                    style={{
                                        maxWidth: 900,
                                    }}
                                >
                                    {detayGorseller.map((gorsel, idx) => (
                                        <button
                                            key={gorsel}
                                            onClick={() => handleThumbClick(idx)}
                                            className={`border-2 rounded-lg transition-all duration-200 flex-1`}
                                            style={{
                                                background: "none",
                                                border: selectedIndex === idx ? "2px solid #2563eb" : "2px solid transparent",
                                                boxShadow: selectedIndex === idx ? "0 0 0 2px #2563eb" : undefined,
                                                padding: 0,
                                            }}
                                        >
                                            <img
                                                src={gorsel}
                                                alt={`Galeri ${idx + 1}`}
                                                className={`object-cover rounded-lg ${selectedIndex === idx ? "opacity-100" : "opacity-70"}`}
                                                style={{
                                                    width: "100%",
                                                    height: 80,
                                                    aspectRatio: "3/2",
                                                    maxWidth: "100%",
                                                }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-700 leading-relaxed text-justify">
                            {haber.icerik.map((paragraf, index) => (
                                <p key={index} className="mb-0">{paragraf}</p>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Sağ: Son Haberler Sonsuz Slider */}
                <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-8">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 pt-6 flex flex-col items-center">
                        <SonHaberlerSlider haberler={mockSonHaberler} navigate={navigate} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HaberDetay;
