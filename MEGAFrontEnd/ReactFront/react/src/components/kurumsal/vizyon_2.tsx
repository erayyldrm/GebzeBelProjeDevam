import React from 'react';

const VisionPage: React.FC = () => {
    return (
        <div
            className="page-wrapper"
            style={{
                boxShadow: '0 0 40px rgba(0, 0, 0, 0.25)', // Sayfanın arkasına gölge
                backgroundColor: '#fff', // Gölge belli olsun diye beyaz zemin
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
                                <h1 style={{
                                    color: "#fff",
                                    fontSize: "72px",
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 600,
                                    letterSpacing: "1px",
                                    textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                                    marginBottom: "20px"
                                }}>
                                    Vizyonumuz
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
                                        Gebze'yi sadece bir yaşam alanı olarak değil, geçmişten gelen zengin kültürel mirasını koruyan,
                                        tarihi dokusunu yaşatan ve aynı zamanda modern şehircilik anlayışıyla geleceğe taşıyan örnek bir
                                        kent haline getirmek temel hedefimizdir. Bu doğrultuda, şehircilik anlayışımızı sürdürülebilirlik,
                                        çevreye duyarlılık, sosyal bütünleşme ve katılımcı yönetişim ilkeleri üzerine inşa ederek, her yaştan
                                        ve her kesimden vatandaşımızın yaşam kalitesini artırmayı amaçlıyoruz. Teknolojik altyapıyı güçlendirerek
                                        akıllı şehir uygulamalarını hayata geçirmek, yeşil alanları artırarak doğayla iç içe bir yaşam sunmak ve
                                        modern ulaşım ağlarıyla kent içi hareketliliği kolaylaştırmak en büyük önceliklerimiz arasındadır.
                                        Gebze’yi ekonomik, sosyal ve kültürel olarak daha yaşanabilir bir kent haline getirmek için yenilikçi
                                        belediyecilik anlayışıyla çalışmalarımızı sürdürerek, sadece bugünün değil, geleceğin de şehir modelini
                                        inşa etmeye devam edeceğiz.
                                    </p>
                                </div>
                                <div className="text" style={{ fontSize: '18px', textAlign: 'left' }}>
                                    Geleceğin Gebze’sini inşa ederken, insanı merkeze alan, tarihi değerlerine sahip çıkan ve modern şehircilik ilkeleriyle
                                    bütünleşmiş bir kent vizyonuyla, sürdürülebilir ve yaşanabilir bir şehir oluşturma yolunda kararlılıkla çalışmaya devam edeceğiz.
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

export default VisionPage;

// Head content loader
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
        return () => {};
    }, []);

    return null;
};
