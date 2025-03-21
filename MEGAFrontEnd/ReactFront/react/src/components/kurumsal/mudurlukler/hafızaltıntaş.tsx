import React from "react";

const   Hafızaltıntaş: React.FC = () => {
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
                        src="/images/kurumsal/mudurlukler/avatar-7.jpg"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">Fen İşleri Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" /> Hafız ALTINTAŞ
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" /> fenisleri@gebze.bel.tr
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
                        <br/>
                        Genel Hükümler

                        <br/>

                        BİRİNCİ KISIM
                        <br/>
                        Amaç,Kapsam, Hukuki Dayanak, Tanımlar

                        <br/>

                        Amaç:
                        <br/>
                        Madde1- Bu Yönetmenliğin amacı Gebze Belediyesi Fen işleri Müdürlüğünün kuruluş, görev ve çalışma esaslarını düzenlemektir.

                        <br/>

                        Kapsam:
                        <br/>
                        Madde2- Bu Yönetmelik; Gebze Belediyesi Fen işleri Müdürlüğünün kuruluşuna, görevlisine, yetki ve sorumlulukları ile müdürlük personelinin kadrolarına ve kıyafetlerine dair esas ve usulleri kapsar.

                        <br/>

                        Bağlılık :
                        <br/>
                        Madde3– Fen İşleri Müdürlüğü, Belediye Başkanı’na veya görevlendireceği Başkan Yardımcısı’na bağlıdır. Başkan, bu görevi bizzat veya görevlendireceği kişi eliyle yürütür.


                        <br/>
                        Hukuki Dayanak:
                        <br/>
                        Madde4- GÖREV KAPSAMI :
                        <br/>


                        Fen İşleri Müdürlüğü;
                        <br/>
                        •	5393 Sayılı Belediye Kanunu.
                        <br/>
                        •	5018 Sayılı Kamu Mali Yönetimi ve Kontrol Kanunu
                        <br/>
                        •	657 Sayılı Devlet Memurları Kanunu ile bunun ek ve değişiklikleri.
                        <br/>
                        •	2886 Sayılı Devlet İhale Kanunu.
                        <br/>
                        •	4734 Sayılı Kamu İhale Kanunu.
                        <br/>
                        •	4735 Sayılı Kamu İhaleleri Sözleşmeleri Kanunu.
                        <br/>
                        •	3194 Sayılı İmar Kanunu.
                        <br/>
                        •	1475 Sayılı İş Kanunu.
                        <br/>
                        •	2821 Sayılı Sendikalar Kanunu.
                        <br/>
                        •	2822 Sayılı Toplu Sözleşme Grev ve Lokavt Kanunu.
                        <br/>
                        •	Kamu Kurum ve Kuruluşlarında çalışan personelin kılık ve kıyafetlerine dair yönetmelik.
                        <br/>
                        •	Devlet Memurları Sicil Yönetmeliği.
                        <br/>
                        •	ISO 9001 Kalite Yönetim Sistemi Kalite El Kitabı
                        <br/>
                        •	Yürürlükteki diğer Kanun, Kararname ve Yönetmelikler




                        <br/>
                        Tanımlar:
                        <br/>
                        Madde5- Bu Yönetmelikte geçen;
                        <br/>
                        a) Belediye	      	: Gebze Belediyesini,
                        <br/>
                        b) Başkan		: Gebze Belediye Başkanını,
                        <br/>
                        c) Meclis		: Gebze Belediye Meclisini,
                        <br/>
                        d) Encümen		: Gebze Belediyesi Encümenini ifade eder.
                        <br/>
                        e) Müdürlük		: Gebze Belediyesi Fen işleri Müdürlüğünü,

                        <br/>

                        İKİNCİ KISIM
                        <br/>
                        MÜDÜRLÜĞÜN GÖREVLERİ, ÇALIŞMA DÜZENİ VE SAATLERİ
                        <br/>
                        Madde6-  Fen İşleri Müdürlüğü’nün Görevleri :
                        <br/>


                        1-	Yıllık yatırım programı hazırlamak
                        <br/>
                        2-	Şehrin cadde, sokak ve meydanlarını plana uygun olarak tanzim ve ıslah etmek, döşemek, duracak sığınacak dinlenecek yerler yapmak ve iyi bir halde bulundurmak.
                        <br/>
                        3-	Belediye sınırları dahilindeki umuma mahsus köprüleri plana göre inşa ve idame etmek.
                        <br/>
                        4-    Oyun ve Spor yerleri yapmak.
                        <br/>
                        5-    Belediyece yapılması gereken her türlü inşaatın (yol, altyapı) keşiflerini hazırlamak,

                        ihale dosyalarını düzenlemek, ihale edilen işlerin denetimini yapmak, ihale sürecinin

                        takibini yapmak, hak edişlerini düzenlemek, ihalesi tamamlanan işlerin kesin hesabını

                        çıkarmak.
                        <br/>
                        6-    Belediye hizmetlerinde kullanılan bina, tesis ve alanların bakım ve  onarımlarını

                        yapmak veya yaptırmak.
                        <br/>
                        7-   İlçemizdeki kamu kurumlarından gelen araç ve gereç temini ile inşaat  yapım ve onarım

                        taleplerinin stratejik plana uygunluğu ve başkanlık  onayıyla meclis kararı alınarak

                        uygulanmasını sağlamak.
                        <br/>
                        8-   İmar ve Şehircilik Müdürlüğü, Zabıta Müdürlüğü ve Kaymakamlık tarafından bildirilen

                        kaçak yapıların yıkımı için gerekli araç ve personeli temin etmek.
                        <br/>
                        9-   Altyapı çalışmaları için kişi, kurum ve kuruluşlara kazı ruhsatı vermek ve  denetlemek.
                        <br/>
                        10-  Kaçak kazıların tespiti ve 3194 sayılı İmar Kanununun ilgili maddelerine göre işlem

                        yapmak.
                        <br/>
                        11-   Mevcut yolların periyodik olarak bakım ve onarımın yapılması veya yaptırılmasını

                        sağlamak.
                        <br/>
                        12-   Kaldırımların yapım, bakım ve onarımın yapılması veya yaptırılmasını   sağlamak.
                        <br/>
                        13-   Belediyemizin diğer birimlerine gerekli araç, gereç ve iş gücü desteği  sağlamak.
                        <br/>
                        14-   Açılmamış imar yollarını açmak.
                        <br/>
                        15-   Belediyemizin sorumluluğunda bulunan her türlü yollarda, geçit ve  köprülerde korkuluk

                        vb. yapmak, mevcutların bakım ve onarımını yapmak.
                        <br/>
                        16-  Anayol, cadde ve sokaklarda kaldırım üzerine parklanmaları önlemek amacıyla

                        engelleyici unsurlar monte etmek ve ettirmek.
                        <br/>
                        17-  Kış aylarında kar ve buzla mücadele etmek, tuzlama ve küreme yapılarak taşıt trafiği

                        akışını temin etmek.
                        <br/>
                        18-  İstinat duvarı ve merdivenli yol yapmak.
                        <br/>
                        19-  Yaya ve araç trafiği ulaşımının rahatlıkla sağlanması için köprü, alt-üst geçitler ve

                        yayalaştırma uygulamaları yapmak.
                        <br/>
                        20- Vatandaşların dilek ve şikayetlerini değerlendirmek, sonuçlarını ilgili kişi ve kurumlara

                        iletmek.
                        <br/>
                        21-  Yapılan bu işlerin sonucunu günlük, aylık, yıllık faaliyet raporu haline getirmek.


                        <br/>
                        Madde-7 Sınırlar :  Gebze Belediyesi ilçe  sınırlarını ve mücavir alanları ihtiva eder.

                        <br/>

                        Madde 8- Çalışma Düzeni ve Saatleri :

                        Hizmetler, bayram ve genel tatil günleri de dahil olmak üzere  aksatmadan sürdürülür.

                        Hizmetin sürekliliğini aksatmamak kaydıyla ve bir sıra dahilinde personele haftada 2 gün izin verilir.

                        Çalışma saat ve şekilleri İnsan Kaynakları ve Eğitim Müdürlüğünün görüşü alındıktan sonra uygulanmaya konur.

                        Personelin fazla çalışması, mevzuatına göre ücretle karşılanır.



                        <br/>

                        İKİNCİ BÖLÜM
                        <br/>
                        KADRO ESASLARI VE PERSONELİN GÖREVLERİ,

                        <br/>

                        Madde 9- Personel Kadroları :
                        <br/>
                        Müdürlükte Müdür,  Müdür Yardımcısı, Şef,birim sorumluları Başşoför, Yazı  İşleri Memuru, Tahakkuk Memuru, yeterli sayıda kontrol mühendisleri, mimarlar, memur, şoför ve personel bulunur.

                        <br/>

                        Madde 10- Müdür :


                        <br/>
                        Müdür, mühendislik fakültesinden (İnşaat, Makine, Harita Mühendisliği bölümleri) birini veya en az dört yıllık  yüksek öğrenimi bitirmiş olmak veya yurt içi-yurt dışı denkliği kabul edilmiş yüksek öğrenim kurumlarından mezun olmalıdır.

                        657 Sayılı Devlet Memurları Kanunundaki G.İ.H. sınıfına dahildir.

                        Başkana ve başkanın görevlendireceği Başkan Yardımcısına karşı sorumludur.

                        <br/>

                        Müdürlüğün en yetkili amiri olup görevleri şunlardır;

                        <br/>

                        1-	Müdürlüğün idari ve teknik her türlü işlerini, kanun, yönetmelik, bildiri,genelge ve Başkanlık direktifleri çerçevesinde sevk ve idare eder.
                        <br/>
                        2-	Müdürlüğün çalışma esaslarını gözden geçirerek plan ve programları yapar  ve çalışmaların programa uygunluğunu sağlar.
                        <br/>
                        3- Şefler ve birim sorumluları  arasında koordinasyonu sağlayıcı tedbirleri alır ve denetler.
                        <br/>
                        4- Her türlü tasarruf tedbirlerinin alınmasını ve denetimini yapar.
                        <br/>
                        5- Yıllık programlar hazırlatır ve programlara uyumunu denetler.
                        <br/>
                        6- Yapılacak işlerin yerinde denetimi sağlar. Etkinlik artırıcı tedbirlerin  alınmasını

                        gerçekleştirir.
                        <br/>
                        7- İhtiyaçların tespitini sağlar ve yerine getirilmesini takip eder.
                        <br/>
                        8- Müdürlüğe bağlı personelin ihtiyacı olabilecek eğitim çalışmalarını planlar.
                        <br/>
                        9- Müdürlüğün işlevlerine ilişkin görevlerin Gebze Belediyesi Başkanlık  Makamınca

                        uygun görülen programlar gereğince yürütülmesi için karar verme, tedbirleri alma ve

                        uygulama   yetkisi.
                        <br/>
                        10-  Müdürlüğün işlevlerinin yürütülmesinde ihtiyaç duyulan yeni tedbirlerin ve yetkilerin

                        alınması için Başkanlık Makamına önerilerde bulunma yetkisi.
                        <br/>
                        11-  Müdürlüklerle ilgili yazışmalarda 1. Derecede imza yetkisi.
                        <br/>
                        12- Disiplin amiri olarak personeline, mevzuatta ön görülen cezalarını verme   yetkisi.
                        <br/>
                        13- Müdürlüğe bağlı kadro görevlerinin yerine getirilmesinde süreli ve ani  denetlemeler

                        yapma, rastlayacağı aksaklıkları giderme yetkisi.
                        <br/>
                        14- Müdürlük emrinde görev yapan personelle ilgili yönetmelik çerçevesinde  sicil raporu

                        düzenlemek, mazeretine binaen bir güne kadar mazeret izini  vermek ve ödül, takdirname,

                        yer değiştirme gibi personel işlemleri için bağlı bulunduğu Başkan Yardımcısı ile Başkanlık

                        Makamına önerilerde  bulunmak, Müdür Yardımcıları, Şefler, birim sorumluları ve diğer

                        görevlilerin yıllık izin kullanış zamanları tespit etmek yetkisi.
                        <br/>
                        15- Müdür Yardımcılarının işlevleri itibari ile görev dağılımını yapma yetkisi.
                        <br/>
                        16- Müdürlüğün faaliyet alanına giren konularda ilgili kişi, birim ve kuruluşlarla haberleşme

                        yetkisi.
                        <br/>
                        17-  Üst Makamlarca verilecek diğer yetkiler.
                        <br/>
                        18- 5018 Sayılı Kanunla verilen “Harcama” yetkisi,
                        <br/>
                        19- Kurumun mevzuatı, yasalar ve bu yönerge ile kendisine verilen görevlerin,  gereği gibi

                        yerine getirilmesinden.
                        <br/>
                        20- Yetkilerin zamanında ve gereğince kullanılmasından.
                        <br/>
                        21- Bağlı olduğu Başkan Yardımcısı ve Belediye Başkanına karşı sorumludur.

                        <br/>

                        Müdür Yardımcısı :
                        <br/>
                        Madde 11 – Müdür Yardımcıları teknik eğitim veren dört yıllık Fakülte veya  iki yıllık teknik yüksek öğrenim görmüş olanlar arasından 657 Sayılı Devlet Memurları Kanunu ve Devlet Memurları Görevde Yükselme Yönetmeliği  hükümleri çerçevesinde atanır.

                        Görevleri şunlardır;
                        <br/>
                        1- Müdür tarafından verilen görevleri yerine getirmek.
                        <br/>
                        2- Görevle ilgili denetimlerde bulunmak.
                        <br/>
                        3-	Çalışmaların verimli şekilde yürümesini sağlayıcı tedbirlerin alınmasını sağlamak, bu konularda müdürlüğe önerilerde bulunmak.
                        <br/>
                        4- Bağlı bölümlerin malzemeleri ile ilgili koruyucu tedbirlerin alınmasını   sağlamak.
                        <br/>
                        5- Bağlı bölümlerin yazışmalarında koordine görevi yapmak.
                        <br/>
                        6- Bağlı bölümlerin yasa, tüzük, yönetmelik, Yönerge ve talimatlar çerçevesinde

                        çalışmasını sağlamak.
                        <br/>
                        7- Toplantılarda teknik ve idari konularda görüş bildirmek.
                        <br/>
                        8- İlgili mevzuat doğrultusunda ve müdür tarafından devredilen müdüriyet makamı

                        yetkilerini kullanmak.
                        <br/>
                        9- Müdürlük görevlerinin, müdürlük ve başkanlık makamınca uygun görülen programlar

                        gereğince yürütülmesi için karar vermek, tedbirleri almak ve  uygulatmak.
                        <br/>
                        10- Bağlı şeflerin, birim sorumluluları, kadro görevlerinin yerine getirilmesinde süreli ve

                        gerektiğinde  ani denetlemeler yapmak, aksaklıkları gidermek.
                        <br/>
                        11-  Müdürlük yazışmalarında paraf ve müdürünce uygun görüldüğünde imzalamak.
                        <br/>
                        12- Müdürlük personeline saatli, özür izni verme, yıllık izin kullanış zamanlarını tespit etme,

                        disiplin, takdirname, ödül, yer değiştirme gibi personel işlemleri için müdüre öneride

                        bulunmak.
                        <br/>
                        13- Görevlerinde belirtilen işleri yürütürken eş değerdeki görevlilerinden iş akımının

                        gerektirdiği hizmetlerin yapılmasını istemek.


                        <br/>
                        14- Birim görevlerinin verimli, ekonomik yürütülmesi için yöntemleri araştırmak, mevcut

                        yöntemleri günün şartlarına uygun hale getirmek.
                        <br/>
                        15- Yapılan çalışmalar hakkında rapor tanzim etmek.
                        <br/>
                        16- Müdür yardımcıları kendilerine verilen görevleri eksiksiz olarak yapılmasından birinci derece sorumlu olmakla beraber, kendisine verilen görevler ne olursa olsun personelin disiplin ve düzeninden, tesis, araç ve  gereçlerin korunmasından, temizliği ve göreve hazır tutulmasından da                Müdüre karşı sorumludur.


                        <br/>
                        Madde -12 Alt yapı Şefliği:


                        <br/>
                        1.	Altyapı çalışmaları için kişi, kurum ve kuruluşlara kazı ruhsatı verilmesi sürecindeki

                        tüm işlemleri (Tahakkuk,Tahsilat vs.) ve denetlenmesi.
                        <br/>
                        2.	Belediye sınırları içerisinde altyapı hizmetlerinin koordinasyon içerisinde

                        yürütülmesi ve altyapı ruhsat süreçlerini çalışma esaslarına göre takip etmek.
                        <br/>
                        3.	Altyapı çalışmasına izin istenen güzergahta keşif yaparak çalışmanın uygun olup

                        olmadığına karar vermek.
                        <br/>
                        4.	Ruhsatsız  kazıların tespitinin yapılması, önlenmesi ve cezai işlem uygulanması için

                        tutanakların düzenlenmesi ve Aykome yönetmeliğine  göre işlem yapılmasını sağlamak.
                        <br/>
                        5.	Üst yapısı yenilenecek olan yollardaki alt yapı eksikliklerinin diğer altyapı kurumları ile

                        koordinasyon yapılarak eksikliklerinin tamamlattırılmasını  sağlamak.
                        <br/>
                        6.	Kendisine bağlı görev yapan personelin düzenli çalışmalarını sağlamak, yönetmek ve

                        denetlemek, rastlayacağı aksaklıkların giderilmesi için  talimat vermek.
                        <br/>
                        7.	Görevlerinde belirtilen işleri yürütürken eş değerdeki görevlilerden iş akımının

                        gerektirdiği hizmetlerin yapılmasını istemek.
                        <br/>
                        8.	Alt yapı Şefi kendisine verilen görevlerin eksiksiz olarak yapılmasından tesis ve emrindeki araçların korunmasından, temizliği ve göreve hazır tutulmasından Müdür Yardımcıları ve Müdüre karşı   sorumludur.


                        <br/>
                        Madde-13 Üstyapı Kontrol Birimi:
                        <br/>
                        1-	Belediyece yapımı planlanan projelerin yerinde uygulanabilirliğini kontrol etmek,  ihaleleri yapılan projelerin her türlü mühendislik hizmetlerini yürütmek, müteahhitlik hizmetlerinin kontrolünü yapmak, hakkedişlerin kontrolünü yapmak , geçici ve kesin kabulleri yapmak.
                        <br/>
                        2-	Belgeleri usulüne uygun olarak arşivlemek ve muhafaza etmek.
                        <br/>
                        3-	 İhtiyaca göre yeni bina inşaatları için mühendislik hizmetlerini yürütmek, ihtiyaç programlarını hazırlamak, mimari, statik, elektrik, tesisat, alt yapı dekorasyon, peyzaj, uygulama ve detay projelerini hazırlatmak.
                        <br/>
                        4-	Yürütülecek tüm faaliyetleri sırasında Belediyenin diğer birimleri ile iyi ve etkin bir işbirliği içinde çalışmalarını yürütmek, gerektiğinde uzmanlık alanlarına göre ilgili birimlerden görevlendirilecek personeli çalışmalara dâhil etmek.
                        <br/>
                        5-	 Kamu hizmetine sunulacak bina ve tesislerin, inşaatların yaptırılması çalışmalarını takip ederek sonuçlandırmak. ilgili yüklenici ile tüm yazışmaları yapmak ve arşivlemek  muhafaza etmek.
                        <br/>
                        6-	 Gerekli ihale dokümanlarına  uygun hak edişleri kontrol etmek. Belgeleri usulüne uygun olarak arşivlemek ve muhafaza etmek.
                        <br/>
                        7-	 Stratejik plan ve performans programında mevcut projelerin, inşaatlarının yaptırılması çalışmalarını takip ederek sonuçlandırmak.
                        <br/>
                        8-	 Belediye hudutları içindeki tarihi ve kültürel değerleri korumak için kendisine verilecek görevleri yapmak.
                        <br/>
                        9-	Belediye hudutları içindeki tarihi ve kültürel değerleri korumak, yapılan her hizmetin insan yaşamını doğrudan veya dolaylı etkilediğinin bilinciyle çağdaş yaşamın getirdiği tüm teknolojik olanakları kullanıp, çağdaş standartlarda kamusal hizmet vermek.
                        <br/>
                        10-	Proje uygulama süreci kapsamında gerekli görüldüğü takdirde hizmet alımı yapmak,
                        <br/>
                        11-	Tadilatı gereken binaların, Tadilat projelerini hazırlamak ve yapmak veya yaptırmak.
                        <br/>
                        12-	Yapı teknolojisindeki son gelişmeleri ve yenilikleri yakından izlemek ve projeler uygulama aşamasında bu gelişme ve yeniliklerden yararlanmak,
                        <br/>
                        13-	Gerekli görülen yerlerde Köprü, Taş Duvar, Betonarme İstinat Duvarı, İhata Duvarı, Merdiven tasarlamak projelendirme ve yapımını gerçekleştirmek
                        <br/>
                        14-	Görevlerinde belirtilen işlerin verimli ve ekonomik olarak yürütülmesi için
                        <br/>
                        yöntemler araştırtmak, mevcut yöntemleri günün şartlarına uygun hale  getirmek.
                        <br/>
                        15-	 Yapılan çalışmalar hakkında rapor tanzim etmek.
                        <br/>
                        16-	 Gerektiğinde ihale hazırlamak ve kontrollük yapmak.
                        <br/>
                        17-	 Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        18-	 Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        19-	 Yapı Kontrol birim sorumlusu kendisine verilen görevlerin eksiksiz olarak yapılmasından   tesis ve emrindeki araçların korunmasından, temizliği ve göreve hazır  tutulmasından Müdür Yardımcıları ve Müdüre karşı sorumludur.


                        <br/>
                        Madde 14- Yol Bakım Onarım Birimi
                        <br/>


                        1-	Asfalt yol ve asfalt yama yapımı.
                        <br/>
                        2-	Asfalt kalitesinin denetlenmesi.
                        <br/>
                        3-	Asfalt malzemesi kalitesinin denetlenmesi.
                        <br/>
                        4-	Kendisine bağlı görev yapan personelin düzenli çalışmalarının sağlanması
                        a.	Yönetilmesi ve denetlenmesi ve rastlayacağı aksaklıkların giderilmesi için talimat
                        <br/>
                        b.	verilmesi.
                        <br/>
                        5-	İmar ve kadastral yolların açılması.
                        <br/>
                        6-	Stabilize yol çalışması.
                        <br/>
                        7-	Reglaj çalışması.
                        <br/>
                        8-	Yol alt yapısı için malzeme temin edilmesi.
                        <br/>
                        9-	İş makineleri ve kamyonların sevk ve idare edilmesi.
                        <br/>
                        10- İmar ve Şehircilik Müdürlüğü, Zabıta Müdürlüğü ve Kaymakamlık tarafından

                        bildirilen kaçak yapıların yıkımı için gerekli araç ve personelin temin  edilmesi.
                        <br/>
                        11- Kış aylarında kar ve buzla mücadele etmek, tuzlama ve küreme yapılarak taşıt trafiği

                        akışını temin etmek.
                        <br/>
                        12- Belediyemizin sorumluluğundaki asfalt ve parke yolların ve kaldırımların  onarımlarını

                        yapmak.
                        <br/>
                        13- Belediyemizin sorumluluğundaki parke yolların yapım, bakım ve    onarımlarını

                        yapmak.
                        <br/>
                        14- Yol Bakım Onarım birim sorumlusu kendisine verilen görevlerin eksiksiz olarak

                        yapılmasından tesis ve emrindeki araçların korunmasından, temizliği ve

                        göreve hazır tutulmasından Müdür Yardımcıları ve Müdüre karşı

                        sorumludur.

                        <br/>

                        Madde 15- Elektrik Birimi


                        <br/>
                        1- Belediye binalarındaki elektrik arızalarının giderilmesinden.
                        <br/>
                        2- Belediye tesislerinin aydınlatılmasından.
                        <br/>
                        3-Sabit Pazar Yerleri ve Meydanlardaki Belediye cihazlarının elektrik  tesisatlarından,

                        arızalarının giderilmesinden ve teknik destek  sağlanmasından.
                        <br/>
                        4- Anons cihazlarından.
                        <br/>
                        5- Bilgisayar güç kaynaklarına elektrik temini ile ilgili destek hizmetlerinden.
                        <br/>
                        6- Belediye bünyesindeki trafo, pompa ve motorların elektrik donanımlarıyla ilgili bakım

                        onarımından.
                        <br/>
                        7- Emrindeki tüm araç, gereç ve cihazların korunmasından, temizliğinden ve hizmete hazır
                        tutulmasından
                        <br/>
                        8- Belediye Binalarında bulunan asansör, jeneratör, trafo, kompanzasyon panoları, paratoner
                        tesisatlarının aylık ve yıllık bakım ve test raporlarının iş ve işlemlerinden Müdüre karşı

                        sorumludur.


                        <br/>
                        Madde 16- Yol Ekibi Başşoförü : Yol Bakım Onarım birim sorumlusuna bağlı olarak çalışır ve birim sorumlusunun en yakın yardımcısıdır. Yol Bakım Onarım birim sorumlusu tarafından kendisine verilen görevlerin eksiksiz olarak yapılmasından, işçilerin eğitimi ve iş
                        <br/>
                        takibinden sorumludur.

                        <br/>

                        Madde 17- İnşaat Ekibi Şefliği :


                        <br/>
                        1.	Belediye hizmetlerinde kullanılan bina, tesis ve alanların bakım ve  onarımlarını yapmak veya yaptırmak.
                        <br/>
                        2.	İlçemizdeki kamu kurumlarından gelen araç ve gereç temini ile inşaat    yapım ve onarım (Boya, badana, seramik, kaynak, sıhhi tesisat vs.) taleplerinin stratejik plana uygunluğu ve başkanlık onayıyla meclis kararı alınarak uygulanmasını sağlamak.
                        <br/>
                        3.	Belediyemizin sorumluluğunda bulunan her türlü yollarda, geçit ve  köprülerde korkuluk, yağmursuyu ızgaraları vb. yapmak, mevcutların  bakım ve onarımını yapmak.
                        <br/>
                        4.	Anayol, cadde ve sokaklarda kaldırım üzerine parklanmaları önlemek amacıyla engelleyici unsurlar monte etmek ve ettirmek.
                        <br/>
                        5.	Belediyemizin diğer birimlerine gerekli araç, gereç ve iş gücü desteği  sağlamak.
                        <br/>
                        6.	İstinat duvarı ve merdivenli yol yapmak.
                        <br/>
                        7.	İnşaat Ekip Şefi  kendisine verilen görevlerin eksiksiz olarak yapılmasından, tesis ve emrindeki araçların korunmasından, temizliği ve göreve hazır tutulmasından Müdür Yardımcıları ve Müdüre karşı  sorumludur.


                        <br/>


                        Madde 18-Mühendisler – Mimarlar :

                        <br/>

                        1.	Yapılması istenen yapının planını, inşaat alanının yapıma uygun olup olmadığını incelemek, mühendislik hesapları yapmak, bunlarla ilgili projeler hazırlamak, gerekli malzeme ve donanımı hesaplamak.
                        <br/>
                        2.	İnşaat projeleri ile ilgili olarak yapıyı yaptıran kişi veya birimin istekleri   doğrultusunda proje ve ihale dosyası hazırlamak
                        <br/>
                        3.	İnşaatın değişik görünümlerinin taslak projelerini çizmek, gerekirse projede   düzenlemeler yapmak.
                        <br/>
                        4.	İnşaatı belli bir program dahilinde yürütmek, uygulamada ortaya çıkan proje   hatalarını düzeltmek.
                        <br/>
                        5.	Geçici ve kesin kabul komisyonlarında yer alarak inşaatın devir teslim işlemlerinin yapılmasını sağlamak.
                        <br/>
                        6.	Düzenlenecek, röleve, ataşman defteri, plankote, proje, hesap, tutanak, şantiye defteri ve işin yürütülmesi için gerekli diğer evrakın zamanında ve  usulüne uygun olarak hazırlanmasını ve kontrollük hizmetinde çalışanların görevlerini eksiksiz olarak yapmalarını titizlikle izlemek. Bu evrakı kontrol ettiği tarihleri yazarak imzalamak.
                        <br/>
                        7.	İşi, idarece onaylanmış projeler ve detaylara göre yaptırmak. Ancak, idare  tarafından verilen genel veya özel yetkiler çerçevesinde kalmak koşuluyla  proje, keşif ilavesi, detay ve tadilat resimlerini hazırlatarak onaylayıp  uygulamak üzere kontrol mühendisine ve müteahhide vermek, bilgi için de   idareye sunmak.
                        <br/>
                        8.	İdarece verilen projeleri, mahal listesi ve detayları incelemek, kendisi veya kontrol teşkilatında görülecek eksikleri saptamak. Gerekli gördüğü düzeltme önerilerini yapmak ve uygulama için idarenin iznini almak.
                        <br/>
                        9.	İdareden veya idarece yetkili kılınacak makamdan onay almak koşulu ile  müteahhide ilk keşif tutarından fazla iş yaptırmak.
                        <br/>
                        10.	Kusurlu imalatı düzelttirmek veya tamamen yıktırıp yeniden yaptırmak.
                        <br/>
                        11.	Aksayan çalışmaları hızlandırmak..
                        <br/>
                        12.	Sözleşme ve eklerindeki hükümlere uymak.


                        <br/>
                        Madde-19Teknikerler:
                        <br/>
                        1.	Yönetim ve denetimi kendisine verilen işlerin, sözleşme ve eklerine,  şartnamelere, fen ve sanat kurallarına uygun olarak ve iş programı   gereğince iyi bir biçimde yapılıp süresinde bitirilmesini sağlamakla görevli   olup sonuçlarından sorumludur.
                        <br/>
                        2.	Düzenlenecek, röleve, ataşman defteri, plankote, proje, hesap, tutanak, şantiye defteri ve işin yürütülmesi için gerekli diğer evrakın zamanında ve  usulüne uygun olarak hazırlanmasını ve kontrollük hizmetinde çalışanların  görevlerini eksiksiz olarak yapmalarını titizlikle izlemek. Bu evrakı kontrol   ettiği tarihleri yazarak imzalamak.
                        <br/>
                        3.	İşi, idarece onaylanmış projeler ve detaylara göre yaptırmakla yükümlüdür.  Ancak, idare tarafından verilen genel veya özel yetkiler çerçevesinde  kalmak koşuluyla proje, keşif ilavesi, detay ve tadilat resimlerini hazırlatarak  onaylayıp uygulamak üzere kontrol mühendisine ve müteahhide vermek,   bilgi için de idareye sunmak.
                        <br/>
                        4.	İdarece verilen projeleri, mahal listesi ve detayları incelemek, kendisi veya kontrol teşkilatında görülecek eksikleri saptamak. Gerekli gördüğü düzeltme  önerilerini yapmak ve uygulama için idarenin iznini almak.
                        <br/>
                        5.	Birim fiyat esası üzerinden yapılan işlerde, değiştirilmesi gerekli görülen imalatın yerine, birim fiyat ve tutar karşılaştırması yaparak işin işlevini  bozmamak koşulu ile başka bir imalat yapılması önerisinde bulunmak.
                        <br/>
                        6.	İdareden veya idarece yetkili kılınacak makamdan onay almak koşulu ile  müteahhide ilk keşif tutarından fazla iş yaptırmak.
                        <br/>
                        7.	Kusurlu imalatı düzelttirmek veya tamamen yıktırıp yeniden yaptırmak.
                        <br/>
                        8.	Aksayan çalışmaları hızlandırılmak.
                        <br/>
                        9.	Sözleşme ve eklerindeki hükümlere uymak.
                        <br/>
                        10.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.


                        <br/>
                        İŞÇİLER :
                        <br/>


                        Madde 20- Müdür, Müdür Yardımcıları, Şeflerin, birim sorumlularının emrinde Fen işlerinde çalışan  işçiler görevli bulundukları alanların yapım, bakım ve onarımlarından           sorumludurlar.
                        <br/>
                        Müdürlük bünyesindeki işçiler kullanılan araç, gereç ve teçhizatın bakım ve  onarımını yaparlar.

                        <br/>

                        ŞOFÖRLER VE OPERATÖRLER :

                        <br/>

                        Madde 21- Şoförler ve Operatörler kullandıkları araç ve iş makinelerinin göreve hazır olmaları için sürekli bakımlı, su ve akaryakıt ikmali yapılmış durumda  tutulmasından, görev dönüşü bakımlarının yapılmasından Amirlerine karşı  sorumludurlar.
                        <br/>


                        Şoförler ve Operatörler kullandıkları aracın ve iş makinesinin en iyi şekilde, nerede ve nasıl kullanılacağını bilmekle yükümlüdürler.
                        <br/>


                        GECE BEKÇİLERİ (GÜVENLİK GÖREVLİLERİ):

                        <br/>

                        Madde 22- Görevlendirildiği mahallin gece-gündüz bekçiliğini yapar. Depo, işyerleri ve büroların kapı ve pencerelerinin kilitli olup olmadığını kontrol eder. Önemli yerlerdeki lambaların daima yanar vaziyette olmasını sağlar. Mesai bitiminden sonra herhangi bir yabancının iş yerine sokulmaması için gerekeni  yapar. Büro ve işyerlerinde yanar vaziyette elektrik ocakları, her türlü sobaları kontrol eder.
                        <br/>
                        Görevlendirildiği mahallin güvenliğinden ve yangından korunmasından sorumludur. Verildiği takdirde bekçi saatlerini en iyi şekilde korumak zorundadır. Kasıtlı olarak saatleri bozan, düşüren ve kayıp edenlere tazmin ettirildiği gibi haklarında yasal işlem yapılır.
                        <br/>
                        Şefine,  Müdür Yardımcısına ve  Müdüre karşı sorumludur.



                        <br/>

                        ÜÇÜNCÜ BÖLÜM
                        <br/>
                        DESTEK HİZMETLERİ BİRİMLERİ

                        <br/>

                        Yazı İşleri ve Tahakkuk Birimi :
                        <br/>
                        Madde 23- Müdürlüğün tüm yazışmaları ile ilgili personelin her türlü özlük    haklarına ilişkin yazışma işlemleri yapmak ve Müdürlüğün ihtiyaçlarını bildirmek, alınmasını sağlamak, kullanıma hazır hale getirmek ve sözleşmeler ile hak edişleri düzenlemek, Tahakkuk müzekkeresi ve verile emri düzenlemek, müdüriyetin satın alma, ihale, kiralama, avans işlemleriyle şartname tanzim hususları ve ayniyata ilişkin tüm işlemleri talimatnamelere uygun olarak işlerin      takibinden sorumludur.

                        <br/>

                        Daktilograf :
                        <br/>
                        Madde 24- Yazı işleri birim sorumlusuna bağlı olarak çalışır. Birim sorumlusundan aldığı görevleri zamanında ve doğru bir şekilde yapılmasından gelen ve giden evrak kaydı ve      kullandığı makinelerin temizliği, bakımı ve korunmasından sorumludur.

                        <br/>

                        Santral Görevlisi :
                        <br/>
                        Madde 25- Müdürlüğün iç ve dış görüşmelerini, zimmetinde bulunan santralin           aksaksız çalışmasından sorumlu olup, her türlü görev dışı görüşmelere mani olmak yetkisine sahiptir. Ancak önleyemediği takdirde müdüre bildirir. Müdür Yardımcıları ve Müdüre karşı sorumludur.


                        <br/>
                        Puantörler :
                        <br/>
                        Madde 26-
                        <br/>
                        1- Personelin Sağlık kurumları müesseseleri ile olacak her türlü ilişkiler için lüzumlu belgeleri doldurur ve amirine imzalatır.
                        <br/>
                        2- Sağlık kurumundan verilecek raporları takip edip, Belediye Personel Müdürlüğü’ne sevk eder, bir nüshasını dosyada muhafaza eder.
                        <br/>
                        3- Personelin izin durumlarını yapılan izin çizelgesine göre takip eder ve aksayan durumları günü gününe amirine haber verir.
                        <br/>
                        4- Personelle yöneticiler arasında daimi irtibat sağlar.
                        <br/>
                        5- Ay sonunda puantajları hazırlar, tetkik eder ve tasdik için amirine sunar.
                        <br/>
                        6- İşe giriş bildirgelerinin gecikmesinden dolayı diğer tüm yasal işlere sorumluluk taşır.
                        <br/>
                        7- Yazışmaları zamanında ve doğru olarak ilgili birime bildirmekle sorumludur.
                        <br/>
                        8- Birim sorumlusuna  ve diğer amirlerine karşı sorumludur.
                        <br/>


                        Madde 27- Hizmetliler :
                        <br/>
                        Görevlendirildiği bölümün günlük temizliğini yapmak, dairenin toplu temizlik günlerine katılmak, görev dışı olmamak kaydıyla memurların yaptırmak stediği işleri yapmakla müdür yardımcısına karşı sorumludur.
                        <br/>
                        DÖRDÜNCÜ BÖLÜM
                        <br/>
                        ÇALIŞMA ŞEKLİ VE İŞLEYİŞİ

                        <br/>

                        Madde 28- Görevin Alınması :
                        <br/>
                        1.	Görev, Başkanın veya Müdürlüğün bağlı bulunduğu Başkan Yardımcısının vereceği plan, program ve direktiflerinden alınır.
                        <br/>
                        2. Görev, müdürlüğe evrakın gelmesiyle alınır.
                        <br/>
                        3. Görev, müdürlüğe gelen evrakın gereklerinden alınır.
                        <br/>
                        4. Görev mevcut hizmetlerin idamesi için gereklerden çıkarılır.


                        <br/>
                        <br/>


                        Madde 29- Görevlerin Planlanması :
                        <br/>


                        Alınan emir mevcut imkânlar nazarı dikkate alınarak görev haline getirilir ve incelenir. Koordine edilir, müsveddeye alınır. Bağlı birime ve şefe , birim sorumlusuna verilir. Uygun görülürse resmi yazıların hazırlanmasına ait yönetmelik esaslarına göre yazılır. Paraf veya imzalanarak işleme konulur.

                        <br/>

                        Madde 30- Görevin Yürütülmesi :


                        <br/>
                        Mevcut mevzuat ve alışılmış usul ve teamüller göz önüne alınarak
                        <br/>
                        görevin en iyi bir şekilde yürütülmesine çalışılır.
                        <br/>


                        Madde 31-İş Bölümü ve Koordinasyon :

                        <br/>

                        1- Şefler, birim sorumluları, mühendisler, tekniker ve teknisyenler arasındaki işbirliği müdür  yardımcıları tarafından sağlanır.
                        <br/>
                        2- Personel arasındaki işbirliği bağlı bulunduğu şef, birim sorumluları tarafından sağlanır.

                        <br/>

                        Madde 32- Evraka Yapılacak İşlem ve Arşivleme :
                        <br/>
                        Gelen-giden evrak usulüne uygun olarak kaydedilir. İşlemler  müdürlükçe havale edilen birimce ivedilikle sonuçlandırılır ve durum yazıyla ilgilisine bildirilir. Arşiv yönetmeliğine uygun arşivleme yapılır.

                        <br/>

                        BEŞİNCİ BÖLÜM
                        <br/>
                        ÇEŞİTLİ HÜKÜMLER

                        <br/>

                        Madde 33- Kıyafet :

                        <br/>

                        Müdürlükte idari bölümde çalışan personel sivil olarak görev yapar.  Arazide görev yapan işçi personel; yazlık ve kışlık olmak üzere iş elbisesini ve  kişisel koruyucu donanım malzemelerini kullanır.

                        <br/>

                        Madde 34-  İzin Hakkı :
                        <br/>


                        Müdürlük personeli yıllık izinleri 657 sayılı Devlet Memurları Kanunu ile 1475 sayılı İş Kanununa göre ve hizmetleri aksatmayacak şekilde düzenlenir. İzin listeleri müdürlükçe düzenlenir ve ilgili Başkan Yardımcısı tarafından onaylanarak uygulanır. Mazeret izinleri Başkan Adına sorumlu Başkan Yardımcısının onayı ile olur.


                        <br/>
                        Madde 35- Disiplin Hükümleri :


                        <br/>
                        Devlet Memurları Kanunu ve Belediye Memur ve Müstahdemleri Nizamnamesinin ilgili maddelerinden ön görülen fiil ve hallerde yine bu   maddelerde yazılı olan disiplin cezaları uygulanır.




                        <br/>
                        Madde 36- Müdürlük İçi Denetim - Cezai Fiil ve Haller :




                        <br/>
                        1-	Personel en yakın amirinden başlayarak sürekli denetime tabi tutulur.
                        <br/>
                        2-	Personelin çalışma durumu ile kılık kıyafeti ve mesai saatlerine riayeti gözetim altında bulundurulur.
                        <br/>
                        3-	Denetim sırasında personelin iş sahipleri ve müteahhitlerle olan  tutum ve davranışlarından aşağıdaki hususlar göz önünde tutulur.
                        <br/>
                        a)	Dilekçe ile şikayet eden vatandaşlarla, müteahhitlerin talepleri (Mevzuat, Adalet ve Dürüstlük) ilkeleri dahilinde objektif bir şekilde değerlendirilerek zamanında işleme tabi tutulur.
                        <br/>
                        b)	Başkasının yerine müracaat kabul edilmez.
                        <br/>
                        c)	Müracaat sahiplerine asla işlem önceliği ve ayrıcalık tanınmaz.
                        <br/>
                        d)	İş takipçiliği yapılmasına katiyen müsamaha gösterilmez.
                        <br/>
                        e)	Normal iş temasları dışında müteahhitlerin ve müracaatçıların büroları işgal edilmesine izin verilmez. Müsamahakâr davranılmaz,  asla özel işlemlere tabi tutulmaz.

                        <br/>

                        4-	İlk kademelerden başlamak üzere denetim yapacak kademeler    aşağıdadır.

                        <br/>

                        a)	Personel, bağlı bulunduğu şef, birim sorumlusu tarafından devamlı denetim altında bulundurulur.
                        <br/>
                        b)	Şef, birim sorumlusu ve mahiyetindeki personel, müdür yardımcıları tarafından
                        <br/>
                        devamlı denetim altında bulundurulur.
                        <br/>
                        c)	Müdür Yardımcıları, şefler, birim sorumluları ve tüm personel Fen İşleri Müdürü
                        <br/>
                        tarafından denetim altında bulundurulur.


                        <br/>
                        ALTINCI BÖLÜM
                        <br/>
                        SON HÜKÜMLER

                        <br/>

                        Madde 37- Yönetmelikte Bulunmayan Hükümler :
                        <br/>


                        Bu yönetmenlikte bulunmayan hususlarda Belediye Başkanının emri, talimat ve Olurları ile işler sevk ve idare edilir.

                        <br/>

                        Madde 38- Yürürlük :

                        <br/>

                        Bu Yönetmelik Gebze Belediye Meclisinin Kabulü ve ilamı ile yürürlüğe girer.

                        <br/>

                        Madde 38- Yürütme :

                        <br/>

                        Bu madde dahil 38 maddeden ibaret iş bu  Yönetmelik Hükümlerini Belediye Başkanı yürütür.
<br/>

                    </p>
                </section>

            </div>
        </div>
    );
};

export default Hafızaltıntaş;
