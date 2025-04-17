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
        <div className="hidden md:block w-64 bg-[#ffffff] shadow-md rounded-2xl relative top-10 h-75 left-13 z-10">



        {/* Sidebar Title */}
            <div className="p-3 bg-[#f7a600] rounded-t-2xl h-32 flex items-center justify-center">
                <h2 className="text-xl font-bold text-white text-center">{title}</h2>
            </div>

            {/* Sidebar Menu Items */}
            <ul className="mt-1">
                {items.length > 0 ? (
                    items.map((item, index) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <li key={index}>
                                <Link
                                    to={item.path || "#"}
                                    className={`flex items-center gap-5 p-3 transition-colors 
                                    ${isActive ? "text-blue-600 font-semibold" : "text-black hover:bg-[gray-200]"} 
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
