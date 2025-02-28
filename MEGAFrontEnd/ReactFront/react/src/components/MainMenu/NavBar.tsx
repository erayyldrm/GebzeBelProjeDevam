import React, { useState } from 'react';
import './theme/kbb/css/roota0cf.css';
import './theme/kbb/css/plugins.css';
import './theme/kbb/css/style.css';
import './theme/kbb/css/customa0cf.css';
import './theme/kbb/css/fontsc66d.css';
import './theme/kbb/css/mobilea0cf.css';
const NavBar = () => {
    // State to manage dropdown visibility
    const [activeDropdowns, setActiveDropdowns] = useState({});

    // Toggle dropdown visibility
    const toggleDropdown = (id: string | number) => {
        setActiveDropdowns({
            ...activeDropdowns,
            [id]: !activeDropdowns[id]
        });
    };

    // Handle clicking on a dropdown submenu
    const toggleSubmenu = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        toggleDropdown(id);
    };

    return (
        <>
            <div className="content-wrapper">
                <div style={{textAlign: 'center'}}>
                    <header className="wrapper bg-soft-primary">
                        <nav className="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark">
                            <div className="container flex-lg-row flex-nowrap align-items-center mt-kbb-30">
                                <div className="navbar-brand w-100">
                                    <a href="index.html" style={{display:'block', padding:'5px 0px'}}>
                                        <img className="logo-dark" style={{width:'180px'}} src="images/logo.jpg" alt=""/>
                                        <img className="logo-light" style={{width:'180px'}} src="theme/kbb/images/logo.png" alt=""/>
                                    </a>
                                </div>
                                <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start kbb-bg">
                                    <div className="offcanvas-header d-lg-none">
                                        <h3 className="text-white fs-30 mb-0">
                                            <img className="logo-light" style={{width:'180px'}} src="theme/kbb/images/logo.png" alt=""/>
                                        </h3>
                                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                                        <ul className="navbar-nav">
                                            <li className="nav-item"><a className="nav-link" href="#">ANASAYFA</a></li>

                                            {/* KURUMSAL Dropdown */}
                                            <li className={`nav-item dropdown ${activeDropdowns['kurumsal'] ? 'show' : ''}`}>
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    onClick={(e) => toggleSubmenu(e, 'kurumsal')}
                                                >
                                                    KURUMSAL
                                                </a>
                                                <ul className={`dropdown-menu ${activeDropdowns['kurumsal'] ? 'show' : ''}`}>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">BAŞKAN</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">VİZYONUMUZ</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">MİSYONUMUZ</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">İLKELERİMİZ</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">BELEDİYE MECLİSİ</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">YÖNETİM ŞEMASI</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">BAŞKAN YARDIMCILARI</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">BAŞKAN DANIŞMANLARI</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">MÜDÜRLÜKLER</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">ESKİ BAŞKANLAR</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">ARABULUCULUK KOMİSYONU</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">ETİK KOMİSYONU</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">MECLİS KARALARI</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">KURUMSAL KİMLİK</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">KURUMSAL RAPORLAR</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">KURUMSAL DÖKÜMANLAR</a></li>
                                                </ul>
                                            </li>

                                            {/* GEBZE Dropdown */}
                                            <li className={`nav-item dropdown ${activeDropdowns['gebze'] ? 'show' : ''}`}>
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    onClick={(e) => toggleSubmenu(e, 'gebze')}
                                                >
                                                    GEBZE
                                                </a>
                                                <ul className={`dropdown-menu ${activeDropdowns['gebze'] ? 'show' : ''}`}>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">TARİHÇE</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">BUGÜNKÜ GEBZE</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">MAHALLE MUHTARLARI</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">TARİHİ YERLER</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">FOTOĞRAFLARLA GEBZE</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">KARDEŞ ŞEHİRLER</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">ÜYE OLDUĞUMUZ BİRLİKLER</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">360 SANAL TUR</a></li>
                                                </ul>
                                            </li>

                                            {/* HİZMETLER Dropdown */}
                                            <li className={`nav-item dropdown ${activeDropdowns['hizmetler'] ? 'show' : ''}`}>
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    onClick={(e) => toggleSubmenu(e, 'hizmetler')}
                                                >
                                                    HİZMETLER
                                                </a>
                                                <ul className={`dropdown-menu ${activeDropdowns['hizmetler'] ? 'show' : ''}`}>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">ATÖLYELER</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">BEBEK VE ÇOCUK BAKIM EVİ</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">EĞİTİMLER</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">EVLENDİRME</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">GERİ DÖNÜŞÜM</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">GÜREŞ</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">KÜTÜPHANE</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">MERKEZLER</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">MESİRE ALANI</a></li>
                                                </ul>
                                            </li>

                                            {/* E-BELEDİYE Dropdown */}
                                            <li className={`nav-item dropdown ${activeDropdowns['ebelediye'] ? 'show' : ''}`}>
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    onClick={(e) => toggleSubmenu(e, 'ebelediye')}
                                                >
                                                    E-BELEDİYE
                                                </a>
                                                <ul className={`dropdown-menu ${activeDropdowns['ebelediye'] ? 'show' : ''}`}>
                                                    {/* Nested Dropdown - VERGİ İŞLEMLERİ */}
                                                    <li className={`dropdown dropdown-submenu dropend ${activeDropdowns['vergi'] ? 'show' : ''}`}>
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="#"
                                                            onClick={(e) => toggleSubmenu(e, 'vergi')}
                                                        >
                                                            VERGİ İŞLEMLERİ
                                                        </a>
                                                        <ul className={`dropdown-menu ${activeDropdowns['vergi'] ? 'show' : ''}`}>
                                                            <li className="nav-item"><a className="dropdown-item" href="#">VERGİ & BORÇ ÖDEME</a></li>
                                                            <li className="nav-item"><a className="dropdown-item" href="#">E-BEYAN</a></li>
                                                            <li className="nav-item"><a className="dropdown-item" href="#">E-BEYAN BİLDİRİM TAKİP</a></li>
                                                        </ul>
                                                    </li>

                                                    {/* Nested Dropdown - GEBZE İLETİŞİM MERKEZİ */}
                                                    <li className={`dropdown dropdown-submenu dropend ${activeDropdowns['iletisim'] ? 'show' : ''}`}>
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="#"
                                                            onClick={(e) => toggleSubmenu(e, 'iletisim')}
                                                        >
                                                            GEBZE İLETİŞİM MERKEZİ
                                                        </a>
                                                        <ul className={`dropdown-menu ${activeDropdowns['iletisim'] ? 'show' : ''}`}>
                                                            <li className="nav-item"><a className="dropdown-item" href="#">BAŞVURU FORMU</a></li>
                                                            <li className="nav-item"><a className="dropdown-item" href="#">BAŞVURU TAKİP</a></li>
                                                            <li className="nav-item"><a className="dropdown-item" href="#">BİLGİ EDİNME (CİMER)</a></li>
                                                        </ul>
                                                    </li>

                                                    {/* Other nested dropdowns would follow the same pattern */}
                                                    {/* Adding one more example */}
                                                    <li className={`dropdown dropdown-submenu dropend ${activeDropdowns['interaktif'] ? 'show' : ''}`}>
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="#"
                                                            onClick={(e) => toggleSubmenu(e, 'interaktif')}
                                                        >
                                                            İNTERAKTİF HİZMETLER
                                                        </a>
                                                        <ul className={`dropdown-menu ${activeDropdowns['interaktif'] ? 'show' : ''}`}>
                                                            <li className="nav-item"><a className="dropdown-item" href="#">E-EKSPER</a></li>
                                                            <li className="nav-item"><a className="dropdown-item" href="#">E-İŞYERİ RUHSAT</a></li>
                                                            <li className="nav-item"><a className="dropdown-item" href="#">E-RAYİÇ</a></li>
                                                            <li className="nav-item"><a className="dropdown-item" href="#">E-MOLOZ</a></li>
                                                            <li className="nav-item"><a className="dropdown-item" href="#">E-GERİ DÖNÜŞÜM</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item"><a className="nav-link" href="#">ETKİNLİKLER</a></li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link" href="#" onClick={(e) => toggleSubmenu(e, 'haberler')}>
                                                    HABERLER
                                                </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="iletisim/index.html">İLETİŞİM</a></li>
                                        </ul>

                                        <div className="offcanvas-footer d-lg-none" style={{padding:'0px', display:'block'}}>
                                            <div className="widget">
                                                <div id="weather" className="header_slider_infos mb-5">
                                                    <div className="w_inner">
                                                        <div className="w_icon">
                                                            <img src="../api.gazisoft.com/services/img/weather/yeni12.png" alt="Weather icon" />
                                                        </div>
                                                        <div>
                                                            <span className="w_temp"> ... </span>
                                                            <span className="w_title"> ... </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div style={{clear:'both'}}></div>

                                                <h5 className="widget-title text-dark mb-3"
                                                    style={{
                                                        background: '#e6f2fa',
                                                        color: '#005c99',
                                                        padding: '6px',
                                                        textAlign: 'center',
                                                        fontWeight: '400',
                                                        fontSize: '18px',
                                                        borderRadius: '10px'
                                                    }}>
                                                    Takip Edin
                                                </h5>

                                                <div className="footer_social_share_area" style={{ margin: '0px 0px 0px 0px'}}>
                                                    <a className="social_button twitter" target="_blank" href="https://twitter.com/kocaelibld" rel="noreferrer">
                                                        <i className="icon-x"></i>
                                                    </a>
                                                    <a className="social_button facebook" target="_blank" href="https://www.facebook.com/kocaelibld" rel="noreferrer">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                    <a className="social_button instagram" target="_blank" href="https://www.instagram.com/kocaelibld/" rel="noreferrer">
                                                        <i className="fa-brands fa-instagram"></i>
                                                    </a>
                                                    <a className="social_button youtube" target="_blank" href="https://www.youtube.com/user/kocaelibld" rel="noreferrer">
                                                        <i className="fa-brands fa-youtube"></i>
                                                    </a>
                                                    <a className="social_button whatsapp" target="_blank" href="https://whatsapp.com/channel/0029VaAgBkdBlHpWlvArNH01" rel="noreferrer">
                                                        <i className="fa-brands fa-whatsapp"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar-other w-100 d-flex ms-auto">
                                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                                        <li className="nav-item d-lg-none">
                                            <button className="hamburger offcanvas-nav-btn"><span></span></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>
        </>
    );
};

export default NavBar;