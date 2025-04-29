import { useState, useEffect } from "react";
import { MapPin, ChevronRight, ChevronLeft } from "lucide-react";

const Gaziler = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Diğer Tarihi Yerler için veri ve route bilgileri
    const otherPlaces = [
        { name: "ESKİHİSAR KALESİ", imagePath: "/images/gebze/tarihiyerler/kale/7.JPG", route: "/gebze/tarihiyerler/eskihisarkalesi" },
        { name: "ANİBALIN MEZARI", imagePath: "/images/gebze/tarihiyerler/anibal/1.JPG", route: "/gebze/tarihiyerler/anibalinmezari" },
        { name: "ÇOBAN MUSTAFA PAŞA KÜLLİYESİ", imagePath: "/images/gebze/tarihiyerler/külliye/3.JPG", route: "/gebze/tarihiyerler/cobanmustafapasakulliyesi" },
        { name: "HÜNKAR ÇAYIRI", imagePath: "/images/gebze/tarihiyerler/hünkar/8.JPG", route: "/gebze/tarihiyerler/hunkarcayiri" },
        { name: "OSMAN HAMDİ BEY YALISI", imagePath: "/images/gebze/tarihiyerler/yalı/11.JPG", route: "/gebze/tarihiyerler/osmanhamdibeyyalisi" },
        { name: "ÇOBAN MUSTAFA PAŞA HAMAMI", imagePath: "/images/gebze/tarihiyerler/hamam/4.JPG", route: "/gebze/tarihiyerler/cobanmustafapasahamami" },
        { name: "BALLIKAYALAR", imagePath: "/images/gebze/tarihiyerler/ballikayalar/sub1.jpg", route: "/gebze/tarihiyerler/ballikayalar" },
        { name: "ÇOBAN MUSTAFA PAŞA ŞADIRVANI", imagePath: "/images/gebze/tarihiyerler/sadirvan/5.JPG", route: "/gebze/tarihiyerler/cobanmustafapasasadirvani" },
        { name: "ESKİHİSAR ÇEŞMESİ", imagePath: "/images/gebze/tarihiyerler/eskihisarcesme/6.jpg", route: "/gebze/tarihiyerler/eskihisarcesmesi" },
        { name: "İLYAS BEY CAMİİ", imagePath: "/images/gebze/tarihiyerler/ilyasbeycamii/9.JPG", route: "/gebze/tarihiyerler/ilyasbeycamii" },
        { name: "İBRAHİM PAŞA ÇEŞMESİ", imagePath: "/images/gebze/tarihiyerler/ibrahimpasacamii/2.JPG", route: "/gebze/tarihiyerler/ibrahimpasacesmesi" },
        { name: "SULTAN ORHAN CAMİİ", imagePath: "/images/gebze/tarihiyerler/sultanorhancami/12.jpg", route: "/gebze/tarihiyerler/sultanorhancamii" }
    ];

    // Slider için otomatik geçiş
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => {
                if (prev + 4 < otherPlaces.length) {
                    return prev + 1;
                } else {
                    return 0;
                }
            });
        }, 5000); // 5 saniyede bir

        return () => clearInterval(interval); // Temizlik
    }, []);

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex(prev => {
                const nextIndex = (prev + 1) % otherPlaces.length;
                return nextIndex;
            });
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0 && !isAnimating) {
            setIsAnimating(true);
            setCurrentIndex(prev => prev - 1);
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    // Görüntülenecek kartlar (her seferinde 4 kart)
    const visiblePlaces = () => {
        const places = [];
        for (let i = 0; i < 4; i++) {
            places.push(otherPlaces[(currentIndex + i) % otherPlaces.length]);
        }
        return places;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="container mx-auto relative h-[500px] max-w-6xl mt-6">
                <div className="absolute inset-0 z-10" />
                <img
                    src="/images/hizmetler/mesirealani/gazilerdağı.jpg"
                    alt="AnibalinMezari"
                    className="h-full w-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl bg-[#022842]/60 font-bold text-white mb-4 rounded-xl px-2 py-2 inline-block">
                        GAZİLERDAĞI MESİRE ALANI
                    </h1>

                    <div className="flex items-center text-white bg-[#022842] px-4 py-2 rounded-full">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>Gebze, Kocaeli</span>
                    </div>
                </div>
            </div><br />

            {/* Content Section */}
            <div className="container mx-auto px-3 py-9">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Main Content */}
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Genel Bilgi */}
                            <div className="md:w-2/3">
                                <h2 className="text-2xl font-bold text-blue-800 mb-4">Genel Bilgi</h2>
                                <div className="prose max-w-none text-gray-700">
                                    <p>Kocaeli ili Gebze ilçesinde bulunan 101,36 Ha alana sahip olan Gaziler Dağı B tipi mesire yeri tabiat parkı olarak tescil edilmiştir. Böylece Gaziler Dağı ilimizin 7. Ülkemizin ise 185. mesire alanıdır. Ülke ve dünya ölçeğindeki bir çok sanayi kuruluşunun ve organize sanayi bölgesinin yanısıra bu kuruluş ve bölgelerle ilişki halinde çeşitli bilim ve araştırma merkezinin bir arada bulunur. </p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg mb-6 text-left ">
                                    <a
                                        href="https://www.google.com/maps/dir//Gaziler,+Dicle+Cd.+No:48,+41400+Gebze%2FKocaeli/@40.83049,29.3447269,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cb21e3f92f3d03:0xf3e8a2e6ff3f0764!2m2!1d29.4271277!2d40.8305193?hl=tr&entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-blue-800 text-black px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
                                    >
                                        <MapPin className="w-5 h-5 mr-2" />
                                        Haritada Gör
                                    </a>
                                </div>
                            </div>

                            {/* Sidebar (Harita ve Galeri) */}
                            <div className="md:w-1/3">
                                {/* Harita */}


                                {/* Galeri */}
                                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">🖼️ Galeri</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            {id: 1, path: "/images/hizmetler/mesirealani/gaziler2.jpg", alt: "Gaziler Dağı görünüm 1"},
                                            {id: 2, path: "/images/hizmetler/mesirealani/gaziler3.jpg", alt: "Gaziler Dağı görünüm 2"},
                                            {id: 3, path: "/images/hizmetler/mesirealani/gazilerdağı.jpg", alt: "Gaziler Dağı görünüm 3"},
                                        ].map((item) => (
                                            <div key={item.id} className="aspect-square overflow-hidden rounded-lg">
                                                <img
                                                    src={item.path}
                                                    alt={item.alt}
                                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gaziler;
