import React from 'react';
import { DropdownItem } from '../_SayfaBilgileri/types.tsx';
import { useLocation } from 'react-router-dom';

interface SidebarProps {
    items: DropdownItem[];
    title?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ items, title }) => {
    const location = useLocation();

    return (
        <div className="sidebar-container w-80 bg-gradient-to-b from-[#022842] to-[#03465d] text-white rounded-lg shadow-lg">
            {title && (
                <div className="p-6 border-b border-gray-200">
                    <h2 className="font-bold text-2xl">{title}</h2>
                </div>
            )}
            <ul className="sidebar-menu">
                {items.length > 0 ? (
                    items.map((item, index) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <li key={index} className={`transition-all duration-300 ${isActive ? 'bg-[#1a3e5f]' : ''}`}>
                                <a
                                    href={item.path || '#'}
                                    className={`flex items-center p-4 hover:bg-[#1a3e5f] transition-all duration-300 border-b border-gray-200 ${isActive ? 'bg-[#1a3e5f]' : ''}`}
                                >
                                    <span className={`mr-4 ${isActive ? 'text-yellow-400' : 'text-gray-300'}`}>
                                        {item.icon}
                                    </span>
                                    <span className={`font-medium ${isActive ? 'text-yellow-400' : 'text-gray-200'}`}>
                                        {item.title}
                                    </span>
                                </a>
                            </li>
                        );
                    })
                ) : (
                    <li className="p-4 text-white">No items available</li>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
