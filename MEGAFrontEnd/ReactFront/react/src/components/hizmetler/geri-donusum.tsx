import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface GeriDonusum {
    id: number;
    baslik: string;
    imgUrl: string;
    metin: string;
    telefon: string;
    mail: string;
    buttonDetay: string;
    buttonKonum: string;
    icon: string;
}

const GeriDonusumPage = () => {
    const [activeButtons, setActiveButtons] = useState<Record<number, string>>({});
    const [geriDonusumler, setGeriDonusumler] = useState<GeriDonusum[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    // geri-donusum.tsx içinde
    useEffect(() => {
        const fetchGeriDonusum = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:8080/api/geri-donusum', {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });

                console.log('API Yanıtı:', response.data); // Yanıtı kontrol et

                if (Array.isArray(response.data)) {
                    setGeriDonusumler(response.data);
                } else {
                    throw new Error('API yanıtı geçersiz format');
                }
            } catch (err: any) {
                console.error("API Hatası:", err.message);
                setError(`Veri yüklenirken hata: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchGeriDonusum();
    }, []);

    const handleActionClick = (cardIndex: number, buttonType: string, detailPage: string, mapLink: string) => {
        setActiveButtons({ [cardIndex]: buttonType });

        if (buttonType === "detayli") {
            navigate(`/${detailPage}`);
        } else if (buttonType === "konum") {
            window.open(mapLink, "_blank");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-green-50 flex items-center justify-center">
                <div className="text-2xl text-green-800">Yükleniyor...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-green-50 flex items-center justify-center">
                <div className="text-2xl text-red-600">{error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-green-50 text-gray-800 font-sans mt-3" style={{
            margin: '0 auto',
            maxWidth: 'calc(100% - 120px)',
            paddingLeft: '40px',
            paddingRight: '20px',
        }}>
            <header className="bg-green-100 px-6 py-10 rounded-b-2xl shadow-inner">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="text-6xl sm:text-7xl">♻️</div>
                    <div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-2">
                            Geri Dönüşüm Noktaları
                        </h1>
                        <div className="bg-white border-l-4 border-green-600 p-4 rounded shadow text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl">
                            Atıkların doğru yere atılması, temiz bir gelecek için atılmış büyük bir adımdır. Buradan hangi atığı nereye bırakabileceğinizi öğrenebilirsiniz.
                        </div>
                    </div>
                </div>
            </header>

            <div className="py-10 max-w-7xl mx-auto">
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {geriDonusumler.map((item, index) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition flex flex-col justify-between h-full"
                            style={{
                                minHeight: '450px',
                                width: '100%',        // Tam genişlik
                                maxWidth: '400px',    // Maksimum genişlik
                                margin: '0 auto'      // Yatayda ortalama
                            }}
                        >

                            <img
                                src={item.imgUrl}
                                alt={item.baslik}
                                className="w-full h-48  object-center rounded-xl mb-4" // h-32'yi h-48 olarak değiştirdik
                                style={{
                                    aspectRatio: '16/9',  // En boy oranını sabitle
                                    minHeight: '200px',   // Minimum yükseklik
                                    maxHeight: '200px'    // Maximum yükseklik
                                }}
                            />
                            <div className="flex-1">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                    {item.icon} {item.baslik}
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4">{item.metin}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => handleActionClick(index, "detayli", item.buttonDetay, item.buttonKonum)}
                                    style={
                                        activeButtons[index] === "detayli"
                                            ? { backgroundColor: "#022842", color: "#FFFFFF" }
                                            : { backgroundColor: "#FFFFFF", color: "#000000" }
                                    }
                                    className="px-4 py-2 border border-green-600 rounded hover:bg-gray-200 transition text-xs sm:text-sm flex items-center justify-center"
                                >
                                    <span>ℹ️ Hakkında</span>
                                </button>
                                <button
                                    onClick={() => handleActionClick(index, "konum", item.buttonDetay, item.buttonKonum)}
                                    style={
                                        activeButtons[index] === "konum"
                                            ? { backgroundColor: "#022842", color: "#FFFFFF" }
                                            : { backgroundColor: "#FFFFFF", color: "#000000" }
                                    }
                                    className="px-4 py-2 border border-green-600 rounded hover:bg-gray-200 transition text-xs sm:text-sm flex items-center justify-center"
                                >
                                    <span>🚩 Konum</span>
                                </button>
                            </div>
                            <div className="text-xs text-gray-500 border-t pt-2 text-center mt-4">
                                📞 {item.telefon}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;📩 {item.mail}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GeriDonusumPage;