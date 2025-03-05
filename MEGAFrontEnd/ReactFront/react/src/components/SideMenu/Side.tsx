import React from 'react';
import './side.css';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                {/* Logo */}
                <div className="logo-container">
                    <img src="logo.png" alt="Logo" className="logo" />
                </div>

                {/* Sidebar Content */}
                <div className="sidebar-content">
                    <h1>Gebze Belediye Başkanı</h1>
                    <h2>Zinnur Büyükgöz</h2>
                </div>

                {/* Links */}
                <ul className="sidebar-links">
                    <li>
                        <a href="#">Link 1</a>
                    </li>
                    <li>
                        <a href="#">Link 2</a>
                    </li>
                    <li>
                        <a href="#">Link 3</a>
                    </li>
                    <li>
                        <a href="#">Link 4</a>
                    </li>
                    <li>
                        <a href="#">Link 5</a>
                    </li>
                </ul>

                {/* Social Media Icons */}
                <ul className="social-media">
                    <li>
                        <a href="#">
                            <img src="social-icon.png" alt="Icon" className="social-icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
