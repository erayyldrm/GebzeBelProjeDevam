import React from 'react';

const BusinessTaxation: React.FC = () => {
    return (
        <div
            className="page-wrapper"
            style={{
                boxShadow: '0 0 40px rgba(0, 0, 0, 0.25)', // Sayfanın arkasına gölge
                position: 'relative',
                zIndex: 1,
                margin: '0 auto', // Sayfanın tam ortalanması
                maxWidth: '1200px', // Sağ-sol genişlik sınırlaması (navbar hizası)
                padding: '0 20px', // Sağ-sol içerik boşlukları (sidebar ile içerik arası)
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
            <section className="page-title" style={{ backgroundImage: 'url(/images/kurumsal/gebze.jpg)' }}>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="content-wrapper text-center">
                            <div className="title">
                                <h1 style={{
                                    color: "#fff",
                                    fontSize: "72px",
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
            <section className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div
                                className="depertment-details shadow p-4"
                                style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "12px",
                                    textAlign: "center",
                                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
                                }}
                            >
                                <div className="text mb-40">
                                    <ul style={{
                                        fontSize: '18px',
                                        lineHeight: '1.8',
                                        paddingLeft: 0,
                                        listStylePosition: 'inside',
                                        textAlign: 'justify',
                                        display: 'inline-block'
                                    }}>
                                        <li>Tüm hizmetlerimizde Gebze halkının ihtiyaç ve beklentilerini merkeze koyarız.</li>
                                        <li>Gebzelilerin karar alma süreçlerine aktif katılımını destekler, birlikte yönetim anlayışını uygularız.</li>
                                        <li>Belediye hizmetlerinde en son bilgi teknolojilerini kullanarak modern ve sürdürülebilir çözümler sunarız.</li>
                                        <li>Gebze’nin yeşil alanlarını koruyarak, çevre dostu projeleri hayata geçiririz.</li>
                                        <li>Tüm çalışmalarımızda yasal mevzuat ve etik kurallar çerçevesinde hareket ederiz.</li>
                                        <li>Tüm vatandaşlara eşit hizmet götürmeyi ilke edinir, sosyal adaleti ön planda tutarız.</li>
                                        <li>Gebze’de istihdamı artıracak projeler geliştirerek, yerel esnaf ve girişimcilere destek oluruz.</li>
                                        <li>Belediye personelimizin verimli, mutlu ve güvenli bir ortamda çalışmasını sağlarız.</li>
                                        <li>Gebze’nin geleceğini planlayarak, sorunları oluşmadan çözüm üretmeye çalışırız.</li>
                                        <li>Olası afet ve kriz durumlarına karşı hızlı ve etkin çözümler üreterek, vatandaşlarımızın güvenliğini sağlarız.</li>
                                        <li>Gebze’de sürdürülebilir ve akıcı bir ulaşım ağı kurarak, trafik sorunlarını minimize etmeyi hedefleriz.</li>
                                        <li>Gebze’nin tarihi ve kültürel dokusunu koruyarak, gelecek nesillere aktarmak için projeler üretiriz.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll to top */}
            <div className="scroll-to-top scroll-to-target" data-target="html"><span className="icon-arrow"></span></div>
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