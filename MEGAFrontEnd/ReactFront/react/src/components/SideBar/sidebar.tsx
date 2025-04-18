import React from 'react';
import { DropdownItem } from '../_SayfaBilgileri/types.tsx';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
    items: DropdownItem[];
    title?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ items, title }) => {
    const location = useLocation();

    return (
        <div className="hidden md:block w-64 shadow-lg rounded-2xl relative top-10 h-75 left-13 z-10 overflow-hidden"
             style={{
                 background: 'linear-gradient(180deg, #003366 0%, #00264d 100%)',
                 borderTopLeftRadius: '1rem',
                 borderTopRightRadius: '1rem',
                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
             }}
        >
            {/* Modern Sidebar Title */}
            <div
                className="p-4 flex items-center justify-center"
                style={{
                    background: 'linear-gradient(135deg, #003366 0%, #00264d 100%)',
                    borderTopLeftRadius: '1rem',
                    borderTopRightRadius: '1rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
            >
                {title && (
                    <h3 className="text-white font-bold text-lg tracking-wide">
                        {title}
                    </h3>
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
                                    className={`flex items-center gap-4 px-5 py-3 transition-all duration-200 
                                    ${isActive
                                        ? " text-[#faa61a] *:text-[#faa61a] font-semibold bg-blue-700"
                                        : "text-white hover:bg-blue-600"}`}
                                >
                                    <span className={`text-xl ${isActive ? 'text-[#faa61a] hover:text-[#faa61a] ' : 'text-white'}`}>
                                        {item.icon}
                                    </span>
                                    <span className="font-medium">{item.title}</span>
                                </Link>
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