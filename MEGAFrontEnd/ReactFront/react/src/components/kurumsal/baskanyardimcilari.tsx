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
                                    <div className="page-wrapper pt-0 mt-0">
                                        <div className="flex flex-row gap-4">
                                            <div className="flex-1 p-4 pt-0 mt-[-10px]">
                                                <div  className="depertment-details shadow p-4"
                                                      style={{
                                                          backgroundColor: "#ffffff",
                                                          borderRadius: "12px",
                                                          textAlign: "center",
                                                          boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
                                                      }}
                                                >
                                                    <div className="flex justify-center">
                                                        <h1 className="text-2xl font-bold text-center">BAŞKAN YARDIMCILARI</h1>
                                                    </div>
                                                </div>

                                                <div className="card shadow-lg rounded-lg mt-2">
                                                    <div className="card-block p-4">
                                                        <div className="col-md-12">
                                                            <ul className="space-y-4 text-justify">
                                                                {[{
                                                                    name: "Dursun Ali ARSLAN",
                                                                    img: "Dursun ali .jpg",
                                                                    email: "dursunali.arslan@gebze.bel.tr",
                                                                    phone: "0262 642 0430",
                                                                    biography: "Dursun Ali ARSLAN, uzun yıllar kamu yönetimi ve belediyecilik alanında çeşitli görevlerde bulunmuş, halkla ilişkiler ve şehir planlama konularında uzmanlaşmış bir yöneticidir. Gebze Belediyesi'nde çeşitli projelere öncülük etmiştir."
                                                                },
                                                                    {
                                                                        name: "Ahmet Hüseyin ÇELEBİ",
                                                                        img: "ahmet hüseyin.jpg",
                                                                        email: "ahmet.huseyincelebi@gebze.bel.tr",
                                                                        phone: "0262 642 0430"
                                                                    },
                                                                    {
                                                                        name: "Şerif Canpolat",
                                                                        img: "şerif canpolat.jpg",
                                                                        email: "serif.canpolat@gebze.bel.tr",
                                                                        phone: "0262 642 0430"
                                                                    },
                                                                    {
                                                                        name: "Muharrem BALTACIOGLU",
                                                                        img: "muharrem baltacıoğlu.jpg",
                                                                        email: "muharrem.baltacioglu@gebze.bel.tr",
                                                                        phone: "0262 642 0430"
                                                                    },
                                                                    {
                                                                        name: "Mahmut YANDIK",
                                                                        img: "mahmut yandık.jpg",
                                                                        email: "mahmut.yandik@gebze.bel.tr",
                                                                        phone: "0262 642 0430"
                                                                    },
                                                                    {
                                                                        name: "Şener AKIN",
                                                                        img: "şener akın.jpg",
                                                                        email: "sener.akin@gebze.bel.tr",
                                                                        phone: " 0262 642 0430"
                                                                    },
                                                                    {
                                                                        name: "Mücahit BİRBEN",
                                                                        img: "mücahit birben.jpg",
                                                                        email: "mucahit.birben@gebze.bel.tr",
                                                                        phone: "0262 642 0430"
                                                                    }].map((person, index) => (
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
                                                                                        {person.biography && (
                                                                                            <div className="biography mt-3 mb-4">
                                                                                                <h6 className="text-black-900 font-semibold mb-2">Biyografi</h6>
                                                                                                <p className="text-gray-700 text-sm leading-relaxed">
                                                                                                    {person.biography}
                                                                                                </p>
                                                                                            </div>
                                                                                        )}
                                                                                        <div className="contact-info mt-3">
                                                                                            <h6 className="text-black-900 font-semibold mb-2">İletişim Bilgileri</h6>
                                                                                            <p className="flex items-center text-gray-700 mb-2">
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-black-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                                                </svg>
                                                                                                <a href={`mailto:${person.email}`} className="hover:text-black-700 transition-colors">
                                                                                                    {person.email}
                                                                                                </a>
                                                                                            </p>
                                                                                            <p className="flex items-center text-gray-700">
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-black-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                                                                </svg>
                                                                                                <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="hover:text-black-700 transition-colors">
                                                                                                    {person.phone}
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

export default BaskanYardimcilari;