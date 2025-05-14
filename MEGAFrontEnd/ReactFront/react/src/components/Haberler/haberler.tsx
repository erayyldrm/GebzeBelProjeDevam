import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const sliderData = [
    { id: 2, image: "/images/Haberler/habergörselleri/basınaciklamalarivebaskandanmesaj/mesaj1.jpg", category: "TRAVEL", title: "Need some fresh air", date: "April 20, 2022" },
    { id: 3, image: "/images/Haberler/habergörselleri/basınaciklamalarivebaskandanmesaj/mesaj1.jpg", category: "TECHNOLOGY", title: "Art is creative minds", date: "May 20, 2022" },
    { id: 4, image: "/images/Haberler/habergörselleri/basınaciklamalarivebaskandanmesaj/mesaj1.jpg", category: "LIFESTYLE", title: "Beautiful lady hookup", date: "March 22, 2022" },
    { id: 5, image: "/images/Haberler/habergörselleri/basınaciklamalarivebaskandanmesaj/mesaj1.jpg", category: "FOOD", title: "Best street food in town", date: "June 5, 2022" },
    { id: 6, image: "/images/Haberler/habergörselleri/basınaciklamalarivebaskandanmesaj/mesaj1.jpg", category: "SPORTS", title: "Championship highlights", date: "July 15, 2022" }
];

export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Create a circular array for infinite scrolling effect
    const getCircularSlides = () => {
        const items = [...sliderData];
        // For seamless looping, we need to duplicate some items
        return [...items, ...items, ...items];
    };

    const circularSlides = getCircularSlides();

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            const next = prev + 1;
            // Reset to beginning of middle set when reaching end of visible middle set
            if (next >= sliderData.length * 2) {
                return sliderData.length;
            }
            return next;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            const next = prev - 1;
            // Reset to end of middle set when reaching beginning of visible middle set
            if (next < sliderData.length) {
                return sliderData.length * 2 - 1;
            }
            return next;
        });
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    // Ensure we always show exactly 3 slides
    const visibleSlides = circularSlides.slice(currentIndex, currentIndex + 3);

    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
                {/* Left arrow */}
                <button className="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        onClick={prevSlide} aria-label="Previous slide">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                {/* Main content - Three items side by side with no gaps */}
                <div className="flex flex-grow justify-center mx-2 overflow-hidden">
                    <div className="grid grid-cols-3 gap-0 w-full max-w-5xl bg-white shadow-sm rounded-lg overflow-hidden">
                        {visibleSlides.map((slide, index) => (
                            <div key={`${slide.id}-${index}`} className="flex items-center bg-gray-50 border-r last:border-r-0 border-gray-100">
                                {/* Image (Smaller and Horizontal Format) */}
                                <div className="w-1/3">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-16 object-cover"
                                    />
                                </div>

                                {/* Content on Right */}
                                <div className="w-2/3 px-2 py-1 flex flex-col justify-center">
                                    <div className="text-gray-600 text-xs font-semibold">{slide.category}</div>
                                    <h2 className="text-sm font-bold truncate">{slide.title}</h2>
                                    <div className="flex items-center text-gray-500 mt-1">
                                        <Clock size={12} className="mr-1" />
                                        <span className="text-xs">{slide.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right arrow */}
                <button className="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        onClick={nextSlide} aria-label="Next slide">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}