import {Menu,File, X, Home, Users, LogOut, ChevronDown, ChevronRight} from 'lucide-react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {logout} from "./services/authService.tsx";
import { useState } from 'react';

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
const categorizedPages = [
    {
        title: "Kurumsal",
        pages: [
            { key: "KURUMSAL_BASKAN_MISYON_VIZYON_ILKELERIMIZ", name: "Başkan ve Vizyon", path: "kurumsal-baskan-vizyon" },
            { key: "KURUMSAL_ETIK_ARABULUCULUK", name: "Etik ve Arabuluculuk", path: "kurumsal-etik" },
            { key: "KURUMSAL_MECLIS", name: "Meclis", path: "kurumsal-meclis" },
            { key: "KURUMSAL_MECLIS_ESKIBASKANLAR", name: "Eski Başkanlar", path: "kurumsal-eskibaskanlar" },
            { key: "KURUMSAL_YONETIM_SEMASI", name: "Yönetim Şeması", path: "kurumsal-yonetim" },
        ]
    },
    {
        title: "Tarihi Yerler",
        pages: [
            { key: "GEBZE_TARİHİ_YERLER", name: "Tarihi Yerler", path: "tarihi-yerler" },
            { key: "TARİHİ_YERLER", name: "Tarihi Yerler (Alt)", path: "tarihi-yerler-alt" },
            { key: "GEBZE_TARIHIYERLER_GALERI", name: "Galeri", path: "tarihi-yerler-galeri" },
            { key: "GEBZE_TARIHIYERLER_AKTIVITELER", name: "Aktiviteler", path: "tarihi-yerler-aktiviteler" },
        ]
    },
    {
        title: "Hizmetler",
        pages: [
            { key: "HIZMETLER_DETAY", name: "Hizmet Detayı", path: "hizmet-detay" },
            { key: "HIZMETLER_DETAYLI_BILGI", name: "Detaylı Bilgi", path: "hizmet-bilgi" },
            { key: "HİZMETLER_GERİ_DONUSUM", name: "Geri Dönüşüm", path: "geri-donusum" },
            { key: "HIZMETLER_TUMU", name: "Tüm Hizmetler", path: "tum-hizmetler" },
        ]
    },
    {
        title: "Fotoğraf ve Tur",
        pages: [
            { key: "GEBZE_FOTOĞRAF_SANAL_TUR", name: "Sanal Tur", path: "foto-tur" },
            { key: "GEBZE_MAHALLEMUHTARLARI", name: "Mahalle Muhtarları", path: "muhtarlar" },
        ]
    },
    {
        title: "Meclis ve Belgeler",
        pages: [
            { key: "MECLIS_KARARLARI_KURUMSAL_KIMLIK_KURUMSAL_RAPORLAR_KURUMSAL_DÖKÜMANLAR", name: "Meclis Kararları ve Belgeler", path: "meclis-belgeler" },
        ]
    },
    {
        title: "Diğer",
        pages: [
            { key: "GEBZE_KARDESSEHIRLER", name: "Kardeş Şehirler", path: "kardes-sehirler" },
            { key: "GEBZE_TARIHCE_BUGUNKUGEBZE", name: "Tarihçe", path: "tarihce" },
            { key: "GEBZE_UYE_OLDUGUMUZ_BIRLIKLER", name: "Üye Birlikler", path: "uye-birlikler" },
            { key: "HTE_GEBZE_UYE_OLDUGUMUZ_BIRLIKLER", name: "Üye Birlikler (HTE)", path: "uye-birlikler-hte" },
            { key: "KULLANICILAR", name: "Kullanıcılar", path: "kullanicilar" },
            { key: "MUDURLUKLER", name: "Müdürlükler", path: "mudurlukler" },
        ]
    }
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const [pagesOpenIndex, setPagesOpenIndex] = useState<number | null>(null);

    const handleLogout = () => {
        logout(); // Calls authService logout
        navigate('/login');
    };

    return (
        <div className={`${sidebarOpen ? 'w-56' : 'w-16'} min-w-16 bg-gray-900 text-white transition-all duration-300 flex flex-col h-screen shadow-xl`}>
            {/* Header with logo and toggle button */}
            <div className="py-4 px-3 flex items-center justify-between border-b border-gray-800">
                {sidebarOpen ? (
                    <h1 className="text-xl font-bold text-indigo-400">Gebze Admin Panel</h1>
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
                    <SidebarLink to={"/admin/dashboard"} icon={<Home size={20} />} text="Panel" sidebarOpen={sidebarOpen} active={location.pathname === "/admin/dashboard"}  />
                    <SidebarLink to={"/admin/users"} icon={<Users size={20} />} text="Kullanıcılar" sidebarOpen={sidebarOpen} active={location.pathname === "/admin/users"} />
                    {categorizedPages.map((category, index) => (
                        <div key={index} className="pb-1">
                            <button
                                onClick={() => setPagesOpenIndex(pagesOpenIndex === index ? null : index)}
                                className={`flex items-center w-full rounded-md py-2.5 transition-all hover:bg-gray-800 ${
                                    sidebarOpen ? "px-3" : "justify-center px-2"
                                }`}
                            >
                                <div className={`flex justify-center ${sidebarOpen ? '' : 'w-full'}`}>
        <span className="text-gray-300">
          {pagesOpenIndex === index ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </span>
                                </div>
                                {sidebarOpen && (
                                    <span className="ml-3 text-sm font-medium text-gray-300">{category.title}</span>
                                )}
                            </button>

                            {pagesOpenIndex === index &&
                                category.pages.map(page => (
                                    <SidebarLink
                                        key={page.key}
                                        to={`/admin/sayfalar/${page.path}`}
                                        icon={<File size={18} />}
                                        text={page.name}
                                        sidebarOpen={sidebarOpen}
                                        active={location.pathname === `/admin/sayfalar/${page.path}`}
                                    />
                                ))}
                        </div>
                    ))}

                </div>
            </div>

            {/* Logout button */}
            <div className="mt-auto px-2 py-3">
                <a onClick={handleLogout} className={`flex items-center rounded-md py-2.5 transition-all hover:bg-gray-800 ${sidebarOpen ? 'px-3' : 'justify-center px-2'}`}>
                    <LogOut size={20} className="text-gray-300" />
                    {sidebarOpen && <span className="ml-3 text-sm font-medium text-gray-300">Çıkış Yap</span>}
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
