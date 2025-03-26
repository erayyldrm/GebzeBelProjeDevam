import React from "react";

const   Hasangüler: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            {/* Pre-loader */}
            <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            </div>

            {/* Main Content */}
            <div className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl w-full relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <img
                        src="/images/kurumsal/mudurlukler/avatar-13.jpg"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">Kültür İşleri Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" /> Hasan GÜLER
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" />  kultur@gebze.bel.tr
                        </p>
                        <div className="mt-4">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                        </div>
                    </div>
                </div>
                <hr className="border-t-2 border-blue-500 my-4" />


                <a href="#bolum1" className="text-blue-600 hover:underline mx-2 text-left">YÖNETMELİK</a>
                <span className="text-gray-500">|</span>
                <a href="#bolum2" className="text-blue-600 hover:underline mx-2 text-left">BİYOGRAFİ</a>

                {/* Sections */}
                <section id="bolum1" className="p-4 bg-gray-50 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-left"></h3>
                    <p className="text-gray-700 text-left">BİRİNCİ BÖLÜM
                        Amaç, Kapsam, Hukuki Dayanak ve Tanımlar
                        <br/>
                        Amaç
                        <br/>
                        MADDE 1: (1) Bu yönetmeliğin amacı Kültür İşleri Müdürlüğü'nün görev alanını, sorumluluk ve yetkilerini, görevlerin yerine getirilişi ve yetkilerin kullanımında başvurulacak yöntemleri belirlemektir.
                        <br/>
                        <br/>
                        <br/>
                        Kapsam
                        <br/>
                        MADDE 2: (1) Bu yönetmelik, Gebze Belediye Başkanlığı Kültür İşleri Müdürlüğünün kuruluş, görev ve esasları ile Belediyemiz bünyesinde görev yapan personelin özlük, sicil, maaş ve diğer hak ve yükümlülükleri ile ilgili işlemlerin yürütülmesindeki, çalışma usul ve esaslarını kapsar.
                        <br/>
                        <br/>
                        <br/>
                        Hukuki dayanak
                        <br/>
                        MADDE 3: (1) Kültür İşleri Müdürlüğü, 657 sayılı Devlet Memurları Kanunu, 4857 sayılı İş Kanunu, 5393 sayılı Belediye kanunu ve diğer ilgili mevzuatın verdiği yetkilerle hizmetlerini yürütmektedir.
                        <br/>
                        <br/>
                        <br/>
                        Tanımlar
                        <br/>
                        MADDE 4 : (1) Bu yönetmeliğin uygulanmasında;
                        <br/>
                        a.	Belediye			: Gebze Belediye Başkanlığını,
                        <br/>
                        b.	Başkan			: Gebze Belediye Başkanını,
                        <br/>
                        c.	Meclis			: Gebze Belediye Meclisini,
                        <br/><br/>
                        d.	Başkan Yardımcısı	:Belediye Başkanı tarafından konuyla ilgili olarak görevlendirilen Belediye Başkan Yardımcısını

                        e.	Birim		 	: Kültür İşleri Müdürlüğünü,
                        <br/>
                        f.	Müdür			: Kültür İşleri Müdürünü,
                        <br/>
                        g.	Personel		 	:Kültür İşleri Müdürlüğü bünyesinde görev yapan tüm personeli
                        <br/>
                        h.	Şef			: Kültür İşleri Müdürlüğünde Şefi,
                        <br/>
                        i.	Uzman			: Kültür İşleri Müdürlüğünde uzman Memuru ifade eder.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        İKİNCİ BÖLÜM
                        <br/>
                        Kuruluş, Teşkilat ve Bağlılık
                        <br/>
                        Kuruluş
                        <br/>
                        MADDE 5 : (1) Kültür ve Sosyal İşler Müdürlüğü 02.08.2010 tarih ve 2010/160 sayılı Gebze Belediye Meclis kararı ile Belediye ve bağlı kuruluşlar ile Mahalli İdare Birlikleri Norm Kadro İlke ve Standartlarına Dair Yönetmelik hükümlerine göre kurulmuştur. 04.06.2024 tarih ve 2024/106 sayılı Gebze Belediye Meclis kararı ile Kültür İşleri Müdürlüğü adını almıştır.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Teşkilat
                        <br/>
                        MADDE 6 : (1) Kültür İşleri Müdürlüğü İdari Teşkilatı Müdür, Büro İşleri Birimi, Kültürel Etkinlikler Birimi, Kütüphane Birimi, Müze Şefliği, Evlendirme Memurluğu ve Dış İlişkiler Biriminde görevli personellerden (işçi, memur, sözleşmeli memur, belediye iktisadi teşebbüsü statüsündeki şirket bünyesinde çalışan personellerden) oluşur.
                        <br/>
                        (2) Müdür, tüm birimlerden, merkez ve personel bakımından tam yetkili ve sorumludur.
                        <br/>
                        <br/>
                        <br/>
                        Bağlılık
                        <br/>
                        MADDE 7 : (1) Kültür İşleri Müdürlüğü, Belediye Başkanına bağlıdır. Belediye Başkanı, Kültür İşleri Müdürlüğü üzerindeki yetkilerini Belediye Başkan Yardımcısına devredebilir.
                        <br/>
                        (2) Belediye Başkanı organizasyon yapısını re’ sen değiştirmeye yetkilidir.
                        <br/>
                        (3) Kültür İşleri Müdürü hizmet gereklerine uygun olarak birimlerin yapısı, çalıştırılacak personelin dağılımı ve yapılacak işlerle ilgili düzenlemeleri ve işlemleri mevzuat çerçevesinde yapar.
                        <br/>
                        <br/>
                        <br/>
                        ÜÇÜNCÜ BÖLÜM
                        <br/>
                        Personelin Nitelikleri, Görev, Yetki ve Sorumlulukları
                        <br/>
                        Personelin Unvan ve Nitelikleri
                        <br/>
                        MADDE 8:
                        <br/>
                        1.	Kültür İşleri Müdürü: 657 Sayılı Kanunun atamaya ilişkin maddelerinde öngörülen ilkeler ve “Mahalli İdareler Personelinin Görevde Yükselme ve Unvan Değişikliği Esaslarına Dair Yönetmelik” hükümleri doğrultusunda atanır.
                        <br/>
                        2.	Memurlar: KPSS sınavı ile 657 Sayılı Kanunun atamaya ilişkin maddelerinde öngörülen ilkeler veya mevzuat doğrultusunda Genel İdare Hizmetleri sınıfına dâhil personel arasından en az lise veya dengi veya dengi meslek lisesi mezunu olanlardan atanır.
                        <br/>
                        3.	Sözleşmeli Personel: 657 Sayılı Devlet Memurları Kanununun 4/b maddesi ile 5393 sayılı yasanın 49'uncu maddesine göre kadro karşılığı gösterilmek ve sözleşme yapılmak suretiyle çalıştırılır.
                        <br/>
                        4.	İşçiler: Kamu Kurum ve Kuruluşlarının Daimi Kadrolarına İlk Defa İşçi Olarak Alınacaklar Hakkında Uygulanacak Sınav Yönetmeliği Hükümlerine göre atanır.
                        <br/>
                        5.	Müdürlükte uygun nitelik ve sayıda memur, kadrolu işçi, geçici işçi, sözleşmeli personel, Belediye Şirketi Personeli ve hizmet alımı yoluyla çalıştırılan personel görev yapar.
                        <br/>
                        <br/>
                        <br/>
                        Kültür İşleri Müdürlüğünün Görevleri
                        <br/>
                        MADDE 9 : (1) Kültür İşleri Müdürlüğünün görevleri aşağıdaki gibidir.
                        <br/>
                        1.	Kent halkının kaynaşmasını, toplumsal moralin yükseltilmesi ve ortak bir kent kültürünün oluşmasını sağlamak. Bu bağlamda;
                        <br/>
                        a.	Konferanslar
                        <br/>
                        b.	Paneller
                        <br/>
                        c.	Açık oturumlar
                        <br/>
                        d.	Seminerler
                        <br/>
                        e.	Kitap fuarları
                        <br/>
                        f.	Multi vizyon ve dia gösterileri
                        <br/>
                        g.	Çeşitli konser ve gösteriler
                        <br/>
                        h.	Çeşitli kampanya ve törenler düzenlemek. Söz konusu organizasyonlara katılacak kişiler için gerektiğinde ulaşım, konaklama ve yemek giderlerini karşılamak,
                        <br/>
                        2.	Halkın kentlilik bilincini arttırmaya yönelik faaliyetlerde bulunmak,
                        <br/>
                        3.	İlçede kurulmuş vakıf ve derneklerle müşterek çalışmalar yapmak, ayni ve nakdi yardımlarda bulunmak,
                        <br/>
                        4.	Diğer kurum ve kuruluşlarla aynı amaçlı programlar yapmak,
                        <br/>
                        5.	İlçenin tarihi kimliğini yaşatmak ve turizme katkı amacıyla bilgi, belge dokümantasyon oluşturmak ve yayınlamak,
                        <br/>
                        6.	Müdürlük faaliyetlerine yönelik duyuru amaçlı bildiri, afiş, davetiye ve pankart tasarımı yaparak dağıtılmasını sağlamak,
                        <br/>
                        7.	Özel gün ve haftalarda veya üst yönetimin talebi üzerine beceri alanlarında ödüllü yarışma ve turnuvalar düzenlemek,
                        <br/>
                        8.	Faaliyet alanıyla ilgili gerekli dokümanlar ve kültürel yayınların satın alınması veya bastırılması yoluyla teminini, gerektiğinde dağıtımını yapmak,
                        <br/>
                        9.	Kültür Merkezleri için gerekli hazırlıkları yapmak.
                        <br/>
                        10.	Belediye Başkanlığınca kendilerine verilen yetkiye istinaden birbirleri ile evlenmek isteyen kadın ve erkeğin evlenmeye dair müracaatlarını kabul etmek, nikâh akdini gerçekleştirmek.
                        <br/>
                        11.	Bütün vatandaşların bilgi edinmek, kendilerini yetiştirmek, araştırmalarına kaynak ve belge sağlamak için müdürlüğe bağlı tüm kütüphanelerde bulunan kitap, dergi, gazete, nadir eser, belge gibi tüm matbu ve el yapımı yazılı ve görsel materyal ile müzelerdeki tüm tarihi ve sanatsal eserlerden faydalanmalarını sağlamak, yeni kütüphaneler açmak, tarihi, kültürel ve sanatsal değeri olan yazılı, görsel malzemeleri satın alma, bağış, mübadele vb. yollarla temin ederek kullanıcıların hizmetine sunmak.
                        <br/>
                        12.	Belediyenin kültürel faaliyetleri ile alakalı her türlü kayıt numunelerini arşivlemek,
                        <br/>
                        13.	Müdürlüğü ilgilendiren tüm resmi yazışmaları yürütmek,
                        <br/>
                        14.	Evrakların takibi yapılması ve raporlar tutulmasını sağlamak,
                        <br/>
                        15.	Müdürlüğe ait ihale ve ayniyat işlemlerini yapmak,
                        <br/>
                        16.	Müdürlük yıllık bütçesini hazırlamak,
                        <br/>
                        17.	Stratejik plana, yıllık performans programına, yatırım programına ve müdürlük bütçesine uygun olarak çalışmalarını yürütmek,
                        <br/>
                        18.	İç Kontrol Eylem Planındaki görev ve sorumlulukların yerine getirilmesi için gerekli çalışmaları yapmak,
                        <br/>
                        19.	Kalite yönetim sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        20.	Başta Avrupa Birliği olmak üzere Belediyemiz ile uluslararası kurum, kuruluş ve örgütler arasında ilişkiler kurulmasını, mevcut ilişkilerin geliştirilmesini sağlamak; bu kapsamda her türlü iş, işlem, çalışma ve etkinlikler düzenlemek. Temsil, katılım, eşgüdüm ve işbirliği sağlamak.
                        <br/>
                        21.	Belediyemizin dış ülkelerle, ülkemizin dış ülke temsilcilikleri ve dış ülkelerin ülkemizdeki temsilcilikleri ile gerekli diyalog ve işbirliğini sağlamak.
                        <br/>
                        22.	Belediyemizin üyesi bulunduğu uluslararası teşekküller bünyesindeki etkinliklerimizi yürütmek.
                        <br/>
                        23.	Uluslararası anlaşmalarla kurulmuş olan kurullarda Belediyemizi temsil olanağı kılan ilişkiler kurmak.
                        <br/>
                        24.	İlçemiz ile diğer dünya kentleri arasında Kardeş Kent İlişkisi kurmak.
                        <br/>
                        25.	Yurt içinde diğer resmi kurum ve kuruluşların faaliyetlerinde paydaş olup; bu faaliyetlerin münhasıran ilçemizde yapılmasını temin etmek üzere gerekli girişimi yapmak, eşgüdüm sağlamak.
                        <br/>
                        26.	Belediyemizi, ilçemizi tanıtmak amacıyla uluslararası dilde materyaller hazırlayıp dağıtımını sağlamak.
                        <br/>
                        27.	Belediyemize gelen ya da Belediyemizce gönderilecek yabancı dildeki belgelerin çevirisini yapmak- yaptırmak.
                        <br/>
                        28.	Belediyecilik faaliyetleri ile ilgili uluslararası kurum ve kuruluşların örnek, model proje, program ve faaliyetlerini izlemek, ilgili birimlerimizi bilgilendirmek.
                        <br/>
                        29.	Dış basında İlçemizi ve Belediyemizi ilgilendiren konuları incelemek ve ilgili birimleri bilgilendirmek.
                        <br/>
                        30.	Uluslararası hibe kaynakları ile finanse edilebilecek konuları incelemek, tekil ya da ortaklı olarak hazırlanabilecek projeleri hazırlamak ya da ilgi birimlerle koordinasyon sağlayıp hazırlatmak.
                        <br/>
                        31.	Belediyemiz birimlerince hazırlanacak yabancı finans kaynaklı projelerin koordinasyonunu sağlamak.
                        <br/>
                        32.	MARKA ve KOSGEB kaynaklarıyla finanse edilebilecek projelerin koordinasyonunu sağlamak.
                        <br/>
                        33.	Belediyemize davet ile gelen yabancı konukları karşılamak, ağırlamak ve ilgili birim ve kuruluşlarla yapacakları görüşmeler için rehberlik hizmeti sunmak.
                        <br/>
                        34.	Belediyemiz adına yurtdışı inceleme programı için görevlendirilen yönetici ve diğer personelin yurtdışı çıkış işlemlerini takip etmek.
                        <br/>
                        35.	Belediyemizin üyesi bulunduğu yurt içi mahalli idare birlikleri yurtdışı teşekküller ve kardeş kent ilişkisi ile ilgili iş ve işlemleri yürütmek.
                        <br/>
                        <br/>
                        <br/>
                        Kültür İşleri Müdürünün Görev, Yetki ve Sorumlulukları
                        <br/>
                        MADDE 10: Kültür İşleri Müdürü
                        <br/>
                        a)Kültür İşleri Müdürünün Görevleri
                        <br/>
                        1.	Belediyenin stratejik planının ve stratejik planda yer alan performans hedef ve göstergelerinin hazırlanmasına katkıda bulunmak.
                        <br/>
                        2.	Müdürlüğün çalışmalarının stratejik plan ve performans programındaki hedeflerine uygun olarak gerçekleştirilmesini sağlamak.
                        <br/>
                        3.	Müdürlüğün yıllık faaliyet raporunun hazırlanmasını sağlamak.
                        <br/>
                        4.	Müdürlüğün yıllık bütçe tekliflerini ve varsa yıllık ücret tarifelerini hazırlamak.
                        <br/>
                        5.	Müdürlüğün çalışma programlarını (günlük, haftalık, aylık ve yıllık) hazırlamak ve sürekli güncel halde bulundurmak.
                        <br/>
                        6.	Disiplin amiri sıfatıyla müdürlük personelinin disiplinle ilgili işlemlerinin yapılmasını sağlamak.
                        <br/>
                        7.	Müdürlük personelinin çalışma performanslarını değerlendirmek.
                        <br/>
                        8.	Belediyenin onaylanan eğitim ve kültür politikaları çerçevesinde yönetimce belirlenen uygulamaların fiilen yürütülmesini sağlamak.
                        <br/>
                        9.	Gebze halkına yönelik olarak düzenlenecek aktivitelerin organize edilmesini sağlamak.
                        <br/>
                        10.	Gebze halkı için aktif kültürel sanatsal ve benzeri faaliyetlerin düzenlenmesini sağlamak.
                        <br/>
                        11.	Birimine bağlı kültür merkezlerinin kiralanarak başkasına kullandırılması ile ilgili işlemlerini takip etmek.
                        <br/>
                        12.	Birim ile diğer birimler arasındaki koordinasyonu sağlamak.
                        <br/>
                        13.	Çeşitli kültür faaliyetlerinin gerçekleştirilebilmesi için kullanılan her türlü elektronik elektrik ve mekanik aksamlı araç ve gerecin binaların periyodik koruyucu bakımlarının ve gereğinde onarımlarının faaliyetleri aksatmayacak biçimde programlanıp ilgili müdürlükler ile iş birliği halinde uygulanmasını sağlamak.
                        <br/>
                        14.	Kültür İşleri Müdürlüğüne bağlı birimlere ait taşınır taşınmaz varlıkların tespitini yapmak, güvence altına almak ve uygulamayı sürekli kontrol etmek.
                        <br/>
                        15.	Kendi faaliyet alanındaki resmi ve özel kuruluşlar, şahıslar ve sivil toplum kuruluşları ile iş birliği içerisinde ilçe halkının eğitimine katkıda bulunmak.
                        <br/>
                        16.	Periyodik olarak düzenleyeceği departman yöneticileri toplantılarıyla etkili bir haberleşme ve koordinasyonun oluşmasını sağlamak.
                        <br/>
                        17.	İlçenin kültürel zenginliklerini arttırıcı çalışmalar ve konferans, panel, sempozyum vb. etkinlikler hazırlamak.
                        <br/>
                        18.	Düzenlenecek organizasyon, kurs, eğitim programlarında dışarıdan görev alacak kişilerle görüşmek ve olumlu bulunanlarla anlaşarak programın gerçekleştirilmesini sağlamak.
                        <br/>
                        19.	Kültür İşleri Müdürlüğüne bağlı birim sorumluları ve çalışanları ile periyodik toplantı yapma sevk ve idare etmek.
                        <br/>
                        20.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        <br/>
                        <br/>
                        I.	Organizasyondaki Yeri:
                        <br/>
                        a.	Direkt olarak Başkan Yardımcısı’na bağlıdır.
                        <br/>
                        b.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Başkan Yardımcısı'na karşı sorumludur.
                        <br/>
                        c.	Büro İşleri Birimi, Kültürel Etkinlikler Birimi, Kütüphane Birimi, Müze Şefliği, Evlendirme Memurluğu Birimi, Dış İlişkiler Birimi ve alt kadrolar kendisine bağlı birimlerdir.
                        <br/>
                        <br/>
                        <br/>
                        II.	Bu Kadro İçin Aranan Özellikler:
                        <br/>
                        a.	Üniversite mezunu olmak,
                        <br/>
                        b.	Yeterli bilgisayar bilgisine sahip olmak,
                        <br/>
                        c.	Yöneticilik bilgi ve tecrübesine sahip olmak,
                        <br/>
                        d.	Belediye mevzuatına hâkim olmak,
                        <br/>
                        e.	Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        b) Kültür İşleri Müdürünün Yetkileri:
                        <br/>
                        1.	Müdürlüğü;
                        <br/>
                        a.	Başkanlık makamına, belediyenin diğer müdürlüklerine, müdürlüğün alt birimlerine ve personeline karşı doğrudan;
                        <br/>
                        b.	Belediyenin karar organlarına, kamu kurum ve kuruluşlarına, meslek kuruluşlarına ve gerektiğinde gerçek ve tüzel kişilere karşı ise başkanlık makamının izni ve onayıyla, şahsen ya da evrak üzerindeki imzasıyla temsil etmeye,
                        <br/>
                        2.	Personeli, ekipmanı ve müdürlüğün sahip olduğu bilgi ve kaynakları sevk ve idare etmeye,
                        <br/>
                        3.	Bütçe ödeneklerini kullanmaya ve harcama talimatı vermeye,
                        <br/>
                        4.	Gerçekleştirme görevlilerini belirlemeye ve görevlendirmeye,
                        <br/>
                        5.	İhalelerde ihale yetkilisi tarafından onaylanan ihale kararına istinaden sözleşmeyi imzalamaya,
                        <br/>
                        6.	Alt birimlerindeki personellere yetki devretmeye ve gerektiğinde devrettiği yetkiyi geri almaya,
                        <br/>
                        7.	Başknlık makamına; yeni alt birimler kurma, alt birimleri ayırma ya da birleştirme, alt birimlerin adlarını ve fonksiyonlarını değiştirme konusunu teklif etmeye,
                        <br/>
                        8.	İdari ve teknik konularda talimatlar vermeye, araştırma ve inceleme yapmaya ve yaptırmaya,
                        <br/>
                        9.	Performans ölçümü ve istatistiki çalışma yapmaya ve yaptırmaya,
                        <br/>
                        10.	İş ve işlemleri kontrol etmeye ve denetlemeye, iş ve işlemlerle ilgili her türlü bilgi ve belgeyi istemeye,
                        <br/>
                        11.	Çalışma grupları oluşturmaya, görevlendirmeler yapmaya,
                        <br/>
                        12.	Taşınır kayıt ve kontrol yetkililerini belirlemeye ve görevlendirmeye,
                        <br/>
                        13.	Görevlerini yerine getirmeyen ve talimatlara uymayan personel hakkında disiplin sürecini başlatmaya,
                        <br/>
                        14.	Toplantı düzenlemeye ve toplantıyı yönetmeye,
                        <br/>
                        15.	Bütçe Kanununda belirtilen sınırlarda olmak kaydıyla; gerekli durumlarda üst yönetici onayıyla personele fazla mesai yaptırmaya,
                        <br/>
                        16.	Gerekli gördüğü konularda Hukuk İşleri Birimi’nden başkan yardımcısı ve başkan onayıyla görüş sormaya,
                        <br/>
                        17.	İşlemlerde usulsüzlük ve yolsuzluğu önlemek için yasal her türlü tedbiri almaya yetkilidir.
                        <br/>
                        18.	Yasal ve diğer şartlara bağlı olarak müdürlüğün görev alanına giren çalışmalarda hizmeti durdurmaya yetkilidir.
                        <br/>
                        <br/>
                        <br/>
                        c) Kültür İşleri Müdürünün Sorumlulukları:
                        <br/>
                        657 sayılı Devlet Memurları Kanunu ve diğer Belediye Mevzuatının kendisine yüklediği görev ve yetkilerin yerinde ve zamanında kullanılmasından sorumludur.
                        <br/>
                        <br/>
                        <br/>
                        MÜDÜRLÜĞE BAĞLI BİRİMLERİN GÖREVLERİ
                        <br/>
                        <br/>
                        <br/>
                        MADDE 11: Büro İşleri Birimi
                        <br/>
                        1-) Büro İşleri Birim Sorumlusu
                        <br/>
                        I.	Görev ve Sorumlulukları:
                        <br/>
                        a.	Birime ait Kurum içi ve Kurum dışı yazışmaları takip etmek ve yürütmek.
                        <br/>
                        b.	Birime ait ödeme ve harcamalara ilişkin işlemleri yapmak.
                        <br/>
                        c.	Müdürlük gelir-gider bütçesi ile stratejik plan, performans programı, faaliyet raporları ve İSO sistemi ile ilgili iş ve işlemleri yürütmek.
                        <br/>
                        d.	İhale mevzuatıyla ilgili iş ve işlemleri yapmak.
                        <br/>
                        e.	Personelin özlük işlerini takip etmek ve yürütmek.
                        <br/>
                        f.	Sekretaryadaki sekreterlerin koordinasyonunu sağlamak.
                        <br/>
                        g.	Müdürlük arşivinin oluşturulması ve muhafazasını temin etmek.
                        <br/>
                        h.	Müdürlüğüne ait taşınırlarla ilgili olarak taşınır kayıt ve kontrol işlemlerinin yürütülmesini sağlamak.
                        <br/>
                        i.	Kardeş şehirler ve uluslararası organizasyonlarla ilgili her türlü yazışma, raporlama işlemlerini ve organizasyonlarla ilgili resmi yazışmaları yazışmaları yapmak.
                        <br/>
                        j.	Belediyemizi ziyaret eden heyetlerin programlarını organize etmek ve gerekirse çeviri hizmeti sağlamak.
                        <br/>
                        k.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        <br/>
                        <br/>
                        II.	Organizasyondaki Yeri:
                        <br/>
                        a.	Direkt olarak Müdür'e bağlıdır.
                        <br/>
                        b.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Müdür'e karşı sorumludur.
                        <br/>
                        c.	Üstlerinden aldığı görevleri alt birimlere dağıtarak iş ve işlemlerin  yapılmasını sağlamak.
                        <br/>
                        <br/>
                        <br/>
                        III.	Bu Kadro İçin Aranan Özellikler:
                        <br/>
                        a.	En az Lise mezunu olmak.
                        <br/>
                        b.	Belediye mevzuatına hakim olmak.
                        <br/>
                        c.	Yeterli bilgisayar bilgisine sahip olmak
                        <br/>
                        d.	Kalite anlayışına sahip olmak
                        <br/>
                        <br/>
                        <br/>
                        2-) Büro Personeli
                        <br/>
                        I.	Görev ve Sorumlulukları:
                        <br/>
                        a.	Birime ait kurum içi ve kurum dışı yazışmaları takip etmek ve yürütmek.
                        <br/>
                        b.	Birime ait ödeme ve harcamalara ilişkin işlemleri yapmak.
                        <br/>
                        c.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        <br/>
                        <br/>
                        II.	Organizasyondaki Yeri:
                        <br/>
                        a.	Direkt olarak Şefe bağlıdır.
                        <br/>
                        b.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Müdür'e karşı sorumludur.
                        <br/>
                        <br/>
                        <br/>
                        III.	Bu Kadro İçin Aranan Özellikler:
                        <br/>
                        a.	En az Lise mezunu olmak.
                        <br/>
                        b.	Yeterli bilgisayar bilgisine sahip olmak.
                        <br/>
                        c.	Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        MADDE 12: Kültürel Etkinlikler Birim Sorumlusu
                        <br/>
                        I.	Görev ve Sorumlulukları:
                        <br/>
                        a.	İlçenin Kültürel ve sanatsal gelişimine katkıda bulunmak üzere, kültürel, sanatsal alanlarda çeşitli organizasyonlar ile konferans, seminer, panel, konser, Türk Müziği, halk müziği günleri ve koro çalışmaları vb. organizasyonların düzenlenmesini planlamak ve gerekli çalışmaları yapmak ve takip etmek.
                        <br/>
                        b.	Birime bağlı bulunan Kültür ve Sanat Merkezlerinin kiralanarak başkalarına kullandırılması ile ilgili işlemleri takip etmek.
                        <br/>
                        c.	Salon rezervasyon işlemlerini takip etmek ve yürütmek
                        <br/>
                        d.	Müdürlüğün faaliyet alanındaki resmi ve özel kuruluşlar, şahıslar ve sivil toplum kuruluşları ile işbirliği içerisinde ilçe halkının kültürel eğitimine katkıda bulunmak.
                        <br/>
                        e.	Gebze ilçesinin tarihi, sosyal, kültürel yapısı ile ilgili olarak ilgili birimlerle işbirliği içerisinde yayınlar hazırlamak ve yine ilgili birimlerle işbirliği içerisinde basılmasını sağlamak.
                        <br/>
                        f.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        g.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        <br/>
                        <br/>
                        II.	Organizasyondaki yeri:
                        <br/>
                        a.	Direkt olarak Müdür'e bağlıdır.
                        <br/>
                        b.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Müdür'e karşı sorumludur.
                        <br/>
                        c. Üstlerinden aldığı görevleri alt birimlere dağıtarak iş ve işlemlerin  yapılmasını sağlamak.
                        <br/>
                        <br/>
                        <br/>
                        III.	Bu Kadro için aranan özellikler:
                        <br/>
                        a.	En az lise mezunu olmak.
                        <br/>
                        b.	Belediye mevzuatına hakim olmak.
                        <br/>
                        c.	Yeterli bilgisayar bilgisine sahip olmak.
                        <br/>
                        d.	Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        MADDE 13: İdari İşler Sorumlusu
                        <br/>
                        IV.	I- Görev ve Sorumlulukları:
                        <br/>
                        a.	Müdürlük binası hizmetli ve şoför personellerinden sorumludur.
                        <br/>
                        b.	Müdürlük binası deposunun işleyişinden sorumludur.
                        <br/>
                        c.	Temizlik, aydınlatma, ısınma ve diğer idari işlerin yürütülmesini sağlamak.
                        <br/>
                        d.	Amirinin vereceği diğer görevleri yapmak.
                        <br/>
                        e.	Amirinin verdiği işin yürütümü sebebiyle işyeri araçlarını ehliyetinin yetkisine göre kullanabilir.
                        <br/>
                        V.	II- Organizasyondaki Yeri:
                        <br/>
                        a.	Direkt olarak Müdür’e bağlıdır.
                        <br/>
                        b.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Müdür'e karşı sorumludur.
                        <br/>
                        <br/>
                        <br/>
                        VI.	III- Bu Kadro İçin Aranan Özellikler:
                        <br/>
                        a.	Lise ve dengi meslek lisesi mezunu olmak
                        <br/>
                        b.	Belediye mevzuatına hakim olmak.
                        <br/>
                        c.	Yeterli bilgisayar bilgisine sahip olmak.
                        <br/>
                        d.	Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        MADDE 14: Dış İlişkiler Servisi
                        <br/>
                        1-)Uluslararası Projeler Sorumlusu
                        <br/>
                        I.	Görev ve Sorumlulukları:
                        <br/>
                        a.	Uluslararası Kurum, kuruluş ve örgütlere üyelik ve üyeliklere ayrılmakla ilgili iş ve işlemleri yürütmek.
                        <br/>
                        b.	Belediyemizin üyesi bulunduğu yurt içi mahalli idare birlikleri, yurt dışı teşekküller ile yurt içi ve yurt dışı kardeş şehir ilişkileri ile ilgili işlemleri yürütmek.
                        <br/>
                        c.	Uluslararası kurum, kuruluş ve örgütlerin yararlanılabilir çalışma ve projelerini izlemek, tek taraflı ya da ortak projeler hazırlamak, yürütmek.
                        <br/>
                        d.	Yurt içinde resmi kurum ve kuruluşlar ile sivil toplum örgütlerinin faaliyetlerini izlemek, Belediyemizle bu kurum, kuruluş ve sivil örgütler arasında müşterek proje geliştirip gerçekleştirme imkânlarını araştırmak.
                        <br/>
                        e.	Belediyecilik faaliyetleri ile ilgili yurt içi ve yurt dışında; örnek, model deneyim ve projeleri araştırıp müdürlüğe öneri sunmak.
                        <br/>
                        f.	Belediyemiz birimlerince hazırlanacak ve yürütülecek uluslararası ya da yabancı finans kaynaklı projelere koordinasyon ve danışmanlık hizmeti sağlamak
                        <br/>
                        <br/>
                        <br/>
                        II.	Organizasyondaki Yeri:
                        <br/>
                        a.	Direkt olarak Müdür'e bağlıdır.
                        <br/>
                        b.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Müdür'e karşı sorumludur.
                        <br/>
                        c.	Üstlerinden aldığı görevleri alt birimlere dağıtarak iş ve işlemlerin  yapılmasını sağlamak.
                        <br/>
                        <br/>
                        <br/>
                        III.	Bu Kadro İçin Aranan Özellikler:
                        <br/>
                        a.	En az Lise mezunu olmak.
                        <br/>
                        b.	Belediye mevzuatına hakim olmak.
                        <br/>
                        c.	Yeterli bilgisayar bilgisine sahip olmak.
                        <br/>
                        d.	Toplam kalite anlayışına ve bu konuda tecrübeye sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        2-) Kurumsal İlişkiler İdari Tanıtımlar Sorumlusu
                        <br/>
                        I.	Görev ve Sorumlulukları:
                        <br/>
                        a.	Uluslararası Kurum, kuruluş ve örgütlere üyelik ve üyeliklere ayrılmakla ilgili iş ve işlemleri yürütmek.
                        <br/>
                        b.	Belediyemizin üyesi bulunduğu yurt içi mahalli idare birlikleri, yurt dışı teşekküller ile yurt içi ve yurt dışı kardeş şehir ilişkileri ile ilgili işlemleri yürütmek.
                        <br/>
                        c.	Belediyemizin üyesi bulunduğu yurt içi mahalli idare birlikleri, yurt dışı teşekküller ile yurt içi ve yurt dışı kardeş şehir ilişkileri ile ilgili işlemleri yürütmek.
                        <br/>
                        d.	Yurt içinde resmi kurum ve kuruluşlar ile sivil toplum örgütlerinin faaliyetlerini izlemek, Belediyemizle bu kurum, kuruluş ve sivil örgütler arasında müşterek proje geliştirip gerçekleştirme imkânlarını araştırmak.
                        <br/>
                        e.	Müdürlük tarafından verilen benzer görevleri yapmak
                        <br/>
                        <br/>
                        <br/>
                        II.	Organizasyondaki Yeri:
                        <br/>
                        a.	Direkt müdüre bağlıdır.
                        <br/>
                        b.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten müdürüne karşı sorumludur.
                        <br/>
                        <br/>
                        <br/>
                        III.	Bu Kadro İçin Aranan Özellikler:
                        <br/>
                        a.	Üniversite mezunu olmak.
                        <br/>
                        b.	Yabancı dil bilgisine hâkim olmak
                        <br/>
                        c.	Ulusal / uluslararası kurum ve kuruluşların ilişkilerine hâkim olmak.
                        <br/>
                        d.	Bilgisayar bilgisi yeterli olmak.
                        <br/>
                        e.	Yöneticilik bilgi ve tecrübesine sahip olmak.
                        <br/>
                        f.	Belediye mevzuatına hâkim olmak.
                        <br/>
                        g.	Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        MADDE 15: Kütüphane Birim Sorumlusu
                        <br/>
                        I.	Görev ve Sorumlulukları:
                        <br/>
                        a.	Kütüphaneden faydalanacak öğrencilerin ve diğer okuyucuların ihtiyaç duydukları konularda, bilgi edinmelerini sağlamak üzere ilgili kurum ve kuruluşlardan, kitap, ansiklopedi, dergi vb. süreli ve süresiz yayınların temin edilmesini sağlamak.
                        <br/>
                        b.	Tüm yayınların düzenli olarak, zamanında kütüphaneye gelmesini sağlamak, katalog ve tasnifleme çalışmalarını yürütmek.
                        <br/>
                        c.	Derleme, bağış, devir ve resmi kurumlardan gelen kitap ve diğer yayınların gerekli işlemlerini yürütmek,
                        <br/>
                        d.	Okuyucuların belli bir konuya yönelik çalışmalarında veya kütüphanedeki çalışmaları sırasında karşılaştıkları problemleri kütüphane kaynaklarından yararlanmak suretiyle cevaplamak ya da onlara kaynak göstererek çözüm getirmek,
                        <br/>
                        e.	Okuyucuların aradıkları konularda bulunmayan kitapların diğer kütüphanelerden temini konusunda idareye gerekli bilgiyi vermek.
                        <br/>
                        f.	Kütüphanecilik alanındaki gelişmeleri izleyerek yeni teknolojilerin kütüphaneye girmesi için çalışmalar yapmak.
                        <br/>
                        g.	Teknik ve okuyucu hizmetlerinin standardizasyonunu sağlamak ve denetimini yapmak,
                        <br/>
                        h.	Merkez ve birim kütüphaneleri ile eşgüdüm ve işbirliği içinde çalışmalarını sağlamak ve bu amaçla eğitim programları düzenlemek.
                        <br/>
                        i.	Bu yönetmelik uyarınca görev alanına giren ve kütüphane hizmetlerinin gerektirdiği diğer çalışmaları yapmak.
                        <br/>
                        <br/>
                        <br/>
                        TEKNİK HİZMETLER
                        <br/>
                        Bütün kütüphane materyalinin (kitap, süreli yayın, tez, broşür, görsel-işitsel araç ve gereçler, vb.) seçiminden okuyucuya sunulacak duruma getirilişine kadar geçirdiği işlerin tamamıdır.
                        <br/>
                        <br/>
                        <br/>
                        Teknik hizmetleri oluşturan servisler:
                        <br/>
                        Tedarik Servisi: Eğitim ve öğretimi destekleyecek, araştırmalarda yardımcı olacak kitap ve benzeri koleksiyonu oluşturmak ve geliştirmek için seçmek, satın almak, bağış ve değişim yoluyla temin etmek,
                        <br/>
                        a)	Kataloglama ve Sınıflandırma Servisi: Kütüphaneye sağlanan kitap ve diğer materyali en uygun sisteme göre tasnif etmek, okuyucuların yararlanmasına sunmak,
                        <br/>
                        Okuyucu Hizmetleri
                        <br/>
                        Bilgi kaynaklarından ve kütüphanelerden okuyucuların en verimli şekilde yararlanmalarını sağlayan hizmetlerdir.
                        <br/>
                        <br/>
                        <br/>
                        Okuyucu hizmetlerini oluşturan servisler:
                        <br/>
                        a)	Müracaat Servisi: Kütüphane koleksiyonunun ve kullanımının, kütüphane içinde ve dışında okuyucuya tanıtımını sağlayan servistir. Bu servis, kütüphane materyallerinin kullanımına yardımcı olmak,
                        <br/>
                        b)	Ödünç Verme Servisi: Kütüphane koleksiyonunun, kütüphane içi ve dışı dolaşımını sağlamak-denetlemek, kütüphaneler arası (gerekirse yurt dışından) kaynak alış-verişinde bulunmak ve kütüphane materyali ile ilgili fotokopi işlerini yapmakla görevli servistir.
                        <br/>
                        c)	Görsel-İşitsel Hizmetler Servisi: Eğitimi destekleyecek görsel-işitsel araç ve gereçleri seçmek, üretmek, çoğaltmak, temin etmek, belli bir düzen içinde hizmete sunmak ve bakımını yapmakla görevli servistir.
                        <br/>
                        <br/>
                        <br/>
                        ÖDÜNÇ VERME ESASLARI
                        <br/>
                        1.	İlçe halkı, öğrenci, öğretmen, okuyucular ve belediye personeli üye olmak koşuluyla ödünç verme servisinden yararlanırlar.
                        <br/>
                        2.	Okuyucular 15 gün süreyle 2 kitap ödünç alabilir.
                        <br/>
                        3.	Ödünç alınan materyalin süresi, başka istekli yok ise 1 kez daha uzatılır,
                        <br/>
                        4.	Okuyucular ödünç aldıkları materyali ödünç verme süreleri sonunda iade etmedikçe yeni kitap ve diğer materyali ödünç alamazlar,
                        <br/>
                        5.	Gerektiğinde Kütüphane Servisi, ödünç verme süresi dolmadan okuyuculardan materyalleri geri isteyebilir.
                        <br/>
                        <br/>
                        <br/>
                        ÖDÜNÇ ALANIN YÜKÜMLÜLÜKLERİ
                        <br/>
                        1.	Kütüphaneden herhangi bir materyali ödünç alan kişi, bunları özenle kullanmak ve en geç ödünç verme süresi sonunda geri vermekle yükümlüdür. Bu yükümlülüklerini yerine getirmeyenler hakkında bu Yönetmelik ve ilgili hükümleri uygulanır.
                        <br/>
                        <br/>
                        <br/>
                        ÖDÜNÇ VERİLMEYECEK KİTAP VE DİĞER MATERYALLER
                        <br/>
                        1.	Müracaat Eserleri, (sözlük, ansiklopedi, index vb.)
                        <br/>
                        2.	Süreli Yayınlar,
                        <br/>
                        3.	Tezler,
                        <br/>
                        4.	Atlas, harita ve slaytlar,
                        <br/>
                        5.	Müzik Notaları,
                        <br/>
                        6.	Bağlı kütüphane birimlerinin önerileri üzerine, Kütüphane Servisi tarafından belirlenen ve kütüphane dışına çıkarılmasında sakınca bulunan diğer materyaller,
                        <br/>
                        Okuyucular bu gibi materyallerden sadece kütüphane içinde ve gerektiğinde bir görevlinin nezaretinde yararlanabilir.
                        <br/>
                        <br/>
                        <br/>
                        GÜNÜNDEN İADE EDİLMEYEN KİTAP VE MATERYAL
                        <br/>
                        Ödünç aldığı kitap ve diğer materyali en geç ödünç verme süresi sonunda iade etmeyen ve süre uzatma işlemi yaptırmayan kişiden, başka hiçbir işleme gerek bulunmaksızın, süre sonunu izleyen günden itibaren, hiçbir şekilde başka bir kitap veya materyal ödünç verilmez.
                        <br/>
                        <br/>
                        <br/>
                        YIPRATILAN VE KAYBEDİLEN MATERYALLER
                        <br/>
                        Ödünç alınan materyalin yıpratılması veya kaybedilmesi durumunda:
                        <br/>
                        Yıpratılan veya kaybedilen kütüphane materyali öncelikle piyasadan aynen temin ettirilir,
                        <br/>
                        <br/>
                        <br/>
                        II.	Organizasyondaki Yeri:
                        <br/>
                        a.	Direkt olarak Müdür’e bağlıdır.
                        <br/>
                        b.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Müdür'e karşı sorumludur.
                        <br/>
                        c.	Üstlerinden aldığı görevleri alt birimlere dağıtarak iş ve işlemlerin  yapılmasını sağlamak
                        <br/>
                        <br/>
                        <br/>
                        III.	Bu Kadro İçin Aranan Özellikler:
                        <br/>
                        a.	En az Lise mezunu olmak.
                        <br/>
                        b.	Yeterli bilgisayar bilgisine sahip olmak.
                        <br/>
                        c.	Toplam kalite anlayışına ve bu konuda tecrübeye sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        MADDE 16: Müze Şefliği
                        <br/>
                        I.	Görev ve Sorumlulukları:
                        <br/>
                        1.	İlçe sınırları içerisinde bulunan Kültür varlıklarını tespit etmek, ilmi metotlarla açığa çıkarmak, incelemek, değerlendirmek, korumak, tanıtmak, sürekli ve geçici olarak sergilemek, halkın kültür ve tabiat varlıkları konusundaki eğitimini sağlamak,
                        <br/>
                        2.	İlgili kurum veya kuruluşlarla yürütülecek faaliyetlerde Belediye ve Müdürlük adına temsilci olmak,
                        <br/>
                        3.	İlçe halkı tarafından bağışlanan eserleri kayıt altına almak ve muhafaza etmek,
                        <br/>
                        4.	Mevcut eserlerle, mümkün olduğu ölçüde kronolojik bir sistem içinde ilmi teşhir etmek.
                        <br/>
                        5.	Depolardaki eserler sağlıklı bir şekilde korumak, depolar ilmi çalışmalara imkân verecek şekilde düzenle¬mek.
                        <br/>
                        6.	Kadrosunda bulunan uzman elemanları ile taşınır ve taşınmaz kültür varlıkları üzerinde ilmi araştırmalar yap¬mak, tanıtılması sağlamak.
                        <br/>
                        7.	Müzede ve müze dışında eğitici kurslar, konferanslar, geziler düzenlemek. Çevrenin kültür hayatının geliştiril¬mesine, kültürel ve turistik değerlerimizin halka tanıtılmasına, eski eser sevgisinin uyandırılmasına, eski eser kaçakçılığı, tahrip ve gizli kazılarla yurdun milli değerlerini yok edici faaliyetlerin önlenmesini sağlamak.
                        <br/>
                        8.	2863 sayılı Kanun kapsamına giren korunması gerekli taşınır kültür varlıklarının müzelere kazandırılması için gerekli tedbirler almak.
                        <br/>
                        9.	2863 sayılı Kanun kapsamına giren taşınır ve taşınmaz kültür varlıklarının korunması ve değerlendirilmesi sağ¬lamak.
                        <br/>
                        10.	Müzecilik faaliyetlerini, birim içi ve dışı imkânlardan azami derecede yararlanarak gerçekleştirmek.
                        <br/>
                        11.	Yıllık istatistik bilgilerin sağlıklı tespitini sağlamak,
                        <br/>
                        12.	Bölüm sorumluları ile birlikte salonları, depoları ve bağlı birimleri incelemek ve kontrol etmek, görülen nok¬sanlıkların giderilmesini sağlamak,
                        <br/>
                        13.	Çevredeki gizli kazılara ve eski eser kaçakçılığına karşı, amirleri ile de işbirliği yaparak, mümkün olan önlemlerin alınmasını ve kontrol edilmesini sağlamak,
                        <br/>
                        14.	Müze bağlı birimlerde hırsızlığa, yangına sabotajlara karşı gerekli önlemleri alır ve aldırılmasını sağlamak.
                        <br/>
                        15.	 Müze ile ilgili Yazışma, evrak kayıt dosyalama ve arşiv işlerinin düzenli yürütülmesini sağlamak,
                        <br/>
                        16.	Taşınmaz kültür varlıklarının korunmasını, tanıtılmasını, yayınlanmasını, kontrolünü sağlar; kazı ve araştırma¬larda heyet üyeliği veya temsilciliği yapmak,
                        <br/>
                        17.	Taşınır kültür varlıklarının müzelere kazandırılması, tasnifi, tescili, envanteri, katalog fişlerinin düzenlenmesi, sergilenmesi, depolanması, korunması, mekanik temizliği, tanıtımı, yayımı, güvenlik tedbirlerinin alınmasını sağlamak,
                        <br/>
                        18.	Müdürün görevlendirilmesi ile ilmi araştırma yapanlara, Devlet misafirlerine, gruplara, özel ziyaretçilere mü¬zede ve bağlı birimlerde rehberlik, özel izne tabi film ve fotoğraf çekenlere refakat etmek,
                        <br/>
                        19.	Müzenin sergi, kurs, seminer, konferans gibi kültürel ve eğitim faaliyetleri düzenlemek,
                        <br/>
                        20.	Mesleki, ilmi yayınları izler, müzeye kazandırılmasına ve inceledikleri yayınların diğer uzman personele tanıtıl¬masını sağlamak,
                        <br/>
                        21.	Eserlerin sağlık durumunu sürekli izlemek ve laboratuvarda müdahale edilmesi gerekenleri idareye rapor et¬mek,
                        <br/>
                        22.	Müzenin kütüphanecisi ve fotoğrafçısı yoksa, müdürün görevlendirmesi halinde bu görevleri yürütmek,
                        <br/>
                        23.	İmkanlar dahilinde, ilmi çalışmalar yapmak ve kentlilik bilincini artırmak üzere süreli veya süresiz yayınlar çıkarmak, projeler üretmek,
                        <br/>
                        24.	Müzede imkan dahilinde ihtisas kütüphanesi veya kent belleği kurmak. Kütüphaneci kadrosu bulunmayan müzede, bu görev müdürün görevlendireceği bir uzman tarafından yürütülür.
                        <br/>
                        25.	Müzeye bağışlanan görsel veya basılı her türlü materyali arşivlemek,
                        <br/>
                        26.	Müze ile ilgili genel fotoğraf arşivi oluşturmak,
                        <br/>
                        27.	Müzenin evrak arşivi dosyalama sistemine göre düzenli ve bakımlı bulundurmak.
                        <br/>
                        II.	Organizasyondaki Yeri:
                        <br/>
                        a.	Direkt olarak Müdüre bağlıdır.
                        <br/>
                        b.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Müdür'e karşı sorumludur.
                        <br/>
                        c.	Üstlerinden aldığı görevleri alt birimlere dağıtarak iş ve işlemlerin  yapılmasını sağlamak
                        <br/>
                        <br/>
                        <br/>
                        III.	 Bu Kadro İçin Aranan Özellikler:
                        <br/>
                        a.	En az Lise mezunu olmak.
                        <br/>
                        b.	Yeterli bilgisayar bilgisine sahip olmak.
                        <br/>
                        c.	Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        MADDE 17: EVLENDİRME MEMURLUĞU
                        <br/>
                        1-) Evlendirme Servis Şefi
                        <br/>
                        I.	Görev ve Sorumlulukları:
                        <br/>
                        a.	Yasa gereği Belediye Başkanına görev olarak verilen resmi nikâh işlemlerinin Başkanın onayı ile görevlendireceği Nikâh Memuru aracılığı ile yapılmasını sağlamak.
                        <br/>
                        b.	Gerektiğinde Nikâh Memurunun bulunmadığı zamanlarda Belediye Başkanının kendisine verdiği yetki ile hafta içi, hafta sonu ve cezaevi nikâhlarını kıymak.
                        <br/>
                        c.	Ücretlerin ödenmesinin takibini yapmak,
                        <br/>
                        d.	Resmi yazışmalara cevap yazılmasını sağlamak,
                        <br/>
                        e.	Günlük ve hafta sonu nikâhlarının organizasyonunun yapılmasını sağlamak,
                        <br/>
                        f.	Büronun sevk ve idaresini yapmak,
                        <br/>
                        g.	Üstlerinden aldığı emir ve görevleri yerine getirmek,
                        <br/>
                        h.	Kalite Yönetim Sistemi çalışmalarını yürütmek ve geliştirmek,
                        <br/>
                        <br/>
                        <br/>
                        II.	Organizasyondaki Yeri:
                        <br/>
                        a.	Direkt olarak Müdür’e bağlıdır.
                        <br/>
                        b.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Müdür’e karşı sorumludur.
                        <br/>
                        c.	Nikâh Memuru, Mernis İşlemleri Memuru, Evrak Kontrol ve Veri Girişi Görevlisi, Cüzdan Hazırlama ve Sicil Kayıt Görevlisi, Bilişim ve Ses Girişi Görevlisi ve Hizmetli kendisine bağlı bulunan kadrolardır.
                        <br/>
                        <br/>
                        <br/><br/>
                        III.	Bu Kadro İçin Aranan Özellikler:
                        <br/>
                        a.	Mahalli İdareler Personelinin Görevde Yükselme ve Unvan Değişikliği Esaslarına dair yönetmeliğinde gösterilen şartlara uygun olmak,
                        <br/>
                        <br/>
                        <br/>
                        2-) Nikâh Memuru
                        <br/>
                        I.	Görev ve Sorumlulukları:
                        <br/>
                        a.	Belediye Başkanının kendisine verdiği yetki ile hafta içi, hafta sonu ve cezaevi nikâhlarını kıymak.
                        <br/>
                        b.	Uluslararası aile cüzdanlarının Mal Müdürlüğü’nde teslim almak, kontrolünü yapmak,
                        <br/>
                        c.	Alınan evrakın kontrolünü yapmak eksikse tamamlanmasını sağlatmak,
                        <br/>
                        d.	Nikâh defterlerinin ve aile cüzdanlarının kontrolünü yapmak,
                        <br/>
                        e.	Günlük ve hafta sonu nikâhlarının organizasyonunun yapılmasını sağlamak,
                        <br/>
                        f.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        g.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek,
                        <br/>
                        <br/>
                        <br/>
                        II.	Organizasyondaki Yeri:
                        <br/>
                        a.	Direkt olarak Evlendirme Servis Şefine bağlıdır.
                        <br/>
                        b.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Evlendirme Servis Şefine ve Müdür’e karşı sorumludur.
                        <br/>
                        <br/>
                        <br/>
                        III.	Bu Kadro İçin Aranan Özellikler:
                        <br/>
                        a.	En az lise mezunu tercihen ön lisans mezunu olmak.
                        <br/>
                        b.	Yeterli bilgisayar bilgisine sahip olmak,
                        <br/>
                        c.	Belediye mevzuatına hâkim olmak.
                        <br/>
                        d.	Güncellenen Evlendirme Yönetmeliğinin takibini yapmak ve uygulamak.
                        <br/>
                        <br/>
                        <br/>
                        3-) Cüzdan Hazırlama ve Sicil Kayıt Görevlisi
                        <br/>
                        I.	Görev ve Sorumlulukları:
                        <br/>
                        a.	Uluslararası evlenme aile cüzdanını hazırlamak.
                        <br/>
                        b.	Nikâh yoğunluğuna göre ilk nikâh müracaatını kabul ederek, gerekli evrakın tamamlanmasını sağlamak.
                        <br/>
                        c.	Evlenme Bildirimlerinin Nüfus Müdürlüğüne göndermek ve arşivlemek.
                        <br/>
                        d.	Evlenme Kütük Takip Defterini işlemek.
                        <br/>
                        e.	Evlenme İzin Belgesi ile gelen nikâhlara cevap yazmak.
                        <br/>
                        f.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        g.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek,
                        <br/>
                        <br/>
                        <br/>
                        II.	Organizasyondaki Yeri:
                        <br/>
                        a.	Direkt olarak Evlendirme Servis Şefine bağlıdır.
                        <br/>
                        b.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Müdür’e ve Evlendirme Servis Şefine karşı sorumludur.
                        <br/>
                        <br/>
                        <br/>
                        III.	Bu Kadro İçin Aranan Özellikler:
                        <br/>
                        a.	En az lise mezunu tercihen yüksekokul mezunu olmak.
                        <br/>
                        b.	Yeterli bilgisayar bilgisine sahip olmak,
                        <br/>
                        c.	Belediye mevzuatına hâkim olmak,
                        <br/>
                        d.	Güncellenen Evlendirme Yönetmeliğinin takibini yapmak ve uygulamak,
                        <br/>
                        <br/>
                        <br/>
                        4-) Evlendirme Servisi Evrak Kontrol ve Veri Girişi Görevlisi
                        <br/>
                        I.	Görev ve Sorumlulukları:
                        <br/>
                        a.	İlk Nikâh müracaatını kabul ederek, gerekli evrakın tamamlanmasını sağlamak
                        <br/>
                        b.	Evlenme Beyan imzalarını almak
                        <br/>
                        c.	Nikâh ve Salon Ücretlerinin tahakkukunu hazırlamak,
                        <br/>
                        d.	Gelen evrakın kontrolünü yaparak hafta içi nikâhların randevusunu vermek,
                        <br/>
                        e.	Nikâh için verilen randevu sırasında, aile danışmanı tarafından belli periyodlar ile yapılması planlanan evlilik seminerine, evlenecek çiftleri davet etmek.
                        <br/>
                        f.	Evrakı tamam randevulu hafta içi ve hafta sonu nikâhların kıyılabilmesi için gerekli işlemleri yaparak nikâh memuruna sunmak.
                        <br/>
                        g.	Evlenme İzin Belgesini hazırlamak.
                        <br/>
                        h.	Nikâh işlemleri ile ilgili gelen telefonlarda; vatandaşa bilgi vermek ve ilgili şahıslara yönlendirmek.
                        <br/>
                        i.	Nikâh akdi defterinin sayfalarını numaralandırarak onayı için Nüfus Müdürlüğü’ne göndermek.
                        <br/>
                        j.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        k.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek,
                        <br/>
                        <br/>
                        <br/>
                        II.	Organizasyondaki Yeri:
                        <br/>
                        a.	Direkt olarak Evlendirme Servis Şefine bağlıdır.
                        <br/>
                        b.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Evlendirme Servis Şefine ve Müdür’e karşı sorumludur.
                        <br/>
                        <br/>
                        <br/>
                        III.	Bu Kadro İçin Aranan Özellikler:
                        <br/>
                        a.	En az lise mezunu tercihen ön lisans mezunu olmak.
                        <br/>
                        b.	Yeterli bilgisayar bilgisine sahip olmak,
                        <br/>
                        c.	Belediye mevzuatına hâkim olmak.
                        <br/>
                        d.	Güncellenen Evlendirme Yönetmeliğinin takibini yapmak ve uygulamak.
                        <br/>
                        <br/>
                        <br/>
                        5-) Mernis İşlemleri Memuru
                        <br/>
                        I.	Görev ve Sorumlulukları:
                        <br/>
                        a.	Uluslararası nikâh işlemleri evrakın kontrolünü yapmak, eksikse tamamlanmasını sağlatmak,
                        <br/>
                        b.	Mernis evlendirme bildirimlerinin hazırlanmasının sağlanması kontrolü yapmak.
                        <br/>
                        c.	Mernis bildirimlerinin Nüfus Müdürlüğü’ne işlenmesi için göndermek.
                        <br/>
                        d.	Uluslararası aile cüzdanı, evlendirme kütüğü, evlendirme kütük takip defteri ve gerekli basılı evrakın takibi, bittiğinde talebini yapmak.
                        <br/>
                        e.	Kıyılan nikâhların adedini Sağlık Grup Başkanlığı’na bildirmek,
                        <br/>
                        f.	Resmi yazışmalara cevap yazmak,
                        <br/>
                        g.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        h.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek,
                        <br/>
                        <br/>
                        <br/>
                        II.	Organizasyondaki Yeri:
                        <br/>
                        a.	Direkt olarak Evlendirme Servis Şefine bağlıdır.
                        <br/>
                        b.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Evlendirme Servis Şefine ve Müdür’e karşı sorumludur.
                        <br/>
                        <br/>
                        <br/>
                        III.	Bu Kadro İçin Aranan Özellikler:
                        <br/>
                        a.	En az lise mezunu tercihen ön lisans mezunu olmak.
                        <br/>
                        b.	Yeterli bilgisayar bilgisine sahip olmak,
                        <br/>
                        c.	Belediye mevzuatına hâkim olmak.
                        <br/>
                        d.	Güncellenen Evlendirme Yönetmeliğinin takibini yapmak ve uygulamak.
                        <br/>
                        <br/>
                        <br/>
                        6-) Hizmetli
                        <br/>
                        I.	Görev ve Sorumlulukları:
                        <br/>
                        a.	Evlendirme Servisi Çay Ocağının hizmetlerini yürütmek.
                        <br/>
                        b.	Nikâh Salonu ve Evlendirme Servisinin rutin temizliğini yapmak.
                        <br/>
                        c.	Hafta içi ve hafta sonu nikâh salonlarını hazır bulundurmak,
                        <br/>
                        d.	Birim içi ve dışı evrakın taşınması, evrakın resmi kurumlara teslim edilmesi işlemlerini yürütmek.
                        <br/>
                        e.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        II.	Organizasyondaki Yeri:
                        <br/>
                        a.	Direkt olarak Evlendirme Servis Şefine bağlıdır.
                        <br/>
                        b.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Müdür’e ve Evlendirme Servis Şefine karşı sorumludur.
                        <br/>
                        <br/>
                        <br/>
                        III.	Bu Kadro İçin Aranan Özellikler:
                        <br/>
                        a.	En az ilköğretim mezunu olmak.
                        <br/>
                        b.	Temizlik işlerinde tecrübeli olmak,
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Madde 18:  STRATEJİ GELİŞTİRME VE KALİTE YÖNETİM TEMSİLCİSİ
                        <br/>
                        I.	Görev ve Sorumlulukları:
                        <br/>
                        a.	Belediye Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve ISO 9001:2015 Kalite Yönetim Sistemi uygulamalarında birim temsilcisi olarak görev yapar ve hazırlama çalışmalarında bulunmak.
                        <br/>
                        b.	Birimi ile ilgili dönemsel olarak performans ve kalite hedeflerini belirler, izler ve bu hedeflerine uygun faaliyetlerde bulunmak.
                        <br/>
                        c.	Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve ISO 9001:2015 Kalite Yönetim Sistemi ile ilgili birim aylık raporlarını düzenleyerek üst yönetime sunmak.
                        <br/>
                        d.	Belediye Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı uygulamalarına ve Kalite politikasının benimsenmesine yönelik olarak çalışmalarda bulunur ve gereklerini yerine getirilmesini sağlamak.
                        <br/>
                        e.	Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite El Kitabında birimi ile ilgili bölümü hazırlar ve yılda bir kez gözden geçirmek, gerekirse revize etmek.
                        <br/>
                        f.	İç denetim faaliyeti kapsamında denetçilere birimi ile ilgili konularda bilgi verir ve Biriminde Kalite Yönetim Sistemi’nin etkinliği konusunda rapor hazırlar ve Yönetimin Gözden Geçirmesi toplantısına sunmak üzere Kalite Yönetim Koordinatörlüğüne iletmek.
                        <br/>
                        g.	Sistemde birimi ile ilgili doğabilecek uygunsuzlukların belirlenmesi ve giderilmesi için gerekli çalışmaları ayrıca iş takibi işlemlerini yapmak.
                        <br/>
                        h.	Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite ile ilgili kurum içi ve kurum dışı toplantılara ve eğitimlere katılmak.
                        <br/>
                        i.	Yönetim tarafından oluşturulmuş olan diğer kurallar çerçevesinde ve Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite Yönetim Sistemi içinde hazırlanmış dokümanlarda belirtilen diğer görevlerini yerine getirmek.
                        <br/>
                        <br/>
                        <br/>
                        II.	Organizasyondaki Yeri:
                        <br/>
                        a.	Direkt olarak Müdüre bağlı olarak çalışmak,
                        <br/>
                        b.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Müdür’e karşı sorumludur.
                        <br/>
                        <br/>
                        <br/>
                        III.	Bu Kadro İçin Aranan Özellikler:
                        <br/>
                        a.	Tercihen üniversite mezunu olmak.
                        <br/>
                        b.	Bilgisayar bilgisi yeterli olmak.
                        <br/>
                        c.	Stratejik Plan, Performans Esaslı Bütçeleme mevzuatına hâkim olmak.
                        <br/>
                        d.	Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        DÖRDÜNCÜ BÖLÜM
                        <br/>
                        Hizmet ve Görevlerin İcrası, İşbirliği ve Koordinasyon
                        <br/>
                        Hizmetlerin icrası
                        <br/>
                        MADDE 19 : (1) Kültür İşleri Müdürlüğündeki hizmetlerin icrası aşağıda gösterilmiştir.
                        <br/>
                        a.	Görevin kabulü: Müdürlüğe gelen evrak bilgisayara işlenip zimmet defterine kaydedilerek ilgililerine verilir.
                        <br/>
                        b.	Görevin planlanması: Kültür İşleri Müdürlüğündeki çalışmalar, Müdür ve büro sorumlusu tarafından düzenlenen plan içerisinde yürütülür.
                        <br/>
                        c.	Görevin İcrası: Kültür İşleri Müdürlüğü tüm personeli kendilerine verilen görevleri gereken özen ve süratle yapmak zorundadır.
                        <br/>
                        <br/>
                        <br/>
                        İşbirliği ve koordinasyon
                        <br/>
                        MADDE 20:
                        <br/>
                        1)	Belediye birimleri arasında ve birim içi işbirliği ve koordinasyon
                        <br/>
                        a.	Kültür İşleri Müdürlüğü ile diğer birimler arasında ve birim içi koordinasyon Müdür tarafından sağlanır.
                        <br/>
                        b.	Kültür İşleri Müdürlüğüne gelen tüm yazılar kayıt memurunda toplanır,
                        <br/>
                        konularına göre dosyalandıktan sonra Müdür'e verilir.
                        <br/>
                        c.	Kültür İşleri Müdürü dosyadaki evrakları havale eder ve iletir.
                        <br/>
                        d.	Görevli personel evrakları niteliğine göre inceler ve sonuca ulaştırır.
                        <br/>
                        <br/>
                        <br/>
                        2)	Diğer kuruluşlarla koordinasyon: Kültür İşleri Müdürlüğü, Valilik ve tüm Kamu Kurum ve Kuruluşları ile özel ve tüzel kişilerle yapacağı önemli yazışmalarını, sorumlu personel, Şef ve Müdürün parafı ile Belediye Başkanı ve/veya ilgili Başkan Yardımcısı imzası ile yürütülür.
                        <br/>
                        <br/>
                        <br/>
                        BEŞİNCİ BÖLÜM
                        <br/>
                        Denetim, Sicil ve Disiplin
                        <br/>
                        Müdürlük içi denetim
                        <br/>
                        MADDE 21:
                        <br/>
                        Personel en yakın amirinden başlayarak denetime tabi tutulur.
                        <br/>
                        Kültür İşleri Müdürü; Müdürlüğün tüm personelini her zaman gerek gördüğünde denetlemek ve ilgilileri yönlendirmek yetkisine sahiptir.
                        <br/>
                        Personel özlük dosyaları
                        <br/>
                        MADDE 22: Müdürlüğün tüm personelinin liyakat ve ehliyetlerinin tespitinde, kademe
                        <br/>
                        İlerlemelerinde, derece yükselmelerinde emekliye ayrılmaları ya da kamu hizmeti ile ilişiklerinin kesilmesinde Özlük ve Sicil Dosyaları başlıca dayanaktır.
                        <br/>
                        <br/>
                        <br/>
                        Disiplin cezaları
                        <br/>
                        MADDE 23: Kültür İşleri Müdürlüğünün tüm personeli ile ilgili disiplin işlemleri 657 sayılı Devlet Memurları Kanunu ile 4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun hükümlerine ve yürürlükteki ilgili diğer mevzuata tabidir.
                        <br/>
                        <br/>
                        <br/>
                        ALTINCI BÖLÜM
                        <br/>
                        Çeşitli ve Son Hükümler
                        <br/>
                        Yönetmelikte yer almayan hususlar
                        <br/>
                        MADDE 24: İş bu yönetmelikte yer almayan hususlarda yürürlükteki ilgili Umumi hükümler çerçevesinde hareket edilir.
                        <br/>
                        <br/>
                        <br/>
                        Yürürlük
                        <br/>
                        MADDE 25: Bu Yönetmelik Belediye Meclisi tarafından onaylanmasını takiben 3011 sayılı kanun doğrultusunda ilan edildiği tarihte yürürlüğe girer.
                        <br/>
                        <br/>
                        <br/>
                        Yürütme
                        <br/>
                        MADDE 26: Bu yönetmelik hükümlerini Belediye Başkanı yürütür.
                    </p>
                </section>
                <section id="bolum2" className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
                    <h3 className="text-lg font-bold text-center"></h3>
                    <p className="text-gray-700 text-left">
                        1968 yılında Erzurum’da doğdu. İlk, Orta ve lise öğrenimini Gebze’de tamamladı.
                        1994 yılında Çukurova Üniversitesi İİBF İktisat Bölümünden mezun oldu.
                        2013 yılında Türkiye Ortadoğu Amme İdaresi Enstitüsü (TODAİE) Kamu Yönetimi Yerel Yönetimler alanında Yüksek Lisans yaptı.
                        1997 yılında İETT Genel Müdürlüğünde çalışma hayatına başladı. 1999 yılında Gebze Belediyesinde Gelirler Müdür yardımcısı olarak atandı. 2007 yılına kadar Gelirler Müdürlüğünde müdür yardımcısı ve müdür olarak görev yaptı.
                        2007 yılında Gebze Belediyesi Kültür ve Sosyal İşler Müdürü olarak atandı. 2015 yılına kadar bu görevi yaptıktan sonra 2015 yılında Mezarlıklar Müdürü oldu.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Hasangüler;
