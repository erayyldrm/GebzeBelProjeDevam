import {useEffect, useState} from 'react';
import {kurumsal,gebze,hizmetler,eBelediye} from '../_SayfaBilgileri/Sayfalar.tsx';

import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import {DropdownItem} from '../_SayfaBilgileri/types.tsx';
import {FiChevronDown, FiChevronUp, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {

const navigate = useNavigate();
const handleNavigation = (path: string) => {
        navigate(path);
};



    // State to track which dropdown is open
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
                <div
                    onClick={() => toggleDropdown("any")}
                    className="fixed inset-0 w-full h-full px-[20px]"
                />

                <div
                    id={'zawardo'}
                    className="fixed left-0 right-0 top-0
                    bg-white rounded-md shadow-lg z-30 py-2 grid grid-cols-4 gap-2
                    max-w-[90%] w-full mx-auto"
                    style={{
                        top: scrollPosition > 100 ? '-1000px' : '50px', // Using pixels for more precise control
                        transform: 'translateZ(0)', // Force GPU acceleration
                        transition: 'top 0.7s ease' // Smooth transition
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="p-2 flex items-center hover:bg-gray-100 rounded-md cursor-pointer"
                            onClick={() => handleNavigation(item.path || '/')}
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
        <nav className="bg-[#fff] border-b border-gray-200 z-[100] relative">
            <div className="max-w-full mx-auto px-4">
                <div className="flex justify-between h-30">
                    {/* Logo and mobile menu button */}
                    <div className="flex justify-between w-full md:w-auto">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center md:invisible lg:visible">
                            <a href="http://localhost:5173">
                                <img
                                    src={"/images/logoyatay.png"}
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
                                    className="inline-flex items-center px-1 pt-1 text-lg font-medium text-black"
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
                                    className="inline-flex items-center px-1 pt-1 text-lg font-medium text-black"
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
                                    className="inline-flex items-center px-1 pt-1 text-lg font-medium text-black"
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
                                    className="inline-flex items-center px-1 pt-1 text-lg text-m font-medium text-black"
                                    onClick={() => toggleDropdown('eBelediye')}
                                >
                                    eBelediye
                                    {openDropdown === 'eBelediye' ? <FiChevronUp className="ml-1"/> : <FiChevronDown className="ml-1"/>}
                                </button>
                                {openDropdown === 'eBelediye' && renderDropdownItems(eBelediye)}
                            </div>

                            {/* Other links */}
                            <a href="/etkinlikler" className="inline-flex items-center px-1 pt-1 text-lg text-m font-medium text-black">
                                Etkinlikler
                            </a>
                            <a href="#" className="inline-flex items-center px-1 pt-1 text-lg font-medium text-black">
                                Haberler
                            </a>
                            <a href="#" className="inline-flex items-center px-1 pt-1 text-lg font-medium text-black">
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
                                className="w-full flex justify-between items-center py-2 px-4 text-base font-medium text-white hover:bg-gray-100"
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
                                className="w-full flex justify-between items-center py-2 px-4 text-base font-medium text-white hover:bg-gray-100"
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
                                className="w-full flex justify-between items-center py-2 px-4 text-base font-medium text-white hover:bg-gray-100"
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
                                className="w-full flex justify-between items-center py-2 px-4 text-base font-medium text-white hover:bg-gray-100"
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
                        <a href="#" className="block py-2 px-4 text-base font-medium text-white hover:bg-gray-100">
                            Etkinlikler
                        </a>
                        <a href="#" className="block py-2 px-4 text-base font-medium text-white hover:bg-gray-100">
                            Haberler
                        </a>
                        <a href="#" className="block py-2 px-4 text-base font-medium text-white hover:bg-gray-100">
                            İletişim
                        </a>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;