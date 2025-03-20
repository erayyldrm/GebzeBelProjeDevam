import React from 'react';

const BaskanPage: React.FC = () => {
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
                                                        <h3 style={{ fontWeight: 'bold', textAlign:"center" }}>Vizyonumuz</h3>
                                                        <br />
                                                        <div>
                                                            <p style={{ textAlign: 'justify', padding: '22px', fontSize: '16px', lineHeight: '2.0', fontWeight: 'bold' }}>
                                                                Gebze'yi sadece bir yaşam alanı olarak değil, geçmişten gelen zengin kültürel mirasını koruyan,
                                                                tarihi dokusunu yaşatan ve aynı zamanda modern şehircilik anlayışıyla geleceğe taşıyan örnek bir
                                                                kent haline getirmek temel hedefimizdir. Bu doğrultuda, şehircilik anlayışımızı sürdürülebilirlik,
                                                                çevreye duyarlılık, sosyal bütünleşme ve katılımcı yönetişim ilkeleri üzerine inşa ederek, her yaştan
                                                                ve her kesimden vatandaşımızın yaşam kalitesini artırmayı amaçlıyoruz. Teknolojik altyapıyı güçlendirerek
                                                                akıllı şehir uygulamalarını hayata geçirmek, yeşil alanları artırarak doğayla iç içe bir yaşam sunmak ve
                                                                modern ulaşım ağlarıyla kent içi hareketliliği kolaylaştırmak en büyük önceliklerimiz arasındadır.
                                                                Gebze’yi ekonomik, sosyal ve kültürel olarak daha yaşanabilir bir kent haline getirmek için yenilikçi
                                                                belediyecilik anlayışıyla çalışmalarımızı sürdürerek, sadece bugünün değil, geleceğin de şehir modelini
                                                                inşa etmeye devam edeceğiz.
                                                            </p>
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

export default BaskanPage;