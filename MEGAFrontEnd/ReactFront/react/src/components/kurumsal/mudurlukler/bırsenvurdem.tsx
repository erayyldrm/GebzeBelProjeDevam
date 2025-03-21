import React from "react";

const Bırsenvurdem: React.FC = () => {
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
                        src="/images/kurumsal/mudurlukler/avatar-2.jpg"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">Basın Yayın ve Halkla İşleri Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" /> Birsen VURDEM
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" /> basin@gebze.bel.tr
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
                        Amaç, Kapsam, Dayanak, Bağlılık,Tanımlar ve Temel İlkeler
                        <br/>
                        AMAÇ:
                        <br/>

                        MADDE 1- Bu yönetmeliğin amacı, 5393 Sayılı Belediye Kanununun 48'inci maddesi ve ISO 9001-2015
                        kapsamında 03.07.2019 tarih ve 2019/121 sayılı Meclis Kararı ile kurulan; Halkla İlişkiler

                        Servisi, Sosyal Medya ve İletişim Servisi ve Basın Yayın Servislerinden oluşan Basın Yayın ve
                        Halkla İlişkiler Müdürlüğünün Görev, Çalışma Usul ve Esaslarını düzenlemektir.
                        <br/>
                        KAPSAM:

                        MADDE 2- Bu yönetmelik, Basın Yayın ve Halkla İlişkiler Müdürlüğündeki personelin görev, yetki
                        ve sorumlulukları ile çalışma usul ve esaslarını kapsar.
                        <br/>
                        DAYANAK:
                        MADDE 3- (1) Bu yönetmeliğin hazırlanmasında;
                        <br/>
                        a) 657 Sayılı Devlet Memuru Kanunu
                        b) 4734 Sayılı Kamu İhale Kanunu
                        c) 4982 Sayılı Bilgi Edinme Hakkı Kanunu
                        ç) 5018 Sayılı Kamu Mali Yönetimi ve Kontrol Kanunu
                        d) 5216 Sayılı Büyükşehir Belediye Kanunu
                        e) 5393 Sayılı Belediye Kanunu
                        f) ISO 9001 Kalite Yönetimi Kalite El Kitabı
                        <br/>
                        BAĞLILIK
                        MADDE 4- Müdürlüğü , Basın Yayın ve Halkla İlişkiler Müdürlüğü Belediye Başkanına veya Başkan
                        Yardımcısına bağlıdır. Başkan bu görevi bizzat veya görevlendireceği kişi eliyle yürütür.
                        <br/>
                        TANIMLAR
                        MADDE 5- (1) Bu yönetmeliğin uygulanmasında;
                        <br/>
                        a) Başkanlık : Gebze Belediye Başkanlığı,
                        b) Belediye : Gebze Belediyesi,
                        c) CİMER : Cumhurbaşkanı İletişim Merkezi,
                        ç) SMS : Kısa Mesajı,
                        d) STK : Sivil Toplum Kuruluşu,
                        e) ENSEMBLE SİSTEM: Süreç, Strateji ve Performans Yönetimi Sistemi,
                        f) K.B.B. : Kocaeli Büyükşehir Belediyesi,
                        g) Müdürlük : Basın Yayın ve Halkla İlişkiler Müdürlüğü,
                        ğ) SYT-KYS : Strateji Yönetim Temsilciliği ve Kalite Yönetim Sistemi Temsilciliğini,
                        anlamlarında kullanılmıştır.
                        <br/>
                        TEMEL İLKELER:
                        MADDE 6-Gebze Belediye Başkanlığı Basın Yayın ve Halkla İlişkiler Müdürlüğü tüm çalışmalarında;
                        a) Karar alma, uygulama ve eylemlerinde şeffaflık,
                        b) Hizmetlerin temin ve sunumunda yerindelik ve ihtiyaca uygunluk,
                        c) Hesap verebilirlik,
                        d) Kurum içi yönetimde ve ilçeyi ilgilendiren kararlarda katılımcılık,
                        e) Uygulamalarda kanunlara uygun iş yapmak,
                        f) Belediye kaynaklarının kullanımında etkinlik ve verimlilik,
                        g) Hizmetlerde geçici çözümler ve anlık kararlar yerine sürdürülebilir temel ilkeleri esas alır.
                        <br/>
                        Halkla İlişkiler Servisi:
                        1) İlçenin sorunları ile ilgilenip halkla belediye arasında iletişim sağlamak.
                        2) Telefon veya internet yoluyla gelen istek talep ve şikâyetlerin incelenerek ilgili
                        müdürlüklere havalesini yapmak.
                        3) Cumhurbaşkanlığı İletişim Merkezinden (CİMER) gelen talep ve şikâyetleri ilgili müdürlüklere
                        yönlendirerek yasal süresi içerisinde cevaplarının talep/şikâyette bulunan vatandaşa dönmesini
                        sağlamak.
                        4) Vatandaşların talep ve şikâyetleri konusunda gerektiğinde K.B.B. ile koordinasyon kurmak.
                        5) Başvuruların kanuni süre içerisinde çözümü için ilgili müdürlüklerle görüşmeler yapmak.
                        6) KBB 153, Whatsapp, Açık Kapı, Muhtarlık Bilgi Sistemi ve tüm dijital ortamda gelen talep ve
                        şikâyetleri ilgili müdürlüklere göndermek.
                        7) Yapılacak etkinlik, kutlama vb. davetiyeleri bastırmak ve etiketlenerek dağıtımını sağlamak.
                        8) Belediye Başkanı adına tüm tebrik, davetiye, telgraf ve kutlama mesajlarını Belediye
                        Başkanının isteği doğrultusunda yazmak ve ilgili yerlere göndermek.
                        9) Resmi kurumlardan gelen ilan taleplerini yerine getirmek ve yazışmalarını yapmak.
                        10) Müdürlüğümüz ile ilgili gelen şikâyetlere kanuni süre içerisinde posta veya elektronik posta
                        yoluyla cevap vermek.
                        11) 4982 Sayılı Bilgi Edinme Hakkı Kanunu gereği vatandaşı yönlendirme, bilgilendirme ve çözüm
                        üretme noktasında, kanun çerçevesinde yasal süre içerisinde olumlu ya da olumsuz cevap verilmesi
                        kaydı ile tüm müdürlüklerle koordineli bir çalışma yürütmek.
                        12) Belediyemiz organizasyon ve duyurularının SMS (kısa mesaj) yolu ile halka duyurulmasını
                        sağlamak.
                        13) Hizmetler ile ilgili halk toplantısı veya kurumlarla toplantılar düzenlemek.
                        14) Müdürlük hizmetleri ile ilgili ihaleleri hazırlamak ve sonuçlandırmak.
                        15) Müdürlüğün sorumluluğunda olan organizasyon, program, şölen vb. işleri düzenlemek.
                        16) Halkla ilişkiler faaliyetlerine bulunduğu konum itibariyle elinden gelen desteği vermek.
                        17) Halkla ilişkiler alanı ile ilgili yerel ve ulusal düzeydeki uygulamaları takip etmek.
                        18) Kalite Yönetim sistemi çalışmalarını yürütmek.
                        19) Müdürlüğün Stratejik plan çalışmalarını yapmak aylık verilerin Ensemble Sistemine girişini
                        yapmak.
                        20) Müdürlüğün aylık ve yıllık faaliyet raporlarının hazırlanmasını sağlamak, gelişimi ve
                        hedefleri kontrol ederek üstlerine bu konular hakkında bilgi vermek.
                        <br/>
                        Basın Yayın Servisi:
                        1) Belediye Başkanı ve belediye ile ilgili yazılı ve görsel basında çıkan haber ve yazıların
                        günlük takibini yapmak, başkanlığı ve ilgili birimleri bilgilendirmek ve arşivlemek.
                        2) Başkanlık ve belediye faaliyetlerini takip etmek, fotoğraf ve kamera çekimlerini yapmak ve
                        arşivlemek.
                        3) Belediyemiz tarafından gerçekleştirilen faaliyetleri basın bülteni hazırlayarak fotoğraf ve
                        görüntü desteğiyle basın kuruluşlarına ulaştırmak, kamuoyuna duyurulmasını sağlamak.
                        4) Aylık, yıllık veya başkanlığın uygun gördüğü zamanlarda basın toplantıları organize etmek,
                        basın mensuplarının katılımını sağlamak.
                        5) Basın mensuplarının Belediye Başkanı ile söyleşi veya bilgi edinme amaçlı görüşme taleplerine
                        yardımcı olmak.
                        6) Belediye Başkanının Radyo-TV programlarına katılımı ile ilgili bilgi ve döküman hazırlıkları
                        yapmak.
                        7) Belediye ile ilgili basında yer alan gerçeklere aykırı haber ve yazılara cevap ve düzeltme
                        metni hazırlamak, gerektiğinde ilgili basın kuruluşuna Hukuk İşleri Müdürlüğü ile birlikte
                        tekzip göndermek.
                        8) 8) Başkanlığın talebi üzerine bazı özel gün ve haftalarda, tören ve açılış konuşmalarıyla
                        ilgili açıklama ve mesajlara esas olmak üzere metin yazısı hazırlamak.
                        9) Resmi ve dini bayramlarla özel gün ve haftalarda ilan metinleri hazırlamak, basın
                        kuruluşlarında yayınlanması için gereğini yapmak.
                        10) Başkanlık tarafından verilecek brifinglerde, seminer ve toplantılarda katılımcılara ve
                        kamuoyuna sağlıklı bilgiler sunulması için görsel ve metinsel dokümanları hazırlamak.
                        11) Belediye faaliyetlerini ve hizmetlerini tanıtıcı Belediye Bülteni hazırlamak.
                        12) Gebze de kent kültürünü ve kentlilik bilincini geliştirmek, ilçenin tarihi, kültürel ve
                        doğal değerlerini tanıtmak, belediyenin kente yönelik vizyoner proje ve yatırımlarını yerel ve
                        ulusal kamuoyuna duyurmak amacıyla dergi veya broşür hazırlamak, bastırmak ve dağıtmak.
                        13) Gebze’nin iç ve dış turizm potansiyelinden yararlanmasını sağlamak ve ilçeyi tanıtmak
                        amacıyla, sanatsal fotoğraf ve kamera çekimleri, tanıtım filmleri ve CD’leri hazırlamak.
                        14) Yerel ve ulusal basın mensuplarına belediye ve kent ile ilgili fotoğraf ve görüntü
                        desteğinde bulunmak.
                        15) Belediye faaliyetlerinin halka duyurulması için bilbord, raket, afiş (CLP) , pankart,
                        broşür, katalog, vb. dokümanların tasarım ve metin hazırlıklarını yaptırmak. Basın mensuplarına
                        belediye ve kenti ilgilendiren haberlerle ilgili gerekli doküman yardımında bulunmak, bağlı
                        bulunduğu medya kuruluşuyla iletişimini sağlama konusunda yardımcı olmak.
                        16) Belediye Meclis toplantıları ile gerekli görüldüğünde Büyükşehir Belediye Toplantılarını
                        izlemek, fotoğraf ve kamera çekimlerini yapmak.
                        17) Belediye internet sitesindeki haberleri güncellemek.
                        18) Vatandaşların sivil toplum kuruluşları ile kamu kuruluşlarının uygun görülen fotoğraf,
                        görüntü ve doküman taleplerini karşılamak.
                        <br/>
                        Sosyal Medya ve İletişim Servisi: (Çağrı Merkezi – Tasarım Ofisi)
                        1) Kurum ile ilgili duyuru, etkinlikler ve tanıtımı için afiş, bilboard, pankart, broşür,katalog
                        vs. tasarımını gerçekleştirip, baskı yaptırıp, astırılmasını sağlamak
                        2) Kurumun her türlü görsel ve işitsel iletişim alanlarının kontrolünü sağlamak,
                        3) Yapılan organizasyonları yazılı, görsel ve işitsel medya ile internet üzerinden tanıtımının,
                        reklamının yapılması ile vatandaşlara duyurmak.
                        4) Çağrı Merkezi kurulumu ve uygulamaları ile ilgili çalışmaları yapmak,
                        5) 7 gün 24 saat esasıyla Çağrı Merkezi vasıtasıyla vatandaşların talep, şikâyet ve önerilerini
                        sistem üzerinden kayıt altına almak,
                        <br/>
                        İKİNCİ BÖLÜM
                        KURULUŞ, PERSONEL, GÖREV, YETKİ VE SORUMLULUKLAR
                        TEŞKİLAT
                        <br/>
                        MADDE 7- Basın Yayın ve Halkla İlişkiler Müdürlüğü idari Teşkilatı: Müdür, Memur, Amir, İşçi
                        personel oluşur.
                        <br/>
                        KURULUŞ
                        <br/>
                        MADDE 8 - Gebze Belediye Başkanlığı Basın Yayın ve Halkla İlişkiler Müdürlüğü, 22/02/2007
                        tarihli ve 26442 Sayılı Resmi Gazete ’de Yayımlanan Bakanlar Kurulu ‘nun “ Belediye ve Bağlı
                        kuruluşları ile Mahalli İdare Birlikleri Norm Kadro ilke ve Standartlarına İlişkin Esaslar
                        hakkında 2006 / 9809 sayılı kararı gereğince, Gebze Belediye Meclisinin 03.07.2019 tarih ve
                        2019/121 Sayılı Kararı ile müdürlükler birleştirilmiş Basın Yayın ve Halkla İlişkiler Müdürlüğü
                        olmuştur.
                        <br/>
                        ÜÇÜNCÜ BÖLÜM
                        Personelin Görev Yetki ve Sorumlulukları
                        <br/>
                        <br/>
                        MÜDÜRÜN GÖREVLERİ
                        MADDE 9 - Müdürün görevleri aşağıda sıralanmıştır.
                        <br/>
                        a) Müdürlüğü temsil eder.
                        b) Müdürlüğün yönetiminde tam yetkili ve sorumlu kişidir.
                        c) Çalışmaları yazılı ve sözlü emirlerle yürütür.
                        d) Müdürlüğün sevk, idare ve disiplininden sorumludur.
                        e) Personel arasında görev dağılımı yapar.
                        f) Müdürlükte çalışan personelin birinci sicil amiri olup, memur, işçi, başarı ve performans
                        değerlendirmesini yapar.
                        g) Müdürlüğün çalışma usul ve esaslarını mer’i mevzuat çerçevesinde belirler.
                        h) Basın Yayın ve Halkla İlişkiler Müdürlüğü ile diğer müdürlükler arası koordinasyonu sağlar.
                        i) Müdürlük bünyesinde çalışanların iş, işlemlerin zamanında ve doğru olarak yerine
                        getirilmesini sağlar ve kontrol eder. Ayrıca sorumlu olduğu personellerin özlük işlemlerinin
                        mevzuat çerçevesinde yürütülmesini sağlar.
                        j) Üstlerinden aldığı emir ve görevleri yerine getirir.
                        k) İlçe içerisinde zaman zaman STK ile işbirliği ve iletişim halinde olmak.
                        l) Ulusal ve Yerel haber ajansları, gazeteler, dergiler, internet siteleri, televizyonlarla
                        iletişimi sağlamak.
                        m) Dergi, bülten ve bilgilendirici basılı materyallerin hazırlanması sürecini sevk ve idare
                        etmek.
                        n) Geçici süre görevde bulunamayacağı dönemlerde, müdürlüğe tayin şartlarına haiz olan
                        personelden birini müdürlüğe vekâlet etmek üzere belirleme ve makamın onayına sunma yetkisi,
                        <br/>
                        o) Stratejik planlamaya uygun bütçenin hazırlanmasını ve onaylanan bütçenin en ekonomik şekilde
                        kullanılmasını; müdürlüğe verilen hedefleri gerçekleştirilmesini sağlar.
                        <br/>
                        MADDE 10- (1) Müdür Görev ve Sorumlulukları,
                        <br/>
                        a) İlçemizdeki vatandaşların belediyemize bildirdiği şikâyet istek ve önerilerin; birimlere
                        düzenli olarak aktarımının yapılmasını takip etmek, birimlerin süreleri zarfında geri dönüş
                        yapmalarını takip etmek.
                        b) Birime verilen cevapların vatandaşa dönüşünü, en etkin en hızlı ve güler yüzlü yapılmasını
                        sağlamak.
                        c) Belediyemiz adına Büyükşehir ve diğer kurumlarla aylık düzenlenen toplantılara iştirak etmek,
                        d) Halkla ilişkilerde elde edilen sonuçları değerlendirmek ve bu alandaki faaliyetlerin
                        etkinliğini artıracak önlemleri belirlemek üzere araştırmalar yapmak,
                        e) Halkın yönetimden bilgi edinme hakkını göz önüne alarak, yürütülen faaliyet ve işlerle ilgili
                        olarak halkın bilgilendirilmesine ortam hazırlamak,
                        f) Üstlerinden aldığı emir ve görevleri yerine getirmek,
                        (2) Organizasyondaki Yeri,
                        <br/>
                        a) Direkt olarak Başkan Yardımcısına bağlı olarak çalışmak,
                        b) Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        Başkan Yardımcısına karşı sorumlu olmak.
                        c) SGS-KYS Temsilcisi, Büro Memuru ile alt kadroları kendisine bağlı bulunan kadrolardır.
                        <br/>
                        (3) Bu Kadro İçin Aranan Özellikler,
                        a) En az lisans mezunu olmak,
                        b) Bilgisayar bilgisi yeterli olmak,
                        c) Yöneticilik bilgi ve tecrübesine sahip olmak,
                        ç) Belediye mevzuatına hâkim olmak,
                        <br/>
                        MADDE 11- (1) Halkla İlişkiler Büro Amiri Görev ve Sorumlulukları,
                        <br/>
                        a) Halkla İlişkiler Bürosunun sevk ve idaresinden sorumlu olmak.
                        b) Servisinde çalışan personelin organizasyonundan sorumlu olmak.
                        c) Halkla İlişkiler ile ilişkilerin kurulmasında görev almakla sorumlu olmak.
                        d) Yapılacak işlerin kontrol ve denetimini yapmakla sorumlu olmak.
                        e) Üstlerinden aldığı emir ve görevleri yerine getirmekle sorumlu olmak.
                        <br/>
                        (2) Organizasyondaki Yeri,
                        <br/>
                        a) Direkt olarak Müdür’e bağlı olarak çalışmak.
                        b) Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        Müdür’e karşı sorumlu olmak.
                        c) Büro Memuru Görevlisi, Strateji Geliştirme ve Kalite Yönetim Temsilcisi kendisine bağlı
                        bulunan kadrolardır.
                        <br/>
                        (3) Bu Kadro İçin Aranan Özellikler,
                        a) En az lisans mezunu olmak.
                        b) Belediye mevzuatına hâkim olmak.
                        c) Bilgisayar bilgisi yeterli olmak.
                        d) Toplam kalite anlayışına sahip olmak.
                        <br/>
                        MADDE 12- (1) Basın Yayın Büro Amiri Görev ve Sorumlulukları,
                        <br/>
                        a) Basın Yayın Bürosunun sevk ve idaresinden sorumlu olmak.
                        b) Servisinde çalışan personelin organizasyonundan sorumlu olmak.
                        c) Basın ile ilişkilerin kurulmasında görev almakla sorumlu olmak.
                        d) Yayını yapılacak işlerin kontrol ve denetimini yapmakla sorumlu olmak.
                        e) Üstlerinden aldığı emir ve görevleri yerine getirmekle sorumlu olmak.
                        <br/>
                        (2) Organizasyondaki Yeri,
                        <br/>
                        a) Direkt olarak Müdür’e bağlı olarak çalışmak.
                        b) Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        Müdür’e karşı sorumlu olmak.
                        c) Basın Yayın Görevlisi ve Kameraman/Fotoğrafçı kendisine bağlı bulunan kadrolardır.
                        <br/>
                        (3) Bu Kadro İçin Aranan Özellikler,
                        <br/>
                        a) En az lisans mezunu olmak.
                        b) Belediye mevzuatına hâkim olmak.
                        c) Bilgisayar bilgisi yeterli olmak.
                        d) Toplam kalite anlayışına sahip olmak.
                        <br/>
                        MADDE 13- (1) Sosyal Medya ve İletişim Büro Amiri Görev ve Sorumlulukları,
                        <br/>
                        a) Sosyal Medya ve İletişim Bürosunun sevk ve idaresinden sorumlu olmak.
                        b) Servisinde çalışan personelin organizasyonundan sorumlu olmak.
                        c) Yapılacak işlerin kontrol ve denetimini yapmakla sorumlu olmak.
                        d) Üstlerinden aldığı emir ve görevleri yerine getirmekle sorumlu olmak.
                        <br/>
                        (2) Organizasyondaki Yeri,
                        <br/>
                        a) Direkt olarak Müdür’e bağlı olarak çalışmak.
                        b) Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        Müdür’e karşı sorumlu olmak.
                        c) Grafik Tasarımcı personeli, sosyal medya uzmanı, sosyal medya metin yazarı ve çağrı merkezi
                        personeli kendisine bağlı bulunan kadrolardır.
                        <br/>
                        <br/>


                        (3) Bu Kadro İçin Aranan Özellikler,
                        <br/>
                        a) En az lisans mezunu olmak.
                        b) Belediye mevzuatına hâkim olmak.
                        c) Bilgisayar bilgisi yeterli olmak.
                        d) Toplam kalite anlayışına sahip olmak.
                        <br/>
                        MADDE 14- (1) Strateji Geliştirme ve Kalite Yönetim Temsilcisi
                        <br/>
                        a) Belediye Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı
                        ve ISO 9001:2015 Kalite Yönetim Sistemi uygulamalarında birim temsilcisi olarak görev yapar ve
                        hazırlama çalışmalarında bulunmak.
                        b) Birimi ile ilgili dönemsel olarak performans ve kalite hedeflerini belirler, izler ve bu
                        hedeflerine uygun faaliyetlerde bulunmak.
                        c) Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve ISO
                        9001:2015 Kalite Yönetim Sistemi ile ilgili birim aylık raporlarını düzenleyerek üst yönetime
                        sunmak.
                        d) Belediye Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı
                        uygulamalarına ve Kalite politikasının benimsenmesine yönelik olarak çalışmalarda bulunur ve
                        gereklerini yerine getirilmesini sağlamak.
                        e) Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve
                        Kalite El Kitabında birimi ile ilgili bölümü hazırlar ve yılda bir kez gözden geçirmek,
                        gerekirse revize etmek.
                        f) İç denetim faaliyeti kapsamında denetçilere birimi ile ilgili konularda bilgi verir ve
                        biriminde Kalite Yönetim Sistemi’nin etkinliği konusunda rapor hazırlar ve Yönetimin Gözden
                        Geçirmesi toplantısına sunmak üzere Kalite Yönetim Koordinatörlüğüne iletmek.
                        g) Sistemde birimi ile ilgili doğabilecek uygunsuzlukların belirlenmesi ve giderilmesi için
                        düzeltici, önleyici faaliyetlerin planlanması ve takibi işlemlerini yapmak.
                        h) Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve
                        Kalite ile ilgili kurum içi ve kurum dışı toplantılara ve eğitimlere katılmak.
                        i) Yönetim tarafından oluşturulmuş olan diğer kurallar çerçevesinde ve Stratejik Plan,
                        Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite Yönetim Sistemi
                        içinde hazırlanmış dokümanlarda belirtilen diğer görevlerini yerine getirmek,
                        <br/>

                        (2) Organizasyondaki Yeri,
                        <br/>

                        a) Direkt olarak Müdüre bağlı olarak çalışmak,
                        b) Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        Müdüre, Strateji Geliştirme ve Kalite Yönetim Koordinatörüne karşı sorumlu olmak.
                        <br/>


                        (3) Bu Kadro İçin Aranan Özellikler,
                        <br/>
                        a) Tercihen üniversite mezunu olmak,
                        b) Bilgisayar bilgisi yeterli olmak,
                        c) Stratejik Plan, Performans Esaslı Bütçeleme mevzuatına hâkim olmak.
                        d) Toplam kalite anlayışına sahip olmak.
                        <br/>
                        MADDE 15- (1) Büro Memuru Görev ve Sorumlulukları;
                        <br/>
                        a) Müdürlüğün iç ve dış yazışmalarını yapmak,
                        b) Servis evraklarının arşivlenmesini yapmak,
                        c) Üstlerinden aldıkları emir ve görevleri yerine getirmekle sorumlu olmak,
                        ç) Telefon, Telgraf APS Posta işlemleri, Protokole telefon ve faks çekmek,
                        d) Bilgisayara bilgi girişi ve takibini yapmak,
                        e) Personel özlük haklarının takibini yapmak
                        f) Ulusal ve Yerel gazete abonelikleri, ilan ve reklamların takibini yapmak,
                        g) Ödeme evraklarının hazırlanmasını sağlamak.
                        ğ) SGS-KYS Temsilcisi, Büro Memuru ile alt kadroları kendisine bağlı bulunan kadrolardır.
                        <br/>
                        (2) Organizasyondaki Yeri,
                        <br/>
                        a) Direkt olarak Müdür’e bağlı olarak çalışmak,
                        b) Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        Müdür’e karşı sorumlu olmak,
                        <br/>
                        (4) Bu Kadro İçin Aranan Özellikler,
                        <br/>
                        a) En az lise veya dengi meslek lisesi mezunu olmak,
                        b) Bilgisayar bilgisi yeterli olmak,
                        c) Belediye mevzuatına hâkim olmak,
                        <br/>
                        MADDE 16- (1) Grafik Tasarımcısı Görev ve Sorumlulukları;
                        a) Belediye bünyesinde yapılan aktivasyonlara afiş, broşür, pankart vs. tasarımları hazırlamak
                        b) Belediyenin faaliyetlerini yakından takip edip gerekli doküman ve konularla tasarımlar
                        hazırlamak.
                        c) Yapılan çalışmaları arşivlemek.
                        ç) Belediyenin tanıtılması için yeni projeler hazırlamak ve müdürün bilgisine sunmak.
                        d) Yapılan tüm çalışmalarda müdüre bilgi vermek
                        e) Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        f) Belediyenin bastırdığı kitap, broşür vb. çalışmalarla ilgili tasarımlar hazırlamak.
                        <br/>
                        (2) Organizasyondaki Yeri,
                        <br/>
                        a) Direkt olarak Müdür’e bağlı olarak çalışmak.
                        b) Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        Müdüre karşı sorumlu olmak.

                        <br/>
                        (3) Bu Kadro İçin Aranan Özellikler,
                        <br/>
                        a) Yüksekokul mezunu tercihen üniversite mezunu olmak.
                        b) Tasarım konusunda tecrübeli olmak.
                        c) Bilgisayar bilgisi yeterli olmak.
                        d) Toplam kalite anlayışına sahip olmak.
                        <br/>
                        MADDE 17 : (1) Muhabir Görev ve Sorumlulukları;
                        <br/>
                        a) Günlük ulusal ve yerel gazetelerdeki belediye ile ilgili haberlerin takibini yapmak ve
                        birimlere yönlendirilmesini sağlamak
                        b) Belediye çalışmalarının kamera ve fotoğraf çekimlerini sağlamak
                        c) Belediye Başkanı’nın temas ve incelemelerini takip etmek
                        d) Yapılan çekimlerin haber için basıma ve yayına hazır hale getirilmesi ve servis edilmesi.
                        e) Yapılan haber bültenlerini arşivlemek
                        f) Belediye tarafından gerçekleştirilen halk gezi, yarışma, tiyatro, sinema gibi haber niteliği
                        taşıyan çalışmaları görüntülemek
                        g) Üstlerinden aldığı emir ve görevleri yerine getirmek
                        <br/>
                        (2) Organizasyondaki Yeri,
                        <br/>

                        a) Direkt olarak Müdür’e bağlı olarak çalışmak.
                        b) Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        Müdüre karşı sorumlu olmak.
                        <br/>
                        (3) Bu Kadro İçin Aranan Özellikler,
                        <br/>
                        a) Tercihen üniversite mezunu olmak.
                        b) Habercilik konusunda tecrübeli olmak.
                        c) Bilgisayar bilgisi yeterli olmak.
                        d) Toplam kalite niteliğine sahip olmak.
                        <br/>
                        MADDE 18 : (1) Kameraman / Fotoğraf Görevlisi, Görev ve Sorumlulukları;
                        <br/>
                        a) Günlük ulusal ve yerel gazetelerdeki belediye ile ilgili haberlerin takibini yapmak ve
                        birimlere yönlendirilmesini sağlamak
                        b) Belediye çalışmalarının kamera ve fotoğraf çekimlerini sağlamak
                        c) Belediye Başkanı’nın temas ve incelemelerini takip etmek
                        d) Yapılan çekimlerin basıma ve yayına hazır hale getirilmesini sağlamak
                        e) Kamera ve fotoğraf çekimlerini arşivlemek
                        f) Belediye tarafından gerçekleştirilen halk gezi, yarışma, tiyatro, sinema gibi haber niteliği
                        taşıyan çalışmaları görüntülemek
                        g) Üstlerinden aldığı emir ve görevleri yerine getirmek
                        <br/>
                        (2) Organizasyondaki Yeri,
                        <br/>

                        a) Direkt olarak Müdür’e bağlı olarak çalışmak.
                        b) Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten
                        Müdüre karşı sorumlu olmak.
                        <br/>
                        (3) Bu Kadro İçin Aranan Özellikler,
                        <br/>
                        a) En az lise mezunu tercihen üniversite mezunu olmak.
                        b) Fotoğrafçılık konusunda tecrübeli olmak.
                        c) Bilgisayar bilgisi yeterli olmak.
                        d) Toplam kalite anlayışına sahip olmak.
                        <br/>
                        DÖRDÜNCÜ BÖLÜM
                        Müdürlüğün Çalışma Düzeni
                        <br/>
                        MADDE 19- (1) Müdürlükte görevli personel;
                        a) Biriminde yürütülen iş ve işlemler hakkındaki bilgileri izinsiz olarak kurum dışına
                        veremezler,
                        b) Hiçbir fark gözetmeden her vatandaşa eşit ve adil muamele yapar,
                        c) Görevleri ile ilgili, doğrudan doğruya veya dolaylı olarak, hiç kimsenin hizmet, ikram ve
                        hediyelerini kabul edemez ve bunlarla alışverişte bulunamazlar. Bu gibi kimselerden borç para
                        alamayacakları gibi borç da veremezler.
                        ç) Meclis, Encümen ve Başkanlık yazıları ve ekli dosyalardaki bilgileri açığa vuramaz ve
                        yetkililer dışında kimseye bilgi veremezler,
                        d) Her türlü malzeme ve evrakın muhafazası ile şahsen sorumlu olan personel, muhtelif sebepler
                        ile görevinden ayrılması halinde, bunları birimindeki görevliye yazılı bir tutanak ile devir
                        ederler.
                        <br/>

                        BİLGİ VERME YASAĞI
                        MADDE 20- (1) Birimlerin evrak ve dosya memurları izinsiz olarak evrak ve işlemin sonucuna ait
                        bilgi veremezler ve açıklamada bulunamazlar. Bilgi alacak kişiler, bilgileri Birim Müdürü veya
                        yetki verilen görevliden alırlar. Bu kurallara aykırı davranan personel hakkında kanuni işlem
                        yapılır.
                        <br/>


                        BEŞİNCİ BÖLÜM
                        Yürürlükten Kaldırılan Yönetmenlik, Yürürlük ve Yürütme
                        <br/>
                        YÜRÜRLÜKTEN KALDIRILAN YÖNETMELİK
                        MADDE 21- (1) Bu yönetmeliğin yürürlüğe girmesiyle birlikte, önce yürürlükte olan Basın ve Yayın
                        Müdürlüğü ve Halkla İlişkiler Müdürlüğü Görev ve Çalışma Yönetmeliği yürürlükten kaldırılmıştır.
                        Basın Yayın ve Halkla İlişkiler Müdürlüğü olarak devam edecektir.
                        YÜRÜRLÜK
                        MADDE 22- (1) Gebze Belediyesi Meclisinin kabulüne ve ilanı ile yürürlüğe girer.
                        YÜRÜTME
                        MADDE 23- İş bu yönetmelik 23 (yirmi üç) maddeden oluşmaktadır. Bu yönetmelik hükümlerini
                        Belediye Başkanı yürütür.
                        <br/>
                    </p>
                </section>
                <section id="bolum2" className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
                    <h3 className="text-lg font-bold text-center"></h3>
                    <p className="text-gray-700 text-left"> </p>
                </section>
            </div>
        </div>
    );
};

export default Bırsenvurdem;
