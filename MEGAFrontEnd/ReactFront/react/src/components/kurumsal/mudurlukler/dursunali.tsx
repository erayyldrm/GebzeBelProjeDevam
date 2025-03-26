import React from "react";

const   Dursunali: React.FC = () => {
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
                        src="/images/kurumsal/mudurlukler/avatar-14.jpg"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">Makine İkmal, Bakım ve Onarım Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" /> Dursun Ali YAYLA
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" /> dursun.yayla@gebze.bel.tr
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
                <section id="bolum1" className="p-4 bg-gray-50 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-left"></h3>
                    <p className="text-gray-700 text-left">BİRİNCİ BÖLÜM


                    </p>
                </section>
                <section id="bolum2" className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
                    <h3 className="text-lg font-bold text-center"></h3>
                    <p className="text-gray-700 text-left">
                        1986 yılında Bakırköy’de doğdu. İlk, orta ve lise öğrenimini Gebze’de tamamladı. Süleyman Demirel Üniversitesi Teknik Eğitim Fakültesi Yapı Öğretmenliği bölümünden 2010 yılında, Sakarya Üniversitesi Mühendislik Fakültesi İnşaat Mühendisliği bölümünden de 2018 yılında mezun oldu.
                        2013 yılında Gebze Belediyesi İmar ve Şehircilik Müdürlüğünde göreve başladı.
                        İmar ve Şehircilik Müdürlüğünde sırasıyla, Kaçak Yapı biriminde saha sorumlusu ve birim sorumlusu, Etüt ve Proje Müdürlüğünde Bakım Onarım Servis Sorumlusu olarak toplam 11 yıl görev yapmıştır.
                        Evli ve 3 çocuk babasıdır.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Dursunali;
