import React from "react";

interface Person {
    name: string;
    img: string;
    email: string;
    phone: string;
    biography?: string;
}

const assistantMayors: Person[] = [
    {
        name: "Dursun Ali ARSLAN",
        img: "Dursun ali .jpg",
        email: "dursunali.arslan@gebze.bel.tr",
        phone: "0262 642 0430",
        biography:
            "Dursun Ali ARSLAN, uzun yıllar kamu yönetimi ve belediyecilik alanında çeşitli görevlerde bulunmuş, halkla ilişkiler ve şehir planlama konularında uzmanlaşmış bir yöneticidir. Gebze Belediyesi'nde çeşitli projelere öncülük etmiştir.",
    },
    {
        name: "Ahmet Hüseyin ÇELEBİ",
        img: "ahmet hüseyin.jpg",
        email: "ahmet.huseyincelebi@gebze.bel.tr",
        phone: "0262 642 0430",
    },
    {
        name: "Şerif Canpolat",
        img: "şerif canpolat.jpg",
        email: "serif.canpolat@gebze.bel.tr",
        phone: "0262 642 0430",
    },
    {
        name: "Muharrem BALTACIOGLU",
        img: "muharrem baltacıoğlu.jpg",
        email: "muharrem.baltacioglu@gebze.bel.tr",
        phone: "0262 642 0430",
    },
    {
        name: "Mahmut YANDIK",
        img: "mahmut yandık.jpg",
        email: "mahmut.yandik@gebze.bel.tr",
        phone: "0262 642 0430",
    },
    {
        name: "Şener AKIN",
        img: "şener akın.jpg",
        email: "sener.akin@gebze.bel.tr",
        phone: "0262 642 0430",
    },
    {
        name: "Mücahit BİRBEN",
        img: "mücahit birben.jpg",
        email: "mucahit.birben@gebze.bel.tr",
        phone: "0262 642 0430",
    },
];

const BaskanYardimcilari: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-10">
            <div className="bg-white shadow-md rounded-xl p-6 text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">BAŞKAN YARDIMCILARI</h1>
            </div>

            <ul className="space-y-6">
                {assistantMayors.map((person, index) => (
                    <li key={index} className="bg-white shadow-lg rounded-xl p-6">
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="w-64 h-64 flex-shrink-0">
                                <img
                                    src={`/images/yonetimsemasi/${person.img}`}
                                    alt={person.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            <div className="flex-1">
                                <h2 className="text-xl font-bold text-blue-900">{person.name}</h2>
                                <p className="text-gray-600 mb-2">Başkan Yardımcısı</p>
                                <hr className="my-2" />

                                {person.biography && (
                                    <div className="mb-4">
                                        <h3 className="font-semibold text-gray-800">Biyografi</h3>
                                        <p className="text-gray-700 text-sm">{person.biography}</p>
                                    </div>
                                )}

                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-2">İletişim Bilgileri</h3>
                                    <p className="flex items-center text-gray-700 mb-1">
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
                                        <a href={`mailto:${person.email}`} className="hover:text-blue-700 transition-colors">
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
                                        <a href={`tel:${person.phone.replace(/\s/g, "")}`} className="hover:text-blue-700 transition-colors">
                                            {person.phone}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BaskanYardimcilari;
