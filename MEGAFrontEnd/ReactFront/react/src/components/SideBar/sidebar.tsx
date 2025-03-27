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
        <div className="hidden md:block w-64 bg-white shadow-md rounded-lg sticky top-0 ">



        {/* Sidebar Title */}
            <div className="p-5 border-b border-gray-300">
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            </div>

            {/* Sidebar Menu Items */}
            <ul className="mt-2">
                {items.length > 0 ? (
                    items.map((item, index) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <li key={index}>
                                <Link
                                    to={item.path || "#"}
                                    className={`flex items-center gap-3 p-4 transition-colors border-b border-gray-200 
                                    ${isActive ? "bg-gray-100 text-blue-600 font-semibold" : "text-gray-700 hover:bg-gray-200"} 
                                    ${index === items.length - 1 ? 'border-b-0' : ''}`}
                                >
                                    <span className={`text-xl ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                                        {item.icon}
                                    </span>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })
                ) : (
                    <li className="p-4 text-gray-500">No items available</li>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
