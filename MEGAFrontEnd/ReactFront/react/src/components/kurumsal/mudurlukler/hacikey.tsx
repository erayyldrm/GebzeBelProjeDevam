import React from "react";

const Hacikey: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">


            {/* Main Content */}
            <div className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl w-full relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <img
                        src="/images/kurumsal/mudurlukler/avatar-11.jpg"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">İşletme Ve İştirakler Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" />Hacı KEY
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" /> isletme.istirak@gebze.bel.tr
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
                        Amaç, Kapsam, Dayanak ve Tanımlar
                        <br/><br/>
                        Amaç:
                        <br/><br/>
                        MADDE 1 -  (1) Bu yönetmelik; 5216 sayılı Büyükşehir Belediye Kanunu ile 5393 sayılı Belediye
                        <br/><br/>
                        Kanununun 48. ve 49. Maddeleri kapsamında Gebze Belediyesi İşletme ve İştirakler Müdürlüğünün Görev,
                        Çalışma Usul ve Esaslarını belirler / düzenler.
                        <br/>
                        Kapsam :
                        <br/>
                        MADDE 2 - (1) Bu yönetmelik, Gebze Belediye Başkanlığı İşletme ve İştirakler Müdürlüğünün kuruluş amacı,
                        faaliyet alanları, görev, yetki ve sorumlulukları ile çalışma usul ve esaslarını kapsar.
                        <br/><br/>
                        Dayanak :
                        <br/><br/>
                        MADDE 3 -  (1) Bu yönetmelik, 5393 Sayılı Belediye Kanununun 15 (b) ve 18 (m),38 ve 48 maddelerine,
                        5216 Sayılı Büyükşehir Belediye Kanunu, 5018 Sayılı Kamu Mali Yönetimi ve Kontrol Kanunu, 2886 Sayılı Devlet İhale Kanunu,
                        4734 Sayılı Kamu İhale Kanunu, 4982 Sayılı Bilgi Edinme Kanunu, 657 Sayılı Devlet Memurları Kanunu ve
                        bu kanunlara dayanak teşkil eden tüm yönetmeliklere dayanılarak hazırlanmıştır.
                        <br/><br/>
                        Tanımlar ve kısaltmalar:
                        <br/>
                        MADDE 4 -  (1) Bu yönetmelikte geçen;
                        <br/><br/><br/>
                        a)   Büyükşehir Belediyesi  :  Kocaeli Büyükşehir Belediyesini,<br/>
                        b)   Belediye :  Gebze Belediyesini,<br/>
                        c)   Başkanlık :  Gebze Belediye Başkanlığını,<br/>
                        d)   Başkan :  Gebze Belediye Başkanını,<br/>
                        e)   Başkan Yardımcısı :  İlgili Başkan Yardımcılığını,<br/>
                        f)   Müdürlük :  İşletme ve İştirakler Müdürlüğünü,<br/>
                        g)   Müdür   : İşletme ve İştirakler Müdürünü,<br/>
                        h)   Meclis   :  Gebze Belediye Meclisini,<br/>
                        ı)   Encümen :  Gebze Belediye Encümenini,<br/>
                        i)   Personel : Müdürlükte çalışan memur ,işçi ve sözleşmeli  personeli,
                        <br/>
                        j)   EBYS :  Elektronik Belge Yönetim Sistemini,<br/>
                        k)   SDP :  Standart Dosya Planını,<br/>
                        l)   SG – KYS :  Strateji Geliştirme ve Kalite Yönetim Sistemini,<br/>
                        m)   Yönetmelik : Bu Yönetmeliği,İfade eder.
                        <br/><br/><br/>
                        İKİNCİ BÖLÜM
                        <br/><br/>
                        Kuruluş, Organizasyon Yapısı ve Bağlılık
                        <br/><br/>
                        Kuruluş:
                        <br/><br/>
                        MADDE 5 – (1) Bu yönetmelik, 22 Şubat 2007 tarih ve 26442 Sayılı Resmi Gazetede yayınlanan “Belediye
                        ve bağlı Kuruluşları ile Mahalli İdare Birlikleri Norm Kadro İlke ve Standartlarına Dair Yönetmelik’’
                        uyarınca düzenlenmiş olup, 10.04.2007 Tarih ve 2007/61 Sayılı Meclis Kararınca İktisat İşleri Müdürlüğü,
                        İşletme ve İştirakler Müdürlüğü olarak değiştirilmiştir
                        <br/><br/>
                        Organizasyon Yapısı:
                        <br/><br/>
                        MADDE 6 – (1) Gebze Belediyesi İşletme ve İştirakler Müdürlüğü organizasyon yapısı aşağıdaki gibidir.
                        <br/><br/>
                        a)	Müdür<br/>
                        b)	Memur Personel<br/>
                        c)	Strateji Geliştirme ve Kalite Yönetim Temsilcisi<br/>
                        d)	Büro Personelleri
                        <br/><br/>
                        Bağlılık:
                        <br/><br/>
                        MADDE 7 – (1) İşletme ve İştirakler Müdürlüğü, Belediye Başkanına veya görevlendireceği Başkan
                        Yardımcısına bağlıdır. Başkan bu görevi bizzat veya görevlendireceği kişi eliyle yürütür.
                        <br/><br/>
                        ÜÇÜNCÜ BÖLÜM
                        <br/><br/>
                        Personelin Nitelikleri, Görev, Yetki ve Sorumluluklar
                        <br/>
                        Personelin Nitelikleri
                        <br/><br/>
                        MADDE 8- (1) İşletme İştirakler Müdürlüğüne atanacak personelin unvan ve nitelikleri aşağıdaki gibidir.
                        <br/><br/>
                        a) İşletme İştirakler Müdürü: 657 Sayılı Devlet Memurları Kanununun ilgili maddelerinde öngörülen hükümleri
                        ile "İl Özel İdareleri Belediyeler ve İl Özel İdareleri ve Belediyelerin kurdukları Birlik,
                        Müessese ve İşlemler ile Bunlara Bağlı Döner Sermayeli Kuruluşlardaki Memurların Görevde Yükselme
                        ve unvan Değişikliği Esaslarına Dair Yönetmelik" doğrultusunda atanır.
                        <br/><br/>
                        b) Memurlar: KPSS sınavı ile 657 Sayılı Kanunun atamaya ilişkin maddelerinde öngörülen
                        ilkeler veya mevzuat doğrultusunda Genel İdare Hizmetleri sınıfına dahil personel arasından en az lise veya
                        dengi veya dengi meslek lisesi mezunu olanlardan atanır.
                        <br/>
                        c) Sözleşmeli Personel: 657 Sayılı Devlet Memurları Kanununun 4/b maddesi ile 5393 sayılı yasanın 49'uncu maddesine göre kadro karşılığı gösterilmek ve sözleşme yapılmak suretiyle çalıştırılır.
                        <br/>
                        d) İşçiler: Kamu Kurum ve Kuruluşlarının Daimi Kadrolarına İlk Defa İşçi Olarak Alınacaklar Hakkında Uygulanacak Sınav Yönetmeliği Hükümlerine göre atanır.
                        <br/>
                        Müdürlüğün Görev, Yetki ve Sorumlulukları
                        <br/>
                        <br/>
                        <br/>
                        MADDE 9  :Müdürlüğün görev, yetki ve sorumlulukları şunlardır:
                        <br/>
                        <br/>
                        <br/>
                        a)	Kanunlar, kararname ve yönetmeliklere uygun olarak belediye meclis kararları ve encümen kararlarını tatbik etmek ve uygulamak.
                        <br/>
                        b)	Belediyeye ait taşınır ve taşınmaz mülklerin satışı ve kiralaması ile ilgili yazışmaları, ilan, şartname ve sözleşmeleri hazırlamak ve satışını yapmak.
                        <br/>
                        c)	Kiralama ve işgaliye karşılığı yapılan sözleşme sürelerinin sona ermesinde 1 ay önceden tüm kiracı ve işgalcilere tahliye ihtarı çekilmesi, müstecirler taahhüdü yerine getirmezse hukuki işlem başlatmak, işlemleri takip etmek, tahliye etmek.
                        <br/>
                        d)	Belediyeye ait mülkler işgal edilmiş ise kanunun verdiği yetkilere göre ecri misil alınması ile ilgili işlemleri yapmak.
                        <br/>
                        e)	Kiralarını ve işgaliye bedellerini zamanında ödemeyen tüm kiracılara ihtar çekmek, ihtara rağmen ödemezse hukuki işlem başlatmak ve yasal yollardan tahsil etmek, akabinde sözleşmenin feshi ve tahliye işlemlerini takip etmek.
                        <br/>
                        f)	Müdürlüğümüze ait tarifeleri belirleyip meclis onayına, Esnaf odalarının belirlediği fiyat tarifelerini Başkanlığın onayına sunmak, çıkan kararları tebliğ ve takip etmek, gerektiğinde ilgili kurumlara itirazda bulunmak ve konuyu takip ederek sonuçlandırmak.
                        <br/>
                        g)	Kiracı ve İşgalcilerimizin, tahakkuk ve tahsilâtlarının yapılıp yapılmadığını, elektronik ortamda, Belediyemizin Mali İşler Müdürlüğüne bağlı merkezi sistemden gelir modülü programı aracılığı sayesinde tetkik ve takip işlemlerinin yanı sıra borçlarını tespit etmek ve kiracılar ile işgalcilere ihtaren bildirmek.
                        <br/>
                        h)	Kurban Bayramı öncesinde, kurbanlık hayvan satmak isteyenlere bedelli yer tahsis etmek.
                        <br/>
                        i)	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        <br/>
                        <br/>
                        j)Terminal, Kamyon Tır Otoparkı ve Eskihisar Ücretli Otopark ile ilgili;
                        <br/>
                        <br/>
                        <br/>
                        j.1)Ulaştırma Bakanlığı Ulaşım Genel Müdürlüğünce öngörülen, Belediye Meclisince karar altına alınan terminal giriş çıkış tarifelerini uygulatmak.
                        <br/>
                        j.2)Giriş Çıkış düzenini sağlamak.
                        <br/>
                        j.3)  Zabıta Görevlileri ile koordinasyonlu çalışmak
                        <br/>
                        j.4)Görevlilerinin nöbet çizelgesini hazırlamak, çalışanları denetlemek
                        <br/>
                        j.4)Makbuz ve Fiş karşılığında alınan ücretlerin tahakkukunun yapılarak belediye veznesine yatırılmasını sağlamak
                        <br/>
                        <br/>
                        <br/>
                        Müdürün Görev, Yetki ve Sorumlulukları :
                        <br/>
                        <br/>
                        <br/>
                        MADDE 10:
                        <br/>
                        <br/>
                        a)	İşletme ve İştirakler Müdürü, Başkan’a veya görevlendireceği Başkan Yardımcısına bağlı olarak görevini yürütür.
                        <br/>
                        b)	Müdürlüğün en üst amiri olarak personeli sevk ve idare eder.
                        <br/>
                        c)	Müdürlük personelinin disiplin amiridir.
                        <br/>
                        d)	Müdürlüğümüzü stratejik plana uygun olarak yönetir, müdürlük faaliyetleri ve personelin performans ölçülerini hazırlar, izler, denetler ve değerlendirir.
                        <br/>
                        e)	Müdürlüğün rutin iç kontrolünü, performans hedeflerinin gerçekleşmesini, faaliyetlerin mevzuata uygunluğunun sağlanmasını takip eder.
                        <br/>
                        f)	Müdürlüğümüzün misyon, vizyon ve ilkeleri ile mevzuata uygun bir şekilde yönetmekten sorumludur.
                        <br/>
                        g)	Yapılan tüm işlerin kontrolünü, takibini ve sonuçlandırılmasını sağlar.
                        <br/>
                        h)	Belediyeye ait taşınır mülklerin bütün yazışma, ilan, ihale şartnamesi sözleşmelerini hazırlamak.
                        <br/>
                        i)	Kiralama ve işgaliye karşılığı yapılan sözleşme sürelerinin sona ermesinde 1 ay önceden tüm kiracı ve işgalcilere tahliye ihtarı çekilmesi, müstecirler taahhüdü yerine getirmezse hukuki işlem başlatmak, işlemleri takip etmek, tahliye etmek.
                        <br/>
                        j)	Kiralarını ve işgaliye bedellerini zamanında ödemeyen tüm kiracılara ihtar çekme ihtara rağmen ödemezse hukuki işlem başlatmak ve yasal yollardan tahsil etmek, akabinde sözleşmenin feshini ve tahliye işlemlerini takip etmek.
                        <br/>
                        k)	İlgili esnaf odalarının belirlediği fiyat tarifelerini belediye encümenine sunmak, çıkan kararları tebliğ ve takip etmek, gerektiğinde ilgili kurumlara itirazda bulunmak ve konuyu takip etmek.
                        <br/>
                        l)	Belediyeye ait taşınır ve taşınmaz mülkleri kiralamak ve satışını yapmak.
                        <br/>
                        m)	Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        n)	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        o)	Müdürlükte görevli personellerin düzenli olarak çalışma saatlerine uymasını sağlamaktan birinci derece müdür sorumludur.
                        <br/>
                        p)	İş ve İşlemlerin yürütülmesi amacı ile gerektiğinde araç kullanmak.
                        <br/>
                        <br/>
                        <br/>
                        Memur Personel Görev, Yetki ve Sorumlulukları:
                        <br/>
                        <br/>
                        <br/>
                        MADDE 11:
                        <br/>
                        <br/>
                        <br/>
                        a)	 Müdür’e bağlı olarak görevini yürütür ve verilecek olan diğer işleri de yapmakla sorumludur.
                        <br/>
                        b)	 Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        <br/>
                        Müdür'e karşı sorumludur.
                        <br/>
                        c)	  Kira ve İşgalcilerin denetimini yapmak.
                        <br/>
                        d)   Tahakkuk takibi ve kontrolünü yapmak.
                        <br/>
                        e)    Büroya gelen evrakları teslim alarak gerekli iş ve işlemleri yapmak.
                        <br/>
                        f)    Büro ile ilgili iç ve dış yazışmaları yapmak.
                        <br/>
                        g)   Müdürlüğe ait ayniyat işlemleri ile muhasebe işlemlerini yürütmek.
                        <br/>
                        h)    Bildiri ve genelgelerin dağıtımını yapmak ve bunlar için ayrı dosyalar oluşturmak.
                        <br/>
                        i)    Mevzuatı takip etmek.
                        <br/>
                        j)    Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        k)   Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        l)    İş ve İşlemlerin yürütülmesi amacı ile gerektiğinde araç kullanmak.
                        <br/>
                        <br/>
                        <br/>
                        Strateji Geliştirme ve Kalite Yönetim Temsilcisi Görev, Yetki ve Sorumlulukları:
                        <br/>
                        MADDE 12:
                        <br/>
                        <br/>
                        <br/>
                        a)	Müdür’e bağlı olarak çalışır.
                        <br/>
                        b)	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        <br/>
                        Müdür’e, Strateji Geliştirme ve Kalite Yönetim Sistemi Koordinatörüne karşı sorumludur.
                        <br/>
                        c)	  Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite
                        <br/>
                        Yönetim Sistemi ile ilgili birim aylık raporlarını düzenleyerek üst yönetime sunmak.
                        <br/>
                        d)	Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite Yönetim sistemi ile ilgili bölümü hazırlamak ve yılda bir kez gözden geçirmek, gerekirse revize etmek.
                        <br/>
                        e)	İç denetim faaliyeti kapsamında denetçilere birimi ile ilgili konularda bilgi verir ve Biriminde Kalite Yönetim Sistemi’nin etkinliği konusunda rapor hazırlar ve Yönetimin Gözden Geçirmesi toplantısına sunmak üzere Kalite Yönetim Koordinatörlüğüne iletmek.
                        <br/>
                        f)	Sistemde birimi ile ilgili doğabilecek uygunsuzlukların belirlenmesi ve giderilmesi için birimin risk analizlerini belirleyerek, önleyici faaliyetlerin planlanması ve takibi işlemlerini yapmak.
                        <br/>
                        g)	Yönetim tarafından oluşturulmuş olan diğer kurallar çerçevesinde ve Stratejik Plan, Performans    Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite Yönetim Sistemi içinde hazırlanmış dokümanlarda belirtilen diğer görevlerini yerine getirmek.
                        <br/>
                        h)	İşlemleri yapılmak üzere gönderilen yazıları, raporları vs. belgeleri gizli tutmakla ve bunları ilgili yerlerine süresinde göndermekle sorumludur.
                        <br/>
                        i)	Müdürlüğün tüm iş ve işlemlerine ait yazışma, dosya ve kayıt işlerini zamanında ve düzgün olarak yürütmek ve muhafaza etmek, Müdürlüğe gönderilen dergi ve benzeri yayınları, demirbaş ve özel yazıları defterlerine kayıt ve bunları saklamakta ve hasara uğrayanları tespit etmekten kırtasiye ve basılı evrakları ihtiyaca göre hazırlanması ve dağıtılmasından, kayıt işlemi biten evrak vs. belgelerin süresinde gönderilmesinden, evrak dosyalarının düzgün olarak saklanmasından, sorumludur.
                        <br/>
                        j)	İş ve İşlemlerin yürütülmesi amacı ile gerektiğinde araç kullanmak.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Büro Personeli Görev, Yetki ve Sorumlulukları
                        <br/>
                        <br/>
                        <br/>
                        MADDE 13:
                        <br/>
                        <br/>
                        <br/>
                        1)	  Müdür’e bağlı olarak çalışır.
                        <br/>
                        a)	  Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        <br/>
                        Müdür'e karşı sorumludur.
                        <br/>
                        c)    Kira ve İşgalcilerin denetimini yapmak.
                        <br/>
                        d)   Tahakkuk takibi ve kontrolünü yapmak.
                        <br/>
                        e)    Büroya gelen evrakları teslim alarak gerekli iş ve işlemleri yapmak.
                        <br/>
                        f)    Büro ile ilgili iç ve dış yazışmaları yapmak.
                        <br/>
                        g)   Müdürlüğe ait muhasebe işlemlerini yürütmek ve mevzuatı takip etmek.
                        <br/>
                        h)   Bildiri ve genelgelerin dağıtımını yapmak ve bunlar için ayrı dosyalar oluşturmak. Üstlerinden
                        <br/>
                        aldığı emir ve görevleri yerine getirmek.
                        <br/>
                        i)    Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        j)    İşlemleri yapılmak üzere gönderilen yazıları, raporları vs. belgeleri gizli tutmakla ve bunları ilgili
                        <br/>
                        Yerlerine süresinde göndermekle sorumludur.
                        <br/>
                        k)   İlgili kanun hükümleri çerçevesinde İhale iş ve işlemlerinin yürütülmesi, ilan, şartname ve
                        <br/>
                        sözleşme hazırlanması, kiralama, işgaliye ve ecri misil alınması ile ilgili yazışmaları yapmak.
                        <br/>
                        l )    Müdürlüğün tüm iş ve işlemlerine ait yazışma, dosya ve kayıt işlerini zamanında ve düzgün olarak
                        <br/>
                        yürütmek ve muhafaza etmek, Müdürlüğe gönderilen dergi ve benzeri yayınları, demirbaş ve özel
                        <br/>
                        yazıları defterlerine kayıt ve bunları saklamakta ve hasara uğrayanları tespit etmekten kırtasiye ve
                        <br/>
                        basılı evrakları ihtiyaca göre hazırlanması ve dağıtılmasından, kayıt işlemi biten evrak vs. belgelerin
                        <br/>
                        süresinde gönderilmesinden, evrak dosyalarının düzgün olarak saklanmasından, sorumludur.
                        <br/>
                        m)   İş ve işlemlerin yürütülmesi amacı ile gerektiğinde araç kullanmak.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        DÖRDÜNCÜ BÖLÜM
                        <br/>
                        ÇEŞİTLİ HÜKÜMLER
                        <br/>
                        Kayıt ve Arşivleme:
                        <br/>
                        <br/>
                        <br/>
                        MADDE 14 : (1) Her türlü gelen ve giden evrak usulüne uygun olarak hem defterde hem de elektronik ortamda (OMİS-EBYS) kayıt edilir. Başkanlıkça müdürlüğe havale edilen evraklar ivedilikle sonuçlandırılıp, cevaplandırılır. İlgili yerlere yazı ile bildirilir. Gelen ve giden evrakın ‘‘Standart Dosya Planına’’ göre arşivlemesi yapılır.
                        <br/>
                        <br/>
                        <br/>
                        Giderler:
                        <br/>
                        <br/>
                        <br/>
                        MADDE 15 : (1) Müdürlüğün personel giderleri, yolluklar, tüketim malzemeleri, alımlar, haberleşme giderleri, enerji giderleri, demirbaş alımları, bakım onarım gibi giderleri bütçe kanuna göre hazırlanan ve Meclisçe onaylanan müdürlük bütçesinin ilgili harcama kaleminden yapılır.
                        <br/>
                        <br/>
                        <br/>
                        Disiplin Hükümleri:
                        <br/>
                        <br/>
                        <br/>
                        MADDE 16 : (1) 6331 Sayılı İş Sağlığı ve Güvenliği Kanunu, 657 Sayılı Devlet Memurları Kanunu,  4857 Sayılı İş Kanunu ile yürürlükteki toplu iş sözleşmesinin disiplin cezaları ile ilgili hükümler uygulanır.
                        <br/>
                        <br/>
                        <br/>
                        BEŞİNCİ BÖLÜM
                        <br/>
                        SON HÜKÜMLER
                        <br/>
                        Yönetmelik, Yürürlük ve Yürütme
                        <br/>
                        Yönetmelikte hüküm bulunmayan haller:
                        <br/>
                        <br/>
                        <br/>
                        MADDE 17 : (1) İş bu yönetmelikte hüküm bulunmayan hallerde yürürlükteki ilgili mevzuat
                        <br/>
                        hükümlerine uyulur.
                        <br/>
                        <br/>
                        <br/>
                        Yürürlük:
                        <br/>
                        <br/>
                        <br/>
                        MADDE 18 : (1) Gebze Belediye Meclisinin kabulü ile yürürlüğe girer.
                        <br/>
                        <br/>
                        <br/>
                        Yürütme:
                        <br/>
                        <br/>
                        <br/>
                        MADDE 19 : (1) Bu yönetmelik hükümleri Gebze Belediye Başkanı tarafından yürütülür.
                    </p>
                </section>
                <section id="bolum2" className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
                    <h3 className="text-lg font-bold text-center"></h3>
                    <p className="text-gray-700 text-left">
                        05.01.1977 tarihinde İstanbul-Kartal’da doğdu. Eğitim-öğretim hayatına Cumhuriyet İlkokulu’nda başladı.
                        Sırasıyla 60. Yıl İlköğretim Okulu ve Darıca Lisesi’nde okuduktan sonra 1999 yılında Sakarya Üniversitesi Mahalli İdareler Bölümü’nden mezun oldu.
                        Ardından Anadolu Üniversitesi İktisadi ve İdari Bilimler Fakültesi Kamu Yönetimini bitirdi.
                        2000-2004 yılları arasında Darıca Nene Hatun İlköğretim Okulu’nda öğretmenlik yaptı.
                        Aynı zamanda çeşitli sivil toplum kuruluşlarında üye ve yönetici olarak görev yaptı.
                        2004 yılında Gebze Belediyesi’nde çalışmaya başladı. Belediyenin çeşitli birimlerinde çalıştıktan sonra
                        2020 yılı Ağustos ayı itibariyle Gebze Belediyesi Destek Hizmetleri Müdürü olarak atanan
                        Hacı KEY halen bu görevine devam etmektedir. Evli ve 3 çocuk babasıdır.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Hacikey;
