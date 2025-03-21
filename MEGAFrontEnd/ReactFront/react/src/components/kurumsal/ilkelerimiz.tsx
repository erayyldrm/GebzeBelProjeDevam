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
                                            <div className="col-lg-10"> {/* Genişliği artırdım */}
                                                <div className="card text-left" style={{ padding: '20px', width: '100%' }}> {/* Genişlik eklendi */}
                                                    <div className="card-block">
                                                        <h3 style={{ fontWeight: 'bold', textAlign: "center" }}>İlkelerimiz</h3>
                                                        <br />
                                                        <div>
                                                            <ul className="job-details-list" style={{ fontSize: "16px", lineHeight: "2.0", fontWeight: "bold" }}>
                                                                <li>Tüm hizmetlerimizde Gebze halkının ihtiyaç ve beklentilerini merkeze koyarız.</li>
                                                                <li>Gebzelilerin karar alma süreçlerine aktif katılımını destekler, birlikte yönetim anlayışını uygularız.</li>
                                                                <li>Belediye hizmetlerinde en son bilgi teknolojilerini kullanarak modern ve sürdürülebilir çözümler sunarız.</li>
                                                                <li>Gebze’nin yeşil alanlarını koruyarak, çevre dostu projeleri hayata geçiririz.</li>
                                                                <li>Tüm çalışmalarımızda yasal mevzuat ve etik kurallar çerçevesinde hareket ederiz.</li>
                                                                <li>Tüm vatandaşlara eşit hizmet götürmeyi ilke edinir, sosyal adaleti ön planda tutarız.</li>
                                                                <li>Gebze’de istihdamı artıracak projeler geliştirerek, yerel esnaf ve girişimcilere destek oluruz.</li>
                                                                <li>Belediye personelimizin verimli, mutlu ve güvenli bir ortamda çalışmasını sağlarız.</li>
                                                                <li>Gebze’nin geleceğini planlayarak, sorunları oluşmadan çözüm üretmeye çalışırız.</li>
                                                                <li>Gebze’de istihdamı artıracak projeler geliştirerek, yerel esnaf ve girişimcilere destek oluruz.</li>
                                                                <li>Gebze’nin geleceğini planlayarak, sorunları oluşmadan çözüm üretmeye çalışırız.</li>
                                                                <li>Olası afet ve kriz durumlarına karşı hızlı ve etkin çözümler üreterek, vatandaşlarımızın güvenliğini sağlarız.</li>
                                                                <li>Gebze’de sürdürülebilir ve akıcı bir ulaşım ağı kurarak, trafik sorunlarını minimize etmeyi hedefleriz.</li>
                                                                <li>Gebze’nin tarihi ve kültürel dokusunu koruyarak, gelecek nesillere aktarmak için projeler üretiriz.</li>
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