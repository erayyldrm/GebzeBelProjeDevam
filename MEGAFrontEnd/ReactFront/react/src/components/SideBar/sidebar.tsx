import React, { useState } from 'react';
import { DropdownItem } from '../_SayfaBilgileri/types.tsx';
import { Link, useLocation } from 'react-router-dom';
// FontAwesome ikonunu içe aktarma
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
    items: DropdownItem[];
    title?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ items, title }) => {
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            className={`hidden lg:block ${collapsed ? 'w-16' : 'w-72'} shadow-lg rounded-2xl relative top-10 h-75 left-13 z-10 overflow-hidden transition-all duration-300`}
            style={{
                background: 'linear-gradient(180deg, #003366 0%, #00264d 100%)',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
        >
            {/* Modern Sidebar Title */}
            <div
                className="p-4 relative"
                style={{
                    background: 'linear-gradient(135deg, #003366 0%, #00264d 100%)',
                    borderTopLeftRadius: '1rem',
                    borderTopRightRadius: '1rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
            >
                {/* Sidebar genişken: ortada başlık ve sağda ok ikonu */}
                {!collapsed && (
                    <>
                        {title && (
                            <div className="flex justify-center">
                                <h3 className="text-white font-bold text-lg tracking-wide text-center uppercase">
                                    {title}
                                </h3>
                            </div>
                        )}

                        <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#faa61a] transition-colors duration-200"
                            onClick={toggleSidebar}
                            aria-label="Kenar çubuğunu daralt"
                        >
                            <FontAwesomeIcon icon={faAnglesLeft} />
                        </button>
                    </>
                )}

                {/* Sidebar darken: ortada ok ikonu */}
                {collapsed && (
                    <div className="flex justify-center">
                        <button
                            className="text-white hover:text-[#faa61a] transition-colors duration-200"
                            onClick={toggleSidebar}
                            aria-label="Kenar çubuğunu genişlet"
                        >
                            <FontAwesomeIcon icon={faAnglesRight} />
                        </button>
                    </div>
                )}
            </div>

            {/* Sidebar Menu Items with modern styling */}
            <ul className="py-2">
                {items.length > 0 ? (
                    items.map((item, index) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <li key={index}>
                                <Link
                                    to={item.path || "#"}
                                    className={`flex items-center ${collapsed ? 'justify-center' : ''} py-3 transition-all duration-200 
                                    ${isActive
                                        ? " text-[#faa61a] *:text-[#faa61a] font-semibold bg-blue-700 hover:no-underline"
                                        : "text-white hover:bg-blue-600 hover:no-underline"}`}
                                >
                                    {!collapsed && (
                                        <div className="flex items-center w-full pl-6">
                                            <span className={`text-xl ${isActive ? 'text-[#faa61a] hover:text-[#faa61a] ' : 'text-white'} mr-3`}>
                                                {item.icon}
                                            </span>
                                            <span className="font-medium">{item.title}</span>
                                        </div>
                                    )}
                                    {collapsed && (
                                        <span className={`text-xl ${isActive ? 'text-[#faa61a] hover:text-[#faa61a] ' : 'text-white'}`}>
                                            {item.icon}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        );
                    })
                ) : (
                    <li className={`${collapsed ? 'text-center' : 'p-4'} text-white`}>
                        {collapsed ? '...' : 'Öğe bulunamadı'}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;