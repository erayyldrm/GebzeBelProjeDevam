import React from "react";

const Carullaher: React.FC = () => {
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
                        src="/images/kurumsal/mudurlukler/avatar-4.jpg"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">Destek Hizmetleri Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" /> Carullah Recai ER
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" /> destek@gebze.bel.tr
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

                        Amaç, Kapsam, Hukuki Dayanak, Tanımlar ve Temel İlkeler
                        <br/>
                        Amaç
                        <br/>
                        MADDE 1- (1)  Bu yönetmeliğin amacı:
                        <br/>
                        a)	Belediyemizin mal ve hizmet ihtiyaçlarını ilgili kanun, tüzük, kararname, yönetmelik, genelge ve tebliğler çerçevesinde temin etmek üzere çalışmaları yürütmek, hizmet binalarının / ünitelerinin bakımını, onarımını, temizliğini, ısıtma-soğutma, tesisat işlerini,  araç bakım ve onarım ile araçların yönetsel ve teknik süreçleri günün koşullarına göre en iyi şekilde iyileştirerek gerçekleştirmek
                        <br/>


                        b)	Gebze Belediyesi’ne bağlı birimlere, ilgili yasa ve yönetmelikler uyarınca verilecek lojistik destek hizmetlerinin ifası için gerekli demirbaş malzeme, tüketim malzemesi, yakacak, basılı kâğıt (Matbu Evrak), kırtasiye, yolluk araç gibi gerekli ihtiyaçları birimlerin teklifi ve mali yılı bütçelerinde tahsis edilen ödenekler dâhilinde, yürürlükte bulunan ilgili yasa, yönetmelik ve kararnameler uyarınca temin etmek, ilgili birime teslim etmek, edinilen demirbaş ve tüketim malzemelerinin ilgili birim tarafından kayıt ve saklanmasını takip etmek ve Belediyenin görmekte olduğu iş ve hizmetler için kullanılmakta olan kendisine ait stok durumlarının izlenmesini sağlamak için;

                        <br/>

                        İlgili kanun, yönetmelik, talimat ve kararlar çerçevesinde Gebze Belediyesi Destek Hizmetleri Müdürlüğünün görev, yetki ve sorumlulukları ile çalışma usul ve esaslarını düzenlemektir.

                        <br/>

                        Kapsam
                        <br/>
                        MADDE 2- (1) Bu yönetmelik Gebze Belediyesi Destek Hizmetleri Müdürlüğü’nün kuruluş, görev, yetki ve sorumlulukları ile çalışma usul ve esaslarını kapsar.

                        <br/>

                        Hukuki Dayanak
                        <br/>
                        MADDE 3- (1) Bu yönetmelik, 03/07/2005 tarihli ve 5393 sayılı Belediye Kanununun 15/b maddesine ve diğer yürürlükteki mevzuatlara dayanılarak hazırlanmıştır.

                        <br/>

                        Bağlayıcılık
                        <br/>
                        MADDE 4- (1)- Destek Hizmetleri Müdürlüğü yürüttüğü tüm iş ve işlemlerde aşağıdaki mevzuat hükümlerine uymakla yükümlüdür. 5393 sayılı Belediye Kanunu, 5216 sayılı Belediye Kanunu, 5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu, 4734 sayılı Kamu İhale Kanunu, 4735 sayılı Kamu İhale Sözleşmeleri Kanunu, 5366 sayılı Tebligat Kanunu, 832 Sayılı Sayıştay Kanunu, 232 Sayılı Karayolları Trafik Kanunu, 5188 sayılı Özel Güvenlik Hizmetlerine Dair Kanun, 2023/10 sayılı Özel Güvenlik Hizmetleri Genelgesi ile tüm bu yasaların uygulama yönetmelikleri ve ilgili tüm yasal mevzuat hükümlerini yerine getirmek hususunda yetkili ve sorumludur.
                        <br/>
                        Tanımlar
                        <br/>
                        MADDE 5- (1) Bu yönetmelikte sözü geçen;

                        <br/>

                        a) Belediye: Gebze Belediye Başkanlığını,
                        <br/>
                        b) Başkan: Gebze Belediye Başkanını,
                        <br/>
                        c) Meclis: Gebze Belediye Meclisini,
                        <br/>
                        d) Başkan Yardımcısı: Gebze Belediyesi Destek Hizmetleri Müdürlüğü’nün bağlı bulunduğu Başkan Yardımcısını,
                        <br/>
                        e) Birim: Destek Hizmetleri Müdürlüğünü,
                        <br/>
                        f) Müdür: Destek Hizmetleri Müdürünü,
                        <br/>
                        g) Servis: Destek Hizmetleri Müdürlüğü İdari İşler ve/veya İhale Servisi ve/veya Güvenlik Servisini,
                        <br/>
                        h)SYT-KYS: Strateji Yönetim Temsilcisini ve Kalite Yönetim Sistemi Temsilcisini,
                        <br/>
                        ı) Personel: Destek Hizmetleri Müdürlüğü bünyesinde görev yapan tüm personeli ifade eder.


                        <br/>
                        Temel İlkeler
                        <br/>
                        MADDE 6- (1)  Gebze Belediye Başkanlığı Destek Hizmetleri Müdürlüğü’nün tüm çalışmalarında;
                        <br/>


                        a)	Belediyemiz birimlerinin ve idari, binanın ihtiyacı olan mal ve hizmetlerin, kalite standardı çerçevesinde satın alınarak hizmetlerin sürdürülebilirliğini sağlamak.
                        <br/>
                        b)	Belediyemiz birim ve tesislerinde güvenlik önlemlerini sağlamak.
                        <br/>
                        c)	Belediyemiz envanterlerinin güvenli ve etkin bir şekilde kullanılması, teknolojinin gelişmesine paralel olarak güncelliğinin sağlanması birim performans amacımız olup,
                        <br/>
                        Ayrıca;
                        <br/>
                        a) Hizmetlerimizde kalite, etkinlik ve verimlilik
                        <br/>
                        b) Belediye karar ve uygulamalarında şeffaflık ve hesap verebilirlik
                        <br/>
                        c)  Hizmetlerimizde vatandaş odaklılık
                        <br/>
                        d) Gebze’yi Katılımcı anlayışla yönetmek
                        <br/>
                        e) Belediye Hizmetlerin üretim ve sunumda bilgi ve teknolojiden azami derecede yararlanmak
                        <br/>
                        f) Belediye karar ve uygulamalarında yasalara uymak
                        <br/>
                        g) Belediye Hizmetlerinin ihtiyaçlara ve önceliklere göre adil dağıtımı temel ilkeleri esas alınır.
                        <br/>




                        İKİNCİ BÖLÜM
                        <br/>
                        Kuruluş, Teşkilat, Personel,  Bağlılık, Görev, Yetki ve Sorumluluklar
                        <br/>
                        Kuruluş
                        <br/>
                        MADDE 7- (1) Gebze Belediyesi Destek Hizmetleri Müdürlüğü, 22/02/2007 tarihli Resmi Gazetede yayınlanarak yürürlüğe giren Belediye ve Bağlı Kuruluşları ile Mahalli İdare Birlikleri Norm Kadro İlke ve Standartlarına Dair Yönetmelik gereğince Gebze Belediye Meclisi’nin 10/04/2007 tarih ve 2007/61 sayılı kararıyla kurulmuştur.
                        <br/>
                        Teşkilat
                        <br/>
                        MADDE 8- (1) Müdürlüğün teşkilat yapısı aşağıdaki gibidir.
                        <br/>


                        Müdür
                        <br/>
                        a-	Destek Hizmetleri (Servis)
                        <br/>
                        b-	Evrak Kayıt ve Raporlama
                        <br/>
                        c-	Strateji Geliştirme-Kalite Yönetimi
                        <br/>
                        d-	Taşınır Kayıt/ Taşınır Kontrol
                        <br/>
                        e-	İhale Servisi
                        <br/>
                        f-	Satınalma
                        <br/>
                        g-	İdari İşler Servisi
                        <br/>
                        h-	Güvenlik Servisi
                        <br/>
                        Personel
                        <br/>
                        MADDE 9- (1) Gebze Belediyesi Destek Hizmetleri Müdürlüğü’nde 1 Müdür ile norm kadro standartlarına uygun nitelik ve sayıda memur, sözleşmeli memur, geçici işçi, kadrolu işçi ve şirket personeli ile görev yapmaktadır.
                        <br/>
                        a-	Norm Kadro İlke ve Standartlarına İlişkin Yönetmelik hükümleri çerçevesinde, birimlerin hizmet alanları, görev ve sorumluluklarına paralel olarak ihtiyaç duyulan nitelik ve sayıda, iş ve işlemlerin daha etkin ve verimli yürütülmesi için Müdürlüğün talebi üzerine, İnsan Kaynakları ve Eğitim Müdürlüğü’nün teklifi, İnsan Kaynakları ve Eğitim Müdürlüğü’nün bağlı bulunduğu Başkan Yardımcısı’nın uygun görüşü ve Belediye Başkanı’nın onayı ile kadro karşılığı olmaksızın hizmet gereği, personel görevlendirilmesi yapılabilir.

                        <br/>

                        Bağlılık
                        <br/>
                        MADDE 10-  (1) Müdürlük, Belediye Başkanına veya görevlendireceği Başkan Yardımcısına bağlı olarak görevlerini yürütür. Destek Hizmetleri Müdürü, hizmet gereklerine uygun olarak birimlerin yapısı, çalıştırılacak personelin dağılımı ve yapılacak işlerle ilgili düzenlemeleri ve işlemleri mevzuat çerçevesinde bağlı bulunduğu Başkan Yardımcısı’nın onayıyla yapar.
                        <br/>
                        Müdürlüğün görev, yetki ve sorumlulukları
                        <br/>
                        MADDE 11- (1)  Destek Hizmetleri Müdürlüğü, Gebze Belediye Başkanlığının amaçları, prensipleri, politikaları 5393 sayılı Belediye Kanunu, 5216 sayılı Belediye Kanunu, 5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu, 4734 sayılı Kamu İhale Kanunu, 4735 sayılı Kamu İhale Sözleşmeleri Kanunu, 5366 sayılı Tebligat Kanunu, 832 Sayılı Sayıştay Kanunu, 232 Sayılı Karayolları Trafik Kanunu, 5188 sayılı Özel Güvenlik Hizmetlerine Dair Kanun, 2023/10 sayılı Özel Güvenlik Hizmetleri Genelgesi ve diğer ilgili mevzuat ile Belediye Başkanı ve diğer üst yönetimin belirleyeceği esaslar çerçevesinde, stratejik plan, yıllık performans programı, İSO 9001  Kalite El Kitabı,  yatırım programı, bütçesine uygun, Başkanlık Makamının emir ve direktifleri doğrultusunda Satınalma işlemlerini, küçük onarımlar da dâhil olmak üzere yapıma ilişkin onarım işlemlerini yürütmekle yükümlü olup, görevleri:
                        <br/>
                        1.	Belediye birimlerinin faaliyetlerinde kullanılmak üzere ihtiyaç duyulan mal ve hizmet işlerinin piyasa araştırmasını yaparak, uygun şartlarda zamanında temin edilmesini sağlamak.
                        <br/>
                        2.	Belediyeye alımı gerçekleşmiş mal ve hizmetlerin kayıtlarını (komisyon karar defterinde ve bilgisayarda) tutmak.
                        <br/>
                        3.	Müdürlüğümüze ait Taşınır Mal Yönetmeliğine uygun taşınır ( giriş-çıkış ) hesaplarını tutmak. Kesilen Taşınır İşlem Fişini ve diğer düzenlenen evrakları (yaklaşık maliyet-onay-teklif-komisyon kararı) ödeme için muhasebeye göndermek.
                        <br/>
                        4.	Müdürlüğümüze ait Demirbaş malzemeleri kayıt altına almak, barkotlamak ve ilgili kişiye zimmetini hazırlamak.
                        <br/>
                        5.	Birimimize ait tüketim malzemelerinin çıkışları için düzenlenen Taşınır İşlem Fişlerini üç aylık periyotlarla çıkararak Mali Hizmetler Müdürlüğüne göndermek.
                        <br/>
                        6.	Kamu ihale kanununa uygun olarak yapılan mal ve hizmet alımlarını Ekap üzerinden gerçekleştirmek.
                        <br/>
                        7.	Belediyenin Sayıştay’a göndereceği yılsonu İdare Taşınır Mal Yönetim Hesabı Cetvelini hazırlamak.
                        <br/>
                        8.	4734 sayılı K.İ.K göre müdürlüğümüze ait ihaleleri yapmak.
                        <br/>
                        9.	Belediyemiz ihtiyacı doğrultusunda talep edilmesi halinde Devlet Malzeme Ofisi kanalı ile taşıt satın alınmasını gerçekleştirmek.
                        <br/>
                        10.	Ambara alınan malzemelerin kayıt ve saklanması ile stok durumlarını kontrol etmek.
                        <br/>
                        11.	Birimlerin ozalit, proje vb. Belediyemiz dışı alımı gerektirecek fotokopi hizmetini yapmak/yaptırmak.
                        <br/>
                        12.	Müdürlük yıllık bütçesini hazırlamak.
                        <br/>
                        13.	Müdürlüğün Stratejik Plan ve Performans programını hazırlamak.
                        <br/>
                        14.	İSO Kalite Yönetim Sistemi çerçevesinde iş talimatları ve prosedürlerin uygulanmasını sağlamak ve bunlarla ilgili formları ve evrakları hazırlamak.
                        <br/>
                        15.	Tüm birimlerin telefon, su, elektrik ve doğalgaz aboneliklerini yapmak, faturalarının takibini yapmak.
                        <br/>
                        16.	Hizmet binalarının iç temizliğini yaptırmak ve takip etmek.
                        <br/>
                        17.	Belediye binasında, ek hizmet binalarında ve özel güvenlik izni alınan diğer yerlerde güvenlik hizmetlerini sağlamak.
                        <br/>
                        18.	Belediyemizin düzenlediği sosyal ve kültürel etkinlikler de, milli bayramlarda sahne ve platform kurulması işlemlerini yapmak. Gerek görüldüğü durumlarda ikram hazırlamak. Vatandaşların kendi cemiyetleri (düğün-nişan vb.) için masa-sandalye taleplerini imkânlar ölçüsünde karşılamak.
                        <br/>
                        19.	Hizmetlerin aksamaması için stok kontrollerini her gün, sayımlarını yılda bir kere yapmak.
                        <br/>
                        20.	Müdürlüğü ilgilendiren teknik konularda vatandaş şikâyetlerini incelemek, değerlendirmek ve gerekli uygulamaları yerine getirmek.
                        <br/>
                        21.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        22.	Müdürlüğümüz bünyesinde;
                        <br/>
                        a.	İş Güvenliği önlemlerini almak
                        <br/>
                        b.	Çalışma koşullarını iyileştirmek
                        <br/>
                        c.	Hizmet yürüttüğümüz tesis, makine, araç-gereç ve edevatı korumak.
                        <br/>
                        d.	Bunları modernize etmek
                        <br/>


                        ÜÇÜNCÜ BÖLÜM
                        <br/>
                        Müdürlük Personellerinin Görev Yetki ve Sorumlulukları, Vekalet
                        <br/>
                        MÜDÜR
                        <br/>
                        MADDE 12 – (1)  Müdürün görev yetki ve sorumlulukları şunlardır.
                        <br/>
                        1.	Müdür;  Destek Hizmetleri Müdürlüğünün amiri olup Belediye Başkanlığına karşı dairenin tüm sorumluluğu kendisine aittir.
                        <br/>
                        2.	Kendisine bağlı personelin çalışmalarını düzenlemek ve işbirliğini sağlamak.
                        <br/>
                        3.	Birim personelin disiplin ve sicil amiridir.
                        <br/>
                        4.	Müdürlüğü ile ilgili çalışmaları izler ve denetlemek.
                        <br/>
                        5.	Belediye binasında, ek hizmet binalarında ve özel güvenlik izni alınan diğer yerlerde güvenlik hizmetlerinin aksatılmadan yürütülmesini sağlamak.
                        <br/>
                        6.	Kendi çalışma konularında resmi ve özel kuruluşlarla işbirliği kurmak, yetkili üst makamlara bilgi vermek.
                        <br/>
                        7.	Birim bütçesini ve faaliyet raporlarını hazırlayarak başkanlığa sunmak.
                        <br/>
                        8.	Mal, hizmet, danışmanlık alımlarını yaptırmak. Alımlarda kaliteli ve orijinal mal ve hizmeti rekabet ortamı içerisinde ucuza alınmasını sağlamak, bu işleri organize etmek.
                        <br/>
                        9.	Diğer müdürlüklerle koordineli bir şekilde çalışmak.
                        <br/>
                        10.	Hizmetlerin aksamaması için gerekli yedek parça, malzeme ve bilgi akışını takip etmek.
                        <br/>
                        11.	İşçi sağlığı ve iş güvenliği için gerekli tedbirlerin alınmasını sağlamak, bu konudaki Kanun ve yönetmeliklerle ilgili çalışmalar yapmak.
                        <br/>
                        12.	Taşınır Kayıt Yetkilisinin hazırladığı evrak ve hesapların kontrolünü yapmak ve onaylamak.
                        <br/>
                        13.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        14.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        15.	Müdür, Başkan Yardımcısı ve Belediye Başkanına karşı sorumludur.


                        <br/>
                        İHALE SERVİSİ SORUMLUSU
                        <br/>
                        MADDE 13- (1)  Görev, yetki ve sorumlulukları şunlardır.
                        <br/>
                        1.	Belediye birimlerinin faaliyetlerinde kullanılmak üzere ihtiyaç duyulan mal ve hizmet işlerinin piyasa araştırmasını yaparak, uygun şartlarda zamanında temin edilmesini sağlamak. Başkanlık Makamının emir ve direktifleri doğrultusunda Satın alma işlemlerini yaptırmak.
                        <br/>
                        2.	Belediyeye alımı gerçekleşmiş mal ve hizmetlerin kayıtlarını (bilgisayarda) tutmak.
                        <br/>
                        3.	Müdürlüklerin Taşınır İstek Belgesi ile talep ettikleri mal/malzeme için hazırlanan yaklaşık maliyet ve teklif evraklarının ilgili firmalara ulaştırılmasını,  daha sonra geri dönüşümünü takip etmek. (Faks, mail yolu ile ve ya bizzat elden vererek.)
                        <br/>
                        4.	Yaklaşık maliyete uygun olarak Onay belgesi düzenlemek ve imzaya ( Birim Müdürü, ilgili Başkan Yardımcısı, Başkan ) sunmak. Teklif evraklarını ve Komisyon Karar Tutanağını hazırlamak.
                        <br/>
                        5.	En avantajlı firmanın belirlenmesinden sonra ilgili firmayı arayıp malzemenin ve faturanın getirilmesini sağlamak.
                        <br/>
                        6.	Tedarikçi listesini hazırlamak.
                        <br/>
                        7.	Hazırlanan tedarikçi listesinin yıllık periyotlarla gözden geçirerek listede bulunan tedarikçilerin performans değerlendirmesini yapmak.
                        <br/>
                        8.	4734 sayılı Kamu İhale Kanununa göre Müdürlüğümüze ve tüm Müdürlüklere ait İhaleleri yapmak.
                        <br/>
                        9.	Bu ihalelere ait ihale dosyalarını hazırlamak.
                        <br/>
                        10.	Müdürlüğe ait İhalelerde; İhale komisyonlarında görev alıp, ihalelere ait teknik şartnameleri hazırlamak.
                        <br/>
                        11.	Müdürlüğümüze ait yapılan ihalelerin takibini yapmak ve sonuçlandırmak. Belediye birimlerinin faaliyetlerinde kullanılmak üzere ihtiyaç duyulan mal ve hizmet işlerinin piyasa araştırmasını yaparak, uygun şartlarda zamanında temin edilmesini sağlamak.
                        <br/>
                        12.	Belediyeye alımı gerçekleşmiş mal ve hizmetlerin kayıtlarını (komisyon karar defterinde veya dijital ortamında) tutmak.
                        <br/>
                        13.	Belediye tarafından Kamu İhale Kanununa göre yapılan ihalelerin mevzuata uygun bir şekilde gerçekleştirilmesini sağlamaya yönelik olarak ihale işlem dosyasında bulunması gerekli belgelerin düzenlenmesine destek olmak.
                        <br/>
                        14.	Birimlerden, Elektronik Kamu Alımları Platformu (EKAP)’na girişi yapılarak gelen ihale dosyalarının ilan ve davet işlemlerinin gerçekleştirilmesini sağlamak.
                        <br/>
                        15.	İhale mevzuatında yapılan değişikliklerin takibi ile ilgili birimler arasındaki koordinasyonun sağlanması suretiyle ihalelerin mevzuata uygun şekilde gerçekleştirilmesi amacına hizmet etmek.
                        <br/>
                        16.	İhale ilanlarının yayınlanmasını sağlamak.
                        <br/>
                        17.	İhale komisyonlarının sekretarya hizmetlerini yürütmek.
                        <br/>
                        18.	İhale gündemlerini hazırlamak ve ilgili birimlere tebliğ etmek.
                        <br/>
                        19.	İhale dosyalarının Müdürlüğe intikalinden, ihale sonucunun ihale yetkilisinin onayına sunulmasına kadar olan süreçte İhale Komisyonu ve İhale Yetkilisinin talebi üzerine ihale sürecindeki gerekli yazışmaları yapmak.
                        <br/>
                        20.	Elektronik Kamu Alımları Platformu (EKAP) üzerinden yapılan işlemler ile ilgili Birimlerce gelen talepleri değerlendirmek ve sorunlara yönelik çözüm önerileri sunmak.
                        <br/>
                        21.	Birimlere, Elektronik Kamu Alımları Platformu işlemlerinde destek olmak üzere Elektronik Kamu Alımları Platformu (EKAP) sürecini yönetmek.
                        <br/>
                        22.	İhale komisyon kararları ve ihale dosyasının birer nüshasını arşivleyip diğerlerini ilgili birimlere göndermek.
                        <br/>
                        23.	E-imza ile gerçekleştirilecek işlemlerin yapılmasını sağlamak.

                        <br/>

                        İHALE SORUMLUSU
                        <br/>
                        MADDE  14- (1) Görev, yetki ve sorumlulukları şunlardır.
                        <br/>
                        1.	4734 sayılı Kamu İhale Kanununa göre Müdürlüğümüze ait İhaleleri yapmak.
                        <br/>
                        2.	Bu ihalelere ait ihale dosyalarını hazırlamak.
                        <br/>
                        3.	İhale komisyonlarında görev alıp, ihalelere ait teknik şartnameleri hazırlamak.
                        <br/>
                        4.	Sonuçlanan ihalelere ait hak ediş dosyalarını hazırlamak.
                        <br/>
                        5.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        6.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        7.	Müdüre karşı sorumludur.
                        <br/>
                        SATINALMA SERVİS SORUMLUSU
                        <br/>
                        MADDE 15- (1)  Görev, yetki ve sorumlulukları şunlardır.
                        <br/>
                        1.	Büro çalışan personeli sevk ve idare etmek.
                        <br/>
                        2.	Memur ve işçi ile ilgili sorunların giderilmesinde görev almak.
                        <br/>
                        3.	Memur ve işçi ile çıkabilecek olumsuzların giderilmesinde veya hakkında müdüre bilgi vermek.
                        <br/>
                        4.	Personel ile ilgili disiplin işlemlerini takip etmek.
                        <br/>
                        5.	Yapılan çalışmalar hakkında haftalık ve aylık olarak müdüre rapor vermek.
                        <br/>
                        6.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        7.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        8.	Müdüre karşı sorumludur.
                        <br/>
                        SATINALMA SORUMLUSU
                        <br/>
                        MADDE 16- (1)  Görev, yetki ve sorumlulukları şunlardır.
                        <br/>
                        1.	Müdürlüklerin Taşınır İstek Belgesi ile talep ettikleri mal/malzeme için hazırlanan yaklaşık maliyet ve teklif evraklarının ilgili firmalara ulaştırılmasını,  daha sonra geri dönüşümünü takip etmek. (Faks, mail yolu ile ve ya bizzat elden vererek.)
                        <br/>
                        2.	Yaklaşık maliyete uygun olarak Onay belgesi düzenlemek ve imzaya ( Birim Müdürü, ilgili Başkan Yardımcısı, Başkan )  sunmak. Teklif evraklarını ve Komisyon Karar Tutanağını hazırlamak.
                        <br/>
                        3.	En avantajlı firmanın belirlenmesinden sonra ilgili firmayı arayıp malzemenin ve faturanın getirilmesini sağlamak.
                        <br/>
                        4.	Tedarikçi listesini hazırlamak.
                        <br/>
                        5.	Hazırlanan tedarikçi listesinin yıllık periyotlarla gözden geçirerek listede bulunan tedarikçilerin performans değerlendirmesini yapmak.
                        <br/>
                        6.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        7.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        8.	Müdüre karşı sorumludur.
                        <br/>


                        GÜVENLİK SERVİSİ SORUMLUSU
                        <br/>
                        MADDE  17- (1)  Görev, yetki ve sorumlulukları şunlardır
                        <br/>
                        1.	Mal ve hizmet alımı iş ve işlemlerini yürütmek.
                        <br/>
                        2.	Müdürlük hizmetleriyle ilgili; Özel Güvenlik Personeli Hizmet ile ilgili iş ve işlemlerini yürütmek.
                        <br/>
                        3.	Özel güvenlik personelinin özlük dosya takiplerini yapmak.
                        <br/>
                        4.	Amirliğe havale edilen evrakların gereğini yerine getirmek ve Amirlikten çıkan evrakların arşivleme işlemlerini yürütmek.
                        <br/>
                        5.	Özel güvenlik personellerine ait puantaj ve aylık vardiya işlemlerini yürütmek.
                        <br/>
                        6.	Belediyenin özel güvenlik kapsamına alınması istenen yerlerinin izin alma işlemlerini gerçekleştirerek özel güvenlik çalışma izinleri alınan bu yerlerde güvenlik hizmetinin aksamadan yürütülmesini sağlamak.
                        <br/>
                        7.	Müdürlükte çalışan işçi-hizmetli personelin puantaj kayıtlarını tutmak, sevk ve idaresini sağlamak.
                        <br/>
                        8.	Müdürlük idari hizmetlerinin yürütülmesini sağlamak.
                        <br/>
                        9.	Güvenlik ile ilgili mal ve hizmet alımlarını ilgili birime bildirmek .
                        <br/>
                        10.	Birime ait tüm araçların bakımını, muayenesini, yakıt takibini ve diğer işlerini yürütmek.
                        <br/>
                        11.	Her türlü mal-malzeme, zimmete konu demirbaşların takibinin muhafazasını yapmak.
                        <br/>
                        12.	Birimin çalışma esaslarının belirlemek ve geliştirmek.
                        <br/>
                        13.	Özel Güvenlik Personellerinin mesai giriş ve çıkış saatlerinin kontrollerini sağlamak.
                        <br/>
                        14.	Özel Güvenlik Personellerinin elektronik ortamda müdürlükle ilgili haberleşmesine yardımcı olmak. ( SMS, E-Posta  vb.)
                        <br/>
                        15.	Özel Güvenlik Personellerinin disiplin işlemlerinin takibini yapmak.
                        <br/>
                        16.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        17.	Her ay birim personeli ile değerlendirme toplantısı yapmak.
                        <br/>
                        18.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.

                        <br/>

                        ÖZEL GÜVENLİK PERSONELİNİN GÖREV VE SORUMLULUKLARI
                        <br/>
                        MADDE  18- (1)  Görev, yetki ve sorumlulukları şunlardır
                        <br/>
                        1.	15188 sayılı Özel Güvenlik Hizmetlerine Dair Kanun kapsamında Belediye binasında, ek hizmet binalarında ve özel güvenlik izni alınan diğer yerlerde güvenlik hizmetlerinin aksatılmadan yürütülmesini sağlamak.
                        <br/>
                        2.	Herhangi bir asayiş problemi vukuu bulduğunda gerekli olan bilgilendirme ve yardım isteklerini ivedilikle yerine getirmek.
                        <br/>
                        3.	Güvenlik görevleriyle ilgili görev alanlarında ortaya çıkabilecek olayları Olay Tutanağı ile tespit ederek çalıştıkları birimde bulunan güvenlik sorumlusuna bildirmek ve kayıp eşyaları tutanak ile teslim almak.
                        <br/>
                        4.	Belediye tarafından yapılan hizmet satın alımı şartnamelerine uygun hareket etmek.
                        <br/>
                        5.	Görev alanlarında araç giriş-çıkışının kontrolünü sağlamak.
                        <br/>
                        6.	Görevli olduğu saatlerde güvenlik kimlik kartını takmak.
                        <br/>
                        7.	Kıyafetleriyle bağdaşmayacak şekilde kolye, madalyon, künye, rozet, vb. şeyler takmamak.
                        <br/>
                        8.	Kıyafetini temiz ve ütülü tutmak, erkek personeller için günlük sakal tıraşını aksatmamak.
                        <br/>
                        9.	Çalıştığı yerin temizliğine ve tertip düzenine özen göstermek, görev esnasında sigara içmemek.
                        <br/>
                        10.	Üstlerinden aldıkları emirleri yerine getirerek; talep, şikayet ve dileklerini hiyerarşik yapıya uygun çözümlemek.
                        <br/>
                        11.	Resmi üniforma ve teçhizatı, görev yeri ve teçhizatı dışında kullanmamak.
                        <br/>
                        12.	Afet durumlarında yeterli ekipman ile kendi can güvenliği öncelikli olmak üzere ilk müdahalede bulunmak ve ilgili müdahale telefonlarını arayarak gecikmeden bilgi vermek.
                        <br/>
                        13.	Devir-Teslim işlemi yapılmadan görev yerini terk etmemek.
                        <br/>
                        14.	Görev yerinde bulunan malzeme ve teçhizatları usulüne uygun ve titiz kullanmak.
                        <br/>
                        STRATEJİ GELİŞTİRME ve KALİTE YÖNETİM TEMSİLCİSİ
                        <br/>
                        MADDE 19 – (1)  Görev yetki ve sorumlulukları şunlardır.
                        <br/>
                        1.	İSO 9001:2015 Kalite Sisteminde Kalite Temsilcisi olarak görev yapar ve Kalite Sistemi ile ilgili dönemsel raporları hazırlamak.
                        <br/>
                        2.	Kalite Yönetim Sisteminin birim dokümantasyonunu hazırlamak.
                        <br/>
                        3.	Kalite Politikasının birim personeli tarafından benimsenmesi ile ilgili çalışmalarda bu politikanın gerekliklerine uyulmasını sağlamak.
                        <br/>
                        4.	Kalite Yönetim Sisteminin iyileştirilmesi ve geliştirilmesi ile ilgili çalışmalarda bulunmak.
                        <br/>
                        5.	Gerek birim iç teftiş ve gerekse dış denetimler için evrakları düzenler ve hazır tutar. Teftiş ve denetim sonuçlarına göre düzeltici ve önleyici faaliyetleri başlatır, izler ve neticesini değerlendirmek.
                        <br/>
                        6.	Kalite ile ilgili kurum içi-kurum dışı toplantılara katılmak.
                        <br/>
                        7.	Müdürlüğün stratejik plan ve performans programının hazırlamak.
                        <br/>
                        8.	Müdürlüğün Faaliyet raporunu Maliye bakanlığınca yayınlanan Performans Esaslı Bütçeleme Rehberine göre hazırlamak.
                        <br/>
                        9.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        10.	Müdüre karşı sorumludur.


                        <br/>
                        TAŞINIR KAYIT YETKİLİSİ
                        <br/>
                        MADDE 20-(1)  Görev, yetki ve sorumlulukları şunlardır.
                        <br/>
                        1.	Taşınırların giriş ve çıkışına ilişkin kayıtları tutmak, bunlara ilişkin belge ve cetvelleri düzenlemek, girişi yapılan malzemelerin müdürlüklere devrini yapmak.
                        <br/>
                        2.	Tüketim malzemelerinin çıkışları için düzenlenen Taşınır İşlem Fişlerini üç aylık periyotlarla Mali Hizmetler Müdürlüğüne teslim etmek.
                        <br/>
                        3.	Birime ait demirbaş zimmetlerini yapmak, barkotlamak. Yılsonunda demirbaş sayımı yapmak. Listeleri güncellemek.
                        <br/>
                        4.	Sayıştaya verilecek yılsonu Taşınır Yönetim Hesabı Cetvelini hazırlamak.
                        <br/>
                        5.	Ambar sayımı yapıp yılsonu stok durumunu belirlemek.
                        <br/>
                        6.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        7.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        8.	Taşınır Kontrol Yetkilisi ve Müdüre karşı sorumludur.




                        <br/>
                        TAŞINIR KONTROL YETKİLİSİ
                        MADDE  21- (1)  Görev, yetki ve sorumlulukları şunlardır
                        <br/>
                        1.	Taşınır kayıt ve işlemleri ile ilgili olarak düzenlenen belge ve cetvellerin mevzuata ve mali tablolara uygunluğunu kontrol etmek
                        <br/>
                        2.	Harcama Birimi Taşınır Mal Yönetim Hesabı Cetvelini imzalayarak harcama yetkilisine sunmak
                        <br/>
                        3.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        4.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        5.	Müdüre karşı sorumludur.



                        <br/>

                        AMBAR GÖREVLİSİ
                        <br/>
                        MADDE  22- (1)  Görev, yetki ve sorumlulukları şunlardır
                        <br/>
                        1.	Ambara giren ve ambardan çıkan malların kaydını ve kontrolünü yapmak.
                        <br/>
                        2.	Getirilen malzemelerin kontrolü ve teslim alınmasından sonra malzemelerin depo içindeki yerlerine düzenli bir şekilde yerleştirilmesini sağlamak.
                        <br/>
                        3.	Depoda bulunan tüm malzemelerin listesini ve raf numarasını bilgisayara yüklemek.
                        <br/>
                        4.	Müdürlüklerden gelen malzeme talepleri için hazırlanan talep fişine ve depodaki malzemenin durumuna göre,  malzemenin depodan çıkışını yapmak. Talep fişine uygun olarak depo programından malzeme çıkışını düzenlemek. İşi biten talep fişini arşivlemek.
                        <br/>
                        5.	İhtiyaç halinde malzeme talebinde bulunmak.
                        <br/>
                        6.	Deponun bakım ve düzeninden sorumlu olmak.
                        <br/>
                        7.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        8.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        9.	Taşınır Kontrol Yetkilisi ve Müdüre karşı sorumludur.

                        <br/>

                        EVRAK KAYIT VE RAPOR SORUMLUSU
                        <br/>
                        MADDE 23- (1)  Görev, yetki ve sorumlulukları şunlardır.
                        <br/>
                        1.	OMİS, EBYS ve ULAKBEL gibi Evrak Takip Programlarını düzenli kontrol ederek, sistem üzerinden Müdürlüğe gelen evrakların çıktısını alarak, deftere kaydını yapmak.
                        <br/>
                        2.	Müdür tarafından havale edilen evrakı ilgili personele tebliğ etmek.
                        <br/>
                        3.	Gelen ve Giden evrakları kayıt defterine sayılarına ve konularına göre işlemek.
                        <br/>
                        4.	İç-dış yazışmaları yapmak ve bu yazılara OMİS, EBYS ve ULAKBEL gibi evrak takip programları üzerinden numara vererek ilgili birime göndermek.
                        <br/>
                        5.	Müdürlüğün faaliyet raporlarını(haftalık, aylık) hazırlamak.
                        <br/>
                        6.	Tahakkuk evraklarını hazırlayıp, Mali Hizmetler Müdürlüğüne göndermek.
                        <br/>
                        7.	Acil ihtiyaçlar için avans hazırlamak.
                        <br/>
                        8.	Kurum içi – kurum dışı gelen ve giden evrakların dosyalarını hazırlamak ve arşivlemek.
                        <br/>
                        9.	İşlemi biten evrakların arşive kaldırılmasından, arşivdeki evrakların muhafazasından ve istenildiği zaman çıkarılmasından sorumlu olmak.
                        <br/>
                        10.	Personelin çalışma saatlerini, devam durumlarını ve fazla mesailerini puantaj listesine işlemek.
                        <br/>
                        11.	Fazla mesai olurlarını hazırlamak ve mesai formlarını doldurmak.
                        <br/>
                        12.	Personelin senelik izinlerini ve istirahat durumlarını takip etmek.
                        <br/>
                        13.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        14.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        15.	Müdüre karşı sorumludur.

                        <br/>



                        BÜRO ELEMANI
                        <br/>
                        MADDE 24- (1)  Görev, yetki ve sorumlulukları şunlardır.
                        <br/>
                        1.	Müdürlükler arası havale ve kayıt işlemlerini elektronik ortamda yapmak.
                        <br/>
                        2.	Tüm birimlerin telefon, su, elektrik ve doğalgaz faturalarının takibini yapmak.
                        <br/>
                        3.	Gelen faturaların ayrımını yaparak ilgili birime göndererek ödenmesini sağlamak.
                        <br/>
                        4.	Doğrudan temin evraklarını hazırlamak.
                        <br/>
                        5.	Komisyon ve Muhasebe defterini tutmak,
                        <br/>
                        6.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        7.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        8.	Müdüre karşı sorumludur.



                        <br/>

                        İDARİ İŞLER SORUMLUSU
                        <br/>
                        MADDE 25- (1)  Görev, yetki ve sorumlulukları şunlardır.
                        <br/>
                        1.	Belediye hizmet binalarının iç temizliklerini organize etmek ve kontrolünü yapmak.
                        <br/>
                        2.	Belediyenin sosyal ve kültürel etkinliklerinde platform kurmak, sahne düzeninin kurulması ve süsleme (bayrak, flama vb.)  işlerinin yapılmasını organize etmek.
                        <br/>
                        3.	Bölümündeki elemanları sevk ve idare etmek.
                        <br/>
                        4.	Vatandaşların dilekçe ile talep ettikleri masa-sandalye ihtiyaçlarını karşılamak.
                        <br/>
                        5.	Program ve tören bitiminde malzemelerin temizliği ve korunmasını sağlamak.
                        <br/>
                        6.	Çay ocağı gibi birimlerin işleyişini sağlamak.
                        <br/>
                        7.	Başkanlık makamı için gerekli olan ikram malzemelerinin temin edilmesini sağlamak.
                        <br/>
                        8.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        9.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        10.	Müdüre karşı sorumludur.


                        <br/>
                        FOTOKOPİ GÖREVLİSİ
                        <br/>
                        MADDE 26- (1)  Görev, yetki ve sorumlulukları şunlardır.
                        <br/>
                        1.	Hizmet binasının fotokopi çekimlerini yapmak.
                        <br/>
                        2.	Belediyemize gelen vatandaşlara fotokopi hizmeti vermek.
                        <br/>
                        3.	Herhangi bir arıza durumunu bildirmek ve yapılmasını sağlamak.
                        <br/>
                        4.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        5.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        6.	İdari İşler Sorumlusu ve Müdüre karşı sorumludur.

                        <br/>

                        ÇAY OCAĞI GÖREVLİSİ/ÇAYCI
                        <br/>
                        MADDE 27- (1)  Görev, yetki ve sorumlulukları şunlardır.
                        <br/>
                        1.	Birimlerin çay servislerinin zamanında yapılmasını sağlamak.
                        <br/>
                        2.	Çay ocağı için gerekli malzemelerin tespitini yaparak, liste hazırlamak.
                        <br/>
                        3.	Çay Ocağında çalışan personelin görev dağılımını ve çalışma saatlerini düzenlemek
                        <br/>
                        4.	Çay Ocağının düzenli ve temiz olmasını, bunun için gerekli personelin teminini sağlamak.
                        <br/>
                        5.	Çay Ocağı için ayrılan bütçenin yeterli ve sağlıklı kullanılması için gereken özeni göstermek.
                        <br/>
                        6.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        7.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        8.	İdari İşler Sorumlusu ve Müdüre karşı sorumludur.
                        <br/>


                        HİZMETLİ
                        <br/>
                        MADDE 28- (1)  Görev, yetki ve sorumlulukları şunlardır.
                        <br/>
                        1.	Alt hizmet birimi olarak faaliyetlerde görev almak.
                        <br/>
                        2.	Evrak ve malzeme taşınması işlemlerini yürütmek.
                        <br/>
                        3.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        4.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        5.	İdari İşler Sorumlusu ve Müdüre karşı sorumludur.

                        <br/>

                        ŞOFÖR
                        <br/>
                        MADDE 29- (1)  Görev, yetki ve sorumlulukları şunlardır.
                        <br/>
                        1.	Araçları göreve hazır halde bulundurmak.
                        <br/>
                        2.	Araçların bakımlı, su ve akaryakıt ikmalli durumda tutulmasını sağlamak.
                        <br/>
                        3.	Görev dönüşü bakımlarının yapılmasını sağlamak.
                        <br/>
                        4.	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        5.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        6.	İdari İşler Sorumlusu ve Müdüre karşı sorumludur.
                        <br/>


                        TEMİZLİK PERSONELİ
                        <br/>
                        MADDE 30- (1)  Görev, yetki ve sorumlulukları şunlardır.
                        <br/>
                        1.	Belediye hizmet binası, ek hizmet binası ile bağlı birimlerin her türlü temizliğinin yapılması, evrak, dosya, her nevi taşınabilir malzemelerin taşınması veya tahliyesinin yapılması, resmi tören, çelenk koyma, açılış, eğlence gibi özel gün ve etkinliklerde gerekli temizlik, platform ve tribün kurma-kaldırma, demirbaş eşyaların taşınmasını sağlamak.
                        <br/>
                        2.	Bina içini ve dışını temizlemek.
                        <br/>
                        3.	Mesai bitiminden yarım saat önce çöpleri toplamak.
                        <br/>
                        4.	Tüm çalışma masalarını sabah veya akşam temizlemek.
                        <br/>
                        5.	Merdivenleri ve asansörleri temizlemek.
                        <br/>
                        6.	Bina içinde görülen aksaklık, arıza ve olağan dışı halleri idareye bildirmek.
                        <br/>
                        7.	Koridorlardaki su sebillerini temizlemek ve takibini yapmak.
                        <br/>
                        8.	Kapı, cam ve çerçevelerini temizlemek.
                        <br/>
                        9.	Merkez ve ek hizmet binalarının yakın çevrelerini temizlemek, evrak, demirbaş ve eşyalarını taşımak.
                        <br/>
                        10.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        11.	İdari İşler Sorumlusu ve Müdüre karşı sorumludur.

                        <br/>

                        DÖRDÜNCÜ BÖLÜM
                        <br/>
                        Çalışma Şekli ve Esasları
                        <br/>
                        Görevin Planlanması
                        <br/>
                        MADDE 31- (1)  Destek Hizmetleri Müdürlüğündeki çalışmalar stratejik planlar, performans hedefleri, İSO Kalite Kapsamında hazırlanan “İş Akış Şemaları” ile yönetmeliğe uygun yapılacak plan dâhilinde yürütülür.

                        <br/>

                        Görevin Alınması
                        <br/>
                        MADDE 32- (1) Başkanlığımız birim içi müdürlükleri ve dış kurumlardan gelen evraklar görevli personelce otomasyonda kaydı yapılır. Evraklar daha sonra müdürün havalesi ile ilgili personele dağıtımı yapılır.
                        <br/>
                        Görevin Yürütülmesi
                        <br/>
                        MADDE 33- (1)  Müdürlükte görevli tüm personel, kendilerine verilen görevleri yasa ve yönetmelikler doğrultusunda gereken özen ve süratle yapmak zorundadır.

                        <br/>

                        BEŞİNCİ BÖLÜM
                        <br/>
                        İşbirliği ve Koordinasyon
                        <br/>
                        Müdürlükteki  (Müdürlük+ Servisler)  İşbirliği ve Koordinasyon
                        <br/>
                        MADDE 34-(1) Müdürlükteki İşbirliği ve Koordinasyon şöyledir:


                        <br/>
                        a-	Müdürlük içindeki işbirliği Müdürün denetimi ve gözetimi altında kendi inisiyatif ve sorumluluğu altında gerçekleştirilir. Birimler arasında yazışma, dosyalama, arşivleme gibi konularda standartlaşmaya gidilmesi için zaman zaman iş akış şemaları ve ölçümlemeler kontrol edilir. Müdürlükte gizli işsizliğin önlenmesi, çalışanların motivasyonunun sağlanması, rasyonel ve verimli çalışma ortamının yaratılması Müdürün yetki ve sorumluluğundadır. Belediyenin diğer Müdürlükleri ve üst yönetim ile olan işbirliği Belediye Başkanı veya yetki verdiği makamın denetim ve gözetimi altında Müdür tarafından gerçekleştirilir.

                        <br/>

                        b-	Bu yönetmelikte adı geçen görevlilerin ölüm hariç her hangi bir nedenle görevlerinden ayrılmaları durumunda görevleri gereği yanlarında bulunan her türlü dosya, yazı ve belgeler ile zimmeti altında bulunan eşyaları bir çizelgeye bağlı olarak yeni görevliye devir teslimini yapmaları zorunludur. Devir-teslim yapılmadan görevden ayrılma işlemleri yapılmaz.
                        <br/>
                        c-	Çalışanın ölümü halinde, kendisine verilen yazı, belge ve diğer eşyalar müdürün hazırlayacağı bir tutanakla yeni görevliye teslim edilir.

                        <br/>

                        Diğer Kurum ve Kuruluşlarla Koordinasyon
                        <br/>
                        MADDE 35-(1) Belediye Başkanı veya Müdürlüğün bağlı bulunduğu Başkan Yardımcısının denetim ve gözetiminde, Belediyenin diğer Müdürlükleri, Belediye dışı özel ve tüzel kişiler, Kamu Kurum ve Kuruluşları ile diğer şahıslarla olan yazışmalarda Gebze Belediyesi Yetki Devrine, Belediye İmza Yönergesi kapsamında ve Yazışma Kuralları ile ilgili Yönetmelik hükümlerine uygun olarak yapılır.

                        <br/>

                        a-	Müdürlükler arası yazışmalar Müdürün imzası ile yürütülür.
                        <br/>
                        b-	Müdürlüğün, Belediye dışı özel ve tüzel kişiler, Valilik, Büyükşehir Belediyesi, Kamu Kurum ve Kuruluşları ile ilgili yazışmalar; yazıyı tanzim eden Personelin, Müdürün ve Başkan Yardımcısının parafı, Belediye Başkanının veya yetki verdiği Başkan Yardımcısının imzası ile yürütülür.
                        <br/>
                        c-	Yapılan işlemler ile ilgili olarak yürürlükteki mevzuatlara dayanak olmak üzere Hukuk İşleri Müdürlüğü’nden görüş alınabilir.


                        <br/>
                        ALTINCI BÖLÜM
                        <br/>
                        Evraka Yapılacak İşlem, Tutulan Cetvel-Dosyalar ve Arşivleme
                        <br/>
                        Gelen Evraka Yapılacak İşlem
                        <br/>
                        MADDE 36- (1)Gelen evrakın elektronik ortamda kaydının olup olmadığı bakılıp, kaydı yapılmışsa imza karşılığı alınır.
                        <br/>
                        a-	Gelen evrak tasnif edilerek havalesi için Müdüre sunulur. Müdür tarafından ilgili kişi veya servise havalesi yapılır. İlgili personel veya servis evrakın gereğini zamanında ve noksansız yapmakla yükümlüdür.

                        <br/>

                        b-	Müdürlükler arası havale ve kayıt işlemleri gerekli altyapı ve yetki verilmesi ile elektronik ortamda yapılabilir.
                        <br/>
                        Giden Evraka Yapılacak İşlem
                        <br/>
                        MADDE 37- (1) Tüm işlemleri ve imzaları tamamlanan evraka elektronik ortamda numara verildikten sonra ilgili yerlere gönderilmek üzere zimmet defterine kaydı yapılır ve ilgililere imza karşılığı verilir.


                        <br/>
                        Müdürlükte Tutulması gereken Cetvel ve Dosyalar
                        <br/>
                        MADDE 38-(1) Müdürlükte tutulması gereken Cetvel ve Dosyalar;
                        <br/>
                        a-	Taşınır işlem fişi, zimmet fişi (demirbaş, makine ve cihazlar),taşınır istek belgesi, dayanıklı taşınırlar listesi, tüketim malzemeleri defteri,  kayıttan düşme teklif ve onay tutanağı, ambar devri ve teslim tutanağı, sayım tutanağı.
                        <br/>
                        b-	Gelen-giden evrak iç ve dış yazışmalar, ödeme dosyaları (elektrik, doğalgaz, telefon vb.),yıllık sözleşme dosyaları, avans dosyası, kararlar ve tutanaklar dosyası ve ihale dosyası.
                        <br/>
                        (Standart dosya planı konularına göre dosya kodu 000- ile 969 arasındaki bütün evraklar)
                        <br/>
                        c-	Strateji Plan ve Kalite Yönetim Sistemi ile ilgili bütün dosyalar.

                        <br/>

                        Arşivleme
                        <br/>
                        MADDE 39-(1) Tüm işlemleri yapılarak ilgilisine gönderilen evrağın Müdürlükte kalan sureti konusuna göre dosyasına konur.


                        <br/>
                        a-	 Gelen ve giden evrağın “ Standart Dosya Planına” göre arşivlemesi yapılır.
                        v
                        b-	Arşiv Mevzuatına uygun olarak belirli süre birim arşivinde saklandıktan sonra kurum arşivine devredilir.
                        <br/>
                        c-	Arşivdeki evrakların muhafazasından ve istenildiği zaman çıkarılmasından arşiv görevlisi ve ilgili amiri sorumludur.


                        <br/>
                        YEDİNCİ BÖLÜM
                        <br/>
                        Ortak Hükümler


                        <br/>
                        MADDE 40-  (1) Destek Hizmetleri Müdürlüğü’nde çalışan tüm personel;
                        <br/>
                        a-	Tüm faaliyetlerde ilgili kanun, yönetmelik, genelge, iş metotları ve diğer yürürlükteki mevzuata riayet eder,
                        <br/>
                        b-	Müdürlüğün faaliyet alanına giren görevleri en kısa zamanda ve tam olarak yerine getirir,
                        <br/>
                        c-	Sınıf, etiket ve unvan farkı gözetmeden her vatandaşa eşit davranır,
                        <br/>
                        d-	Verilen direktife uygun iş ve işlemleri gerçekleştirir.
                        <br/>
                        e-	Verilen işi öngörülen bütçe sınırları içerisinde kalarak en az maliyetle yerine getirir.
                        <br/>
                        f-	Beceri ve mesleki bilgi açısından kendini geliştirmek amacıyla etkinliklere katılır,
                        <br/>
                        g-	Kendisinin verimli ve etkin çalışmasına yardım edecek konularda bilgisini arttırır,
                        <br/>
                        h-	Faaliyeti için talep edilen bütün raporları eksiksiz hazırlar,
                        <br/>
                        i-	Yaptığı işle ilgili evrak ve bilgileri sürekli kontrol eder.
                        <br/>
                        j-	Mesai bitiminde masa üzerindeki evraklarını kendilerine ait dolap ve masa gözlerine koyar ve kilitler
                        <br/>
                        k-	Müdürlüğü ilgilendiren çeşitli hizmetlerin uyumlu ve düzenli yürütülmesi, personel arasındaki ahengin sağlanması için herkes gayret gösterir. Olumsuz bir durumda konu Müdüre yansıtılır. Müdür bu hususta gerekli önlemleri alır.



                        <br/>

                        SEKİZİNCİ BÖLÜM
                        <br/>
                        Çeşitli ve Son Hükümler
                        <br/>
                        Yönetmelikte Yer Almayan Hususlar
                        <br/>
                        MADDE 41 – (1) Bu yönetmelikte yer almayan hususlarda yürürlükteki ilgili mevzuat hükümleri uygulanır.
                        <br/>


                        Yürürlük
                        <br/>
                        MADDE 42-(1) Bu Yönetmelik Gebze Belediye Meclisi tarafından kabulü ve Gebze Belediye Başkanlığı’nın onayından sonra, Gebze Belediyesinin internet sitesinde ilanı ile yürürlüğe girer.


                        <br/>
                        Yürütme
                        <br/>
                        MADDE 43- (1) Bu yönetmelik hükümlerini Gebze Belediye Başkanı ve Destek Hizmetleri Müdürlüğü yürütür.


                        <br/>
                        MADDE 44- (2) Özel Güvenlik Personeli ile ilgili disiplin işlemleri 5188 sayılı Özel Güvenlik Hizmetlerine Dair Kanun, 4875 sayılı İş Kanunu ve yürürlükteki ilgili diğer mevzuata uygun olarak yürütülür.


                        <br/>
                        Yürürlükten Kaldırılan Mevzuat
                        <br/>
                        MADDE 45-(1) Bu yönetmeliğin ilanından sonra, Destek Hizmetleri Müdürlüğüne ait Görev ve Çalışma Yönetmeliği yürürlükten kalkar.
                        <br/></p>
                </section>
                <section id="bolum2" className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
                    <h3 className="text-lg font-bold text-center"></h3>
                    <p className="text-gray-700 text-left">06.11.1987 Tarihinde Gebze de doğdu
                        <br/>
                        İlkokul ve Ortaokul eğitiminin ardından Lise eğitimini de Gebze Endüstri Meslek Lisesi Elektrik bölümünde tamamladı.
                        <br/>
                        2013 yılında Anadolu Üniversitesi İktisat Fakültesi Kamu Yönetimi bölümünden mezun oldu.
                        <br/>
                        2015 yılında İstanbul Medeniyet Üniversitesi Sosyal Bilimler Enstitüsü Yerel Yönetimler ve Şehircilik bölümünden mezun olarak Yüksek Lisans Eğitimini Tamamladı.
                        <br/>
                        2011-2017 yılları arasında Gebze Adliyesinde İdari İşler Memuru olarak görev yaptı.
                        <br/>
                        2017 yılında Adalet Bakanlığı Personel Genel Müdürlüğü Kadro Şube Müdür olarak görev yaptı.
                        <br/>
                        2018 yılında Ankara batı Adliyesine İdari İşler Müdürü olarak ataması gerçekleşti.
                        <br/>
                        2019 Nisan ayından itibaren Gebze Belediyesi Kültür ve Sosyal İşler Müdürlüğü görevini yürütmektedir.
                        <br/>
                        Evli ve 2 çocuk babasıdır. </p>
                </section>
            </div>
        </div>
    );
};

export default Carullaher;
