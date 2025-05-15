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
        <li className="mb-6 last:mb-0">
            <div className="flex items-start">
                <div className="relative w-2/5 mr-4 sm:w-1/3 md:w-2/5 lg:w-1/3">
                    <div className="overflow-hidden rounded-lg">
                        <a href="#" className="block">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </a>
                    </div>
                </div>

                <div className="w-3/5 sm:w-2/3 md:w-3/5 lg:w-2/3">
                    <div className="mb-1">
                        <a href="#" className="text-green-600 text-xs uppercase font-medium tracking-wider hover:text-green-800">
                            {category}
                        </a>
                    </div>

                    <h3 className="text-sm font-semibold leading-tight hover:text-blue-600">
                        <a href="#">{title}</a>
                    </h3>

                    {author && date && (
                        <ul className="flex flex-wrap items-center text-xs text-gray-500 mt-1">
                            <li className="flex items-center mr-3 mb-1">
                                <span className="mr-1">
                                    <img src={author.image} alt={author.name} className="w-4 h-4 rounded-full" />
                                </span>
                                <a href="#" className="hover:text-blue-600 text-xs">by {author.name}</a>
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
            </div>
        </li>
    );
};

const CombinedComponent: React.FC = () => {
    // News card data
    const sideCards = [
        { image: "/images/etkinlikler/etkinlik1.jpg", category: "NEWS", title: "Central bank customers need about currency" },
        { image: "/images/etkinlikler/etkinlik2.jpg", category: "HEALTH", title: "Pandemic impact mental health global view" },
        { image: "/images/etkinlikler/etkinlik3.jpg", category: "POLITICS", title: "Drunk driving law by on country and arrest" },
        { image: "/images/etkinlikler/etkinlik3.jpg", category: "TRAVEL", title: "A step back in time and holidays for the ages" },
        { image: "/images/etkinlikler/etkinlik4.jpg", category: "SPORTS", title: "World ni beat kamaica to first men's world cup" },
        { image: "/images/etkinlikler/etkinlik5.jpg", category: "NEWS", title: "Thabna girls stage of protest demand" },
        { image: "/images/etkinlikler/etkinlik6.jpg", category: "SPORTS", title: "World swimming changes rules in wake" },
        { image: "/images/etkinlikler/etkinlik7.jpg", category: "FOOD", title: "A step back in time and holidays for" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sideCards.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [sideCards.length]);

    const featured = sideCards[currentIndex];

    // Events data
    const events: {
        id: number;
        title: string;
        date: string;
        imageUrl: string;
        description: string;
    }[] = [
        { id: 14, title: "Hacivat İle Karagöz", date: "2025-03-21", imageUrl: "/images/etkinlikler/etkinlik14.jpg", description: "Yer: Arapçeşme Bilim Sanat Merkezi" },
        { id: 16, title: "Çitlembiğin Ramazan Macerası", date: "2025-03-21", imageUrl: "/images/etkinlikler/etkinlik16.jpg", description: "Yer: Beylikbağı Bilim Sanat Merkezi" },
        { id: 2, title: "Karagöz İle Hacivat", date: "2025-03-22", imageUrl: "/images/etkinlikler/etkinlik2.jpg", description: "Yer: Gebze Kültür Merkezi" },
        { id: 5, title: "Karagöz'ün Karnesi", date: "2025-03-22", imageUrl: "/images/etkinlikler/etkinlik5.jpg", description: "Yer: Arapçeşme Bilim Sanat Merkezi" },
        { id: 6, title: "Gazi Dede İle Çanakkale Hatıraları", date: "2025-03-22", imageUrl: "/images/etkinlikler/etkinlik6.jpg", description: "Yer: Beylikbağı Bilim Sanat Merkezi" },
        { id: 7, title: "Kur-anı Kerim Tilaveti ve Teravih Namazı", date: "2025-03-21", imageUrl: "/images/etkinlikler/etkinlik7.jpg", description: "Yer: Sultan Orhan Mahallesi İlyas Bey Camii" },
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
        { id: 18, title: "Bayram Kesesi", date: "2025-03-28", imageUrl: "/images/etkinlikler/etkinlik18.jpg", description: "Yer: Arapçeşme Bilim Sanat Merkezi" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* CompactNewsGrid */}
                <div className="px-4 py-6 sm:py-8 md:py-10">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
                        <div className="p-3 sm:p-4 md:p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                                <div className="md:col-span-1">
                                    <ul>
                                        {sideCards.slice(0, 4).map((card, index) => (
                                            <NewsCard key={index} {...card} />
                                        ))}
                                    </ul>
                                </div>

                                <div className="sm:col-span-2 md:col-span-1 mt-1 transition-all duration-500">
                                    <div className="mb-6">
                                        <div className="relative h-40 sm:h-48 md:h-52 lg:h-64 overflow-hidden rounded-lg">
                                            <a href="#" className="block h-full">
                                                <img
                                                    src={featured.image}
                                                    alt={featured.title}
                                                    className="w-full h-full object-cover transition-all duration-900"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="absolute bottom-3 left-3 px-3 py-1 text-xs font-medium text-white rounded-md bg-orange-500"
                                            >
                                                {featured.category}
                                            </a>
                                        </div>

                                        <div className="mt-3">
                                            <h2 className="text-sm md:text-base font-bold leading-tight mb-2">
                                                {featured.title}
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-1 sm:col-span-2 md:block">
                                    <ul>
                                        {sideCards.slice(4, 8).map((card, index) => (
                                            <NewsCard key={index + 4} {...card} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* EventsSection */}
                <div className="px-4 py-6 sm:py-8 md:py-10">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Etkinlikler</h2>

                    <div className="w-full mx-auto mb-8 sm:mb-12">
                        <div style={{ backgroundColor: "#002850" }} className="p-3 sm:p-4 md:p-6 rounded-xl shadow-lg">
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
                        {events.map((event) => (
                            <div key={event.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="aspect-video w-full relative">
                                    <img
                                        src={event.imageUrl}
                                        alt={event.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-3 sm:p-4">
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
