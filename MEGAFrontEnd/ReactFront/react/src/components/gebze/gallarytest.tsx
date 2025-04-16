import React from "react";
import { Info, MapPin } from "lucide-react";

const GalleryTest: React.FC = () => {
    // Create a function to generate the correct URL format based on the title
    const getDetailPageUrl = (title: string): string => {
        // Convert title to lowercase and remove special characters
        const formattedTitle = title
            .toLowerCase()
            .replace(/ı/g, "i")
            .replace(/ö/g, "o")
            .replace(/ü/g, "u")
            .replace(/ç/g, "c")
            .replace(/ş/g, "s")
            .replace(/ğ/g, "g")
            .replace(/İ/g, "i")
            .replace(/\s+/g, "")
            .replace(/[^\w\s]/gi, "");

        return `/gebze/tarihiyerler/${formattedTitle}`;
    };

    const historicalSites = [
        { img: "/images/gebze/tarihiyerler/anibal/1.JPG", title: "ANİBALIN MEZARI" },
        { img: "/images/gebze/tarihiyerler/ballikayalar/2.jpg", title: "BALLIKAYALAR" },
        { img: "/images/gebze/tarihiyerler/külliye/3.JPG", title: "ÇOBAN MUSTAFA PAŞA KÜLLİYESİ" },
        { img: "/images/gebze/tarihiyerler/hamam/4.JPG", title: "ÇOBAN MUSTAFA PAŞA HAMAMI" },
        { img: "/images/gebze/tarihiyerler/sadirvan/5.JPG", title: "ÇOBAN MUSTAFA PAŞA ŞADIRVANI" },
        { img: "/images/gebze/tarihiyerler/eskihisarcesme/6.jpg", title: "ESKİHİSAR ÇEŞMESİ" },
        { img: "/images/gebze/tarihiyerler/kale/7.JPG", title: "ESKİHİSAR KALESİ" },
        { img: "/images/gebze/tarihiyerler/hünkar/8.JPG", title: "HÜNKAR ÇAYIRI" },
        { img: "/images/gebze/tarihiyerler/ibrahimpasacamii/2.JPG", title: "İBRAHİM PAŞA ÇEŞMESİ" },
        { img: "/images/gebze/tarihiyerler/ilyasbeycamii/9.JPG", title: "İLYAS BEY CAMİİ" },
        { img: "/images/gebze/tarihiyerler/yalı/11.JPG", title: "OSMAN HAMDİ BEY YALISI" },
        { img: "/images/gebze/tarihiyerler/sultanorhancami/12.jpg", title: "SULTAN ORHAN CAMİİ" }
    ];

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">GEBZE TARİHİ YERLER</h1><br/>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {historicalSites.map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl group"
                        >
                            <div className="w-full h-70 overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-300"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                                <h2 className="text-white text-base font-semibold truncate">&nbsp;&nbsp;{item.title}</h2>
                                <div className="flex space-x-2 mt-1">
                                    <a
                                        href={getDetailPageUrl(item.title)}
                                        className="flex items-center bg-[#4FC3F7] text-white text-xs px-2 py-1 rounded-md hover:bg-[#4FC3F7]/80 transition-colors"
                                    >
                                        <Info className="w-4 h-4 mr-1" />
                                        Detaylı Bilgi
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center bg-[#4FC3F7] text-white text-xs px-2 py-1 rounded-md hover:bg-[#4FC3F7]/80 transition-colors"
                                    >
                                        <MapPin className="w-4 h-4 mr-1" />
                                        Konum
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div><br/>
        </div>
    );
};

export default GalleryTest;