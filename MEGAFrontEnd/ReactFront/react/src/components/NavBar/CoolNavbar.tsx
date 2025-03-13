import React, {useState} from 'react';
import {
    FiActivity,
    FiAward, FiBook, FiBookOpen, FiCamera,
    FiChevronDown,
    FiCoffee,
    FiChevronUp,
    FiClipboard,
    FiEye, FiGlobe, FiHeart, FiHome,
    FiLayout, FiMap, FiMapPin, FiRefreshCw,
    FiTarget,
    FiTool,
    FiUser,
    FiUserCheck, FiDollarSign, FiEdit, FiPhone, FiInfo, FiX, FiMenu
} from 'react-icons/fi';
import {
    FiUsers,
    FiCreditCard,
    FiFileText
} from 'react-icons/fi';
import './NavBar.css';



    // Dropdown content grouped by category
const kurumsal: DropdownItem[] = [
    {
        icon: <FiUsers className="text-gray-800"/>,
        title: 'BAŞKAN',
        description: 'Başkan hakkında bilgi',
        onClick: () => window.location.href = '/kurumsal/baskan' // veya router.push('/kurumsal/baskan') kullanabilirsiniz
    },
        {icon: <FiEye className="text-gray-800"/>, title: 'VİZYONUMUZ', description: 'Vizyonumuz hakkında bilgi'},
        {icon: <FiTarget className="text-gray-800"/>, title: 'MİSYONUMUZ', description: 'Misyonumuz hakkında bilgi'},
        {icon: <FiAward className="text-gray-800"/>, title: 'İLKELERİMİZ', description: 'İlkelerimiz hakkında bilgi'},
        {
            icon: <FiUsers className="text-gray-800"/>,
            title: 'BELEDİYE MECLİSİ',
            description: 'Belediye Meclisi hakkında bilgi'
        },
        {
            icon: <FiLayout className="text-gray-800"/>,
            title: 'YÖNETİM ŞEMASI',
            description: 'Yönetim Şeması hakkında bilgi'
        },
        {
            icon: <FiUsers className="text-gray-800"/>,
            title: 'BAŞKAN YARDIMCILARI',
            description: 'Başkan Yardımcıları hakkında bilgi'
        },
        {
            icon: <FiUser className="text-gray-800"/>,
            title: 'BAŞKAN DANIŞMANLARI',
            description: 'Başkan Danışmanları hakkında bilgi'
        },
        {
            icon: <FiFileText className="text-gray-800"/>,
            title: 'MÜDÜRLÜKLER',
            description: 'Müdürlükler hakkında bilgi'
        },
        {
            icon: <FiUsers className="text-gray-800"/>,
            title: 'ESKİ BAŞKANLAR',
            description: 'Eski Başkanlar hakkında bilgi'
        },
        {
            icon: <FiUserCheck className="text-gray-800"/>,
            title: 'ARABULUCULUK KOMİSYONU',
            description: 'Arabuluculuk Komisyonu hakkında bilgi'
        },
        {
            icon: <FiUserCheck className="text-gray-800"/>,
            title: 'ETİK KOMİSYONU',
            description: 'Etik Komisyonu hakkında bilgi'
        },
        {
            icon: <FiClipboard className="text-gray-800"/>,
            title: 'MECLİS KARALARI',
            description: 'Meclis Kararları hakkında bilgi'
        },
        {
            icon: <FiFileText className="text-gray-800"/>,
            title: 'KURUMSAL KİMLİK',
            description: 'Kurumsal Kimlik hakkında bilgi'
        },
        {
            icon: <FiFileText className="text-gray-800"/>,
            title: 'KURUMSAL RAPORLAR',
            description: 'Kurumsal Raporlar hakkında bilgi'
        },
        {
            icon: <FiFileText className="text-gray-800"/>,
            title: 'KURUMSAL DÖKÜMANLAR',
            description: 'Kurumsal Dökümanlar hakkında bilgi'
        },
    ];
    const gebze: DropdownItem[] = [
        {
            icon: <FiBookOpen className="text-gray-800"/>,
            title: 'TARİHÇE',
            description: 'Gebze Tarihçesi hakkında bilgi'
        },
        {icon: <FiMap className="text-gray-800"/>, title: 'BUGÜNKÜ GEBZE', description: 'Bugünkü Gebze hakkında bilgi'},
        {
            icon: <FiMapPin className="text-gray-800"/>,
            title: 'MAHALLE MUHTARLARI',
            description: 'Mahalle Muhtarları hakkında bilgi'
        },
        {icon: <FiMap className="text-gray-800"/>, title: 'TARİHİ YERLER', description: 'Tarihi Yerler hakkında bilgi'},
        {
            icon: <FiCamera className="text-gray-800"/>,
            title: 'FOTOĞRAFLARLA GEBZE',
            description: 'Gebze Fotoğrafları hakkında bilgi'
        },
        {
            icon: <FiGlobe className="text-gray-800"/>,
            title: 'KARDEŞ ŞEHİRLER',
            description: 'Kardeş Şehirler hakkında bilgi'
        },
        {
            icon: <FiUsers className="text-gray-800"/>,
            title: 'ÜYE OLDUĞUMUZ BİRLİKLER',
            description: 'Üye Olduğumuz Birlikler hakkında bilgi'
        },
        {icon: <FiMap className="text-gray-800"/>, title: '360 SANAL TUR', description: 'Gebze 360 Sanal Tur'},
    ];


    const hizmetler: DropdownItem[] = [
        {
            icon: <FiTool className="text-gray-800"/>,
            title: 'ATÖLYELER',
            description: 'Atölye çalışmaları hakkında bilgi'
        },
        {
            icon: <FiHome className="text-gray-800"/>,
            title: 'BEBEK VE ÇOCUK BAKIM EVİ',
            description: 'Bebek ve çocuk bakımı hakkında bilgi'
        },
        {
            icon: <FiBook className="text-gray-800"/>,
            title: 'EĞİTİMLER',
            description: 'Eğitim programları hakkında bilgi'
        },
        {
            icon: <FiHeart className="text-gray-800"/>,
            title: 'EVLENDİRME',
            description: 'Evlendirme işlemleri hakkında bilgi'
        },
        {
            icon: <FiRefreshCw className="text-gray-800"/>,
            title: 'GERİ DÖNÜŞÜM',
            description: 'Geri dönüşüm hizmetleri hakkında bilgi'
        },
        {
            icon: <FiActivity className="text-gray-800"/>,
            title: 'GÜREŞ',
            description: 'Güreş etkinlikleri hakkında bilgi'
        },
        {
            icon: <FiBookOpen className="text-gray-800"/>,
            title: 'KÜTÜPHANE',
            description: 'Kütüphane hizmetleri hakkında bilgi'
        },
        {icon: <FiMapPin className="text-gray-800"/>, title: 'MERKEZLER', description: 'Merkezler hakkında bilgi'},
        {
            icon: <FiCoffee className="text-gray-800"/>,
            title: 'MESİRE ALANI',
            description: 'Mesire alanları hakkında bilgi'
        },
    ];


    const eBelediye: DropdownItem[] = [
        {
            icon: <FiDollarSign className="text-gray-800"/>,
            title: 'VERGİ İŞLEMLERİ',
            description: 'Vergi işlemleri hakkında bilgi'
        },
        {
            icon: <FiCreditCard className="text-gray-800"/>,
            title: 'VERGİ & BORÇ ÖDEME',
            description: 'Vergi ve borç ödeme işlemleri'
        },
        {icon: <FiEdit className="text-gray-800"/>, title: 'E-BEYAN', description: 'E-Beyan işlemleri'},
        {
            icon: <FiClipboard className="text-gray-800"/>,
            title: 'E-BEYAN BİLDİRİM TAKİP',
            description: 'E-Beyan bildirim takip işlemleri'
        },
        {
            icon: <FiPhone className="text-gray-800"/>,
            title: 'GEBZE İLETİŞİM MERKEZİ',
            description: 'Gebze iletişim merkezi hakkında bilgi'
        },
        {icon: <FiFileText className="text-gray-800"/>, title: 'BAŞVURU FORMU', description: 'Başvuru formu işlemleri'},
        {icon: <FiFileText className="text-gray-800"/>, title: 'BAŞVURU TAKİP', description: 'Başvuru takip işlemleri'},
        {
            icon: <FiInfo className="text-gray-800"/>,
            title: 'BİLGİ EDİNME (CİMER)',
            description: 'Bilgi edinme işlemleri (CİMER)'
        },
    ];
