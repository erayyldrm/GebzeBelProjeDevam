import React from "react";

const Mücahitkök: React.FC = () => {
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
                        src="/images/kurumsal/mudurlukler/avatar-16.png"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">İmar Ve Şehircilik Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" /> Mücahit KÖKSAL
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" /> imar@gebze.bel.tr
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
                        Amaç, Kapsam, Yasal Dayanak ve Tanımlar
                        <br/>
                        Amaç
                        <br/>
                        MADDE 1
                        <br/>
                        Bu Yönetmeliğin amacı; Gebze Belediyesi İmar ve Şehircilik Müdürlüğü’nün görev ve hizmet alanı içerisindeki hukuki, fiili ve idari statüleri; her türlü görev, yetki ve sorumlulukları ile çalışma usül ve esaslarını düzenlemektir.
                        <br/>
                        Kapsam
                        <br/>
                        MADDE 2
                        <br/>
                        Bu Yönetmelik, Gebze Belediyesi İmar ve Şehircilik Müdürlüğü’nün görev, yetki ve sorumlulukları ile çalışma usül ve esaslarını kapsar.
                        <br/>
                        Yasal Dayanak
                        <br/>
                        MADDE 3
                        <br/>
                        Bu Yönetmelik, 5393 sayılı Belediye Kanunu, 5216 sayılı Büyükşehir Belediye Kanunu, 3194 sayılı İmar Kanunu, 657 sayılı Devlet Memurları Kanunu, 22/02/2007 tarih ve 26442 sayılı Resmi Gazete’de yayımlanarak yürürlüğe giren Belediye ve Bağlı Kuruluşları İle Mahalli İdare Birlikleri Norm Kadro İlke ve Standartlarına Dair Yönetmelik, 07/10/2009 tarih ve 27369 sayılı Resmi Gazete’de yayımlanarak yürürlüğe giren Belediye ve Bağlı Kuruluşları İle Mahalli İdare Birlikleri Norm Kadro İlke ve Standartlarına Dair Yönetmelikte Değişiklik Yapılmasına İlişkin Yönetmelik, 12/09/2010 tarih ve 27697 sayılı Resmi Gazete’de yayımlanarak yürürlüğe giren Belediye ve Bağlı Kuruluşları İle Mahalli İdare Birlikleri Norm Kadro İlke ve Standartlarına Dair Yönetmelikte Değişiklik Yapılmasına İlişkin Yönetmelik ve diğer ilgili mevzuat hükümlerine göre hazırlanmıştır.
                        <br/>
                        Tanımlar
                        <br/>
                        MADDE 4
                        <br/>
                        (1) Bu Yönetmeliğin uygulanmasında;
                        <br/>
                        •	Belediye: Gebze Belediyesini,
                        <br/>
                        •	Başkan: Gebze Belediye Başkanını,
                        <br/>
                        •	Başkan Yardımcısı: Gebze Belediyesi İmar ve Şehircilik Müdürlüğü’nün bağlı bulunduğu Belediye Başkan Yardımcısını,
                        <br/>
                        •	Belediye Meclisi: Gebze Belediye Meclisini,
                        <br/>
                        •	Belediye Encümeni: Gebze Belediye Encümenini,
                        <br/>
                        •	Müdürlük: İmar ve Şehircilik Müdürlüğünü,
                        <br/>
                        •	Müdür: İmar ve Şehircilik Müdürünü,
                        <br/>
                        •	Sorumlu: İmar ve Şehircilik Müdürlüğü Büro Sorumlusunu,
                        <br/>
                        •	Personel: İmar ve Şehircilik Müdürlüğüne bağlı çalışanların tümünü ifade etmektedir.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        İKİNCİ BÖLÜM
                        <br/>
                        Kuruluş ve Teşkilat
                        <br/>
                        Kuruluş
                        <br/>
                        MADDE 5
                        <br/>
                        Gebze Belediyesi İmar ve Şehircilik Müdürlüğü 5393 sayılı Belediye Kanunu’nun 48 inci maddesi dikkate alınarak ve 22/02/2007 tarih ve 26442 sayılı Resmi Gazetede yayımlanan Belediye ve Bağlı Kuruluşları ile Mahalli İdare Birlikleri Norm Kadro İlke ve Standartlarına uygun olarak kurulan birim müdürlüğüdür.
                        <br/>
                        Teşkilat
                        <br/>
                        MADDE 6
                        <br/>
                        (1) İmar ve Şehircilik Müdürlüğü’nün personel yapısı aşağıda belirtildiği şekildedir.
                        <br/>
                        a) Müdür
                        <br/>
                        b)Büro Sorumlusu
                        <br/>
                        c) Memur
                        <br/>
                        d) Sözleşmeli Memur
                        <br/>
                        e) İşçi
                        <br/>
                        f) Diğer personel
                        <br/>
                        (2) İmar ve Şehircilik Müdürlüğü’nün teşkilat yapısı aşağıda belirtildiği şekildedir.
                        <br/>
                        - Müdürlük Makamı
                        <br/>
                        1) Proje Onay Bürosu
                        <br/>
                        - Mimari Proje Kontrol Birimi
                        <br/>
                        - Statik Proje ve Zemin Etüt Kontrol Birimi
                        <br/>
                        - Mekanik, Elektrik ve Asansör Proje Kontrol Birimi
                        <br/>
                        - Kat İrtifakı Proje Kontrol Birimi
                        <br/>
                        - Büro İşlemleri Birimi
                        <br/>
                        2) Yapı Kontrol Bürosu
                        <br/>
                        - İskan Kontrol Birimi
                        <br/>
                        - Hakediş ve Seviye Onayı Birimi
                        <br/>
                        - Tadilat Ruhsatı Birimi
                        <br/>
                        - Harita ve Ölçüm Birimi
                        <br/>
                        - Büro İşlemleri Birimi
                        <br/>
                        3) Kaçak Yapı Bürosu
                        <br/>
                        - Saha Kontrol Birimi
                        <br/>
                        - Büro İşlemleri Birimi
                        <br/>
                        4) İmar Arşiv Birimi
                        <br/>
                        5) İmar Kalem Birimi
                        <br/>
                        <br/>
                        <br/>
                        ÜÇÜNCÜ BÖLÜM
                        <br/>
                        Organizasyon Yapısı ve Çalışma İlkeleri
                        <br/>
                        Organizasyon Yapısı
                        <br/>
                        MADDE 7
                        <br/>
                        (1) İmar ve Şehircilik Müdürlüğü, üst yönetici olarak Belediye Başkanına ve Belediye Başkanının görevlendirdiği ve yetki verdiği Belediye Başkan Yardımcısına bağlı olarak çalışır. Büroların sayı ve görevlerini belirlemede Müdür yetkilidir.
                        <br/>
                        (2) Müdürlük, bünyesindeki Proje Onay Bürosu, Yapı Kontrol Bürosu, Kaçak Yapı Bürosu, İmar Kalem Birimi ve İmar Arşiv Birimi alt birimlerden oluşur.
                        <br/>
                        (3) Organizasyon şemasındaki yatay ve dikey hiyerarşik yapılanma, Müdürün teklifi ve Belediye Başkanının onayıyla oluşur ve yürürlüğe girer.
                        <br/>
                        (4) Belediye Başkanı organizasyon yapısını resen değiştirmeye yetkilidir.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Çalışma İlkeleri
                        <br/>
                        MADDE 8
                        <br/>
                        Gebze Belediye Başkanlığı İmar ve Şehircilik Müdürlüğü, Gebze'de yaşam kalitesini arttırmak için “yerel hizmetleri adil, etkin ve sürekli biçimde sunma” misyonu ve Belediyecilikte “kenti yaşatan, kenti yaşanan olma” vizyonuyla aşağıda belirtilen temel ilkelere göre çalışmalarını yürütür.
                        <br/>
                        a) Planlı, etkin ve verimli çalışmak,
                        <br/>
                        b) Adil, güler yüzlü ve kalite esaslı hizmet üretmek,
                        <br/>
                        c) Şeffaf ve hesap verebilir olmak,
                        <br/>
                        d) Bilgi ve teknolojiden azami düzeyde faydalanmak,
                        <br/>
                        e) Karar ve uygulamalarda çalışanların katılımını sağlamak,
                        <br/>
                        f) Hizmetlerin temin ve sunumunda, yerindelik ve ihtiyaca uygunluk prensibine göre hareket etmek,
                        <br/>
                        g) İnsan hak ve özgürlükleri çerçevesinde, çağdaş ve sosyal belediyecilik ilkesine bağlı kalmak,
                        <br/>
                        h) Karar alma, uygulama ve hizmette tarafsızlık,
                        <br/>
                        ı) Hizmette, kalite ve vatandaş memnuniyetini sağlamak için çalışmak,
                        <br/>
                        i) Diğer kurum, kuruluş ve sivil toplum örgütleriyle azami koordinasyon sağlamak,
                        <br/>
                        <br/>
                        <br/>
                        DÖRDÜNCÜ BÖLÜM
                        <br/>
                        Müdürlüğün Görev, Yetki ve Sorumlulukları
                        <br/>
                        Müdürlüğün Görevleri
                        <br/>
                        MADDE 9
                        <br/>
                        İmar ve Şehircilik Müdürlüğü, 5393 sayılı Belediye Kanunu, 5216 sayılı Büyükşehir Belediyesi Kanunu, 3194 sayılı İmar Kanunu, 4708 sayılı Yapı Denetimi Hakkında Kanun, Planlı Alanlar İmar Yönetmeliği, Türkiye Bina Deprem Yönetmeliği, Yapı Denetimi Uygulama Yönetmeliği, Otopark Yönetmeliği, Binaların Yangından Korunması Hakkında Yönetmelik, Kocaeli Büyükşehir Belediyesi Otopark Yönetmeliği Uygulama İlke ve Esasları ve 1/1000 Ölçekli Gebze Uygulama İmar Planı Plan Hükümleri başta olmak üzere ilgili tüm kanun, yönetmelik, yönerge, tebliğ, genelge, talimat ve bildiriler çerçevesinde olmak üzere;
                        <br/>
                        •	Kamu kurum ve kuruluşları ile diğer Müdürlüklerden  ve vatandaşlardan gelen evrakları kayda almak ve sonuçlandırmak,
                        <br/>
                        •	Müdürlüğe sözlü veya yazılı iletişim yoluyla gelen şikayetleri değerlendirmek,
                        <br/>
                        •	Mimari, statik, mekanik ve elektrik projeleri, kent ve yapı estetiğini de göz önünde bulundurarak ilgili kanun, yönetmelik ve genelgeler doğrultusunda kontrol etmek ve onaylamak,
                        <br/>
                        •	Avan proje, ön proje ve vaziyet planı tekliflerinin imar mevzuatına uygunluğunu kontrol etmek ve onaylamak,
                        <br/>
                        •	Onaylı mimari projeye göre düzenlenen statik projelerin, mimari projeye uygunluğunu kontrol etmek ve onaylamak,
                        <br/>
                        •	Yapı ruhsatı eki mekanik, elektrik, ısı yalıtım, asansör vb. tesisat projelerinin onaylı mimari projeye uygunluğunu kontrol etmek ve onaylamak,
                        <br/>
                        •	İmar parseline ait yeni yapı ve tadilat projelerini onaylayarak, ruhsat harçlarının tahakkukunu sağlamak ve yapı ruhsatını düzenlemek,
                        <br/>
                        •	Kamu alanlarında ve müstakil yapılaşmaya müsait olmayan parsellerde imar mevzuatında belirlenen koşul ve sürelerde geçici inşaat izni için Başkanlık Onayı almak, alınan Başkanlık onayına göre Belediye Encümeni kararı alınmak üzere işlemleri yürütmek, alınan Encümen kararının Tapu siciline işlenmesini sağlamak,
                        <br/>
                        •	Mimari proje tasdik aşamasında, diğer Müdürlükler ile kurum ve kuruluşlardan alınan verilerin/görüşlerin projeye aktarımını kontrol etmek,
                        <br/>
                        •	Statik proje hesaplarına esas teşkil edecek zemin parametrelerinin, arazi çalışmaları ile ilgili özel kuruluşlarca yapılan zemin etüt raporlarını ilgili mevzuatlara göre kontrol etmek ve onaylamak,
                        <br/>
                        •	Yapı sahiplerince yıkılmak istenilen yapılara yıkım ruhsatı düzenlemek,
                        <br/>
                        •	İzinsiz hafriyat ve tehlikeli yapılarla ilgili olarak mer-i mevzuat hükümlerini uygulamak,
                        <br/>
                        •	Binaların yapı ruhsatı ve eklerine uygun olarak yapılmasını denetlemek,
                        <br/>
                        •	Yapı ruhsatı ve eklerine uygun olarak yapılan ve kontrolleri tamamlanarak iş bitirmesi verilen yapıların, ilgililerin müracaatları halinde yapının kontrolü sonucu yapı kullanma izin (iskan) belgesi düzenlemek,
                        <br/>
                        •	Ruhsat süresi biten inşaatlarda ve tadilat ruhsatı taleplerinde binanın ruhsata uygunluğunun incelenmesinden sonra projelerinin imar planına imar mevzuatına uygunluğunu inceleyerek onaylamak ve ruhsat harçlarının tahsilini sağlayarak tadilat ruhsatını düzenlemek,
                        <br/>
                        •	4708 sayılı Yapı Denetimi Hakkında Kanun gereği hakediş, iş bitirme, seviye tespit tutanağı, denetçi sicil raporlarının tutulması vb. işlemleri yapmak,
                        <br/>
                        •	Yapı denetim firmaları veya denetçi istifaları sonrasında gerekli tespit ve yazışmaları yapmak,
                        <br/>
                        •	Yapı kullanma izin (iskan) belgeleri, vaziyet planları, ruhsat belgeleri vb. belgelerin suret tasdikini yapmak,
                        <br/>
                        •	Plankoteevakı onayında, yapıların sıfır kotunu belirlemek,
                        <br/>
                        •	Plankote, emsal krokisi, vaziyet planı, hali hazır, yapı aplikasyon krokisi ve bina tespit krokisi evraklarının kontrol ve onay işlemlerini gerçekleştirmek,
                        <br/>
                        •	Yapı Ruhsatı verilen parseller için Kocaeli Büyükşehir Belediyesi Hafriyat Denetim Şube Müdürlüğü ile koordine edilerek, Hafriyat Taşıma Belgesi düzenlemek,
                        <br/>
                        •	Kat irtifakı yada kat mülkiyeti için sunulan projeleri incelemek ve onaylamak,
                        <br/>
                        •	Asansör tescil belgesi düzenlemek, bunların periyodik kontrollerini yapan ve Belediyemizce görevlendirilmiş olan A tipi muayene kuruluşunca sunulan raporları değerlendirerek, ilgili standartlara ve mevzuata uymayan asansörlerin hizmet dışı bırakılmasını sağlamak,
                        <br/>
                        •	Zemin durum belgesi vererek, bu belgeye göre hazırlanan zemin etüt raporlarını incelemek ve onaylamak,
                        <br/>
                        •	Kaçak veya ruhsat ve eklerine aykırı olarak inşa edilen yapılar için yapı tatil tutanağı düzenlemek,
                        <br/>
                        •	Kaçak veya ruhsat ve eklerine aykırı olarak inşa edilen yapılarla ilgili olarak para cezası ve yıkım kararı alınması için dosyaları Encümene göndermek, kararların tebligatlarını yapmak,
                        <br/>
                        •	Kaçak veya ruhsat ve eklerine aykırı olarak inşa edilen, Encümence yıkım kararı verilen yapılar için, yıkım programları yapmak ve Zabıta görevlilerinin yardımıyla yıkımını gerçekleştirmek,
                        <br/>
                        •	Kamu arazilerine veya kendisine ait olmayan araziler üzerine yapılan yapı işgallerini 775 sayılı Gecekondu Kanunu'na göre kaldırmak,
                        <br/>
                        •	Teknik Uygulama Sorumlularının sicillerini takip etmek, görevlerini mevzuata uygun olarak yapmayanları ilgili kurum ve kuruluşa bildirmek,
                        <br/>
                        •	5216 sayılı Büyükşehir Belediyeleri Kanunu ile ilçe Belediyelerine verilen görev ve yetkilerden Müdürlüğü ilgilendiren konuları takip ederek uygulama yapmak,
                        <br/>
                        •	5393 sayılı Belediye Kanunu’nun Belediyeye verdiği yetki dahilinde Belediye Meclisinin ve Belediye Encümeninin Müdürlük çalışmaları ile ilgili aldığı kararları uygulamak,
                        <br/>
                        •	Konusu ile ilgili belediye gelirlerinin ve harcamalarının tahakkuklarını yaparak, Mali Hizmetler ile ilgili Müdürlüğe iletmek,
                        <br/>
                        •	Gerekli durumlarda imar mevzuatı ile ilgili hususlarda resmi/özel kurum ve kuruluşlara görüş vermek,
                        <br/>
                        •	Başkanlık tarafından istenen Müdürlük görevleri ile ilgili raporları hazırlamak,
                        <br/>
                        •	Konusu ile ilgili araştırma, planlama, koordinasyon, geliştirme program ve hizmetleri yürütmek, gerekli durumlarda hizmet satın almak,
                        <br/>
                        •	Evrakta yapılan işlemlerin korunması için dosyasıyla birleşen ya da yeni açılan dosyanın arşiv sorumlularına teslimini sağlamak,
                        <br/>
                        •	Evrakın konusuna göre ilgili büroya havalesinin bilgisayar ortamında yapılmasını ve dosyanın büro sorumlusuna iletilmesini sağlamak,
                        <br/>
                        •	Diğer Müdürlüklerden gelen belgelerin ilgili Müdürlüğe tesliminin bilgisayar ortamında ve zimmet defterine kayıt yapılarak teslimini sağlamak,
                        <br/>
                        •	Yapılan işleri ve gelen başvuruları sonuçlandırmak ve usülüne uygun olarak Standart Dosya Planı'na göre arşivlenmesini sağlamak,
                        <br/>
                        •	Belediye Stratejik Plan çalışmalarına katkıda bulunmak,
                        <br/>
                        •	Stratejik Planlamaya uygun olarak Müdürlüğün yıllık bütçesini ve faaliyet raporunu hazırlamak,
                        <br/>
                        •	Müdürlüğe ait ihale ve ayniyat işlemlerinin yapılmasını sağlamak,
                        <br/>
                        •	Kanun, yönetmelik ve genelgelerin verdiği diğer görevleri yerine getirmek,
                        <br/>
                        •	Müdürlük personeli ile ilgili hizmetleri yürütmek, gerektiğinde hizmet içi eğitim için kurslar açmak, açtırmak ve seminerler düzenlemek,
                        <br/>
                        •	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek,
                        <br/>
                        Müdürlüğün Sorumlulukları
                        <br/>
                        MADDE 10
                        <br/>
                        (1) İmar ve Şehircilik Müdürlüğü, Belediye Başkanınca verilen ve bu Yönetmelikte tarif edilen görevler ile ilgili olarak yasalarda belirtilen görevleri gereken özen ve çabuklukla yapmak ve yürütmekle sorumludur.
                        <br/>
                        (2) Belediye mevzuatı, göreviyle ilgili diğer mevzuat ve bu Yönetmelik ile kendisine verilen görevlerin gereği gibi yerine getirilmesinden; yetkilerin zamanında ve gereğince kullanılmasından, bağlı bulunduğu Belediye Başkan Yardımcısına ve Belediye Başkanına karşı sorumludur.
                        <br/>
                        İmar ve Şehircilik Müdürünün Görevleri
                        <br/>
                        MADDE 11
                        <br/>
                        İmar ve Şehircilik Müdürünün görevleri, aşağıda sıralandığı gibidir.
                        <br/>
                        •	Başkanlık Makamına, Belediyenin karar organlarına, Belediyenin diğer birimlerine, müdürlüğün alt birimlerine ve personeline, kamu kurum ve kuruluşlarına, meslek kuruluşlarına ve gerektiğinde gerçek ve tüzel kişilere karşı şahsen ya da evrak üzerindeki imzasıyla Müdürlüğü temsil etmek,
                        <br/>
                        •	Temsil ettiği Müdürlüğün görev alanına giren tüm iş ve işlemlerin; ilgili mevzuata ve Yönetmelikte belirlenen ilkelere uygun olarak yürütülmesini sağlamak,
                        <br/>
                        •	Personeli, ekipmanı ve Müdürlüğün sahip olduğu bilgi, belge ve kaynakları; etkili, verimli ve ekonomik bir şekilde sevk ve idare etmek,
                        <br/>
                        •	Alt birimler arasında koordinasyonu ve çalışma huzurunu sağlamak,
                        <br/>
                        •	Müdürlük hizmetleri ile ilgili olarak gerekli denetimleri yapmak/yaptırmak,
                        <br/>
                        •	5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu çerçevesinde; Müdürlüğün stratejik planlarını, performans programlarını, bütçe taslağını ve faaliyet raporlarını hazırlatmak,
                        <br/>
                        •	Bütçe ödeneklerinin amacına uygun olarak usülünce kullanılmasını sağlamak,
                        <br/>
                        •	Yıl içerisinde giderlerin izlemesini yaparak, bütçe hedeflerinin gerçekleşmesini sağlamaya çalışmak,
                        <br/>
                        •	Harcama yetkilisi olarak harcama talimatı vermek ve giderin gerçekleştirilmesini sağlamak,
                        <br/>
                        •	Müdürlük uygulamalarıyla ilgili harç ve ücretlerinin belirlenmesi konusunda gerekli yasal süreci takip etmek, işlem süreçlerinde harç ve ücretlerin tahakkukunu sağlamak ve tahsilatını kontrol etmek,
                        <br/>
                        •	Taşınır mal edinilmesi ile ilgili kayıt ve kontrol işlemlerinin usülüne uygun olarak yapılmasını sağlamak,
                        <br/>
                        •	Taşınır malların muhafazasını, korunmasını, verimli ve ekonomik olarak kullanılmasını sağlayacak bir taşınır mal yönetimini tesis etmek,
                        <br/>
                        •	İhale yetkilisi olarak yapılacak ihaleler için, gerçekleştirme görevlileri ile komisyon üyelerini belirlemek ve görevlendirmek, ihale sürecini mevzuatına uygun olarak takip edip sonuçlandırmak,
                        <br/>
                        •	Kamu İç Kontrol Standartlarına Uyum Eylem Planı çerçevesinde; hizmet standartlarının oluşturulmasını temin ederek, hizmet alan gerçek ve tüzel kişilere duyurulmasını ve mevzuatında belirlenmiş üst kurumlara bildirilmesini sağlamak,
                        <br/>
                        •	Müdürlüğün organizasyon şemalarını oluşturmak ve Başkanlık Makamına onaya sunmak, onaylandığı takdirde bu şemaya uygun idari yapılanmayı tesis etmek,
                        <br/>
                        •	Alt birimlerin ve birim sorumlularının görev tanımlarını yaptırmak, ilgililerine tebliğ etmek ve görev tanımlarına uygun hareket edilip edilmediğini denetlemek,
                        <br/>
                        •	Müdürlük birimlerinin uygulama prosedürlerini, iş akış şemalarını ve bu süreçte kullanılacak standart form ve dokümanları hazırlatmak, personelin bu prosedürlere uyarak iş ve hizmet üretmesini temin etmek,
                        <br/>
                        •	Gerekli envanter çalışmalarını yaptırarak, Müdürlüğün hassas görevlerini belirlemek ve hassas görevlerin gereklerinin yerine getirilmesini sağlamak,
                        <br/>
                        •	Müdürlüğe ait makine ve teçhizatların kullanım talimatlarını, kazalara ve yangına karşı iş güvenliği talimatlarını, hizmet talimatları ile muayene ve kontrol talimatlarını hazırlatmak ve afişlerinin gerekli yerlere asılmasını temin etmek,
                        <br/>
                        •	Müdürlüğün işleriyle ilgili olarak hizmet alan vatandaşın doğru bilgiyle yönlendirildiği ve afiş ya da el kitapçığı şeklindeki rehber çalışmalarını yaptırarak hizmet alan tüm kesimlere duyurulmasını ve ulaştırılmasını sağlamak,
                        <br/>
                        •	Müdürlüğün görev alanına giren konularla ilgili kanunları, kararnameleri, yönetmelikleri, genelgeleri, tebliğleri, yargı kararlarını, meclis kararlarını ve diğer meslek kuruluşlarının mevzuatını ve yayınlarını takip etmek, bu konularda Müdürlük personelinin bilgilenmesini ve eğitilmesini sağlamak,
                        <br/>
                        •	Müdürlüğün görev alanına giren iş ve işlemlerin etkin, verimli ve ilkelere uygun yürütülebilmesi için Müdürlüğün görevlerini deruhte edebilecek meslek gruplarından ve idari personelden yeteri kadar istihdam edilmesini sağlayacak girişim ve çalışmaları yapmak,
                        <br/>
                        •	Tüm personelin sevk ve idaresiyle ilgili olarak Müdürlük personeli arasında görev bölümü yapmak, çalışma koşullarını iyileştirmek ve personelin izin planını yapmak,
                        <br/>
                        •	İzin, fazla mesai ve arazi tazminatı gibi tüm özlük işlemlerine yönelik çalışmaların düzenli olarak yapılmasını sağlamak,
                        <br/>
                        •	Hastalık, rapor, doğum, ölüm gibi nedenlerle görevinden ayrılan personelin yerine bir başkasını görevlendirmek,
                        <br/>
                        •	Müdürlük hizmetlerin aksamaması için gerekli önlemleri almak,
                        <br/>
                        •	Disiplin amiri sıfatıyla ilgili kanun ve yönetmelikler çerçevesinde hareket etmek,
                        <br/>
                        •	Müdürlüğün görev alanına giren konularla ilgili olarak gerektiğinde ilgili ve yetkili mercilere Müdürlük görüşünü hazırlatıp sunmak,
                        <br/>
                        •	Başkanlık Makamının Onay ya da Olur’unun gerektiği konularda ilgili işlem dosyasının hazırlanmasını ve Başkanlık Makamına sunulmasını sağlamak,
                        <br/>
                        •	İhtiyaç duyulduğunda Müdürlük uygulamalarıyla ilgili olarak toplanan Meclis İhtisas Komisyonlarına, Müdürlüğü temsilen katılmak veya uzman personel görevlendirmek,
                        <br/>
                        •	Mevzuatın öngördüğü Meclis, Encümen, kurul ve komisyon toplantılarına katılmak,
                        <br/>
                        •	Müdürlük uygulamalarıyla ilgili olarak Belediye Meclis Kararı ya da Encümen Kararı gerektiği durumlarda Belediyenin karar organlarına havale edilmek üzere gerekçeli evrakı hazırlayarak Başkanlık Makamına sunmak,
                        <br/>
                        •	Başkanlıkça yayınlanan genelgelere, yönergelere, yazılı ve sözlü talimatlara uygun hareket etmek ve gereklerini yerine getirmek,
                        <br/>
                        •	Çalışma alanına giren ve Başkanlık makamınca verilen diğer görevleri mevzuata uygun olarak ifa etmektir.
                        <br/>
                        İmar ve Şehircilik Müdürünün Yetkileri
                        <br/>
                        MADDE 12
                        <br/>
                        İmar ve Şehircilik Müdürünün yetkileri aşağıda sıralandığı gibidir.
                        <br/>
                        •	İmar ve Şehircilik Müdürü; Başkanlık Makamına, Belediyenin diğer birimlerine, Müdürlüğün alt birimlerine ve personeline karşı doğrudan; Belediyenin karar organlarına, kamu kurum ve kuruluşlarına, meslek kuruluşlarına ve gerektiğinde gerçek ve tüzel kişilere karşı ise Başkanlık Makamının izni ve onayıyla, şahsen ya da evrak üzerindeki imzasıyla temsil etmeye,
                        <br/>
                        •	Başkanlık Makamınca uygun görülen programlar gereğince Müdürlüğün işleyişine ilişkin görevlerin yürütülmesi için karar vermeye, tedbirler almaya ve uygulatmaya,
                        <br/>
                        •	Müdürlük iş ve işlemlerinin yürütülmesinde ihtiyaç duyulan yeni tedbirlerin ve yetkilerin alınması için Başkanlık Makamına önerilerde bulunmaya,
                        <br/>
                        •	Müdürlüğüne bağlı kadro görevlerinin yerine getirilmesinde süreli ve ani denetlemeler yapmaya ve rastlayacağı aksaklıkları gidermeye,
                        <br/>
                        •	Müdürlük emrinde görev yapan personele, ilgili yönetmelik çerçevesinde ödül, takdirname ve yer değiştirme gibi personel işlemleri için bağlı bulunduğu Belediye Başkan Yardımcısı ile Başkanlık Makamına önerilerde bulunmaya,
                        <br/>
                        •	Personeli, ekipmanı ve Müdürlüğün sahip olduğu bilgi, belge ve kaynakları sevk ve idare etmeye,
                        <br/>
                        •	Bütçe ödeneklerini kullanmaya ve harcama talimatı vermeye,
                        <br/>
                        •	Alt birimlerindeki personellere yetki devretmeye ve gerektiğinde devrettiği yetkiyi geri almaya,
                        <br/>
                        •	Başkanlık Makamına, yeni alt birimler kurma, alt birimleri ayırma ya da birleştirme, alt birimlerin adlarını ve fonksiyonlarını değiştirme konusunda teklif götürmeye,
                        <br/>
                        •	İdari ve teknik konularda talimatlar vermeye, araştırma ve inceleme yapmaya ve yaptırmaya,
                        <br/>
                        •	Performans ölçümü ve istatistiki çalışma yapmaya ve yaptırmaya,
                        <br/>
                        •	İş ve işlemleri kontrol etmeye ve denetlemeye, iş ve işlemlerle ilgili her türlü bilgi ve belgeyi istemeye,
                        <br/>
                        •	Çalışma gurupları oluşturmaya, görevlendirmeler yapmaya,
                        <br/>
                        •	İhaleler için gerçekleştirme görevlilerini belirlemeye ve görevlendirmeye, üst yönetimce belirlenen üyeler arasından belirli sayıda komisyon üyesi belirlemeye ve birim personeli arasından yeteri kadar komisyon üyesini belirlemeye ve görevlendirmeye,
                        <br/>
                        •	Taşınır mal kayıt ve kontrol yetkililerini belirlemeye ve görevlendirmeye,
                        <br/>
                        •	Görevlerini yerine getirmeyen ve talimatlara uymayan personel hakkında disiplin sürecini başlatmaya,
                        <br/>
                        •	Sorumlu olduğu tüm personelin yıllık izinlerini kullanış zamanlarını tespit etmeye,
                        <br/>
                        •	Toplantı düzenlemeye ve toplantıyı yönetmeye,
                        <br/>
                        •	Bütçe Kanununda belirtilen sınırlarda olmak kaydıyla; gerekli durumlarda üst yönetici onayıyla personele fazla mesai yaptırmaya,
                        <br/>
                        •	Gerekli gördüğü konularda Hukuk İşleri Müdürlüğü’nden görüş sormaya,
                        <br/>
                        •	Müdürlüğün faaliyet alanına giren konularda ilgili kişi, birim, kurum ve kuruluşlarla haberleşmeye,
                        <br/>
                        •	İşlemlerde usülsüzlük ve yolsuzluğu önlemek için yasal her türlü tedbiri almaya,
                        <br/>
                        •	Geçici süre görevde bulunamayacağı dönemlerde, Müdürlüğe tayin şartlarına haiz olan personelden birini Müdürlüğe vekalet etmek üzere belirlemeye ve Başkanlık Makamının onayına sunmaya yetkilidir.
                        <br/>
                        <br/>
                        <br/>
                        İmar ve Şehircilik Müdürünün Sorumlulukları
                        <br/>
                        MADDE 13
                        <br/>
                        İmar ve Şehircilik Müdürünün sorumlulukları, aşağıda sıralandığı gibidir.
                        <br/>
                        •	Görev alanına giren konulardaki iş ve işlemlerin hukuka ve Belediye mevzuatına uygun olarak yürütülmesinde; Belediye Başkanına ve bağlı bulunduğu Belediye Başkan Yardımcısına, Başkanın bilgisi dahilinde Belediye Meclisinin ilgili ihtisas komisyonlarına, gerektiğinde Belediye Encümenine, kolektif çalışma gerektiren konularda; çalışmanın öznesi durumundaki birim Müdürlüklerine veya birim sorumlularına ya da kurullara karşı sorumludur.
                        <br/>
                        •	Görev alanına giren konulardaki iş ve işlemlerin hukuka ve Belediye mevzuatına uygunluğunun denetlenmesi sürecinde, Başkanlık Makamını bilgilendirmek kaydıyla; Sayıştay’a, ilgili Bakanlıkların denetim organlarına, Belediye Meclisinin Denetim Komisyonuna, İç Denetim organlarına, gerekli bilgi ve belgeleri zamanında ve eksiksiz olarak ulaştırmakla sorumludur.
                        <br/>
                        •	Başkanlık Makamını bilgilendirmek kaydıyla; adli ya da idari inceleme ve soruşturma aşamasında, inceleme ve soruşturmayı yürüten organlara gerekli bilgi ve belgeleri zamanında ve eksiksiz olarak ulaştırmakla sorumludur.
                        <br/>
                        Büro Sorumlusunun Görevleri
                        <br/>
                        MADDE 14
                        <br/>
                        İmar ve Şehircilik Müdürlüğü Büro Sorumlusunun görevleri, aşağıda sıralandığı gibidir.
                        <br/>
                        •	Büro yöneticilerinin ortak nitelikteki yönetim görevlerini yerine getirmek,
                        <br/>
                        •	Müdürlük hizmetlerinin ilgili mer-i mevzuat çerçevesinde, zamanında ve usülüne uygun olarak yapılmasını sağlamak,
                        <br/>
                        •	Müdürün tayin edeceği konularda yönetime yardımcı olmak, önerilerde bulunmak, verilen yetki çerçevesinde evrak havale ve tevzi etmek,
                        <br/>
                        •	Bağlı büroların iş ve işleyişlerindeki organizasyon ve koordinasyonu sağlamak,
                        <br/>
                        •	Bağlı büroların çalışma esaslarını gözden geçirerek planlayıp, programlayarak Müdüre sunmak, çalışmaların bu programlar uyarınca yürütülmesini takip edip denetlemek ve Müdüre bilgi vermek,
                        <br/>
                        •	İş bölümü gereği bağlı büroların yazılarını paraflamak, yetki verildiğinde imzalamak,
                        <br/>
                        •	Bağlı büroların tüm işlevlerinin usülüne uygun olarak tam ve zamanında yapılmasını, verilen görevlerin gereğine uygun olarak yerine getirilmesini temin etmek,
                        <br/>
                        •	Kendisine bağlı bürolar arasında iş ilişkisi kurmak, işbirliği ve koordinasyondaki aksaklıkları giderici tedbirler almak ve uygulamasını sağlamak,
                        <br/>
                        •	Kendisine verilen yetki ve sorumluluk dahilinde, bağlı bürolara emir ve talimat vermek, görüş ve tavsiyelerde bulunmak,
                        <br/>
                        •	Sorumlu olduğu bürolara Müdürün emir, talimat ve isteklerini aktarmak,
                        <br/>
                        •	Bürolarda Müdürün bilgisi dahilinde uygun personel dağıtımını gerçekleştirmek, iş akışının aksamadan sürdürülmesini temin etmek,
                        <br/>
                        •	Müdürlüğe bağlı büronun, Müdürlük dışı birimlerle işbirliği ve koordinasyonunu sağlamak,
                        <br/>
                        •	Görev alanına giren konularda ve uygulamalarda ortaya çıkan mevzuat yetersizliği ve aksaklıklarla ilgili hususları incelemek, araştırmak ve alınması gereken kanuni idari tedbirler konusunda Müdürlük Makamına tekliflerde bulunmak,
                        <br/>
                        •	Müdürlüğün işlevleri ile ilgili mevzuatı takip etmek, gerektiğinde ilgili birimlere sirküle edilmesini sağlamaktır.
                        <br/>
                        Büro Sorumlusunun Yetkileri
                        <br/>
                        MADDE 15
                        <br/>
                        İmar ve Şehircilik Müdürlüğü Büro Sorumlusunun yetkileri, aşağıda sıralandığı gibidir.
                        <br/>
                        •	Gelen evrakı incelemek ve ilgili personele havale etmeye,
                        <br/>
                        •	Müdürlüğün iş ve işlemlerine ilişkin görevlerin, Müdürlük ve Başkanlık Makamınca uygun görülen programlar gereğince yürütülmesi için, tedbirler almaya ve uygulatmaya,
                        <br/>
                        •	Müdürlüğün iş ve işlemlerinin yürütülmesinde ihtiyaç duyulan yeni tedbirlerin ve yetkilerin alınması için Müdürlük Makamına önerilerde bulunmaya,
                        <br/>
                        •	Bağlı birimlerin kadro görevlerinin yerine getirilmesinde süreli ve gerektiğinde ani denetlemeler yapmaya ve rastlayacağı aksaklıkları gidermeye,
                        <br/>
                        •	Bağlı birimlerin yazışmalarında, paraf ve Müdür tarafından uygun görüldüğünde imza atmaya,
                        <br/>
                        •	Bağlı birimlerin personeline saatli özür izni vermeye, 1 günlük yıllık izin kullandırmaya, yıllık izin kullanış zamanlarını tespit etmeye, disiplin, takdirname, ödül ve yer değiştirme gibi personel işlemleri için Müdüre önerilerde bulunmaya,
                        <br/>
                        •	Görevlerinde belirtilen işleri yürütürken eşdeğerdeki görevlilerden iş akışının gerektirdiği hizmetlerin yapılmasını istemeye,
                        <br/>
                        •	Müdürünce verilecek diğer iş ve işlemleri uygulamaya yetkilidir.
                        <br/>
                        Büro Sorumlusunun Sorumlulukları
                        <br/>
                        MADDE 16
                        <br/>
                        Belediye mevzuatı, göreviyle ilgili sair mevzuat ve bu Yönetmelik ile kendisine verilen görevlerin gereği gibi yerine getirilmesinden, yetkilerin zamanında ve gereğince kullanılmasından, Müdüre karşı sorumludur.
                        <br/>
                        Proje Onay Bürosu Görev, Yetki ve Sorumlulukları
                        <br/>
                        MADDE 17
                        <br/>
                        •	Yapı ruhsatı talebi ile gelen evrak ve projeleri incelemek, ruhsata esas projeleri onaylamak ve yapı ruhsatı düzenlemek,
                        <br/>
                        •	Kat irtifakı/mülkiyeti talebi ile gelen evrak ve projeleri incelemek ve onaylamak,
                        <br/>
                        •	Kamu kurumlarından görüş almak için gelen evrak ve projeleri kontrol etmek ve onaylamak,
                        <br/>
                        •	Tadilat ruhsatı talebi ile gelen evrak ve projeleri incelemek ve onaylamak,
                        <br/>
                        •	İnşaat ruhsat harcını hesaplayarak tahakkukunu sağlamak,
                        <br/>
                        •	Onaylanmış mimari projeye göre statik projelerin, mimari projeye uygunluğunu incelemek ve onaylamak,
                        <br/>
                        •	Yapı sahiplerince yıkılmak istenilen yapılara yıkım ruhsatı düzenlemek,
                        <br/>
                        •	Zemin durum belgesi hazırlamak,
                        <br/>
                        •	Zemin etüt raporu kontrol harçlarını tahakkukunu sağlamak,
                        <br/>
                        •	Zemin durum belgesine göre arazide çalışma şeklini belirlemek ve kontrol etmek,
                        <br/>
                        •	Zemin etüt raporlarının kontrolünü yapmak ve doğru yapılmasını sağlamak,
                        <br/>
                        •	Zemin etüt raporlarını okuyarak zemin etüt kontrol formlarına işlemek ve bilgisayar ortamında kayıt altına almak,
                        <br/>
                        •	Onaylanmış mimari projeye göre elektrik projelerin, mimari projeye uygunluğunu incelemek ve onaylamak,
                        <br/>
                        •	Onaylanmış mimari projeye göre mekanik projelerin, mimari projeye uygunluğunu incelemek ve onaylamak,
                        <br/>
                        •	Asansör projelerini incelemek ve asansör tescil belgesini onaylamak,
                        <br/>
                        •	Üstlerinden aldığı emir ve görevleri yerine getirmek,
                        <br/>
                        •	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek,
                        <br/>
                        Yapı Kontrol Bürosu Görev, Yetki ve Sorumlulukları
                        <br/>
                        MADDE 18
                        <br/>
                        •	Tadilat, yenileme, isim değişliği, müteahhit değişikliği vb. ruhsat talepleri ile gelen evrak ve projeleri incelemek ve ruhsatını düzenlemek,
                        <br/>
                        •	Kamu kurumlarından görüş almak için gelen evrak ve projeleri kontrol etmek ve onaylamak,
                        <br/>
                        •	Yapı kullanma izin (iskan) belgesi talebi ile gelen belgeleri inceleyerek yapının yerinde ruhsat ekli onaylı projesi ile kontrolünü yapmak ve yapı kullanma izin belgesini düzenlemek,
                        <br/>
                        •	Yapı denetim hizmet bedeli ödemesi öncesi yapının ruhsat eki onaylı projesine uygunluğunun yerinde kontrolünü yapmak,
                        <br/>
                        •	Yapı denetim hizmet bedeli ödemesi öncesi yapı ile ilgili tutanak test ve raporlarının kontrolünü yapmak,
                        <br/>
                        •	Onarım ve güçlendirme projelerinin kontrol edilerek ruhsat ve yapı kullanma izin (izin) belgelerinin verilmesini sağlamak,
                        <br/>
                        •	Yapı kullanma izin (iskan) belgesi harçlarını hesaplayarak tahakkukunu sağlamak,
                        <br/>
                        •	Ruhsat yenileme öncesi yapıların yerinde kontrolünü yapmak,
                        <br/>
                        •	Yapıların yılsonu seviye tespitlerini kontrol etmek ve onaylamak,
                        <br/>
                        •	Fesih edilmiş yapılarla ilgili yerinde tespit yapmak,
                        <br/>
                        •	Yapı denetim firmalarının yazışmalarını yapmak,
                        <br/>
                        •	İş bitirme talebi ile gelen belgelerin kontrolünü yapmak ve imzalamak,
                        <br/>
                        •	Su basman kotuna esas olacak şekilde düzenlenen ve arazi köşe kotlarını içeren plankote evrakını kontrol etmek ve onaylamak,
                        <br/>
                        •	±0.00 kotu talebi ile gelen plankote evrakının kontrolünü yapmak ve +0.00 kotunu belirlemek,
                        <br/>
                        •	Kot-kesit belgesindeki bilgilere ilaveten parsel içinde mevcut yapıların su basman kotuna bağlı olarak yatay ve dikey ölçülerinin belirlenmesi için kontur-gabari tespiti yapmak,
                        <br/>
                        •	Plankote, emsal krokisi, vaziyet planı, hali hazır, yapı aplikasyon krokisi ve bina tespit krokisi belgelerinin kontrol ve onay işlemlerini gerçekleştirmek,
                        <br/>
                        •	Üstlerinden aldığı emir ve görevleri yerine getirmek,
                        <br/>
                        •	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek,
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Kaçak Yapı Bürosu Görev, Yetki ve Sorumlulukları
                        <br/>
                        MADDE 19
                        <br/>
                        •	Yapılarla ilgili şikayetleri ve olumsuzlukları değerlendirmek,
                        <br/>
                        •	Kaçak yapı durdurma tutanağını düzenlemek,
                        <br/>
                        •	Gecekondu takibi ve engelleme işlemlerini yürütmek,
                        <br/>
                        •	Ruhsatsız yapılan yapıların takibi, denetimi ve zabıt tanzimini yapmak,
                        <br/>
                        •	Ruhsat ve eklerine aykırı olarak yapılan binaların tespitini yaparak gerekli yasal işlemlerini takip etmek,
                        <br/>
                        •	İmar mevzuatına aykırı yapılaşmayı önlemek için düzenli takip yapmak ve gerekli tedbirlerin alınmasını sağlamak,
                        <br/>
                        •	İmar mevzuatına aykırı yapıların tespiti, inceleme ve tetkiklerini yaparak aykırı olan yapıların inşaatını durdurmak, mühürlemek, durdurulan inşaatlarda faaliyetin devamının tespiti durumunda 3194 sayılı İmar Kanunu’nun 32 nci ve 42 nci maddelerine esas yapı tatil tutanağı düzenlemek,
                        <br/>
                        •	Kaçak veya ruhsat ve eklerine aykırı olarak yapılan yapılar için 3194 sayılı İmar Kanunu’nun 42 nci maddesine istinaden para cezası kararı alınması için dosyayı Encümene göndermek,
                        <br/>
                        •	Kaçak veya ruhsat ve eklerine aykırı olarak yapılan yapılar için 3194 sayılı İmar Kanunu’nun 32 nci maddesine istinaden yıkım kararı alınması için dosyayı Encümene göndermek,
                        <br/>
                        •	Kaçak olarak yapılan yapıların Belediye Encümeni tarafından yıkım kararı alındıktan sonra yıkımını yapmak veya yaptırmak,
                        <br/>
                        •	İmar Kanunu'nun 34 üncü maddesi gereği yapı ruhsatı olan inşaatlarda çevre güvenlik önlemlerini aldırmak,
                        <br/>
                        •	Ruhsata tabi olmayan basit tadilat ve tamir işlemleri ile ilgili 3194 Sayılı İmar Kanunu’nun ilgili maddesi uyarınca gerekli izni vermek ve takip etmek,
                        <br/>
                        •	775 sayılı Gecekondu Kanunu’na göre yıkımı yapılacak inşaatların yıkımını gerçekleştirmek,
                        <br/>
                        •	Kamu kurum ve kuruluşları ile mahkemelerden gelen taleplere yanıt vermek, Hukuk İşleri Müdürlüğü’ne zamanında bilgilendirme yaparak, bilgi ve belge göndermek, Üstlerinden aldığı emir ve görevleri yerine getirmek,
                        <br/>
                        •	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek,
                        <br/>
                        İmar Arşiv Birimi Görev, Yetki ve Sorumlulukları
                        <br/>
                        MADDE 20
                        <br/>
                        •	Arşiv kayıtlarını tutmak,
                        <br/>
                        •	Belediyeye gelen tüm projelerin birer nüshasını arşivleyerek gerektiğinde ibraz edilmesini sağlamak, ilgili mahkemelere ozalit veya fotokopi şeklinde göndermek,
                        <br/>
                        •	Arşivin düzen ve temizliğinden sorumlu olmak,
                        <br/>
                        •	Arşivde bulunan dosyalardan sorumlu olmak,
                        <br/>
                        •	Arşive gelen giden dosyaların takip ve denetimini yapmak,
                        <br/>
                        •	Üstlerinden aldığı emir ve görevleri yerine getirmek,
                        <br/>
                        •	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek,
                        <br/>
                        İmar Kalem Birimi Görev, Yetki ve Sorumlulukları
                        <br/>
                        MADDE 21
                        <br/>
                        •	Yapılan tüm yazışmaların arşiv kurallarına göre arşivlenmesini sağlamak,
                        <br/>
                        •	Resmi kurum ve vatandaştan gelen talepleri kayıt altına almak,
                        <br/>
                        •	Evrak kayıtlarını ve çıkışlarını yapmak,
                        <br/>
                        •	Kayıt yapılan evrakların havalesinin yapılması için Müdüre veya yetkilendirdiği büro sorumlusuna sunmak,
                        <br/>
                        •	Müdür veya büro sorumlusu tarafından havalesi yapılan evrakları ilgili personele teslim etmek,
                        <br/>
                        •	Çıkışı yapılan evraklar için dosya oluşturmak,
                        <br/>
                        •	Dosya arşivleme çalışmalarını yapmak,
                        <br/>
                        •	Üstlerinden aldığı emir ve görevleri yerine getirmek,
                        <br/>
                        •	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek,
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Strateji Geliştirme ve Kalite Yönetim Temsilcisi Görev Yetki ve Sorumlulukları
                        <br/>
                        MADDE 22
                        <br/>
                        1)	Belediye Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve ISO 9001:2008 Kalite Yönetim Sistemi uygulamalarında birim temsilcisi olarak görev yapar ve hazırlama çalışmalarında bulunmak.
                        <br/>
                        2)	Birimi ile ilgili dönemsel olarak performans ve kalite hedeflerini belirler, izler ve bu hedeflerine uygun faaliyetlerde bulunmak.
                        <br/>
                        3)	Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve ISO 9001:2008 Kalite Yönetim Sistemi ile ilgili birim aylık raporlarını hazırlamak.
                        <br/>
                        4)	Belediye Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı uygulamalarına ve Kalite politikasının benimsenmesine yönelik olarak çalışmalarda bulunur ve gereklerini yerine getirilmesini sağlamak.
                        <br/>
                        5)	Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite El Kitabında birimi ile ilgili bölümü hazırlar ve yılda bir kez gözden geçirmek, gerekirse revize etmek.
                        <br/>
                        6)	İç denetim faaliyeti kapsamında denetçilere birimi ile ilgili konularda bilgi verir ve Biriminde Kalite Yönetim Sistemi’nin etkinliği konusunda rapor hazırlar ve Yönetimin Gözden Geçirmesi toplantısına sunmak üzere Kalite Yönetim Koordinatörlüğüne iletmek.
                        <br/>
                        7)	Sistemde birimi ile ilgili doğabilecek uygunsuzlukların belirlenmesi ve giderilmesi için düzeltici, önleyici faaliyetlerin planlanması ve takibi işlemlerini yapmak.
                        <br/>
                        8)	Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite ile ilgili kurum içi ve kurum dışı toplantılara ve eğitimlere katılmak.
                        <br/>
                        9)	Yönetim tarafından oluşturulmuş olan diğer kurallar çerçevesinde ve Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite Yönetim Sistemi içinde hazırlanmış dokümanlarda belirtilen diğer görevlerini yerine getirmek.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Tüm Personelin Görev, Yetki ve Sorumlulukları
                        <br/>
                        MADDE 23
                        <br/>
                        Personelin görev, yetki ve sorumlulukları şunlardır:
                        <br/>
                        •	Müdür veya büro sorumlusu tarafından verilen emir ve talimatları yerine getirmek, bütün çalışmaları mevzuat hükümlerine uygun olarak yürütmek,
                        <br/>
                        •	Müdürlük ile ilgili yazışmaları yapmak, kayıtları tutmak, arşivlemek, gelen ve giden evrakların takibini yapmak ve her türlü büro işlerini yürütmek,
                        <br/>
                        •	Mesaiye riayet etmek, çalışma saatlerini etkin ve verimli kullanmak, çalışma arkadaşlarıyla uyumlu olmak, kılık ve kıyafet yönetmeliğine uymak,
                        <br/>
                        •	Büro malzemeleri ile kendisine teslim edilen diğer malzemeleri korumak, itinalı, etkin ve verimli şekilde kullanmak,
                        <br/>
                        •	Kendisine verilen görevleri titizlikle ve eksiksiz olarak yerine getirmek.
                        <br/>
                        •	Görevleriyle ilgili konularda gerektiğinde Müdürü bilgilendirmek,
                        <br/>
                        •	Bilgi edinme başvurularını cevaplayarak, müracaat sahibine zamanında iletmek ve sonucunu ilgili makama bildirmek,
                        <br/>
                        •	Kamu kurum ve kuruluşlarından gelen yazıların gereğini gecikmeksizin yerine getirmek ve cevap vermek,
                        <br/>
                        •	Süreli, günlü, acele ve ivedi yazıların gereğini süresinde yerine getirmek,
                        <br/>
                        •	Görev verilmesi halinde, seminer, kurs, konferans ve diğer hizmet içi eğitimlere katılmak, mesleki bilgisini geliştirmek,
                        <br/>
                        <br/>
                        <br/>
                        BEŞİNCİ BÖLÜM
                        <br/>
                        Hizmetlerin İcrası, İşbirliği ve Koordinasyon
                        <br/>
                        Hizmetlerin İcrası
                        <br/>
                        MADDE 24
                        <br/>
                        İmar ve Şehircilik Müdürlüğü’ndeki hizmetlerin icrası aşağıda gösterilmiştir.
                        <br/>
                        a) Görevin kabulü: Müdürlüğe gelen evrak bilgisayara dijital olarak işlenip, dijital ve fiziki ortamda gereği için ilgililerine verilir.
                        <br/>
                        b) Görevin planlanması: İmar ve Şehircilik Müdürlüğü’ndeki çalışmalar, Müdür ve büro sorumlusu tarafından düzenlenen plan içerisinde yürütülür.
                        <br/>
                        c) Görevin icrası: İmar ve Şehircilik Müdürlüğü tüm personeli kendilerine verilen görevleri gereken özen ve süratle yerine getirmek zorundadır.
                        <br/>
                        <br/>
                        <br/>
                        İşbirliği ve Koordinasyon
                        <br/>
                        MADDE 25
                        <br/>
                        (1) Belediye birimleri arasında ve birim içi işbirliği ve koordinasyon;
                        <br/>
                        a) İmar ve Şehircilik Müdürlüğü ile diğer birimler arasında ve birim içi koordinasyon Müdür tarafından sağlanır.
                        <br/>
                        b) İmar ve Şehircilik Müdürlüğü’ne gelen tüm yazılar İmar Kalem biriminde toplanır, konularına göre dosyalandıktan sonra büro sorumlusuna  sunulur.
                        <br/>
                        c) Büro sorumlusu evrakları niteliğine göre inceler, ilgililerine havale eder.
                        <br/>
                        (2) Diğer kuruluşlarla koordinasyon; tüm kamu kurum ve kuruluşları ile özel ve tüzel kişilerle yapacağı önemli yazışmalarını, sorumlu personel, büro sorumlusu ve Müdürün parafı ile Belediye Başkanı veya ilgili Belediye Başkan Yardımcısı imzası ile yürütür.
                        <br/>
                        <br/>
                        <br/>
                        ALTINCI BÖLÜM
                        <br/>
                        Çeşitli ve Son Hükümler
                        <br/>
                        Yürürlükten Kaldırılan Yönetmelik
                        <br/>
                        MADDE 26
                        <br/>
                        Bu yönetmeliğin yürürlüğe girmesiyle birlikte, daha önce yürürlükte olan İmar ve Şehircilik Müdürlüğü Görev ve Çalışma Yönetmeliği yürürlükten kaldırılmıştır.
                        <br/>
                        <br/>
                        <br/>
                        Yönetmelikte Hüküm Bulunmayan Haller
                        <br/>
                        MADDE 27
                        <br/>
                        İşbu Yönetmelikte hüküm bulunmayan hallerde yürürlükteki ilgili mevzuat hükümlerine uyulur.
                        <br/>
                        <br/>
                        <br/>
                        Yürürlük
                        <br/>
                        MADDE 28
                        <br/>
                        <br/>
                        <br/>
                        Bu Yönetmelik hükümleri, Gebze Belediye Meclisi’nce karara bağlandıktan ve ilan edildikten sonra yürürlüğe girer.
                        <br/>
                        <br/>
                        <br/>
                        Yürütme
                        <br/>
                        MADDE 29
                        <br/>
                        Bu Yönetmelik hükümlerini, Gebze Belediye Başkanı yürütür.
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

export default Mücahitkök;
