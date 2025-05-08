
const BaskanDanisamanlari = () => {
    return (
        <div id="pcoded" className="pcoded bg-gray-100 shadow-inner min-h-screen">
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper pt-0 mt-0">
                                        <div className="flex flex-col md:flex-row gap-4">
                                            <div className="flex-1 p-4 pt-0 mt-[-10px]">
                                                <div className="depertment-details shadow p-4"
                                                     style={{
                                                         backgroundColor: "#ffffff",
                                                         borderRadius: "12px",
                                                         textAlign: "center",
                                                         boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
                                                     }}
                                                >
                                                    <div className="flex justify-center">
                                                        <h1 className="text-2xl font-bold text-center">BAŞKAN DANIŞMANLARI</h1>
                                                    </div>
                                                </div>

                                                <div className="card shadow-lg rounded-lg mt-2">
                                                    <div className="card-block p-4">
                                                        <div className="col-md-12">
                                                            <ul className="space-y-4 text-justify px-2 sm:px-0">
                                                                {[{
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
                                                                        biography: "23 Şubat 1965 tarihinde Adapazarı'nda doğdu. İlk, orta ve lise öğrenimini Adapazarı'nda tamamladıktan sonra, Konya Selçuk Üniversitesi Mimarlık ve Mühendislik Fakültesi'nden Harita ve Kadastro Mühendisi olarak mezun oldu. Ayrıca, T.C. Sermaye Piyasaları Kurulu (SPK) lisanslı Gayrimenkul Değerleme Uzmanı unvanına sahiptir."
                                                                    }].map((person, index) => (
                                                                    <li key={index}>
                                                                        <div className="card list-view-media bg-white rounded-lg shadow-md p-4">
                                                                            <div className="media flex flex-col sm:flex-row">
                                                                                {/* Image container with fixed dimensions */}
                                                                                <div className="media-left flex justify-center sm:justify-start mb-6 sm:mb-0 sm:mr-4">
                                                                                    <div className="w-64 h-64 flex-shrink-0">
                                                                                        <img
                                                                                            className="rounded-lg w-full h-full object-cover object-center"
                                                                                            src={`/images/kurumsal/baskandanismanlari/${person.img}`}
                                                                                            alt={person.name}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="media-body w-full">
                                                                                    <div>
                                                                                        <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                            {person.name}
                                                                                        </h4>
                                                                                        <h6 className="text-gray-600">Başkan Danışmanı</h6>
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
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                                                </svg>
                                                                                                <a href={`mailto:${person.email}`} className="hover:text-blue-700 transition-colors">
                                                                                                    {person.email}
                                                                                                </a>
                                                                                            </p>
                                                                                            <p className="flex items-center text-gray-700">
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                                                                </svg>
                                                                                                <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="hover:text-blue-700 transition-colors">
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

export default BaskanDanisamanlari;