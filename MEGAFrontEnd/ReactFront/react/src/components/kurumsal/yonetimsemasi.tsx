import React from 'react';
import Sidebar from "../SideBar/sidebar.tsx";
import { kurumsal } from "../_SayfaBilgileri/Sayfalar.tsx";

const ManagementChart: React.FC = () => {
    return (
        <div id="pcoded" className="pcoded">
            <br /><br /><br /><br /><br /><br />
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <div className="flex flex-row gap-4">
                                            {/* Sidebar - %20 genişlikte ve sabit */}
                                            <div style={{ width: '20%', minWidth: '200px' }}>
                                                <Sidebar items={kurumsal} title={"KURUMSAL"} />
                                            </div>

                                            {/* Ana İçerik Alanı */}
                                            <div className="flex-1 p-4">
                                                {/* Header */}
                                                <div className="mb-8">
                                                    <div className="flex flex-col md:flex-row justify-between items-center">
                                                        <div className="mb-4 md:mb-0">
                                                            <h1 className="text-2xl font-bold">YÖNETİM ŞEMASI</h1>
                                                        </div>
                                                        <div>
                                                            <nav className="flex" aria-label="Breadcrumb">
                                                                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                                                    <li className="inline-flex items-center">
                                                                        <a href="index.html" className="text-gray-700 hover:text-blue-600">
                                                                            Ana Sayfa
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="flex items-center">
                                                                            <span className="mx-2">/</span>
                                                                            <a href="#" className="text-gray-700 hover:text-blue-600">Kurumsal</a>
                                                                        </div>
                                                                    </li>
                                                                    <li aria-current="page">
                                                                        <div className="flex items-center">
                                                                            <span className="mx-2">/</span>
                                                                            <span className="text-gray-500">Yönetim Şeması</span>
                                                                        </div>
                                                                    </li>
                                                                </ol>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Main Content */}
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

                                                                                <div className="space-y-2">
                                                                                    <button className="btn-container bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Özel Kalem Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Dr. Yusuf ATASEVEN</h5>
                                                                                    </button>&nbsp;<br/>
                                                                                    <button className="btn-container bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Hukuk İşleri Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Av. Murat TUNCA</h5>
                                                                                    </button><br/>
                                                                                    <button className="btn-container bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Teftiş Kurulu Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Kemal TETİK</h5>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                {/* Başkan Yardımcıları */}
                                                                {/* Dursun Ali ARSLAN */}
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

                                                                                <div className="space-y-2">
                                                                                    <button className="btn-container bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Sosyal Destek Hizmetleri Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Mecit KESKİNOĞLU</h5>
                                                                                    </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                                                                                    <button className="btn-container bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Zabıta Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Burhan KANDEMİR</h5>
                                                                                    </button>&nbsp;<br/>
                                                                                    <button className="btn-container bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        İklim Değişikliği ve Sıfır Atık Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Senay ALTINTAŞ</h5>
                                                                                    </button>&nbsp;<br/>
                                                                                    <button className="btn-container bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
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

                                                                                <div className="space-y-2">
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Mali Hizmetler Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Bilgin ALTAY</h5>
                                                                                    </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        İnsan Kaynakları ve Eğitim Müdürlüğü <br />
                                                                                        <h5 className="text-sm">İmran AYYILDIZ</h5>
                                                                                    </button><br/>
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Ruhsat Denetim Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Erhan HORUZ</h5>
                                                                                    </button>&nbsp;&nbsp;<br/>
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
                                                                                    src="/images/yonetimsemasi/şerif canpolat.jpg"
                                                                                    width="270"
                                                                                    height="350"
                                                                                    alt="Şerif Canpolat"
                                                                                />
                                                                            </a>
                                                                            <div className="media-body ml-4">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                        Şerif Canpolat
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <div className="space-y-2">
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Fen İşleri Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Hafız ALTINTAŞ</h5>
                                                                                    </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Park Ve Bahçeler Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Tunacy TÜRETKEN</h5>
                                                                                    </button><br/>
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Etüt Ve Proje Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Ömer ŞAHİN</h5>
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
                                                                                    src="/images/yonetimsemasi/muharrem baltacıoğlu.jpg"
                                                                                    width="270"
                                                                                    height="350"
                                                                                    alt="Muharrem BALTACIOGLU"
                                                                                />
                                                                            </a>
                                                                            <div className="media-body ml-4">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                        Muharrem BALTACIOGLU
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <div className="space-y-2">
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Emlak Ve İstimlak Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Şaban SARIAY</h5>
                                                                                    </button>&nbsp;&nbsp;<br/>
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Plan Ve Proje Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Asker ÇOBAN</h5>
                                                                                    </button><br/>
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Bilgi İşlem Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Tümay AKSAN</h5>
                                                                                    </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        İmar Ve Şehircilik Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Mücahit KOKSAL</h5>
                                                                                    </button><br/>
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Yapı Ve Kontrol Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Mücahit KOKSAL</h5>
                                                                                    </button><br/>
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
                                                                                    src="/images/yonetimsemasi/mahmut yandık.jpg"
                                                                                    width="270"
                                                                                    height="350"
                                                                                    alt="Mahmut YANDIK"
                                                                                />
                                                                            </a>
                                                                            <div className="media-body ml-4">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                        Mahmut YANDIK
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <div className="space-y-2">
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Makina İkmal, Bakım Ve Onarım Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Dursun Ali Yayla</h5>
                                                                                    </button>&nbsp;<br/>
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Mezarlıklar Müdürlüğü <br />
                                                                                        <h5 className="text-sm">İslam ÖZDAĞ</h5>
                                                                                    </button>&nbsp;&nbsp;<br/>
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        İşletme Ve İştirakler Müdürlüğü<br />
                                                                                        <h5 className="text-sm">Hacı KEY</h5>
                                                                                    </button><br/>
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
                                                                                    src="/images/yonetimsemasi/şener akın.jpg"
                                                                                    width="270"
                                                                                    height="350"
                                                                                    alt="Şener AKIN"
                                                                                />
                                                                            </a>
                                                                            <div className="media-body ml-4">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                        Şener AKIN
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <div className="space-y-2">
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Veteriner İşleri Müdürlüğü<br />
                                                                                        <h5 className="text-sm">Cevat ALTINTAŞ</h5>
                                                                                    </button>&nbsp;&nbsp;<br/>
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Afet İşleri Müdürlüğü<br />
                                                                                        <h5 className="text-sm">Soner BİLİR</h5>
                                                                                    </button><br/>
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Yazı İşleri Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Bahar ÖZALP</h5>
                                                                                    </button><br/>
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
                                                                                    src="/images/yonetimsemasi/mücahit birben.jpg"
                                                                                    width="270"
                                                                                    height="350"
                                                                                    alt="Mücahit BİRBEN"
                                                                                />
                                                                            </a>
                                                                            <div className="media-body ml-4">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                        Mücahit BİRBEN
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <div className="space-y-2">
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Gençlik Ve Spor Hizmetleri Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Burhannettin DEMİRCİ</h5>
                                                                                    </button><br/>
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Basın Yayın Ve Halkla İlişkiler Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Birsen VURDEM</h5>
                                                                                    </button><br/>
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Kültür İşleri Müdürlüğü<br />
                                                                                        <h5 className="text-sm">Hasan GÜLER</h5>
                                                                                    </button>&nbsp;&nbsp;<br/>
                                                                                    <button className="btn-hover bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
                                                                                        Kadın Ve Aile Hizmetleri Müdürlüğü <br />
                                                                                        <h5 className="text-sm">Zeynep YILDIRIM</h5>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

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

export default ManagementChart;