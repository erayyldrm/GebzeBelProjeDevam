import React from 'react';
import {DropdownItem} from '../_SayfaBilgileri/types.tsx'
import { useLocation } from 'react-router-dom';

interface SidebarProps {
    items: DropdownItem[]; // Ensure items is correctly typed
    title?: string;
    isActive?: boolean;
}


const Sidebar: React.FC<SidebarProps> = ({ items,title }) => {
    const location = useLocation();

    return (
        <div className="sidebar-container border border-gray-200 rounded">
            <div className="p-4 border-b border-gray-200">
                <h2 className="font-bold text-2xl text-gray-800">{title}</h2>

            </div>

            <ul className="sidebar-menu">
                {items && items.length > 0 ? (
                    items.map((item, index) => {
                        // Determine if this item is active based on current URL path
                        const isActive = location.pathname === item.path;

                        return (
                            <li
                                key={index}
                                className={isActive ? "current" : ""}
                            >
                                <a
                                    href={item.path || "#"}
                                    className={`flex items-center p-4 hover:bg-gray-50 border-b border-gray-200 ${
                                        index === items.length - 1 ? 'border-b-0' : ''
                                    }`}
                                >
                  <span className={`mr-4 ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
                    {item.icon}
                  </span>
                                    <span className={`font-medium ${isActive ? 'text-blue-600' : 'text-gray-800'}`}>
                    {item.title}
                  </span>
                                </a>
                            </li>
                        );
                    })
                ) : (
                    <li className="p-4">No items available</li>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