// Define types for dropdown items
interface DropdownItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    isEN?: boolean;
    onClick?: () => void; // Tıklama fonksiyonu için opsiyonel prop ekleyin
}




const Navbar = () => {
    // State to track which dropdown is open
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Toggle dropdown function
    const toggleDropdown = (name:string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    // Toggle mobile menu function
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Render dropdown menu items
    const renderDropdownItems = (items: DropdownItem[]) => {
        return (
            <>
            <div onClick={() => toggleDropdown("any")}
                 className="fixed inset-0 w-full h-full px-[50px]"/>

                <div id={'zawardo'}
                     className="fixed start-2 right-2 top-20
                        bg-white rounded-md shadow-lg z-10 py-2 grid grid-cols-4 gap-2
                        max-w-4xl w-full mx-auto">

                    {items.map((item, index) => (
                        <div key={index} className="p-2 flex items-center hover:bg-gray-100 rounded-md cursor-pointer"
                             onClick={item.onClick} // Tıklama olayını ekleyin
                        >
                            <div className="p-2 bg-gray-100 rounded-md mr-3">
                                {item.icon}
                            </div>
                            <div>
                                <div className="font-medium text-sm">
                                    {item.title}
                                    {item.isEN && <span className="text-gray-500 text-xs ml-1">(EN)</span>}
                                </div>
                                <div className="text-gray-500 text-sm">{item.description}</div>
                            </div>
                        </div>
                    ))}

                </div>
            </>
        );
    };

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-full mx-auto px-4">
                <div className="flex justify-between h-16">
                    {/* Logo and mobile menu button */}
                    <div className="flex justify-between w-full md:w-auto">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center md:invisible lg:visible">
                            <a href="http://localhost:5173">
                                <img
                                    src={"./images/logoyatay.png"}
                                    id={"logo"}
                                    alt="Gebze Belediyesi"
                                    className="cursor-pointer h-10"
                                />
                            </a>
                        </div>


                        {/* Mobile menu button */}

                            <button
                                type="button"
                                aria-controls="mobile-menu"
                                className="md:invisible items-center justify-center"
                                aria-expanded="false"
                                onClick={toggleMobileMenu}
                            >
                                {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                            </button>


                    </div>

                    {/* Desktop menu items - hidden on mobile */}
                    <div className="hidden md:flex md:items-center md:justify-between">
                        {/* Main navbar items */}
                        <div className="flex space-x-8">
                            {/* Kurumsal Dropdown */}
                            <div className="relative flex justify-center">
                                <button
                                    className="inline-flex items-center px-1 pt-1 text-m font-medium text-gray-900"
                                    onClick={() => toggleDropdown('kurumsal')}
                                >
                                    Kurumsal
                                    {openDropdown === 'kurumsal' ? <FiChevronUp className="ml-1"/> : <FiChevronDown className="ml-1"/>}
                                </button>
                                {openDropdown === 'kurumsal' && renderDropdownItems(kurumsal)}
                            </div>

                            {/* Gebze link */}
                            <div className="relative flex justify-center">
                                <button
                                    className="inline-flex items-center px-1 pt-1 text-m font-medium text-gray-900"
                                    onClick={() => toggleDropdown('gebze')}
                                >
                                    Gebze
                                    {openDropdown === 'gebze' ? <FiChevronUp className="ml-1"/> : <FiChevronDown className="ml-1"/>}
                                </button>
                                {openDropdown === 'gebze' && renderDropdownItems(gebze)}
                            </div>

                            {/* Hizmetler Dropdown */}
                            <div className="relative flex justify-center">
                                <button
                                    className="inline-flex items-center px-1 pt-1 text-m font-medium text-gray-900"
                                    onClick={() => toggleDropdown('hizmetler')}
                                >
                                    Kaynaklar
                                    {openDropdown === 'hizmetler' ? <FiChevronUp className="ml-1"/> : <FiChevronDown className="ml-1"/>}
                                </button>
                                {openDropdown === 'hizmetler' && renderDropdownItems(hizmetler)}
                            </div>

                            {/* E-Belediye link */}
                            <div className="relative flex justify-center">
                                <button
                                    className="inline-flex items-center px-1 pt-1 text-m font-medium text-gray-900"
                                    onClick={() => toggleDropdown('eBelediye')}
                                >
                                    eBelediye
                                    {openDropdown === 'eBelediye' ? <FiChevronUp className="ml-1"/> : <FiChevronDown className="ml-1"/>}
                                </button>
                                {openDropdown === 'eBelediye' && renderDropdownItems(eBelediye)}
                            </div>

                            {/* Other links */}
                            <a href="#" className="inline-flex items-center px-1 pt-1 text-m font-medium text-gray-900">
                                Etkinlikler
                            </a>
                            <a href="#" className="inline-flex items-center px-1 pt-1 text-m font-medium text-gray-900">
                                Haberler
                            </a>
                            <a href="#" className="inline-flex items-center px-1 pt-1 text-m font-medium text-gray-900">
                                İletişim
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {mobileMenuOpen && (
                <div className="lg:invisible" id="mobile-menu">
                    <div className="pt-2 pb-4 space-y-1">
                        {/* Kurumsal Dropdown */}
                        <div className="w-full">
                            <button
                                className="w-full flex justify-between items-center py-2 px-4 text-base font-medium text-gray-900 hover:bg-gray-100"
                                onClick={() => toggleDropdown('kurumsal-mobile')}
                            >
                                Kurumsal
                                {openDropdown === 'kurumsal-mobile' ? <FiChevronUp className="ml-1"/> : <FiChevronDown className="ml-1"/>}
                            </button>
                            {openDropdown === 'kurumsal-mobile' && (
                                <div className="pl-6 pr-4 py-2 space-y-2">
                                    {kurumsal.map((item, index) => (
                                        <div key={index} className="p-2 flex items-center hover:bg-gray-100 rounded-md cursor-pointer">
                                            <div className="p-2 bg-gray-100 rounded-md mr-3">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="font-medium text-sm">
                                                    {item.title}
                                                    {item.isEN && <span className="text-gray-500 text-xs ml-1">(EN)</span>}
                                                </div>
                                                <div className="text-gray-500 text-sm">{item.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Gebze Dropdown */}
                        <div className="w-full">
                            <button
                                className="w-full flex justify-between items-center py-2 px-4 text-base font-medium text-gray-900 hover:bg-gray-100"
                                onClick={() => toggleDropdown('gebze-mobile')}
                            >
                                Gebze
                                {openDropdown === 'gebze-mobile' ? <FiChevronUp className="ml-1"/> : <FiChevronDown className="ml-1"/>}
                            </button>
                            {openDropdown === 'gebze-mobile' && (
                                <div className="pl-6 pr-4 py-2 space-y-2">
                                    {gebze.map((item, index) => (
                                        <div key={index} className="p-2 flex items-center hover:bg-gray-100 rounded-md cursor-pointer">
                                            <div className="p-2 bg-gray-100 rounded-md mr-3">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="font-medium text-sm">
                                                    {item.title}
                                                    {item.isEN && <span className="text-gray-500 text-xs ml-1">(EN)</span>}
                                                </div>
                                                <div className="text-gray-500 text-sm">{item.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Kaynaklar Dropdown */}
                        <div className="w-full">
                            <button
                                className="w-full flex justify-between items-center py-2 px-4 text-base font-medium text-gray-900 hover:bg-gray-100"
                                onClick={() => toggleDropdown('hizmetler-mobile')}
                            >
                                Kaynaklar
                                {openDropdown === 'hizmetler-mobile' ? <FiChevronUp className="ml-1"/> : <FiChevronDown className="ml-1"/>}
                            </button>
                            {openDropdown === 'hizmetler-mobile' && (
                                <div className="pl-6 pr-4 py-2 space-y-2">
                                    {hizmetler.map((item, index) => (
                                        <div key={index} className="p-2 flex items-center hover:bg-gray-100 rounded-md cursor-pointer">
                                            <div className="p-2 bg-gray-100 rounded-md mr-3">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="font-medium text-sm">
                                                    {item.title}
                                                    {item.isEN && <span className="text-gray-500 text-xs ml-1">(EN)</span>}
                                                </div>
                                                <div className="text-gray-500 text-sm">{item.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* eBelediye Dropdown */}
                        <div className="w-full">
                            <button
                                className="w-full flex justify-between items-center py-2 px-4 text-base font-medium text-gray-900 hover:bg-gray-100"
                                onClick={() => toggleDropdown('eBelediye-mobile')}
                            >
                                eBelediye
                                {openDropdown === 'eBelediye-mobile' ? <FiChevronUp className="ml-1"/> : <FiChevronDown className="ml-1"/>}
                            </button>
                            {openDropdown === 'eBelediye-mobile' && (
                                <div className="pl-6 pr-4 py-2 space-y-2">
                                    {eBelediye.map((item, index) => (
                                        <div key={index} className="p-2 flex items-center hover:bg-gray-100 rounded-md cursor-pointer">
                                            <div className="p-2 bg-gray-100 rounded-md mr-3">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="font-medium text-sm">
                                                    {item.title}
                                                    {item.isEN && <span className="text-gray-500 text-xs ml-1">(EN)</span>}
                                                </div>
                                                <div className="text-gray-500 text-sm">{item.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Other links */}
                        <a href="#" className="block py-2 px-4 text-base font-medium text-gray-900 hover:bg-gray-100">
                            Etkinlikler
                        </a>
                        <a href="#" className="block py-2 px-4 text-base font-medium text-gray-900 hover:bg-gray-100">
                            Haberler
                        </a>
                        <a href="#" className="block py-2 px-4 text-base font-medium text-gray-900 hover:bg-gray-100">
                            İletişim
                        </a>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;