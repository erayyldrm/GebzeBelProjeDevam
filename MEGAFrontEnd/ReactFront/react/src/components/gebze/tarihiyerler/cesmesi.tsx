import {MapPin, ChevronRight, ChevronLeft, X} from "lucide-react";
import {useEffect, useState} from "react";



const EskihisarCesmesiPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showGalleryModal, setShowGalleryModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Galeri resimleri
    const galleryImages = [
        {id: 1, path: "/images/gebze/tarihiyerler/eskihisarcesme/sub1.JPG", alt: "Eskihisar Çeşmesi görünüm 1"},
        {id: 2, path: "/images/gebze/tarihiyerler/eskihisarcesme/6.jpg", alt: "Eskihisar Çeşmesi görünüm 2"}
    ];

    // Diğer Tarihi Yerler için veri
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

    // Galeri fonksiyonları
    const openGallery = ({index}: { index: any }) => {
        setCurrentImageIndex(index);
        setShowGalleryModal(true);
    };

    const closeGallery = () => {
        setShowGalleryModal(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="container mx-auto relative h-[500px] max-w-6xl mt-6">
                <div className="absolute inset-0 z-10" />
                <img
                    src="/images/gebze/tarihiyerler/eskihisarcesme/6.jpg"
                    alt="Eskihisar Çeşmesi"
                    className="h-full w-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl bg-[#022842]/60 font-bold text-white mb-4 rounded-xl px-2 py-2 inline-block">ESKİHİSAR ÇEŞMESİ</h1>
                    <div className="flex items-center text-white bg-[#022842] px-4 py-2 rounded-full">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>Gebze, Kocaeli</span>
                    </div>
                </div>
            </div><br/>

            {/* Content Section */}
            <div className="container mx-auto px-3 py-9">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Main Content */}
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-2/3">
                                <h2 className="text-2xl font-bold text-blue-800 mb-4">Tarihçe ve Genel Bilgi</h2>
                                <div className="prose max-w-none text-gray-700">
                                    <p className="mb-4 text-justify">
                                        772 tarihinde yaptırılan bu tarihi çeşme, adını bulunduğu Eskihisar Köyü'nden almıştır. Kare planlı olan çeşme, mimarisiyle dikkat çeker. Üzeri piramit şeklinde bir çatı ile örtülü olan yapının ön ve arka cepheleri 270 cm, yan kısımları ise 315 cm uzunluğundadır. Yüksekliği yaklaşık 2 metre olan bu değerli eser, 1850 yılında kapsamlı bir onarımdan geçmiştir.

                                        Osmanlı dönemine ait su mimarisinin güzel örneklerinden biri olan Eskihisar Çeşmesi, tarihi dokusu ve özgün yapısıyla mutlaka görülmesi gereken yapılar arasında yer alır.
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Aktiviteler</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">🧭 Tarihi Gezi</h3>
                                            <p className="text-gray-700 text-justify">
                                                Çeşmenin mimari detaylarını ve kitabelerini inceleyerek Osmanlı dönemi su mimarisi hakkında bilgi edinebilirsiniz.
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">📸 Fotoğrafçılık</h3>
                                            <p className="text-gray-700 text-justify">
                                                Çeşmenin tarihi yapısını ve çevresindeki doğal güzellikleri fotoğraflayarak, görsel bir gezi yapabilirsiniz. Özellikle Osmanlı tarzı mimariyi ve çeşmenin etrafındaki detayları yakalamak için harika bir fırsattır.
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">☕ Çeşme Çevresinde Dinlenme ve Sohbet</h3>
                                            <p className="text-gray-700 text-justify">
                                                Çeşme çevresinde zaman geçirirken, oturup dinlenebilir ve gezilen yer hakkında arkadaşlarınızla sohbet edebilirsiniz. Bu tür bir sosyal aktivite, hem dinlendirici hem de bilgilendirici olur.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="md:w-1/3">
                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-blue-800 mb-4">🚗 Nasıl Gidilir?</h3>
                                    <p className="text-gray-700 mb-4 text-justify">
                                        Gebze ilçe merkezinden Eskihisar Mahallesi'ne giden belediye otobüsleri veya minibüslerle ulaşım sağlanabilir.
                                    </p>
                                    <a
                                        href="https://www.google.com/maps/place/Eskihisar+%C3%87e%C5%9Fmesi/@40.769591,29.4252723,17z/data=!3m1!4b1!4m5!3m4!1s0x14cb200fbb67de7d:0x8c7064d245464b3d!8m2!3d40.769591!4d29.427461?shorturl=1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        <MapPin className="w-5 h-5 mr-2" />
                                        Haritada Gör
                                    </a>
                                </div>

                                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">🖼️ Galeri</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {galleryImages.map((item, index) => (
                                            <div
                                                key={item.id}
                                                className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                                                onClick={() => openGallery({index: index})}
                                            >
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

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">DİĞER TARİHİ YERLER</h2>

                    <div className="relative">
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 disabled:opacity-50"
                            aria-label="Önceki"
                            disabled={isAnimating}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Slider Container */}
                        <div className="overflow-hidden">
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"
                            >
                                {visiblePlaces().map((place, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col"
                                    >
                                        {/* Resim alanı */}
                                        <div className="h-55 overflow-hidden">
                                            <img
                                                src={place.imagePath}
                                                alt={place.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>

                                        {/* İçerik alanı */}
                                        <div className="p-4 flex flex-col items-center justify-center text-center flex-grow">
                                            <h3 className="text-lg font-semibold mb-4">{place.name}</h3>
                                            <a
                                                href={place.route}
                                                className="text-blue-600 hover:text-blue-800 inline-flex items-center text-sm"
                                            >
                                                Detaylı bilgi
                                                <ChevronRight className="w-4 h-4 ml-1" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={nextSlide}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 disabled:opacity-50"
                            aria-label="Sonraki"
                            disabled={isAnimating}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center space-x-2 mt-6">
                        {Array.from({ length: Math.ceil(otherPlaces.length / 4) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (!isAnimating) {
                                        setIsAnimating(true);
                                        setCurrentIndex(index * 4);
                                        setTimeout(() => setIsAnimating(false), 500);
                                    }
                                }}
                                className={`h-2 rounded-full transition-all ${
                                    Math.floor(currentIndex / 4) === index ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300'
                                }`}
                                aria-label={`Sayfa ${index + 1}`}
                                disabled={isAnimating}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Galeri Modal */}
            {showGalleryModal && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
                    <div className="relative w-full max-w-4xl mx-auto">
                        {/* Kapat düğmesi */}
                        <button
                            onClick={closeGallery}
                            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
                            aria-label="Kapat"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Görsel */}
                        <div className="relative bg-black flex items-center justify-center">
                            <img
                                src={galleryImages[currentImageIndex].path}
                                alt={galleryImages[currentImageIndex].alt}
                                className="max-h-[80vh] object-contain"
                            />
                        </div>

                        {/* Navigasyon düğmeleri */}
                        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4">
                            <button
                                onClick={prevImage}
                                className="bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
                                aria-label="Önceki resim"
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
                                aria-label="Sonraki resim"
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Resim bilgisi ve sayaç */}
                        <div className="text-center py-4 text-white">
                            <p className="font-medium">{galleryImages[currentImageIndex].alt}</p>
                            <p className="text-sm text-gray-300">{currentImageIndex + 1} / {galleryImages.length}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EskihisarCesmesiPage;