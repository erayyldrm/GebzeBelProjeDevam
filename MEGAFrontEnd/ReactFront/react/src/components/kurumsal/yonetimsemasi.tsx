import React from 'react';

const ManagementChart: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="pcoded-inner-content">
                <div className="main-body">
                    <div className="page-wrapper">
                        <div className="page-body">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card shadow-lg rounded-lg">
                                        <div className="card-header bg-blue-900 p-4">
                                            <h4 className="text-2xl font-bold text-white">Yönetim Şeması</h4>
                                        </div>
                                        <div className="card-block p-4">
                                            <div className="col-md-12">
                                                <ul className="space-y-4">
                                                    {/* Başkan */}
                                                    <li>
                                                        <div className="card list-view-media bg-white rounded-lg shadow-md p-4">
                                                            <div className="media flex items-start">
                                                                <a className="media-left" href="#">
                                                                    <img
                                                                        className="rounded-lg"
                                                                        src="/images/kurumsal/belediyemeclisi/zinnurbuyukgoz.jpg"
                                                                        width="270"
                                                                        height="350"
                                                                        alt="Zinnur BÜYÜKGÖZ"
                                                                    />
                                                                </a>
                                                                <div className="media-body ml-4">
                                                                    <div>
                                                                        <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                            Zinnur BÜYÜKGÖZ
                                                                        </h4>
                                                                        <h6 className="text-gray-600">Başkan</h6>
                                                                        <hr className="my-2 border-t border-gray-300" />
                                                                    </div>
                                                                    <br />
                                                                    <div className="space-y-2">
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Özel Kalem Müdürlüğü <br />
                                                                            <h5 className="text-sm">Dr. Yusuf ATASEVEN</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Hukuk İşleri Müdürlüğü <br />
                                                                            <h5 className="text-sm">Av. Murat TUNCA</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Teftiş Kurulu Müdürlüğü <br />
                                                                            <h5 className="text-sm">Kemal TETİK</h5>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    {/* Başkan Yardımcısı - Dursun Ali ARSLAN */}
                                                    <li>
                                                        <div className="card list-view-media bg-white rounded-lg shadow-md p-4">
                                                            <div className="media flex items-start">
                                                                <a className="media-left" href="#">
                                                                    <img
                                                                        className="rounded-lg"
                                                                        src="/images/yonetimsemasi/Dursun ali .jpg"
                                                                        width="270"
                                                                        height="350"
                                                                        alt="Dursun Ali ARSLAN"
                                                                    />
                                                                </a>
                                                                <div className="media-body ml-4">
                                                                    <div>
                                                                        <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                            Dursun Ali ARSLAN
                                                                        </h4>
                                                                        <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                        <hr className="my-2 border-t border-gray-300" />
                                                                    </div>
                                                                    <br />
                                                                    <div className="space-y-2">
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Sosyal Destek Hizmetleri Müdürlüğü <br />
                                                                            <h5 className="text-sm">Mecit KESKİNOĞLU</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Zabıta Müdürlüğü <br />
                                                                            <h5 className="text-sm">Burhan KANDEMİR</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            İklim Değişikliği ve Sıfır Atık Müdürlüğü <br />
                                                                            <h5 className="text-sm">Senay ALTINTAŞ</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Temizlik İşleri Müdürlüğü <br />
                                                                            <h5 className="text-sm">Senay ALTINTAŞ</h5>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    {/* Diğer Başkan Yardımcıları */}
                                                    {/* Ahmet Hüseyin ÇELEBİ */}
                                                    <li>
                                                        <div className="card list-view-media bg-white rounded-lg shadow-md p-4">
                                                            <div className="media flex items-start">
                                                                <a className="media-left" href="#">
                                                                    <img
                                                                        className="rounded-lg"
                                                                        src="/images/yonetimsemasi/ahmet hüseyin.jpg"
                                                                        width="270"
                                                                        height="350"
                                                                        alt="Ahmet Hüseyin ÇELEBİ"
                                                                    />
                                                                </a>
                                                                <div className="media-body ml-4">
                                                                    <div>
                                                                        <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                            Ahmet Hüseyin ÇELEBİ
                                                                        </h4>
                                                                        <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                        <hr className="my-2 border-t border-gray-300" />
                                                                    </div>
                                                                    <br />
                                                                    <div className="space-y-2">
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Mali Hizmetler Müdürlüğü <br />
                                                                            <h5 className="text-sm">Bilgin ALTAY</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            İnsan Kaynakları ve Eğitim Müdürlüğü <br />
                                                                            <h5 className="text-sm">İmran AYYILDIZ</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Ruhsat Denetim Müdürlüğü <br />
                                                                            <h5 className="text-sm">Erhan HORUZ</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Destek Hizmetleri Müdürlüğü <br />
                                                                            <h5 className="text-sm">Carullah Recai ER</h5>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="card list-view-media bg-white rounded-lg shadow-md p-4">
                                                            <div className="media flex items-start">
                                                                <a className="media-left" href="#">
                                                                    <img
                                                                        className="rounded-lg"
                                                                        src="/images/yonetimsemasi/ahmet hüseyin.jpg"
                                                                        width="270"
                                                                        height="350"
                                                                        alt="Ahmet Hüseyin ÇELEBİ"
                                                                    />
                                                                </a>
                                                                <div className="media-body ml-4">
                                                                    <div>
                                                                        <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                            Ahmet Hüseyin ÇELEBİ
                                                                        </h4>
                                                                        <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                        <hr className="my-2 border-t border-gray-300" />
                                                                    </div>
                                                                    <br />
                                                                    <div className="space-y-2">
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Mali Hizmetler Müdürlüğü <br />
                                                                            <h5 className="text-sm">Bilgin ALTAY</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            İnsan Kaynakları ve Eğitim Müdürlüğü <br />
                                                                            <h5 className="text-sm">İmran AYYILDIZ</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Ruhsat Denetim Müdürlüğü <br />
                                                                            <h5 className="text-sm">Erhan HORUZ</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Destek Hizmetleri Müdürlüğü <br />
                                                                            <h5 className="text-sm">Carullah Recai ER</h5>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="card list-view-media bg-white rounded-lg shadow-md p-4">
                                                            <div className="media flex items-start">
                                                                <a className="media-left" href="#">
                                                                    <img
                                                                        className="rounded-lg"
                                                                        src="/images/yonetimsemasi/ahmet hüseyin.jpg"
                                                                        width="270"
                                                                        height="350"
                                                                        alt="Ahmet Hüseyin ÇELEBİ"
                                                                    />
                                                                </a>
                                                                <div className="media-body ml-4">
                                                                    <div>
                                                                        <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                            Ahmet Hüseyin ÇELEBİ
                                                                        </h4>
                                                                        <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                        <hr className="my-2 border-t border-gray-300" />
                                                                    </div>
                                                                    <br />
                                                                    <div className="space-y-2">
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Mali Hizmetler Müdürlüğü <br />
                                                                            <h5 className="text-sm">Bilgin ALTAY</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            İnsan Kaynakları ve Eğitim Müdürlüğü <br />
                                                                            <h5 className="text-sm">İmran AYYILDIZ</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Ruhsat Denetim Müdürlüğü <br />
                                                                            <h5 className="text-sm">Erhan HORUZ</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Destek Hizmetleri Müdürlüğü <br />
                                                                            <h5 className="text-sm">Carullah Recai ER</h5>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="card list-view-media bg-white rounded-lg shadow-md p-4">
                                                            <div className="media flex items-start">
                                                                <a className="media-left" href="#">
                                                                    <img
                                                                        className="rounded-lg"
                                                                        src="/images/yonetimsemasi/ahmet hüseyin.jpg"
                                                                        width="270"
                                                                        height="350"
                                                                        alt="Ahmet Hüseyin ÇELEBİ"
                                                                    />
                                                                </a>
                                                                <div className="media-body ml-4">
                                                                    <div>
                                                                        <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                            Ahmet Hüseyin ÇELEBİ
                                                                        </h4>
                                                                        <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                        <hr className="my-2 border-t border-gray-300" />
                                                                    </div>
                                                                    <br />
                                                                    <div className="space-y-2">
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Mali Hizmetler Müdürlüğü <br />
                                                                            <h5 className="text-sm">Bilgin ALTAY</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            İnsan Kaynakları ve Eğitim Müdürlüğü <br />
                                                                            <h5 className="text-sm">İmran AYYILDIZ</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Ruhsat Denetim Müdürlüğü <br />
                                                                            <h5 className="text-sm">Erhan HORUZ</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Destek Hizmetleri Müdürlüğü <br />
                                                                            <h5 className="text-sm">Carullah Recai ER</h5>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="card list-view-media bg-white rounded-lg shadow-md p-4">
                                                            <div className="media flex items-start">
                                                                <a className="media-left" href="#">
                                                                    <img
                                                                        className="rounded-lg"
                                                                        src="/images/yonetimsemasi/ahmet hüseyin.jpg"
                                                                        width="270"
                                                                        height="350"
                                                                        alt="Ahmet Hüseyin ÇELEBİ"
                                                                    />
                                                                </a>
                                                                <div className="media-body ml-4">
                                                                    <div>
                                                                        <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                            Ahmet Hüseyin ÇELEBİ
                                                                        </h4>
                                                                        <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                        <hr className="my-2 border-t border-gray-300" />
                                                                    </div>
                                                                    <br />
                                                                    <div className="space-y-2">
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Mali Hizmetler Müdürlüğü <br />
                                                                            <h5 className="text-sm">Bilgin ALTAY</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            İnsan Kaynakları ve Eğitim Müdürlüğü <br />
                                                                            <h5 className="text-sm">İmran AYYILDIZ</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Ruhsat Denetim Müdürlüğü <br />
                                                                            <h5 className="text-sm">Erhan HORUZ</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Destek Hizmetleri Müdürlüğü <br />
                                                                            <h5 className="text-sm">Carullah Recai ER</h5>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="card list-view-media bg-white rounded-lg shadow-md p-4">
                                                            <div className="media flex items-start">
                                                                <a className="media-left" href="#">
                                                                    <img
                                                                        className="rounded-lg"
                                                                        src="/images/yonetimsemasi/ahmet hüseyin.jpg"
                                                                        width="270"
                                                                        height="350"
                                                                        alt="Ahmet Hüseyin ÇELEBİ"
                                                                    />
                                                                </a>
                                                                <div className="media-body ml-4">
                                                                    <div>
                                                                        <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                            Ahmet Hüseyin ÇELEBİ
                                                                        </h4>
                                                                        <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                        <hr className="my-2 border-t border-gray-300" />
                                                                    </div>
                                                                    <br />
                                                                    <div className="space-y-2">
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Mali Hizmetler Müdürlüğü <br />
                                                                            <h5 className="text-sm">Bilgin ALTAY</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            İnsan Kaynakları ve Eğitim Müdürlüğü <br />
                                                                            <h5 className="text-sm">İmran AYYILDIZ</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Ruhsat Denetim Müdürlüğü <br />
                                                                            <h5 className="text-sm">Erhan HORUZ</h5>
                                                                        </button>
                                                                        <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                            Destek Hizmetleri Müdürlüğü <br />
                                                                            <h5 className="text-sm">Carullah Recai ER</h5>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    {/* Diğer Başkan Yardımcıları için benzer yapıyı tekrarlayın */}
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

    );
};

export default ManagementChart;