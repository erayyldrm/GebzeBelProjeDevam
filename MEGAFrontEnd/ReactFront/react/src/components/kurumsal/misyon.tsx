import React, { useState, useEffect } from 'react';

// Interface for the mission content based on BaskanEntity
interface Misyon {
    id: number;
    resimUrl1: string; // Main image
    imageUrl2: string; // Logo/signature image
    icerik: string;    // Content field
    delta: number;     // Active status (1 = active, 0 = inactive)
    kategori: string;  // Category (baskan, misyon, etc.)
}

const MisyonPage: React.FC = () => {
    const [misyon, setMisyon] = useState<Misyon | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200
    );

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Fetch mission data from the API
        setIsLoading(true);
        console.log("Fetching active mission data...");

        // Use the general category endpoint instead of a specific mission endpoint
        // This is more likely to work if the backend isn't fully updated yet
        fetch("http://localhost:8080/api/kurumsal/kategori/misyon")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Received mission data:", data); // Debug log
                // The endpoint returns a list, so we need to take the first active mission
                if (Array.isArray(data) && data.length > 0) {
                    setMisyon(data[0]);
                } else {
                    // Temporary fallback for testing - simulate mission data
                    setMisyon({
                        id: 1,
                        resimUrl1: "/images/kurumsal/1.jpg",
                        imageUrl2: "/images/kurumsal/gebze-belediyesi-logo-png_seeklogo-406755.png",
                        icerik: `<p>Gebze Belediyesi olarak, kentimizin yaşam kalitesini artırmak, sürdürülebilir kalkınmayı sağlamak ve vatandaşlarımızın ihtiyaçlarına duyarlı, adil ve etkin hizmetler sunmak en büyük sorumluluklarımız arasındadır.</p>
                        <p>Altyapı ve çevre düzenlemelerinden, sosyal hizmetlere, kültürel ve sanatsal faaliyetlerden, ekonomik kalkınmaya kadar geniş bir yelpazede hizmet sunarak, şehrimizin her alanında gelişimi destekliyoruz.</p>
                        <p>Ulaşım altyapısını iyileştirmek, yeşil alanları artırmak, çevre temizliği ve atık yönetimi gibi konularda çalışmalar yürütürken, sosyal yardımlarla dezavantajlı gruplara destek sağlıyoruz.</p>
                        <p>Eğitim, sağlık ve spor alanlarında projeler geliştirerek her yaştan vatandaşımıza yönelik hizmetler sunuyor, kültürel etkinliklerle şehrimizin tarihi ve sanatsal değerlerini yaşatıyoruz.</p>`,
                        delta: 1,
                        kategori: "misyon"
                    });
                    console.log("No data from API, using fallback data");
                }
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching mission data:", error);
                setError("Misyon bilgisi yüklenirken bir hata oluştu. Lütfen tekrar deneyin.");
                setIsLoading(false);
            });

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Error state
    if (error) return (
        <div className="flex justify-content-center align-items-center min-h-screen p-4 bg-light">
            <div className="w-full max-w-2xl bg-white border-left border-danger rounded shadow-lg overflow-hidden">
                <div className="p-4">
                    <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                            <svg className="h-8 w-8 text-danger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <h2 className="text-lg font-weight-bold text-dark">Hata</h2>
                            <p className="text-secondary">{error}</p>
                            <button
                                className="mt-3 px-4 py-2 bg-danger text-white rounded hover:bg-danger"
                                onClick={() => window.location.reload()}
                            >
                                Yeniden Dene
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Loading state with shimmering effect
    if (isLoading) return (
        <div className="w-full max-w-4xl mx-auto my-4 px-4">
            <div className="bg-white rounded shadow-lg overflow-hidden">
                <div className="animate-pulse">
                    <div className="h-48 bg-secondary w-full"></div>
                    <div className="p-4">
                        <div className="h-6 bg-secondary rounded w-50 mx-auto mb-4"></div>
                        <div className="space-y-3">
                            <div className="h-4 bg-secondary rounded"></div>
                            <div className="h-4 bg-secondary rounded"></div>
                            <div className="h-4 bg-secondary rounded"></div>
                            <div className="h-4 bg-secondary rounded w-75"></div>
                        </div>
                        <div className="h-16 bg-secondary rounded w-25 ml-auto mt-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Empty data state
    if (!misyon) {
        return (
            <div className="bg-warning border-left-4 border-warning text-dark p-4 rounded shadow-md max-w-4xl mx-auto my-4">
                <p className="font-weight-bold">Uyarı</p>
                <p>Aktif misyon bilgisi bulunamadı.</p>
            </div>
        );
    }

    return (
        // Outer container card that wraps everything
        <div className="mt-3 mx-auto bg-white rounded-xl shadow-lg relative z-10 max-w-4xl px-4 md:px-5 py-6 md:py-8">
            <div className="space-y-6">
                {/* Image Card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <img
                        src={misyon.resimUrl1}
                        alt="Misyon Görseli"
                        className="w-full h-auto"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/api/placeholder/800/400";
                        }}
                    />
                </div>

                {/* Text Content Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mt-4">
                    <section className="py-1 md:py-6">
                        <div className="w-full max-w-4xl mx-auto">
                            <h3 className="mb-4 font-sans font-bold text-center tracking-wider">
                                MİSYONUMUZ
                            </h3>

                            <div className="mb-5 md:mb-7 text-sm md:text-base text-justify">
                                <div dangerouslySetInnerHTML={{ __html: misyon.icerik }} />
                            </div>
                            <div className="mt-0 flex justify-end">
                                <img
                                    src={misyon.imageUrl2}
                                    alt="Logo"
                                    className="max-w-[200px] h-auto"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = "/api/placeholder/200/100";
                                    }}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MisyonPage;