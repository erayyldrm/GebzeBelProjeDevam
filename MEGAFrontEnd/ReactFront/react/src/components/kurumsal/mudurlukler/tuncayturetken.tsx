import React from "react";

const Yusufataseven: React.FC = () => {
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
                        src="/images/kurumsal/mudurlukler/avatar-19.jpg"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">Park ve Bahçeler Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" />  Tuncay TÜRETKEN
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" /> parkbahceler@gebze.bel.tr
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
                        AMAÇ, KAPSAM, DAYANAK VE TANIMLAR
                        <br/>
                        AMAÇ:
                        <br/>
                        Madde 1- Bu yönetmeliğin amacı Gebze Belediye Başkanlığı Park ve Bahçeler Müdürlüğünün kuruluş, görev, yetki ve sorumlulukları ile çalışma usul ve esaslarını düzenlemektir.
                        <br/>
                        KAPSAM:
                        <br/>
                        Madde 2- Bu yönetmelik Park ve Bahçeler Müdürlüğünde görevli personelin çalışma usul, görev, yetki ve sorumluluklarını kapsar.
                        <br/>
                        DAYANAK:
                        <br/>
                        Madde 3- Gebze Belediye Meclisinin 22.02.2007 tarihli, 26442 sayılı kararı ile kurulmuş olan Park ve Bahçeler Müdürlüğüne ait bu yönetmelik 5393 sayılı Belediye Kanununun 48’nci ve Resmi Gazetede yayımlanarak yürürlüğe giren “Belediye ve Bağlı Kuruluşları İle Mahalli İdare Birlikleri Norm Kadro İlke Ve Standartlarına Dair Yönetmelik” Hükümlerine istinaden hazırlanmıştır.
                        <br/>
                        TANIMLAR
                        <br/>
                        Madde 4 - Bu yönetmelikte
                        <br/>
                        a)	Belediye : Gebze Belediye Başkanlığını,
                        <br/>
                        b)	Başkan : Gebze Belediye Başkanını,
                        <br/>
                        c)	Meclis : Gebze Belediye Meclisini,
                        <br/>
                        d)	Encümen : Gebze Belediyesi Encümenini,
                        <br/>
                        e)	Müdürlük : Park ve Bahçeler Müdürlüğünü,
                        <br/>
                        f)	Müdür : Park ve Bahçeler Müdürünü,
                        <br/>
                        g)	Şef: Park ve Bahçeler Müdürlüğü şefliğini,
                        <br/>
                        h)	Temsilcilik: Strateji Geliştirme  ve Kalite Yönetim temsilciliğini,
                        <br/>
                        i)	Personel : Park ve Bahçeler Müdürlüğünde çalışan memur, sözleşmeli memur , işçi
                        <br/>
                        olarak çalışanlarını ifade eder.
                        <br/>
                        <br/>
                        <br/>
                        İKİNCİ BÖLÜM
                        <br/>
                        TEŞKİLAT VE BAĞLILIK
                        <br/>
                        <br/>
                        <br/>
                        TEŞKİLAT
                        <br/>
                        <br/>
                        <br/>
                        Madde 5-(1) Park ve Bahçeler Müdürlüğü Personelinin çalışma usul ve esasları Şekil 1’deki Organizasyon Şemasına göre yapılmaktadır.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Şekil 1 - Park ve Bahçeler Müdürlüğü Organizasyon Şeması
                        <br/>
                        <br/>
                        <br/>
                        (2)Müdürlük; Müdür, şef, strateji geliştirme ve kalite yönetim temsilcisi,  teknik personel, evrak kayıt /sekreter, bahçıvan, şoför, boyacı, kaynakçı, elektrikçi, inşaat ustası, taşınır kayıt kontrol yetkilisi,
                        <br/>
                        <br/>
                        <br/>
                        BAĞLILIK
                        <br/>
                        Madde 6- Park ve Bahçeler Müdürlüğü, Belediye Başkanına veya görevlendireceği Başkan Yardımcısına bağlıdır. Başkan, bu görevi bizzat veya görevlendireceği kişi eliyle yürütür.
                        <br/>
                        <br/>
                        <br/>
                        ÜÇÜNCÜ BÖLÜM
                        <br/>
                        GÖREV, YETKİ VE SORUMLULUK
                        <br/>
                        MÜDÜRLÜĞÜN GÖREV VE YETKİLERİ :
                        <br/>
                        Madde 7- Park ve Bahçeler Müdürlüğü Gebze ilçesi sınırlarında yetişkinlerin, gençlerin ve çocukların re kreatif faaliyetlerine hizmet etmesi amacı ile parklar dahilinde yürüyüş yolları, bisiklet yolları, spor alanları, yeşil alanlar tesis eder. Cadde, sokak ve meydanlarda ağaçlandırma ve yeşil alan düzenlemeleri yaparak yeşil alan miktarının artması ile hem ilçe ekolojisinin sürekliliğini sağlamaya katkıda bulunur hem de estetik peyzaj görünümleri oluşturur. Bahsi geçen tüm yapısal ve bitkisel öğelerin bakım, onarım, iyileştirme çalışmaları da Park ve Bahçeler Müdürlüğü’nün görev ve yetkileri arasındadır.
                        <br/>
                        Bu genel tanım çerçevesinde Park ve Bahçeler Müdürlüğü’nün görev ve yetkileri aşağıdaki gibidir;
                        <br/>
                        GENEL GÖREV TANIMLAR
                        <br/>
                        1.	İmar Planında Dinlenme Parkı, Çocuk Bahçesi, Spor Alanları, Yaya Bölgeleri ve Yeşil Alan olarak tesis edilecek yerleri tespit ederek projelendirip ve uygulamasını yapmak ya da ihale yolu ile yaptırmak.
                        <br/>
                        2.	Mevcut yeşil alanlarımızın ve parklarımızın bakım (budama, form budama, yabani ot alımı, çapalama, ilaçlama, gübreleme, temizlik, sulama vs.) ve onarımını yapmak veya ihale yolu ile yaptırmak.
                        <br/>
                        3.	Ağaçlandırma çalışmaları yapmak veya yaptırmak. (Toplu ağaçlandırma ve yol, refüj ağaçlandırmaları yapmak)
                        <br/>
                        4.	İlçenin yeşillendirilmesi için sera ve fidanlık alanlarımızı ileriye yönelik genişletmek, yeni bitkisel materyaller üretmek ve satın almak.
                        <br/>
                        5.	Kamu Kurum ve Kuruluşlarından gelen taleplere, müdürlüğün yürütmekte olduğu çalışmalar dahilinde yardımcı olmak.
                        <br/>
                        6.	Yeşil Alanlarda otomatik sulama tesisatlarının kurulması, Gebze genelinde bulunan kent mobilyalarının ve park donatılarının temini, montesi, tamir onarım ve bakımı ile ilgili çalışmalar yapmak.
                        <br/>
                        7.	İlçenin estetiği için süsleyici materyalleri (çiçeklik, havuz) projelendirmek, uygulama yapmak veya yaptırmak.
                        <br/>
                        8.	Vatandaşlardan gelen dilek ve şikâyetleri değerlendirilerek sonuçlandırılmasını sağlamak.
                        <br/>
                        9.	Görev Alanı İçindeki Mal Ve Hizmet Alımlarını İhale Yoluyla Teminini Sağlamak.
                        <br/>
                        10.	Çalışmaları sırasında işçi sağlığı ve iş güvenliği kurallarına uygun davranmak ve yönetimindeki personeli bu konuda bilgilendirerek denetlemek
                        <br/>
                        11.	Kalite Yönetim Sistemi Çalışmalarını Uygulamak Ve Geliştirmek
                        <br/>
                        <br/>
                        <br/>
                        MÜDÜRLÜĞÜN SORUMLULUĞU
                        <br/>
                        Madde 8- (1) Park ve Bahçeler Müdürlüğü, Belediye Başkanınca verilen ve bu Yönetmelikte tarif edilen görevler ile ilgili yasalarda belirtilen görevleri gereken özen ve çabuklukla yapmak ve yürütmekle sorumludur.
                        <br/>
                        <br/>
                        <br/>
                        DÖRDÜNCÜ BÖLÜM
                        <br/>
                        PERSONELİN UNVAN ve NİTELİKLERİ İLE GÖREV,YETKİ
                        <br/>
                        SORUMLULUKLARI
                        <br/>
                        <br/>
                        <br/>
                        Personelin Unvan ve Nitelikleri
                        <br/>
                        MADDE 9 : (1) Park ve Bahçeler Müdürlüğünde görev alacak müdür unvanı için 657 Sayılı Kanunun atamaya ilişkin maddelerinde öngörülen ilkeler ve “Mahalli İdareler Personelinin Görevde Yükselme Ve Unvan Değişikliği Esaslarına Dair Yönetmelik” hükümleri doğrultusunda atanır.
                        <br/>
                        (2) Şef, Birim Sorumlusu, Büro Personeli, Uzman ve görev yapan diğer memurlar  657 Sayılı Devlet Memurları Kanunun atamaya ilişkin maddelerinde öngörülen ilkeler doğrultusunda atanır.
                        <br/>
                        <br/>
                        <br/>
                        (3) Müdürlükte uygun nitelik ve sayıda memur, kadrolu işçi, geçici işçi, sözleşmeli personel, Belediye Şirketi Personeli ve  hizmet alımı yoluyla çalıştırılan personel görev yapar.
                        <br/>
                        <br/>
                        <br/>
                        Madde 10- Müdürün Nitelik Ve Görevleri:
                        <br/>
                        GÖREV ÜNVANI: MÜDÜR
                        <br/>
                        Müdürün Görev Ve Sorumlulukları
                        <br/>
                        <br/>
                        <br/>
                        1.	Müdürlüğü Başkanlık huzurunda temsil etmek.
                        <br/>
                        2.	Müdürlüğün yönetiminde tam yetkili ve sorumlu kişidir.
                        <br/>
                        3.	Çalışmaları yasal olmak kaydıyla yazılı ve sözlü emirlerle yürütmek.
                        <br/>
                        4.	Müdürlüğün sevk, idare ve disiplininden sorumludur.
                        <br/>
                        5.	Personeli arasında yazılı görev dağılımı yapmak.
                        <br/>
                        6.	Müdürlüğün harcama yetkilisi ve Müdürlükte çalışan personelin birinci sicil amiri olup memur personelin başarı ve performans değerlendirmesini yapmak.
                        <br/>
                        7.	Müdürlüğün çalışma usul ve esaslarını belirleyip, programlayarak, çalışmaların bu programlar doğrultusunda yürütülmesini sağlamak.
                        <br/>
                        8.	Müdürlük Bünyesinde görev yapan personelin tüm iş ve işlemlerinin zamanında ve doğru olarak yerine getirilmesini sağlamak.
                        <br/>
                        9.	Park ve Bahçeler Müdürlüğü ile diğer Müdürlükler arasında koordinasyonu sağlar.
                        <br/>
                        10.	Üst makamlarca verilecek benzeri nitelikteki diğer görevleri yerine getirmek.
                        <br/>
                        11.	Personelin yıllık izin planlarını düzenlemek ve kullandırmak.
                        <br/>
                        12.	Müdürlüğün çalışmaları ile ilgili personelle mutat bilgilendirme ve danışma toplantıları düzenlemek, bu toplantılardan bağlı bulunduğu başkan yardımcısını bilgilendirmek.
                        <br/>
                        13.	Park yapımında veya yollarda çalışan personelin (İSG) güvenlik tedbirlerini almak.
                        <br/>
                        14.	İdari ve Teknik Büro elamanlarının görev alanlarını tespit etmek ve uygulamalarını takip etmek.
                        <br/>
                        15.	Nöbetçi personel listesini hazırlamak veya onaylayarak uygulama ve takibini yapmak.
                        <br/>
                        16.	Personelin mesaiye riayetlerini sağlamak, bunun için gerekli tedbirleri almak.
                        <br/>
                        17.	Yüklenici sıfatıyla iş yapan kişi veya kuruluşların hak edişlerinin tanzimini sağlanmak ve tahakkuklarını yapmak.
                        <br/>
                        18.	Büyükşehir Belediyesi ile diğer kamu kurumları ile ilgili yapılması gereken hizmetler için koordinasyon kurmak, yazışmalar yapmak ve takip etmek.
                        <br/>
                        19.	Mevcut park, refüj, yollara dikilmiş ağaçlar, yeşil alan ve üzerindeki tesis ve binaların bakımı ve onarımları için yıllık ve aylık programlar yapmak ve uygulamak.
                        <br/>
                        20.	Muayene ve kabul komisyonları teşekkül ettirip üst Makamın onayına sunmak.
                        <br/>
                        21.	Müteahhitlerin iş bitirme belgelerini hazırlatmak.
                        <br/>
                        22.	Belediye Encümeni ve Belediye Meclisi kararlarından müdürlük faaliyeti ile ilgili olanları uygulatmak, ayrıca tarifeye bağlı işlemlere esas olmak üzere yıllık faaliyetleri Meclise sunmak.
                        <br/>
                        23.	Vatandaşa çevre bilincini aşılamak amacıyla her türlü bilgilendirme ve tanıtım çalışmalarını ilgili müdürlüklerle beraber organizasyonunu sağlamak ve vatandaş şikâyet ve talepleri değerlendirmek.
                        <br/>
                        24.	Harcama yetkilisi olarak müdürlüğün ihtiyaçlarının temini, harcamaların gerçekleştirilmesi ve kontrolünü sağlamak.
                        <br/>
                        25.	Müdürlük bütçe ve faaliyet raporunu hazırlamak.
                        <br/>
                        26.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        27.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        28.	Disiplin amirleri yönetmeliğince kendisine verilen görevi yapmak.
                        <br/>
                        Müdürün Organizasyondaki Yeri
                        <br/>
                        1.	 Direkt olarak Başkan Yardımcısı’na bağlıdır.
                        <br/>
                        2.	 Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Başkan Yardımcısı’na karşı sorumludur.
                        <br/>
                        Müdürlük Kadrosu İçin Aranan Özellikler
                        <br/>
                        1.	 Üniversite mezunu olmak. (Peyzaj Mimarı, Ziraat Mühendisi, Orman Mühendisi vb.)
                        <br/>
                        2.	 Yeterli bilgisayar bilgisine sahip olmak.
                        <br/>
                        3.	 Yöneticilik bilgi ve tecrübesine sahip olmak.
                        <br/>
                        4.	 Belediye mevzuatına hakim olmak.
                        <br/>
                        5.	 Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        Madde 11- Strateji Geliştirme Ve Kalite Yönetim Temsilcisi Nitelik Ve Görevleri:
                        <br/>
                        GÖREV ÜNVANI: STRATEJİ GELİŞTİRME VE KALİTE YÖNETİM TEMSİLCİSİ
                        <br/>
                        Strateji Geliştirme Ve Kalite Yönetim Temsilcisinin Görev Ve Sorumlulukları
                        <br/>
                        1.	Belediye Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve ISO 9001:2015 Kalite Yönetim Sistemi uygulamalarında birim temsilcisi olarak görev yapar ve hazırlama çalışmalarında bulunmak.
                        <br/>
                        2.	 Birimi ile ilgili dönemsel olarak performans ve kalite hedeflerini belirler, izler ve bu hedeflerine uygun faaliyetlerde bulunmak.
                        <br/>
                        3.	Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve ISO 9001:2015 Kalite Yönetim Sistemi ile ilgili birim aylık raporlarını düzenleyerek üst yönetime sunmak.
                        <br/>
                        4.	Belediye Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı uygulamalarına ve Kalite politikasının benimsenmesine yönelik olarak çalışmalarda bulunur ve gereklerini yerine getirilmesini sağlamak.
                        <br/>
                        5.	Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet	Raporu, İç Kontrol Eylem Planı ve Kalite El Kitabında birimi ile ilgili bölümü hazırlar ve yılda bir kez gözden geçirmek, gerekirse revize etmek.
                        <br/>
                        6.	İç denetim faaliyeti kapsamında denetçilere birimi ile ilgili konularda bilgi verir ve Biriminde Kalite Yönetim Sistemi’nin etkinliği konusunda rapor hazırlar ve Yönetimin Gözden Geçirmesi toplantısına sunmak üzere Kalite Yönetim Koordinatörlüğüne iletmek.
                        <br/>
                        7.	Sistemde birimi ile ilgili doğabilecek uygunsuzlukların belirlenmesi ve giderilmesi için düzeltici, önleyici faaliyetlerin planlanması ve takibi işlemlerini yapmak.
                        <br/>
                        8.	Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet	Raporu, İç Kontrol Eylem Planı ve Kalite ile ilgili kurum içi ve kurum dışı toplantılara ve eğitimlere katılmak.
                        <br/>
                        9.	Yönetim tarafından oluşturulmuş olan diğer kurallar çerçevesinde ve Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite Yönetim Sistemi içinde hazırlanmış dokümanlarda belirtilen diğer görevlerini yerine getirmek.
                        <br/>
                        <br/>
                        <br/>
                        Strateji Geliştirme Ve Kalite Yönetim Temsilcisinin Organizasyondaki Yeri
                        <br/>
                        1.	Direkt olarak Birim Müdürü’ne bağlıdır.
                        <br/>
                        2.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Birim Müdürü’ne Strateji Geliştirme ve Kalite Yönetim Koordinatörüne karşı sorumludur.
                        <br/>
                        Bu Kadro İçin Aranan Özellikler
                        <br/>
                        1.	 Tercihen üniversite mezunu olmak.
                        <br/>
                        2.	 Yeterli bilgisayar bilgisine sahip olmak.
                        <br/>
                        3.	 Stratejik Plan, Performans Esaslı Bütçeleme mevzuatına hakim olmak.
                        <br/>
                        4.	 Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        Madde 12- Teknik Personel Nitelik Ve Görevleri:
                        <br/>
                        GÖREV ÜNVANI: TEKNİK PERSONEL
                        <br/>
                        Teknik Personelin Görev Ve Sorumlulukları
                        <br/>
                        <br/>
                        <br/>
                        1.	Müdürlük bünyesinde yapılan parkların ve yeşil alanların bakım onarım ve benzeri işlerinde kontrol teşkilatında görev almak.
                        <br/>
                        2.	Müdürlük bünyesindeki yapım işlerini rutin olarak denetlemek.
                        <br/>
                        3.	Müdürlük iş akışına göre verilen görevleri yerine getirmek
                        <br/>
                        4.	Müdürlük çalışmaları ile ilgili yazıları yazmak, bilgi toplamak ve dağıtmak. Müdürlük içi çalışmaların aylık ve yıllık raporlarının hazırlanmasını (derlenmesini) temin etmek.
                        <br/>
                        5.	İhale Komisyonları tarafından yapılan veya yaptırılan bütün işlerle ilgili yazışmaları yapmak ve onaylarını almak.
                        <br/>
                        6.	İhale kararlarının yüklenicilere yasal süresi içerisinde bildirmek, sözleşme yapılmasını temin etmek.
                        <br/>
                        7.	Hak ediş raporlarının tahakkuk müzekkerelerini düzenleyerek müdür veya vekilinin onayından sonra Mali Hizmetler Müdürlüğüne ulaştırmak.
                        <br/>
                        8.	4734 Sayılı Kamu İhale Kanunu çerçevesinde yapımına karar verilen işlerin dosyalarını hazırlamak, gerekli onayları almak, sonuçlandırmak.
                        <br/>
                        9.	Bu yapım ve hizmet ihalelerinin 506 sayılı S.S.K Kanununa göre ilgili kuruma bildirmek ve aynı kurumdan ilişiksiz belgesi istemek ve yüklenici veya taşeron kesin teminatının çözülmesini sağlamak.
                        <br/>
                        10.	Yapım hizmet vb. sözleşmeler sırasında alınan kesin teminat veya mektuplarının uygun bir belgeyle Mali Hizmetler Müdürlüğüne teslim etmek ve dosyalarına şerh koyarak bilginin devamlılığını sağlamak
                        <br/>
                        11.	Kendi ekiplerinin yıllık, aylık, haftalık ve günlük programını yapmak, çalışmalarını sürdürmek.
                        <br/>
                        12.	Halkın park ve bahçeler konusunda çeşitli dilek, talep ve şikâyetini inceleyerek gerekli araştırma ve çalışmaları yaptıktan sonra gerekli yanıtları ve aydınlatıcı bilgileri vermek.
                        <br/>
                        13.	Bünyesindeki personelin çalışma esnasında güvenlik tedbirlerini almak ve disiplinsizlikleri önlemek
                        <br/>
                        14.	Müdürlük çalışmaları ile ilgili olarak Büyükşehir Belediyesi veya ilgili birimlerle koordineli çalışmak, israfı önlemek, verimi arttırmak.
                        <br/>
                        15.	Bünyesinde çalışan personelin kullandığı malzemeleri itinalı korunmasını sağlamak, ihtiyaç duyulan malzemeyi ilgili müdürlüğe iletmek ve talebini yapmak.
                        <br/>
                        16.	Müdürden gelen talimata göre ihtiyaç duyulan tüm kamu kurum ve kuruluşlarından müracaatlarına göre gerekli tespitin yapılması ve uygun olanların yerine getirilmesini sağlamak,
                        <br/>
                        17.	Personelin çalışmalarında kullandığı alet ve ekipmanların, çim makinelerinin bakım ve onarımını yapmak, bu aletlerin korunmasını ve çalışır halde bulunmasını temin etmek. Herhangi bir aksaklık halinde ilgili müdürü bilgilendirmek.
                        <br/>
                        18.	Parkların ve yeşil alanların yapım ve onarım işlemlerinin kontrolünde sürveyan olarak görev yapmak.
                        <br/>
                        19.	Yeni park ve rekreasyon alanları için ön etüt çalışmaları (tapu sicil kayıtları, imar durumunun değerlendirilmesi) projelendirme (alanın ölçülendirilmesi, proje çizimi, keşif ve maliyet hesapları) çalışmalarını yürütmek. Park sicil dosyalarının hazırlanmasını sağlamak.
                        <br/>
                        20.	Zirai ilaçlama ve budama çalışmaları yapmak
                        <br/>
                        21.	Kaynak atölyesi ve araçların sevk ve idaresini sağlamak.
                        <br/>
                        22.	Sera ve fidanlıktaki tüm bitkilerin bakım ve üretim işlerinin (sulama, gübreleme, ilaçlama, yabancı ot mücadelesi, fidanların repikaj ve ihtiyaca göre kap değişimi yaptırmak) düzenli ve tekniğine uygun şekilde yürütülmesini sağlamak.
                        <br/>
                        23.	Çalışmaları sırasında işçi sağlığı ve iş güvenliği kurallarına uygun davranmak ve yönetimindeki personeli bu konuda bilgilendirerek denetlemek
                        <br/>
                        24.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        25.	Üstlerinden aldığı emirler doğrultusunda ihtiyaca binaen araç kullandırabilir.
                        <br/>
                        <br/>
                        <br/>
                        Teknik Personelin Organizasyondaki Yeri
                        <br/>
                        1.	Direkt olarak Birim Müdür’üne bağlıdır.
                        <br/>
                        2.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Müdür’e karşı sorumludur.
                        <br/>
                        <br/>
                        <br/>
                        Bu Kadro İçin Aranan Özellikler
                        <br/>
                        1.	Üniversite mezunu olmak.
                        <br/>
                        2.	Bilgisayar konusunda tecrübeli olmak.
                        <br/>
                        3.	Alanında yeterli tecrübeye sahip olmak.
                        <br/>
                        4.	Toplam kalite anlayışına sahip olmak.
                        <br/>
                        Madde 13- Evrak Kayıt Sorumlusu/Sekreter Nitelik Ve Görevleri
                        <br/>
                        GÖREV ÜNVANI: EVRAK KAYIT SORUMLUSU/SEKRETER
                        <br/>
                        Evrak Kayıt Sorumlusunun/Sekreterin  Görev Ve Sorumlulukları
                        <br/>
                        <br/>
                        <br/>
                        1.	Tahakkuk ve muhasebe işlemlerini yürütmek.
                        <br/>
                        2.	Birimine gelen evrakları teslim almak.
                        <br/>
                        3.	Büro makinelerinin kullanımı ve her türlü hasara karşı korunması ve takibini yapmak.
                        <br/>
                        4.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        5.	Çalışmaları sırasında işçi sağlığı ve iş güvenliği kurallarına uygun davranmak ve yönetimindeki personeli bu konuda bilgilendirerek denetlemek
                        <br/>
                        6.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        7.	Personel Özlük Dosyalarının takibini yapmak.
                        <br/>
                        Evrak Kayıt Sorumlusunun/Sekreterin  Organizasyondaki Yeri
                        <br/>
                        1.	Direkt olarak Birim Müdür’üne bağlıdır.
                        <br/>
                        2.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Birim Müdür’üne karşı sorumludur.
                        <br/>
                        Bu Kadro İçin Aranan Özellikler
                        <br/>
                        1.	 En az Lise ve dengi meslek lisesi mezunu olmak.
                        <br/>
                        2.	 Bilgisayar konusunda tecrübeli olmak.
                        <br/>
                        3.	 Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Madde 14- İşçi Personel Nitelik ve Görevleri:
                        <br/>
                        GÖREV ÜNVANl: BAHÇİVAN
                        <br/>
                        Bahçivanın Görev Ve Sorumlulukları
                        <br/>
                        1.	Sera, fidanlık ve her türlü dış mekân bitki üretimi ve bakımını yapmak.
                        <br/>
                        2.	İç mekân bitkilerin üretimi ve bakımını yapmak.
                        <br/>
                        3.	Kamu kurum ve kuruluşların iç mekân bitkilerinin periyodik bakımını yapmak.
                        <br/>
                        4.	Budama ve ağaç kesimi yapmak.
                        <br/>
                        5.	Fide ekimi ve dikimi yapmak.
                        <br/>
                        6.	Park, bahçe ve yol kenarlarının çimlendirme işlemlerini yapmak.
                        <br/>
                        7.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        8.	Çalışmaları sırasında işçi sağlığı ve iş güvenliği kurallarına uygun davranmak ve yönetimindeki personeli bu konuda bilgilendirerek denetlemek
                        <br/>
                        9.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        10.	Üstlerinden aldığı emirler doğrultusunda ihtiyaca binaen araç kullandırabilir.
                        <br/>
                        Bahçivanın Organizasyondaki Yeri
                        <br/>
                        1.	Direkt olarak 	ilgili Teknik Personele bağlıdır.
                        <br/>
                        2.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekte  Birim Müdür’üne ve ilgili Teknik Personele bağlıdır.
                        <br/>
                        Bu Kadro İçin Aranan Özellikler
                        <br/>
                        1.	 İlköğretim, lise ve dengi meslek okulu mezunu olmak.
                        <br/>
                        2.	 Bahçıvanlık konusunda tecrübeli olmak.
                        <br/>
                        3.	 Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        a.	GÖREV ÜNVANl: ŞOFÖR
                        <br/>
                        Şoförün Görev Ve Sorumlulukları
                        <br/>
                        1.	Araçlarını göreve hazır halde bulundurmak.
                        <br/>
                        2.	Araçların bakımlı, su ve akaryakıt ikmalli durumda tutulmasını sağlamak.
                        <br/>
                        3.	Görev dönüşü bakımlarının yapılmasını sağlamak.
                        <br/>
                        4.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        5.	Çalışmaları sırasında işçi sağlığı ve iş güvenliği kurallarına uygun davranmak ve yönetimindeki personeli bu konuda bilgilendirerek denetlemek
                        <br/>
                        6.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        Şoförün Organizasyondaki Yeri
                        <br/>
                        1.	 Direkt olarak ilgili Teknik Personele bağlıdır.
                        <br/>
                        2.	 Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Birim Müdür’üne ve ilgili Teknik Personele karşı sorumludur.
                        <br/>
                        Bu Kadro İçin Aranan Özellikler
                        <br/>
                        1.	 İlköğretim, Lise ve dengi meslek lisesi mezunu olmak.
                        <br/>
                        2.	 Şoförlük konusunda tecrübeli olmak.
                        <br/>
                        3.	 Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        b.	GÖREV ÜNVANl: BOYACI
                        <br/>
                        Boyacının Görev Ve Sorumlulukları
                        <br/>
                        1.	Belediyeye bağlı tüm birimlerin boya işlemlerini yapmak.
                        <br/>
                        2.	Caddelerde bulunan trotuar taşlarının boyasını yapmak.
                        <br/>
                        3.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        4.	Çalışmaları sırasında işçi sağlığı ve iş güvenliği kurallarına uygun davranmak ve yönetimindeki personeli bu konuda bilgilendirerek denetlemek
                        <br/>
                        5.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        6.	Üstlerinden aldığı emirler doğrultusunda ihtiyaca binaen araç kullandırabilir.
                        <br/>
                        <br/>
                        <br/>
                        Boyacının Organizasyondaki Yeri
                        <br/>
                        1.	Direkt olarak ilgili Teknik Personele bağlı olarak çalışmak.
                        <br/>
                        2.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Birim Müdür’üne ve ilgili Teknik Personele karşı sorumlu olmak.
                        <br/>
                        Bu Kadro İçin Aranan Özellikler
                        <br/>
                        1.	İlköğretim, lise ve dengi meslek okulu mezunu olmak.
                        <br/>
                        2.	 Boyacılık işlerinden  yeterli tecrübeye sahip olmak.
                        <br/>
                        3.	 Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        c.	GÖREV ÜNVANI: KAYNAKÇI
                        <br/>
                        Kaynakçının Görev Ve Sorumlulukları
                        <br/>
                        1.	Belediyemizin ve birimlerinin demir akşamlarının tamir ve bakımından sorumlu olmak.
                        <br/>
                        2.	Konteynırların bakım ve onarımı yapmak.
                        <br/>
                        3.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        4.	Çalışmaları sırasında işçi sağlığı ve iş güvenliği kurallarına uygun davranmak ve yönetimindeki personeli bu konuda bilgilendirerek denetlemek
                        <br/>
                        5.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        6.	Üstlerinden aldığı emirler doğrultusunda ihtiyaca binaen araç kullandırabilir.
                        <br/>
                        Kaynakçının Organizasyondaki Yeri
                        <br/>
                        1.	 Direkt olarak ilgili Teknik Personele bağlıdır.
                        <br/>
                        2.	 Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Birim Müdür’üne ve ilgili Teknik Personele karşı sorumludur.
                        <br/>
                        Bu Kadro İçin Aranan Özellikler
                        <br/>
                        1.	Lise, Teknik Lise ve Endüstri Meslek Lisesi mezunu olmak.
                        <br/>
                        2.	Kaynak işlerinde yeterli tecrübeye sahip olmak.
                        <br/>
                        3.	Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        d.	GÖREV ÜNVANI: ELEKTRİKÇİ
                        <br/>
                        Elektrikçinin Görev Ve Sorumlulukları
                        <br/>
                        1.	Belediyeye ait şantiyeler, bürolar ve binaların elektrik problemlerini gidermek.
                        <br/>
                        2.	Fen İşleri Müdürlüğü tarafından yapılan alt yapı ve üst yapı işlerinde görev almak.
                        <br/>
                        3.	Müdürlük tarafından yapılan işler sonrası elektrik ile ilgili gerekli incelemeyi yapmak.
                        <br/>
                        4.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        5.	Çalışmaları sırasında işçi sağlığı ve iş güvenliği kurallarına uygun davranmak ve yönetimindeki personeli bu konuda bilgilendirerek denetlemek
                        <br/>
                        6.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        7.	Üstlerinden aldığı emirler doğrultusunda ihtiyaca binaen araç kullandırabilir.
                        <br/>
                        <br/>
                        <br/>
                        Elektrikçinin Organizasyondaki Yeri
                        <br/>
                        1.	Direkt olarak ilgili Teknik Personele bağlıdır.
                        <br/>
                        2.	 Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekte, Birim Müdür'üne ve ilgili Teknik Personele karşı sorumludur,
                        <br/>
                        Bu Kadro İçin Aranan Özellikleri
                        <br/>
                        <br/>
                        <br/>
                        1.	Lise, Teknik Lise, Endüstri Meslek Lisesi mezunu olmak.
                        <br/>
                        2.	 Yeterli bilgisayar bilgisine sahip olmak.
                        <br/>
                        3.	 Elektrik konusunda yeterli tecrübeye sahip olmak.
                        <br/>
                        4.	 Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        e.	GÖREV ÜNVANI: İNŞAAT USTASI
                        <br/>
                        İnşaat Ustasının Görev Ve Sorumlulukları
                        <br/>
                        <br/>
                        <br/>
                        1.	İlgili Teknik Personelden alacağı talimat esaslarına göre yeni park yapımı, mevcut parkların onarımı, tadilat işlerinin ilgili işlemleri kendi bölümü içinde planlamak ve yapmak. İşlerin istenilen nitelikte ve zamanında yapılması için gerekli tedbirleri almak.
                        <br/>
                        2.	Kamu kurum ve kuruluşlarından gelen talep doğrultusunda bakım onarım yapmak.
                        <br/>
                        3.	Gösterilen şantiye ve araziye gitmek, İnşaat yapımı sırasında görevi ile ilgili işleri (Bordür Örme, Beton Atma, Duvar örme, kalıp çakma vb.) yapmak, yaptırmak. Çalışma arkadaşlarına öğretmek.
                        <br/>
                        4.	Bu işlerde gerekli araç ve gerecin bakımı, onarımı, kullanılması ve bunların işler halde tutulmasını sağlamak.
                        <br/>
                        5.	Şantiyeye gelen malzemelerin gerektiği gibi ve doğru yere indirilmesini (vinç veya düz işçi ile) sağlamak; bu konuda gerekirse ilgili Teknik Personelden bilgi almak.
                        <br/>
                        6.	Sorumluluğunda bulunan malzeme, alet ve ekipmanın gerektiği gibi kullanılmasını ve korunmasını sağlamak; zayiatını önlemek.
                        <br/>
                        7.	Çalışmaları sırasında işçi sağlığı ve iş güvenliği kurallarına uygun davranmak ve yönetimindeki personeli bu konuda bilgilendirerek denetlemek
                        <br/>
                        8.	Şantiyenin genel temizliğini ve düzenini sağlamak.
                        <br/>
                        9.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        10.	Üstlerinden aldığı emirler doğrultusunda ihtiyaca binaen araç kullandırabilir.
                        <br/>
                        11.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        <br/>
                        <br/>
                        İnşaat Ustasının Organizasyondaki Yeri
                        <br/>
                        1.	Direkt olarak ilgili Teknik Personele bağlıdır.
                        <br/>
                        2.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Birim Müdür’üne ve ilgili Teknik Personele karşı sorumludur.
                        <br/>
                        Bu Kadro İçin Aranan Özellikler
                        <br/>
                        1.	İlköğretim, Ortaöğretim ve dengi meslek okulu mezunu olmak.
                        <br/>
                        2.	İnşaat İşlerinde tecrübeli olmak.
                        <br/>
                        3.	İş makinaları bilgisine sahip olmak
                        <br/>
                        4.	Proje Okuma yeteneğine sahip olmak.
                        <br/>
                        5.	Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        Madde 15- Veri Hazırlama ve Kontrol İşletmeni;
                        <br/>
                        GÖREV ÜNVANI: TAŞINIR KAYIT KONTROL YETKİLİSİ
                        <br/>
                        Taşınır Kayıt Kontrol Yetkilisinin Görev Ve Sorumlulukları
                        <br/>
                        <br/>
                        <br/>
                        1.	Taşınırların giriş ve çıkışına ilişkin kayıtları tutmak, bunlara ilişkin belge ve cetvelleri düzenlemek,
                        <br/>
                        2.	Girişi yapılan malzemelerin müdürlüklere devrini yapmak.
                        <br/>
                        3.	Tüketim malzemelerinin çıkışları için düzenlenen Taşınır İşlem Fişlerini üç aylık periyotlarla çıkararak Mali Hizmetler Müdürlüğüne teslim etmek.
                        <br/>
                        4.	Kamu İhale Kanununa uygun olarak yapılan mal ve hizmet alımlarını aylık olarak Kamu İhale Kurumuna internet aracılığı ile bildirmek.
                        <br/>
                        5.	Demirbaş zimmetlerini yapmak, barkotlamak ve demirbaş listelerinin müdürlüklere astırmak.
                        <br/>
                        6.	Yılsonunda demirbaş sayımı yapmak. listeleri güncellemek.
                        <br/>
                        7.	Sayıştay’a verilecek yıl sonu Taşınır Yönetim Hesabını hazırlamak.
                        <br/>
                        8.	Ambar sayımı yapıp yılsonu stok durumunu belirlemek.
                        <br/>
                        9.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        10.	Çalışmaları sırasında işçi sağlığı ve iş güvenliği kurallarına uygun davranmak ve yönetimindeki personeli bu konuda bilgilendirerek denetlemek
                        <br/>
                        11.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        Taşınır Kayıt Kontrol Yetkilisinin Organizasyondaki Yeri
                        <br/>
                        <br/>
                        <br/>
                        1.	Direkt olarak Birim Müdür’üne bağlıdır.
                        <br/>
                        2.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Birim Müdür’üne karşı sorumludur.
                        <br/>
                        Bu Kadro İçin Aranan Özellikler
                        <br/>
                        1.	 Üniversite mezunu olmak.
                        <br/>
                        2.	 Belediye mevzuatına hakim olmak.
                        <br/>
                        3.	 Yeterli bilgisayar bilgisine sahip olmak.
                        <br/>
                        4.	 Toplam kalite anlayışına sahip olmak.
                        <br/>
                        <br/>
                        <br/>
                        BEŞİNCİ BÖLÜM
                        <br/>
                        GÖREV VE HİZMETLERİN İCRASI
                        <br/>
                        <br/>
                        <br/>
                        Görevin alınması
                        <br/>
                        Madde 16-(1) Görev, Belediye Başkanının, Park ve Bahçeler Müdürlüğü’nün bağlı bulunduğu Belediye Başkan Yardımcısı’nın ve Park ve Bahçeler Müdürü’nün vereceği plan, program ve direktiflerinde alınır.
                        <br/>
                        (2) Görev, müdürlüğe evrakın gelmesiyle alınır.
                        <br/>
                        (3) Görev, müdürlüğe gelen evrakın gereklerinden alınır.
                        <br/>
                        (4) Görev, mevcut hizmetlerin idamesi için görevlerinden çıkarılır.
                        <br/>
                        Görevin Planlanması
                        <br/>
                        Madde 17 – (1) Alınan emir mevcut imkânlar nazari dikkate alınarak görev haline getirilir ve incelenir, koordine edilir, müsveddeye alınır. Bağlı bulunduğu birime verilir. Uygun görülürse resmi yazıların hazırlanmasına ait yönetmelik esaslarına göre kayda alınır. Paraf veya imzalanarak işleme konulur.
                        <br/>
                        Görevin Yürütülmesi
                        <br/>
                        <br/>
                        <br/>
                        Madde 18 -  (1) Mevcut mevzuat ve alışılmış usul ve teamüller nazari itibara alınarak görevin iyi bir şekilde yürütülmesine çalışılır.
                        <br/>
                        <br/>
                        <br/>
                        ALTINCI BÖLÜM
                        <br/>
                        İŞ BÖLÜMÜ VE KOORDİNASYON
                        <br/>
                        İş Bölümü
                        <br/>
                        Madde 19– (1) Müdürlük çalışmalarına ait personel arasındaki iş bölümü ve işbirliği Teknik Personel ile Park ve Bahçeler Müdür’ü tarafından sağlanır.
                        <br/>
                        Diğer Kuruluşlar Arasındaki Koordinasyon
                        <br/>
                        Madde 19 – (1) İlgili evrakın Belediye Başkanı’ndan ve Harcama Yetkilisi’nden onay alınarak gerekli kuruluşlara intikal ettirilmesi suretiyle işbirliği sağlanır.
                        <br/>
                        (2) İhale işleri Belediye Başkanı’ndan onay alınarak ve Mali Hizmetler Müdürlüğü ile işbirliği yapılarak hazırlanır.
                        <br/>
                        (3) Müteahhitlerle olan ihtilaflar ve benzeri konularda Hukuk Müdürlüğü’nden hukuki müteala istenmek suretiyle koordinasyon sağlanır.
                        <br/>
                        (4)Diğer müdürlük ve kuruluşlarla iş gereği bilgi alışverişi için yazılı koordinasyon yapılabileceği gibi, sonucu bir protokole bağlanan toplantı ile de yapılabilir. Bu toplantılar müdürler seviyesinde yapılabileceği gibi Başkan Yardımcısı seviyesinde de yapılabilir.
                        <br/>
                        YEDİNCİ BÖLÜM
                        <br/>
                        EVRAKA YAPILACAK İŞLEM VE ARŞİVLEME
                        <br/><br/>
                        Evraka Yapılacak İşlem
                        <br/>
                        Madde 20 –(1) Müdürlüğe gelen evrak Veri Hazırlama ve Kontrol İşletmeni tarafından teslim alınır. Gelen tüm evrakların önce kaydı yapılır. Kayda geçen evrak kontrol edilerek varsa evveliyatlarına ait numaralar bağlandıktan sonra ilgili birim ya da teknik elemana havale edilir.
                        <br/>
                        Evrakın Üzerinde İşlem Yapılması ve Cevap Hazırlanması
                        <br/><br/>
                        Madde 21 –(1)Veri Hazırlama ve Kontrol Memuru tarafından teslim alınan evrak kayıt işleminden sonra ilgili memura havale edilir. İlgili memur yazıyı inceler ve yazıyı hazırlar. İmza işleminden sonra kayıt memuru evrakın suretlerini ayırıp aslını seçerek Veri Hazırlama ve Kontrol Memuruna zimmetle teslim eder.
                        <br/>
                        <br/>
                        <br/>
                        Giden Evraka Yapılan İşlem
                        <br/>
                        <br/>
                        <br/>
                        Madde 22 –(1) Müdürlük imzası ile dış müdürlüklere, resmi veya özel kuruluş ile şahıslara gönderilecek evrak Veri Hazırlama ve Kontrol Memuru tarafından zimmet mukabili alınır. Kayıt defterine kaydı yapılır. Zimmet defteri kayıt edilerek sevk edilmek üzere ilgili müdürlük kalemlerine zimmetle teslim edilir. Diğer evraklar PTT ile gönderilir.
                        <br/>
                        <br/>
                        <br/>
                        Arşivleme
                        <br/>
                        <br/>
                        <br/>
                        Madde 23 –(1) İmza işlemleri tamamlanan evrakın suretleri ve ihale işlemleri tamamlanmış olan evrakların suretleri dosyalarına tarih ve sayı numaralarına göre sırayla konur. Muameleleri tamamlanmış olan evrak ilgili memur tarafından hıfzı işi arşive kaldırılır. İşleri biten ihale dosyaları da ilgili memur tarafından ihale kayıt defterine geçici ve kesin kabulleri yapıldığına dair bir not ile arşive kaldırılır.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        SEKİZİNCİ BÖLÜM
                        <br/>
                        ÇEŞİTLİ VE SON HÜKÜMLER
                        <br/>
                        YÖNETMELİKTE HÜKÜM BULUNMAYAN HALLER
                        <br/>
                        <br/>
                        <br/>
                        Madde 24- İş bu yönetmelikte hüküm bulunmayan hallerde yürürlükteki ilgili mevzuat hükümlerine uyulur.
                        <br/>
                        YÜRÜRLÜK
                        <br/>
                        Madde 25- Bu Yönetmelik hükümleri, Gebze Belediye Meclisince kabulü ve yayımı ile yürürlüğe girer.
                        <br/>
                        YÜRÜTME
                        <br/>
                        Madde 26- Bu Yönetmelik hükümlerini Belediye Başkanı yürütür.
                    </p>
                </section>
                <section id="bolum2" className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
                    <h3 className="text-lg font-bold text-center"></h3>
                    <p className="text-gray-700 text-left">


                    </p>
                </section>
            </div>
        </div>
    );
};

export default Yusufataseven;
