import { useRef, useEffect, useCallback } from "react";
import { Clock } from "lucide-react";

// Custom useInterval hook
function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay !== null) {
            const id = setInterval(() => savedCallback.current(), delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

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
            authorImage: "/api/placeholder/50/50",
            date: "N/A",
        }
    ];

    // Slider data with added categoryClass property to match the main cards
    const slides = [
        {
            id: 1,
            image: "/images/Haberler/habergörselleri/projelervealtyapicalismalari/calismalar1-1.webp",
            category: "Güncel",
            categoryClass: "bg-indigo-500", // Added color class
            title: "Belediyemiz Yeni Projeleri Tanıttı",
            date: "14 Mayıs 2025",
        },
        {
            id: 2,
            image: "/images/Haberler/habergörselleri/sosyalyardımvehizmetler/sosyal2.jpg",
            category: "Duyuru",
            categoryClass: "bg-amber-500", // Added color class
            title: "Yaz Şenliği Etkinlikleri Başlıyor",
            date: "10 Mayıs 2025",
        },
        {
            id: 3,
            image: "/images/Haberler/habergörselleri/egitimvegenclik/egitim1-2.jpg",
            category: "Etkinlik",
            categoryClass: "bg-green-600", // Same as EĞİTİM
            title: "Başkanımızdan Gençlere Özel Mesaj",
            date: "8 Mayıs 2025",
        },
        {
            id: 4,
            image: "/images/Haberler/habergörselleri/sosyalyardımvehizmetler/sosyal1-2.jpeg",
            category: "Haber",
            categoryClass: "bg-blue-600", // Same as SOSYAL YARDIM
            title: "Başkanımızdan Sosyal Yardım Destekleri",
            date: "5 Mayıs 2025",
        },
    ];

    // Slider refs and logic
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const slideWidth = 380 + 16; // Card width + gap
    const visibleSlides = 3; // Show 3 cards at once
    const scrollAmount = slideWidth * visibleSlides;

    // Scroll control
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        // Center the view
        const initialScroll = Math.floor(slides.length / 2) * slideWidth;
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

    const isMouseOver = useRef(false);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleMouseEnter = () => {
            isMouseOver.current = true;
        };

        const handleMouseLeave = () => {
            isMouseOver.current = false;
        };

        slider.addEventListener('mouseenter', handleMouseEnter);
        slider.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            slider.removeEventListener('mouseenter', handleMouseEnter);
            slider.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const scrollByAmount = useCallback((amount: number) => {
        if (!sliderRef.current || isMouseOver.current) return;

        const slider = sliderRef.current;
        const newScrollLeft = slider.scrollLeft + amount;

        if (newScrollLeft >= slideWidth * slides.length * 3) {
            // Reset to start invisibly
            slider.scrollLeft = slideWidth * slides.length;
            slider.scrollTo({
                left: slider.scrollLeft + amount,
                behavior: 'smooth'
            });
        } else if (newScrollLeft <= 0) {
            // Reset to end invisibly
            slider.scrollLeft = slideWidth * slides.length * 2;
            slider.scrollTo({
                left: slider.scrollLeft + amount,
                behavior: 'smooth'
            });
        } else {
            // Normal scroll
            slider.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    }, [slides.length, slideWidth]);

    // Auto-scroll interval
    useInterval(() => {
        scrollByAmount(scrollAmount);
    }, 5000); // Scroll every 5 seconds

    const renderHeroCard = (article: { image: string; title: string; category: string; categoryClass: string; date: string; }) => (
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

    const renderMainArticle = (article: { image: string; title: string; category: string; categoryClass: string; date?: string; }) => (
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

    const renderSmallArticle = (article: { image: string; title: string; category: string; }, categoryClass: string) => (
        <div className="relative overflow-hidden rounded h-full w-full">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <h3 className="text-xl font-bold text-white mb-2">
                    <a href="#" className="hover:underline">{article.title}</a>
                </h3>
                <div className="flex items-center justify-between">
                    <div className={`inline-block px-4 py-1 text-sm font-bold text-white rounded ${categoryClass}`}>
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
                {/* Left hero post */}
                <div className="h-100 flex gap-6">
                    {renderHeroCard(heroPost)}
                </div>

                {/* Right side */}
                <div className="grid grid-rows-[1fr_auto] gap-6">
                    {/* Top square */}
                    <div className="aspect-w-1 aspect-h-11">
                        {featuredArticles[0].date ? renderMainArticle(featuredArticles[0]) : null}
                    </div>

                    {/* Bottom two small boxes */}
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

            {/* News Slider Section - Full width */}
            <div className="my-8">
                <div className="flex items-center mb-3">
                    <h2 className="text-xl font-bold mr-4">Son Haberler</h2>
                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => scrollByAmount(-scrollAmount)}
                            className="size-10 bg-white ring-1 ring-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>

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

                {/* Slider container */}
                <div className="w-full">
                    <div className="w-full overflow-hidden">
                        <div
                            ref={sliderRef}
                            className="flex space-x-4 w-full overflow-x-auto scroll-smooth"
                            style={{ scrollbarWidth: "none" }}
                        >
                            {/* Infinite loop with 3 groups of cards */}
                            {[...slides, ...slides, ...slides].map((slide, index) => (
                                <div
                                    key={`${slide.id}-${index}`}
                                    className="flex-none w-[380px] h-32 bg-white rounded-xl shadow-md flex border border-gray-200"
                                >
                                    {/* IMAGE AREA */}
                                    <div className="w-2/5 p-1.5">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-full object-cover rounded-md"
                                            draggable={false}
                                        />
                                    </div>

                                    {/* TEXT AREA - Modified to include colored category label */}
                                    <div className="w-3/5 px-2 py-1.5 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xs font-bold line-clamp-2 leading-tight mb-1">{slide.title}</h3>
                                            {/* Colored category label BELOW the text as requested */}
                                            <div className={`text-xs font-semibold text-white px-2 py-0.5 rounded inline-block ${slide.categoryClass}`}>
                                                {slide.category}
                                            </div>
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