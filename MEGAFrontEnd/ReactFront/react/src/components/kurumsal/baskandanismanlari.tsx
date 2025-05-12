// components/BaskanDanismanlari.tsx
import React from "react";

type Danisman = {
    name: string;
    img: string;
    email: string;
    phone: string;
    biography?: string;
};

const danismanlar: Danisman[] = [
    {
        name: "Yusuf BURKUT",
        img: "Yusuf-BURKUT.jpg",
        email: "yusuf.burkut@gebze.bel.tr",
        phone: "0 262 642 04 30",
    },
    {
        name: "Remzi ŞEKER",
        img: "Remzi-SEKER.jpg",
        email: "remzi.seker@gebze.bel.tr",
        phone: "0 262 642 04 30",
        biography:
            "23 Şubat 1965 tarihinde Adapazarı'nda doğdu. İlk, orta ve lise öğrenimini Adapazarı'nda tamamladıktan sonra, Konya Selçuk Üniversitesi Mimarlık ve Mühendislik Fakültesi'nden Harita ve Kadastro Mühendisi olarak mezun oldu. Ayrıca, T.C. Sermaye Piyasaları Kurulu (SPK) lisanslı Gayrimenkul Değerleme Uzmanı unvanına sahiptir.",
    },
];

const BaskanDanismanlari: React.FC = () => {
    return (
        <div className="bg-gray-100 shadow-inner min-h-screen p-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-xl shadow-md text-center py-6 mb-6">
                    <h1 className="text-2xl font-bold text-blue-900">BAŞKAN DANIŞMANLARI</h1>
                </div>

                <div className="space-y-6">
                    {danismanlar.map((person, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="flex justify-center sm:justify-start">
                                    <img
                                        className="rounded-lg w-64 h-64 object-cover"
                                        src={`/images/kurumsal/baskandanismanlari/${person.img}`}
                                        alt={person.name}
                                    />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-blue-900">{person.name}</h2>
                                    <p className="text-gray-600">Başkan Danışmanı</p>
                                    <hr className="my-3 border-gray-300" />

                                    {person.biography && (
                                        <div className="mb-4">
                                            <h3 className="text-md font-semibold mb-1">Biyografi</h3>
                                            <p className="text-gray-700 text-sm leading-relaxed">{person.biography}</p>
                                        </div>
                                    )}

                                    <div>
                                        <h3 className="text-md font-semibold mb-1">İletişim Bilgileri</h3>
                                        <p className="flex items-center text-gray-700 mb-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-2 text-blue-700"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <a href={`mailto:${person.email}`} className="hover:text-blue-700 transition">
                                                {person.email}
                                            </a>
                                        </p>
                                        <p className="flex items-center text-gray-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-2 text-blue-700"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                            <a href={`tel:${person.phone.replace(/\s/g, "")}`} className="hover:text-blue-700 transition">
                                                {person.phone}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BaskanDanismanlari;
