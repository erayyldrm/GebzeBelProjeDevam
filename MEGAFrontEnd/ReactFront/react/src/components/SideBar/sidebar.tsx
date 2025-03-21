import React from 'react';
import {DropdownItem} from '../_SayfaBilgileri/types.tsx'

interface SidebarProps {
    items: DropdownItem[]; // Ensure items is correctly typed
}


const Sidebar: React.FC<SidebarProps> = ({ items }) => {
    return (
        <div className="widget widget_categories">
            <h3 className="widget-title">SIDEBAR</h3>
            <div className="widget-content">
                <ul className="categories-list">
                    {items && items.length > 0 ? (
                        items.map((item, index) => (
                            <li key={index}>
                                <a href={item.path || "#"}>
                                    {item.icon}
                                    {item.title}
                                </a>
                            </li>
                        ))
                    ) : (
                        <li>No items available</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
