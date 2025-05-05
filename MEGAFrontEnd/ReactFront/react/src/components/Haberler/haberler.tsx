import React, { useState } from "react";
import Slider from "react-slick";


interface NewsItem {
    id: number;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
    category: string;
}

const newsData: NewsItem[] = [
    {
        id: 1,
        title: "Yeni Kültür Merkezi Açıldı",
        date: "01 Mayıs 2025",
        description:
            "Yeni kültür merkezi, Kocaeli halkı için sosyal ve sanatsal faaliyetlerin merkezi olacak şekilde açıldı.",
        imageUrl: "https://via.placeholder.com/800x400?text=Kultur+Merkezi",
        category: "Kültür",
    },
    {
        id: 2,
        title: "Çevre Temizlik Kampanyası Başladı",
        date: "28 Nisan 2025",
        description:
            "Belediye, vatandaşlarla birlikte geniş çaplı bir çevre temizliği kampanyasına başladı.",
        imageUrl: "https://via.placeholder.com/800x400?text=Temizlik+Kampanyası",
        category: "Çevre",
    },
    {
        id: 3,
        title: "Gençlik Festivali Yoğun İlgi Gördü",
        date: "22 Nisan 2025",
        description:
            "Gençlik festivali, konserler, atölyeler ve spor etkinlikleriyle dolu dolu geçti.",
        imageUrl: "https://via.placeholder.com/800x400?text=Genclik+Festivali",
        category: "Gençlik",
    },
    {
        id: 4,
        title: "Sanat Sokağı Etkinliği",
        date: "20 Nisan 2025",
        description:
            "Yerel sanatçıların katıldığı açık hava sanat etkinliği büyük beğeni topladı.",
        imageUrl: "https://via.placeholder.com/800x400?text=Sanat+Etkinligi",
        category: "Kültür",
    },
];

const categories = ["Tümü", "Kültür", "Çevre", "Gençlik"];

const NewsPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("Tümü");
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const filteredNews =
        selectedCategory === "Tümü"
            ? newsData
            : newsData.filter((item) => item.category === selectedCategory);

    const sliderSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dotsClass: "slick-dots custom-dots",
        customPaging: () => (
            <div className="custom-dot w-3 h-3 bg-white opacity-50 rounded-full mx-1 transition-opacity duration-300"></div>
        ),
    };

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen font-sans">
            {/* Header */}
            <header className="bg-blue-600 text-white py-6 shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-3xl font-bold">Şehrimizden Haberler</h1>
                    <p className="mt-1 text-blue-100">Güncel gelişmeler ve etkinlikler</p>
                </div>
            </header>

            {/* Slider */}
            <div className="max-w-5xl mx-auto pt-8 px-4 relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                    <Slider {...sliderSettings}>
                        {newsData.map((news) => (
                            <div key={news.id}>
                                <div className="relative">
                                    <img
                                        src={news.imageUrl}
                                        alt={news.title}
                                        className="w-full h-96 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                                    <div className="absolute bottom-0 left-0 p-8 text-white">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-3">
                      {news.category}
                    </span>
                                        <h2 className="text-3xl font-bold text-white mb-2">{news.title}</h2>
                                        <p className="text-sm text-gray-200 mb-2">{news.date}</p>
                                        <p className="text-gray-100 max-w-2xl">{news.description}</p>
                                        <button className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition duration-300 shadow-lg">
                                            Devamını Oku
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Kategoriler */}
            <div className="max-w-6xl mx-auto px-4 mt-16">
                <div className="flex flex-wrap gap-4 justify-center">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-3 rounded-full border-2 font-medium text-sm transition-all duration-300 transform ${
                                selectedCategory === cat
                                    ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-blue-300"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Haber Kartları */}
            <div className="max-w-6xl mx-auto mt-12 px-4 pb-20">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-200 pb-2">
                    {selectedCategory === "Tümü" ? "Tüm Haberler" : `${selectedCategory} Haberleri`}
                </h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                    {filteredNews.map((news) => (
                        <div
                            key={news.id}
                            className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2"
                            onMouseEnter={() => setHoveredCard(news.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={news.imageUrl}
                                    alt={news.title}
                                    className={`h-56 w-full object-cover transition-transform duration-700 ${
                                        hoveredCard === news.id ? "scale-110" : "scale-100"
                                    }`}
                                />
                                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {news.category}
                  </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-blue-600 font-semibold mb-1">{news.date}</p>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                                    {news.title}
                                </h3>
                                <p className="text-gray-600 line-clamp-3">{news.description}</p>
                                <button className="mt-5 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition group">
                                    Devamını oku
                                    <svg
                                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p>© 2025 Şehir Haberleri Portalı. Tüm hakları saklıdır.</p>
                    <div className="mt-4 flex justify-center gap-4">
                        <button className="text-gray-300 hover:text-white transition">Hakkımızda</button>
                        <button className="text-gray-300 hover:text-white transition">İletişim</button>
                        <button className="text-gray-300 hover:text-white transition">Gizlilik Politikası</button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NewsPage;