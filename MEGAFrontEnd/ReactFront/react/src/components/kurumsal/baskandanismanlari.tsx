import React from 'react';

const BaskanDanismanlari: React.FC = () => {
    // Danışman bilgilerini bir dizi olarak tanımlayalım
    const danismanlar = [
        {
            name: "Remzi ŞEKER",
            img: "/images/kurumsal/baskandanismanlari/Remzi-SEKER.jpg",
            title: "Başkan Danışmanı",
            email: "remzi.seker@gebze.bel.tr",
            phone: "0 262 642 04 30",
            bio: "Remzi ŞEKER, 1965 yılında Gebze'de doğdu. Lisans eğitimini Marmara Üniversitesi İşletme Bölümü'nde tamamladı. 25 yıllık kamu hizmeti tecrübesine sahip olan ŞEKER, yerel yönetim alanında birçok projede görev aldı. Evli ve 2 çocuk babası olan Remzi ŞEKER, 2019 yılından bu yana Gebze Belediyesi'nde Başkan Danışmanı olarak görev yapmaktadır. İyi derecede İngilizce bilmektedir."
        },
        {
            name: "Yusuf Burkut",
            img: "/images/kurumsal/baskandanismanlari/Yusuf-BURKUT.jpg",
            title: "Başkan Danışmanı",
            email: "yusuf.burkut@gebze.bel.tr",
            phone: "0 262 642 04 30"
        }
    ];

    return (
        <div id="pcoded" className="pcoded bg-gray-100 shadow-inner min-h-screen">
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper pt-0 mt-[-10px]"> {/* Sayfayı yukarı çektik */}
                                        <div className="flex flex-row gap-4">

                                            {/* Ana İçerik Alanı */}
                                            <div className="flex-1 p-4 pt-0 mt-[-10px]"> {/* İçeriği de yukarı aldık */}
                                                {/* Header */}
                                                <div className="mb-6">
                                                    <div className="bg-white rounded-xl text-center shadow-md p-6 max-w-xl mx-auto">
                                                        <h1 className="text-3xl font-bold text-gray-800">BAŞKAN DANIŞMANLARI</h1>
                                                    </div>
                                                </div>

                                                {/* Main Content */}
                                                <div className="card shadow-lg rounded-lg mt-2">
                                                    <div className="card-block p-4">
                                                        <div className="col-md-12">
                                                            <ul className="space-y-4">
                                                                {danismanlar.map((danisman, index) => (
                                                                    <li key={index}>
                                                                        <div className="card list-view-media bg-white rounded-lg shadow-md p-4">
                                                                            <div className="media flex items-start">
                                                                                <a className="media-left" href="#">
                                                                                    <img
                                                                                        className="rounded-lg"
                                                                                        src={danisman.img}
                                                                                        width="270"
                                                                                        height="350"
                                                                                        alt={danisman.name}
                                                                                    />
                                                                                </a>
                                                                                <div className="media-body ml-4">
                                                                                    <div>
                                                                                        <h4 className="inline-block text-black-900 text-xl font-bold">
                                                                                            {danisman.name}
                                                                                        </h4>
                                                                                        <h6 className="text-gray-600">{danisman.title}</h6>
                                                                                        <hr className="my-2 border-t border-gray-300" />

                                                                                        {/* Biyografi alanı - eğer varsa göster */}
                                                                                        {danisman.bio && (
                                                                                            <div className="biography mt-3 mb-4">
                                                                                                <h6 className="text-black-900 font-semibold mb-2">Biyografi</h6>
                                                                                                <p className="text-gray-700 text-sm leading-relaxed text-justify">
                                                                                                    {danisman.bio}
                                                                                                </p>
                                                                                            </div>
                                                                                        )}

                                                                                        <div className="contact-info mt-3"><h6 className="text-black-900 font-semibold mb-2">İletişim:</h6>
                                                                                            <p className="flex items-center text-gray-700 mb-2">

                                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-black-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                                                </svg>
                                                                                                <a href={`mailto:${danisman.email}`} className="hover:text-blue-700 transition-colors">
                                                                                                    {danisman.email}
                                                                                                </a>
                                                                                            </p>
                                                                                            <p className="flex items-center text-gray-700">
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-black-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                                                                </svg>
                                                                                                <a href={`tel:${danisman.phone.replace(/\s/g, '')}`} className="hover:text-black-700 transition-colors">
                                                                                                    {danisman.phone}
                                                                                                </a>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div> {/* İçerik sonu */}
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

export default BaskanDanismanlari;