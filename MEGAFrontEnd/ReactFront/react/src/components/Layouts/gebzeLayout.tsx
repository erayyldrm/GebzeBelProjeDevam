import Sidebar from '../SideBar/sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import { gebze } from '../_SayfaBilgileri/Sayfalar';

const GebzeLayout = () => {
    const location = useLocation();
    const pagesWithoutSidebar = [
        '/login',
        '/signup',
        '/gebze/tarihiyerler/*', // Dinamik sayfalar
        '/gebze/fotograflarlaGebze',
        '/gebze/360sanaltur',
        '/gebze/muhtarlar',
        '/gebze/uyeoldugumuzbirlikler',
    ];

    const shouldDisplaySidebar = !pagesWithoutSidebar.some(path => {
        if (path.endsWith('/*')) {
            // Dinamik yollar için kontrol
            return location.pathname.startsWith(path.replace('/*', ''));
        }
        // Tam eşleşmeler için kontrol
        return location.pathname === path;
    });

    return (
        <div className="flex">
            {shouldDisplaySidebar && <Sidebar items={gebze} title="Gebze" />}
            <div className="flex-1 p-6">
                <Outlet />
            </div>
        </div>
    );
};

export default GebzeLayout;
