import React from 'react';

const BusinessTaxation: React.FC = () => {
    return (
        <div className="page-wrapper">


            {/* Main Header */}
            <header className="main-header header-style-one">
                {/* Mobile Menu */}
                <div className="mobile-menu">
                    <div className="menu-backdrop"></div>
                    <div className="close-btn"><span className="icon far fa-times-circle"></span></div>

                    <nav className="menu-box">
                        <div className="nav-logo">
                            <a href="index.html">
                                <img src="assets/images/logo.png" alt="" title="" />
                            </a>
                        </div>
                        <div className="menu-outer">{/* Menu will come automatically via Javascript */}</div>
                        {/* Social Links */}
                        <div className="social-links">
                            <ul className="clearfix">
                                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                                <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                                <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                {/* End Mobile Menu */}

                <div className="nav-overlay">
                    <div className="cursor"></div>
                    <div className="cursor-follower"></div>
                </div>
            </header>
            {/* End Main Header */}

            {/* Search Popup */}
            <div id="search-popup" className="search-popup">
                <div className="close-search theme-btn"><span className="far fa-times-circle"></span></div>
                <div className="popup-inner">
                    <div className="overlay-layer"></div>
                    <div className="search-form">
                        <form method="post" action="https://html.tonatheme.com/2021/Governlia/index.html">
                            <div className="form-group">
                                <fieldset>
                                    <input type="search" className="form-control" name="search-input" value="" placeholder="Search Here" required />
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
                        <div className="content-wrapper">
                            <div className="title">
                                <h1 style={{ color: "white", fontSize: "180px", fontFamily: "Poppins" }}>İlkelerimiz</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sidebar Page Container */}
            <section className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-8 order-lg-2">
                            <div className="depertment-details pl-5">

                                <div className="text mb-40">
                                    <ul style={{ fontSize: '20px' }}>
                                        <li>Tüm hizmetlerimizde Gebze halkının ihtiyaç ve beklentilerini merkeze koyarız.</li>
                                        <li>Gebzelilerin karar alma süreçlerine aktif katılımını destekler, birlikte yönetim anlayışını uygularız.</li>
                                        <li>Belediye hizmetlerinde en son bilgi teknolojilerini kullanarak modern ve sürdürülebilir çözümler sunarız.</li>
                                        <li>Gebze’nin yeşil alanlarını koruyarak, çevre dostu projeleri hayata geçiririz.</li>
                                        <li>Tüm çalışmalarımızda yasal mevzuat ve etik kurallar çerçevesinde hareket ederiz.</li>
                                        <li>Tüm vatandaşlara eşit hizmet götürmeyi ilke edinir, sosyal adaleti ön planda tutarız.</li>
                                        <li>Gebze’de istihdamı artıracak projeler geliştirerek, yerel esnaf ve girişimcilere destek oluruz.</li>
                                        <li>Belediye personelimizin verimli, mutlu ve güvenli bir ortamda çalışmasını sağlarız.</li>
                                        <li>Gebze’nin geleceğini planlayarak, sorunları oluşmadan çözüm üretmeye çalışırız.</li>
                                        <li>Gebze’de istihdamı artıracak projeler geliştirerek, yerel esnaf ve girişimcilere destek oluruz.</li>
                                        <li>Gebze’nin geleceğini planlayarak, sorunları oluşmadan çözüm üretmeye çalışırız.</li>
                                        <li>Olası afet ve kriz durumlarına karşı hızlı ve etkin çözümler üreterek, vatandaşlarımızın güvenliğini sağlarız.</li>
                                        <li>Gebze’de sürdürülebilir ve akıcı bir ulaşım ağı kurarak, trafik sorunlarını minimize etmeyi hedefleriz.</li>
                                        <li>Gebze’nin tarihi ve kültürel dokusunu koruyarak, gelecek nesillere aktarmak için projeler üretiriz.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <aside className="sidebar sidebar-style-two">
                                <div className="widget widget_categories">
                                    <h3 className="widget-title">Bütün Projeler</h3>
                                    <div className="widget-content">
                                        <ul className="categories-list">
                                            <li className="current"><a href="business-taxation.html"><i className="icon-line-chart"></i> İşletme ve Vergilendirme</a></li>
                                            <li><a href="law-justice.html"><i className="icon-shield"></i> Hukuk, Adalet ve Polis</a></li>
                                            <li><a href="government-election.html"><i className="icon-election"></i> Hükümet ve Seçimler</a></li>
                                            <li><a href="pets-area.html"><i className="icon-pets"></i> Evcil Hayvanlar ve Yaban Hayatı</a></li>
                                            <li><a href="employment-jo.html"><i className="icon-suitcase"></i> İstihdam ve İşler</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Footer */}


            {/* Scroll to top */}
            <div className="scroll-to-top scroll-to-target" data-target="html"><span className="icon-arrow"></span></div>
        </div>
    );
};

export default BusinessTaxation;

// To add to your main component where you want to include the head content
export const GovernliaHeadContent: React.FC = () => {
    React.useEffect(() => {
        // You can dynamically add scripts and styles using useEffect
        const loadScripts = () => {
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
        };

        loadScripts();

        // Cleanup function to remove scripts when component unmounts
        return () => {
            // Optional: Remove scripts if needed
        };
    }, []);

    return null;
};