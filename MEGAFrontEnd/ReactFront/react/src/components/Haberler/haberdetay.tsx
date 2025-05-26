
import { useParams, useNavigate } from "react-router-dom";

const HaberDetay = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Haberin id'si ile backend'den veri çekilebilir

    // Mock veri örneği
    const haber = {
        id,
        baslik: "Gebze’de Yeni Park Alanı Hizmete Açıldı",
        tarih: "26 Mayıs 2025",
        kategori: "Çevre ve Şehircilik",
        gorsel: "https://via.placeholder.com/1200x600.png?text=Haber+Görseli",
        icerik: [
            "Gebze Belediyesi, vatandaşların sosyal alan ihtiyacını karşılamak amacıyla yeni bir park alanını hizmete açtı.",
            "Parkta çocuk oyun alanları, yürüyüş yolları, spor aletleri ve yeşil alanlar bulunuyor.",
            "Belediye Başkanı yaptığı açıklamada, 'Gebze’yi daha yaşanabilir bir şehir haline getirmek için çalışmalarımıza devam ediyoruz.' dedi."
        ]
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            {/* Geri Dön */}
            <button
                onClick={() => navigate(-1)}
                className="mb-4 text-blue-600 hover:underline"
            >
                ← Geri Dön
            </button>

            {/* Başlık */}
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{haber.baslik}</h1>

            {/* Tarih & Kategori */}
            <div className="text-sm text-gray-500 mb-6 flex flex-wrap gap-4">
                <span>📅 {haber.tarih}</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
          {haber.kategori}
        </span>
            </div>

            {/* Öne çıkan görsel */}
            <img
                src={haber.gorsel}
                alt="Haber görseli"
                className="w-full h-auto rounded-lg shadow-md mb-6"
            />

            {/* İçerik */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                {haber.icerik.map((paragraf, index) => (
                    <p key={index}>{paragraf}</p>
                ))}
            </div>
        </div>
    );
};

export default HaberDetay;
