import React from "react";

const Leventaltintas: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">


            {/* Main Content */}
            <div className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl w-full relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <img
                        src="/images/kurumsal/mudurlukler/avatar-25.jpg"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">Yapı Kontrol Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" />Levent SARĞIN
                        </p>
                        <p className="text-gray-700 flex items-center">

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
                    <p className="text-gray-700 text-left">


                    </p>
                </section>
                <section id="bolum2" className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
                    <h3 className="text-lg font-bold text-center"></h3>
                    <p className="text-gray-700 text-left">
                        1983 yılında Erzurum’un Narman ilçesinde doğan Levent SARĞIN, ilk ve orta öğrenimini Narman ilçesinde, lise öğrenimini de Erzurum Lisesi'nde tamamladı.
                        <br/>
                        Ocak 2007 yılında Atatürk Üniversitesi Mühendislik Fakültesi İnşaat Mühendisliği Bölümü'nden mezun oldu.
                        <br/>
                        Kısa bir süre özel sektörde çalıştıktan sonra 2007 yılında Gebze Belediyesi İmar ve Şehircilik Müdürlüğünde raportör olarak göreve başladı, 2009 -2011 yılları arasında İmar ve Şehircilik Müdürlüğüne bağlı Yapı Kontrol Servisinde Şeflik görevini yürüttü.
                        <br/>
                        2011 yılında Gebze Belediyesi Fen İşleri Müdürlüğünde kontrolör olarak görevlendirilen Sarğın,2019 Mayıs’tan bu yana Fen İşleri Müdürlüğü görevini yürütmektedir. Sarğın evli ve iki çocuk babasıdır.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Leventaltintas;
