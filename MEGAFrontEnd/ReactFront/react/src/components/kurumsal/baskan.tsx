import React from 'react';
import Sidebar from "../SideBar/sidebar.tsx";
import {kurumsal} from "../_SayfaBilgileri/Sayfalar.tsx";

const BaskanPage: React.FC = () => {
    return (
        <div id="pcoded" className="pcoded">
            <div className="pcoded-overlay-box"></div>
            <div className="pcoded-container navbar-wrapper">

                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">

                        <div className="pcoded-content">

                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">

                                        <div className="row">

                                            <div className="col-lg-8 ms-auto">
                                                <Sidebar items={kurumsal} title={"Gebze"} />

                                                <div className="card">
                                                    <div className="card-block">
                                                        <img src="/images/kurumsal/baskansayfasi.jpg" style={{ width: '100%', height: '100%' }} alt="Zinnur Büyükgöz" className="baskan-resim" /><br />
                                                        <h3><b>Zinnur BÜYÜKGÖZ</b></h3><br />
                                                        <div style={{ textAlign: 'justify' }}>
                                                            <p>
                                                                1964 yılında Erzurum'da doğdu. İlköğretim tahsilini 1975'te Bakırköy Koca Sinan İlkokulu'nda ve 1978'de Kadıköy İmam Hatip Ortaokulu'nda tamamladı. 1983'te ise Gebze İmam Hatip Lisesi'nden mezun oldu.
                                                                1987'de Yıldız Teknik Üniversitesi Mimarlık Fakültesi'nden Şehir ve Bölge Plancısı unvanıyla mezun oldu. 1987-1989 yılları arasında aynı üniversitede Şehir ve Bölge Planlaması dalında yüksek lisansını tamamladı.
                                                                33 yıldan bu yana ise Şehir Plancısı unvanıyla hizmet etmeye devam etmektedir. Evli ve dört çocuk babasıdır.
                                                                Refah Partisi'nden Darıca Belde Başkanlığı ve Gebze Yönetim Kurulu Üyeliği ile Fazilet Partisi'nden Kocaeli İl Yönetimi İcra Kurulu Üyeliği yapmıştır.
                                                                2004-2009 yılları arasında Gebze Belediyesi Teknik Başkan Yardımcılığı ve Belediye Meclis Üyeliği, Kocaeli Büyükşehir Belediyesi Meclis Üyeliği ve İmar Komisyon Üyeliği görevlerinde bulunmuştur.
                                                                Gebze ve Kocaeli'nde siyasi görevlerde bulunmanın yanı sıra, sivil toplum kuruluşlarında ve birçok farklı platformlarda faaliyetler sürdürmüştür. 2004'ten itibaren İstanbul Kültür Varlıklarını Koruma Bölge Kurulu ile Bursa ve Kocaeli Kültür Varlıklarını Koruma Bölge Kurulları'nda üyelik yapmıştır.
                                                                Türkiye geneli İdare Mahkemeleri'nde Bilirkişi unvanıyla adaletin tecellisine yardımcı olmaya gayret etmiştir. 2014-2016 yılları arasında İstanbul Ticaret Odası Proje Danışma Kurul Üyesi olarak çalışmıştır.
                                                                2014'ten bu yana ise Teknopark İstanbul Teknoloji Bölgesi'nde Proje Danışma Kurulu Üyeliği yapmaktadır. Ocak 2019 itibarıyla Kültür Varlıklarını Koruma Bölge Kurulu Üyeliği'nden ayrılmıştır.
                                                                31 Mart 2019 Mahalli İdareler Seçimi'nde halkımızın teveccühü ile Gebze Belediye Başkanı seçilmiştir ve halen bu görevi yürütmeye devam etmektedir.
                                                            </p>
                                                        </div>
                                                        <img src="/images/kurumsal/imza.png" style={{ width: '200px', height: '200px',float:'right' }} alt="imza" className="imza" />
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

// Custom CSS that was in <style> tag
// You'd typically put this in a separate CSS file or use a CSS-in-JS solution
// For this example, you could add it to your global CSS or use styled-components

export default BaskanPage;