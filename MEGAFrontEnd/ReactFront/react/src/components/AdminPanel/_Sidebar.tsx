// components/Sidebar.tsx
import { Menu, X, Home, Users, Package, Calendar, Settings, LogOut } from 'lucide-react';
import { Link } from "react-router-dom";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

export default function _Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
    return (
        <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-blue-900 text-white transition-all duration-300 flex flex-col`}>
            <div className="p-4 flex items-center justify-between">
                {sidebarOpen && <h1 className="text-xl font-bold">AdminPanel</h1>}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-2 rounded-lg hover:bg-blue-800"
                >
                    {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>


            <nav className="flex-1 pt-5">
                <div className={`flex flex-col ${!sidebarOpen && "items-center"}`}>
                    <Link to="/admin/dashboard" className="flex items-center p-4 text-white hover:bg-blue-800 rounded-lg mx-2">
                        <Home size={24} className="min-w-6 min-h-6" />
                        {sidebarOpen && <span className="ml-3">Dashboard</span>}
                    </Link>
                    <Link to="/admin/users" className="flex items-center p-4 text-white hover:bg-blue-800 rounded-lg mx-2">
                        <Users size={20} />
                        {sidebarOpen && <span className="ml-3">Users</span>}
                    </Link>
                    <Link to="/products" className="flex items-center p-4 text-white hover:bg-blue-800 rounded-lg mx-2">
                        <Package size={20} />
                        {sidebarOpen && <span className="ml-3">Products</span>}
                    </Link>
                    <Link to="/calendar" className="flex items-center p-4 text-white hover:bg-blue-800 rounded-lg mx-2">
                        <Calendar size={20} />
                        {sidebarOpen && <span className="ml-3">Calendar</span>}
                    </Link>
                    <Link to="/settings" className="flex items-center p-4 text-white hover:bg-blue-800 rounded-lg mx-2">
                        <Settings size={20} />
                        {sidebarOpen && <span className="ml-3">Settings</span>}
                    </Link>
                </div>
            </nav>

            <div className="p-4">
                <a href="/logout" className={`flex items-center text-white hover:bg-blue-800 p-4 rounded-lg ${!sidebarOpen && 'justify-center'}`}>
                    <LogOut size={20} />
                    {sidebarOpen && <span className="ml-3">Logout</span>}
                </a>
            </div>
        </div>
    );
}