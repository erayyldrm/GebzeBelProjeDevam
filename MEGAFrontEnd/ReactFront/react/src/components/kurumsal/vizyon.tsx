import React, { useState, useEffect } from 'react';

const VisionPage: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200
    );

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Responsive breakpoints
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 992;
    const isDesktop = windowWidth >= 992;

    return (
        <div
            className="page-wrapper"
            style={{
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#fff',
                position: 'relative',
                zIndex: 1,
                margin: '0 auto',
                maxWidth: isDesktop ? '1100px' : '100%',
                padding: isMobile ? '0 15px' : '0 20px',
            }}
        >
            {/* Main Header */}
            <header className="main-header header-style-one">
                {/* Mobile Menu */}
                <div className="mobile-menu">
                    <div className="menu-backdrop"></div>
                    <div className="close-btn">
                        <span className="icon far fa-times-circle"></span>
                    </div>
                </div>
                {/* End Mobile Menu */}

                <div className="nav-overlay">
                    <div className="cursor"></div>
                    <div className="cursor-follower"></div>
                </div>
            </header>
            {/* End Main Header */}

            {/* Page Title */}
            <section
                className="page-title"
                style={{
                    backgroundImage: 'url(/images/kurumsal/gebze.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: isMobile ? '40px 0' : isTablet ? '60px 0' : '80px 0',
                }}
            >
                <div
                    className="auto-container"
                    style={{
                        width: '100%',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 15px',
                    }}
                >
                    <div className="content-box">
                        <div className="content-wrapper">
                            <div className="title">
                                <h1
                                    style={{
                                        color: '#fff',
                                        fontSize: isMobile
                                            ? '36px'
                                            : isTablet
                                                ? '54px'
                                                : '72px',
                                        fontFamily: 'Poppins, sans-serif',
                                        fontWeight: 600,
                                        letterSpacing: '1px',
                                        textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
                                        marginBottom: '20px',
                                    }}
                                >
                                    Vizyonumuz
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sidebar Page Container */}
            <section
                className="sidebar-page-container"
                style={{
                    padding: isMobile ? '40px 0' : isTablet ? '60px 0' : '80px 0',
                }}
            >
                <div
                    className="auto-container"
                    style={{
                        width: '100%',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 15px',
                    }}
                >
                    <div
                        className="row justify-content-center"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        <div
                            className="col-lg-8"
                            style={{
                                width: isDesktop ? '66.66667%' : '100%',
                                padding: '0 15px',
                            }}
                        >
                            <div
                                className="depertment-details shadow p-4"
                                style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                                    padding: isMobile ? '15px' : isTablet ? '20px' : '25px',
                                }}
                            >
                                <div
                                    className="text mb-40"
                                    style={{
                                        marginBottom: isMobile
                                            ? '20px'
                                            : isTablet
                                                ? '30px'
                                                : '40px',
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: isMobile
                                                ? '16px'
                                                : isTablet
                                                    ? '17px'
                                                    : '18px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        Gebze'yi sadece bir yaşam alanı olarak değil, geçmişten
                                        gelen zengin kültürel mirasını koruyan, tarihi dokusunu
                                        yaşatan ve aynı zamanda modern şehircilik anlayışıyla
                                        geleceğe taşıyan örnek bir kent haline getirmek temel
                                        hedefimizdir. Bu doğrultuda, şehircilik anlayışımızı
                                        sürdürülebilirlik, çevreye duyarlılık, sosyal bütünleşme
                                        ve katılımcı yönetişim ilkeleri üzerine inşa ederek, her
                                        yaştan ve her kesimden vatandaşımızın yaşam kalitesini
                                        artırmayı amaçlıyoruz. Teknolojik altyapıyı güçlendirerek
                                        akıllı şehir uygulamalarını hayata geçirmek, yeşil
                                        alanları artırarak doğayla iç içe bir yaşam sunmak ve
                                        modern ulaşım ağlarıyla kent içi hareketliliği
                                        kolaylaştırmak en büyük önceliklerimiz arasındadır. Gebze'yi
                                        ekonomik, sosyal ve kültürel olarak daha yaşanabilir bir
                                        kent haline getirmek için yenilikçi belediyecilik
                                        anlayışıyla çalışmalarımızı sürdürerek, sadece bugünün
                                        değil, geleceğin de şehir modelini inşa etmeye devam
                                        edeceğiz.
                                    </p>
                                </div>
                                <div
                                    className="text"
                                    style={{
                                        fontSize: isMobile
                                            ? '16px'
                                            : isTablet
                                                ? '17px'
                                                : '18px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Geleceğin Gebze'sini inşa ederken, insanı merkeze alan, tarihi
                                    değerlerine sahip çıkan ve modern şehircilik ilkeleriyle
                                    bütünleşmiş bir kent vizyonuyla, sürdürülebilir ve yaşanabilir
                                    bir şehir oluşturma yolunda kararlılıkla çalışmaya devam
                                    edeceğiz.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisionPage;