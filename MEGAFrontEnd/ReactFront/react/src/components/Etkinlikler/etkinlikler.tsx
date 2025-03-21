import React from "react";

type Event = {
    id: number;
    title: string;
    date: string;
    imageUrl: string;
    description: string;
};

const events: Event[] = [
    { id: 1, title: "Long-Term Vision Of Health & Attractive Facility", date: "2025-03-01", imageUrl: "/images/etkinlikler/etkinlik1.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 2, title: "Recreation Programs From Watery Landscapes", date: "2025-03-02", imageUrl: "/images/etkinlikler/etkinlik2.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 3, title: "Etkinlik 3", date: "2025-03-03", imageUrl: "/images/etkinlikler/etkinlik3.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 4, title: "Etkinlik 4", date: "2025-03-04", imageUrl: "/images/etkinlikler/etkinlik4.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 5, title: "Etkinlik 5", date: "2025-03-05", imageUrl: "/images/etkinlikler/etkinlik5.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 6, title: "Etkinlik 6", date: "2025-03-06", imageUrl: "/images/etkinlikler/etkinlik6.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 7, title: "Etkinlik 7", date: "2025-03-07", imageUrl: "/images/etkinlikler/etkinlik7.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 8, title: "Etkinlik 8", date: "2025-03-08", imageUrl: "/images/etkinlikler/etkinlik8.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 9, title: "Etkinlik 9", date: "2025-03-09", imageUrl: "/images/etkinlikler/etkinlik9.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 10, title: "Etkinlik 10", date: "2025-03-10", imageUrl: "/images/etkinlikler/etkinlik10.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 11, title: "Etkinlik 11", date: "2025-03-11", imageUrl: "/images/etkinlikler/etkinlik11.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 12, title: "Etkinlik 12", date: "2025-03-12", imageUrl: "/images/etkinlikler/etkinlik12.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 13, title: "Etkinlik 13", date: "2025-03-13", imageUrl: "/images/etkinlikler/etkinlik13.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 14, title: "Etkinlik 14", date: "2025-03-14", imageUrl: "/images/etkinlikler/etkinlik14.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 15, title: "Etkinlik 15", date: "2025-03-15", imageUrl: "/images/etkinlikler/etkinlik15.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 16, title: "Etkinlik 16", date: "2025-03-16", imageUrl: "/images/etkinlikler/etkinlik16.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 17, title: "Etkinlik 17", date: "2025-03-17", imageUrl: "/images/etkinlikler/etkinlik17.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." },
    { id: 18, title: "Etkinlik 18", date: "2025-03-18", imageUrl: "/images/etkinlikler/etkinlik18.jpg", description: "Dolore magna aliquat minim veniay quis nos exercitation ullamco laboris aliquip..." }
];

const EventsSection: React.FC = () => {
    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Etkinlikler</h2>
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