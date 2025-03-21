import React from "react";

const Sabansarıay: React.FC = () => {
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
                        src="/images/kurumsal/mudurlukler/avatar-5.jpg"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">Emlak ve İstimlak Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" /> Şaban SARIAY
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" /> emlak@gebze.bel.tr
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
                        Amaç, Kapsam, Bağlılık, Hukuki Dayanak, Tanımlar

                        <br/>



                        AMAÇ :
                        <br/>
                        Madde 1-
                        <br/>
                        Bu yönetmeliğin amacı; 5393 sayılı Belediye Kanunu’nun 48. maddesi, ISO 9001-2015
                        <br/>
                        kapsamında görev, çalışma usul ve esaslarını belirler ve düzenler.
                        <br/>


                        KAPSAM :
                        <br/>
                        Madde 2-
                        <br/>
                        Bu Yönetmelik Müdürlüğün görev, yetki ve sorumluluklarını, çalışma usul ve esaslarını,
                        <br/>
                        işbirliği  ve diğer birimlerle olan koordinasyonu kapsar.

                        <br/>

                        BAĞLILIK
                        <br/>
                        Madde 3-
                        <br/>
                        Emlak ve İstimlak Müdürlüğü, Belediye Başkanına veya Başkan Yardımcısına bağlıdır.
                        <br/>
                        Başkan bu görevi bizzat veya görevlendireceği kişi eliyle yürütür.

                        <br/>

                        HUKUKİ DAYANAK
                        <br/>
                        Madde 4-

                        <br/>

                        GÖREV KAPSAMI
                        <br/>
                        Emlak ve İstimlak Müdürlüğü
                        <br/>


                        -3194 Sayılı İmar Kanunu
                        <br/>
                        -2981/3290/3366 Sayılı Kanun
                        <br/>
                        -2942 Yasa ve değişik 4650 sayılı Kamulaştırma Yasası
                        <br/>
                        -5393 Sayılı Belediye Kanunu
                        <br/>
                        -2886 Sayılı Devlet İhale Kanunu
                        <br/>
                        -4734 Sayılı Kamu İhale Kanunu
                        <br/>
                        -5018 Sayılı Kamu Mali Yönetimi ve Kontrol Kanunu
                        <br/>
                        -ISO 9001 Kalite Yönetim Sistemi Kalite El Kitabı
                        <br/>
                        -1475 Sayılı İş Kanunu
                        <br/>
                        -657 Sayılı Devlet Memurları Kanunu ile bunun ek ve değişiklikleri
                        <br/>
                        -Planlı Alanlar Tip İmar Yönetmeliği
                        <br/>
                        -Kamu Kurum ve Kuruluşlarında çalışan personelin kılık ve kıyafetlerine dair yönetmelik
                        <br/>
                        -Yürürlükteki diğer kanun, kararname ve yönetmelikler

                        <br/>

                        Tanımlar :
                        <br/>
                        Madde 5- Bu Yönetmelikte geçen;
                        <br/>
                        a)Belediye   : Gebze Belediyesini,
                        <br/>
                        b)Başkan     : Gebze Belediye Başkanını,
                        <br/>
                        c)Meclis       : Gebze Belediye Meclisini
                        <br/>
                        d)Müdürlük  : Gebze Belediyesi Emlak ve İst. Müdürlüğünü
                        <br/>
                        e)Encümen    : Gebze Belediyesi Encümenini ifade eder.

                        <br/>



                        İKİNCİ KISIM
                        <br/>
                        Müdürlüğün Görevleri, çalışma düzeni ve saatleri
                        <br/>
                        Emlak ve İstimlak Müdürlüğü’nün görevleri:

                        <br/>

                        Madde 6-

                        <br/>

                        1.	İlçenin halihazır haritasını yapmak ve yaptırmak,
                        <br/>
                        2.	3194 sayılı yasanın 15 ve 16. maddelerine ve Planlı Alanlar Tip İmar Yönetmeliğine göre tevhid -iİfraz - yola terk – yoldan ihdas işlemlerini yapmak,
                        <br/>
                        3.	3194 sayılı yasanın 18. maddesi gereği imar uygulaması yapmak, yaptırmak ve kontrol etmek,
                        <br/>
                        4.	Belediyeye ait hisselerin satış işlemlerini 3194 sayılı yasanın 17. maddesi çerçevesinde yapmak,
                        <br/>
                        5.	Müstakil Belediye parsellerinin satış işlemlerini yapmak,
                        <br/>
                        6.	2981 sayılı yasa gereği af müracaatı yapmış olan vatandaşların 3366 ve 3290 sayılı yasalar çerçevesinde tapu tahsislerini tapuya dönüştürmek,
                        <br/>
                        7.	İfrazlı tapuları harcı mukabilinde vermek,
                        <br/>
                        8.	Tapuya ipotek ve ipotek terkini işlemlerini yapmak,
                        <br/>
                        9.	Tapuda Belediyeye ait tapuların devir işlemlerini yapmak,
                        <br/>
                        10.	Belediye adına tescil ve terkin işlemlerini yapmak,
                        <br/>
                        11.	İmar durumuna göre yol fazlası işlemlerini yapmak,
                        <br/>
                        12.	Belediyece kamu taşınmazlarının gerektiğinde aplikasyonunu yapmak,
                        <br/>
                        13.	Belediye taşınmaz malları üzerinde irtifak hakkı verilmesi, özel mülkiyetteki taşınmaz mallar üzerinde irtifak hakkı kurulması ve tahsis hakkı verilmesi, devralınması konusunda yürütülen çalışmaların kendi yetki ve sorumlulukları çerçevesinde yürütülmesini sağlar,
                        <br/>
                        14.	2942 sayılı yasa ve değişik 4650 sayılı kamulaştırma yasası gereği; imar planlarında yol - park – otopark - yeşil alan gibi kamu alanlarında kalan vatandaş mülkiyetlerinin kamulaştırma işlemlerini yapmak,
                        <br/>
                        15.	Şuyulandırma ve kamulaştırma işlemleri ile ilgili mahkemelere intikal eden konularda mahkemelerce istenen evrakların teminini yapmak, Hukuk işlerini bilgilendirmek,
                        <br/>
                        16.	Belediyenin diğer birimlerine harita konusunda teknik destek ve bilgi verilmesi,
                        <br/>
                        17.	Hibe alma, Tapuda ferağ verme, ferağ alma işlemlerinin Başkanın verdiği vekaletnameye dayanarak yürütülmesini sağlar,
                        <br/>
                        18.	Numarataj işlemlerini yapmak,
                        <br/>
                        a)	Mahalle adres bilgi haritasının düzenlenmesi,
                        <br/>
                        b)	Sokak numaralarının Numarataj yönetmeliğine göre hazırlanması,
                        <br/>
                        c)	Binalara numara verilmesi,
                        <br/>
                        d)	Binalar cetvellerinin hazırlanması ve güncelleştirilmesi,
                        <br/>
                        e)	Talebe bağlı Resmi kurum ve vatandaşların adres tespitinin yapılması,
                        <br/>
                        f)	Her 5 yılda bir Devlet İstatistik Enstitüsü tarafından yapılan kapı numaralarının
                        <br/>
                        güncellenmesi; bina sayım ve nüfus sayımı çalışmalarının koordinasyonu
                        <br/>
                        g)	Milletvekili ve Mahalli İdareler seçimlerinde İlçe Seçim kuruluna yardımcı olmak,
                        <br/>
                        h)	Cadde ve sokak adres değişiklikleri konusunda yapılan değişiklikler hususunda ilgili kamu
                        <br/>
                        kurumlarını bilgilendirmek,
                        <br/>
                        ı) Yapı Kayıt Belgeli parsellerin satışını sağlamak,
                        <br/>
                        i) Ecrimisil işlemlerini yapmak.
                        <br/>


                        Madde 7-
                        <br/>


                        Sınırlar: Gebze Belediyesi sınırları ile mücavir alanları ihtiva eder.

                        <br/>

                        Çalışma Düzeni ve Saatleri:

                        <br/>

                        Madde 8-

                        <br/>

                        Hizmetler, resmi ve dini bayramlar ile genel tatil günleri haricinde aksatmadan sürdürülür.
                        <br/>
                        Çalışma saat ve şekilleri,  yaz ve kış saati uygulamasına göre İnsan Kaynakları ve Eğitim
                        <br/>
                        Müd.’den gelen yazıyla uygulanır. Gerektiği takdirde personelin fazla çalışması, mevzuatına
                        <br/>
                        göre ücretle karşılanır.

                        <br/>

                        İKİNCİ BÖLÜM
                        <br/>
                        KADRO ESASLARI VE PERSONELİN GÖREVLERİ

                        <br/>

                        Madde 9-

                        <br/>

                        Teşkilat Yapısı:


                        <br/>
                        -Müdür
                        <br/>
                        -Memur
                        <br/>
                        -Sözleşmeli memur
                        <br/>
                        -İşçi
                        <br/>
                        -Diğer personel


                        <br/>
                        Madde 10-


                        <br/>
                        Teşkilat Kadroları:
                        <br/>


                        -Müdür : Hrt.Müh.  (Memur)
                        <br/>
                        -İstimlak Birimi : Hrt.Müh. (Memur)
                        <br/>
                        -Emlak Birimi : Hrt.Müh.(İşçi)
                        <br/>
                        -Harita Birimi : Hrt.Tek. (Memur)
                        <br/>
                        -İmar uygulama Birimi : Hrt.Müh. (Sözleşmeli memur)
                        <br/>
                        -Numarataj Birimi : (İşçi)
                        <br/>
                        -Diğer teknik personel: Mühendisler (Sözleşmeli memur, Şirket personeli), Teknikerler
                        <br/>
                        (Sözleşmeli memur, Şirket personeli)
                        <br/>
                        -Büro elemanları (İşçi)

                        <br/>

                        MÜDÜR:
                        <br/>
                        Madde 11-

                        <br/>

                        1.	İmar planları ile kamuya ayrılan ( yol, yeşil alan, otopark vb.) taşınmazların istimlâk edilerek
                        <br/>
                        kamuya tahsis işlemlerini kontrol eder.
                        <br/>
                        2.	Gebze Belediyesi’ne ait emlakların envanteri, beyanı, takibi, alım ve satım işlemleri ön
                        <br/>
                        hazırlığı ve dosyalanmasını kontrol eder.
                        <br/>
                        3.	Gebze Belediyesi’ne ait taşınmazlardan Meclis kararı gereği satışlarına karar verilenlerin
                        <br/>
                        Devlet İhale Kanunu’nun ilgili maddelerine göre ihale usulü ile satışların yapılmasını takip eder.
                        <br/>
                        4.	İmar planı ile şahıs parsellerine tevhid edilmek sureti ile yol vb. kamu alanından ihdas
                        <br/>
                        edilerek yapılan zorunlu satış işlemlerini takip eder
                        <br/>
                        5.	Kamulaştırma Kanunu’nun 30. maddesi gereği belediye taşınmazlarının, imar planı amacına
                        <br/>
                        göre ihtiyacı olan idarelere devren satış işlemlerini takip eder.
                        <br/>
                        6.	İmar Kanunu gereği gecekondu hak sahiplerinin işgalinde bulunan hazine arazilerinin
                        <br/>
                        Belediyeye devir işlemlerini takip eder.
                        <br/>
                        7.	İmar planında kamu alanlarına ayrılmış, hazine parsellerinin imar kanunu gereği Belediyeye
                        <br/>
                        devir işlemlerini takip eder.
                        <br/>
                        8.	İmar affı kanunu gereği gecekondu hak sahiplerince işgalli bulunan hazine taşınmazlarının
                        <br/>
                        aynı kanun gereği Belediyeye devrinden sonra hak sahipleri adına yapılan tapulama
                        <br/>
                        işlemlerini takip eder.
                        <br/>
                        9.	Belediye taşınmaz malları üzerinde irtifak hakkı verilmesi, özel mülkiyetteki taşınmaz mallar
                        <br/>
                        üzerinde irtifak hakkı kurulması ve tahsis hakkı verilmesi, devralınması konusunda yürütülen
                        <br/>
                        çalışmaların kendi yetki ve sorumlulukları çerçevesinde yürütülmesini sağlar.
                        <br/>
                        10.	Taşınmaz mallara ait sicil tutulması ve bu taşınmaz mallar için imar planına göre uygulama
                        <br/>
                        ve düzenleme yapılmasını sağlar.
                        <br/>
                        11.	Hibe alma tapuda ferağ verme, ferağ alma işlemlerinin Başkanın verdiği vekâletnameye
                        <br/>
                        dayanarak yürütülmesini sağlar.
                        <br/>
                        12.	Emlak İstimlâk bürosuna gelen dilekçe ve yazışmaların ilgililerine havalesini ve takibini
                        <br/>
                        yapar.
                        <br/>
                        13.	Çeşitli yazışmaların yapılmasını ve ilgili yerlere gönderilmesinin takibini sağlar.
                        <br/>
                        14.	Yasal mevzuat, sistem ve prosedürlerdeki değişiklikleri takip eder.
                        <br/>
                        15.	Halihazır harita alımını ve paftaların sayısallaştırılmasını sağlar.
                        <br/>
                        16.	Şuyulandırma sonucu tescil edilen parsellerin tapularının sahiplerine teslimini sağlar.
                        <br/>
                        17.	Numarataj çalışmalarında Kocaeli Büyükşehir Belediyesi ile ortak mahalle haritalarının
                        <br/>
                        düzenlenmesini, sokak ve cadde plakalarının çakımı işlemlerinin takibini, binalara numara
                        <br/>
                        verilmesini, binalar cetvelinin hazırlanması ve güncelleştirilmesini sağlar.
                        <br/>
                        18.	3194 sayılı yasanın 18.mad. gereği imar uygulamalarının yapılmasını sağlar.
                        <br/>
                        19.	3194 sayılı yasanın 15. ve 16. maddeleri gereği tevhid, ifraz, yoldan ihdas ve yola terk
                        <br/>
                        işlemlerinin yürütülmesini sağlar.
                        <br/>
                        20.	2942 sayılı yasa ve değişik 4650 sayılı yasa ve yönetmelikleri kapsamında kamulaştırma
                        <br/>
                        işlemlerinin yapılmasını sağlar.
                        <br/>
                        21. Gayrimenkullerin satış ihale işlemlerinin yürütülmesini sağlar.
                        <br/>
                        22. Büro demirbaş, kayıt, arşiv ve tedavi giderlerinin hazırlanması, tahakkuk ve takibini sağlar.
                        <br/>
                        23. Belediye Başkanlığı Takdir Kıymet ve Değerlendirme komisyonunun kurulması, kayıt,
                        <br/>
                        raporlama işlemlerinin yürütülmesini sağlamak.
                        <br/>
                        24. Üstlerinden aldığı emir ve görevleri yerine getirmek.


                        <br/>
                        Organizasyondaki Yeri:

                        <br/>

                        1.	Direkt olarak Başkan Yardımcısına bağlıdır
                        <br/>
                        2.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten, Başkan Yardımcısına karşı sorumludur
                        <br/>
                        3.	Harita Mühendisi, Harita Teknikeri, Numarataj Görevlisi ve Büro Elemanları kendisine bağlı bulunan kadrolardır.


                        <br/>
                        Bu Kadro için aranan özellikler:

                        <br/>

                        1.	Üniversite mezunu
                        <br/>
                        2.	Belediye mevzuatına hakim
                        <br/>
                        3.	Bilgisayar konusunda tecrübeli
                        <br/>
                        4.	Toplam kalite anlayışına sahip



                        <br/>

                        BİRİM SORUMLULARININ GÖREV ve SORUMLULUKLARI :
                        <br/>
                        Madde 12-

                        <br/>

                        Harita Birim sorumlusunun Görev ve Sorumlulukları:
                        <br/>
                        1-	3194 sayılı yasanın 15 ve 16. maddeleri gereği tevhit ifraz işlemlerini yürütür.
                        <br/>
                        2-	3194 sayılı İmar Kanununun 18.maddesi gereği imar uygulamaları işlemlerini yürütür.
                        <br/>
                        3-	Kendi yetki ve sorumluluğuna verilen işlerin hatasız olması ve en kısa sürede bitmesi için çalışır.
                        <br/>
                        4-	Yasal mevzuat, sistem ve prosedürlerdeki değişiklikleri takip eder.
                        <br/>
                        5-	Amirini yaptığı çalışmalar konusunda sürekli bilgilendirilerek, kendisinden istenen raporları ve benzer dokümanları yazılı biçimde hazırlar ve amirine sunar.
                        <br/>
                        6-	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        7-	Müdürlüğe gelen evraklara araştırıp gerekli cevabı vermek.

                        <br/>

                        Organizasyondaki Yeri:
                        <br/>
                        1-Direk olarak Müdüre bağlıdır.
                        <br/>
                        2-Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        <br/>
                        Müdüre karşı sorumludur.


                        <br/>
                        Bu Kadro için aranan özellikler:
                        <br/>
                        1-	En az iki yıllık yüksekokul mezunu olmak,
                        <br/>
                        2-	Son müracaat tarihi itibariyle 5 inci maddenin birinci fıkrasının (d) bendinin (2) numaralı alt bendinde sayılan görevlerde en az iki yıl süreyle çalışmış olmak.

                        <br/>

                        Madde 13-


                        <br/>
                        Emlak Birim Sorumlusunun Görev ve Sorumlulukları:
                        <br/>
                        1-3194 sayılı yasanın 15 ve 16.maddeleri gereği tevhit ifraz işlemlerini yürütür.
                        <br/>
                        2-Kendi yetki ve sorumluluğuna verilen işlerin hatasız olması ve en kısa sürede
                        <br/>
                        bitmesi için çalışır.
                        <br/>
                        3-Yasal mevzuat, sistem ve prosedürlerdeki değişiklikleri takip eder.
                        <br/>
                        4-Amirini yaptığı çalışmalar konusunda sürekli bilgilendirerek, kendisinden istenen
                        <br/>
                        raporları ve benzer dokümanları yazılı biçimde hazırlar ve amirine sunar.
                        <br/>
                        5-3194 sayılı İmar Kanunu’nun 18.maddesi gereği imar uygulamaları işlemlerini yürütür.
                        <br/>
                        6-Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        7-Müdürlüğe gelen evraklara araştırıp gerekli cevabı vermek.

                        <br/>

                        Organizasyondaki Yeri:
                        <br/>
                        1-Direkt olarak Müdüre bağlıdır.
                        <br/>
                        2-Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Müdüre karşı sorumludur.


                        <br/>
                        Bu Kadro için aranan özellikler:
                        <br/>
                        1-En az iki yıllık yüksekokul mezunu olmak,
                        <br/>
                        2-Son müracaat tarihi itibariyle 5 inci maddenin birinci fıkrasının (d) bendinin (2) numaralı alt  bendinde sayılan görevlerde en az iki yıl süreyle çalışmış olmak.


                        <br/>
                        Madde 14-

                        <br/>

                        İstimlak Birim Sorumlusunun Görev ve Sorumlulukları:


                        <br/>
                        1-2942 sayılı yasa ve değişik 4650 sayılı kamulaştırma kanunu kapsamında istimlak işlerini
                        <br/>
                        yürütür.
                        <br/>
                        2-Kendi yetki ve sorumluluğuna verilen işlerin hatasız olması ve en kısa sürede bitmesi
                        <br/>
                        için çalışır.
                        <br/>
                        3-Yasal mevzuat, sistem ve prosedürlerdeki değişiklikleri takip eder.
                        <br/>
                        4-Amirini yaptığı çalışmalar konusunda sürekli bilgilendirerek, kendisinden istenen raporları
                        <br/>
                        ve benzer dokümanları yazılı biçimde hazırlar ve amirine sunar.
                        <br/>
                        5-3194 sayılı yasanın 15 ve 16. maddeleri gereği tevhit ifraz işlemlerini yürütür.
                        <br/>
                        6-3194 sayılı İmar Kanununun 18. Maddesi gereği imar uygulamaları işlemlerini yürütür.
                        <br/>
                        7-Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        8-Müdürlüğe gelen evraklara araştırıp gerekli cevabı vermek.
                        <br/>


                        Organizasyondaki yeri:
                        <br/>
                        1-Direkt olarak Müdüre bağlıdır.
                        <br/>
                        2-Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        <br/>
                        Müdüre karşı sorumludur.


                        <br/>
                        Bu Kadro için aranan özellikler:
                        <br/>
                        1-En az iki yıllık yüksekokul mezunu olmak,
                        <br/>
                        2-Son müracaat tarihi itibariyle 5 inci maddenin birinci fıkrasının (d) bendinin (2) numaralı alt
                        <br/>
                        bendinde sayılan görevlerde en az iki yıl süreyle çalışmış olmak.
                        <br/>

                        Madde 15-
                        <br/>
                        İmar Uygulama Birim Sorumlusunun Görev ve Sorumlulukları:
                        <br/>
                        1-3184 Sayılı yasanın 18.maddesi gereği imar uygulaması işlemlerini yapmak, takip etmek ve
                        <br/>
                        sonuçlandırmak,
                        <br/>
                        2-Kendi yetki ve sorumluluğuna verilen işlerin hatasız olması ve en kısa sürede bitmesi için
                        <br/>
                        çalışır.
                        <br/>
                        3-Yasal mevzuat, sistem ve prosedürlerdeki değişiklikleri takip eder.
                        <br/>
                        4-Amirini yaptığı çalışmalar konusunda sürekli bilgilendirerek, kendisinden istenen raporları ve
                        <br/>
                        benzer dokümanları yazılı biçimde hazırlar ve amirine sunar.
                        <br/>
                        5-Üstlerinden aldığı emir ve görevleri yerine getirmek.


                        <br/>
                        Madde 16-
                        <br/>
                        Numarataj Birim Sorumlusunun Görev ve Sorumlulukları:
                        <br/>
                        1-Mahalle haritalarının düzenlenmesini sağlamak
                        <br/>
                        2-Sokak numaralarının ilgili yönetmeliğe göre hazırlanmasını sağlamak
                        <br/>
                        3-Binalara numara verilmesini sağlamak
                        <br/>
                        4-Binalar cetvelinin hazırlanması ve güncelleştirilmesini sağlamak
                        <br/>
                        5-Talebe göre adres tespitinin yapılmasını takip etmek
                        <br/>
                        6-Cadde ve sokak isimleri levhalarının hazırlanması ve ilgili yerlere monte edilmesini sağlamak
                        <br/>
                        7-Yapılan her türlü değişiklikleri D.İ.E ve Kocaeli Büyükşehir Belediyesi’ne belli periyotlar
                        <br/>
                        halinde göndermek
                        <br/>
                        8-Her beş yılda bir D.İ.E. tarafından yapılan kapı numaralarının güncelleştirilmesi, bina sayımı ve
                        <br/>
                        nüfus sayımı konusundaki çalışmaları koordine etmek
                        <br/>
                        9-Milletvekili ve mahalli idareler seçimlerinde İlçe Seçim Kuruluna yardımcı olmak
                        <br/>
                        10-Cadde, sokak ve adres bilgileri konusunda yapılan değişiklikler hakkında ilgili kamu
                        <br/>
                        kurumlarını bilgilendirmek
                        <br/>
                        11-Üstlerinden aldığı emir ve görevleri yerine getirmek

                        <br/>

                        Organizasyondaki Yeri:
                        <br/>
                        1-Direkt olarak Müdüre bağlıdır.
                        <br/>
                        2-Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        <br/>
                        Müdüre karşı sorumludur.


                        <br/>
                        Bu Kadro için aranan özellikler:
                        <br/>
                        1-En az iki yıllık yüksekokul mezunu olmak,
                        <br/>
                        2-Son müracaat tarihi itibariyle 5 inci maddenin birinci fıkrasının (d) bendinin (2) numaralı alt
                        <br/>
                        bendinde sayılan görevlerde en az iki yıl süreyle çalışmış olmak.




                        <br/>
                        ÜÇÜNCÜ KISIM
                        <br/>
                        Madde 17-
                        <br/>
                        Büro Yöneticisinin Görev ve Sorumlulukları:
                        <br/>
                        1-Evrak ve yazışmaları dosyalayıp bilgisayara girmek suretiyle arşivlemek, talep olduğu takdirde
                        <br/>
                        ilgili birimlere ulaştırmak,
                        <br/>
                        2-Büro elemanı izinde olduğunda iç ve dış birimlere gönderilecek yazıları, resmi yazışma kuralları
                        <br/>
                        genelgesine uygun olarak yazmak,
                        <br/>
                        3-Müdürlüğe gelen telefonlara kurum kimliğine uygun olarak bakmak, ilgililerine aktarılmasını
                        <br/>
                        sağlamak,
                        <br/>
                        4-Büro elemanı izinde olduğunda Müdürlük içerisinde yapılacak toplantıları amirinden aldığı
                        <br/>
                        bilgiler doğrultusunda organize etmek ve toplantı tutanaklarını tutmak,
                        <br/>
                        5-Kendi sorumluluğunda olan bütün büro makinelerinin her türlü hasara karşı korunması için
                        <br/>
                        gerekli tedbirleri almak,
                        <br/>
                        6-Müdürlük puantajını hazırlamak, Müdürün onayından sonra İnsan Kaynakları ve Eğitim
                        <br/>
                        Müdürlüğü’ne göndermek,
                        <br/>
                        7-Gerektiğinde mesai formu ve mesai oluru yazmak,
                        <br/>
                        8-Üstlerinden aldığı emir ve görevleri yerine getirmek.


                        <br/>
                        Organizasyondaki Yeri:
                        <br/>
                        1-Direkt olarak Müdüre bağlıdır.
                        <br/>
                        2-Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        <br/>
                        Müdüre karşı sorumludur.


                        <br/>
                        Bu Kadro için aranan özellikler:
                        <br/>
                        1-Lise ve dengi meslek lisesi mezunu
                        <br/>
                        2-Bilgisayar konusunda tecrübeli
                        <br/>
                        3-Toplam kalite anlayışına sahip


                        <br/>
                        Madde 18-
                        <br/>
                        Tahakkuk Memurunun Görev ve Sorumlulukları:
                        <br/>
                        1-Ödeme evraklarını hazırlamak,
                        <br/>
                        2-Hisse satışı, bedele dönüştürme müracaatlarını almak,
                        <br/>
                        3-Şuyulandırma sonrası çıkan tapuları harç karşılığı vermek,
                        <br/>
                        4-Tapu Sicil Müdürlüklerinde devredilen belediye hisselerini bilgisayara işlemek,
                        <br/>
                        5-Üstlerinden aldığı emir ve görevleri yerine getirmek.

                        <br/>

                        Organizasyondaki yeri:
                        <br/>
                        1-Direkt olarak Büro Yöneticisi ve Müdüre bağlıdır.
                        <br/>
                        2-Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        <br/>
                        Müdüre karşı sorumludur.


                        <br/>
                        Bu Kadro için aranan özellikler:
                        <br/>
                        1-Lise ve dengi meslek lisesi mezunu
                        <br/>
                        2-Bilgisayar konusunda tecrübeli
                        <br/>
                        3-Toplam kalite anlayışına sahip

                        <br/>

                        Madde 19-
                        <br/>
                        Büro Elemanının Görev ve Sorumlulukları:
                        <br/>
                        1-Müdürlüğe gelen tüm iç ve dış yazışmaları yapmak,
                        <br/>
                        2-Büro Yöneticisi izinde olduğunda evrakları dosyalayıp arşivlemek, talep olduğu takdirde ilgili
                        <br/>
                        birimlere ulaştırmak

                        <br/>

                        3-Müdürlüğe gelen telefonlara kurum kimliğine uygun olarak bakmak, ilgililerine aktarılmasını
                        <br/>
                        sağlamak,
                        <br/>
                        4-Müdürlük içerisinde yapılacak toplantıları amirinden aldığı bilgiler doğrultusunda organize
                        <br/>
                        etmek ve toplantı tutanaklarını tutmak, kıymet takdir raporlarını yazmak,
                        <br/>
                        5-Tapu tahsisin tapuya dönüştürülmesiyle ilgili talepleri almak, yazışmalarını yapmak,
                        <br/>
                        6-Büro Yöneticisi olmadığı zaman puantaj hazırlamak,
                        <br/>
                        7-Üstlerinden aldığı emir ve görevleri yerine getirmek,
                        <br/>
                        8-Yazılıp imzalanan evrakları zimmet defterine ve bilgisayara kayıt ederek ilgililerine gönde-
                        <br/>
                        rilmesini sağlamak
                        <br/>


                        Organizasyondaki yeri:
                        <br/>
                        1-Direkt olarak Büro Yöneticisi ve Müdüre bağlıdır.
                        <br/>
                        2-Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri  yürütmekten
                        <br/>
                        Müdüre karşı sorumludur.
                        <br/>
                        Bu Kadro için aranan özellikler:
                        <br/>
                        1-Lise ve dengi meslek lisesi mezunu
                        <br/>
                        2-Bilgisayar konusunda tecrübeli
                        <br/>
                        3-Toplam kalite anlayışına sahip

                        <br/>

                        Madde 20-
                        <br/>
                        Evrak Kayıt ve Arşiv Elemanının Görev ve Sorumlulukları:
                        <br/>
                        1-Müdürlüğe gelen tüm evrakları gelen evrak defterine kaydetmek ve Müdürün havalesine
                        <br/>
                        sunmak,
                        <br/>
                        2-Havale edilen evrakları Müdürlükte ilgili elemanlara imza karşılığı dağıtmak,
                        <br/>
                        3-Gelen telefonlara kurum kimliğine uygun bakmak,
                        <br/>
                        4-Arşivlenecek dosyaları yerleştirmek ve istendiğinde getirip ilgili kişiye vermek,
                        <br/>
                        5-Büro Yöneticisi olmadığı zaman puantaj hazırlamak,
                        <br/>
                        6-Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri  yürütmekten
                        <br/>
                        Müdüre karşı sorumludur.


                        <br/>
                        Organizasyondaki yeri:
                        <br/>
                        1-Direkt olarak Büro Yöneticisi ve Müdüre bağlıdır.
                        <br/>
                        2-Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        <br/>
                        Müdüre karşı sorumludur.


                        <br/>
                        Bu Kadro için aranan özellikler:
                        <br/>
                        1-Lise ve dengi meslek lisesi mezunu
                        <br/>
                        2-Bilgisayar konusunda tecrübeli
                        <br/>
                        3-Toplam kalite anlayışına sahip

                        <br/>



                        ÜÇÜNCÜ BÖLÜM
                        <br/>
                        ÇALIŞMA ŞEKLİ VE İŞLEYİŞİ

                        <br/>

                        Madde 21-
                        <br/>
                        Görevin alınması:
                        <br/>
                        1-Görev, Başkanın veya Müdürlüğün bağlı olduğu Başkan Yardımcısının vereceği plan, program
                        <br/>
                        ve direktiflerden alınır.
                        <br/>
                        2-Görev, Müdürlüğe evrakın gelmesiyle alınır.
                        <br/>
                        3-Görev, Müdürlüğe gelen evrakın gereklerinden alınır.
                        <br/>
                        4-Görev, mevcut hizmetlerin idamesi için gereklerden çıkarılır.


                        <br/>
                        Madde 22-
                        <br/>
                        Görevlerin Planlanması:


                        <br/>
                        1-Alınan emir, mevcut imkanlar nazarı dikkate alınarak görev haline getirilir ve incelenir,
                        <br/>
                        koordine edilir, müsveddeye alınır, ilgili kişiye verilir, uygun görülürse resmi yazıların
                        <br/>
                        hazırlanmasına ait yönetmelik esaslarına göre yazılır, paraf veya imzalanarak işleme konulur.

                        <br/>

                        Madde 23-
                        <br/>
                        Görevlerin Yürütülmesi:

                        <br/>

                        Mevcut mevzuat ve alışılmış usul ve teamüller gözönüne alınarak, görevin en iyi bir şekilde
                        <br/>
                        yürütülmesine çalışılır.


                        <br/>
                        Madde 24-
                        <br/>
                        İş Bölümü ve Koordinasyon:


                        <br/>
                        1-Birim yetkilileri, Mühendisler, Teknikerler arasındaki işbirliği Müdür tarafından sağlanır.
                        <br/>
                        2-Birim yetkilileri ve büro elemanları arasındaki işbirliği Müdür tarafından sağlanır.


                        <br/>
                        Madde 25-
                        <br/>
                        Evraka yapılacak işlem ve arşivleme:


                        <br/>
                        Gelen-giden evrak usulüne uygun olarak kaydedilir. İşlemler Müdürlükçe havale edilen birimce
                        <br/>
                        ivedilikle sonuçlandırılır ve durum yazıyla ilgilisine bildirilir. Arşiv yönetmeliğine uygun arşiv-
                        <br/>
                        leme yapılır.




                        <br/>
                        DÖRDÜNCÜ BÖLÜM
                        <br/>
                        ÇEŞİTLİ HÜKÜMLER


                        <br/>
                        Madde 26-
                        <br/>
                        Kıyafet:
                        <br/>
                        Müdürlükte çalışan personel sivil olarak görev yapar, kılık kıyafet yönetmeliğine uygun olarak
                        <br/>
                        giyinilir.


                        <br/>
                        Madde 27-
                        <br/>
                        İzin hakkı:
                        <br/>
                        Müdürlük personeli yıllık izinlerini 657 sayılı Devlet Memurları Kanunu ile 1475 Sayılı İş Kanununa göre ve hizmetleri aksatmayacak şekilde düzenlenir. İzin listeleri Müdürlükçe düzenlenir, İnsan Kaynakları ve Eğitim Müdürlüğüne gönderilir, ilgili Başkan Yardımcısı tarafından onaylanır. Mazeret izinleri de ilgili Başkan Yardımcısı tarafından onaylanır.


                        <br/>
                        Madde 28-
                        <br/>
                        Disiplin hükümleri:

                        <br/>

                        657 Sayılı Devlet Memurları Kanunu, 1475 sayılı İş Kanunu ve Belediye Memur ve Müstahdemleri Nizamnamesinin ilgili maddelerinden öngörülen fiil ve hallerde yine bu maddelerde yazılı olan disiplin cezaları uygulanır.

                        <br/>

                        Madde 29-
                        <br/>
                        Müdürlük içi denetim-cezai fiil ve haller:


                        <br/>
                        a)Personel en yakın amirinden başlayarak sürekli denetime tabi tutulur.
                        <br/>
                        b)Personelin çalışma durumu ile kılık kıyafeti ve mesai saatlerine riayeti gözetim altında
                        <br/>
                        bulundurulur.
                        <br/>
                        c)Denetim sırasında personelin iş sahipleri ve müteahhitlerle olan tutum ve davranışlarında
                        <br/>
                        aşağıdaki hususlar göz önünde tutulur:
                        <br/>
                        -Dilekçe ile şikayet eden vatandaşlarla, ticari şirket veya büroların, müteahhitlerin talepleri, mev-
                        <br/>
                        zuat, adalet ve dürüstlük ilkeleri dahilinde objektif bir şekilde değerlendirilerek zamanında işle-
                        <br/>
                        me tabi tutulur.
                        <br/>
                        -Başkasının yerine müracaat kabul edilmez.
                        <br/>
                        -Müracaat sahiplerine asla işlem önceliği ve ayrıcalık tanınmaz.
                        <br/>
                        -İş takipçiliği yapılmasına müsamaha gösterilmez.
                        <br/>
                        -Normal iş temasları dışında müracaat edenlerin büroları işgal etmesine izin verilmez,müsamaha-
