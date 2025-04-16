import React from 'react';

const BaskanDanismanlari: React.FC = () => {
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
                                                    <div className="flex justify-center">
                                                        <h1 className="text-2xl font-bold text-center">BAŞKAN DANIŞMANLARI</h1>
                                                    </div>
                                                </div>

                                                {/* Main Content */}
                                                <div className="card shadow-lg rounded-lg mt-2">
                                                    <div className="card-header bg-blue-900 p-4">
                                                        <h4 className="text-2xl font-bold text-white text-center">BAŞKAN DANIŞMANLARI</h4>
                                                    </div>
                                                    <div className="card-block p-4">
                                                        <div className="col-md-12">
                                                            <ul className="space-y-4">
                                                                {/* Danışman 1 */}
                                                                <li>
                                                                    <div className="card list-view-media bg-white rounded-lg shadow-md p-4">
                                                                        <div className="media flex items-start">
                                                                            <a className="media-left" href="#">
                                                                                <img
                                                                                    className="rounded-lg"
                                                                                    src="/images/kurumsal/baskandanismanlari/Remzi-SEKER.jpg"
                                                                                    width="270"
                                                                                    height="350"
                                                                                    alt="Remzi ŞEKER"
                                                                                />
                                                                            </a>
                                                                            <div className="media-body ml-4">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                        Remzi ŞEKER
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Danışmanı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                {/* Danışman 2 */}
                                                                <li>
                                                                    <div className="card list-view-media bg-white rounded-lg shadow-md p-4">
                                                                        <div className="media flex items-start">
                                                                            <a className="media-left" href="#">
                                                                                <img
                                                                                    className="rounded-lg"
                                                                                    src="/images/kurumsal/baskandanismanlari/Yusuf-BURKUT.jpg"
                                                                                    width="270"
                                                                                    height="350"
                                                                                    alt="Yusuf BURKUT"
                                                                                />
                                                                            </a>
                                                                            <div className="media-body ml-4">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                        Dursun Ali ARSLAN
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Danışmanı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
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
