import React, { useState, useEffect } from 'react';
import Sidebar from "../SideBar/sidebar.tsx";
import { gebze } from "../_SayfaBilgileri/Sayfalar.tsx";

const BugunkuGebzePage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/images/gebze/bugunkugebze/CarsiCamii.jpg",
        "/images/gebze/bugunkugebze/carsimeydan.jpg",
        "/images/gebze/bugunkugebze/carsi.jpg",
        "/images/gebze/bugunkugebze/EskihisarSahil.jpg",
        "/images/gebze/bugunkugebze/mustafapaşa.jpg",
        "/images/gebze/bugunkugebze/Konak.jpg",
        "/images/gebze/bugunkugebze/OsmangaziKopru.jpg",
        "/images/gebze/bugunkugebze/sahil.jpg",
        "/images/gebze/bugunkugebze/ballıkayalar.jpg",
        "/images/gebze/bugunkugebze/TarihiCesme.jpg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const goToNextSlide = () => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    const goToPrevSlide = () => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    const goToSlide = (index: number) => setCurrentSlide(index);

    return (
        <div id="pcoded" className="pcoded">
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <div className="d-flex">
                                            <div style={{ width: '20%', minWidth: '200px' }}>
                                                <Sidebar items={gebze} title={"GEBZE"} />
                                            </div>
                                            <div style={{ flex: 1, marginLeft: '10px' }}>
                                                <div className="card">
                                                    <div className="card-block">
                                                        <div className="slider-container" style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
                                                            <div className="slides" style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${currentSlide * 100}%)`, width: '100%', height: '100%' }}>
                                                                {slides.map((slide, index) => (
                                                                    <div key={index} style={{ minWidth: '100%', height: '100%' }}>
                                                                        <img src={slide} alt={`Bugunkü Gebze Slide ${index + 1}`} style={{ width: '100%', height: '100%' }} />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <button onClick={goToPrevSlide} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', fontSize: '20px', cursor: 'pointer' }}>&lt;</button>
                                                            <button onClick={goToNextSlide} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', fontSize: '20px', cursor: 'pointer' }}>&gt;</button>
                                                            <div style={{ position: 'absolute', bottom: '10px', width: '100%', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                                                                {slides.map((_, index) => (
                                                                    <button key={index} onClick={() => goToSlide(index)} style={{ width: '12px', height: '12px', borderRadius: '50%', background: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer' }} />
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <h5><b>BUGÜNKÜ GEBZE</b></h5><br />
                                                        <p style={{ textAlign: 'justify' }}>
                                                            Gebze, Marmara Bölgesinin doğusunda, İzmit Körfezi'nin kuzey kesiminde yer alan, zengin bir tarihi geçmişe sahip, ekonomisi, tarım, hayvancılık ve sanayiye dayalı Türkiye'nin hızla gelişen ve büyüyen bir ilçesidir.
                                                            Gebze, Kocaeli'nin endüstrisinin büyük bölümünü barındıran, Marmara Denizi'nin kuzeyi ile İstanbul'un 45 kilometre doğusunda yer alan bir ilçedir. Marmara bölgesinin en büyük ikinci ilçesi olup Türkiye sanayisinin %15'ini barındırmaktadır.

                                                            <br/><br/>Gebze, Marmara Bölgesi'nde Kocaeli iline bağlı olarak Anadolu'nun İstanbul'a ve Avrupa'ya bağlantı konumunda bulunan limanlar, havalimanı, devlet demir yolları ve E-5, TEM karayolları çevresinde kurulmuştur. Yolların doğu-batı yönünde olması nedeniyle kentsel alanı ve sanayisi bu doğrultuda gelişmiş bir sanayi bölgesidir.
                                                            Gebze ana ulaşım yolları üzerindeki konumu nedeni ile uzun yıllar Anadolu'dan İstanbul'a göç eden Anadolu halkının, İstanbul'dan önce uğradığı bir ayak olmuştur. İstanbul nüfusunun 10 milyonu aşması kentin sorunlarını artırmış, sanayi tesislerinin İstanbul dışında yerleşmesine gereksinim duyulmuştur.

                                                            <br/><br/>Yeni yerleşim yeri arayışlarının bir sonucu olarak, sanayi tesislerinin büyük çoğunluğu İstanbul'a en yakın konumda olan Gebze'ye akın etmiştir.Toprağın maliyetinin ucuz ve kolay bulunur oluşu Gebze'yi sanayinin cazibe merkezi haline getirmiştir.
                                                            Kentin, limanlara yakınlığının yanında E-5 ve TEM karayollarının birbirine çok yakın bir alanında kurulmuş olması, havalimanlarına ve demiryollarına yakınlığı, hem Avrupa'ya yapılacak ticarette hem de Anadolu, Orta Asya ve Orta Anadolu'ya geçiş için taşıma kolaylıkları sunması, Türkiye'nin en fazla kalkınmış üç büyük kentinin ortasında ve onlara yaklaşık olarak 45 dakika uzaklıkta olması da yatırımcıların dikkatlerini bu bölge üzerinde yoğunlaştırmasının temel nedenleri arasında bulunmaktadır.
                                                            Gebze, Marmara sahiline 7 km., İzmit'e 49 km., İstanbul'a 45 km. uzaklıkta bulunmaktadır. Deniz seviyesinden yüksekliği 130 metredir.
                                                            Günümüzde Gebze kara, deniz ve demiryollarının birbirleriyle kesiştiği önemli kavşak noktasında bulunmaktadır. Eski Gebze şimdiki kasabanın yakınındadır. Yüzeyi kuzeydoğuda dağ ve sırtlardan, batı güneyde kıyıya yakın bölümlerinde düzlüklerden ibarettir.
                                                            İlçe sınırları içinde, göl ,dağ, akarsu bulunmamakla beraber, yaklaşık 650 metre yüksekliği geçmeyen tepelerin ve sırtların varlığından söz edilebilmektedir. Bu tepelerin en yükseği Gaziler Tepesi'dir. Ancak akarsu yerine dereler ve derecikler mevcuttur.
                                                            Genellikle Karadeniz ve Akdeniz bölgeleri arasında bir geçiş özelliği taşımaktadır. Yaz mevsimi sıcak ve az yağışlı, kış mevsimi oldukça serin ve daha ziyade yağışlı geçmektedir. Yıllık yağış ortalaması 550 mm. En çok yağış Aralık-Ocak aylarında, en az yağış ise Ağustos ayındadır. En sıcak ay ortalaması 24.2 derece ile Ağustos ayı, en soğuk ay ortalaması 6.5 derece ile Ocak ayıdır.
                                                            Gebze'nin Körfez şeridi üzerindeki yerleşim yerlerinde, tabiatın oluşturduğu birbirinden güzel koyları ve tabii plajları ile çekici düzeydedir. Yörenin ekilebilir topraklarında tarım, meyvecilik, sebzecilik ileri bir durumdadır. Marmara kıyısında ilçe toprakları genellikle ovalıktır.

                                                            <br/><br/>Yoğun sanayi yapılanması ile dikkat çeken Gebze, her ne kadar idari olarak Kocaeli'ye bağlıysa da, İstanbul iline daha yakın olduğu için, bu ille hem ticari hem de sosyal ilişkileri gelişmiştir. Uzun yıllar il olması için mücadele edilmiş olsa da hali hazırda Kocaeli Büyükşehir Belediyesi sınırları içindedir. İstanbul Büyükşehir Belediyesi, yıllar boyu Gebze'yi kendisine bağlamak istemiş ancak buna izin verilmemiştir.
                                                            <br/><br/>Sürekli yükselen bir nüfus grafiği çizen Gebze, 2008 yılında çıkarılan kanunla birlikte kendisine bağlı olan Çayırova, Darıca ve Dilovası'nın birer ilçe olması sonucu nüfusunun bir bölümünü bu yeni ilçelere vermiştir.
                                                            <br/><br/>&nbsp;&nbsp;Yıl&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nüfus

                                                            <br/><br/>1973&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;27.000

                                                            <br/><br/>1990&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;159.116

                                                            <br/><br/>2000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;253.487

                                                            <br/><br/>2007&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;521.291

                                                            <br/><br/>2008&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;288.569

                                                            <br/><br/><h5>Önemli Kurum ve Kuruluşlar</h5>

                                                            <br/>Gebze Organize Sanayi Bölgesi (GOSB), Gebze merkezine 7 km mesafede 10.370.000 m'lik planlanmış bir alanda, 1985 yılında Gebze ve civarında çarpık sanayileşmenin yol açtığı çevre kirliliğini önlemek, sanayiyi disipline etmek amacıyla, kredi kullanmadan, tamamen katılımcıların finansmanı ile kurulmuş  ve şu an itibariyle 85 firmada yaklaşık 9100 kişi istihdamı ile faaliyet göstermektedir. GOSB'da bulunan sanayi yatırımlarının  adet olarak %33'ü, yatırım tutarı olarak %65'i yabancı sermayeli, özellikle de çok uluslu büyük kuruluşlardır. Yurtiçi ve yurtdışı OSB'lere model olan GOSB da bugün itibari ile makine, kimya, otomotiv yan sanayi, optik, elektronik, sınai ve tıbbi gaz, gıda ve ambalaj ve bilişim sektöründe üretim yapan firmalar yer almaktadır.

                                                            <br/><br/>Gebze, bilimsel çalışmalar, hizmet iyileştirme ve teknik hizmet eğitimleri üzerinde de gelişme göstermekte olan kuruluşlara sahiptir. Gebze'de bulunan TSE, laboratuvar hizmetleri olarak kalibrasyon, deney, tahribatsız muayene hizmetleri, ürün ve hizmet yeri belgelendirme dallarında; TSE Uygunluk Belgesi, Kalite Uygunluk Belgesi (TSEK), İthal Malların Belgelendirilmesi, Araç Proje Hizmetleri, Karayolları Atık Taşıma Belgesi, Hizmet Yeterlilik Belgelendirmesi(HYB), Laboratuar Yeterlilik Hizmetleri, Sistem Belgelendirme, TS EN ISO 9000 Kalite Yönetim Sistemi, TS EN ISO 14000 Çevre Yönetim Sistemi, TS EN ISO 22000 HACCP Yönetim Sistemi, TS 18001 OHSAS Yönetim Sistemi dallarında belgelendirme hizmetleri sunmaktadır.

                                                            <br/><br/>1985 yılında kurulan TÜSSİDE, kamu ve özel sektör kurum ve kuruluşlarında görev yapan yönetici ve çalışanlarına yönelik olarak; liderlik, motivasyon, etkin iletişim, takım çalışması, üretim yönetimi, stratejik yönetim, teknoloji yönetimi, insan kaynakları ve performans yönetimi, temel kalite kavramları ve kurum kültürü, iyileştirme takımları ve teknik gibi konularda hizmet vermektedir.

                                                            <br/><br/>Üniversiteler genel sıralamasında tıp fakültesi olmayan üniversiteler içerisinde Türkiye'nin en iyi 2. Üniversitesi  Gebze Teknik Üniversitesi ilçemiz sınırları içindeki saygın tek üniversitedir. 1992'de kurulan Gebze Yüksek Teknoloji Enstitüsü'nün temelleri ve tecrübe birikimleri üzerine, 22 yıllık mirasa sahip çıkarak 4 Kasım 2014 tarihindeki Türkiye Büyük Millet Meclisi kararı ile kurulmuştur. Gebze Teknik Üniversitesi, ARGE ve İnovasyon hedefli altyapısı, donanımıyla, uluslararası diplomalı akademik kadrosuyla ülkemizin en önemli bilim üssü olma yolunda hızla ilerlemektedir. Gebze Teknik Üniversitesi Türkiye üniversiteler genel sıralamasında Türkiye'nin en iyi 5., tıp fakültesi olmayan üniversiteler içerisinde  2. ve 6000 civarı öğrencisi olan üniversiteler içinde Türkiye 1.'si olarak yer alan genç, dinamik ve deneyimli bir üniversitedir.

                                                            <br/><br/>TÜBİTAK Marmara Araştırma Merkezi ise, Türkiye'nin küresel rekabet gücünün artırılmasına bilim ve teknolojiyi kullanarak katkıda bulunmaktadır. Bünyesinde, Bilişim Teknolojileri Enstitüsü, Enerji Enstitüsü, Yer ve Deniz Bilimleri Enstitüsü, Malzeme Enstitüsü ve Teknoloji Serbest Bölgesi ve Teknopark İşletmeciliğini yürüten MARTEK A.Ş. bulunmaktadır. Endüstriyel kuruluşların, savunma kuruluşlarının, üniversitelerin ve kamu kuruluşlarının hizmetindedir.
                                                        </p>
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

export default BugunkuGebzePage;
