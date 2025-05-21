import React, { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface NewsCardProps {
    image: string;
    category: string;
    title: string;
    author?: {
        name: string;
        image: string;
    };
    date?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
                                               image,
                                               category,
                                               title,
                                               author,
                                               date,
                                           }) => {
    return (
        <div className="w-full md:w-full lg:w-full flex flex-col justify-center min-h-[60px] px-2 py-4 bg-white rounded-lg shadow-sm">
            <div className="mb-1">
                <a href="#" className="text-green-600 text-xs uppercase font-medium tracking-wider hover:text-green-800">
                    {category}
                </a>
            </div>

            {author && date && (
                <ul className="flex flex-wrap items-center text-xs text-gray-500 mt-2">
                    <li className="flex items-center mr-3 mb-1">
                        <span className="mr-1">
                            <img src={author.image} alt={author.name} className="w-4 h-4 rounded-full" />
                        </span>
                    </li>
                    <li className="flex items-center">
                        <span className="mr-1">
                            <Clock size={12} />
                        </span>
                        <span className="text-xs">{date}</span>
                    </li>
                </ul>
            )}
        </div>
    );
};

const EventCalendar: React.FC<{
    events: { date: string; title: string; imageUrl: string; description: string }[];
}> = ({ events }) => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    const eventsForSelectedDate = selectedDate
        ? events.filter((e) => e.date === selectedDate)
        : [];

    const selectedEvent = eventsForSelectedDate[currentEventIndex];

    useEffect(() => {
        if (selectedDate) setCurrentEventIndex(0);
    }, [selectedDate]);

    const handlePrev = () => {
        setCurrentEventIndex((prev) =>
            prev === 0 ? eventsForSelectedDate.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentEventIndex((prev) =>
            (prev + 1) % eventsForSelectedDate.length
        );
    };

    const flexDirection = windowWidth >= 1024 ? "flex-row" : "flex-col";

    return (
        <div className="w-full flex justify-center items-center px-2 sm:px-4">
            <div className="relative rounded-xl shadow-lg overflow-hidden w-full max-w-5xl bg-[#002850]">
                <div className={`relative flex ${flexDirection} justify-center items-start p-3 sm:p-4 md:p-6 gap-4 transition-all duration-500`}>
                    <div
                        className={`bg-white p-4 rounded-xl shadow-xl flex flex-col transition-all duration-500
                          ${selectedEvent && windowWidth >= 1024 ? "w-[60%] min-w-[300px]" : "w-full"} 
                          max-w-[900px]"
                        `}
                    >
                        <div className="text-lg sm:text-xl font-semibold mb-3 text-white py-2 rounded-md bg-[#002850] text-center">
                            📅 Etkinlik Takvimi
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 text-xs sm:text-sm text-center">
                            {[...Array(daysInMonth)].map((_, i) => {
                                const day = (i + 1).toString().padStart(2, "0");
                                const month = (today.getMonth() + 1).toString().padStart(2, "0");
                                const date = `${today.getFullYear()}-${month}-${day}`;
                                const hasEvent = events.some((e) => e.date === date);

                                return (
                                    <button
                                        key={date}
                                        onClick={() => hasEvent && setSelectedDate(date)}
                                        className={`w-full h-[55px] sm:h-[60px] md:h-[55px] flex items-center justify-center rounded-md transition-all duration-300 ring-1 ring-inset
                                          ${hasEvent
                                            ? "bg-orange-100 hover:bg-orange-200 text-orange-800 font-semibold border-b-2 border-orange-500 ring-orange-300"
                                            : "bg-gray-100 text-gray-400 cursor-default ring-gray-200"
                                          }`}
                                    >
                                        {day}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {selectedEvent && (
                        <div className={`bg-white p-4 rounded-xl shadow-xl flex flex-col justify-between transition-all duration-500
                          ${windowWidth >= 1024 
                            ? "w-[40%] min-w-[280px] max-w-[400px]" 
                            : "w-full mt-4"}`
                        }>
                            <div className="rounded-lg overflow-hidden mb-3 h-60 sm:h-55 md:h-55 shadow-sm">
                                <img
                                    src={selectedEvent.imageUrl}
                                    alt={selectedEvent.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-base font-semibold mb-1 text-gray-800">{selectedEvent.title}</div>
                            <p className="text-sm text-gray-600 mb-1">📆 Tarih: {selectedEvent.date}</p>
                            <p className="text-sm text-gray-600">{selectedEvent.description}</p>

                            {eventsForSelectedDate.length > 1 && (
                                <div className="flex justify-between items-center mt-4">
                                    <button
                                        onClick={handlePrev}
                                        className="text-sm bg-[#002850] text-white px-4 py-1.5 rounded hover:opacity-90"
                                    >
                                        ← Önceki
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="text-sm bg-[#002850] text-white px-4 py-1.5 rounded hover:opacity-90"
                                    >
                                        Sonraki →
                                    </button>
                                </div>
                            )}

                            <button
                                onClick={() => setSelectedDate(null)}
                                className="mt-4 text-xs text-orange-600 hover:underline self-end"
                            >
                                ✖ Kapat
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const CombinedComponent: React.FC = () => {
    const sideCards = [
        { image: "/images/etkinlikler/etkinlik1.jpg", category: "NEWS", title: "Şen Davulcu" },
        { image: "/images/etkinlikler/etkinlik2.jpg", category: "HEALTH", title: "Karagöz ile Havicat" },
        { image: "/images/etkinlikler/etkinlik3.jpg", category: "POLITICS", title: "Çitlembiğin Ramazan Macerası" },
        { image: "/images/etkinlikler/etkinlik3.jpg", category: "TRAVEL", title: "Çitlembiğin Ramazan Macerası" },
        { image: "/images/etkinlikler/etkinlik4.jpg", category: "SPORTS", title: "Tekno Sabri Macera Yolcusu" },
        { image: "/images/etkinlikler/etkinlik5.jpg", category: "NEWS", title: "Karagöz'ün Karnesi" },
        { image: "/images/etkinlikler/etkinlik6.jpg", category: "SPORTS", title: "Gazi Dede İle Çanakkale Hatıraları" },
        { image: "/images/etkinlikler/etkinlik7.jpg", category: "FOOD", title: "Kur-anı Kerim Tilaveti ve Teravih Namazı" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sideCards.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [sideCards.length]);

    const featured = sideCards[currentIndex];

    const events = [
        { id: 14, title: "Hacivat İle Karagöz", date: "2025-05-21", imageUrl: "/images/etkinlikler/etkinlik14.jpg", description: "Yer: Arapçeşme Bilim Sanat Merkezi" },
        { id: 16, title: "Çitlembiğin Ramazan Macerası", date: "2025-05-21", imageUrl: "/images/etkinlikler/etkinlik16.jpg", description: "Yer: Beylikbağı Bilim Sanat Merkezi" },
        { id: 2, title: "Karagöz İle Hacivat", date: "2025-05-22", imageUrl: "/images/etkinlikler/etkinlik2.jpg", description: "Yer: Gebze Kültür Merkezi" },
        { id: 5, title: "Karagöz'ün Karnesi", date: "2025-05-22", imageUrl: "/images/etkinlikler/etkinlik5.jpg", description: "Yer: Arapçeşme Bilim Sanat Merkezi" },
        { id: 6, title: "Gazi Dede İle Çanakkale Hatıraları", date: "2025-05-22", imageUrl: "/images/etkinlikler/etkinlik6.jpg", description: "Yer: Beylikbağı Bilim Sanat Merkezi" },
        { id: 7, title: "Kur-anı Kerim Tilaveti ve Teravih Namazı", date: "2025-05-21", imageUrl: "/images/etkinlikler/etkinlik7.jpg", description: "Yer: Sultan Orhan Mahallesi İlyas Bey Camii" },
        { id: 8, title: "Kur-anı Kerim Tilaveti ve Teravih Namazı", date: "2025-05-22", imageUrl: "/images/etkinlikler/etkinlik8.jpg", description: "Yer: Tatlıkuyu Mahallesi Merkez Camii" },
        { id: 1, title: "Şen Davulcu", date: "2025-05-23", imageUrl: "/images/etkinlikler/etkinlik1.jpg", description: "Yer: İstasyon Bilim Sanat Merkezi" },
        { id: 4, title: "Tekno Sabri Macera Yolcusu", date: "2025-05-23", imageUrl: "/images/etkinlikler/etkinlik4.jpg", description: "Yer: Gebze Kültür Merkezi" },
        { id: 9, title: "Kur-anı Kerim Tilaveti ve Teravih Namazı", date: "2025-05-23", imageUrl: "/images/etkinlikler/etkinlik9.jpg", description: "Yer: Yavuz Selim Mahallesi Fatih Camii" },
        { id: 10, title: "Kur-anı Kerim Tilaveti ve Teravih Namazı", date: "2025-05-24", imageUrl: "/images/etkinlikler/etkinlik10.jpg", description: "Yer: Ulus Mahallesi Eyüp Camii" },
        { id: 15, title: "Çitlembiğin Ramazan Macerası", date: "2025-05-24", imageUrl: "/images/etkinlikler/etkinlik15.jpg", description: "Yer: Barış Mahallesi Kurs Merkezi" },
        { id: 11, title: "Kur-anı Kerim Tilaveti ve Teravih Namazı", date: "2025-05-26", imageUrl: "/images/etkinlikler/etkinlik11.jpg", description: "Yer: Çoban Mustafa Paşa Camii" },
        { id: 12, title: "Kur-anı Kerim Tilaveti ve Teravih Namazı", date: "2025-05-27", imageUrl: "/images/etkinlikler/etkinlik12.jpg", description: "Yer: Hürriyet Mahallesi Hz.Ali Camii" },
        { id: 3, title: "Çitlembiğin Ramazan Macerası", date: "2025-05-28", imageUrl: "/images/etkinlikler/etkinlik3.jpg", description: "Yer: Tarih Su Dolabı" },
        { id: 13, title: "Kur-anı Kerim Tilaveti ve Teravih Namazı", date: "2025-05-28", imageUrl: "/images/etkinlikler/etkinlik13.jpg", description: "Yer: Güzeller Mahallesi Hacı Salih Camii" },
        { id: 17, title: "Masal Kapısı", date: "2025-05-28", imageUrl: "/images/etkinlikler/etkinlik17.jpg", description: "Yer: Kadıllı İlkokulu" },
        { id: 18, title: "Bayram Kesesi", date: "2025-05-28", imageUrl: "/images/etkinlikler/etkinlik18.jpg", description: "Yer: Arapçeşme Bilim Sanat Merkezi" },
    ];

    return (
        <div className="bg-gray-50 py-8 md:py-12 lg:py-2">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-14">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-screen-2xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-8 items-start">
                            <div className="col-span-1 grid grid-cols-1 gap-4">
                                {sideCards.slice(0, 4).map((card, index) => (
                                    <div key={`left-${index}`} className="flex items-center">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-32 h-20 object-cover rounded-md mr-4"
                                        />
                                        <p className="text-xs text-gray-600">{card.title}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="col-span-3 relative overflow-hidden rounded-lg flex justify-center">
                                <a href="#" className="block h-full">
                                    <img
                                        src={featured.image}
                                        alt={featured.title}
                                        className="object-cover w-full h-[350px] transition-all duration-500 rounded-md"
                                    />
                                </a>
                            </div>

                            <div className="col-span-1 grid grid-cols-1 gap-4">
                                {sideCards.slice(4, 8).map((card, index) => (
                                    <div key={`right-${index}`} className="flex justify-between items-center">
                                        <p className="text-xs text-gray-600 pr-2">{card.title}</p>
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-32 h-20 object-cover rounded-md"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <EventCalendar events={events} />

                <div className="px-2 sm:px-4 md:px-8 lg:px-16 xl:px-30 py-4 sm:py-6 md:py-8 lg:py-10">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Etkinlikler</h2>

                    <div className="w-full mx-auto mb-4 sm:mb-8 lg:mb-12">
                        <div style={{ backgroundColor: "#002850" }} className="p-2 sm:p-3 md:p-4 lg:p-6 rounded-xl shadow-lg">
                            <div className="relative w-full overflow-hidden rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="aspect-video w-full relative">
                                        <img
                                            src="/images/etkinlikler/etkinlik14.jpg"
                                            alt="Hacivat İle Karagöz"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center text-white p-2 sm:p-4">
                                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Hacivat İle Karagöz</h3>
                                        <p className="text-sm sm:text-base mb-1 sm:mb-2">Tarih: 2025-03-21</p>
                                        <p className="text-sm sm:text-base">Yer: Arapçeşme Bilim Sanat Merkezi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                        {events.map((event) => (
                            <div key={event.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="aspect-video w-full relative">
                                    <img
                                        src={event.imageUrl}
                                        alt={event.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-2 sm:p-3 md:p-4">
                                    <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">{event.title}</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Tarih: {event.date}</p>
                                    <p className="text-xs sm:text-sm text-gray-600 mt-1">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CombinedComponent;
