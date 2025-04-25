import React from "react";

const Arabuluculuk: React.FC = () => {
    return (
        <div id="pcoded" className="pcoded">
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content pt-0">
                                <div className="main-body pt-0">
                                    <div className="page-wrapper py-0 mt-0">
                                        <div className="flex flex-row gap-4 mt-0">
                                            {/* İçerik Alanı */}
                                            <div className="flex-1 p-4 pt-0 -mt-4">
                                                <div className="bg-white shadow-lg rounded-lg p-6">
                                                    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Arabuluculuk Komisyonu</h2>

                                                    {/* ASIL ÜYELER */}
                                                    <h3 className="text-lg font-semibold text-gray-700 mt-4">Asıl Üyeler</h3>
                                                    <table className="w-full border-collapse border border-gray-300 mt-2">
                                                        <thead>
                                                        <tr className="bg-blue-600 text-white">
                                                            <th className="border border-gray-300 p-2">Adı Soyadı</th>
                                                            <th className="border border-gray-300 p-2">Görevi</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td className="border border-gray-300 p-2 bg-white">Başkan Av. Murat TUNCA</td>
                                                            <td className="border border-gray-300 p-2 bg-white">Hukuk İşleri Müdürlüğü V.</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="border border-gray-300 p-2 bg-white">İmran AYYILDIZ</td>
                                                            <td className="border border-gray-300 p-2 bg-white">İnsan Kaynakları ve Eğitim Müdür V.</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="border border-gray-300 p-2 bg-white">Bilgin ALTAY</td>
                                                            <td className="border border-gray-300 p-2 bg-white">Mali Hizmetler Müdür V.</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>

                                                    {/* YEDEK ÜYELER */}
                                                    <h3 className="text-lg font-semibold text-gray-700 mt-6">Yedek Üyeler</h3>
                                                    <table className="w-full border-collapse border border-gray-300 mt-2">
                                                        <thead>
                                                        <tr className="bg-blue-600 text-white">
                                                            <th className="border border-gray-300 p-2">Adı Soyadı</th>
                                                            <th className="border border-gray-300 p-2">Görevi</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {[
                                                            ["Av. Gizem ÖZMETE", "Hukuk İşleri Müdürlüğü"],
                                                            ["Av. Ebru ÜNAL", "Hukuk İşleri Müdürlüğü"],
                                                            ["Av. Sümeyye Elif PEHLİVAN", "Hukuk İşleri Müdürlüğü"],
                                                            ["İsmail DENK", "İnsan Kaynakları ve Eğitim Müdürlüğü"],
                                                            ["Mutlu DURAL", "İnsan Kaynakları ve Eğitim Müdürlüğü"],
                                                            ["Erkan YAKIN", "Mali Hizmetler Müdürlüğü"],
                                                            ["Elvan GÜLFİDANE", "Mali Hizmetler Müdürlüğü"],
                                                        ].map((member, index) => (
                                                            <tr key={index}>
                                                                <td className="border border-gray-300 p-2 bg-white">{member[0]}</td>
                                                                <td className="border border-gray-300 p-2 bg-white">{member[1]}</td>
                                                            </tr>
                                                        ))}
                                                        </tbody>
                                                    </table>
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

export default Arabuluculuk;