<br/>
                        kar davranılmaz, özel işlemlere tabi tutulmaz.
                        <br/>
                        d)İlk kademelerden başlamak üzere denetim yapacak kademeler aşağıdadır:
                        <br/>
                        -Personel ve birim sorumluları bağlı bulunduğu Müdür tarafından devamlı denetim altında bulun
                        <br/>
                        durulur.
                        <br/>
                        -Müdür de Başkan Yardımcısı ve Başkan tarafından denetim altında bulundurulur.




                        <br/>
                        BEŞİNCİ BÖLÜM
                        <br/>
                        SON HÜKÜMLER
                        <br/>
                        Madde 30-
                        <br/>
                        Yönetmelikte Bulunmayan Hükümler:
                        <br/>
                        Bu yönetmelikte bulunmayan hususlarda işler, Belediye Başkanı’nın emri, talimat ve olurları
                        <br/>
                        doğrultusunda sevk ve idare edilir.

                        <br/>

                        Madde 31-
                        <br/>
                        Yürürlük:
                        <br/>
                        Bu Yönetmelik; Gebze Belediye Meclisi’nin kabulü ile yürürlüğe girer.


                        <br/>
                        Madde 32-
                        <br/>
                        Yürütme:
                        <br/>
                        Bu madde dahil 32 maddeden ibaret bu Yönetmelik hükümlerini Belediye Başkanı yürütür.

                        <br/>
                    </p>
                </section>
                <section id="bolum2" className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
                    <h3 className="text-lg font-bold text-center"></h3>
                    <p className="text-gray-700 text-left">1965 yılında Aksaray da doğan Şaban SARIAY lise öğremini İzmit Endüstri Meslek Lisesinde tamamladı.
<br/>
                        1991 yılında Selçuk Üniversitesi Mimarlık Mühendislik Fakültesinden mezun oldu.
                        <br/>
                        Özel sektörde 2 yıl çalıştıktan sonra 1993 yılında Karamürsel Belediyesinde Harita Mühendisi olarak, 1995 yılında İhsaniye Belediyesinde Fen İşleri amiri olarak, 1996 yılından itibaren Gebze Belediyesinde 4 Yıl Harita – Emlak ve İstimlak Müdürlüğü – 1 Yıl İmar Müdürlüğü – 11 Yıl Fen İşleri Müdürlüğü ve son olarak 2016 yılından bu yana Emlak ve İstimlak Müdürlüğü görevini yürütmektedir.<br/>
                        Evli ve üç çocuk babasıdır. </p>

                </section>
            </div>
        </div>
    );
};

export default Sabansarıay;
