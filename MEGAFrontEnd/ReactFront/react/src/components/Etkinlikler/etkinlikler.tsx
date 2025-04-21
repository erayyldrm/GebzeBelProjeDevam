import React, { useState, useEffect } from "react";

type Event = {
    id: number;
    title: string;
    date: string;
    imageUrl: string;
    description: string;
};

const events: Event[] = [
    { id: 7, title: "Kur-anı Kerim Tilaveti ve Teravih Namazı", date: "2025-03-21", imageUrl: "/images/etkinlikler/etkinlik7.jpg", description: "Yer: Sultan Orhan Mahallesi İlyas Bey Camii" },
    { id: 14, title: "Hacivat İle Karagöz", date: "2025-03-21", imageUrl: "/images/etkinlikler/etkinlik14.jpg", description: "Yer: Arapçeşme Bilim Sanat Merkezi" },
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
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToSlide = (index: number) => {
        if (index === currentSlide || isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev === events.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev === 0 ? events.length - 1 : prev - 1));
    };

    useEffect(() => {
        const transitionEnd = () => setIsTransitioning(false);
        const slider = document.querySelector('.slider-container');
        slider?.addEventListener('transitionend', transitionEnd);

        return () => {
            slider?.removeEventListener('transitionend', transitionEnd);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide, isTransitioning]);

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Etkinlikler</h2>

            {/* Slider Container */}
            <div className="relative mb-16 px-16">
                {/* Card-like Container */}
                <div className="bg-white rounded-xl shadow-xl p-1">
                    {/* Slider with Animation */}
                    <div className="slider-container relative h-[500px] w-full rounded-lg overflow-hidden">
                        {events.map((event, index) => (
                            <div
                                key={event.id}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                    index === currentSlide
                                        ? 'opacity-100 translate-x-0'
                                        : index < currentSlide
                                            ? '-translate-x-full opacity-0'
                                            : 'translate-x-full opacity-0'
                                }`}
                            >
                                <img
                                    src={event.imageUrl}
                                    alt={event.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 p-4 rounded-full z-20 text-white text-2xl transition-all duration-300 shadow-xl"
                    aria-label="Önceki slide"
                    style={{
                        backgroundColor: '#022842',
                        transform: 'translateY(-50%) translateX(-50%)',
                    }}
                    disabled={isTransitioning}
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-4 rounded-full z-20 text-white text-2xl transition-all duration-300 shadow-xl"
                    aria-label="Sonraki slide"
                    style={{
                        backgroundColor: '#022842',
                        transform: 'translateY(-50%) translateX(50%)',
                    }}
                    disabled={isTransitioning}
                >
                    ❯
                </button>

            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center -mt-8 mb-10">
                {events.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 mx-1.5 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-black' : 'bg-gray-400'
                        } ${isTransitioning && index === currentSlide ? 'scale-125' : ''}`}
                        aria-label={`Slide ${index + 1}`}
                        disabled={isTransitioning}
                    />
                ))}
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                    <div key={event.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
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