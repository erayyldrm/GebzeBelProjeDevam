import { useRef, useEffect } from "react";
import { Clock } from "lucide-react";

export default function BlogLayout() {
    const heroPost = {
        id: 1,
        image: "/images/Haberler/habergörselleri/cevretemizligeridönüsüm/cevre1.jpg",
        category: "GERİ DÖNÜŞÜM",
        categoryClass: "bg-pink-500",
        title: "Bosmogenic an designed for narita iourism in moon",
        date: "March 29, 2022",
    };

    const featuredArticles = [
        {
            id: 1,
            image: "/images/Haberler/habergörselleri/egitimvegenclik/egitim1.jpg",
            category: "EĞİTİM",
            categoryClass: "bg-green-600",
            title: "Dui fames tempora maiores dicta anim? Vel curae eaque ab eaque pharetra blandit",
            date: "March 29, 2022",
        },
        {
            id: 2,
            image: "/images/Haberler/habergörselleri/projelervealtyapicalismalari/calismalar.jpg",
            category: "PROJELER",
            categoryClass: "bg-yellow-500",
            title: "Virtual reality is here!",
        },
        {
            id: 3,
            image: "/images/Haberler/habergörselleri/sosyalyardımvehizmetler/sosyal1.jpg",
            category: "SOSYAL YARDIM",
            categoryClass: "bg-blue-600",
            title: "Running on the field.",
            author: "Unknown Author",
            authorImage: "/images/default-author.png",
            date: "N/A",
        }
    ];

    // Slider data
    const slides = [
        {
            id: 1,
            image: "/images/Haberler/habergörselleri/projelervealtyapicalismalari/calismalar1-1.webp",
            category: "Güncel",
            title: "Belediyemiz Yeni Projeleri Tanıttı",
            date: "14 Mayıs 2025",
        },
        {
            id: 2,
            image: "/images/Haberler/habergörselleri/sosyalyardımvehizmetler/sosyal2.jpg",
            category: "Duyuru",
            title: "Yaz Şenliği Etkinlikleri Başlıyor",
            date: "10 Mayıs 2025",
        },
        {
            id: 3,
            image: "/images/Haberler/habergörselleri/egitimvegenclik/egitim1-2.jpg",
            category: "Etkinlik",
            title: "Başkanımızdan Gençlere Özel Mesaj",
            date: "8 Mayıs 2025",
        },
        {
            id: 4,
            image: "/images/Haberler/habergörselleri/sosyalyardımvehizmetler/sosyal1-2.jpeg",
            category: "Haber",
            title: "Başkanımızdan Sosyal Yardım Destekleri",
            date: "5 Mayıs 2025",
        },
    ];

    // Slider refs and logic
    const sliderRef = useRef<HTMLDivElement>(null);
    const slideWidth = 380 + 16; // Card width + gap (daha dar kartlar)
    const visibleSlides = 3; // Her seferde 3 kart göster
    const scrollAmount = slideWidth * visibleSlides; // visibleSlides değerini kullan

    // Scroll kontrolü
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        // Ortaya git (görünür kartlar tam görünsün diye ayarlandı)
        const initialScroll = Math.floor(slides.length / 2) * slideWidth; // 2 kart gösterimi için ayarlandı
        slider.scrollLeft = initialScroll;

        const handleScroll = () => {
            if (!slider) return;

            if (slider.scrollLeft <= 0) {
                slider.scrollLeft = slides.length * slideWidth;
            } else if (slider.scrollLeft >= slideWidth * slides.length * 2) {
                slider.scrollLeft = slides.length * slideWidth;
            }
        };

        slider.addEventListener("scroll", handleScroll);
        return () => slider.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollByAmount = (amount: number) => {
        if (!sliderRef.current) return;

        // Calculate new scroll position
        const slider = sliderRef.current;
        const newScrollLeft = slider.scrollLeft + amount;

        // Check if we need to loop
        if (newScrollLeft < 0) {
            // If scrolling left beyond the beginning, jump to the end
            slider.scrollLeft = slideWidth * slides.length * 2;
            // Then smoothly scroll to show the transition
            setTimeout(() => {
                slider.scrollBy({ left: amount, behavior: "smooth" });
            }, 50);
        } else if (newScrollLeft > slideWidth * slides.length * 3) {
            // If scrolling right beyond the end, jump to the beginning
            slider.scrollLeft = slideWidth * slides.length;
            // Then smoothly scroll to show the transition
            setTimeout(() => {
                slider.scrollBy({ left: amount, behavior: "smooth" });
            }, 50);
        } else {
            // Normal scroll within bounds
            slider.scrollBy({ left: amount, behavior: "smooth" });
        }
    };

    const renderHeroCard = (article: { id: number; image: string; category: string; categoryClass: string; title: string; author?: string; authorImage?: string; date?: string;  }) => (
        <div className="relative overflow-hidden rounded h-full w-full">
            <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className={`inline-block px-4 py-1 text-sm font-bold text-white rounded mb-3 ${article.categoryClass}`}>
                    {article.category}
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                    <a href="#" className="hover:underline">{article.title}</a>
                </h2>
                <div className="flex items-center text-white text-sm">
                    <div className="flex items-center mr-4">
                        <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{article.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderMainArticle = (article: { id: number; image: string; category: string; categoryClass: string; title: string; author?: string; authorImage?: string; date?: string;  }) => (
        <div className="relative overflow-hidden rounded h-full w-full">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className={`inline-block px-4 py-1 text-sm font-bold text-white rounded mb-3 ${article.categoryClass}`}>
                    {article.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                    <a href="#" className="hover:underline">{article.title}</a>
                </h3>
                <div className="flex items-center text-white text-sm">
                    <div className="flex items-center mr-4">
                        <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{article.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSmallArticle = (article: { id: number; image: string; category: string; categoryClass: string; title: string; author?: string; authorImage?: string; date?: string;  }, colorClass: string) => (
        <div className="relative overflow-hidden rounded h-full w-full">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <h3 className="text-xl font-bold text-white mb-2">
                    <a href="#" className="hover:underline">{article.title}</a>
                </h3>
                <div className="flex items-center justify-between">
                    <div className={`inline-block px-4 py-1 text-sm font-bold text-white rounded ${colorClass}`}>
                        {article.category}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            {/* Main Blog Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                {/* Sol büyük hero post */}
                <div className="h-100 flex gap-6">
                    {renderHeroCard(heroPost)}
                </div>

                {/* Sağ taraf */}
                <div className="grid grid-rows-[1fr_auto] gap-6">
                    {/* Sağ üstte kare */}
                    <div className="aspect-w-1 aspect-h-11">
                        {renderMainArticle(featuredArticles[0])}
                    </div>

                    {/* Sağ altta iki küçük kutu */}
                    <div className="grid grid-cols-2 gap-6 h-45">
                        <div>
                            {renderSmallArticle(featuredArticles[1], "bg-yellow-500")}
                        </div>
                        <div>
                            {renderSmallArticle(featuredArticles[2], "bg-blue-600")}
                        </div>
                    </div>
                </div>
            </div>
            {/* News Slider Section - Tam genişlik */}
            <div className="my-8">
                <div className="flex items-center mb-3">
                    <h2 className="text-xl font-bold mr-4">Son Haberler</h2>
                    {/* Navigation Buttons - Left side, horizontally aligned with heading */}
                    <div className="flex items-center gap-2">
                        {/* Sol Ok - 2 kart kaydır */}
                        <button
                            onClick={() => scrollByAmount(-scrollAmount)}
                            className="size-10 bg-white ring-1 ring-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>

                        {/* Sağ Ok - 2 kart kaydır */}
                        <button
                            onClick={() => scrollByAmount(scrollAmount)}
                            className="size-10 bg-white ring-1 ring-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Slider container - full width */}
                <div className="w-full">
                    {/* Slider */}
                    <div className="w-full overflow-hidden">
                        <div
                            ref={sliderRef}
                            className="flex space-x-4 w-full overflow-x-auto scroll-smooth"
                            style={{ scrollbarWidth: "none" }}
                        >
                            {/* Sonsuz döngü için 3 grup kart */}
                            {[...slides, ...slides, ...slides].map((slide, index) => (
                                <div
                                    key={`${slide.id}-${index}`}
                                    className="flex-none w-[380px] h-32 bg-white rounded-xl shadow-md flex border border-gray-200"
                                >
                                    {/* RESİM ALANI - Daraltılmış görünüm */}
                                    <div className="w-2/5 p-1.5">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-full object-cover rounded-md"
                                            draggable={false}
                                        />
                                    </div>

                                    {/* YAZI ALANI - Daraltılmış */}
                                    <div className="w-3/5 px-2 py-1.5 flex flex-col justify-between">
                                        <div>
                                            <div className="text-gray-600 text-xs font-semibold mb-0.5">{slide.category}</div>
                                            <h3 className="text-xs font-bold line-clamp-2 leading-tight">{slide.title}</h3>
                                        </div>
                                        <div className="flex items-center text-gray-500">
                                            <Clock size={10} className="mr-1" />
                                            <span className="text-xs">{slide.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <style>{`::-webkit-scrollbar { display: none; }`}</style>
            </div>
        </div>
    );
}