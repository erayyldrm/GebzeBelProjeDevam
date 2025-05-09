import React, { useEffect, useState } from 'react';

// Interface for the mayor data structure based on BaskanEntity
interface Baskan {
    id: number;
    resimUrl1: string; // Main image
    imageUrl2: string; // Signature image
    icerik: string;    // Content field
    delta: number;     // Active status (1 = active, 0 = inactive)
    kategori: string;  // Category (baskan, misyon, etc.)
}

const BaskanPage: React.FC = () => {
    const [baskan, setBaskan] = useState<Baskan | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        console.log("Fetching active mayor data...");
        // Fetch active mayor data using the category endpoint
        fetch("http://localhost:8080/api/kurumsal/baskan/active")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                // The endpoint returns a list, so we need to take the first active mayor
                // Assuming there should be only one active mayor at a time
                if (Array.isArray(data) && data.length > 0) {
                    setBaskan(data[0]);
                } else {
                    setError("Aktif başkan bilgisi bulunamadı.");
                }
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching mayor data:", error);
                setError("Başkan bilgisi yüklenirken bir hata oluştu. Lütfen tekrar deneyin.");
                setIsLoading(false);
            });
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
    if (!baskan) {
        return (
            <div className="bg-warning border-left-4 border-warning text-dark p-4 rounded shadow-md max-w-4xl mx-auto my-4">
                <p className="font-weight-bold">Uyarı</p>
                <p>Aktif başkan bilgisi bulunamadı.</p>
            </div>
        );
    }

    return (
        <div id="pcoded" className="pcoded">
            <div className="pcoded-container navbar-wrapper bg-transparent">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <div className="flex justify-center">
                                            {/* Reduced max width and added more padding */}
                                            <div className="w-full max-w-4xl px-8 md:px-12">
                                                {/* Content */}
                                                <div className="my-4">
                                                    <div className="card bg-white shadow-lg rounded-lg">
                                                        <div className="p-4 md:p-6">
                                                            {/* Image */}
                                                            <div className="mb-2"> {/* Added margin-bottom */}
                                                                <img
                                                                    src={baskan.resimUrl1}
                                                                    alt="Belediye Başkanı"
                                                                    className="img-fluid rounded w-full h-auto object-cover"
                                                                    onError={(e) => {
                                                                        const target = e.target as HTMLImageElement;
                                                                        target.src = "/api/placeholder/800/400";
                                                                    }}
                                                                />
                                                            </div>
                                                            <h3 className="mt-2 mb-3 text-center"><b>Zinnur BÜYÜKGÖZ</b></h3>

                                                            {/* Text */}
                                                            <div className="text mb-10 md:mb-20 lg:mb-40">
                                                                <div dangerouslySetInnerHTML={{ __html: baskan.icerik }} />
                                                            </div>

                                                            {/* Signature */}
                                                            <div className="mt-4 flex justify-end">
                                                                <img
                                                                    src={baskan.imageUrl2}
                                                                    alt="imza"
                                                                    className="max-w-[180px] h-auto"
                                                                    onError={(e) => {
                                                                        const target = e.target as HTMLImageElement;
                                                                        target.src = "/api/placeholder/200/100";
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> {/* End of Row */}
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

export default BaskanPage;