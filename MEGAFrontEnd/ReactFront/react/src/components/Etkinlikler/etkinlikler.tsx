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

    // Auto-play effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev === events.length - 1 ? 0 : prev + 1));
        }, 5000); // 3 saniyede bir değişir
        return () => clearInterval(interval); // component destroy olunca temizle
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev === events.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? events.length - 1 : prev - 1));

    return (
        <div className="container mx-auto py-10"><br/><br/><br/><br/><br/>
            {/* Page Title */}
            <h2 className="text-3xl font-bold mb-6 text-center">Etkinlikler</h2>

            {/* Slider */}
            <div className="relative w-full mb-10 overflow-hidden">
                <div className="relative h-[400px] w-full">
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
                                index === currentSlide
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-0 scale-95'
                            }`}
                        >
                            <div className="relative w-full h-full flex justify-center items-center">
                                <img
                                    src={event.imageUrl}
                                    alt={event.title}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Manual buttons (isteğe bağlı, kaldırabilirsin) */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 p-1 rounded-full z-10 text-sm"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 p-1 rounded-full z-10 text-sm"
                >
                    ❯
                </button>

                {/* Dots (senin görsele uygun) */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {events.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-4 h-4 rounded-full ${
                                index === currentSlide ? 'bg-red-600' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <div key={event.id} className="border rounded-lg overflow-hidden shadow-md">
                        <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                            <p className="text-sm text-gray-600">Tarih: {event.date}</p>
                            <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsSection;