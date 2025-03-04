import React, { useState } from 'react';
import {
    FiAward,
    FiChevronDown,
    FiChevronUp,
    FiClipboard,
    FiEye,
    FiLayout,
    FiTarget,
    FiUser,
    FiUserCheck
} from 'react-icons/fi';
import {
    FiCode,
    FiSmartphone,
    FiUsers,
    FiCreditCard,
    FiCalendar,
    FiZap,
    FiMaximize,
    FiFileText
} from 'react-icons/fi';
import { BsMoonFill } from 'react-icons/bs';
import './NavBar.css';
// Define types for dropdown items
interface DropdownItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    isEN?: boolean;
}

// Types for our props
interface NavbarProps {
    // You can add any props needed
}

const Navbar: React.FC<NavbarProps> = () => {
    // State to track which dropdown is open
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // Toggle dropdown function
    const toggleDropdown = (name: string) => {
        if (openDropdown === name) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(name);
        }
    };

    // Dropdown content grouped by category
    const kurumsal: DropdownItem[] = [
        { icon: <FiUsers className="text-gray-800" />, title: 'BAŞKAN', description: 'Başkan hakkında bilgi' },
        { icon: <FiEye className="text-gray-800" />, title: 'VİZYONUMUZ', description: 'Vizyonumuz hakkında bilgi' },
        { icon: <FiTarget className="text-gray-800" />, title: 'MİSYONUMUZ', description: 'Misyonumuz hakkında bilgi' },
        { icon: <FiAward className="text-gray-800" />, title: 'İLKELERİMİZ', description: 'İlkelerimiz hakkında bilgi' },
        { icon: <FiUsers className="text-gray-800" />, title: 'BELEDİYE MECLİSİ', description: 'Belediye Meclisi hakkında bilgi' },
        { icon: <FiLayout className="text-gray-800" />, title: 'YÖNETİM ŞEMASI', description: 'Yönetim Şeması hakkında bilgi' },
        { icon: <FiUsers className="text-gray-800" />, title: 'BAŞKAN YARDIMCILARI', description: 'Başkan Yardımcıları hakkında bilgi' },
        { icon: <FiUser className="text-gray-800" />, title: 'BAŞKAN DANIŞMANLARI', description: 'Başkan Danışmanları hakkında bilgi' },
        { icon: <FiFileText className="text-gray-800" />, title: 'MÜDÜRLÜKLER', description: 'Müdürlükler hakkında bilgi' },
        { icon: <FiUsers className="text-gray-800" />, title: 'ESKİ BAŞKANLAR', description: 'Eski Başkanlar hakkında bilgi' },
        { icon: <FiUserCheck className="text-gray-800" />, title: 'ARABULUCULUK KOMİSYONU', description: 'Arabuluculuk Komisyonu hakkında bilgi' },
        { icon: <FiUserCheck className="text-gray-800" />, title: 'ETİK KOMİSYONU', description: 'Etik Komisyonu hakkında bilgi' },
        { icon: <FiClipboard className="text-gray-800" />, title: 'MECLİS KARALARI', description: 'Meclis Kararları hakkında bilgi' },
        { icon: <FiFileText className="text-gray-800" />, title: 'KURUMSAL KİMLİK', description: 'Kurumsal Kimlik hakkında bilgi' },
        { icon: <FiFileText className="text-gray-800" />, title: 'KURUMSAL RAPORLAR', description: 'Kurumsal Raporlar hakkında bilgi' },
        { icon: <FiFileText className="text-gray-800" />, title: 'KURUMSAL DÖKÜMANLAR', description: 'Kurumsal Dökümanlar hakkında bilgi' },
    ];


    const resources: DropdownItem[] = [
        { icon: <FiCode className="text-gray-800" />, title: 'Gömülü', description: 'Cal.com\'u web sitenize yerleştirin' },
        { icon: <BsMoonFill className="text-gray-800" />, title: 'Out Of Office', description: 'Schedule time off with ease' },
        { icon: <FiCreditCard className="text-gray-800" />, title: 'Ödemeler', description: 'Rezervasyon ödemelerini kabul edin' },
        { icon: <FiCalendar className="text-gray-800" />, title: 'Yinelenen etkinlikler', description: 'Yinelenen etkinlikleri planlayın' },
    ];

    const additionalItems: DropdownItem[] = [
        { icon: <FiFileText className="text-gray-800" />, title: 'Blog (EN)', description: 'En son haber ve güncellemelerden haberdar olun', isEN: true },
        { icon: <FiZap className="text-gray-800" />, title: 'Instant Meetings', description: 'Meet with clients in minutes' },
        { icon: <FiUsers className="text-gray-800" />, title: 'Dynamic Group Links', description: 'Seamlessly book meetings with multiple people' },
        { icon: <FiMaximize className="text-gray-800" />, title: 'Web kancaları (EN)', description: 'Bir şey olduğunda bildirim alın', isEN: true },
    ];

    // Render dropdown menu items
    const renderDropdownItems = (items: DropdownItem[]) => {
        return (
            <div id={'zawardo'} className="absolute container mx-auto mt-12 bg-white rounded-md shadow-lg z-10 py-2 grid grid-cols-4 gap-2">
                {items.map((item, index) => (
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
        );
    };

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold">                    <img src={"./images/logoyatay.png"} id={"logo"} alt="Gebze Belediyesi" />
 </span>
                            {/*  <span className="text-xs align-top">®</span> */}
                        </div>

                        {/* Main navbar items */}
                        <div className=" hidden sm:ml-6 sm:flex sm:space-x-8">
                            {/* kurumsal Dropdown */}
                            <div className="relative flex justify-center flex-1">
                                <button
                                    className="inline-flex items-center px-1 pt-1 text-m font-medium text-gray-900"
                                    onClick={() => toggleDropdown('kurumsal')}
                                >
                                    Kurumsal
                                    {openDropdown === 'kurumsal' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
                                </button>
                                {openDropdown === 'kurumsal' && renderDropdownItems(kurumsal)}
                            </div>

                            {/* Enterprise link */}
                            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                                Enterprise
                            </a>

                            {/* Developers Dropdown */}
                            <div className="relative flex justify-center flex-1">
                                <button
                                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                                    onClick={() => toggleDropdown('developers')}
                                >
                                    Geliştirici
                                    {openDropdown === 'developers' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
                                </button>
                                {openDropdown === 'developers' && renderDropdownItems(additionalItems.slice(0, 4))}
                            </div>

                            {/* Resources Dropdown */}
                            <div className="relative flex justify-center flex-1">
                                <button
                                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                                    onClick={() => toggleDropdown('resources')}
                                >
                                    Kaynaklar
                                    {openDropdown === 'resources' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
                                </button>
                                {openDropdown === 'resources' && renderDropdownItems(resources)}
                            </div>

                            {/* Pricing link */}
                            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                                Fiyatlandırma
                            </a>
                        </div>
                    </div>

                    {/* Right side items */}
                    <div className="flex items-center">
                        <a href="#" className="ml-8 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                            Giriş yap
                        </a>
                        <a href="#" className="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800">
                            Başlayın
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;