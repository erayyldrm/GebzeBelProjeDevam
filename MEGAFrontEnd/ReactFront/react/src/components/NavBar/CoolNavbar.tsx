import {useEffect, useRef, useState} from 'react';
import {kurumsal, gebze, hizmetler, eBelediye, yayinlarimiz} from '../_SayfaBilgileri/Sayfalar.tsx';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';
import './NavBar.css';
import {Link, useNavigate} from 'react-router-dom';
import {DropdownItem} from '../_SayfaBilgileri/types.tsx';
import {FiChevronDown, FiChevronUp, FiMenu, FiX} from 'react-icons/fi';
import {useClickOutside} from '../useClickOutside.tsx';

const Navbar = () => {

    const navigate = useNavigate();
    const handleNavigation = (path: string) => {
        navigate(path);
    };

    // State to track which dropdown is open
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isNavbarFixed] = useState(false);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const navbarControls = useAnimation();
    const desktopDropdownRef = useRef<HTMLDivElement | null>(null);
    const mobileDropdownRef = useRef<HTMLDivElement | null>(null);

    // Apply useClickOutside to desktop ref only but not to mobile menu
    useClickOutside(desktopDropdownRef, () => {
        // useClickOutside hook'u sadece desktop dropdown için çalıştır
        if (!mobileMenuOpen) {
            setOpenDropdown(null);
        }
    });

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Determine scroll direction
            if (currentScrollPos > 100) {
                if (currentScrollPos > lastScrollPosition) {
                    // Scrolling down
                    navbarControls.start({
                        y: -100,
                        opacity: 0.7,
                        transition: {duration: 0.3}
                    });

                    // Close all dropdowns when scrolling down
                    setOpenDropdown(null);
                } else {
                    // Scrolling up
                    navbarControls.start({
                        y: 0,
                        opacity: 1,
                        transition: {duration: 0.3}
                    });
                }
            }

            setLastScrollPosition(currentScrollPos);
            setScrollPosition(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPosition, navbarControls]);


    // Render dropdown menu items
    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (mobileMenuOpen) setOpenDropdown(null); // Close all dropdowns when closing mobile menu
    };


    const renderDropdownItems = (items: DropdownItem[]) => {
        return (
            <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -20}}
                transition={{duration: 0.3}}
                className="fixed left-0 right-0 top-0 bg-white rounded-md shadow-lg z-30
                py-2 grid grid-cols-4 gap-2 max-w-[90%] w-full mx-auto"
                style={{
                    top: scrollPosition > 100 ? '8rem' : '10rem',
                    transformOrigin: 'top center'
                }}
            >
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        className="p-2 flex items-center hover:bg-gray-100 rounded-md cursor-pointer"
                        onClick={() => {
                            handleNavigation(item.path || '/');
                            setOpenDropdown(null);
                        }}
                    >
                        <motion.div
                            className="p-2 bg-gray-100 text-gray-800 rounded-md mr-3"
                            whileHover={{rotate: 5}}
                        >
                            {item.icon}
                        </motion.div>
                        <div>
                            <div className="font-medium text-sm">
                                {item.title}
                                {item.isEN && <span className="text-gray-500 text-xs ml-1">(EN)</span>}
                            </div>
                            <div className="text-gray-500 text-sm">{item.description}</div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        );
    };

    // Function to handle mobile dropdown item clicks
    const handleMobileItemClick = (path: string) => {
        // Önce navigasyonu yap, sonra menüyü kapat
        setTimeout(() => {
            navigate(path);
        }, 10);
        setOpenDropdown(null);
        setMobileMenuOpen(false);
    };

    return (
        <motion.nav
            animate={navbarControls}
            initial={{
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100
            }}
            className={`
                bg-[#022842] border-b border-gray-200 z-[100]
                ${scrollPosition > 100 ? 'shadow-md' : ''}
            `}
        >
            <div className="max-w-full mx-auto px-4">
                <div className="flex justify-between h-35">
                    {/* Logo and mobile menu button */}
                    <div className="flex justify-between w-full md:w-auto">
                        {/* Logo */}
                        <div className="flex-shrink-2 flex items-center md:invisible lg:visible">
                            <Link to={"/"}>
                                <motion.img
                                    initial={{opacity: 1}}
                                    animate={{
                                        y: isNavbarFixed ? -15 : 0,
                                        opacity: isNavbarFixed ? 0.8 : 1
                                    }}
                                    transition={{duration: 0.3}}
                                    src={"/2logoyatay.png"}
                                    id={"logo"}
                                    alt="Gebze Belediyesi"
                                    className="cursor-pointer h-10"
                                />
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            type="button"
                            aria-controls="mobile-menu"
                            className="md:hidden items-center justify-center"
                            aria-expanded="false"
                            onClick={toggleMobileMenu}
                        >
                            {mobileMenuOpen ? <FiX className="h-6 w-6 text-white"/> :
                                <FiMenu className="h-6 w-6 text-white"/>}
                        </button>
                    </div>

                    {/* Desktop menu items - hidden on mobile */}
                    <div ref={desktopDropdownRef} className="hidden md:flex md:items-center md:justify-between">
                        {/* Desktop menu items */}
                        {/* Main navbar items */}
                        <div className="flex gap-8 ">
                            {/* Kurumsal Dropdown */}
                            <div className="relative flex justify-center">
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    className="inline-flex items-center px-1 pt-1 text-lg font-medium text-white"
                                    onClick={() => toggleDropdown('kurumsal')}
                                >
                                    Kurumsal
                                    {openDropdown === 'kurumsal' ? <FiChevronUp className="ml-1"/> :
                                        <FiChevronDown className="ml-1"/>}
                                </motion.button>
                                <AnimatePresence>
                                    {openDropdown === 'kurumsal' && renderDropdownItems(kurumsal)}
                                </AnimatePresence>
                            </div>

                            {/* Gebze link */}
                            <div className="relative flex justify-center">
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    className="inline-flex items-center px-1 pt-1 text-lg font-medium text-white"
                                    onClick={() => toggleDropdown('gebze')}
                                >
                                    Gebze
                                    {openDropdown === 'gebze' ? <FiChevronUp className="ml-1"/> :
                                        <FiChevronDown className="ml-1"/>}
                                </motion.button>
                                <AnimatePresence>
                                    {openDropdown === 'gebze' && renderDropdownItems(gebze)}
                                </AnimatePresence>
                            </div>

                            {/* Hizmetler Dropdown */}
                            <div className="relative flex justify-center">
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    className="inline-flex items-center px-1 pt-1 text-lg font-medium text-white"
                                    onClick={() => toggleDropdown('hizmetler')}
                                >
                                    Hizmetler
                                    {openDropdown === 'hizmetler' ? <FiChevronUp className="ml-1"/> :
                                        <FiChevronDown className="ml-1"/>}
                                </motion.button>
                                <AnimatePresence>
                                    {openDropdown === 'hizmetler' && renderDropdownItems(hizmetler)}
                                </AnimatePresence>
                            </div>

                            {/* YAYINLARIMIZ link */}
                            <div className="relative flex justify-center">
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    className="inline-flex items-center px-1 pt-1 text-lg text-m font-medium text-white"
                                    onClick={() => toggleDropdown('Yayınlarımız')}
                                >
                                    Yayınlarımız
                                    {openDropdown === 'Yayınlarımız' ? <FiChevronUp className="ml-1"/> :
                                        <FiChevronDown className="ml-1"/>}
                                </motion.button>
                                <AnimatePresence>
                                    {openDropdown === 'Yayınlarımız' && renderDropdownItems(yayinlarimiz)}
                                </AnimatePresence>
                            </div>

                            <div className="inline-flex items-center px-1 pt-1 text-lg text-m font-medium text-white">
                                <Link to={"/e-belediye"}>
                                    eBelediye
                                </Link>
                            </div>

                            {/* Other links */}
                            <div className="inline-flex items-center px-1 pt-1 text-lg text-m font-medium text-white">
                                <Link to={"/etkinlikler"}>Etkinlikler
                                </Link>
                            </div>
                            <div className="inline-flex items-center px-1 pt-1 text-lg font-medium text-white">
                                <Link to={"/haberler"}>Haberler
                                </Link>
                            </div>
                            <div className="inline-flex items-center px-1 pt-1 text-lg font-medium text-white">
                                <Link to={"/iletisim"}>
                                    İletişim
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {mobileMenuOpen && (
                <div
                    ref={mobileDropdownRef}
                    className="md:hidden bg-[#022842] border-t border-gray-200 z-[100] rounded-b-lg"
                    id="mobile-menu"
                >
                    <div className="pt-2 pb-4 space-y-1">
                        {/* Kurumsal Dropdown */}
                        <div className="w-full">
                            <button
                                className="w-full flex justify-between items-center py-2 px-4 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                                onClick={() => toggleDropdown('kurumsal-mobile')}
                            >
                                Kurumsal
                                {openDropdown === 'kurumsal-mobile' ? <FiChevronUp className="ml-1"/> :
                                    <FiChevronDown className="ml-1"/>}
                            </button>
                            {openDropdown === 'kurumsal-mobile' && (
                                <div className="pl-6 pr-4 py-2 space-y-2 bg-[#033152]">
                                    {kurumsal.map((item, index) => (
                                        <div
                                            key={index}
                                            className="p-2 flex items-center hover:bg-[#044370] rounded-md cursor-pointer"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                handleMobileItemClick(item.path || '/');
                                            }}
                                        >
                                            <div className="p-2 bg-[#022842] text-white rounded-md mr-3">{item.icon}</div>
                                            <div>
                                                <div className="font-medium text-sm text-white">
                                                    {item.title}
                                                    {item.isEN && <span className="text-gray-300 text-xs ml-1">(EN)</span>}
                                                </div>
                                                <div className="text-gray-300 text-xs">{item.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Gebze Dropdown */}
                        <div className="w-full">
                            <button
                                className="w-full flex justify-between items-center py-2 px-4 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                                onClick={() => toggleDropdown('gebze-mobile')}
                            >
                                Gebze
                                {openDropdown === 'gebze-mobile' ? <FiChevronUp className="ml-1"/> :
                                    <FiChevronDown className="ml-1"/>}
                            </button>
                            {openDropdown === 'gebze-mobile' && (
                                <div className="pl-6 pr-4 py-2 space-y-2 bg-[#033152]">
                                    {gebze.map((item, index) => (
                                        <div
                                            key={index}
                                            className="p-2 flex items-center hover:bg-[#044370] rounded-md cursor-pointer"
                                            onClick={() => handleMobileItemClick(item.path || '/')}
                                        >
                                            <div className="p-2 bg-[#022842] text-white rounded-md mr-3">{item.icon}</div>
                                            <div>
                                                <div className="font-medium text-sm text-white">
                                                    {item.title}
                                                    {item.isEN && <span className="text-gray-300 text-xs ml-1">(EN)</span>}
                                                </div>
                                                <div className="text-gray-300 text-xs">{item.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Hizmetler Dropdown */}
                        <div className="w-full">
                            <button
                                className="w-full flex justify-between items-center py-2 px-4 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                                onClick={() => toggleDropdown('hizmetler-mobile')}
                            >
                                Hizmetler
                                {openDropdown === 'hizmetler-mobile' ? <FiChevronUp className="ml-1"/> :
                                    <FiChevronDown className="ml-1"/>}
                            </button>
                            {openDropdown === 'hizmetler-mobile' && (
                                <div className="pl-6 pr-4 py-2 space-y-2 bg-[#033152]">
                                    {hizmetler.map((item, index) => (
                                        <div
                                            key={index}
                                            className="p-2 flex items-center hover:bg-[#044370] rounded-md cursor-pointer"
                                            onClick={() => handleMobileItemClick(item.path || '/')}
                                        >
                                            <div className="p-2 bg-[#022842] text-white rounded-md mr-3">{item.icon}</div>
                                            <div>
                                                <div className="font-medium text-sm text-white">
                                                    {item.title}
                                                    {item.isEN && <span className="text-gray-300 text-xs ml-1">(EN)</span>}
                                                </div>
                                                <div className="text-gray-300 text-xs">{item.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* eBelediye Dropdown */}
                        <div className="w-full">
                            <button
                                className="w-full flex justify-between items-center py-2 px-4 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                                onClick={() => toggleDropdown('eBelediye-mobile')}
                            >
                                eBelediye
                                {openDropdown === 'eBelediye-mobile' ? <FiChevronUp className="ml-1"/> :
                                    <FiChevronDown className="ml-1"/>}
                            </button>
                            {openDropdown === 'eBelediye-mobile' && (
                                <div className="pl-6 pr-4 py-2 space-y-2 bg-[#033152]">
                                    {eBelediye.map((item, index) => (
                                        <div
                                            key={index}
                                            className="p-2 flex items-center hover:bg-[#044370] rounded-md cursor-pointer"
                                            onClick={() => handleMobileItemClick(item.path || '/')}
                                        >
                                            <div className="p-2 bg-[#022842] text-white rounded-md mr-3">{item.icon}</div>
                                            <div>
                                                <div className="font-medium text-sm text-white">
                                                    {item.title}
                                                    {item.isEN && <span className="text-gray-300 text-xs ml-1">(EN)</span>}
                                                </div>
                                                <div className="text-gray-300 text-xs">{item.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Yayınlarımız Dropdown */}
                        <div className="w-full">
                            <button
                                className="w-full flex justify-between items-center py-2 px-4 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                                onClick={() => toggleDropdown('yayinlarimiz-mobile')}
                            >
                                Yayınlarımız
                                {openDropdown === 'yayinlarimiz-mobile' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
                            </button>
                            {openDropdown === 'yayinlarimiz-mobile' && (
                                <div className="pl-6 pr-4 py-2 space-y-2 bg-[#033152]">
                                    {yayinlarimiz.map((item, index) => (
                                        <div
                                            key={index}
                                            className="p-2 flex items-center hover:bg-[#044370] rounded-md cursor-pointer"
                                            onClick={() => handleMobileItemClick(item.path || '/')}
                                        >
                                            <div className="p-2 bg-[#022842] text-white rounded-md mr-3">{item.icon}</div>
                                            <div>
                                                <div className="font-medium text-sm text-white">
                                                    {item.title}
                                                    {item.isEN && <span className="text-gray-300 text-xs ml-1">(EN)</span>}
                                                </div>
                                                <div className="text-gray-300 text-xs">{item.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Diğer linkler */}
                        <Link

                            to={"/etkinlikler"}
                            className="block py-2 px-4 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenDropdown(null);
                            }}
                        >
                            Etkinlikler
                        </Link>
                        <Link
                            to={"/haberler"}
                            className="block py-2 px-4 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenDropdown(null);
                            }}
                        >
                            Haberler
                        </Link>
                        <Link
                            to={"/iletisim"}
                            className="block py-2 px-4 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenDropdown(null);
                            }}
                        >
                            İletişim
                        </Link>
                    </div>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;