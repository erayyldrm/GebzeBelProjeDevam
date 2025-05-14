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

    if (error && !mayor && councilMembers.length === 0) {
        return (
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
    }

    if (isLoading) {
        return (
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                                {Array(8).fill(0).map((_, index) => (
                                    <div key={index} className="bg-secondary h-48 rounded-lg"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
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
                                            <div className="w-full max-w-6xl px-4">
                                                <div className="shadow p-4 bg-white rounded-xl text-center mt-4 mb-6">
                                                    <h1 className="text-xl md:text-3xl font-bold">BELEDİYE MECLİSİ</h1>
                                                </div>
                                                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                                                    {mayor && (
                                                        <div className="flex justify-center mb-8">
                                                            <PersonCard person={mayor} isPresident={true} />
                                                        </div>
                                                    )}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                                        {councilMembers.map((member, index) => (
                                                            <PersonCard key={index} person={member} />
                                                        ))}
                                                    </div>
                                                    {!mayor && councilMembers.length === 0 && (
                                                        <div className="bg-warning border-left-4 border-warning text-dark p-4 rounded shadow-md">
                                                            <p className="font-weight-bold">Uyarı</p>
                                                            <p>Belediye meclisi üye bilgisi bulunamadı.</p>
                                                        </div>
                                                    )}
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
