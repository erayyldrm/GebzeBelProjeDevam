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
            date: "March 27, 2022",
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

    const sliderRef = useRef<HTMLDivElement>(null);
    const slideWidth = 500 + 16; // Kart genişliği + spacing

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const initialScroll = slides.length * slideWidth;
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

        const slider = sliderRef.current;
        const newScrollLeft = slider.scrollLeft + amount;

        if (newScrollLeft < 0) {
            slider.scrollLeft = slideWidth * slides.length * 2;
            setTimeout(() => {
                slider.scrollBy({ left: amount, behavior: "smooth" });
            }, 50);
        } else if (newScrollLeft > slideWidth * slides.length * 3) {
            slider.scrollLeft = slideWidth * slides.length;
            setTimeout(() => {
                slider.scrollBy({ left: amount, behavior: "smooth" });
            }, 50);
        } else {
            slider.scrollBy({ left: amount, behavior: "smooth" });
        }
    };

    const renderHeroCard = (article: typeof heroPost) => (
        <div className="relative overflow-hidden rounded h-full w-full">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className={`inline-block px-4 py-1 text-sm font-bold text-white rounded mb-3 ${article.categoryClass}`}>
                    {article.category}
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                    <a href="#" className="hover:underline">{article.title}</a>
                </h2>
                <div className="flex items-center text-white text-sm">
                    <Clock size={14} className="mr-1" />
                    <span>{article.date}</span>
                </div>
            </div>
        </div>
    );

    const renderMainArticle = renderHeroCard;
    const renderSmallArticle = renderHeroCard;

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                <div className="h-100 flex gap-6">{renderHeroCard(heroPost)}</div>

                <div className="grid grid-rows-[1fr_auto] gap-6">
                    <div className="aspect-w-1 aspect-h-11">{renderMainArticle(featuredArticles[0])}</div>
                    <div className="grid grid-cols-2 gap-6 h-45">
                        {renderSmallArticle(featuredArticles[1])}
                        {renderSmallArticle(featuredArticles[2])}
                    </div>
                </div>
            </div>

            <div className="my-12">
                <h2 className="text-2xl font-bold mb-6">Son Haberler</h2>
                <div className="w-full max-w-screen-xl mx-auto py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => scrollByAmount(-slideWidth)}
                            className="size-12 bg-white ring-2 ring-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>

                        <div className="flex flex-grow mx-4 overflow-hidden">
                            <div
                                ref={sliderRef}
                                className="flex space-x-4 w-full overflow-x-auto scroll-smooth"
                                style={{ scrollbarWidth: "none" }}
                            >
                                {[...slides, ...slides, ...slides].map((slide, index) => (
                                    <div
                                        key={`${slide.id}-${index}`}
                                        className="min-w-[500px] max-w-[500px] h-36 bg-white rounded-xl shadow-xl flex-none flex border border-gray-900"
                                    >
                                        <div className="w-1/2 p-2">
                                            <img
                                                src={slide.image}
                                                alt={slide.title}
                                                className="w-full h-32 object-cover rounded-md"
                                                draggable={false}
                                            />
                                        </div>
                                        <div className="w-1/2 px-3 py-3 flex flex-col justify-center">
                                            <div className="text-gray-600 text-sm font-semibold mb-1">{slide.category}</div>
                                            <h3 className="text-base font-bold mb-2 line-clamp-2">{slide.title}</h3>
                                            <div className="flex items-center text-gray-500 mt-1">
                                                <Clock size={14} className="mr-1" />
                                                <span className="text-xs">{slide.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => scrollByAmount(slideWidth)}
                            className="size-12 bg-white ring-2 ring-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
