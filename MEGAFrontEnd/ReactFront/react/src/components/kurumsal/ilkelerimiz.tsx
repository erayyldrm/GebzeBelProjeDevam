
import React, { useState, useEffect } from 'react';

const İlkelerimiz: React.FC = () => {
    const [, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200
    );

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id="pcoded" className="pcoded">
            <div className="pcoded-container navbar-wrapper bg-transparent">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <div className="flex justify-center">
                                            {/* Reduced max width and added more padding */}
                                            <div className="w-full max-w-4xl px-8 md:px-12">
                                                {/* Header */}
                                                <div className="shadow p-4 bg-white rounded-xl text-center mt-4">
                                                    <h1 className="text-xl md:text-3xl font-bold">İLKELERİMİZ</h1>
                                                </div>

                                                {/* Content */}
                                                <div className="my-4">
                                                    <div className="card bg-white shadow-lg rounded-lg">
                                                        <div className="p-4 md:p-6">
                                                            {/* Image */}
                                                            <div className="mb-4">
                                                                <img
                                                                    src="/images/kurumsal/1.jpg"
                                                                    alt="Vizyon"
                                                                    className="img-fluid rounded w-full h-auto object-cover"
                                                                />
                                                            </div>

                                                            {/* Text */}
                                                            <div className="text mb-10 md:mb-20 lg:mb-40">
                                                                <ul className="text-base leading-relaxed list-none w-full m-0 text-left">
                                                                    <li className="mb-3 md:mb-4"><span className="text-blue-700 font-semibold mr-2">➤</span> Gebze'nin yeşil alanlarını koruyarak, çevre dostu projeleri hayata geçiririz.</li>
                                                                    <li className="mb-3 md:mb-4"><span className="text-blue-700 font-semibold mr-2">➤</span> Tüm hizmetlerimizde Gebze halkının ihtiyaç ve beklentilerini merkeze koyarız.</li>
                                                                    <li className="mb-3 md:mb-4"><span className="text-blue-700 font-semibold mr-2">➤</span> Gebze'nin geleceğini planlayarak, sorunları oluşmadan çözüm üretmeye çalışırız.</li>
                                                                    <li className="mb-3 md:mb-4"><span className="text-blue-700 font-semibold mr-2">➤</span> Belediye personelimizin verimli, mutlu ve güvenli bir ortamda çalışmasını sağlarız.</li>
                                                                    <li className="mb-3 md:mb-4"><span className="text-blue-700 font-semibold mr-2">➤</span> Tüm çalışmalarımızda yasal mevzuat ve etik kurallar çerçevesinde hareket ederiz.</li>
                                                                    <li className="mb-3 md:mb-4"><span className="text-blue-700 font-semibold mr-2">➤</span> Tüm vatandaşlara eşit hizmet götürmeyi ilke edinir, sosyal adaleti ön planda tutarız.</li>
                                                                    <li className="mb-3 md:mb-4"><span className="text-blue-700 font-semibold mr-2">➤</span> Gebze'de istihdamı artıracak projeler geliştirerek, yerel esnaf ve girişimcilere destek oluruz.</li>
                                                                    <li className="mb-3 md:mb-4"><span className="text-blue-700 font-semibold mr-2">➤</span> Gebze'nin tarihi ve kültürel dokusunu koruyarak, gelecek nesillere aktarmak için projeler üretiriz.</li>
                                                                    <li className="mb-3 md:mb-4"><span className="text-blue-700 font-semibold mr-2">➤</span> Gebzelilerin karar alma süreçlerine aktif katılımını destekler, birlikte yönetim anlayışını uygularız.</li>
                                                                    <li className="mb-3 md:mb-4"><span className="text-blue-700 font-semibold mr-2">➤</span> Gebze'de sürdürülebilir ve akıcı bir ulaşım ağı kurarak, trafik sorunlarını minimize etmeyi hedefleriz.</li>
                                                                    <li className="mb-3 md:mb-4"><span className="text-blue-700 font-semibold mr-2">➤</span> Belediye hizmetlerinde en son bilgi teknolojilerini kullanarak modern ve sürdürülebilir çözümler sunarız.</li>
                                                                    <li className="mb-3 md:mb-4"><span className="text-blue-700 font-semibold mr-2">➤</span> Olası afet ve kriz durumlarına karşı hızlı ve etkin çözümler üreterek, vatandaşlarımızın güvenliğini sağlarız.</li>
                                                                </ul>
                                                            </div>

                                                            {/* Logo */}
                                                            <div className="mt-4 flex justify-end">
                                                                <img
                                                                    src="/images/kurumsal/gebze-belediyesi-logo-png_seeklogo-406755.png"
                                                                    alt="logo"
                                                                    className="max-w-[180px] h-auto"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> {/* End of Row */}
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