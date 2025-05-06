import React, { useState } from "react";

const Arabuluculuk = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



    const asilUyeler = [
        { name: "Başkan Av. Murat TUNCA", role: "Hukuk İşleri Müdürlüğü V." },
        { name: "İmran AYYILDIZ", role: "İnsan Kaynakları ve Eğitim Müdür V." },
        { name: "Bilgin ALTAY", role: "Mali Hizmetler Müdür V." }
    ];

    const yedekUyeler = [
        { name: "Av. Gizem ÖZMETE", role: "Hukuk İşleri Müdürlüğü" },
        { name: "Av. Ebru ÜNAL", role: "Hukuk İşleri Müdürlüğü" },
        { name: "Av. Sümeyye Elif PEHLİVAN", role: "Hukuk İşleri Müdürlüğü" },
        { name: "İsmail DENK", role: "İnsan Kaynakları ve Eğitim Müdürlüğü" },
        { name: "Mutlu DURAL", role: "İnsan Kaynakları ve Eğitim Müdürlüğü" },
        { name: "Erkan YAKIN", role: "Mali Hizmetler Müdürlüğü" },
        { name: "Elvan GÜLFİDANE", role: "Mali Hizmetler Müdürlüğü" }
    ];

    return (
        <div className="min-h-screen bg-gray-100">


            {/* Main Content */}
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row">
                {/* Main content area */}
                <div className="flex-1">
                    <div className="bg-white shadow-lg rounded-lg p-4 md:p-6">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Arabuluculuk Komisyonu</h2>

                        {/* ASIL ÜYELER */}
                        <h3 className="text-lg font-semibold text-gray-700 mt-4">Asıl Üyeler</h3>
                        <div className="overflow-x-auto mt-2">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                <tr className="bg-blue-600 text-white">
                                    <th className="border border-gray-300 p-2 text-left">Adı Soyadı</th>
                                    <th className="border border-gray-300 p-2 text-left">Görevi</th>
                                </tr>
                                </thead>
                                <tbody>
                                {asilUyeler.map((uye, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300 p-2 bg-white">{uye.name}</td>
                                        <td className="border border-gray-300 p-2 bg-white">{uye.role}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        {/* YEDEK ÜYELER */}
                        <h3 className="text-lg font-semibold text-gray-700 mt-6">Yedek Üyeler</h3>
                        <div className="overflow-x-auto mt-2">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                <tr className="bg-blue-600 text-white">
                                    <th className="border border-gray-300 p-2 text-left">Adı Soyadı</th>
                                    <th className="border border-gray-300 p-2 text-left">Görevi</th>
                                </tr>
                                </thead>
                                <tbody>
                                {yedekUyeler.map((uye, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300 p-2 bg-white">{uye.name}</td>
                                        <td className="border border-gray-300 p-2 bg-white">{uye.role}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Arabuluculuk;