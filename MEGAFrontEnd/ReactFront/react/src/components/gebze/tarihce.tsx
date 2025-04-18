import React from 'react';
import ImageSlider from "../Sliders/SliderTest.tsx";

const TarihcePage: React.FC = () => {
    const slides = [
        {
            image: "/images/gebze/tarihce/slide1.jpg",

        },
        {
            image: "/images/gebze/tarihce/slide4.jpg",

        }
    ];


    return (
        <div className="main-body">
            <div className="page-wrapper">
                <div className="d-flex">
                    <div className="col-lg ms-auto">
                        <div className="card max-w-4xl mx-auto top-2">
                            <div className="card-block p-4 md:p-6">
                                {/* Enhanced Image slider with Tailwind */}
                                <div className="relative w-full overflow-hidden rounded-lg shadow-xl">
                                    <h1 className="text-2xl font-bold mb-4">Bugünkü Gebze</h1>
                                    <ImageSlider slides={slides}/>
                                </div>
                                <br/>
                                <h3><b>TARİHÇE</b></h3><br/>
                                <div style={{textAlign: 'justify'}}>

                                    <p>
                                        Gebze'nin de içinde bulunduğu, eski Yunanlılar ve Romalılar tarafından Bitinya
                                        (Bithynie) olarak bilinen coğrafi bölgenin bilinen en eski tarihi M.Ö. XII.
                                        yüzyıla kadar uzanır. Bölge, özellikle Kocaeli Yarımadası, coğrafi konumunun
                                        stratejik önemi nedeniyle tarihin hemen her döneminde pek çok ulusa ev sahipliği
                                        yapmıştır. Asya ile Avrupa kıtaları arasındaki önemli geçiş yolu olan Kocaeli
                                        Yarımadası, farklı medeniyetlerin izlerini bıraktığı bir bölge olmuştur.
                                        <br/><br/>İlk bilinen ulus göçü M.Ö. XII. yüzyılın başlarına dayanır. Bu göç,
                                        Yunan kökenli Frikler tarafından gerçekleştirilmiştir. Boğaz (Bosforos) yoluyla
                                        Anadolu'ya inen Frikler, Trakya'dan İzmit dolaylarına kadar göç etmeye devam
                                        etmişlerdir. Ancak, bu dönemde eski Gebze'nin yeri hakkında kesin bir bilgi
                                        bulunmamaktadır. Antik çağda Gebze'nin yerinin nerede olduğu net olarak
                                        bilinmemektedir.
                                        <br/><br/>Bugünkü Gebze'nin bulunduğu bölgede, M.Ö. 281-246 yılları arasında
                                        Kral I. Nicomedes'in egemenliğindeki Bitinya Krallığı döneminde Dakibyza ve
                                        Libyssa adında yerleşim yerleri vardır. Bu dönemde eski Gebze'nin yerine dair
                                        ortaya çıkan bilgiler bu yerleşimlere aittir. Daha eski döneme ait bilgiler ise
                                        çelişkilidir.
                                        <br/><br/>Libyssa, ünlü Kartacalı komutan Hannibal'ın yaşamış olduğu yerdir.
                                        Zama savaşındaki yenilgisinin ardından, Hannibal, ülkesinde itibar görmemiş ve
                                        Bitinya Krallığı'na sığınmıştır. Bitinya Kralları I. ve II. Prusias'ın savaş
                                        danışmanlıklarını yapmıştır. II. Prusias'ın ihanetinin ardından Hannibal,
                                        düşmanın eline geçmemek için intihar etmiş ve Libyssa'ya gömülmüştür. Bu yüzden,
                                        eski Gebze'nin yerinin araştırılması, tarihçiler ve araştırmacılar için
                                        önemlidir. Hannibal'ın burayı seçmesinin çeşitli sebepleri vardır. Bu sebepler
                                        arasında izlenme kuşkusu, Nicomedia'nın başkent olması nedeniyle tanınma
                                        ihtimalinin fazla olması ve yönetime güvenmemesi yer alır. Hannibal, güvenli bir
                                        yer olarak denizle bağlantılı ve kaçışı kolay olan Libyssa'yı tercih etmiştir.
                                        Libyssa, denize ve kara yoluna hâkim bir tepe üzerindeydi ve körfezin en dar
                                        noktasında bulunuyordu.
                                        <br/><br/>Gebze, 1330 yılında Osmanlılarla Bizans arasında yapılan savaşın
                                        ardından Osmanlı idaresine katılmıştır. Bugünkü Gebze'nin kurucusu Orhan
                                        Gazi'dir. Orhan Gazi, Gebze'de kendi adına cami yaptırmış ve bölgenin imarı için
                                        büyük çaba göstermiştir. Ayrıca, bölgedeki vakıfları desteklemiş ve işletmeler
                                        kurmuştur. Gebze, Osmanlı İmparatorluğu döneminde zaman zaman İstanbul'a, daha
                                        çok ise Kocaeli'ye bağlı bir kaza olarak önemli bir yer olmuştur.
                                        <br/><br/>I. Dünya Savaşı'nda Osmanlı İmparatorluğu'nun yenilmesinin ardından,
                                        Gebze de düşman kuvvetleri tarafından işgal edilmiştir. 1920 yılında İngilizler
                                        bölgeyi işgal etmiş, 1921 yılının başlarında ise Yunanlılar da bölgeye
                                        gelmiştir. Ancak, Anadolu'da yenilgiye uğrayan Yunan kuvvetleri, geri
                                        çekilmişlerdir. Bu dönemde Gebze, Anadolu'nun dikkat çeken yerlerinden biri
                                        olmuştur.
                                        Cumhuriyet'in ilanına kadar Gebze, zaman zaman İstanbul'a, zaman zaman da
                                        Kocaeli'ye bağlı bir kaza olmuştur. Cumhuriyet'in ilanından sonra, Gebze İzmit
                                        iline bağlanmıştır.
                                        <br/><br/><b>Libyssa'dan Gebze'ye</b><br/>
                                        Gebze adı, eski yerleşimlerin isimlerinden türemiştir. Birçok araştırmacı, Gebze
                                        isminin eski Libyssa ve Dakibyza isimlerine dayandığını öne sürmektedir. Roma ve
                                        Bizans dönemlerinde bu isimler kullanılmıştır. Gebze ismi, Roma ve Bizans
                                        dönemindeki Libyssa ve Dakibyza isimleriyle benzerlik göstermektedir. Bazı
                                        araştırmacılar ise "Gebze"nin zaman içinde halk diline "Gelbize" olarak dönüşen
                                        bir isim olduğunu iddia etmektedir. Evliya Çelebi, Seyahatnamesi'nde Gebze'nin
                                        "Gelbize"den türediğini belirtmiştir.
                                        <br/><br/><b>Yöresel Gelenekler ve Yemekler</b><br/>
                                        Düğün: Gebze'de düğünler, köylerde ateş yakılıp yemekler pişirilerek yapılır.
                                        Düğün yemekleri arasında düğün çorbası, etli yemek, pilav ve zerde tatlısı
                                        bulunur. Düğünler Cuma günü başlar ve gelin hamamı yapılır. Düğünlerde genç
                                        kızlar şalvar, yeldirme ve bürme giyerler. Gelin başında ekmek kırılır ve bir
                                        parçası geline yedirilir. Düğünlerde nişanlılar, her düğünde takı takar.
                                        Cenaze: Cenaze, hoca tarafından yıkandıktan sonra üzerine çarşaf örtülür. Erkek
                                        cenazesi için çarşafın üstüne bıçak ve sabun, kadın cenazesi için ise makas ve
                                        sabun konulur. Cenaze, başı kıbleye gelecek şekilde yatırılır.
                                        Bayramlar: Bayramlar, camilerde kutlanır ve köylerde pilav pişirilir.
                                        Bayramlaşma camilerde başlar ve köy halkı birbirini ziyaret eder.
                                        Hıdırellez: Hıdırellez, 5-6 Mayıs tarihlerinde kutlanır. Genç kızlar, küplere
                                        yüzük ve bilezik gibi eşyalarını koyarak onları gül diplerine gömerler. Bu
                                        dönemde, dilekler tutulur ve inançlar yaşatılır.
                                        Yöresel Yemekler: Çarşır Mancarı, Kazayağı Mancarı, Ebegümeci Mancarı, Efelik
                                        Mancarı, Mantı, Yamayuka Böreği, Tava Tutuşturması, Bulgurlu Börek, Kabak
                                        Tatlısı gibi yöresel yemekler bulunur.
                                        <br/><br/><b>Giysiler</b><br/>
                                        Gebze'nin dağ köylerinde, halk genellikle kendi el örmesi elbiselerini giyer.
                                        Kadınlar, şalvar, yelek ve hırka giyer, başlarına işlemeli yazmalar takarlar ve
                                        boyunlarına gerdanlıklar takarlar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TarihcePage;