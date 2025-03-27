import React from "react";

const Sonerbılır: React.FC = () => {
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
                        src="s"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">Afet İşleri Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" /> Soner BİLİR
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" /> afet.isleri@gebze.bel.tr
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

                    <h4 className="text-center ">AFET İŞLERİ MÜDÜRLÜĞÜ</h4>


                    <h5 className="text-center">GÖREV, YETKİ VE SORUMLULUKLARI İLE ÇALIŞMA USUL VE ESASLARINA DAİR YÖNETMELİK</h5>
                    <br/>
                    <p className="text-gray-700 text-left">Madde 1 - Amaç

                        Bu yönetmeliğin amacı Afet İşleri Müdürlüğü teşkilat yapısını, hukuki statüsünü, görev, yetki ve sorumluluklarıyla, çalışma usul ve esaslarını belirleyerek, hizmetlerinin daha etkin ve verimli yürütülmesini sağlamaktır.

                        <br />
                            <br />

                                Madde 2 - Kapsam
                                <br />
                                    Bu yönetmelik Afet İşleri Müdürlüğü’nün; hukuki statüsünü, görev, yetki ve sorumlulukları ile çalışma usul ve esaslarını kapsar.
                        <br />


                        Madde 3 -Dayanaklar
                        <br/>
                        Bu yönetmelik yürürlükteki 5393 sayılı Belediye Kanunu, 5216 Sayılı Büyükşehir Belediye Kanunu,
                        6360 sayılı Kanun, Afet Ve Acil Durum Arama Ve Kurtarma Birlik Müdürlükleri İle İl Afet Ve Acil
                        Durum Arama Ve Kurtarma Ekiplerinin Kuruluşu, Görevleri, Çalışma Usul Ve Esasları Hakkında
                        Yönetmelik ile Afet Ve Acil Durum Yönetimi Başkanlığı Afet Ve Acil Durumlara İlişkin Hizmet
                        Standartları Ve Akreditasyon Esaslarının Belirlenmesi Hakkında Yönetmelik ilgili mevzuat
                        hükümlerine istinaden hazırlanmıştır.
                        <br/>
                        <br/>

                        Madde 4 -Tanımlar
                        <br/>
                        Bu yönetmelikte uygulamasında;
                        <br/>
                        Bakanlık (1); Çevre, Şehircilik ve İklim Değişikliği Bakanlığı’nı,
                        <br/>
                        Bakanlık (2); İçişleri Bakanlığı’nı,
                        <br/>
                        İl Müdürlüğü; Kocaeli Çevre, Şehircilik ve İklim Değişikliği İl Müdürlüğü’nü,
                        <br/>
                        AFAD; Afet ve Acil Durum Başkanlığı’nı,
                        <br/>
                        Kocaeli AFAD; Kocaeli Afet ve Acil Durum İl Müdürlüğü’nü,
                        <br/>
                        Belediye; Kocaeli Büyükşehir Belediyesi sınırları içerisinde var olan Gebze Belediyesi’ni,
                        <br/>
                        Başkanlık; Gebze Belediye Başkanlığı’nı,
                        <br/>
                        Müdürlük; Afet İşleri Müdürlüğü’nü,
                        <br/>
                        Harcama Yetkilisi; Bölüm Müdürünü, gerçekleştirme görevlisi müdürün tanımladığı kişiyi,
                        <br/>
                        Harcama Talimatı; Hizmetin gerekçesi ile yapılacak işin konusu, tutarı, süresi, kullanılabilir
                        ödeneği, gerçekleştirme yöntemi ve hizmeti gerçekleştirecek görevlinin yazılı olduğu belgeyi,
                        <br/>
                        Gerçekleştirme Görevlisi; Harcama talimatı üzerine, işin yaptırılması, mal veya hizmetin
                        alınması, teslim almaya ilişkin işlemlerin yapılması, belgelendirmesi ve ödeme için gerekli
                        belgelerin hazırlanması görevini yürüten kişiyi ifade eder.
                        <br/>
                        AFET: Gebze İlçesinde ve Türkiye çapında meydana gelebilecek, can ve mal kaybına yol açabilecek
                        her türlü deprem, sel, heyelan, yangın, fırtına, hortum, çığ, yıldırım düşmesi vb. gibi doğa
                        olaylarını ifade eder.
                        <br/>
                        İRAP: (İl Afet Risk Azaltma Planı); Afetlerin olası etkilerini dikkate alarak; bu etkileri en
                        aza indirmek adına afetler olmadan hayata geçirilmesi gerekenleri süreç dahilinde tarifleyen,
                        sorumluları ve sorumlulukları tanımlayan sürdürülebilir bir plandır.
                        <br/>
                        TAMP: (Türkiye Afet Müdahale Planı); Afet ve acil durumlara ilişkin müdahale çalışmalarında
                        görev alacak çalışma grupları ve koordinasyon birimlerine ait rolleri ve sorumlulukları
                        tanımlamak, afet öncesi, sırası ve sonrasındaki müdahale planlamasının temel prensiplerini
                        belirlemektir. TAMP, ülkemizde yaşanabilecek her tür ve ölçekte, afet ve acil durumlara
                        müdahalede görev alacak bakanlık, kurum ve kuruluşlar, özel sektör, STK’lar ve gerçek kişileri
                        kapsar. TAMP ile entegre planlama yaklaşımı ve modüler yapısıyla afet sırasındaki operasyon
                        risklerini en aza indirecek bir sistem kurgulanmıştır.
                        <br/>
                        INSARAG: BM çatısı altında faaliyet gösteren afet yöneticileri, devlet memurları, sivil toplum
                        kuruluşları (STK’lar) ve USAR uygulayıcılarından oluşan bir hükümetler arası insani ağ olup,
                        yetkisi dahilinde Uluslararası Afet Zararlarının Azaltılması Stratejisinin (ISDR) uygulanmasına
                        katkıda bulunur.
                        <br/>
                        GEAK: Uluslararası Çağrı, İletişim ve Enkaz İşaretleme Standartları gereği kullanılmak üzere;
                        Gebze Belediyesi Afet İşleri Müdürlüğü Arama Kurtarma Ekibi’ni ifade eder.
                        <br/>
                        LOGO: Uluslararası Çağrı, İletişim ve Enkaz İşaretleme Standartları gereği kullanılmak üzere;
                        Gebze Belediyesi Afet İşleri Müdürlüğü Arama Kurtarma Ekibi’nin logosunu ifade eder. Tasarlanan
                        ilgili logo Gebze Belediye Meclisi’nce tescil edilmek üzere 13. Sayfa Ek-1’de sunulmuştur.
                        <br/>
                        Organizasyom Şeması: Gebze Belediyesi Afet İşleri Müdürlüğü’nün hiyerarşik yapısını ifade eder.
                        Tasarlanan organizasyon şeması Gebze Belediye Meclisi’nce tescil edilmek üzere 14. Sayfa Ek-2’de
                        sunulmuştur.
                        <br/>
                        <br/>
                        <br/>


                        İKİNCİ BÖLÜM
                        <br/>
                        <br/>

                        Madde 5 - Kuruluş
                        <br/>
                        09.04.2023 tarihli ve 32158 sayılı Resmi Gazete’de yayımlanan Belediye ve Bağlı Kuruluşları ile
                        Mahalli İdari Birlikleri Norm Kadro İlke ve Standartlarına dair yönetmelikte değişiklik
                        yapılmasına dair yönetmelik kapsamanda C-16 grubu olan belediyemizde zorunlu müdürlük olarak
                        kurulması gereken “Afet İşleri Müdürlüğü” Gebze Belediye Meclisi’nin 02/05/2023 tarihli ve 113
                        numaralı kararı ile kurulmuştur.
                        <br/>


                        Madde 6 – Afet İşleri Müdürlüğü’nün Temel Görevi
                        <br/>
                        Gebze ilçemizi ve halkımızı “TAMP (Türkiye Afet Müdahale Planı) doğrultusunda Afetlere
                        Hazırlıklı ve Dayanıklı Kılmak” adına aşağıda belirtilen görevleri yerine getirir;
                        <br/>
                        a) Bakanlığın yönetmelik, emir ve talimatları ile Kocaeli Valiliği İl Afet ve Acil Durum
                        Müdürlüğü (Kocaeli AFAD) tarafından INSARAG standartları gereğince belediye personelinin eğitim,
                        teşkilat, teçhizat, sertifikasyon, entegrasyon ve akreditasyonu yapılarak afet öncesi hazırlık
                        yapmak ve önlem almak, afet esnasında kurumlar arası etkin ve hızlı koordinasyon sağlayarak
                        eğitimli ve kalifiye personel ile afetle mücadele, arama kurtarma işlemlerini yürütmek, Kent
                        yangınlarında ihtiyaç halinde İtfaiye Teşkilatına, Orman Yangınlarında ihtiyaç halinde Orman
                        Genel Müdürlüğü Teşkilatına destek olmak ve Gebze Belediyesi Kültür ve Sosyal İşler Müdürlüğü ve
                        ilgili kurumlar ile koordine ederek afet sonrası iyileştirme, lojistik, ikmal, iaşe, barınma,
                        gıda, hijyen gibi insani ihtiyaçların giderilmesi ve psiko-sosyal destek işlemlerini koordine
                        etmek,
                        <br/>
                        b) Afet İşleri Müdürlüğü Arama Kurtarma Ekibi personelinin eğitim, eğitim tazeleme ve aylık
                        rutin tatbikatlarını yaptırmak,
                        <br/>
                        c) Afet dışı zamanlarda ilçemizdeki kamu kurumlarına ve personeline, tüm okul öğrenci ve
                        öğretmenlerine, STK’lara, muhtarlıklar ile koordinasyon sağlayarak ilçe halkımıza mahalle
                        bazında afet farkındalık ve afetle mücadele eğitimleri vermek ve tatbikat yaptırmak,
                        <br/>
                        d) İlçemizde veya ülkemizin herhangi bir yerinde gerçekleşecek herhangi bir afette Kocaeli
                        Valiliği İl Afet ve Acil Durum Müdürlüğü (Kocaeli AFAD) ile koordineli bir şekilde “Gebze
                        Belediyesi Arama Kurtarma Ekibi (GEAK)” unvanıyla afetle mücadele ve arama kurtarma
                        faaliyetlerine katılarak ilçemizin ve belediyemizin temsil edilmesi görevlerini üstlenmek,
                        <br/>
                        e) Afetlere hazırlık için her mahalleden gönüllü grupları oluşturarak eğitim vermek,
                        eğitimlerini koordine etmek, örgütlenmesini ve teçhizatlanmasını sağlamak, belirli aralıklarla
                        tatbikatlar yaptırmak ve afet esnasında afet bölgesinde ihtiyaç halinde gönüllü grupları emir
                        komuta ederek profesyonel personel ile birlikte koordineli bir şekilde sevk ve idaresini
                        sağlamak,
                        <br/>
                        f) Afetin yönetimi, ilçedeki afet ve acil durumlarda Gebze Afet İşleri Müdürlüğü’nde
                        toplanmasına ilişkin gerekli organizasyonu yapmak.
                        <br/>
                        g) Afet öncesi, sırası ve sonrası Vali, Kaymakam, Belediye Başkanı ve AFAD üst düzey
                        yetkililerinin direktiflerinin ilgili belediye birimlerine iletilmesi ve yerine getirilmesi
                        konusunda koordinasyonu yerel düzeyde sağlamak. Afet ile ilgili mevzuatı takip ederek, buna göre
                        gerekli planlamaları yapmak ve yazılı hale getirmek.
                        <br/>
                        h) Afet öncesi, sırası ve sonrası yerel düzey ve imkânlar dâhilinde risk analizi belirleme
                        çalışmalarını yapmak ve sürekli senaryolar hazırlayıp müdahale planları geliştirmek.
                        <br/>
                        i) İlçe genelinde oluşabilecek afet ve acil durumlar ivedi olarak üst yönetim ile paylaşarak
                        ilgili planının gereğini yerine getirilmesi ile birlikte, ilgili tüm personelin, kurum ve
                        kuruluş temsilcilerinin Gebze Afet İşleri Müdürlüğü’nde toplanmasını sağlamak.
                        <br/>
                        j) Afetlere ilişkin; ilçe genelinde afet gönüllü katılımını teşvik etmek ve sivil toplum
                        kuruluşlarının çalışmalarını ve koordinasyonunu yürütmek.
                        <br/>
                        k) İlçe genelinde halkı sadece afet sonrası değil sürekli afetlere karşı dinamik ve hazırlıklı
                        tutmak adına bilinçlendirici, uyarıcı pano, broşür ve kitapçıklar ve materyallerle hazır
                        tutulmasını sağlamak.
                        <br/>
                        l) Afetlere karşı ilçe eylem planlarının hazırlanması ve yapılacak senaryolara göre tatbik
                        edilmesini sağlamak ve öncelik Belediyemiz ekipleri olmak üzere sırasıyla ön inceleme saha
                        ekibi, ön hasar tespit, araç gereç, tahliye, arama kurtarma, trafik, iaşe, konaklama, enkaz
                        kaldırma, lojistik ekiplerinin oluşturulması, yerel imkânlar ve yetkiler dâhilinde gerekli
                        önlemleri almak.
                        <br/>
                        m) Afetlerde kullanılacak araç gereç ve tesisat çalışır durumda bulunması sağlamak. İlçe
                        genelinde bulunan afetlere karşı araç gereç envanterini tutmak. Belediyemizde mevcut iş
                        makinalarını ve ağır araçlarını afet anında olay bölgesine yönlendirilmesi ve ayrıca Belediyemiz
                        envanterinde ve ilçemizde bulunmayan yüksek erişimli iş makinaları bulunan kurum, kuruluş ve
                        özel sektör ile gerekli görüşmelerin yapılması ve ihtiyaç halinde afet bölgesine
                        yönlendirilmesini sağlamak.
                        <br/>
                        n) Afet öncesi, sırası ve sonrası hızlı ve etkili haberleşme için belediye haberleşme sistemine
                        ilişkin çalışmaların takibini ve iyileştirilmesini sağlayarak aktif halde kullanılmasını
                        sağlamak.
                        <br/>
                        o) Afet öncesi, sırası ve sonrası önceden ilgili kurumlarca belirlenen toplanma alanlarının
                        hazır halde tutulmasının sağlanması ve halkın bu konuda bilgilendirilmesini sağlamak ve afet
                        sonrası muhtemel çadır kentlerin yerlerinin belirlenerek önlemlerin alınmasını sağlanmak.
                        <br/>
                        p) Afet öncesi, sırası ve sonrası barınma alanlarına ilişkin (Okul, Spor Salonu, Yurt vs)
                        tespitleri kapasiteleri ve durumlarına yönelik envanterlerin çıkarılması ve tahliye eylem
                        planlarının oluşturulmasına ilişkin ilgili kurumlar ile organize etmek.
                        <br/>
                        q) Olası büyük afetlerde ulusal yardımların nasıl, ne şekilde ve hangi durumlarda yapılacağına
                        ilişkin ilgili kurumlar ve AFAD ile bölgemizin yerel düzeyde fiziki, sosyolojik ve kültürel
                        durumunun SWAT çalışmaları yapılması ve müdahalelere gelmeleri durumunda mihmandarlık yaparak
                        müdahalenin hızlı, etkin ve doğru şekilde olmasını sağlamak. Ayrıca ulusal ve uluslararası
                        düzeyde uzman kişi ve kuruluşlarla işbirliği içerisinde Belediye sınırları içerisinde ilgili
                        kurumlar ile afet önleme çalışmalarına katkı sağlamak.
                        <br/>
                        r) Gerektiğinde ilçemiz sınırları dışında olabilecek afetlere ilişkin Başkanlık Makamının da
                        uygun görmesi halinde gerekli desteği sağlamak.

                        <br/>
                        s) Afetlerin yaşandığı mevsime göre alınacak gerekli önlemleri belirlemek ve ilgili kurum
                        kuruluş ve Müdürlükler ile koordineyi sağlamak.
                        <br/>
                        t) Yapılacak tüm çalışmaları kayıt altına almak ve arşiv oluşturmak. Afet sonrası; belediyemizi
                        ilgilendiren afet nedenleri, sonuçları ve yapılması gerekenler hakkında rapor düzenleyerek
                        Başkanlık Makamına arz etmek.
                        <br/>
                        u) Yukarıda izahı yapılan tüm hususlar ilgili mevzuatlar çerçevesinde yerel yönetimlere verilen
                        yetki ve sorumluluk içerisinde yerel, ulusal, uluslararası düzeyde Başkanlık Makamının
                        görevlendirmesi ile icra edilecektir.
                        <br/>


                        Madde 7 - Organizasyon Yapısı
                        <br/>
                        a) Afet İşleri Müdürlüğü; üst yönetici olarak Belediye Başkanına veya Başkanının görevlendirdiği
                        ve yetki verdiği Başkan Yardımcısına bağlı olarak çalışmalarını sürdürür.
                        <br/>
                        b) Müdürlüğün organizasyon şemasındaki yatay ve dikey hiyerarşik yapılanma; müdürün teklifi,
                        ilgili başkan yardımcısının uygun görüşü ve Belediye Başkanının onayıyla oluşur ve yürürlüğe
                        girer.
                        <br/>
                        c) Belediye Başkanı organizasyon yapısını re’sen değiştirmeye yetkilidir.
                        <br/>
                        d) Afet İşleri Müdürü hizmet gereklerine uygun olarak birimlerin yapısı, çalıştırılacak
                        personelin dağılımı ve yapılacak işlerle ilgili düzenlemeleri ve işlemleri mevzuat çerçevesinde
                        yapar.
                        <br/>
                        <br/>

                        AFET İŞLERİ MÜDÜRLÜĞÜ
                        <br/>
                        ORGANİZASYON YAPISI
                        <br/>
                        <br/>


                        Madde 8 - Personel Yapısı
                        <br/>
                        Müdürlükte uygun nitelik ve sayıda memur, kadrolu işçi, geçici işçi, sözleşmeli personel ve
                        hizmet alımı yoluyla çalıştırılan personel görev yapar.
                        <br/>
                        Madde 9 - Müdürün Görev, Yetki ve Sorumlulukları
                        <br/>
                        a) Gebze ilçemizi ve halkımızı “TAMP (Türkiye Afet Müdahale Planı) doğrultusunda Afetlere
                        Hazırlıklı ve Dayanıklı Kılmak” adına Kocaeli Valiliği İl Afet ve Acil Durum Müdürlüğü (Kocaeli
                        AFAD) tarafından INSARAG standartları gereğince belediye personelinin eğitim, teşkilat,
                        teçhizat, sertifikasyon, entegrasyon ve akreditasyonu yapılarak afet öncesi tehlike avı yoluyla
                        hazırlık yapmak ve önlem almak, afet esnasında kurumlar arası etkin ve hızlı koordinasyon
                        sağlayarak eğitimli ve kalifiye personel ile afetle mücadele, arama kurtarma ve afet sonrası
                        iyileştirme işlemlerini yürütmek.
                        <br/>
                        b) Kent yangınlarında ihtiyaç halinde İtfaiye Teşkilatına, Orman Yangınlarında ihtiyaç halinde
                        Orman Genel Müdürlüğü Teşkilatına destek olmak için Arama Kurtarma Ekibini sevk ve idare etmek.
                        <br/>
                        c) Afet dışı zamanlarda ilçemizdeki kamu kurumlarına ve personeline, tüm okul öğrenci ve
                        öğretmenlerine (sınıf bazında), muhtarlıklar ile koordinasyon sağlayarak mahalle bazında ilçe
                        halkımıza afet farkındalık ve afetle mücadele eğitimleri vermek ve tatbikat yaptırmak.
                        <br/>
                        d) İlçemizde veya ülkemizin herhangi bir yerinde gerçekleşecek herhangi bir afette Kocaeli
                        Valiliği İl Afet ve Acil Durum Müdürlüğü (Kocaeli AFAD) ile koordineli bir şekilde “Gebze
                        Belediyesi Arama Kurtarma Ekibi’ni (GEAK)” sevk ve idare ederek afetle mücadele ve arama
                        kurtarma faaliyetlerinde ilçemizin ve belediyemizin temsil edilmesi görevlerini üstlenmek.
                        <br/>
                        e) Afet esnasında Belediyemizin İlgili Müdürlükleri ile afet bölgesinde Arama-Kurtarma ve enkaz
                        kaldırma işlerine destek verecek olan iş makinelerinin planlamasını, sevk ve koordinesini
                        yapmak.
                        <br/>
                        f) Gebze Belediyesi Kültür ve Sosyal İşler Müdürlüğü ve ilgili kurumlar ile koordine ederek afet
                        sonrası iyileştirme, lojistik, ikmal, iaşe, barınma, gıda, hijyen gibi insani ihtiyaçların
                        giderilmesi ve psiko-sosyal destek işlemlerini koordine etmek,
                        <br/>
                        g) Afetlere hazırlık için her mahalleden gönüllü grupları oluşturarak eğitim vermek,
                        eğitimlerini koordine etmek, örgütlenmesini ve teçhizatlanmasını sağlamak, belirli aralıklarla
                        tatbikatlar yaptırmak ve afet esnasında afet bölgesinde ihtiyaç halinde gönüllü grupları emir
                        komuta ederek profesyonel personel ile birlikte koordineli bir şekilde sevk ve idaresini
                        sağlamak,
                        <br/>
                        h) Diğer sivil savunma hizmetlerini icra etmek.
                        <br/>
                        i) Belediye Başkanı’nın ve/veya yetki verdiği Başkan Yardımcısının gözetimi ve denetimi altında,
                        mer’i mevzuat gereği Müdürlüğün; sevk ve idaresini, organize edilmesini, kadrolar arasında
                        görevlerin dağıtılmasını, iş ve işlemlerin yeniden tanzimine ilişkin dâhili düzenlemeleri
                        sağlamak.
                        <br/>
                        j) Müdürlüğün faaliyet alanları içerisinden gelen çeşitli dilek, talep ve şikayetlerini
                        inceleyerek gerekli iyileştirme çalışmalarını başlatmak / başlattırmak, takip ederek ilgili
                        kişi/birimlere geri bildirimde bulunmasını sağlamak.
                        <br/>
                        k) Müdürlük faaliyetlerinde kullanılacak her türlü malzeme ve hizmet alımlarında teknik
                        şartnameleri hazırlamak ya da hazırlanmasını temin ederek onaylamak.
                        <br/>
                        l) Yüklenici firmalardan temin edilen ürün ya da hizmetlerde herhangi bir aksaklık olması
                        durumunda ilgili firma ile görüşerek / görüşülmesini sağlayarak gerekli düzeltici faaliyetlerin
                        gerçekleştirilmesini takip ve koordine etmek.
                        <br/>
                        m) Stratejik plana uygun olarak yıllık bölüm bütçesinin ve yatırımın / cari projelerinin
                        belirlenmesini ve gerçekleşmesini sağlamak.
                        <br/>
                        n) Müdürlük ile ilgili kuruluş içi / dışı denetimlerin gerçekleştirilmesine yardımcı olmak ve
                        denetim raporuna göre gerekli düzeltici faaliyet planını hazırlamak.
                        <br/>
                        o) Arama Kurtarma Ekibi personelinin eğitim, eğitim tazeleme ve aylık rutin tatbikatlarını
                        yaptırmak,
                        <br/>
                        p) Sorumluluğu altındaki tüm iş ve personeli denetlemek, astlarının arasında ve görevinin
                        gerektirdiği tüm birimlerle gerekli koordinasyonu kurmak.
                        <br/>
                        q) Sorumluluğundaki uzun / kısa vadeli işleri planlamak, günün değişen koşullarına göre
                        planlarda esneklik yaratarak, işlerin tam zamanında etkin ve ekonomik yürütülmesi için gerekli
                        gelişmeleri ve yayınları izlemek.
                        <br/>
                        r) Harcama yetkilisi, hiyerarşik olarak kendisine en yakın üst kademe yöneticileri arasından bir
                        veya daha fazla sayıda gerçekleştirme görevlisini ödeme emri belgesi düzenlemekle görevlendirmek
                        ve bunu da Mali Hizmetler Müdürlüğü’ne yazı ile bildirmek.
                        <br/>
                        s) Harcama Yetkilileri, harcama talimatlarının bütçe ilke ve esaslarına, kanun, tüzük ve
                        yönetmelikler ile diğer mevzuata uygun olmasından ödeneklerin etkili, ekonomik ve verimli
                        kullanılmasından sorumludur.
                        <br/>
                        t) İlgili yönetmeliğe uygun olarak Müdürlüğün taşınır kayıt ve kontrol yetkililerini belirleme,
                        taşınır işlemlerinin gerçekleştirilmesini sağlamak.
                        <br/>
                        u) Personelin fazla mesai, ödül ve özlük haklarına ilişkin iş ve işlemleri takip ve kontrol
                        etmek, başkanlık makamına, belediye encümenine ve belediye meclisine resmi yazı ile bildirmek.
                        <br/>
                        v) Müdürlüğün hedef ve amaçlarını; kurumun hedef ve amaçlarına hizmet edecek biçimde organize
                        etmek.


                        <br/>
                        <br/>
                        <br/>

                        Madde 10 – Birim Yetkilileri ve Personelinin Görev, Yetki ve Sorumlulukları
                        <br/>
                        <br/>

                        Teknik ve İdari İşler Birimi;
                        <br/>
                        a) Bağlı olduğu birimin sevk ve idaresinden, disiplininden, her türlü hal ve hareketinden
                        sorumludur.
                        <br/>
                        b) Birimin kanun tüzük ve yönetmeliklerle belirlenen görevlerle Belediye Başkanlığı ve üst
                        mercilerin vermiş olduğu emirleri, yetkileri dâhilinde icra etmek ve ettirmekten sorumludur.
                        <br/>
                        c) Birimin görevlerini icra etmesi için her türlü tedbirleri alıp planlamasını yaparak Afet
                        İşleri Müdürlüğü'ne sunup icra ettirir.
                        <br/>
                        d) Görevin en etkin ve zamanında icrası için birimindeki personelin aylık çalışma ve yıllık izin
                        programını hazırlayarak Müdürlük Makamına sunar.
                        <br/>
                        e) Müdür tarafından verilen tüm görevleri yerine getirmek.
                        <br/>
                        f) Sivil savunma planlarını hazırlamak ve bu planları güncellemek,
                        <br/>
                        g) Belediye binalarının tahliyeye ilişkin planlamasını koordine etmek,
                        <br/>
                        h) Sivil savunma servislerinin kuruluşunu sağlamak ve eğitimlerini yaptırmak,
                        <br/>
                        i) Afet, sivil savunma ve acil durum hizmetleri için gerekli olan araç, gereç ve malzemenin
                        tedarik ve teminini ilgili birimlerle koordine ederek planlamak, mevcutların bakım ve
                        korunmalarının takibini yapmak,
                        <br/>
                        j) Afet, sivil savunma, acil durum ve seferberlik hizmetleri için gerekli ödeneği ilgili
                        birimlerle koordine ederek belirlemek ve bütçeye konulmasını sağlamak,
                        <br/>
                        k) Afet ve acil durum hallerinde müdahaleyi koordine etmek ve üst yöneticileri bilgilendirmek,
                        <br/>
                        l) Hizmetlerle ilgili mevzuat, yayın ve direktifleri izlemek, incelemek ve bunların gereklerini
                        yerine getirmek,
                        <br/>
                        m) Bu Yönetmelikte belirtilen görevlerin yerine getirilmesi amacıyla; Belediye ile Afet ve Acil
                        Durum Yönetimi Başkanlığı, İl Afet ve Acil Durum Müdürlüğü ve diğer kamu kurum ve kuruluşları
                        arasında işbirliği ve koordinasyonu sağlamak,
                        <br/>
                        n) Kimyasal, biyolojik, radyolojik ve nükleer savunma ile ilgili iş ve işlemleri yürütmek,
                        <br/>
                        o) 27/11/2007 tarihli ve 2007/12937 sayılı Bakanlar Kurulu Kararıyla yürürlüğe konulan Binaların
                        Yangından Korunması Hakkında Yönetmelik hükümlerinin kurumunda uygulanmasını takip etmek ve
                        yangın önleme tedbirlerini denetlemek,
                        <br/>
                        p) Belediye içerisinde ikaz ve alarm haberlerinin alınıp verilmesi ve siren sisteminin
                        işletilmesine ilişkin işlemleri yürütmek,
                        <br/>
                        q) Belediyenin sığınaklarla ilgili hizmetlerini düzenlemek ve yürütmek,
                        <br/>
                        r) Afet, sivil savunma, acil durum, kimyasal, biyolojik, radyolojik ve nükleer tehdit ve
                        tehlikeler, koruyucu güvenlik ve ilk yardım konularında Belediye personeli ile Belediyenin
                        denetimine tabi özel kuruluş personeline eğitim vermek,
                        <br/>
                        s) Afet, sivil savunma,acil durum ve seferberlikle ilgili düzenlenen tatbikatlarda Belediye
                        adına sekretarya hizmetlerini yapmak, bu konularla ilgili Belediyece tatbikatlar düzenlenmesini
                        ve yürütülmesini sağlamak,
                        <br/>
                        t) Kurumun denetimine tabi kamu kurum ve kuruluşlarında yürütülen afet, sivil savunma, acil
                        durum, seferberlik ve koruyucu güvenlik hizmetlerini denetlemek,
                        <br/>
                        u) Seferberlik ve savaş hali hazırlıkları ile ilgili iş ve işlemlerini yapmak ve yaptırılmasını
                        sağlamak,
                        <br/>
                        v) Kurumun Afet ve Acil Durum Yönetim Merkezinin sekretarya hizmetini yapmak, İl Afet ve Acil
                        Durum Yönetim Merkezi ile koordinasyonu sağlamak,
                        <br/>
                        w) Koruyucu güvenlik hizmetlerinin koordinasyonunu sağlamak, kamu kurum ve kuruluşlarının üst
                        amiri adına hizmetin takip ve denetimini yapmak,
                        <br/>
                        x) İlgili mevzuat uyarınca kurumun üst yöneticisi tarafından verilen görevleri yapmak.
                        <br/>
                        y) Kanun, tüzük, yönetmelik, genelge ve emirlere göre afet önleyici/azaltıcı tedbirlerin
                        alınmasını sağlamak ve olumsuzlukları müdürlüğe bildirmek.
                        <br/>
                        z) İlçe sakinlerinden gelen istek, öneriler ve şikâyetler ile ilgili olarak gerekli faaliyetleri
                        başlatmak, problemin ortadan kaldırılmasını sağlayıcı faaliyetleri takip etmek, geri bildirimde
                        bulunmak.
                        <br/>
                        aa) Müdürlüğün ihtiyacı olan mal, malzeme ve hizmet ihtiyaçlarının belirlenerek gerekli talebi
                        yapmak, ihale dosyalarını hazırlamak, teklif, keşif ve şartnamelerini tanzim etmek, gerekli
                        onaylarını alarak sonuçlandırmak, malzemelerin depolanması ve gerektiğinde kullanılmasını
                        sağlamak.
                        <br/>
                        bb) Tahakkuk müzekkereleri ve ödeme emirlerini hazırlamak.
                        <br/>
                        cc) Müdürlüğün Stratejik Plan, Performans Programı ve bütçesi ile aylık ve yıllık faaliyet
                        raporlarının işlemlerini yapmak, ilgili birimlere göndermek
                        <br/>
                        dd) Müdürlük faaliyetleri ile ilgili aylık faaliyet raporunun hazırlanmasını sağlamak,
                        istatistikleri oluşturmak.
                        <br/>
                        ee) Görevle ilgili her türlü iç/dış yazışmaları yapmak, Müdüre, Başkana, Encümene, Meclise
                        teklifler sunmak, verilen kararları uygulamak.
                        <br/>
                        ff) Müdürlük bünyesindeki diğer belediye hizmetlerine katılmak.
                        <br/>
                        gg) Müdürlük bünyesinde bulunan kamuya ait zimmetlerin takibinin yapılması ve ilgili kanun ve
                        yönetmelikler kapsamında gerekli faaliyetlerin Müdürün bilgisi dâhilinde yürütülmesi sağlamak.
                        <br/>
                        hh) Müdürlük bünyesinde bulunan tüm personelin mesai takibinin yapılması ilgili yoklamaların ve
                        çizelgelerin günlük olarak tutulup her gün müdüre onaylatılması ve arz edilmesi.
                        <br/>
                        ii) Müdürlük bünyesinde bulunan tüm araçların görev kağıtlarını takip etmek ilçe veya il dışına
                        gidecek araçlar için sıralı amirlerin talimatları doğrultusunda gerekli izinler ile beraber
                        araçların görev kağıtlarını tanzim ve takip etmek.
                        <br/>
                        jj) Kaymakamlık koordinasyonunda ilçede bulunan tüm operasyon planlarının takibi ve güncelliğini
                        kontrol etmek ve gerekli müdürlüklere kamu kurum ve kuruluşlarına yazı ile bildirimini sağlamak.
                        <br/>
                        kk) Müdürlük bünyesinde bulunan her türlü bina, depo, araç gereç, malzeme vs demirbaşların
                        sürekli olarak bakımlı çalışır halde bulundurulmasını sağlamak.
                        <br/>
                        ll) Müdürlük bünyesinde çalışan tüm personelin özlük haklarının takibini ve bahse konu hakların
                        takibini ve işlerliğini yürütmek.
                        <br/>
                        mm) Üstlerinden aldığı emirleri kanun, tüzük, yönetmelik, kararname, genelge ve tebliğler
                        çerçevesinde yerine getirmek.
                        <br/>
                        nn) Müdürlüğün hedef ve amaçlarını; kurumun hedef ve amaçlarına hizmet edecek biçimde organize
                        etmek.
                        <br/>
                        oo) Müdürlük bünyesinde bulunan atölye aletleri ve işleyişi için gerekli önlemleri iş güvenliği
                        tedbirleri kapsamında almak ve herhangi bir kazaya mahal vermemek.


                        <br/>
                        <br/>
                        Acil Durum Birimi;
                        <br/>
                        a) Bağlı olduğu birimin sevk ve idaresinden, disiplininden, her türlü hal ve hareketinden
                        sorumludur.
                        <br/>
                        b) Birimin kanun tüzük ve yönetmeliklerle belirlenen görevlerle Belediye Başkanlığı ve üst
                        mercilerin vermiş olduğu emirleri, yetkileri dâhilinde icra etmek ve ettirmekten sorumludur.
                        <br/>
                        c) Birimin görevlerini icra etmesi için her türlü tedbirleri alıp planlamasını yaparak Afet
                        İşleri Müdürlüğü'ne sunup icra ettirmek.
                        <br/>
                        d) Görevin en etkin ve zamanında icrası için birimindeki personelin aylık çalışma ve yıllık izin
                        programını hazırlayarak Müdürlük Makamına sunmak.
                        <br/>
                        e) Müdür tarafından verilen tüm görevleri yerine getirmek.
                        <br/>
                        f) İlçe genelinde vatandaş veya resmi kurumların talebi ve belediye başkanının uygun görmesi,
                        savcılık talimatı ile; oluşan kaza, kayıp arama kurtarma vb. olağanüstü durumlarda belediye
                        bünyesindeki ilgili müdürlüklerin imkanları gerektiğinde kullanılarak yardım faaliyetlerinde
                        bulunmak.
                        <br/>
                        g) İlçe genelinde kırsal kesimlerde oluşabilecek hayvan kurtarma, tarımsal arazilerde yaşanan
                        afet ve acil durumlarda vatandaşa gerekli güvenlik önlemleri alınarak yardım faaliyetlerinde
                        bulunmak.
                        <br/>
                        h) İlçede oluşan aşırı yağmur yağışı, kar yağışı, fırtına vb. acil durum ve afetlerde personel
                        ve malzemeleriyle birlikte 24 saat görev esasına uygun şekilde durum normalleşinceye kadar
                        belediyedeki müdürlükler ile koordineli olarak ilçe sınırlarında afet ve acil durum bitene kadar
                        ilgili alet, malzeme ve personel ile vatandaşlara yardım faaliyetlerinde (kurtarma, tahliye,
                        insani yardım vb.) bulunmak.
                        <br/>
                        i) Kötü hava koşullarında ilçe sınırları içerisinde mahsur kalan vatandaşlara kurtarma, tahliye,
                        beslenme vb. gibi konularda yardım faaliyetlerinde bulunmak.
                        <br/>
                        j) Savaşta, afetlerde, büyük yangınlarda ve önemli kazalarda; arama, kurtarma, ilkyardım ve
                        sosyal yardım hizmetlerini imkanları ölçüsünde sağlamak.
                        <br/>
                        k) Profesyonel arama ve kurtarma ekipleri ve diğer gönüllü ekiplerle koordine sağlayıp
                        yetkililerce verilecek görevleri yapmak.
                        <br/>
                        l) İstek yapılması ve/veya görev verilmesi durumunda yurt içinde ve yurt dışında meydana gelecek
                        afetlerde arama, kurtarma ve yardım faaliyetlerine katılmak.
                        <br/>
                        m) Arama Kurtarma ve diğer gerekli hallerde Belediye bünyesinde ya da talep eden fabrika, okul,
                        STK, Kamu Kurum ve Kuruluşları vb. kurumlara bahse konu tatbikatları gerçekleştirmek, bununla
                        ilgili bilgi belge ve dosyaları tanzim ve takip etmek.
                        <br/>
                        n) AFAD tarafından talep edilen tatbikatlara başkanlık makamının uygun görmesi halinde müdürlük
                        bünyesinde bulunan müdürün uygun göreceği personeller ile katılım sağlamak.
                        <br/>
                        o) Arama kurtarma faaliyetleri için AFAD tarafından gerekli kılınan akreditasyon iş ve
                        işlemlerini bitimine en az 6 ay kala takip etmek ve söz konusu eğitim ve sınavlardan başarı elde
                        edip verilen görevleri yerine getirmek.
                        <br/>
                        p) İlçemizdeki tüm ilçe halkına, kamu kurumlarına ve personeline, tüm okul öğrenci ve
                        öğretmenlerine (sınıf bazında), muhtarlıklar ile koordinasyon sağlayarak mahalle bazında ilçe
                        halkımıza afet farkındalık ve afetle mücadele eğitimleri vermek ve tatbikat yaptırmak.
                        <br/>
                        q) Belediye mücavir alanda ya da ulusal veya uluslararası alanlarda ilgili kamu kurum ve
                        kuruluşlarının görevlendirmesi Belediye Başkanın uygun görmesi durumunda vatandaşlara ve görevli
                        yerdeki personellere AFAD akreditasyonu kapsamında eğitim faaliyetlerini vermek ve bu konu
                        hakkında Gebze’yi en iyi şekilde temsil faaliyetlerinde bulunmak.
                        <br/>
                        r) AFAD ile yapılan ortak eğitim çalışmaları kapsamında, ilçemizdeki AFAD gönüllülerinin eğitim
                        seviyelerinde iyileştirme sağlamak bu konu hakkında İlçe sakinlerini teşvik faaliyetlerinde
                        bulunmak eğitim seviyelerini yükselterek İlçede afet kültürü oluşturma faaliyetlerinde bulunmak.
                        <br/>
                        s) AFAD gönüllü koordinatörlerinin Kaymakamlık makamından gerekli olurlar alınması akabinde asıl
                        ve yedek olarak AFAD gönüllü koordinatörlerini belirlemek ve konu ili ilgili AFAD ile ortak
                        çalışmalar yürüterek ilçedeki farkındalığı ve gönüllü sayısı arttırmak.
                        <br/>
                        t) Afet işleri müdürlüğünde çalışan personellerin AFAD tarafından kentsel arama kurtarma,
                        yüksekten ve derinden arama kurtarma, hafif arama kurtarma vs. gibi eğitimleri alarak bu konuda
                        ehil personeli bünyesinde barındırmak ve eğitim seviyesini yüksekte tutmak gerektiğinde
                        verilebilecek tüm görevleri eğitimli personeller ile icra etmek.
                        <br/>
                        u) Belediye personellerinden istekli olanların Akreditasyon eğitim sürecine dahil edilmesi ve
                        ilgili müdürlüklerin eğitim alan personellerine gerekli kolaylığın sağlanması, oluşabilecek afet
                        ve acil durumlarda akreditasyon sürecine dahil olmuş başarılı personellerin müdürlükten izin
                        almaksızın belediye başkanının oluruyla görevlendirilmesi ve söz konusu personellerin
                        eğitimlerinin afet işleri müdürlüğü eğitmenleri tarafından sürekli olarak taze tutulması.
                        <br/>
                        v) AFAD tarafından gönüllü organizasyonları için her türlü çalışmaları yürütmek.
                        <br/>
                        w) Müdürlükte bulunan tüm personelin gerektiğinde ulusal ve uluslararası olarak ilçemizi temsil
                        edecek seviyede eğitim yapmak veya eğitimlere katılmak.

                        <br/>

                        Madde 11 - Birim Personelinin Görev, Yetki ve Sorumlulukları
                        <br/>
                        a) Kanun, tüzük, yönetmelik, genelge ve emirlere göre afet önleyici/azaltıcı tedbirlerin
                        alınmasını sağlamak. Olumsuzlukları müdürlüğe bildirmek.
                        <br/>
                        b) Afet önleyici/azaltıcı teşvik edecek çalışmalarda bulunmak, afet anında arama kurtarma, afet
                        sonrasında ise iyileştirme çalışmalarına katılmak, personelin ve halkın eğitimlerini planlamak,
                        eğitimlerde görev almak.
                        <br/>
                        c) Afet önleyici/azaltıcı altyapıyı geliştirip yaygınlaştırmak.
                        <br/>
                        d) İlçe sakinlerinden gelen istek, öneriler ve şikâyetler ile ilgili olarak gerekli faaliyetleri
                        başlatmak, problemin ortadan kaldırılmasını sağlayıcı faaliyetleri takip etmek, geri bildirimde
                        bulunmak.
                        <br/>
                        e) Müdürlüğün ihtiyacı olan mal, malzeme ve hizmet ihtiyaçlarının belirlenerek gerekli talebi
                        yapmak, ihale dosyalarını hazırlamak, teklif, keşif ve şartnamelerini tanzim etmek, gerekli
                        onaylarını alarak sonuçlandırmak, malzemelerin depolanması ve gerektiğinde kullanılmasını
                        sağlamak.
                        <br/>
                        f) Tahakkuk müzekkereleri ve ödeme emirlerini hazırlamak.
                        <br/>
                        g) Müdürlüğün Stratejik Plan, Performans Programı ve bütçesi ile aylık ve yıllık faaliyet
                        raporlarının işlemlerini yapmak, ilgili birimlere göndermek.
                        <br/>
                        h) Müdürlük faaliyetleri ile ilgili aylık faaliyet raporunun hazırlanmasını sağlamak,
                        istatistikleri oluşturmak.
                        <br/>
                        i) Görevle ilgili her türlü iç/dış yazışmaları yapmak, Müdüre, Başkana, Encümene, Meclise
                        teklifler sunmak, verilen kararları uygulamak.
                        <br/>
                        j) Müdürlük bünyesindeki diğer belediye hizmetlerine katılmak.


                        <br/>

                        <br/>

                        ÜÇÜNCÜ BÖLÜM

                        <br/>
                        <br/>
                        Madde 12 - İşbirliği ve Koordinasyon
                        <br/>
                        a. Müdürlük içi işbirliği ve koordinasyon aşağıdaki gibi sağlanır.
                        <br/>
                        1) Müdürlük dâhilinde çalışanlar arasındaki işbirliği ve koordinasyon, müdür tarafından
                        sağlanır.
                        <br/>
                        2) Müdürlüğe gelen tüm evraklar toplanıp konularına göre dosyalandıktan sonra müdüre iletilir.
                        <br/>
                        3) Müdür, evrakları gereği için ilgili personele tevzi eder.
                        <br/>
                        4) Bu Yönetmelikte adı geçen görevlilerin ölüm hariç herhangi bir nedenle görevlerinden
                        ayrılmaları durumunda görevleri gereği yanlarında bulunan her türlü dosya, yazı ve belgeler ile
                        zimmeti altında bulunan eşyaları bir çizelgeye bağlı olarak yeni görevliye devir teslimini
                        yapmaları zorunludur. Devir- teslim yapılmadan görevden ayrılma işlemleri yapılmaz.
                        <br/>
                        5) Çalışanın ölümü halinde, kendisine verilen yazı, belge ve diğer eşyalar birim amirinin
                        hazırlayacağı bir tutanakla yeni görevliye teslim edilir.


                        <br/>
                        b. Müdürlükler arasında işbirliği ve koordinasyon aşağıdaki gibi sağlanır.
                        <br/>
                        1) Müdürlükler arası yazışmalar Müdür’ün imzası ile yürütülür.
                        <br/>
                        c. Diğer kurum ve kuruluşlarla koordinasyon aşağıdaki gibi sağlanır.
                        <br/>
                        1) Müdürlüğün, Belediye dışı özel ve tüzel kişiler, Valilik, Büyükşehir Belediyesi, Kamu Kurum
                        ve Kuruluşları ve diğer şahıslarla ilgili gerekli görülen yazışmalar; Müdür ve Başkan
                        Yardımcısının parafı Belediye Başkanının veya yetki verdiği Başkan Yardımcısının imzası ile
                        yürütülür.
                        <br/>
                        2) Müdürlüğe havale edilen her türlü evrak ve dilekçe kayda geçirilip, müdür tarafından ilgili
                        birime havale edilir.
                        <br/>
                        3) Havale edilmiş evrakı veya dilekçeyi alan personel, bu evrak veya dilekçeye mevzuata uygun
                        olarak işlem yapar. Eğer evrakta bir eksiklik veya yanlışlık varsa müdürün bilgisi dâhilinde
                        ilgililere bu yanlış düzelttirilir veya eksiklik tamamlattırılır. Tamamlanamayacak veya
                        düzeltilemeyecek bir yanlışlık veya eksiklik söz konusu olduğunda işlem yapılmaz.
                        <br/>
                        4) Birimler arasında yazışma, dosyalama, arşivleme gibi konularda standartlaşmaya gidilmesi için
                        zaman zaman iş akış şemaları ve ölçümlemeler kontrol edilir.
                        <br/>
                        5) İmza karşılığı alınan veya elektronik ortamda evrak kayıt sistemi üzerinden müdürlüğe
                        aktarılan evrak veya dilekçe, evrak kayıt sistemine kaydı yapıldıktan ve numara verildikten
                        sonra tasnif edilerek havalesi için müdüre sunulur. Müdür tarafından ilgilisine havalesi
                        yapılır. İlgilisi tarafından, teslim alınan evraka yasal süresi içinde gereği yapılır.
                        <br/>
                        6) Tüm işlemleri ve imzaları tamamlanan evrak, evrak kayıt sistemi üzerinden numara verildikten
                        sonra ilgili yerlere gönderilmek üzere zimmet defterine kaydı yapılarak veya elektronik ortamda
                        ilgilisine/ilgili müdürlüklere teslim edilir.
                        <br/>
                        7) Tüm işlemleri yapılarak ilgilisine gönderilen evrakların müdürlükte kalan sureti konusuna
                        göre dosyasına konur. Arşiv mevzuatına uygun olarak belirli süre birim arşivinde saklandıktan
                        sonra kurum arşivine devredilir.


                        <br/>
                        DÖRDÜNCÜ BÖLÜM
                        <br/>
                        <br/>

                        Madde 13 - Yetki ve Sorumluluk
                        <br/>
                        a) Afet İşleri Müdürü; yürürlükteki Belediye Kanunu ile diğer kanun ve yönetmelikler ile proje,
                        plan, program ve prosedürlerde belirtilen ödevler ve sorumluluklar ile kendisine yukarıda
                        verilen görevlerin mevzuata uygun olarak yapılmasından yetkili, Belediye Başkan Yardımcısı ve
                        Başkan’a karşı sorumludur.
                        <br/>
                        b) Afet İşleri Müdürlüğü’ne bağlı birim sorumluları, kendisine verilen görevlerin mevzuata uygun
                        olarak yapılmasından yetkili ve müdüre karşı sorumludur.
                        <br/>
                        c) Afet İşleri Müdürlüğü’ne bağlı birim personeli; Müdürlüğe ait işlerin yerine getirilmesinde
                        kendilerine verilen görevleri gereği gibi ve süresi içinde yerine getirmekle yükümlü, ilgili
                        birim sorumlusu ve müdüre karşı sorumludur.
                        <br/>

                        <br/>v
                        BEŞİNCİ BÖLÜM

                        <br/>
                        <br/>
                        Madde 14 - Yürürlükten Kaldırılan Yönetmelik
                        <br/>
                        4/2/2020 Tarihli ve 35 No’lu Karar ile Gebze Belediyesi Meclisi tarafından onaylanan Gebze
                        (GE-AK) Arama ve Kurtarma Ekibi Kuruluşu, Görev, Çalışma Usul ve Esaslarına Dair Yönetmeliği
                        yürürlükten kaldırılmıştır.

                        <br/>

                        Madde 15 - Hüküm Bulunmayan Haller
                        <br/>
                        Bu Yönetmelikte hüküm bulunmayan hallerde yürürlükteki mevzuat hükümleri ile Başkanlık emir ve
                        talimatları uygulanır.

                        <br/>

                        Madde 15 - Yürürlük
                        <br/>
                        Bu yönetmelik Gebze Belediye Meclisi’nin kabulü ile yürürlüğe girer.

                        <br/>
                        <br/>
                        Madde 16 - Yürütme
                        <br/>
                        Bu yönetmelik hükümleri Gebze Belediye Başkanı adına Afet İşleri Müdürü tarafından yürütülür.

                    </p>
                </section>


                <section id="bolum2" className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
                    <h3 className="text-lg font-bold text-center"></h3>
                    <p className="text-gray-700 text-left"> 2019 yılında Gebze Belediyesi Arama Kurtarma Ekibi’nin (GE-AK) kuruluş sürecini yönetti. 2020’de resmiyet kazanan ekip, 2022 yılında AFAD akreditasyonuyla "Ulusal Hafif Seviye Kentsel Arama Kurtarma Ekibi" statüsüne ulaştı.
                        <br />
                            <br />
                                Evli ve iki çocuk babası olan Soner Bilir, Haziran 2024’ten itibaren Gebze Belediyesi Afet İşleri Müdür Vekili olarak görev yapmaktadır. </p>
                </section>
            </div>
        </div>
    );
};

export default Sonerbılır;
