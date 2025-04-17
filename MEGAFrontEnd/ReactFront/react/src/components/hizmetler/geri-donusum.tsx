import React from "react";

const wasteTypes = [
    {
        icon: "🧃",
        title: "Ambalaj Atıkları",
        description: "Cam, plastik, metal ve kâğıt ambalaj atıkları.",
        image: "/images/hizmetler/donusum/ambalaj.jpg"
    },
    {
        icon: "🔋",
        title: "Atık Piller Ve Akümülülaörler",
        description: "Kullanılmış pillerin çevreye zarar vermeden toplanması.",
        image: "/images/hizmetler/donusum/pil.jpg"
    },
    {
        icon: "📱",
        title: "Bitkisel Ve Atık Yağlar",
        description: "Kullanılmış yağların uygun şekilde bertaraf edilmesi.",
        image: "/images/hizmetler/donusum/"
    },
    {
        icon: "📱",
        title: "Elektronik Atıklar",
        description: "Kullanılmış yağların uygun şekilde bertaraf edilmesi.",
        image: "/images/hizmetler/donusum/elektronik.jpg"
    },
    {
        icon: "💊",
        title: "Evsel Atıklar",
        description: "Tarihi geçmiş ya da kullanılmayan ilaçlar.",
        image: "/images/hizmetler/donusum/evsel.jpeg"
    },
    {
        icon: "👞",
        title: "İri Hacimli Atıklar",
        description: "Kullanılmayan giysi, ayakkabı ve tekstil ürünleri.",
        image: "/images/hizmetler/donusum/irihacimli.jpeg"
    },
    {
        icon: "🖨️",
        title: "Moloz Atıkları",
        description: "Boş kartuş ve tonerlerin geri dönüşümü.",
        image: "/images/hizmetler/donusum/moloz.jpg"
    },
    {
        icon: "🪑",
        title:"Sıfır Atık Nedir ?",
        description: "Eskimiş mobilya ve büyük hacimli atıklar.",
        image: "/images/hizmetler/donusum/sifiratik.jpg"
    },
    {
        icon: "👞",
        title: "Tekstil Atıkları",
        description: "Kimyasal içerikli ve özel bertaraf gerektiren atıklar.",
        image: "/images/hizmetler/donusum/tekstil.jpg"
    }
];

const GeriDonusumPage = () => {
    const [activeButtons, setActiveButtons] = React.useState<Record<number, string>>({});

    const handleButtonClick = (cardIndex: number, buttonType: string) => {
        setActiveButtons({
            [cardIndex]: buttonType
        });
    };

    return (
        <div
            className="min-h-screen bg-green-50 text-gray-800 font-sans"
            style={{
                margin: '0 auto',
                maxWidth: 'calc(100% - 120px)',
                paddingLeft: '40px',
                paddingRight: '20px',
            }}
        >
            {/* Modern Header */}
            <header className="bg-green-100 px-6 py-10 rounded-b-2xl shadow-inner">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="text-6xl sm:text-7xl">♻️</div>
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-green-900 mb-2">
                            Geri Dönüşüm Noktaları
                        </h1>
                        <div className="bg-white border-l-4 border-green-600 p-4 rounded shadow text-gray-700 max-w-2xl">
                            Atıkların doğru yere atılması, temiz bir gelecek için atılmış büyük bir adımdır. Buradan hangi atığı nereye bırakabileceğinizi öğrenebilirsiniz.
                        </div>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="py-10 max-w-7xl mx-auto">
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {wasteTypes.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition flex flex-col justify-between h-full"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 object-cover rounded-xl mb-4"
                            />
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold mb-2">
                                    {item.icon} {item.title}
                                </h2>
                                <p className="text-sm text-gray-700 mb-4">{item.description}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between gap-2 mb-4">
                                <button
                                    onClick={() => handleButtonClick(index, "detayli")}
                                    style={
                                        activeButtons[index] === "detayli"
                                            ? { backgroundColor: "#022842", color: "#FFFFFF" }
                                            : { backgroundColor: "#FFFFFF", color: "#000000" }
                                    }
                                    className="px-4 py-2 border border-green-600 rounded hover:bg-gray-200 transition text-sm w-full"
                                >
                                    Detaylı Bilgi
                                </button>
                                <button
                                    onClick={() => handleButtonClick(index, "konum")}
                                    style={
                                        activeButtons[index] === "konum"
                                            ? { backgroundColor: "#022842", color: "#FFFFFF" }
                                            : { backgroundColor: "#FFFFFF", color: "#000000" }
                                    }
                                    className="px-4 py-2 border border-green-600 rounded hover:bg-gray-200 transition text-sm w-full"
                                >
                                    Konum
                                </button>
                            </div>
                            <div className="text-xs text-gray-500 border-t pt-2">
                                İletişim: 444 41 41 | info@gebze.bel.tr
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GeriDonusumPage;
