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
                                VİZYONUMUZ
                            </h3>

                            <div className="mb-5 md:mb-7 text-sm md:text-base text-justify">
                                Gebze'yi sadece bir yaşam alanı olarak değil, geçmişten
                                gelen zengin kültürel mirasını koruyan, tarihi dokusunu
                                yaşatan ve aynı zamanda modern şehircilik anlayışıyla
                                geleceğe taşıyan örnek bir kent haline getirmek temel
                                hedefimizdir. Bu doğrultuda, şehircilik anlayışımızı
                                sürdürülebilirlik, çevreye duyarlılık, sosyal bütünleşme
                                ve katılımcı yönetişim ilkeleri üzerine inşa ederek, her
                                yaştan ve her kesimden vatandaşımızın yaşam kalitesini
                                artırmayı amaçlıyoruz. Teknolojik altyapıyı güçlendirerek
                                akıllı şehir uygulamalarını hayata geçirmek, yeşil
                                alanları artırarak doğayla iç içe bir yaşam sunmak ve
                                modern ulaşım ağlarıyla kent içi hareketliliği
                                kolaylaştırmak en büyük önceliklerimiz arasındadır. Gebze'yi
                                ekonomik, sosyal ve kültürel olarak daha yaşanabilir bir
                                kent haline getirmek için yenilikçi belediyecilik
                                anlayışıyla çalışmalarımızı sürdürerek, sadece bugünün
                                değil, geleceğin de şehir modelini inşa etmeye devam
                                edeceğiz.<br/><br/>
                                Geleceğin Gebze'sini inşa ederken, insanı merkeze alan, tarihi
                                değerlerine sahip çıkan ve modern şehircilik ilkeleriyle
                                bütünleşmiş bir kent vizyonuyla, sürdürülebilir ve yaşanabilir
                                bir şehir oluşturma yolunda kararlılıkla çalışmaya devam
                                edeceğiz.
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

export default VisionPage;