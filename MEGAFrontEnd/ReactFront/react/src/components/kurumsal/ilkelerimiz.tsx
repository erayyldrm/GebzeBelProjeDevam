import { useState, useEffect } from 'react';

const BusinessTaxation = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [, setIsTablet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width < 992);
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="mt-3 mx-auto bg-white rounded-xl shadow-lg relative z-10 max-w-4xl px-4 md:px-5 py-6 md:py-8">
            <div className="space-y-6">
                {/* Image Card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <img
                        src="/images/kurumsal/1.jpg"
                        alt="Zinnur Büyükgöz"
                        className="w-full h-auto"
                    />
                </div>

                {/* Text Content Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mt-4">
                    <section className="py-1 md:py-6">
                        <div className="w-full max-w-4xl mx-auto">
                            <h3 className="mb-4 font-sans font-bold text-center tracking-wider">
                                İLKELERİMİZ
                            </h3>

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
                            <div className="mt-0 flex justify-end">
                                <img
                                    src="/images/kurumsal/gebze-belediyesi-logo-png_seeklogo-406755.png"
                                    alt="imza"
                                    className="max-w-[200px] h-auto"
                                />
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
export default BusinessTaxation;