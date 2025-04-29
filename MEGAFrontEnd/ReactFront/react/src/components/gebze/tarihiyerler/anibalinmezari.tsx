import { useState, useEffect } from "react";
import { MapPin, ChevronRight, ChevronLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AnibalinMezariPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState(0);

    // Galeri resimleri
    const galleryImages = [
        { id: 1, path: "/images/gebze/tarihiyerler/anibal/sub1.jpg", alt: "AnibalinMezari görünüm 1" },
        { id: 2, path: "/images/gebze/tarihiyerler/anibal/sub2.JPG", alt: "AnibalinMezari görünüm 2" },
        { id: 3, path: "/images/gebze/tarihiyerler/anibal/sub3.jpg", alt: "AnibalinMezari görünüm 3" },
        { id: 4, path: "/images/gebze/tarihiyerler/anibal/sub4.JPG", alt: "AnibalinMezari görünüm 4" }
    ];

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
        if (lightboxOpen) return; // Lightbox açıkken otomatik geçişi durdur

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
    }, [lightboxOpen]);

    // Klavye olaylarını dinle (lightbox için)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;

            if (e.key === "Escape") {
                setLightboxOpen(false);
            } else if (e.key === "ArrowRight") {
                nextLightboxImage();
            } else if (e.key === "ArrowLeft") {
                prevLightboxImage();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxOpen, lightboxImage]);

    // Lightbox kontrolü
    const openLightbox = ({index}: { index: any }) => {
        setLightboxImage(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextLightboxImage = () => {
        setLightboxImage((prev) => (prev + 1) % galleryImages.length);
    };

    const prevLightboxImage = () => {
        setLightboxImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

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
                    src="/images/gebze/tarihiyerler/anibal/sub1.jpg"
                    alt="AnibalinMezari"
                    className="h-full w-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl bg-[#022842]/60 font-bold text-white mb-4 rounded-xl px-2 py-2 inline-block">
                        ANİBALIN MEZARI
                    </h1>

                    <div className="flex items-center text-white bg-[#022842] px-4 py-2 rounded-full">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>Gebze, Kocaeli</span>
                    </div>
                </div>
            </div><br/>

            {/* Content Section */}
            <div className="container mx-auto px-3 py-9">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-2/3">
                                <h2 className="text-2xl font-bold text-blue-800 mb-4">Tarihçe ve Genel Bilgi</h2>
                                <div className="prose max-w-none text-gray-700">
                                    <p className="mb-4 text-justify">
                                        Gebze Anibal Mezarı, Kocaeli'nin Gebze ilçesinde, Eskihisar Kalesi yakınlarında yer alan tarihi bir anıttır.
                                        MÖ 183 yılında ölen ünlü Kartacalı komutan Anibal Barca'ya ithafen yapılmıştır.
                                        Anibal, Roma İmparatorluğu'nun en büyük düşmanlarından biri olarak kabul edilir ve özellikle II. Pön Savaşı'ndaki cesur taktikleriyle tarihe geçmiştir.

                                        Mustafa Kemal Atatürk, Anibal'in askeri dehasını takdir ederek onun anısını yaşatmak istemiş ve 1930'lu yıllarda bu sembolik mezarın yapılmasını sağlamıştır.
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Aktiviteler</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">🧭 Tarihi Gezi</h3>
                                            <p className="text-gray-700 text-justify">
                                                Anibal'in anıt mezarını ve çevresindeki Eskihisar Kalesi gibi tarihi yapıları gezebilirsiniz.
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">📸 Fotoğrafçılık</h3>
                                            <p className="text-gray-700 text-justify">
                                                Çevredeki doğal patikalarda kısa yürüyüşler yapabilir, doğayla baş başa kalabilirsiniz.
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">📖 Panolarını İnceleme</h3>
                                            <p className="text-gray-700 text-justify">
                                                Anıt çevresinde yer alan panolar aracılığıyla Anibal'in hayatı ve ölümü hakkında bilgi edinebilirsiniz.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/3">
                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-blue-800 mb-4">🚗 Nasıl Gidilir?</h3>
                                    <p className="text-gray-700 mb-4 text-justify">
                                        İstanbul'dan özel araçla TEM Otoyolu üzerinden yaklaşık 45 dakikalık bir yolculukla
                                        ulaşılabilir. Gebze merkeze 15 km mesafededir.
                                    </p>
                                    <a
                                        href="https://www.google.com/maps/place/Hannibal+an%C4%B1t%C4%B1/@40.782282,29.4417079,628m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14cb2042af222be3:0xd11c044aa3d2711!8m2!3d40.782282!4d29.4417079!16s%2Fg%2F11cftyh3b?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-blue-600 text-black px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        <MapPin className="w-5 h-5 mr-2" />
                                        Haritada Gör
                                    </a>
                                </div>

                                {/* Galeri */}
                                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">🖼️ Galeri</h3>
                                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                                        {galleryImages.map((item, index: number) => (
                                            <div
                                                key={item.id}
                                                className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                                                onClick={() => openLightbox({index: index})}
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

                {/* Lightbox */}
                {lightboxOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                            aria-label="Kapat"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <button
                            onClick={prevLightboxImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-colors"
                            aria-label="Önceki"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={lightboxImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="max-w-4xl max-h-[80vh] p-2"
                            >
                                <img
                                    src={galleryImages[lightboxImage].path}
                                    alt={galleryImages[lightboxImage].alt}
                                    className="max-w-full max-h-[80vh] object-contain mx-auto"
                                />
                                <p className="text-white text-center mt-4">
                                    {lightboxImage + 1} / {galleryImages.length} - {galleryImages[lightboxImage].alt}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <button
                            onClick={nextLightboxImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-colors"
                            aria-label="Sonraki"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                )}

                {/* Diğer Tarihi Yerler Slider */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">DİĞER TARİHİ YERLER</h2>

                    <div className="relative">
                        <button
                            onClick={prevSlide}
                            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 disabled:opacity-50"
                            aria-label="Önceki"
                            disabled={isAnimating}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="overflow-hidden min-h-[350px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.6 }}
                                    className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                                >
                                    {visiblePlaces().map((place, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col"
                                        >
                                            <div className="h-55 overflow-hidden">
                                                <img
                                                    src={place.imagePath}
                                                    alt={place.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
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
                                </motion.div>
                            </AnimatePresence>
                        </div><br/>

                        <button
                            onClick={nextSlide}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 disabled:opacity-50"
                            aria-label="Sonraki"
                            disabled={isAnimating}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnibalinMezariPage;