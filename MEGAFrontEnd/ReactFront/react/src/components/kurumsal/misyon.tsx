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
        // Outer container card that wraps everything
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
                            <h3 className="mb-4  font-sans font-bold text-center  tracking-wider">
                                MİSYONUMUZ
                            </h3>

                            <div className="mb-5 md:mb-7 text-sm md:text-base text-justify">
                                Gebze Belediyesi olarak, kentimizin yaşam kalitesini artırmak, sürdürülebilir kalkınmayı sağlamak ve vatandaşlarımızın ihtiyaçlarına duyarlı, adil ve etkin hizmetler sunmak en büyük sorumluluklarımız arasındadır.
                                Altyapı ve çevre düzenlemelerinden, sosyal hizmetlere, kültürel ve sanatsal faaliyetlerden, ekonomik kalkınmaya kadar geniş bir yelpazede hizmet sunarak, şehrimizin her alanında gelişimi destekliyoruz.
                                Ulaşım altyapısını iyileştirmek, yeşil alanları artırmak, çevre temizliği ve atık yönetimi gibi konularda çalışmalar yürütürken, sosyal yardımlarla dezavantajlı gruplara destek sağlıyoruz.
                                Eğitim, sağlık ve spor alanlarında projeler geliştirerek her yaştan vatandaşımıza yönelik hizmetler sunuyor, kültürel etkinliklerle şehrimizin tarihi ve sanatsal değerlerini yaşatıyoruz.
                                Yerel ekonomiyi güçlendirmek adına girişimcilere destek verirken, akıllı şehir teknolojileriyle belediyecilik hizmetlerini dijitalleştirerek halkımıza daha hızlı ve şeffaf çözümler sunuyoruz.
                                Katılımcı yönetim anlayışımızla, halkın beklentilerini ön planda tutarak karar alma süreçlerine dahil ediyor ve kaynaklarımızı etkin kullanarak sürdürülebilir bir belediyecilik anlayışı benimsiyoruz.
                                Tüm bu çalışmalarımızla Gebze'yi hem bugünün hem de geleceğin modern, yaşanabilir ve güçlü bir kenti haline getirmek için durmaksızın çalışıyoruz.
                                <br/><br/>Ulaşım altyapısını iyileştirmek, yeşil alanları artırmak, çevre temizliği ve atık yönetimi gibi konularda çalışmalar yürütürken, sosyal yardımlarla dezavantajlı gruplara destek sağlıyoruz.
                                Eğitim, sağlık ve spor alanlarında projeler geliştirerek her yaştan vatandaşımıza yönelik hizmetler sunuyor, kültürel etkinliklerle şehrimizin tarihi ve sanatsal değerlerini yaşatıyoruz.
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

export default MisionPage;