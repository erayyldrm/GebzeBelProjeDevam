
import React, { useState, useEffect } from 'react';

const VisionPage: React.FC = () => {
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
                                            {/* Reduced max width from max-w-6xl to max-w-4xl and added more padding */}
                                            <div className="w-full max-w-4xl px-8 md:px-12">
                                                {/* Header */}
                                                <div className="shadow p-4 bg-white rounded-xl text-center mt-4">
                                                    <h1 className="text-xl md:text-3xl font-bold">VİZYONUMUZ</h1>
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
                                                            <div className="text-sm md:text-base text-justify mb-5">
                                                                Gebze'yi sadece bir yaşam alanı olarak değil, geçmişten gelen zengin kültürel mirasını koruyan, tarihi dokusunu yaşatan ve aynı zamanda modern şehircilik anlayışıyla geleceğe taşıyan örnek bir kent haline getirmek temel hedefimizdir. Bu doğrultuda, şehircilik anlayışımızı sürdürülebilirlik, çevreye duyarlılık, sosyal bütünleşme ve katılımcı yönetişim ilkeleri üzerine inşa ederek, her yaştan ve her kesimden vatandaşımızın yaşam kalitesini artırmayı amaçlıyoruz. Teknolojik altyapıyı güçlendirerek akıllı şehir uygulamalarını hayata geçirmek, yeşil alanları artırarak doğayla iç içe bir yaşam sunmak ve modern ulaşım ağlarıyla kent içi hareketliliği kolaylaştırmak en büyük önceliklerimiz arasındadır. Gebze'yi ekonomik, sosyal ve kültürel olarak daha yaşanabilir bir kent haline getirmek için yenilikçi belediyecilik anlayışıyla çalışmalarımızı sürdürerek, sadece bugünün değil, geleceğin de şehir modelini inşa etmeye devam edeceğiz.
                                                                <br /><br />
                                                                Geleceğin Gebze'sini inşa ederken, insanı merkeze alan, tarihi değerlerine sahip çıkan ve modern şehircilik ilkeleriyle bütünleşmiş bir kent vizyonuyla, sürdürülebilir ve yaşanabilir bir şehir oluşturma yolunda kararlılıkla çalışmaya devam edeceğiz.
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

export default VisionPage;