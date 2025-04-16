import React from 'react';

const BaskanYardimcilari: React.FC = () => {
    return (
        <div id="pcoded" className="pcoded bg-gray-100 shadow-inner min-h-screen">
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper pt-0 mt-0"> {/* Tamamen yukarı çektik */}
                                        <div className="flex flex-row gap-4">
                                            {/* Ana İçerik Alanı */}
                                            <div className="flex-1 p-4 pt-0 mt-[-10px]"> {/* margin-top eksiye çekildi */}
                                                {/* Header */}
                                                <div className="mb-6">
                                                    <div className="flex justify-center">
                                                        <h1 className="text-2xl font-bold text-center">BAŞKAN YARDIMCILARI</h1>
                                                    </div>
                                                </div>

                                                {/* Main Content */}
                                                <div className="card shadow-lg rounded-lg mt-2"> {/* mt-6 yerine mt-2 */}
                                                    <div className="card-block p-4">
                                                        <div className="col-md-12">
                                                            <ul className="space-y-4">
                                                                {[
                                                                    {
                                                                        name: "Dursun Ali ARSLAN",
                                                                        img: "Dursun ali .jpg"
                                                                    },
                                                                    {
                                                                        name: "Ahmet Hüseyin ÇELEBİ",
                                                                        img: "ahmet hüseyin.jpg"
                                                                    },
                                                                    {
                                                                        name: "Şerif Canpolat",
                                                                        img: "şerif canpolat.jpg"
                                                                    },
                                                                    {
                                                                        name: "Muharrem BALTACIOGLU",
                                                                        img: "muharrem baltacıoğlu.jpg"
                                                                    },
                                                                    {
                                                                        name: "Mahmut YANDIK",
                                                                        img: "mahmut yandık.jpg"
                                                                    },
                                                                    {
                                                                        name: "Şener AKIN",
                                                                        img: "şener akın.jpg"
                                                                    },
                                                                    {
                                                                        name: "Mücahit BİRBEN",
                                                                        img: "mücahit birben.jpg"
                                                                    }
                                                                ].map((person, index) => (
                                                                    <li key={index}>
                                                                        <div className="card list-view-media bg-white rounded-lg shadow-md p-4">
                                                                            <div className="media flex items-start">
                                                                                <a className="media-left" href="#">
                                                                                    <img
                                                                                        className="rounded-lg"
                                                                                        src={`/images/yonetimsemasi/${person.img}`}
                                                                                        width="270"
                                                                                        height="350"
                                                                                        alt={person.name}
                                                                                    />
                                                                                </a>
                                                                                <div className="media-body ml-4">
                                                                                    <div>
                                                                                        <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                            {person.name}
                                                                                        </h4>
                                                                                        <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                        <hr className="my-2 border-t border-gray-300" />
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
                                            </div> {/* Ana içerik sonu */}
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

export default BaskanYardimcilari;
