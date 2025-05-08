
import React, { useState, useEffect } from 'react';

const MisyonPage: React.FC = () => {
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
                                            {/* Reduced max-width from max-w-6xl to max-w-4xl and added more padding */}
                                            <div className="w-full max-w-4xl px-8 md:px-12">
                                                {/* Header */}
                                                <div className="shadow p-4 bg-white rounded-xl text-center mt-4">
                                                    <h1 className="text-xl md:text-3xl font-bold">MİSYONUMUZ</h1>
                                                </div>

                                                {/* Content */}
                                                <div className="my-4">
                                                    <div className="card bg-white shadow-lg rounded-lg">
                                                        {/* Increased padding from p-4 to p-6 to make content area visually narrower */}
                                                        <div className="p-6">
                                                            {/* Image */}
                                                            <div className="mb-4">
                                                                <img
                                                                    src="/images/kurumsal/1.jpg"
                                                                    alt="Vizyon"
                                                                    className="img-fluid rounded w-full h-auto object-cover"
                                                                />
                                                            </div>

                                                            {/* Text */}
                                                            <div className="text-sm md:text-base text-justify mb-5">
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

                                                            {/* Logo */}
                                                            <div className="mt-4 flex justify-end">
                                                                <img
                                                                    src="/images/kurumsal/gebze-belediyesi-logo-png_seeklogo-406755.png"
                                                                    alt="logo"
                                                                    className="max-w-[150px] h-auto"
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

export default MisyonPage;