import React, { useState, useEffect } from 'react';

const BusinessTaxation: React.FC = () => {
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

    // Responsive breakpoints
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 992;
    const isDesktop = windowWidth >= 992;

    return (
        <div
            className="page-wrapper"
            style={{
                boxShadow: '0 0 40px rgba(0, 0, 0, 0.25)',
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
                    <div className="close-btn"><span className="icon far fa-times-circle"></span></div>
                </div>
                <div className="nav-overlay">
                    <div className="cursor"></div>
                    <div className="cursor-follower"></div>
                </div>
            </header>

            {/* Search Popup */}
            <div id="search-popup" className="search-popup">
                <div className="close-search theme-btn"><span className="far fa-times-circle"></span></div>
                <div className="popup-inner">
                    <div className="overlay-layer"></div>
                    <div className="search-form">
                        <form method="post" action="#">
                            <div className="form-group">
                                <fieldset>
                                    <input type="search" className="form-control" name="search-input" placeholder="Search Here" required />
                                    <input type="submit" value="Search Now!" className="theme-btn" />
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

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
                <div className="auto-container" style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 15px'
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
                                    İlkelerimiz
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sidebar Page Container */}
            <section className="sidebar-page-container" style={{
                padding: isMobile ? '40px 0' : isTablet ? '60px 0' : '80px 0',
            }}>
                <div className="auto-container" style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 15px'
                }}>
                    <div className="row justify-content-center" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <div className="col-lg-8" style={{
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
                                <div className="text mb-40" style={{
                                    marginBottom: isMobile ? '20px' : isTablet ? '30px' : '40px',
                                }}>
                                    <ul style={{
                                        fontSize: isMobile ? '16px' : isTablet ? '17px' : '18px',
                                        lineHeight: '1.8',
                                        paddingLeft: 0,
                                        listStylePosition: 'inside',
                                        textAlign: isMobile ? 'left' : 'justify',
                                        display: 'inline-block',
                                        width: '100%',
                                        margin: 0,
                                    }}>
                                        <li style={{ marginBottom: isMobile ? '10px' : '15px' }}>Tüm hizmetlerimizde Gebze halkının ihtiyaç ve beklentilerini merkeze koyarız.</li>
                                        <li style={{ marginBottom: isMobile ? '10px' : '15px' }}>Gebzelilerin karar alma süreçlerine aktif katılımını destekler, birlikte yönetim anlayışını uygularız.</li>
                                        <li style={{ marginBottom: isMobile ? '10px' : '15px' }}>Belediye hizmetlerinde en son bilgi teknolojilerini kullanarak modern ve sürdürülebilir çözümler sunarız.</li>
                                        <li style={{ marginBottom: isMobile ? '10px' : '15px' }}>Gebze'nin yeşil alanlarını koruyarak, çevre dostu projeleri hayata geçiririz.</li>
                                        <li style={{ marginBottom: isMobile ? '10px' : '15px' }}>Tüm çalışmalarımızda yasal mevzuat ve etik kurallar çerçevesinde hareket ederiz.</li>
                                        <li style={{ marginBottom: isMobile ? '10px' : '15px' }}>Tüm vatandaşlara eşit hizmet götürmeyi ilke edinir, sosyal adaleti ön planda tutarız.</li>
                                        <li style={{ marginBottom: isMobile ? '10px' : '15px' }}>Gebze'de istihdamı artıracak projeler geliştirerek, yerel esnaf ve girişimcilere destek oluruz.</li>
                                        <li style={{ marginBottom: isMobile ? '10px' : '15px' }}>Belediye personelimizin verimli, mutlu ve güvenli bir ortamda çalışmasını sağlarız.</li>
                                        <li style={{ marginBottom: isMobile ? '10px' : '15px' }}>Gebze'nin geleceğini planlayarak, sorunları oluşmadan çözüm üretmeye çalışırız.</li>
                                        <li style={{ marginBottom: isMobile ? '10px' : '15px' }}>Olası afet ve kriz durumlarına karşı hızlı ve etkin çözümler üreterek, vatandaşlarımızın güvenliğini sağlarız.</li>
                                        <li style={{ marginBottom: isMobile ? '10px' : '15px' }}>Gebze'de sürdürülebilir ve akıcı bir ulaşım ağı kurarak, trafik sorunlarını minimize etmeyi hedefleriz.</li>
                                        <li style={{ marginBottom: isMobile ? '10px' : '15px' }}>Gebze'nin tarihi ve kültürel dokusunu koruyarak, gelecek nesillere aktarmak için projeler üretiriz.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll to top */}
            <div
                className="scroll-to-top scroll-to-target"
                data-target="html"
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    width: isMobile ? '40px' : isTablet ? '45px' : '50px',
                    height: isMobile ? '40px' : isTablet ? '45px' : '50px',
                    borderRadius: '50%',
                    backgroundColor: '#f7f7f7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 99,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                }}
            >
                <span className="icon-arrow"></span>
            </div>
        </div>
    );
};

export default BusinessTaxation;

export const GovernliaHeadContent: React.FC = () => {
    React.useEffect(() => {
        const scripts = [
            'assets/js/jquery.js',
            'assets/js/popper.min.js',
            'assets/js/bootstrap.min.js',
            'assets/js/bootstrap-select.min.js',
            'assets/js/jquery.fancybox.js',
            'assets/js/isotope.js',
            'assets/js/owl.js',
            'assets/js/appear.js',
            'assets/js/wow.js',
            'assets/js/lazyload.js',
            'assets/js/scrollbar.js',
            'assets/js/TweenMax.min.js',
            'assets/js/swiper.min.js',
            'assets/js/jquery.polyglot.language.switcher.js',
            'assets/js/jquery.ajaxchimp.min.js',
            'assets/js/parallax-scroll.js',
            'assets/js/script.js'
        ];

        scripts.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
        });
    }, []);

    return null;
};