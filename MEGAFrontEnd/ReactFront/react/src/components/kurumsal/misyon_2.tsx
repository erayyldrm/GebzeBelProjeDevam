import React from 'react';

const BusinessTaxation: React.FC = () => {
    return (
        <div
            className="page-wrapper"
            style={{
                boxShadow: '0 0 40px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#fff',
                position: 'relative',
                zIndex: 1,
            }}
        >

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
                        <div className="menu-outer"></div>
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
                                    color: "white",
                                    fontSize: "120px",
                                    fontFamily: "Poppins",
                                    textShadow: "2px 2px 8px rgba(0,0,0,0.5)"
                                }}>
                                    Misyonumuz
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
                                    <p style={{ fontSize: '18px', textAlign: 'left' }}>
                                        Gebze Belediyesi olarak, kentimizin yaşam kalitesini artırmak, sürdürülebilir
                                        kalkınmayı sağlamak ve vatandaşlarımızın ihtiyaçlarına duyarlı,
                                        adil ve etkin hizmetler sunmak en büyük sorumluluklarımız arasındadır.
                                        Altyapı ve çevre düzenlemelerinden, sosyal hizmetlere, kültürel ve sanatsal faaliyetlerden,
                                        ekonomik kalkınmaya kadar geniş bir yelpazede hizmet sunarak, şehrimizin her alanında
                                        gelişimi destekliyoruz. Ulaşım altyapısını iyileştirmek, yeşil alanları artırmak,
                                        çevre temizliği ve atık yönetimi gibi konularda çalışmalar yürütürken, sosyal
                                        yardımlarla dezavantajlı gruplara destek sağlıyoruz. Eğitim, sağlık ve spor
                                        alanlarında projeler geliştirerek her yaştan vatandaşımıza yönelik hizmetler sunuyor,
                                        kültürel etkinliklerle şehrimizin tarihi ve sanatsal değerlerini yaşatıyoruz.
                                        Yerel ekonomiyi güçlendirmek adına girişimcilere destek verirken,
                                        akıllı şehir teknolojileriyle belediyecilik hizmetlerini dijitalleştirerek halkımıza daha hızlı ve
                                        şeffaf çözümler sunuyoruz. Katılımcı yönetim anlayışımızla,
                                        halkın beklentilerini ön planda tutarak karar alma süreçlerine dahil ediyor ve
                                        kaynaklarımızı etkin kullanarak sürdürülebilir bir belediyecilik anlayışı benimsiyoruz.
                                        Tüm bu çalışmalarımızla Gebze’yi hem bugünün hem de geleceğin modern, yaşanabilir ve
                                        güçlü bir kenti haline getirmek için durmaksızın çalışıyoruz.
                                    </p>
                                </div>

                                <div className="text" style={{ fontSize: '18px', textAlign: 'left' }}>
                                    Ulaşım altyapısını iyileştirmek, yeşil alanları artırmak,
                                    çevre temizliği ve atık yönetimi gibi konularda çalışmalar yürütürken,
                                    sosyal yardımlarla dezavantajlı gruplara destek sağlıyoruz.
                                    Eğitim, sağlık ve spor alanlarında projeler geliştirerek her yaştan vatandaşımıza yönelik hizmetler sunuyor,
                                    kültürel etkinliklerle şehrimizin tarihi ve sanatsal değerlerini yaşatıyoruz.
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

// Scripts loader
export const GovernliaHeadContent: React.FC = () => {
    React.useEffect(() => {
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
    }, []);

    return null;
};
