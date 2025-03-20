import React from 'react';

const İlkelerimiz: React.FC = () => {
    return (
        <div id="pcoded" className="pcoded" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div className="pcoded-overlay-box"></div>
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-lg-8">
                                                <div className="card text-left">
                                                    <div className="card-block">
                                                        <h3 style={{ fontWeight: 'bold', textAlign:"center" }}>ilkelerimiz</h3>
                                                        <br />
                                                        <div>
                                                            <ul className="job-details-list" style={{ fontSize: "16px", lineHeight: "2.0", fontWeight: "bold" }}>
                                                                <li>Belediye hizmetlerinde kalite, etkinlik ve verimlilik sağlamak görevimizdir.</li>
                                                                <li>Belediye karar ve uygulamalarında şeffaflık ve hesap verebilirlik esastır.</li>
                                                                <li>Belediye hizmetlerinde insan ve vatandaş odaklılık esastır.</li>
                                                                <li>Gebze’yi katılımcı anlayışla yönetmek temel prensiptir.</li>
                                                                <li>Belediye hizmetlerinin üretim ve sunumunda bilgi teknolojilerinden azami derecede yararlanmak esastır.</li>
                                                                <li>Belediye karar ve uygulamalarında yasalara uymak zorunluluktur.</li>
                                                                <li>Belediye hizmetlerinin ihtiyaçlara ve önceliklere göre adil dağıtımı esastır.</li>
                                                                <li>Çalışanlarımızın memnuniyeti temel önceliklerimizdendir.</li>
                                                                <li>Kurum kültürünün oluşturulması için çaba sarf ederiz.</li>
                                                                <li>Sorunları oluşmadan önlemeye çalışırız.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default İlkelerimiz;