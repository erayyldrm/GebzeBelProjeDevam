import { Menu, X, Home, Users, Package, Calendar, Settings, LogOut } from 'lucide-react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {logout} from "./services/authService.tsx";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

interface SidebarLinkProps {
    to: string;
    icon: React.ReactNode;
    text: string;
    sidebarOpen: boolean;
    active?: boolean;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Calls authService logout
        navigate('/login');
    };

    return (
        <div className={`${sidebarOpen ? 'w-56' : 'w-16'} min-w-16 bg-gray-900 text-white transition-all duration-300 flex flex-col h-screen shadow-xl`}>
            {/* Header with logo and toggle button */}
            <div className="py-4 px-3 flex items-center justify-between border-b border-gray-800">
                {sidebarOpen ? (
                    <h1 className="text-xl font-bold text-indigo-400">AdminPanel</h1>
                ) : (
                    <div className="w-full flex justify-center">
                        <span className="font-bold text-lg text-indigo-400">A</span>
                    </div>
                )}

                {/* Toggle button always visible */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-1.5 rounded-md hover:bg-gray-800 text-gray-300 hover:text-indigo-400 z-10"
                >
                    {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {/* Navigation items */}
            <div className="flex-1 py-3 overflow-y-auto">
                <div className="flex flex-col space-y-0.5 px-2">
                    <SidebarLink to="/admin/dashboard" icon={<Home size={20} />} text="Dashboard" sidebarOpen={sidebarOpen} active={location.pathname === "/admin/dashboard"}  />
                    <SidebarLink to="/admin/users" icon={<Users size={20} />} text="Users" sidebarOpen={sidebarOpen} active={location.pathname === "/admin/users"} />
                    <SidebarLink to="/products" icon={<Package size={20} />} text="Products" sidebarOpen={sidebarOpen} />
                    <SidebarLink to="/calendar" icon={<Calendar size={20} />} text="Calendar" sidebarOpen={sidebarOpen} />
                    <SidebarLink to="/settings" icon={<Settings size={20} />} text="Settings" sidebarOpen={sidebarOpen} />
                </div>
            </div>

            {/* Logout button */}
            <div className="mt-auto px-2 py-3">
                <a onClick={handleLogout} className={`flex items-center rounded-md py-2.5 transition-all hover:bg-gray-800 ${sidebarOpen ? 'px-3' : 'justify-center px-2'}`}>
                    <LogOut size={20} className="text-gray-300" />
                    {sidebarOpen && <span className="ml-3 text-sm font-medium text-gray-300">Logout</span>}
                </a>
            </div>
        </div>
    );
}

const SidebarLink = ({ to, icon, text, sidebarOpen, active = false }: SidebarLinkProps) => {
    return (
        <Link
            to={to}
            className={`flex items-center rounded-md py-2.5 transition-all ${
                active ? "bg-indigo-500/20" : "hover:bg-gray-800"
            } ${sidebarOpen ? "px-3" : "justify-center px-2"}`}
        >
            <div className={`flex justify-center ${sidebarOpen ? '' : 'w-full'}`}>
                <div className={active ? "text-indigo-400" : "text-gray-300"}>
                    {icon}
                </div>
            </div>
            {sidebarOpen && (
                <span className={`ml-3 text-sm font-medium ${active ? "text-indigo-400" : "text-gray-300"}`}>
                    {text}
                </span>
            )}
        </Link>
    );
};
