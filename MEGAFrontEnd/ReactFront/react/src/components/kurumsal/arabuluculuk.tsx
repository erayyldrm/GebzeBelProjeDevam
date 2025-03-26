import React from "react";

const arabuluculık = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
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
                    <tr className="hover:bg-gray-100">
                        <td className="border border-gray-300 p-2">Başkan Av. Murat TUNCA</td>
                        <td className="border border-gray-300 p-2">Hukuk İşleri Müdürlüğü V.</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="border border-gray-300 p-2">İmran AYYILDIZ</td>
                        <td className="border border-gray-300 p-2">İnsan Kaynakları ve Eğitim Müdür V.</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="border border-gray-300 p-2">Bilgin ALTAY</td>
                        <td className="border border-gray-300 p-2">Mali Hizmetler Müdür V.</td>
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
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "hover:bg-gray-100"}>
                            <td className="border border-gray-300 p-2">{member[0]}</td>
                            <td className="border border-gray-300 p-2">{member[1]}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default arabuluculık();
