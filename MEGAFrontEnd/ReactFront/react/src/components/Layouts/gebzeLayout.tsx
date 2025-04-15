import Sidebar from '../SideBar/sidebar.tsx';
import { Outlet, useLocation } from 'react-router-dom';
import { gebze } from '../_SayfaBilgileri/Sayfalar.tsx';

const GebzeLayout = () => {
    const location = useLocation();
    const pagesWithoutSidebar = ['/login', '/signup','/tarihiyerler','/gebze/tarihiyerler','/gebze/fotograflarlaGebze','/gebze/360sanaltur','/gebze/muhtarlar','/gebze/uyeoldugumuzbirlikler']; // Sidebar istemediğiniz sayfaların path'lerini ekleyin.

    const shouldDisplaySidebar = !pagesWithoutSidebar.includes(location.pathname);

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
