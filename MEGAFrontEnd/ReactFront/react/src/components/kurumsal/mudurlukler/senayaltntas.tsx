import React from "react";

const Senayaltıntas: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            {/* Pre-loader */}
            <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            </div>

            {/* Main Content */}
            <div className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl w-full relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <img
                        src="/images/kurumsal/mudurlukler/avatar-10.jpg"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">İklim Değişikliği ve Sıfır Atık Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" /> Senay ALTNTAŞ
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" /> iklimdegisikligi@gebze.bel.tr
                        </p>
                        <div className="mt-4">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                        </div>
                    </div>
                </div>
                <hr className="border-t-2 border-blue-500 my-4" />


                <a href="#bolum1" className="text-blue-600 hover:underline mx-2 text-left">YÖNETMELİK</a>
                <span className="text-gray-500">|</span>
                <a href="#bolum2" className="text-blue-600 hover:underline mx-2 text-left">BİYOGRAFİ</a>

                {/* Sections */}

                <section id="bolum2" className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
                    <h3 className="text-lg font-bold text-center"></h3>
                    <p className="text-gray-700 text-left">1983 Eğirdere/KIRCALİ’de (Bulgaristan) doğan Senay ALTINTAŞ, lise öğrenimini Gebze Anadolu Teknik Lisesi Tıp Elektroniği bölümünde tamamladı.<br/> 2008 yılında Akdeniz Üniversitesi Çevre Mühendisliği bölümünden mezun oldu.<br/>

                        Özel sektörde Enerji ve Güç trafoları alanında sırasıyla Kalite Yönetim Sistemi ve Satın alma süreçlerini yönetti.<br/> 2010 yılında Gebze Belediyesi Çevre Koruma ve Kontrol sevisinde Çevre Mühendisi olarak göreve başladı.<br/> Aynı birimde 2017-2019 yılları arasında Çevre Koruma ve Kontrol servis şefliği görevinde bulundu.<br/>

                        2018 yılından bu yana Gebze Belediyesi Sağlıklı Kentler Birliği Koordinatörlünü yürüten Altıntaş, 2019-2021 yılları arasında Gebze Belediyesi Temizlik İşleri Müdürü olarak görev yapmıştır.<br/> Temizlik İşleri Müdürlüğü süresi içinde ulusal ve uluslararası ödüllü birçok projeyi hayata geçirme fırsatı buldu.<br/> 2021 Ekim ayında Gebze Belediyesi Dış İlişkiler Müdürlüğüne atanarak çalışmalarını sürdürmektedir.<br/> Altıntaş evli ve iki çocuk babasıdır.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Senayaltıntas;
