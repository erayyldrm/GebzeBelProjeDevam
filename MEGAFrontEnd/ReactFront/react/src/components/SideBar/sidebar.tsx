import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar sidebar-style-two" style={{ width: '400px', padding: '10px' }}>
            <div className="widget widget_categories">
                <h3 className="widget-title" style={{ fontSize: '16px' }}>KURUMSAL</h3>
                <div className="widget-content">
                    <ul className="categories-list" style={{ fontSize: '14px' }}>
                        <li className="current"><a href="business-taxation.html"><i className="icon-line-chart"></i>Başkan</a></li>
                        <li><a href="law-justice.html"><i className="icon-shield"></i>Vizyonumuz / Misyonumuz / İlkelerimiz</a></li>
                        <li><a href="government-election.html"><i className="icon-election"></i>Belediye Meclisi</a></li>
                        <li><a href="pets-area.html"><i className="icon-pets"></i>Başkan Yardımcıları</a></li>
                        <li><a href="employment-jo.html"><i className="icon-suitcase"></i>Başkan Danışmanları</a></li>
                        <li><a href="real-estate-building.html"><i className="icon-building"></i>Müdürlükler</a></li>
                        <li><a href="sideways.html"><i className="icon-building"></i>Eski Başkanlar</a></li>
                        <li><a href="sideways.html"><i className="icon-building"></i>Arabuluculuk Komisyonları</a></li>
                        <li><a href="sideways.html"><i className="icon-building"></i>Etik Komisyonu</a></li>
                        <li><a href="sideways.html"><i className="icon-parking"></i>Meclis Kararları</a></li>
                        <li><a href="sideways.html"><i className="icon-parking"></i>Kurumsal Kimlik</a></li>
                        <li><a href="sideways.html"><i className="icon-parking"></i>Kurumsal Raporlar</a></li>
                        <li><a href="sideways.html"><i className="icon-parking"></i>Kurumsal Dökümanalr</a></li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

