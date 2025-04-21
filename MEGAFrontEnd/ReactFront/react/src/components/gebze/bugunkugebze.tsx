import React from 'react';
import ImageSlider from '../Sliders/SliderTest.tsx';

const BugunkuGebzePage: React.FC = () => {
    const slides = [
        {
            image: "/images/gebze/bugunkugebze/CarsiCamii.jpg",
            alt: "Gebze Çarşı Camii",
        },
        {
            image: "/images/gebze/bugunkugebze/carsimeydan.jpg",
            alt: "Gebze Çarşı Meydanı",
        },
        {
            image: "/images/gebze/bugunkugebze/carsi.jpg",
            alt: "Gebze Çarşısı",
        },
        {
            image: "/images/gebze/bugunkugebze/EskihisarSahil.jpg",
            alt: "Eskihisar Sahili",
        },
        {
            image: "/images/gebze/bugunkugebze/mustafapaşa.jpg",
            alt: "Mustafapaşa Mahallesi",
        },
        {
            image: "/images/gebze/bugunkugebze/Konak.jpg",
            alt: "Gebze Konak",
        },
        {
            image: "/images/gebze/bugunkugebze/OsmangaziKopru.jpg",
            alt: "Osman Gazi Köprüsü",
        },
        {
            image: "/images/gebze/bugunkugebze/sahil.jpg",
            alt: "Gebze Sahili",
        },
        {
            image: "/images/gebze/bugunkugebze/ballıkayalar.jpg",
            alt: "Ballıkayalar Tabiat Parkı",
        },
        {
            image: "/images/gebze/bugunkugebze/TarihiCesme.jpg",
            alt: "Tarihi Çeşme",
        }
    ];

    return (
        <div className="main-body">
            <div className="page-wrapper">
                <div className="w-full px-2 md:px-4">
                    <div className="card w-full max-w-screen-lg mx-auto top-2 mt-1">
                        <div className="card w-full bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="card-block p-3 md:p-6">
                                {/* Responsive Image slider with better container constraints */}
                                <div className="relative w-full overflow-hidden rounded-lg shadow-md">
                                    <div className="aspect-w-16 aspect-h-9 md:aspect-h-7">
                                        <ImageSlider slides={slides} />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">BUGÜNKÜ GEBZE</h2>

                                    <div className="text-justify text-gray-700 space-y-4">
                                        <p>
                                            Gebze, Marmara Bölgesinin doğusunda, İzmit Körfezi'nin kuzey kesiminde yer alan,
                                            zengin bir tarihi geçmişe sahip, ekonomisi, tarım, hayvancılık ve sanayiye
                                            dayalı
                                            Türkiye'nin hızla gelişen ve büyüyen bir ilçesidir.
                                            Gebze, Kocaeli'nin endüstrisinin büyük bölümünü barındıran, Marmara Denizi'nin
                                            kuzeyi ile İstanbul'un 45 kilometre doğusunda yer alan bir ilçedir. Marmara
                                            bölgesinin en büyük ikinci ilçesi olup Türkiye sanayisinin %15'ini
                                            barındırmaktadır.
                                        </p>

                                        <p>
                                            Gebze, Marmara Bölgesi'nde Kocaeli iline bağlı olarak Anadolu'nun
                                            İstanbul'a ve Avrupa'ya bağlantı konumunda bulunan limanlar, havalimanı, devlet
                                            demir yolları ve E-5, TEM karayolları çevresinde kurulmuştur. Yolların doğu-batı
                                            yönünde olması nedeniyle kentsel alanı ve sanayisi bu doğrultuda gelişmiş bir
                                            sanayi
                                            bölgesidir.
                                            Gebze ana ulaşım yolları üzerindeki konumu nedeni ile uzun yıllar Anadolu'dan
                                            İstanbul'a göç eden Anadolu halkının, İstanbul'dan önce uğradığı bir ayak
                                            olmuştur.
                                            İstanbul nüfusunun 10 milyonu aşması kentin sorunlarını artırmış, sanayi
                                            tesislerinin İstanbul dışında yerleşmesine gereksinim duyulmuştur.
                                        </p>

                                        <p>
                                            Yeni yerleşim yeri arayışlarının bir sonucu olarak, sanayi tesislerinin
                                            büyük çoğunluğu İstanbul'a en yakın konumda olan Gebze'ye akın etmiştir.Toprağın
                                            maliyetinin ucuz ve kolay bulunur oluşu Gebze'yi sanayinin cazibe merkezi haline
                                            getirmiştir.
                                            Kentin, limanlara yakınlığının yanında E-5 ve TEM karayollarının birbirine çok
                                            yakın
                                            bir alanında kurulmuş olması, havalimanlarına ve demiryollarına yakınlığı, hem
                                            Avrupa'ya yapılacak ticarette hem de Anadolu, Orta Asya ve Orta Anadolu'ya geçiş
                                            için taşıma kolaylıkları sunması, Türkiye'nin en fazla kalkınmış üç büyük
                                            kentinin
                                            ortasında ve onlara yaklaşık olarak 45 dakika uzaklıkta olması da yatırımcıların
                                            dikkatlerini bu bölge üzerinde yoğunlaştırmasının temel nedenleri arasında
                                            bulunmaktadır.
                                            Gebze, Marmara sahiline 7 km., İzmit'e 49 km., İstanbul'a 45 km. uzaklıkta
                                            bulunmaktadır. Deniz seviyesinden yüksekliği 130 metredir.
                                        </p>

                                        <p>
                                            Günümüzde Gebze kara, deniz ve demiryollarının birbirleriyle kesiştiği önemli
                                            kavşak
                                            noktasında bulunmaktadır. Eski Gebze şimdiki kasabanın yakınındadır. Yüzeyi
                                            kuzeydoğuda dağ ve sırtlardan, batı güneyde kıyıya yakın bölümlerinde
                                            düzlüklerden
                                            ibarettir.
                                            İlçe sınırları içinde, göl ,dağ, akarsu bulunmamakla beraber, yaklaşık 650 metre
                                            yüksekliği geçmeyen tepelerin ve sırtların varlığından söz edilebilmektedir. Bu
                                            tepelerin en yükseği Gaziler Tepesi'dir. Ancak akarsu yerine dereler ve
                                            derecikler
                                            mevcuttur.
                                        </p>

                                        <p>
                                            Genellikle Karadeniz ve Akdeniz bölgeleri arasında bir geçiş özelliği
                                            taşımaktadır.
                                            Yaz mevsimi sıcak ve az yağışlı, kış mevsimi oldukça serin ve daha ziyade
                                            yağışlı
                                            geçmektedir. Yıllık yağış ortalaması 550 mm. En çok yağış Aralık-Ocak aylarında,
                                            en
                                            az yağış ise Ağustos ayındadır. En sıcak ay ortalaması 24.2 derece ile Ağustos
                                            ayı,
                                            en soğuk ay ortalaması 6.5 derece ile Ocak ayıdır.
                                            Gebze'nin Körfez şeridi üzerindeki yerleşim yerlerinde, tabiatın oluşturduğu
                                            birbirinden güzel koyları ve tabii plajları ile çekici düzeydedir. Yörenin
                                            ekilebilir topraklarında tarım, meyvecilik, sebzecilik ileri bir durumdadır.
                                            Marmara
                                            kıyısında ilçe toprakları genellikle ovalıktır.
                                        </p>

                                        <p>
                                            Yoğun sanayi yapılanması ile dikkat çeken Gebze, her ne kadar idari olarak
                                            Kocaeli'ye bağlıysa da, İstanbul iline daha yakın olduğu için, bu ille hem
                                            ticari
                                            hem de sosyal ilişkileri gelişmiştir. Uzun yıllar il olması için mücadele
                                            edilmiş
                                            olsa da hali hazırda Kocaeli Büyükşehir Belediyesi sınırları içindedir. İstanbul
                                            Büyükşehir Belediyesi, yıllar boyu Gebze'yi kendisine bağlamak istemiş ancak
                                            buna
                                            izin verilmemiştir.
                                            Sürekli yükselen bir nüfus grafiği çizen Gebze, 2008 yılında çıkarılan kanunla
                                            birlikte kendisine bağlı olan Çayırova, Darıca ve Dilovası'nın birer ilçe olması
                                            sonucu nüfusunun bir bölümünü bu yeni ilçelere vermiştir.
                                        </p>

                                        {/* Updated Table with styling to match the image but with original size */}
                                        <div className="overflow-x-auto mt-6">
                                            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
                                                <thead>
                                                <tr className="bg-indigo-500 text-white">
                                                    <th className="py-2 px-4 border-b text-left">
                                                        <div className="flex items-center">
                                                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                            </svg>
                                                            Yıl
                                                        </div>
                                                    </th>
                                                    <th className="py-2 px-4 border-b text-center">
                                                        <div className="flex items-center justify-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                                                            </svg>
                                                            Nüfus
                                                        </div>
                                                    </th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                {[
                                                    { year: "1973", population: "27.000", bg: "bg-indigo-100", text: "text-indigo-700" },
                                                    { year: "1990", population: "159.116", bg: "bg-indigo-100", text: "text-indigo-700" },
                                                    { year: "2000", population: "253.487", bg: "bg-indigo-100", text: "text-indigo-700" },
                                                    { year: "2007", population: "521.291", bg: "bg-red-400", text: "text-white" },
                                                    { year: "2008", population: "288.569", bg: "bg-indigo-100", text: "text-indigo-700" },
                                                ].map((item, idx) => (
                                                    <tr key={idx}>
                                                        <td className="py-2 px-4 border-b font-medium">{item.year}</td>
                                                        <td className="py-2 px-4 border-b">
                                                            <div className={`flex justify-center`}>
                                                                <div className={`${item.bg} rounded-full px-3 py-1 text-center w-24`}>
                                                                    <span className={`font-medium ${item.text}`}>{item.population}</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>

                                            </table>
                                        </div>

                                        <h3 className="text-xl font-semibold mt-6 mb-3">Önemli Kurum ve Kuruluşlar</h3>

                                        <p>
                                            <span className="font-medium">Gebze Organize Sanayi Bölgesi (GOSB)</span>, Gebze
                                            merkezine 7 km mesafede 10.370.000
                                            m'lik planlanmış bir alanda, 1985 yılında Gebze ve civarında çarpık
                                            sanayileşmenin
                                            yol açtığı çevre kirliliğini önlemek, sanayiyi disipline etmek amacıyla, kredi
                                            kullanmadan, tamamen katılımcıların finansmanı ile kurulmuş ve şu an itibariyle
                                            85
                                            firmada yaklaşık 9100 kişi istihdamı ile faaliyet göstermektedir. GOSB'da
                                            bulunan
                                            sanayi yatırımlarının adet olarak %33'ü, yatırım tutarı olarak %65'i yabancı
                                            sermayeli, özellikle de çok uluslu büyük kuruluşlardır. Yurtiçi ve yurtdışı
                                            OSB'lere
                                            model olan GOSB da bugün itibari ile makine, kimya, otomotiv yan sanayi, optik,
                                            elektronik, sınai ve tıbbi gaz, gıda ve ambalaj ve bilişim sektöründe üretim
                                            yapan
                                            firmalar yer almaktadır.
                                        </p>

                                        <p>
                                            Gebze, bilimsel çalışmalar, hizmet iyileştirme ve teknik hizmet eğitimleri
                                            üzerinde de gelişme göstermekte olan kuruluşlara sahiptir. Gebze'de bulunan TSE,
                                            laboratuvar hizmetleri olarak kalibrasyon, deney, tahribatsız muayene
                                            hizmetleri,
                                            ürün ve hizmet yeri belgelendirme dallarında; TSE Uygunluk Belgesi, Kalite
                                            Uygunluk
                                            Belgesi (TSEK), İthal Malların Belgelendirilmesi, Araç Proje Hizmetleri,
                                            Karayolları
                                            Atık Taşıma Belgesi, Hizmet Yeterlilik Belgelendirmesi(HYB), Laboratuar
                                            Yeterlilik
                                            Hizmetleri, Sistem Belgelendirme, TS EN ISO 9000 Kalite Yönetim Sistemi, TS EN
                                            ISO
                                            14000 Çevre Yönetim Sistemi, TS EN ISO 22000 HACCP Yönetim Sistemi, TS 18001
                                            OHSAS
                                            Yönetim Sistemi dallarında belgelendirme hizmetleri sunmaktadır.
                                        </p>

                                        <p>
                                            1985 yılında kurulan <span className="font-medium">TÜSSİDE</span>, kamu ve özel
                                            sektör kurum ve kuruluşlarında
                                            görev yapan yönetici ve çalışanlarına yönelik olarak; liderlik, motivasyon,
                                            etkin
                                            iletişim, takım çalışması, üretim yönetimi, stratejik yönetim, teknoloji
                                            yönetimi,
                                            insan kaynakları ve performans yönetimi, temel kalite kavramları ve kurum
                                            kültürü,
                                            iyileştirme takımları ve teknik gibi konularda hizmet vermektedir.
                                        </p>

                                        <p>
                                            Üniversiteler genel sıralamasında tıp fakültesi olmayan üniversiteler
                                            içerisinde Türkiye'nin en iyi 2. Üniversitesi <span className="font-medium">Gebze Teknik Üniversitesi</span> ilçemiz
                                            sınırları içindeki saygın tek üniversitedir. 1992'de kurulan Gebze Yüksek
                                            Teknoloji
                                            Enstitüsü'nün temelleri ve tecrübe birikimleri üzerine, 22 yıllık mirasa sahip
                                            çıkarak 4 Kasım 2014 tarihindeki Türkiye Büyük Millet Meclisi kararı ile
                                            kurulmuştur. Gebze Teknik Üniversitesi, ARGE ve İnovasyon hedefli altyapısı,
                                            donanımıyla, uluslararası diplomalı akademik kadrosuyla ülkemizin en önemli
                                            bilim
                                            üssü olma yolunda hızla ilerlemektedir. Gebze Teknik Üniversitesi Türkiye
                                            üniversiteler genel sıralamasında Türkiye'nin en iyi 5., tıp fakültesi olmayan
                                            üniversiteler içerisinde 2. ve 6000 civarı öğrencisi olan üniversiteler içinde
                                            Türkiye 1.'si olarak yer alan genç, dinamik ve deneyimli bir üniversitedir.
                                        </p>

                                        <p>
                                            <span className="font-medium">TÜBİTAK Marmara Araştırma Merkezi</span> ise,
                                            Türkiye'nin küresel rekabet gücünün
                                            artırılmasına bilim ve teknolojiyi kullanarak katkıda bulunmaktadır. Bünyesinde,
                                            Bilişim Teknolojileri Enstitüsü, Enerji Enstitüsü, Yer ve Deniz Bilimleri
                                            Enstitüsü,
                                            Malzeme Enstitüsü ve Teknoloji Serbest Bölgesi ve Teknopark İşletmeciliğini
                                            yürüten
                                            MARTEK A.Ş. bulunmaktadır. Endüstriyel kuruluşların, savunma kuruluşlarının,
                                            üniversitelerin ve kamu kuruluşlarının hizmetindedir.
                                        </p>
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