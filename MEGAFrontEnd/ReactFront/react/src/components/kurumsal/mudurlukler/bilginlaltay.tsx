import React from "react";

const   Bilginalatay: React.FC = () => {
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
                        src="/images/kurumsal/mudurlukler/avatar-15.jpg"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">Mali Hizmetler Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" />  Bilgin ALTAY
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" />  malihizmetler@gebze.bel.tr


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
                        Amaç, Kapsam, Dayanak ve Tanımlar
                        Amaç
                        MADDE 1: Bu yönetmeliğin amacı; Gebze Belediyesi Mali Hizmetler Müdürlüğü’nün çalışma usul ve esaslarını düzenlemektir.
                        <br/>
                        Kapsam
                        MADDE 2: Bu yönetmelik, Gebze Belediye Başkanlığı Mali Hizmetler Müdürlüğü nün kuruluş amacı, faaliyet alanları, yönetim statüsü ile yönetici ve diğer personelin görev, yetki ve sorumluluk alanlarını kapsamaktadır.
                        <br/>
                        Dayanak
                        MADDE 3: Bu yönetmelik, 5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu, 2464 Sayılı Belediye Gelirleri Kanunu, 5216 Sayılı Büyükşehir Belediye Kanunu ve 5393 Sayılı Belediye Kanununun 15 inci maddesinin (b) bendine dayanılarak hazırlanmıştır.
                        Tanımlar
                        MADDE 4: Bu Yönetmelikte geçen;
                        a)	Belediye      	:  Gebze Belediye Başkanlığını,<br/>
                        b)	Meclis         	:  Gebze Belediye Meclisini,<br/>
                        c)	Başkan        	:  Gebze Belediye Başkanını,<br/>
                        d)	Üst Yönetici   	:  Belediye Başkanını,<br/>
                        e)	Kanun        	: 5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanununu, 2464 Sayılı Belediye Gelirleri Kanunu, 5216 Sayılı Büyükşehir Belediye Kanunu ve 5393 Sayılı Belediye Kanununu,<br/>
                        f)	Mali Hizmetler Müdürlüğü: Kamu idarelerinde 5018 sayılı kanunun 60. maddesinde belirtilen görevleri yürüten birimi,<br/>
                        g)	Mali Hizmetler Müdürü: 5018 sayılı kanunun 60. maddesinde belirtilen görevleri yürüten yöneticiyi,
                        h)	Muhasebe Hizmeti: Gelir ve alacakların tahsili, giderlerin ve borçların hak sahiplerine ödenmesi, para ve parayla ifade edilebilen değerler ile emanetlerin alınması, saklanması, ilgililere verilmesi, gönderilmesi ve diğer tüm mali işlemlerin kayıtlarının yapılması ve raporlanması işlemlerini,<br/>
                        ı) Muhasebe Birimi: Muhasebe hizmetlerinin yapıldığı birimi,<br/>
                        i)	Muhasebe Yetkilisi: Muhasebe hizmetlerinin yürütülmesinden ve muhasebe biriminin yönetiminden sorumlu, usulüne göre atanmış sertifikalı yöneticiyi,<br/>
                        j)	Muhasebe Yetkilisi Mutemedi: Muhasebe yetkilisi adına ve hesabına para ve parayla ifade edilebilen değerleri geçici olarak almaya, muhafaza etmeye, vermeye, göndermeye yetkili ve bu işlemler ile ilgili olarak doğrudan muhasebe yetkilisine karşı sorumlu olan kamu görevlilerini ve yetkili memurları,<br/>
                        k)	Ön Mali Kontrol: İdarelerin gelir, gider, varlık ve yükümlülüklerine ilişkin mali karar ve işlemlerinin; idarenin bütçesi, bütçe tertibi, kullanılabilir ödenek tutarı, harcama programı, finansman programı, merkezi yönetim bütçe kanunu ve diğer mali mevzuat hükümlerine uygunluğu ve kaynakların etkili, ekonomik ve verimli bir şekilde kullanılmasını yönünde yapılan kontrolü,<br/>
                        l)	Para ve para ile ifade edilebilen değerler: Muhasebe birimine veya mutemedine teslim edilip muhafaza ve sorumluluğu altında bulunan tedavüldeki Türk parası ve çevrilgen yabancı paralar ile altın, gümüş, kıymetli maden ve bunlardan yapılmış her türlü ziynet eşyası, antika paralar, hisse senedi, tahvil ve hazine bonoları, diğer devlet borçlanma senetleri, değerli kâğıtlar, çevrilgen olmayan yabancı paralar ve bu mahiyetteki değerleri,<br/>
                        p)Yetkili memur: Görevleri gereği veya görevlendirilmeleri nedeniyle muhasebe birimlerinden zimmetle değerli kâğıt alıp satan kamu görevlilerini,<br/>
                        r) Mutemetlik: Muhasebe biriminin bulunduğu yer dışında, muhasebe birimine bağlı olarak tahsilât mutemetliği, tahsilât şefliği ve benzeri isimler altında mutemetlik görevinin yapıldığı birimi.<br/>
                        s)Vezne: Muhasebe birimine teslim edilen para ve para ile ifade edilebilen menkul değerlerin muhafaza edildiği yeri.<br/>
                        t)Ambar: Muhasebe birimine teslim edilen ve parayla ifade edilen değerli kâğıtlar ile muhasebe birimince kullanılacak seri ve sıra numaralı alındı, teslimat müzekkeresi, çek ve benzeri basılı evrakın muhafaza edildiği yeri, ifade eder.
                        <br/>
                        Teşkilat
                        <br/>
                        MADDE 5: Mali Hizmetler Müdürlüğünün Personel yapısı aşağıda belirtilen şekildedir.<br/>
                        a)	Müdür<br/>
                        b)	 Şef<br/>
                        c)	 Memur<br/>
                        d)	 Büro Personeli<br/>
                        <br/>
                        (2) Müdürlüğün teşkilat yapısı aşağıdaki gibidir.<br/>
                        a)	Müdür<br/>
                        b)	Muhasebe Şefliği<br/>
                        c)	Tahakkuk -Tahsilat Şefliği<br/>
                        d)	Strateji Geliştirme Şefliği<br/>
                        e)	Yazı İşleri Birimi<br/>
                        <br/>
                        (3) Mali Hizmetler Müdürlüğü çalışmalarının değişen koşullarda daha etkin ve zamanında yapılmasını temin etmek için Mali Hizmetler Müdürünün teklifi ve Başkanlığın onayı ile yeni şeflikler kurulabilir veya kurulmuş şeflikler birleştirilebilir, şefliklerin bazı görevleri diğer şefliklere verilebilir.<br/>
                        MADDE 6: Mali Hizmetler Müdürlüğü, Belediye Başkanına veya görevlendireceği Başkan Yardımcısına bağlıdır.<br/>
                        <br/>
                        İKİNCİ BÖLÜM<br/>
                        Personelin Nitelikleri, Görev, Yetki ve Sorumlulukları<br/>
                        <br/>
                        <br/>
                        Personelin unvan ve nitelikleri<br/>
                        MADDE 7: Mali Hizmetler Müdürlüğüne atanacak personelin unvan ve nitelikleri aşağıdaki gibidir.<br/>
                        a)	Mali Hizmetler Müdürü: 5018 Sayılı Kamu Mali Yönetimi Kontrol Kanunu ve 657 Sayılı Kanunun atamaya ilişkin maddelerinde öngörülen ilkeler ve  “İl Özel İdareleri, Belediyeler ve İl Özel İdareleri ve Belediyelerin Kurdukları Birlik, Müessese ve İşletmeler İle Bunlara Bağlı Döner Sermayeli Kuruluşlardaki Memurların Görevde Yükselme ve Unvan Değişikliği Esaslarına Dair Yönetmelik” hükümleri doğrultusunda atanır.<br/>
                        b)	Şef: 657 Sayılı Kanunun atamaya ilişkin maddelerinde öngörülen ilkeler ve  “İl Özel İdareleri, Belediyeler ve İl Özel İdareleri ve Belediyelerin Kurdukları Birlik, Müessese ve İşletmeler İle Bunlara Bağlı Döner Sermayeli Kuruluşlardaki Memurların Görevde Yükselme ve Unvan Değişikliği Esaslarına Dair Yönetmelik” hükümleri doğrultusunda atanır.<br/>
                        c)	Memurlar: KPSS sınavı ile 657 Sayılı Kanunun atamaya ilişkin maddelerinde öngörülen ilkeler doğrultusunda atanır.
                        <br/>
                        Müdürün görev, yetki ve sorumlulukları<br/>
                        MADDE 8: Mali Hizmetler Müdürünün görev, yetki ve sorumlulukları aşağıdaki gibidir.<br/>
                        a)	Mali Hizmetler Müdürünün Görevleri: Mali hizmetlere ilişkin hizmetlerin yerine getirildiği birimin Müdürü Mali Hizmetler müdürüdür. Mali hizmetler müdürü;
                        <br/>
                        1)	Birimi yönetir, yeterli sayı ve nitelikte personel istihdamını, personelin eğitimini ve yetiştirilmelerini sağlayacak çalışmalar yapar.<br/>
                        2)	Birimin görev dağılımını yaparak hizmetlerin etkili, süratli ve verimli bir şekilde sunulmasını sağlar.<br/>
                        3)	Birimin yazışmalarını yürütür, idarenin diğer idareler nezdindeki mali iş ve işlemlerini izler ve sonuçlandırılmasını sağlar.<br/>
                        4)	İdarenin mali yönetim ve kontrol sisteminin etkili bir şekilde çalışması için gerektiğinde harcama yetkilileri ile toplantı yapar, üst yöneticiyi bilgilendirir ve önerilerde bulunur.<br/>
                        5)	İç ve dış denetim sırasında denetçilere bilgi, belge ve kolaylıklar sağlar.<br/>
                        6)	Stratejik plan, performans programı, bütçe, mali tablolar, kesin hesap, faaliyet raporu ve diğer raporların süresinde hazırlanmasını, onaylanmasını ve ilgili yerlere gönderilmesini sağlar.<br/>
                        7)	Gelirlerin azalmasına veya giderlerin artmasına neden olacak ve idareye yükümlülük getirecek kanun tasarılarının mali yükünün hesaplanmasını sağlar.<br/>
                        8)	Gerektiğinde mali mevzuatın uygulanmasına yönelik açıklayıcı düzenlemeler hazırlar.<br/>
                        9)	Mali hizmetlerin saydam, planlı, idarenin amaçlarına ve mevzuata uygun bir şekilde yürütülmesi için gerekli önlemleri alır.<br/>
                        10)	Müdürlüğü Başkanlık huzurunda temsil eder.<br/>
                        11)	Müdürlüğün yönetiminde tam yetkili ve sorumlu kişidir.<br/>
                        12)	Çalışmaları yasal olmak kaydıyla yazılı ve sözlü emirlerle yürütür.<br/>
                        13)	Personeli arasında gerektiğinde yazılı görev dağılımı yapar.<br/>
                        14)	Müdürlükte çalışan personelin birinci sicil amiri olup memur personelin başarı ve performans değerlendirmesini yapar.<br/>
                        15)	Müdürlük Bünyesinde görev yapan şefliklerin tüm iş ve işlemlerinin zamanında ve doğru olarak yerine getirilmesini sağlar.<br/>
                        16)	Gelirlerin ve alacakların ilgili mevzuatına göre tahsil edilmesini, yersiz ve fazla tahsil edilenlerin ilgililerine iade edilmesini sağlar.<br/>
                        17)	Giderlerin ve borçların hak sahiplerine ödenmesini sağlar.<br/>
                        18)	Para ve parayla ifade edilebilen değerler ile emanetleri alır, saklar ve ilgililere verir veya gönderir.<br/>
                        19)	Mali işlemlere ilişkin kayıtları usulüne uygun, saydam ve erişilebilir şekilde tutar, mali rapor ve tabloları her türlü müdahaleden bağımsız olarak düzenler.<br/>
                        20)	Gerekli bilgi ve raporları, Bakanlığa, hizmet verilen ilgili kamu idaresinin harcama yetkilisi ile üst yöneticisine ve yetkili kılınmış diğer mercilere muhasebe yönetmeliklerinde belirtilen sürelerde düzenli olarak verir.<br/>
                        21)	Vezne ve ambarların kontrolünü ilgili mevzuatında öngörülen sürelerde yapar.<br/>
                        22)	Muhasebe hizmetlerine ilişkin defter, kayıt ve belgeleri ilgili mevzuatında belirtilen sürelerle muhafaza eder ve denetime hazır bulundurur.<br/>
                        23)	Mutemetlerinin hesap, belge ve işlemlerini ilgili mevzuatında öngörülen zamanlarda denetler veya mutemedinin bulunduğu yerdeki birim yöneticisinden kontrol edilmesini ister.<br/>
                        24)	Gelen ve giden evrakı inceleyip imzalar.<br/>
                        25)	Disiplin Amirleri Yönetmeliğince kendisine verilen görevi yapmak.<br/>
                        b) Mali hizmetler müdürünün sorumlulukları: Mali Hizmetler Müdürü, birim görevlerinin yerinde ve zamanında yerine getirilmesinden üst yöneticiye karşı sorumludur. Birim müdürü;<br/>
                        1)	Harcama birimleri arasında mali yönetim ve kontrol alanında koordinasyon sağlanmasından,<br/>
                        2)	Birim hizmetlerinin etkili, süratli ve verimli bir şekilde yürütülmesinden,<br/>
                        3)	Gelirlerin zamanında tahakkuku ve gelir ve alacakların süresinde takip ve tahsilinin sağlanmasından,<br/>
                        4)	Ödeneklerin planlanarak ilgili yerlere zamanında gönderilmesinden,<br/>
                        5)	Ön mali kontrole ilişkin faaliyetlerin etkili bir şekilde yürütülmesinden,<br/>
                        6)	Birim tarafından hazırlanması gereken plan, program, bütçe, kesin hesap, mali tablolar, faaliyet raporu ve diğer raporlar ile mali istatistiklerin zamanında hazırlanarak ilgili idarelere gönderilmesinden,<br/>
                        7)	Muhasebe kayıtlarının usulüne uygun saydam ve erişilebilir şekilde tutulmasından<br/>
                        8)	Mutemetleri aracılığıyla aldıkları ve elden çıkardıkları para ve parayla ifade edilen değerler ile bunlarda meydana gelebilen kayıtlardan,<br/>
                        9)	Ön ödeme ile kesin ödemelerin yapılması ve ön ödemelerin mahsubu aşamalarından ödeme emri belgesi ve eki belgelerin usulünce incelenmesi ve kontrolünden,<br/>
                        10)	Yersiz ve fazla tahsil edilen tutarların ilgililerine geri verilmesinde geri verilecek tutarın düzenlenen belgelerde öngörülen tutara uygun olmasından,<br/>
                        11)	Ödemelerin ilgili mevzuatın öngördüğü öncelik sırasında göz önünde bulundurularak muhasebe kayıtlarına alınma sırasına göre yapılmasından,<br/>
                        12)	Rücu hakkı saklı kalmak kaydıyla kendinden önceki muhasebe yetkilisinden hesabı devralırken göstermediği noksanlıklardan,<br/>
                        13)	Muhasebe mutemetlerinin hesap, belge ve işlemlerinin ilgili mevzuatına göre kontrol etmekten,<br/>
                        14)	Hesabını kendinden sonra gelen Müdüre devretmek, devredilen hesabı devralmaktan,<br/>
                        15)	Yetkili mercilere hesap vermekten sorumludurlar.
                        <br/>
                        Müdürlüğe Bağlı Şeflikler, Birimler ve Görevleri<br/>
                        MADDE 9: Şef, Müdürlük bünyesinde yapılan görev dağılımı çerçevesinde kanunlar, tüzükler, yönetmelikler, Başkanlık Genelge ve Bildirileri çerçevesinde, üst amirlerinin emirleri doğrultusunda işlerin mevzuata uygun, gecikmesiz ve eksiksiz olarak yürütülmesinde Müdürlük Makamına karşı tam yetkili ve sorumlu kişidir.<br/>
                        <br/>
                        a)	Muhasebe Şefliği:<br/>
                        Belediyeye ait tahsil edilen gelirlerin ve alacakların kayıtlarının tutulması, giderlerin ve borçların hak sahiplerine ödenmesi, para ve para ile ifade edilebilen değerler ile emanetlerin alınması, saklanması, ilgililere verilmesi ve diğer tüm mali işlemlerin kayıtlarının yapılması ve raporlanmasına ilişkin muhasebe hizmetinin yapıldığı birimdir. Muhasebe Şefliğinin görevleri aşağıda gösterilmiştir.<br/>
                        <br/>
                        1)	Muhasebe kayıtlarının usulüne uygun, saydam ve erişilebilir şekilde tutulmasını sağlamak, bankayla ilgili mutabakat işlemlerinin yürütülmesini sağlamak,<br/>
                        2)	İdarenin stratejik plan ve performans programının hazırlanmasını koordine etmek ve sonuçlarının konsolide edilmesi çalışmalarını yürütmek.<br/>
                        3)	İzleyen iki yılın bütçe tahminlerini de içeren idare bütçesini, stratejik plan ve yıllık performans programına uygun olarak hazırlamak ve idare faaliyetlerinin bunlara uygunluğunu izlemek ve değerlendirmek.<br/>
                        4)	Bütçenin hazırlanmasında kullanılacak Bütçe Hazırlama Rehberini, belge ve cetveller ile gerekli dokümanları Üst yöneticinin Harcama Birimlerine göndereceği Bütçe Çağrısı yazısına ekleyerek ilgili birimlere göndermek.<br/>
                        5)	Harcama birimlerinden gelen bütçe tekliflerini ve performans programlarını kayıtlara geçirerek Hazırlık Bütçesini oluşturmak.<br/>
                        6)	Yapılan Hazırlık Bütçesini Mali Hizmetler Müdürü ile birlikte diğer Harcama birimi temsilcileri ile görüşerek İdarenin bütçe hazırlanmasında ilgili kanunları, yönetmelikleri dikkate alarak Üst Yöneticinin belirleyeceği Belediyenin bütçesini yapmak.<br/>
                        7)	Mevzuatı uyarınca belirlenecek bütçe ilke ve esasları çerçevesinde, ayrıntılı harcama programı hazırlamak ve hizmet gereksinimleri dikkate alınarak ödeneğin ilgili birimlere gönderilmesini sağlamak.<br/>
                        8)	Bütçe kayıtlarını tutmak, bütçe uygulama sonuçlarına ilişkin verileri toplamak, değerlendirmek ve bütçe kesin hesabı ile mali istatistikleri hazırlamak.<br/>
                        9)	Harcama birimleri tarafından hazırlanan birim faaliyet raporlarını da esas alarak idarenin yapacağı faaliyet raporu için Harcama birimlerine istenilen dokümanları temin etmek.<br/>
                        10)	İdarenin mülkiyetinde veya kullanımında bulunan taşınır ve taşınmazlara ilişkin icmal cetvellerini Harcama birimleri ile birlikte düzenlemek.<br/>
                        11)	Mali kanunlarla ilgili diğer mevzuatın uygulanması konusunda Mali Hizmetler Müdürü aracılığı ile Harcama birimlerine gerekli bilgileri sağlamak.<br/>
                        12)	Harcama birimleri tarafından istenilen ödenek kayıtlarını tutmak ve düzenlemek, ödeneklere ilişkin bütçe rakamlarının güncelliğini takip etmek,<br/>
                        13)	Bütçe bölümleri arasında yapılacak ödenek aktarmalarıyla ilgili işlemlerin yapılmasını sağlamak,<br/>
                        14)	Müdürlükler tarafından yapılacak olan doğrudan temin usulü ile yapılacak harcamaların takip edilmesini ve kayıtlarının tutulmasını sağlamak,<br/>
                        15)	Belediye’nin üst Mer’i mevzuatta belirtilen esaslara göre dönemine ilişkin Sayıştay'a verilmesi gerekli hesapların verilmesini sağlamak,<br/>
                        16)	Belediye’nin mali yapısıyla ilgili aylık, üçer aylık ve yıllık dönemler itibariyle raporların hazırlanmasını ve üst yönetime sunulmasını sağlamak,<br/>
                        17)	İçişleri Bakanlığı denetimlerinde gerekli iş ve işlemlerin istenen evrak ve ilgili hesapların verilmesini sağlamak,<br/>
                        18)	Onaylanan yılsonu kesin hesabını ilgili mevzuatında belirtilen süre içeresinde Sayıştay’a ve diğer ilgili kamu idarelerine intikalini sağlamak,<br/>
                        19)	Gider hesaplarının takip ve kontrol edilmesini, harcamaların bütçeye uygun olarak yapılmasını sağlamak,<br/>
                        20)	Belediye’nin bütün giderlerinin mevzuata uygun olarak yapılmasını sağlamak,<br/>
                        21)	Ödeme evraklarının (çek, havale) tanzimi ve teslimat düzenlemesi işlemlerinin yapılmasını sağlamak,<br/>
                        22)	Kamu kurum ve kuruluşlarına gelir kalemlerinden ayrılması gereken yasal payların ilgili emanet hesaplara alınmasını ve emanet hesapların takibi ile ilgili çalışmaların kontrol ve koordine edilmesini sağlamak,<br/>
                        23)	Belediye'nin yükümlülükleri arasında bulunan çeşitli harç, vergi, fon vb. ödemelerin yapılmasını sağlamak,<br/>
                        24)	Çalışanların ücret, mesai, ikramiye vb. nakdi haklarının ödemelerini zamanında yapılmasını sağlamak,<br/>
                        25)	Emekliliği hak edenlerin kıdem tazminatlarının ödemelerini yapmak,<br/>
                        26)	Belediye’deki mali mevzuat ile ilgili konularındaki anlaşmazlıkları incelemek ve gerekiyorsa sorunun çözümü için mali danışmanlık firmalarıyla işbirliği yapmak,<br/>
                        27)	Muhasebe İşlemlerine ilişkin defter, kayıt ve belgeleri muhafaza etmek ve denetime hazır bulundurmak,<br/>
                        28)	Her gün yapılan tahsilâtın gelir kalemleri itibariyle muhasebeleştirilmesini sağlamak,<br/>
                        29)	Aylık gelir tablosu hazırlanmasını sağlayarak amirine sunmak, gelirlerin eğilimleri ile ilgili amirini bilgilendirmek,<br/>
                        30)	Bankalardaki Belediyenin hesaplarının banka ekstrelerinin giriş ve çıkışı hareketlerinin sürekli kontrolü ile kasanın ve banka cari hesaplarının tutturulmasını sağlamak,<br/>
                        31)	Teminatların çözümü ve geri iadesini sağlamak<br/>
                        32)	Tüm sarf evraklarının mevzuata uygun düzenlenmesini sağlayarak muhasebeleştirilmesini sağlamak,<br/>
                        33)	Mevzuatın öngördüğü diğer görevler ile amiri tarafından verilen görevlerin icra edilmesini sağlamak.<br/>
                        <br/>
                        b)	Tahakkuk-Tahsilat Şefliği:<br/>
                        Gelir Şefliği, 2464 sayılı Belediye Gelirler Kanunu gereği hazırlanan ve Belediye Meclisimizce kabul edilen Gelir Tarifesine uygun olarak her türlü vergi, resim, harç ve diğer gelirlerin tahakkuk, tahsil ve takip işlemlerini yapmakla sorumlu olan Şefliktir.<br/>
                        <br/>
                        1.	Belediyemiz sınırları dâhilindeki bina, arsa ve arazilerin 1319 sayılı Emlak Vergisi kanuna göre Tarh ve Tahakkuklarını yapmak,<br/>
                        2.	2464 sayılı Belediye Gelirleri kanuna göre Belediyemiz sınırlarındaki işyerlerinin Çevre Temizlik Vergilerini tarh ve tahakkukunu yapmak,<br/>
                        3.	Emlak, Ç.T.V ile ilgili evrak ve dokümanları oluşturup bilgisayar kayıtlarına işlemek,<br/>
                        4.	 Eksik veya fazla beyanda bulunan mükellefleri tespit edip bu tahakkuklarla ilgili sorun ve hataları düzelterek mükerrer kayıtları gidermek<br/>
                        5.	2464 sayılı Belediye Gelirler Kanununun 12–16 mad. İstinaden İlan Reklam Vergileri ve 17-22 maddeleri gereği olan Eğlence vergilerini tarh ve tahakkuk ettirmek, denetimlerini yaparak dönem içerisinde yükümlülüklerini yerine getirmeyen mükelleflere 213 sayılı V.U.K gereğince yoklama fişi tanzim ederek resen beyan oluşturmak, vergi ve ceza ihbarnameleri düzenlemek ve ilgililerine tebliğini sağlamak,<br/>
                        6.	2464 sayılı Belediye Gelirler Kanununun 29–33 maddeleri gereği olarak Haberleşme vergileri, 34-36 maddeleri gereği Elektrik tüketim vergilerinin beyanını kabul ederek tarh ve tahakkuk ettirmek,<br/>
                        7.	2464 sayılı Belediye Gelirler Kanununun 52-57 mad. İstinaden İşgal Harcını tarh ve tahakkuk ettirmek,<br/>
                        8.	2464 sayılı Belediye Gelirler Kanununun 79 maddesi gereği Bina İnşaat harçları ve kayıt suret harçları, 80 mad. İstinaden İmarla ilgili harçlardan parselasyon harcı, ifraz ve tevhit harcı, plan ve proje harcı, zemin açma izni ve toprak hafriyatı harcı ve yapı kullanma izni harçlarını, 82.madde gereği olarak muayene ruhsat ve rapor harçlarını, 83. maddesi gereği olarak sağlık belgesi harçlarının tarh ve tahakkuk ettirmek.<br/>
                        9.	Belediye Gelirler Kanununun mükerrer 97. mad. İstinaden Belediye kanununda harç ve katılım payı konusu yapılmayan ve ilgililerin isteğine bağlı olarak ifa edecekleri her türlü hizmet için ücret tarife tekliflerini hazırlayarak Belediye Meclisine sunmak, Tıbbi Atık ve Katı Atık bedellerinin tarh ve tahakkukunu yapmak.<br/>
                        10.	2464 sayılı Belediye Gelirler Kanununun Vergi, Resim ve Harçlara ilişkin maktu olarak en az ve en çok miktarları gösterilen vergi ve harç tarife tekliflerini hazırlayarak Belediye Meclisine sunmak.<br/>
                        11.	Beyana dayalı vergi ve harçların kontrolü, takibi ve kaçakları yoklama memurlarınca yerinde yoklama fişi ile tespit edilerek tarh ve tahakkuk ettirmek.<br/>
                        12.	2464 sayılı Belediye Gelirleri Kanununun 86-94. maddeleri gereğince Harcamalara Katılma Paylarının tarh ve tahakkukunu düzenlemek, 213 sayılı V.U.K dahilinde ilgililerine tebliğini sağlamak.<br/>
                        13.	İlgili mevzuatlar dâhilinde her türlü vergi, resim ve harçlara ilişkin düzeltme kayıtlarını düzenlemek ve gerekli terkin işlemini sağlamak<br/>
                        14.	İlgili mevzuat çerçevesinde Belediyenin gelirlerini tahakkuk ettirmek.<br/>
                        <br/>
                        c)	Tahsilat<br/>
                        <br/>
                        1.	Veznelerde Emlak, Arsa, Arazi, Çevre Temizlik Vergisi gibi tahakkuklu tahsilâtlar ve Kesin Teminat, Çeşitli Gelir, Kayıt suret harcı vb. vergi, harçların tahsilatlarını yapmak,<br/>
                        2.	1608,5326 ve 5259 sayılı yasalara istinaden Zabıta Müdürlüğünce düzenlenen ve Belediye Encümenince onaylandıktan sonra karar ve tebliğ ilmühaberi, tebliğ alındısıyla birlikte müdürlüğümüze zimmetli olarak gönderilen para cezası zabıtlarının ilgili mükellef sicillerine tahakkuk ettirilerek tahsilâtını sağlamak.<br/>
                        3.	İmar ve Şehircilik Müdürlüğünce gönderilen inşaat ruhsatı otopark bedellerinin tahakkuk ve tahsilâtını yapmak.<br/>
                        4.	Belediye kasasına giren günlük tahsilâtın gün bazında ilgili envanterlerin mevcut bulunduğu yevmiye defterine işlenerek, ay sonunda ilgili hesapların yekûnları alınıp Muhasebe Şefliği hesapları ile karşılaştırılarak aylık gelir hesabı tutturmak.<br/>
                        5.	Tahsilâtı gecikenlere ödeme emri gönderilmesini sağlamak,<br/>
                        6.	Ödemenin yapılmaması durumunda haciz işlemlerinin başlatılmasını ve yapılmasını sağlamak.<br/>
                        7.	Harcamalara iştirak paylarının düzenli alınabilmesi için ilgili birimlerle koordineli çalışmak,<br/>
                        8.	Tahsilat kayıtların tutulmasını ve tahsil olunan paraların bankaya yatırılmasını sağlamak,<br/>
                        9.	Tahsilâtla ilgili raporlar, icmaller ve cetvellerin hazırlanmasını sağlamak,<br/>
                        10.	Tahakkuk ve Tahakkuksuz gelirler ile takipli ve takipsiz gelirlerin tahsilât takiplerini kontrol etmek,<br/>
                        11.	Tahsilât yapılamayan gelirleri raporlama düzeni içerisinde takip etmek, tebligat, ödeme emri, haciz yolları ile tahsilâtların yapılmasını sağlamak,<br/>
                        12.	Aylık gelir tablosu hazırlanmasını sağlayarak amirine sunmak, gelirlerin eğilimleri ile ilgili amirini bilgilendirmek,<br/>
                        13.	Yapılacak tebligatların hazırlanması ve dağıtılmasını organize etmek,<br/>
                        14.	Mevzuatın öngördüğü diğer görevler ile amiri tarafından verilen görevlerin icra edilmesini sağlamak
                        15.	Gelir ve alacaklarının takip ve tahsil işlemlerini yürütmek,<br/>
                        16.	Borçlu mükelleflerin tapu kaydına haciz konulmasını, ödeme yapılması durumunda konulan haczin kaldırılmasını sağlamak.<br/>
                        17.	İcra Müdürlüklerince yapılan satışlara münadi görevlendirilmek, karşılığında tellaliye tahsilatı yapmak,<br/>
                        18.	P.T.T ve Banka hesaplarına yatırılan vergilerin tahsilatını yaparak mükelleflerin hesaplarına işlemek,<br/>
                        19.	Yanlış tahakkuk ve fazla yapılan ödemelerin düzeltme fişini düzenleyerek ödeme yapılması için Muhasebe Şefliğine göndermek,<br/>
                        20.	İlgili müdürlükler ile ilgili Kurumlardan gelen evrakların cevaplandırılmasını sağlamak,<br/>
                        21.	Mıntıka dışında bulunan mükelleflerin adreslerinin tespit ederek, evrakın tebligatını sağlamak,<br/>
                        22.	Diğer Belediyelerden gelen evrakların tebligatlarının ve tahsilatlarının yapılmasını sağlamak,<br/>
                        <br/>
                        d)	Tebligat  :<br/>
                        1.	Tebliğ edilecek evrakın Tebligat kanunları hükümlerince tebliğ edilmesini sağlamak.<br/>
                        2.	Tebligat iadesi yapılan evrakların gerektiğinde adres araştırılması yapılması, adres tespitinin yapılamaması halinde yerinde adres araştırmasının yapılmasını sağlamak.<br/>
                        3.	Tebliğ ve tellâliye memurlarını kontrol altında bulundurarak, çalışmalarını takip etmek.<br/>
                        4.	Semt pazarları ve hayvan pazarlarını dolaşarak pazarcının işgaliye alanı kadar tarifede belirtilen makbuz karşılığı işgal harcını tahsil etmek.<br/>
                        5.	Tellâliye hizmetinde bulunan kurum ve kuruluşlarla ilgili belirtilen gün ve saatte yerinde bulunarak mevzuatta belirtilen hükümlere uygun olarak tellâliye hizmeti vermek.<br/>
                        <br/>
                        Mali Hizmetler Yazı İşleri Birimi<br/>
                        <br/>
                        MADDE 10:<br/>
                        a)-Görev ve Sorumluluklar:<br/>
                        1.	Gelen- giden yazışmaların kayıtlarını tutmak.<br/>
                        2.	Bilgi edinme kanunu ve dilekçe hakkının kullanılmasına dair kanunda belirtilen sürelere göre cevap akışını sağlamak.<br/>
                        3.	Müdürlüğün yazışmalarının kurum formatına, kodlamalara ve yazışma kural ve talimatlarına uygunluğunu sağlamak.<br/>
                        4.	Kendilerine verilen görevlerin mevzuatına ve usulüne uygun olarak yürütmek.<br/>
                        5.	Yönetmelik gereğince düzenlenmesi gereken belge ve bilgileri, belirtilen sürelerde ilgili yerlere düzenli olarak vermek.<br/>
                        6.	Müdürlüğe bizzat gelerek, telefon, faks veya elektronik posta yolu veya diğer yazışmalar ile yapılan müracaatları ilgililere iletişim ve koordinasyonu sağlamak.<br/>
                        7.	Gelen, giden yazışmaların evraklarını arşiv sistemine göre saklayıp korumak.<br/>
                        8.	Üst yönetici ve müdürlüklerden gelen bilgilendirmelerin zamanında şefliklere tebliğini yapmak.<br/>
                        9.	Üstlerinden aldığı emir ve görevleri yerine getirmek.<br/>
                        <br/>
                        <br/>
                        <br/>
                        c) Strateji Geliştirme Şefliği :<br/>
                        (1) Strateji Geliştirme ve Planlama Görevi:<br/>
                        <br/>
                        MADDE 11:- Strateji Geliştirme Şefliği, Stratejik Yönetim ve Planlama,  Performans ve Kalite Ölçütleri Geliştirme Görevlisi, Yönetim Bilgi Sistemi Görevlisi, İdari ve Mali Hizmetler Görevlisi, İç Kontrol Görevlisi, AR-GE Görevlisinden oluşmaktadır.<br/>
                        <br/>
                        a) Planlama:<br/>
                        1.	Belediyenin misyon, vizyon ve çalışma ilkelerinin belirlenmesi ve güncellenmesi çalışmalarını yürütmek.<br/>
                        2.	Belediyenin orta ve uzun vadeli stratejik politikalarını belirlemek ve amaçlarını oluşturmak üzere gerekli çalışmaları yapmak.<br/>
                        3.	Belediyenin stratejik planlama çalışmalarına yönelik bir hazırlık programı oluşturmak, idarenin stratejik planlama sürecinde ihtiyaç duyulacak eğitim ve danışmanlık hizmetlerini vermek veya verilmesini sağlamak ve stratejik planlama çalışmalarını koordine etmek.<br/>
                        4.	Performans programının hazırlanması ve değiştirilmesi çalışmalarında koordinasyon görevini yürütmek. Bu çalışmalarda kullanılacak belge ve cetveller ile gerekli dokümanı strateji geliştirme müdürlüğü tarafından Belediyenin ilgili diğer birimlere göndermek.<br/>
                        5.	Birimler tarafından hazırlanan birim performans programlarından hareketle Belediye performans programını hazırlamak ve bu aşamada diğer birimlerin temsilcilerinin katılımı sağlamak.<br/>
                        6.	Belediyenin performans ve kalite ölçütlerini geliştirmek ve birimlerin belirlenen performans ve kalite ölçütlerine uyumunu değerlendirerek üst yöneticiye sunmak<br/>
                        <br/>
                        <br/>
                        b) İç Kontrol:<br/>
                        1.	İç kontrol sisteminin kurulması, standartlarının uygulanması ve geliştirilmesi konularında çalışmalar yapmak,<br/>
                        2.	İdarenin görev alanına ilişkin konularda standartlar hazırlamak,<br/>
                        3.	Amaçlar ile sonuçlar arasındaki farklılığı giderici ve etkililiği artırıcı tedbirler önermek.<br/>
                        <br/>
                        (2) Ar-Ge Görevi
                        <br/>
                        a) Proje Araştırma-Geliştirme, Değerlendirme ve Yönetme:<br/>
                        1.	Belediye hizmetlerinin iyileştirilmesi süreçlerini tasarlamak, hizmet ve faaliyet kalitesinin arttırılması için gerekli projeler veya uygulama modelleri geliştirmek.<br/>
                        2.	Hizmet, faaliyet ve iletişim verimliliğinin artırılması için gerekenlerin ortaya çıkarılması amacıyla çalışmalar yapmak.<br/>
                        3.	Yeni hizmet fırsatlarını belirlemek, etkililik ve verimliliği önleyen tehditlere karşı alınabilecek tedbirler geliştirmek ve ilgili birimlere önermek.<br/>
                        4.	Personelin verimlilik ve performansının artırılması için gerekli araştırma çalışmalarını yapmak.<br/>
                        5.	Belediyenin kurum içi işleyişinin iyileştirilmesi için gerekli araştırma çalışmalarını yapmak.<br/>
                        6.	Başkanlıkça onaylanan kurumsal önceliklere uygun gerekli araştırma, eğitim ve danışmanlık hizmetlerini belirlemek ve gerçekleştirilmek üzere ilgili birimlere iletmek.<br/>
                        7.	Hizmet ve faaliyetlerin ekonomik ve etkin bir şekilde yerine getirilmesi için zaman, personel, mali imkânlar ve malzeme gibi mevcut kaynakların en uygun ve verimli bir şekilde kullanılmasını sağlamak üzere çalışmalar yapmak.<br/>
                        8.	Belediyenin hizmet verdiği alanlarda uygulamaya dönük projeler araştırmak.<br/>
                        9.	Başkanlıkça uygun görülen proje tekliflerini değerlendirmek ve ilgili süreçlerin başlatılmasını sağlamak<br/>
                        10.	İlçenin ve yaşayan insanların gelişimine yönelik projeler hazırlamak.<br/>
                        11.	Kamu kurum ve kuruluşları, sivil toplum örgütleri, uluslararası kuruluşlar ile AB ve Dış mali fonlar, ulusal fonlar ile koordineli olarak projeler oluşturmak veya projelerde yer alınması için gerekli çalışmaları yapmak.<br/>
                        12.	Kardeş Şehir çalışmaları yürütmek ve takibini sağlamak.<br/>
                        13.	AB Hibe ve Teşvik Programlarından yararlanmak amacıyla; her müdürlüğün proje geliştirmesini teşvik edici çalışmalarda koordinatörlük görevi yapmak,<br/>
                        14.	Üniversiteler, Meslek Odaları, Sivil Toplum Kuruluşları gibi dış paydaşların görüşlerini almak ve iç paydaş analizleri, mevcut durum analizleri yaparak; elde edilen veriler ışığında stratejik plan oluşturmak.<br/>
                        15.	Uluslararası birliklere üyelik çalışmaları yürütmek ve takibini sağlamak.<br/>
                        16.	Belediyenin çeviri ve tercümanlık çalışmalarını yürütmek.<br/>
                        <br/>
                        b)	Veri Analizi, İzleme, Ölçme ve Değerlendirme:<br/>
                        <br/>
                        1.	Belediyenin kurumsal yapısı, işleyişi, hizmetleri, çalışanları hakkında bilgi ve verileri toplamak, analiz etmek ve yorumlamak.<br/>
                        2.	Belediyenin görev alanına giren konularda, hizmetleri etkileyecek dış faktörleri incelemek, hizmetlerin etkililiğini ve tatmin düzeyini analiz etmek ve genel araştırmalar yapmak veya yaptırmak.<br/>
                        3.	Belediyenin ve hizmetlerin üstünlük ve zayıflıklarını tespit etmek.<br/>
                        4.	Veri elde etme-analiz ve araştırma-geliştirme çalışmaları yapmak, yaptırmak.<br/>
                        5.	İlçe ve belediye ile ilgili istatistikî kayıtları oluşturmak ve güncel vaziyette tutmak.<br/>
                        6.	Belediye faaliyetlerinin stratejik plan ve yıllık performans programına uygunluğunu izleyerek değerlendirmek.<br/>
                        7.	Müdürlükler tarafından hazırlanan müdürlük faaliyet raporlarını da esas alarak Belediyenin faaliyet raporunu hazırlamak.<br/>
                        8.	Mali kaynakların verimliliğinin izlenmesi ve analizi yoluyla geliştirme sonuçları üretmek, ilgili birimlere bildirmek.<br/>
                        9.	İzleme Raporları ve Brifing Raporlarını düzenlemek, yayınlamak ve üst yöneticiye sunmak.<br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        c) Süreç Analizi:<br/>
                        1.	Kurumda yapılan bütün hizmet ve faaliyetlerin belirlenmesi, tanımlanması ve tanımlanan faaliyetlerin analizlerinin yapılması.<br/>
                        2.	Faaliyetlere ilişkin iş akış şemalarının çıkarılması.<br/>
                        3.	Faaliyet ve süreçlerin iyileştirilmesi ve standartlarının oluşturulması.<br/>
                        ç) Bilişim Sistemlerine Destek Görevi:<br/>
                        1.	Bilişim sistemlerine ilişkin hizmetleri ilgili birimlerle işbirliği içinde yerine getirmek.<br/>
                        2.	Bilişim sistemlerinin geliştirilmesi çalışmalarını yürütmek.<br/>
                        3.	Belediye ve kentlerle ilgili teknolojik gelişmeleri takip etmek ve uygulama imkânlarını araştırmak.<br/>
                        d) Organizasyon Geliştirme ve Yönetme:<br/>
                        1.	Vizyon çalışmalarını desteklemek, görünür ve bilinir kılmak adına öngörülen sempozyum,  panel, konferans, çalıştay organizasyonlarını ilgili birimlerle planlamak ve uygulamak.<br/>
                        2.	İlçenin vizyon odaklı ve prestij proje çalışmalarını belirlemek ve/veya bu çalışmalar kapsamında iş akış planlarını oluşturmak adına ilgili birimlerle ortak akıl platformlarını planlamak ve uygulamak.<br/>
                        3.	İlçenin vizyon doğrultusunda kimliğini oluşturmak adına fikir projelerinin yarışma organizasyonları ile elde edilmesi için gerekli iş sürecini planlayarak prosedürleri çerçevesinde gerçekleştirilmesini sağlamak.<br/>
                        II-Organizasyondaki Yeri:<br/>
                        1.	Direkt olarak Müdür’e bağlıdır.<br/>
                        2.	Görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekten Müdür’e karşı sorumludur.<br/>
                        <br/>
                        MADDE 12:
                        <br/>
                        Strateji Geliştirme Biriminin görev, yetki ve sorumlulukları aşağıdaki gibidir.<br/>
                        a) Strateji Geliştirme Biriminin Görev Yetki ve Sorumlulukları:<br/>
                        Stratejik yönetim ve planlama fonksiyonu kapsamındaki görevler;<br/>
                        1.	İdarenin stratejik planlama çalışmalarına yönelik bir hazırlık programı oluşturmak, İdarenin stratejik planlama sürecinde ihtiyaç duyulacak eğitim ve danışmanlık hizmetlerini vermek veya verilmesini sağlamak ve stratejik planlama çalışmalarını koordine etmek.<br/><br/>
                        2.	Stratejik planlamaya ilişkin destek hizmetlerini yürütmek.<br/>
                        3.	İdarenin görev alanına giren konularda, hizmetleri etkileyecek dış faktörleri incelemek<br/>
                        4.	İdare Faaliyet Raporunu hazırlamak<br/>
                        5.	Yeni hizmet fırsatlarını belirlemek, etkililik ve verimliliği önleyen tehditlere karşı tedbirler almak.<br/>
                        6.	Kurum içi kapasite araştırması yapmak, hizmetlerin etkililiğini ve yararlanıcı memnuniyetini analiz etmek ve genel araştırmalar yapmak.<br/>
                        7.	İdarenin üstünlük ve zayıflıklarını tespit etmek.<br/>
                        8.	İdarenin görev alanıyla ilgili araştırma-geliştirme faaliyetlerini yürütmek.<br/>
                        9.	İdare faaliyetleri ile ilgili bilgi ve verileri toplamak, tasnif etmek, analiz etmek.<br/>
                        10.	Yönetimin iç kontrole yönelik işlevinin etkililiğini ve verimliliğini artırmak için gerekli çalışmaları yapmak, şubesinde iç kontrol süreçlerinin işletilmesi, izlenmesi ve gerekli tedbirlerin alınması yönünde çalışmalar yapmak.<br/>
                        Performans ve kalite ölçütleri geliştirme fonksiyonu kapsamındaki görevler;<br/>
                        1.	İdarenin görev alanına giren konularda performans ve kalite ölçütleri geliştirmek.<br/>
                        2.	İdarenin yönetimi ile hizmetlerin geliştirilmesi ve performansla ilgili bilgi ve verileri toplamak, analiz etmek ve yorumlamak.<br/>
                        3.	İdarenin ve/veya birimlerin belirlenen performans ve kalite ölçütlerine uyumunu değerlendirerek üst yöneticiye sunmak.<br/>
                        4.	Mali Hizmetler Müdürlüğü ile koordineli olarak izleyen iki yılın bütçe tahminlerini de içeren idare bütçesini, Stratejik Plan ve yıllık Performans Esaslı Bütçeleme programına uygun olarak hazırlamak ve İdare faaliyetlerinin bunlara uygunluğunu izlemek ve değerlendirmek.<br/>
                        5.	İç kontrol sisteminin kurulması, standartlarının uygulanması ve geliştirilmesi konularında çalışmalar yapmak ve sonuçlandırmak; üst yönetimin iç denetime yönelik işlevinin etkililiğini ve verimliliğini artırmak için gerekli hazırlıkları yapmak.<br/>
                        6.	Yönetim bilgi sistemi fonksiyonu kapsamındaki görevler;<br/>
                        7.	Yönetim bilgi sistemlerine ilişkin hizmetleri varsa ilgili birimlerle işbirliği içinde yerine getirmek.<br/>
                        8.	Yönetim bilgi sisteminin geliştirilmesi çalışmalarını yürütmek.<br/>
                        9.	Strateji Geliştirme Müdürlüğü ile diğer Müdürlükler arasında koordinasyonu sağlar.<br/>
                        10.	Üst makamlarca verilecek benzeri nitelikteki diğer görevleri yerine getirir.<br/>
                        11.	Müdürlük tarafından yürütülen hizmetlerin gerektiği şekilde yerine getirilmesini sağlamak.<br/>
                        12.	Hizmetlerin geliştirilmesi yönünde uygulamada karşılaşılan sorunları ortadan kaldıracak tekliflerde bulunmak.<br/>
                        13.	Kendi görev alanı kapsamında olan her türlü bilginin her an kullanılabilecek durumda tam, doğru ve güncel olarak tutulmasını sağlamak, gerektiğinde rapor hazırlamak.<br/>
                        14.	Müdürlük ve göreviyle ilgili yasa, tüzük, yönetmelik taslaklarını incelemek ve görüş bildirmek.<br/>
                        15.	Müdürlük personelinin disiplin ve işbirliği içinde çalışmasını sağlamak, aralarında görev dağılımını yapmak ve denetlemek.<br/>
                        16.	Personelin eğitimini ve yetiştirilmesini sağlamak, gerekli bilgileri edinebilmesi için eğitim ihtiyaçlarını tespit etmek ve eğitimlerin gerçekleşmesi için girişimlerde bulunma çalışmaları yapmak.<br/>
                        17.	Verimliliğin arttırılması ve işlerin daha kaliteli, düzenli ve süratli şekilde yürütülmesi için çalışma metotları geliştirmek.<br/>
                        18.	Kendi görev alanı içindeki ve diğer şubelerle olan yazılı ve sözlü bilgi akışının tam, doğru ve zamanında oluşmasını sağlamak.<br/>
                        19.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.<br/>
                        <br/>
                        Muhasebe Yetkilisinin Görev Ve Yetkileri<br/>
                        MADDE 13:  Muhasebe Yetkilisinin Görev ve Yetkileri şunlardır;<br/>
                        1.	Gelirleri ve alacakları ilgili mevzuatına göre tahsil etmek, yersiz ve fazla tahsil edilenleri ilgililerine iade etmek.<br/>
                        2.	Giderleri ve borçları hak sahiplerine ödemek.<br/>
                        3.	Para ve parayla ifade edilebilen değerler ile emanetleri almak, saklamak ve ilgililere vermek veya göndermek.<br/>
                        4.	Mali işlemlere ilişkin kayıtları usulüne uygun, saydam ve erişilebilir şekilde tutmak, mali rapor ve tabloları her türlü müdahaleden bağımsız olarak düzenlemek.<br/>
                        5.	Gerekli bilgi ve raporları, Bakanlığa, hizmet verilen ilgili kamu idaresinin harcama yetkilisi ile üst yöneticisine ve yetkili kılınmış diğer mercilere muhasebe yönetmeliklerinde belirtilen sürelerde düzenli olarak vermek.<br/>
                        6.	Vezne ve ambarların kontrolünü ilgili mevzuatında öngörülen sürelerde yapmak.<br/>
                        7.	Muhasebe hizmetlerine ilişkin defter, kayıt ve belgeleri ilgili mevzuatında belirtilen sürelerle muhafaza etmek ve denetime hazır bulundurmak.<br/>
                        8.	Muhasebe yetkilisi mutemetlerinin hesap, belge ve işlemlerini ilgili mevzuatında öngörülen zamanlarda denetlemek veya muhasebe yetkilisi mutemedinin bulunduğu yerdeki birim yöneticisinden kontrol edilmesini istemek.<br/>
                        9.	Hesabını kendinden sonra gelen muhasebe yetkilisine devretmek, devredilen hesabı devralmak.<br/>
                        10.	Muhasebe birimini yönetmek.<br/>
                        11.	Diğer mevzuatla verilen görevleri yapmak.<br/>
                        Muhasebe Yetkilisinin Sorumlulukları<br/>
                        MADDE 14: Muhasebe Yetkilisinin Sorumlulukları şunlardır.<br/>
                        1.	Muhasebe kayıtlarının usulüne uygun saydam ve erişilebilir şekilde tutulmasından<br/>
                        2.	Mutemetleri aracılığıyla aldıkları ve elden çıkardıkları para ve parayla ifade edilen değerler ile bunlarda meydana gelebilen kayıtlardan<br/>
                        3.	Ön ödeme ile kesin ödemelerin yapılması ve ön ödemelerin mahsubu aşamalarından ödeme emri belgesi ve eki belgelerin usulünce incelenmesi ve kontrolünden<br/>
                        4.	Yersiz ve fazla tahsil edilen tutarların ilgililerine geri verilmesinde geri verilecek tutarın düzenlenen belgelerde öngörülen tutara uygun olmasından<br/>
                        5.	Ödemelerin ilgili mevzuatın öngördüğü öncelik sırasında göz önünde bulundurularak muhasebe kayıtlarına alınma sırasına göre yapılmasından<br/>
                        6.	Rücu hakkı saklı kalmak kaydıyla kendinden önceki muhasebe yetkilisinden hesabı devralırken göstermediği noksanlıklardan<br/>
                        7.	Muhasebe mutemetlerinin hesap, belge ve işlemlerinin ilgili mevzuatına göre kontrol etmekten<br/>
                        8.	Yetkili mercilere hesap vermekten sorumludurlar.<br/>
                        <br/>
                        Şef, Memur ve İşçilerin Görevleri;<br/>
                        <br/>
                        MADDE 15: Şefler: Müdürün direktifleri doğrultusunda müdürlük görevlerinin yürütülmesi ve memurların düzenli, tertipli çalışmasını sağlamakla görevlidir. Memurlar ve işçiler tarafından yapılan işleri kontrol eder, işlemlerin eksiksiz ve zamanında yapılmasını sağlar. Çeşitli unvanlardaki memur ve işçi personel: üstlerinin yaptığı görev bölümüyle kendisine verilen işleri mevzuata uygun olarak tam ve zamanında yapmakla görevlidir<br/>
                        <br/>
                        ÜÇÜNCÜ BÖLÜM<br/>
                        Hizmet ve Görevlerin İcrası, İşbirliği ve Koordinasyon<br/>
                        <br/>
                        <br/>
                        <br/>
                        Hizmetlerin icrası<br/>
                        MADDE 16: Mali Hizmetler Müdürlüğündeki hizmetlerin icrası aşağıda gösterilmiştir.<br/>
                        1.	Görevin kabulü: Müdürlüğe gelen evrak bilgisayara işlenir, Müdür evrakları ilgili Şefliklere havale eder, havale edilen evraklar zimmet defterine kaydedilerek ilgili şefliklere verilir.<br/>
                        2.	Görevin planlanması: Mali Hizmetler Müdürlüğündeki çalışmalar, Müdür ve ilgili Şef tarafından düzenlenen plan içerisinde yürütülür.<br/>
                        3.	Görevin İcrası: Mali Hizmetler Müdürlüğü tüm personeli kendilerine verilen görevleri gereken özen ve süratle yapmak zorundadır.<br/>
                        <br/>
                        İşbirliği ve koordinasyon<br/>
                        MADDE 17:  Belediye birimleri arasında ve birim içi işbirliği ve koordinasyon<br/>
                        <br/>
                        1.	Mali Hizmetler Müdürlüğü ile diğer birimler arasında ve birim içi koordinasyon Müdür tarafından sağlanır.<br/>
                        2.	Mali Hizmetler Müdürlüğüne gelen tüm yazılar kayıt memurunda toplanır, konularına göre dosyalandıktan sonra Müdür’e verilir.<br/>
                        3.	Mali Hizmetler Müdürü dosyadaki evrakları havale eder ve şefliklere iletir.<br/>
                        4.	Şefliklerde görevli personel evrakları niteliğine göre inceler ve sonuca ulaştırır.<br/>
                        <br/>
                        Diğer kuruluşlarla koordinasyon<br/>
                        MADDE 18: Mali Hizmetler Müdürlüğü, Valilik ve tüm kamu kurum ve kuruluşları ile özel ve tüzel kişilerle yapacağı yazışmalar, sorumlu personel, Şef ve Müdürün parafı ile Belediye Başkanı ve/veya ilgili Başkan Yardımcısı imzası ile yürütülür.<br/>
                        <br/>
                        <br/>
                        <br/>
                        DÖRDÜNCÜ BÖLÜM<br/>
                        Denetim ve Disiplin<br/>
                        <br/>
                        Müdürlük içi denetim<br/>
                        MADDE 19:<br/>
                        <br/>
                        1.	Personel en yakın amirinden başlayarak denetime tabi tutulur.<br/>
                        2.	Mali Hizmetler Müdürü; Müdürlüğün tüm personelini her zaman gerek gördüğünde denetlemek ve ilgilileri yönlendirmek yetkisine sahiptir.<br/>
                        <br/>
                        Disiplin cezaları<br/>
                        MADDE 20: Mali Hizmetler Müdürlüğü çalışan tüm personelle ilgili disiplin işlemlerini 657 sayılı Devlet Memurları Kanunu ile 4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun hükümlerine ve yürürlükteki ilgili diğer mevzuata uygun olarak yürütür.<br/>
                        <br/>
                        <br/>
                        BEŞİNCİ BÖLÜM<br/>
                        Çeşitli ve Son Hükümler<br/>
                        <br/>
                        Yönetmelikte yer almayan hususlar<br/>
                        MADDE 21: İş bu yönetmelikte yer almayan hususlarda yürürlükteki ilgili umumi hükümler çerçevesinde hareket edilir.<br/>
                        <br/>
                        Yürürlük<br/>
                        MADDE 22: Bu yönetmelik Belediye Meclisi tarafından onaylanmasını takiben 3011 sayılı kanun doğrultusunda ilan edildiği tarihte yürürlüğe girer.<br/>
                        <br/>
                        Yürütme<br/>
                        MADDE 23: (1) Bu yönetmelik hükümlerini Belediye Başkanı yürütür.<br/>
                    </p>
                </section>
                <section id="bolum2" className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
                    <h3 className="text-lg font-bold text-center"></h3>
                    <p className="text-gray-700 text-left">
                        1977 yılında Erzurum’un Şenkaya ilçesinde dünyaya gelen Bilgin Altay, ilk ve orta okulu Kocaeli’nin Darıca İlçesinde tamamlayarak lise öğrenimine Lafarge Aslan Çimento Teknik Lisesi bilgisayar Bölümü’nden mezun olduktan sonra 2000-2006 yılları arasında Anadolu Üniversitesi  İdari ve İktisadi Bilimler Fakültesi’nin İktisat bölümünde eğitimini tamamladı.
                        1999-2006 yılları arasında Milli Eğitim Müdürlüğü’ne bağlı çeşitli okullarda Bilgisayar Öğretmeni olarak görev yaptı.
                        2006-2007 yılı askeri görevini kısa dönem olarak tamamladıktan sonra 2007-2008 yılları arasında özel  sektörde çeşitli firmalarda üst düzey yönetici olarak çalışma hayatına devam etti.
                        Sosyal hayatta aktif rol alarak sosyal sorumluluk projelerinde ve birçok sivil toplum kuruluşunda önemli görevler üstlendi.
                        2008 yılında Gebze belediyesi Mali Hizmetler Müdürlüğü’nde göreve başlayarak, yine kurum içerisinde Bilgi İşlem Müdürlüğü ve Destek Hizmetleri Müdürlüklerinin ihale birimlerinde görev yaptı.
                        2017 yılından bu yana Mali Hizmetler Müdürü olarak görevine devam etmektedir. Evli ve 3 çocuk babasıdır.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Bilginalatay;
