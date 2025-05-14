import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CouncilMember {
    id: number;
    isimSoyisim: string;
    resimUrl: string;
    gorev: string;
    siraNo: number;
}

const MunicipalityCouncil: React.FC = () => {
    const [councilMembers, setCouncilMembers] = useState<CouncilMember[]>([]);
    const [mayor, setMayor] = useState<CouncilMember | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:8080/api/kurumsal/belediyemeclisi")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // API artık sadece belediye meclisi üyelerini döndürecektir
                // Ayrıştırma: Başkan ve Meclis Üyeleri
                const mayorData = data.find((member: CouncilMember) => member.gorev === 'Başkan');
                const membersData = data.filter((member: CouncilMember) => member.gorev !== 'Başkan');
                
                setMayor(mayorData || null);
                setCouncilMembers(membersData);
                setIsLoading(false);
                
                console.log("Belediye Meclisi Verileri:", data);
            })
            .catch(err => {
                console.error("Belediye Meclisi verileri yüklenirken hata oluştu:", err);
                setError("Veriler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
                setIsLoading(false);
            });
    }, []);

    // Person card component
    const PersonCard: React.FC<{ person: CouncilMember; isPresident?: boolean }> = ({ person, isPresident = false }) => {
        const cardClasses = isPresident ? "max-w-md mb-10" : "max-w-xs mb-5";
        const imgClasses = isPresident ? "h-[300px] w-[300px] object-cover" : "h-36 w-full object-cover";
        return (
            <div className={`bg-white rounded-lg shadow-md overflow-hidden ${cardClasses}`}>
                <div className="text-center">
                    <div className="relative">
                        <img
                            src={person.resimUrl}
                            alt={person.isimSoyisim}
                            className={imgClasses}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/api/placeholder/250/230";
                            }}
                        />
                    </div>
                    <div className="p-4">
                        <h4 className="text-lg font-medium text-gray-800">{person.isimSoyisim}</h4>
                        <div className="mt-2">
                            <span className="text-gray-600 font-medium">{person.gorev}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Yükleme durumu
    if (isLoading) {
        return (
            <div className="min-h-screen bg-white p-4 flex justify-center items-center">
                <div className="animate-pulse text-center">
                    <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
                    <div className="h-64 w-64 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                        {Array(8).fill(0).map((_, index) => (
                            <div key={index} className="bg-gray-300 h-48 rounded-lg"></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Hata durumu
    if (error && !mayor && councilMembers.length === 0) {
        return (
            <div className="min-h-screen bg-white p-4 flex justify-center items-center">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
                    <strong className="font-bold">Hata!</strong>
                    <span className="block sm:inline"> {error}</span>
                    <button 
                        className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => window.location.reload()}
                    >
                        Yenile
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div id="pcoded" className="pcoded min-h-screen bg-white shadow-2xl p-4">
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <div className="flex flex-row gap-4">
                                            {/* Ana İçerik Alanı */}
                                            <div className="flex-1 p-4">
                                                {/* İçeriği kutuya al */}
                                                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                                                    {/* Başlık */}
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.6 }}
                                                        className="mb-8 text-center"

                                                    >
                                                        <div className="text-4xl text-white font-bold px-5 py-3 rounded-2xl"
                                                             style={{ background: 'linear-gradient(180deg, #003366 0%, #00264d 100%)' }}>
                                                            BELEDİYE MECLİSİ
                                                        </div>
                                                    </motion.div>

                                                    {/* Mayor Section */}
                                                    {mayor && (
                                                        <div className="flex justify-center mb-8">
                                                            <PersonCard person={mayor} isPresident={true} />
                                                        </div>
                                                    )}

                                                    {/* Council Members Grid */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                                        {councilMembers.map((member, index) => (
                                                            <PersonCard key={index} person={member} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default MunicipalityCouncil;
