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
                                <h1>Business & Taxation</h1>
                            </div>
                            <ul className="bread-crumb">
                                <li><a href="index.html">Home</a></li>
                                <li>our Departments</li>
                                <li>Business & Taxation</li>
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
                                    <p>Hiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident suntin culpa qui officia deserunt mollit anim idm est laborum.</p>
                                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit volupta te velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis.</p>
                                </div>
                                <div className="row mb-30">
                                    <div className="col-md-6">
                                        <div className="image"><img src="assets/images/resource/image-53.jpg" alt="" /></div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="group-title"><h4>How We Help People</h4></div>
                                        <ul className="list">
                                            <li>Improving all types of opportunities</li>
                                            <li>Quick solutions for daily problems</li>
                                            <li>Best time and place to start business</li>
                                            <li>Car Rental For Road Test</li>
                                            <li>24 hours guidence stations</li>
                                            <li>See the city by foot, by bike, by bus</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 feature-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="icon-train"></span></div>
                                            <div className="content">
                                                <div className="category"><a href="#">Transportation</a></div>
                                                <h3>Find a Public Transport <br /> or Locate Parking</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 feature-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="icon-pets-2"></span></div>
                                            <div className="content">
                                                <div className="category"><a href="#">Wildlife Animals</a></div>
                                                <h3>Search for an Animal or <br /> Pet for Adoption</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 feature-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="icon-laptop"></span></div>
                                            <div className="content">
                                                <div className="category"><a href="#">Utility Services</a></div>
                                                <h3>Pay any Utility Bill Easily <br /> by Access Account</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 feature-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="icon-report"></span></div>
                                            <div className="content">
                                                <div className="category"><a href="#">Municipal Court</a></div>
                                                <h3>Did any Violation? Submit <br /> Ticket(s) or Pay Tax</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text">
                                    Nostrud exercitation ullamco laboris nisi ut aliquip ex ea reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident suntin culpa qui officia deserunt mollit anim idm est laborum. Sed perspiciatis und omnis iste natus error sit voluptatem acusantium amet, consectetur adipisicing elit.
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
                                    <h3 className="widget-title">All Departments</h3>
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

            {/* Main Footer */}
            <footer className="main-footer">
                <div className="footer-top">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="assets/images/logo-2.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="wrapper-box">
                                    <h4>Signup For Newsletter</h4>
                                    <div className="newsletter-form">
                                        <form className="ajax-sub-form" method="post">
                                            <div className="form-group">
                                                <input type="email" placeholder="Email Address..." id="subscription-email" />
                                                <button type="submit" className="theme-btn"><i className="icon-arrow"></i><span></span></button>
                                                <label className="subscription-label" htmlFor="subscription-email"></label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="auto-container">
                    {/* Widgets Section */}
                    <div className="widgets-section">
                        <div className="row clearfix">

                            {/* Column */}
                            <div className="column col-lg-3 col-md-6">
                                <div className="widget about-widget">
                                    <h3 className="widget-title">About Us</h3>
                                    <div className="text">
                                        Adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco.
                                    </div>
                                    <ul className="social-links">
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Column */}
                            <div className="column col-lg-3 col-md-6">
                                <div className="widget links-widget">
                                    <h3 className="widget-title">City Departments</h3>
                                    <div className="widget-content">
                                        <ul>
                                            <li><a href="business-taxation.html">Business & Taxation</a></li>
                                            <li><a href="law-justice.html">Law, Justice & Police</a></li>
                                            <li><a href="government-election.html">Government & Elections</a></li>
                                            <li><a href="pets-area.html">Pets & Wildlife Area</a></li>
                                            <li><a href="employment-jo.html">Employment & Jobs</a></li>
                                            <li><a href="real-estate-building.html">Real Estate & Buildings</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Column */}
                            <div className="column col-lg-3 col-md-6">
                                <div className="widget links-widget">
                                    <h3 className="widget-title">Useful Links</h3>
                                    <div className="widget-content">
                                        <ul>
                                            <li><a href="#">Meet The Mayor</a></li>
                                            <li><a href="#">Travel Advisory</a></li>
                                            <li><a href="#">Hospitality Jobs</a></li>
                                            <li><a href="#">Media Center</a></li>
                                            <li><a href="#">City Attractions</a></li>
                                            <li><a href="#">Town Hall Gallery</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Column */}
                            <div className="column col-lg-3 col-md-6">
                                <div className="widget contact-widget">
                                    <h3 className="widget-title">Contact Us</h3>
                                    <div className="widget-content">
                                        <ul className="contact-info">
                                            <li>
                                                <div className="icon"><img src="assets/images/icons/icon-1.png" alt="" /></div>
                                                <div className="text"><strong>Visit Mayor Office</strong> 36 King Street, LaneWalk, <br /> Governlia 030204 - US</div>
                                            </li>
                                            <li>
                                                <div className="icon"><img src="assets/images/icons/icon-2.png" alt="" /></div>
                                                <div className="text">
                                                    <strong>Phone No.</strong>
                                                    <a href="tel:+1(345)2067849">+ 1 (345) 206 7849</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon"><img src="assets/images/icons/icon-3.png" alt="" /></div>
                                                <div className="text">
                                                    <strong>Email</strong>
                                                    <a href="mailto:munciple@example.net">munciple@example.net</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="wrapper-box">
                            <div className="copyright">
                                <div className="text">© 1995-2021 <a href="#">GOVERNLIA</a> - The City Govt All rights reserved.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

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