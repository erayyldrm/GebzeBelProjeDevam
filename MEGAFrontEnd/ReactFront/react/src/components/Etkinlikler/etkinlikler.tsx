import React, { useState } from "react";
import ImageSlider from "../Sliders2/SliderTest2.tsx";
import { ChevronRight, ChevronLeft } from "lucide-react";

type Event = {
    id: number;
    title: string;
    date: string;
    imageUrl: string;
    description: string;
};

const events: Event[] = [
    { id: 14, title: "Hacivat İle Karagöz", date: "2025-03-21", imageUrl: "/images/etkinlikler/etkinlik14.jpg", description: "Yer: Arapçeşme Bilim Sanat Merkezi" },
    { id: 7, title: "Kur-anı Kerim Tilaveti ve Teravih Namazı", date: "2025-03-21", imageUrl: "/images/etkinlikler/etkinlik7.jpg", description: "Yer: Sultan Orhan Mahallesi İlyas Bey Camii" },
    { id: 16, title: "Çitlembiğin Ramazan Macerası", date: "2025-03-21", imageUrl: "/images/etkinlikler/etkinlik16.jpg", description: "Yer: Beylikbağı Bilim Sanat Merkezi" },
    { id: 2, title: "Karagöz İle Hacivat", date: "2025-03-22", imageUrl: "/images/etkinlikler/etkinlik2.jpg", description: "Yer: Gebze Kültür Merkezi" },
    { id: 5, title: "Karagöz'ün Karnesi", date: "2025-03-22", imageUrl: "/images/etkinlikler/etkinlik5.jpg", description: "Yer: Arapçeşme Bilim Sanat Merkezi" },
    { id: 6, title: "Gazi Dede İle Çanakkale Hatıraları", date: "2025-03-22", imageUrl: "/images/etkinlikler/etkinlik6.jpg", description: "Yer: Beylikbağı Bilim Sanat Merkezi" },
    { id: 8, title: "Kur-anı Kerim Tilaveti ve Teravih Namazı", date: "2025-03-22", imageUrl: "/images/etkinlikler/etkinlik8.jpg", description: "Yer: Tatlıkuyu Mahallesi Merkez Camii" },
    { id: 1, title: "Şen Davulcu", date: "2025-03-23", imageUrl: "/images/etkinlikler/etkinlik1.jpg", description: "Yer: İstasyon Bilim Sanat Merkezi" },
    { id: 4, title: "Tekno Sabri Macera Yolcusu", date: "2025-03-23", imageUrl: "/images/etkinlikler/etkinlik4.jpg", description: "Yer: Gebze Kültür Merkezi" },
    { id: 9, title: "Kur-anı Kerim Tilaveti ve Teravih Namazı", date: "2025-03-23", imageUrl: "/images/etkinlikler/etkinlik9.jpg", description: "Yer: Yavuz Selim Mahallesi Fatih Camii" },
    { id: 10, title: "Kur-anı Kerim Tilaveti ve Teravih Namazı", date: "2025-03-24", imageUrl: "/images/etkinlikler/etkinlik10.jpg", description: "Yer: Ulus Mahallesi Eyüp Camii" },
    { id: 15, title: "Çitlembiğin Ramazan Macerası", date: "2025-03-24", imageUrl: "/images/etkinlikler/etkinlik15.jpg", description: "Yer: Barış Mahallesi Kurs Merkezi" },
    { id: 11, title: "Kur-anı Kerim Tilaveti ve Teravih Namazı", date: "2025-03-26", imageUrl: "/images/etkinlikler/etkinlik11.jpg", description: "Yer: Çoban Mustafa Paşa Camii" },
    { id: 12, title: "Kur-anı Kerim Tilaveti ve Teravih Namazı", date: "2025-03-27", imageUrl: "/images/etkinlikler/etkinlik12.jpg", description: "Yer: Hürriyet Mahallesi Hz.Ali Camii" },
    { id: 3, title: "Çitlembiğin Ramazan Macerası", date: "2025-03-28", imageUrl: "/images/etkinlikler/etkinlik3.jpg", description: "Yer: Tarih Su Dolabı" },
    { id: 13, title: "Kur-anı Kerim Tilaveti ve Teravih Namazı", date: "2025-03-28", imageUrl: "/images/etkinlikler/etkinlik13.jpg", description: "Yer: Güzeller Mahallesi Hacı Salih Camii" },
    { id: 17, title: "Masal Kapısı", date: "2025-03-28", imageUrl: "/images/etkinlikler/etkinlik17.jpg", description: "Yer: Kadıllı İlkokulu" },
    { id: 18, title: "Bayram Kesesi", date: "2025-03-28", imageUrl: "/images/etkinlikler/etkinlik18.jpg", description: "Yer: Arapçeşme Bilim Sanat Merkezi" }
];

const EventsSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Create slides array with improved image data and captions
    const slides = events.map(event => ({
        image: event.imageUrl,
        alt: event.title,
        caption: `${event.title} - ${event.date}`
    }));

    // Total number of slides
    const totalSlides = slides.length;

    // Handle next slide
    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    // Handle previous slide
    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    // This function will be passed to the ImageSlider for slide changes
    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Etkinlikler</h2>

            {/* Wider Card with #002850 background color */}
            <div className="w-full mx-auto mb-16">
                <div style={{ backgroundColor: "#002850" }} className="p-4 md:p-8 rounded-xl shadow-xl relative">
                    {/* Custom Navigation Buttons (outside the slider) */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-20 disabled:opacity-50 hover:bg-gray-100"
                        aria-label="Önceki"
                        disabled={isAnimating}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Image slider container with proper padding */}
                    <div className="relative w-full overflow-hidden rounded-lg">
                        <ImageSlider
                            slides={slides}
                            currentSlide={currentSlide}
                            onSlideChange={handleSlideChange}
                            autoPlay={false}
                        />
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-20 disabled:opacity-50 hover:bg-gray-100"
                        aria-label="Sonraki"
                        disabled={isAnimating}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                    <div key={event.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="aspect-video w-full relative">
                            <img
                                src={event.imageUrl}
                                alt={event.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                            <p className="text-sm text-gray-600 mb-1">Tarih: {event.date}</p>
                            <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsSection;