import React from 'react';
import Sidebar from "../SideBar/sidebar.tsx";
import { kurumsal } from "../_SayfaBilgileri/Sayfalar.tsx";

const BaskanPage: React.FC = () => {
    return (
        <div id="pcoded" className="pcoded">
            <br /><br /><br /><br /><br /><br />
            <div className="pcoded-overlay-box"></div>
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <div className="row">
                                            {/* Main container */}
                                            <div className="container-fluid px-0">
                                                <div className="row gx-lg-4">
                                                    {/* Sidebar - becomes full width on mobile */}
                                                    <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
                                                        <div className="sidebar-wrapper">
                                                            <Sidebar items={kurumsal} title={"KURUMSAL"} />
                                                        </div>
                                                    </div>

                                                    {/* Main Content */}
                                                    <div className="col-lg-9 col-md-8">
                                                        <div className="card">
                                                            <div className="card-block p-3 p-md-4">
                                                                <img
                                                                    src="/images/kurumsal/baskansayfasi.jpg"
                                                                    alt="Zinnur Büyükgöz"
                                                                    className="img-fluid rounded"
                                                                />
                                                                <h3 className="mt-4 mb-3"><b>Zinnur BÜYÜKGÖZ</b></h3>
                                                                <div className="text-justify">
                                                                    <p>
                                                                        1964 yılında Erzurum'da doğdu. İlköğretim tahsilini 1975'te Bakırköy Koca Sinan İlkokulu'nda ve 1978'de Kadıköy İmam Hatip Ortaokulu'nda tamamladı. 1983'te ise Gebze İmam Hatip Lisesi'nden mezun oldu.
                                                                        1987'de Yıldız Teknik Üniversitesi Mimarlık Fakültesi'nden Şehir ve Bölge Plancısı unvanıyla mezun oldu. 1987-1989 yılları arasında aynı üniversitede Şehir ve Bölge Planlaması dalında yüksek lisansını tamamladı. 33 Yıldan bu yana ise Şehir Plancısı unvanıyla hizmet etmeye devam etmektedir. Evli ve dört çocuk babasıdır.
                                                                        Refah Partisi'nden Darıca Belde Başkanlığı ve Gebze Yönetim Kurulu Üyeliği ile Fazilet Partisi'nden Kocaeli İl Yönetimi İcra Kurulu Üyeliği yapmıştır.
                                                                        2004-2009 yılları arasında Gebze Belediyesi Teknik Başkan Yardımcılığı ve Belediye Meclis Üyeliği, Kocaeli Büyükşehir Belediyesi Meclis Üyeliği ve İmar Komisyon Üyeliği görevlerinde bulunmuştur.
                                                                        Gebze ve Kocaeli'nde siyasi görevlerde bulunmanın yanı sıra, sivil toplum kuruluşlarında ve birçok farklı platformlarda faaliyetler sürdürmüştür. 2004'ten itibaren İstanbul Kültür Varlıklarını Koruma Bölge Kurulu ile Bursa ve Kocaeli Kültür Varlıklarını Koruma Bölge Kurulları'nda üyelik yapmıştır.
                                                                        Türkiye geneli İdare Mahkemeleri'nde Bilirkişi unvanıyla adaletin tecellisine yardımcı olmaya gayret etmiştir.
                                                                        2014-2016 yılları arasında İstanbul Ticaret Odası Proje Danışma Kurul Üyesi olarak çalışmıştır. 2014'ten bu yana ise Teknopark İstanbul Teknoloji Bölgesi'nde Proje Danışma Kurulu Üyeliği yapmaktadır.
                                                                        Ocak 2019 itibarıyla Kültür Varlıklarını Koruma Bölge Kurulu Üyeliği'nden ayrılmıştır.
                                                                        31 Mart 2019 Mahalli İdareler Seçimi'nde halkımızın teveccühü ile Gebze Belediye Başkanı seçilmiştir ve halen bu görevi yürütmeye devam etmektedir.
                                                                    </p>
                                                                </div>
                                                                <div className="text-center text-md-end mt-4">
                                                                    <img
                                                                        src="/images/kurumsal/imza.png"
                                                                        alt="imza"
                                                                        className="img-fluid"
                                                                        style={{ maxWidth: '200px', height: 'auto' }}
                                                                    />
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
            </div>

            {/* Responsive CSS */}
            <style jsx>{`
                @media (max-width: 767.98px) {
                    .sidebar-wrapper {
                        margin-bottom: 2rem;
                    }
                    .card-block {
                        padding: 1.5rem !important;
                    }
                }
                @media (min-width: 768px) and (max-width: 991.98px) {
                    .col-md-4 {
                        flex: 0 0 35%;
                        max-width: 35%;
                    }
                    .col-md-8 {
                        flex: 0 0 65%;
                        max-width: 65%;
                    }
                }
            `}</style>
        </div>
    );
};

export default BaskanPage;