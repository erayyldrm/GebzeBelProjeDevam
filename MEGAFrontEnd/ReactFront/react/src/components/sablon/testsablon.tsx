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
            <section className="page-title" style={{ backgroundImage: 'url(assets/images/background/bg-9.jpg)' }}>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="content-wrapper">
                            <div className="title">
                                <h1>SAYFA BAŞLIĞI</h1>
                            </div>
                            <ul className="bread-crumb">
                                <li><a href="index.html">Ana Sayfa</a></li>
                                <li>Kurumsal</li>
                                <li>Sayfa</li>
                            </ul>
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
                                <div className="image mb-30"><img src="assets/images/resource/image-52.jpg" alt="" /></div>
                                <div className="text mb-40">
                                    Az yazı
                                    <p>Biraz daha yazı</p>
                                </div>
                                <div className="row mb-30">
                                    <div className="col-md-6">
                                        <div className="image"><img src="assets/images/resource/image-53.jpg" alt="" /></div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="group-title"><h4>Bilgilendirme</h4></div>
                                        <ul className="list">
                                            <li>Listealt1</li>
                                            <li>Listleak2</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 feature-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="icon-train"></span></div>
                                            <div className="content">
                                                <div className="category"><a href="#">Link4</a></div>
                                                <h3>Link yazı</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 feature-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="icon-pets-2"></span></div>
                                            <div className="content">
                                                <div className="category"><a href="#">Link3</a></div>
                                                <h3>Link yazı</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 feature-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="icon-laptop"></span></div>
                                            <div className="content">
                                                <div className="category"><a href="#">LİNK2</a></div>
                                                <h3>Link yazı</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 feature-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="icon-report"></span></div>
                                            <div className="content">
                                                <div className="category"><a href="#">Link1</a></div>
                                                <h3>link yazı</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text">

                                    ALT YAZI  ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI
                                </div>
                                <ul className="page-pagination mt-5">
                                    <li className="prev-page"><a href="#"><i className="icon-arrow"></i>Prev</a></li>
                                    <li className="next-page"><a href="#">Next<i className="icon-arrow"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <aside className="sidebar sidebar-style-two">
                                <div className="widget widget_categories">
                                    <h3 className="widget-title">SIDEBAR</h3>
                                    <div className="widget-content">
                                        <ul className="categories-list">
                                            <li className="current"><a href="business-taxation.html"><i className="icon-line-chart"></i> Business & Taxation</a></li>
                                            <li><a href="law-justice.html"><i className="icon-shield"></i> Law, Justice & Police</a></li>
                                            <li><a href="government-election.html"><i className="icon-election"></i> Government & Elections</a></li>
                                            <li><a href="pets-area.html"><i className="icon-pets"></i> Pets & Wildlife Area</a></li>
                                            <li><a href="employment-jo.html"><i className="icon-suitcase"></i> Employment & Jobs</a></li>
                                            <li><a href="real-estate-building.html"><i className="icon-building"></i> Real Estate & Buildings</a></li>
                                            <li><a href="sideways.html"><i className="icon-parking"></i> Sideways & Parking</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget contact-widget-two" style={{ backgroundImage: 'url(assets/images/resource/image-51.jpg)' }}>
                                    <h3 className="widget-title">Municipal Complaints</h3>
                                    <div className="widget-content">
                                        <ul className="contact-info">
                                            <li><a href="#"><i className="pe-7s-headphones"></i> Emergency 9922</a></li>
                                            <li><a href="mailto:mail@governlia.net"><i className="pe-7s-mail-open"></i> mail@governlia.net</a></li>
                                            <li><a href="tel:8526105599"><i className="pe-7s-call"></i> Call us 852-610-5599</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget widget_testimonial">
                                    <div className="row">
                                        <div className="theme_carousel owl-theme owl-carousel" data-options='{"loop": true, "center": false, "margin": 0, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 1000, "responsive":{ "0" :{ "items": "1" }, "600" :{ "items" : "1" }, "992" :{ "items" : "1" } , "1200":{ "items" : "1" }, "1600":{ "items" : "1" }}}'>
                                            <div className="col-lg-12 testimonial-block">
                                                <div className="inner-box">
                                                    <div className="content">
                                                        <div className="text">Veniam quis nostrud exercitation <br /> laboris nis aliquip sed conseq dolor <br /> repreh der luptate velit excepteur <br /> voluptate vlitey cillum dole.</div>
                                                        <div className="rating">
                                                            <span className="fas fa-star"></span>
                                                            <span className="fas fa-star"></span>
                                                            <span className="fas fa-star"></span>
                                                            <span className="fas fa-star"></span>
                                                            <span className="fas fa-star"></span>
                                                        </div>
                                                        <div className="quote"><span className="icon-quote"></span></div>
                                                        <div className="shape">
                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="92px" height="36px">
                                                                <path fillRule="evenodd" fill="rgb(255, 255, 255)" d="M-0.000,-0.002 L46.000,35.999 L92.000,-0.002 L-0.000,-0.002 Z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="author">
                                                        <div className="thumb"><img src="assets/images/resource/author-2.jpg" alt="" /></div>
                                                        <h4>Robert John</h4>
                                                        <div className="designation">Tourist Visitor</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

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