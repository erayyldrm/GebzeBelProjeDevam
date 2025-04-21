import React, { useState, useEffect } from 'react';

const EtikKomisyonu: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 992;
    const isDesktop = windowWidth >= 992;

    const etikDavranisIlkeleri = [
        "Halka Hizmet Bilinci",
        "Hizmet Standartlarına Uymak",
        "Amaç ve Misyona Bağlılık",
        "Dürüstlük ve Tarafsızlık",
        "Saygınlık ve Güven",
        "Nezaket ve Saygı",
        "Ayrımcılık Yapmamak",
        "Saydamlık ve Katılımcılık",
        "Hediye Almamak",
        "Kamu Mallarını Korumak",
        "Savurganlıktan Kaçınmak",
        "Çıkar Çatışmasından Kaçınmak",
        "Hesap Verme Sorumluluğu",
        "İmtiyazsız Kamu Hizmeti",
        "Doğruluk"
    ];

    const etikKomisyonuListesi = [
        {
            adSoyad: 'Ahmet HÜSEYİNÇELEBİ',
            unvan: 'Başkan Yardımcısı',
            gorev: 'Komisyon Başkanı',
        },
        {
            adSoyad: 'İmran AYYILDIZ',
            unvan: 'İnsan Kaynakları ve Eğitim Müdür V.',
            gorev: 'Komisyon Üyesi',
        },
        {
            adSoyad: 'Bilgin ALTAY',
            unvan: 'Mali Hizmetler Müdür V.',
            gorev: 'Komisyon Üyesi',
        }
    ];

    const contentWrapperStyle = {
        width: '100vw',
        position: 'relative' as const,
        marginLeft: 'calc(-50vw + 50%)',
    };

    return (
        <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', backgroundColor: '#f9f9f9' }}>
            <div style={contentWrapperStyle}>
                <div
                    className="page-wrapper mt-3"
                    style={{
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                        backgroundColor: '#fff',
                        borderRadius: '12px',
                        position: 'relative',
                        zIndex: 1,
                        maxWidth: isDesktop ? '1000px' : '100%',
                        padding: isMobile ? '0 15px' : '0 20px',
                        overflow: 'hidden',
                        margin: '0 auto',
                    }}
                >
                    <section
                        className="page-title"
                        style={{
                            backgroundImage: 'url(/images/kurumsal/gebze.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            padding: isMobile ? '40px 0' : isTablet ? '60px 0' : '80px 0',
                            marginLeft: isMobile ? '-15px' : isTablet ? '-30px' : '-50px',
                            width: isMobile ? 'calc(100% + 30px)' : isTablet ? 'calc(100% + 60px)' : 'calc(100% + 100px)',
                        }}
                    >
                        <div className="auto-container mt-3" style={{
                            width: '100%',
                            maxWidth: '1000px',
                            margin: '0 auto',
                            padding: isMobile ? '0 15px' : isTablet ? '0 30px' : '0 50px'
                        }}>
                            <div className="content-box">
                                <div className="content-wrapper text-center">
                                    <div className="title">
                                        <h1 style={{
                                            color: "#fff",
                                            fontSize: isMobile ? "36px" : isTablet ? "54px" : "72px",
                                            fontFamily: "Poppins, sans-serif",
                                            fontWeight: 600,
                                            letterSpacing: "1px",
                                            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                                            marginBottom: "20px"
                                        }}>
                                            Etik Komisyonu
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="sidebar-page-container" style={{
                        padding: isMobile ? '40px 0' : isTablet ? '60px 0' : '80px 0',
                    }}>
                        <div className="auto-container" style={{
                            width: '100%',
                            maxWidth: '1000px',
                            margin: '0 auto',
                            padding: '0 15px'
                        }}>
                            <div className="row justify-content-center" style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center'
                            }}>
                                <div className="col-lg-12" style={{
                                    width: isDesktop ? '66.66667%' : '100%',
                                    padding: '0 15px',
                                }}>
                                    <div
                                        className="depertment-details shadow p-4"
                                        style={{
                                            backgroundColor: "#ffffff",
                                            borderRadius: "12px",
                                            textAlign: "center",
                                            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                                            padding: isMobile ? '15px' : isTablet ? '20px' : '25px',
                                        }}
                                    >
                                        <div className="mb-10">
                                            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 border-b-2 border-blue-100 pb-3 mb-6">
                                                Etik Davranış İlkeleri
                                            </h2>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                                                {etikDavranisIlkeleri.map((ilke, i) => (
                                                    <li key={i} className="flex items-start gap-2 min-w-0">
                                                        <span className="text-blue-500">✓</span>
                                                        <span>{ilke}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 border-b-2 border-blue-100 pb-3 mb-6 text-center">
                                                Etik Komisyonu Üyeleri
                                            </h2>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-3">
                                                {etikKomisyonuListesi.map((uye, i) => (
                                                    <div
                                                        key={i}
                                                        className="bg-gray-50 p-5 rounded-lg shadow-sm text-center hover:shadow-md transition"
                                                    >
                                                        <h3 className="font-semibold text-lg text-gray-800">{uye.adSoyad}</h3>
                                                        <p className="text-blue-700">{uye.unvan}</p>
                                                        <span className="mt-2 inline-block bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
                                                            {uye.gorev}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default EtikKomisyonu;
