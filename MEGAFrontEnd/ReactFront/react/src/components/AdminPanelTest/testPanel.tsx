import React, { useState } from 'react';
// Import icons from lucide-react
import { LayoutDashboard, Users, Settings, BarChart3, Bell, UserCircle, ChevronDown, ChevronRight } from 'lucide-react';

// Define TypeScript interfaces if needed (optional for this simple example)
interface SidebarItemProps {
    icon: React.ElementType;
    text: string;
    active?: boolean;
    onClick: () => void;
}

// Sidebar Item Component
const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, text, active, onClick }) => (
    <li
        className={`
      relative flex items-center py-3 px-4 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group
      ${active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
        onClick={onClick}
    >
        <Icon size={20} className="mr-3" />
        <span className="overflow-hidden transition-all w-52 ml-3">{text}</span>
        {!active && (
            <div
                className={`
        absolute left-full rounded-md px-2 py-1 ml-6
        bg-indigo-100 text-indigo-800 text-sm
        invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-50
      `} // Tooltip for collapsed sidebar (example)
            >
                {text}
            </div>
        )}
    </li>
);

// Header Component
const Header: React.FC<{ title: string }> = ({ title }) => (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                <Bell size={20} />
            </button>
            <div className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-gray-100">
                <UserCircle size={24} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Admin User</span>
                <ChevronDown size={16} className="text-gray-500" />
            </div>
        </div>
    </header>
);

// Main Content Area Component (Placeholder)
const MainContent: React.FC<{ activeSection: string }> = ({ activeSection }) => {
    // Render different content based on the active section
    const renderContent = () => {
        switch (activeSection) {
            case 'Overview':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Example Stats Cards */}
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                            <h3 className="text-sm font-medium text-gray-500 mb-1">Total Users</h3>
                            <p className="text-3xl font-semibold text-gray-800">1,234</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                            <h3 className="text-sm font-medium text-gray-500 mb-1">Revenue</h3>
                            <p className="text-3xl font-semibold text-gray-800">$56,789</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                            <h3 className="text-sm font-medium text-gray-500 mb-1">Orders</h3>
                            <p className="text-3xl font-semibold text-gray-800">512</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                            <h3 className="text-sm font-medium text-gray-500 mb-1">Pending Tasks</h3>
                            <p className="text-3xl font-semibold text-gray-800">23</p>
                        </div>
                    </div>
                );
            case 'Users':
                return <div className="bg-white p-6 rounded-lg shadow"><h2 className="text-xl font-semibold mb-4">User Management</h2><p>User list and management tools would go here.</p></div>;
            case 'Analytics':
                return <div className="bg-white p-6 rounded-lg shadow"><h2 className="text-xl font-semibold mb-4">Analytics Dashboard</h2><p>Charts and data visualizations would go here.</p></div>;
            case 'Settings':
                return <div className="bg-white p-6 rounded-lg shadow"><h2 className="text-xl font-semibold mb-4">Application Settings</h2><p>Configuration options would go here.</p></div>;
            default:
                return <div>Select a section</div>;
        }
    };

    return (
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
            {renderContent()}
        </main>
    );
};


// Main App Component
const App: React.FC = () => {
    // State to track the active sidebar item
    const [activeItem, setActiveItem] = useState<string>('Overview');
    const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(true); // State for sidebar expansion

    const sidebarItems = [
        { name: 'Overview', icon: LayoutDashboard },
        { name: 'Users', icon: Users },
        { name: 'Analytics', icon: BarChart3 },
        { name: 'Settings', icon: Settings },
    ];

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
        </div>
    );
};

export default App;
