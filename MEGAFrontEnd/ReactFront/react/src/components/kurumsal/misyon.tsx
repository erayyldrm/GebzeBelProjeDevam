import React, { useState, useEffect } from 'react';

const MisionPage: React.FC = () => {
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
        // Ana kapsayıcı
        <div id="pcoded" className="pcoded">
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <div className="flex flex-col lg:flex-row gap-4">
                                            {/* Ana İçerik Alanı */}
                                            <div className="flex-1 p-2 md:p-4">
                                                {/* Başlık */}
                                                <div className="shadow p-3 md:p-4 bg-white rounded-xl text-center">
                                                    <h1 className="text-xl md:text-3xl font-bold">MİSYONUMUZ</h1>
                                                </div>
                                                {/* Başlık ve içerik arası boşluk */}
                                                <div className="my-3 md:my-6"></div>

                                                {/* İçerik Alanı */}
                                                <div className="shadow-lg rounded-lg">
                                                    <div className="p-2 md:p-4">
                                                        {/* Görsel Kartı */}
                                                        <div className="bg-white rounded-xl shadow-md p-3 md:p-4 mb-4">
                                                            <div className="flex-shrink-0 w-full">
                                                                <div className="relative">
                                                                    <img
                                                                        src="/images/kurumsal/1.jpg"
                                                                        alt="Zinnur Büyükgöz"
                                                                        className="w-full h-auto rounded-lg object-cover"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Metin Kartı */}
                                                        <div className="bg-white rounded-lg shadow-md p-3 md:p-4">
                                                            <div className="w-full">
                                                                <div className="mb-5 md:mb-7 text-sm md:text-base text-justify">
                                                                    Gebze Belediyesi olarak, kentimizin yaşam kalitesini artırmak, sürdürülebilir kalkınmayı sağlamak ve vatandaşlarımızın ihtiyaçlarına duyarlı, adil ve etkin hizmetler sunmak en büyük sorumluluklarımız arasındadır.
                                                                    Altyapı ve çevre düzenlemelerinden, sosyal hizmetlere, kültürel ve sanatsal faaliyetlerden, ekonomik kalkınmaya kadar geniş bir yelpazede hizmet sunarak, şehrimizin her alanında gelişimi destekliyoruz.
                                                                    Ulaşım altyapısını iyileştirmek, yeşil alanları artırmak, çevre temizliği ve atık yönetimi gibi konularda çalışmalar yürütürken, sosyal yardımlarla dezavantajlı gruplara destek sağlıyoruz.
                                                                    Eğitim, sağlık ve spor alanlarında projeler geliştirerek her yaştan vatandaşımıza yönelik hizmetler sunuyor, kültürel etkinliklerle şehrimizin tarihi ve sanatsal değerlerini yaşatıyoruz.
                                                                    Yerel ekonomiyi güçlendirmek adına girişimcilere destek verirken, akıllı şehir teknolojileriyle belediyecilik hizmetlerini dijitalleştirerek halkımıza daha hızlı ve şeffaf çözümler sunuyoruz.
                                                                    Katılımcı yönetim anlayışımızla, halkın beklentilerini ön planda tutarak karar alma süreçlerine dahil ediyor ve kaynaklarımızı etkin kullanarak sürdürülebilir bir belediyecilik anlayışı benimsiyoruz.
                                                                    Tüm bu çalışmalarımızla Gebze'yi hem bugünün hem de geleceğin modern, yaşanabilir ve güçlü bir kenti haline getirmek için durmaksızın çalışıyoruz.
                                                                    <br /><br />
                                                                    Ulaşım altyapısını iyileştirmek, yeşil alanları artırmak, çevre temizliği ve atık yönetimi gibi konularda çalışmalar yürütürken, sosyal yardımlarla dezavantajlı gruplara destek sağlıyoruz.
                                                                    Eğitim, sağlık ve spor alanlarında projeler geliştirerek her yaştan vatandaşımıza yönelik hizmetler sunuyor, kültürel etkinliklerle şehrimizin tarihi ve sanatsal değerlerini yaşatıyoruz.
                                                                </div>
                                                                <div className="mt-4 flex justify-end">
                                                                    <img
                                                                        src="/images/kurumsal/gebze-belediyesi-logo-png_seeklogo-406755.png"
                                                                        alt="imza"
                                                                        className="max-w-[150px] md:max-w-[200px] h-auto"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Son */}
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

export default MisionPage;
