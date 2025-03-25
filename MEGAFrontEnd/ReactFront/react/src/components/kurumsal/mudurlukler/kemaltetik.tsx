import React from "react";

const Mecitkeskinoglu: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">


            {/* Main Content */}
            <div className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl w-full relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <img
                        src="/images/kurumsal/mudurlukler/avatar-23.jpg"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">Teftiş Kurulu Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" />Kemal TETİK
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" /> teftiş@gebze.bel.tr
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
                    <p className="text-gray-700 text-left">BİRİNCİ KISIM
                        Genel Esaslar
                        <br/>
                        <br/>
                        <br/>
                        Amaç
                        <br/>
                        MADDE 1 – (1) Bu Yönetmeliğin amacı; Gebze Belediye Başkanlığı Teftiş Kurulunun kuruluş, yetki ve sorumluluklarını, çalışma usul ve esaslarını, müfettiş yardımcılarının tabi olacağı sınavlarını, yetiştirilmeleri ve eğitimlerine ilişkin usul ve esaslarını düzenlemektir.
                        <br/>
                        <br/>
                        <br/>
                        Kapsam
                        <br/>
                        MADDE 2 –  (1) Bu yönetmelik, Gebze Belediyesi Teftiş Kurulunun görevlerini, Teftiş Kurulu Müdürü, Müfettiş Ve Müfettiş Yardımcılarının, atanmalarını, görev, yetki ve sorumluluklarını,  çalışma usul ve esaslarını ve Teftiş Kurulu büro personelinin çalışma usul ve esasları ile teftişe tabi olanlarının hal ve sorumluluklarını kapsar.
                        <br/>
                        <br/>
                        <br/>
                        Hukuki Dayanak
                        <br/>
                        MADDE 3 –  (1) Bu Yönetmelik 03/07/2005 tarihli ve 5393 sayılı Belediye Kanununun 48 inci maddesi ile 22/02/2007 tarihli ve 26442 sayılı Resmi Gazetede yayımlanan Belediye ve Bağlı Kuruluşları ile Mahalli İdare Birlikleri Norm Kadro İlke ve Standartlarına Dair Yönetmeliğin 12 inci maddesine dayanılarak hazırlanmıştır.
                        <br/>
                        Tanımlar ve Kısaltmalar
                        <br/>
                        MADDE 4 – (1) Bu yönetmeliğin uygulanmasında;
                        <br/>
                        a)	Başkan : Belediye Başkanını,
                        <br/>
                        b)	Başvuru formu: Sınava girmek isteyen adayların, Türkiye Cumhuriyeti kimlik numarası, hangi yabancı dilden sınava gireceğini, sınavla ilgili kendisine yapılacak bildirimlerin gönderilmesini istediği posta ve  e-posta adresini üzerinde işaretleyip veya yazılı beyan edeceği şekilde idarece düzenlenen ve aday tarafından doldurulup imzalanacak olan formu,
                        <br/>
                        c)	Belediye: Gebze Belediyesini,
                        <br/>
                        ç)  Birim amiri: Belediye hizmet birimlerinin en üst amirlerini,
                        <br/>
                        d)	Birim: Belediye hizmet birimlerini,
                        <br/>
                        e)	Büro: Teftiş Kurulu Müdürlüğü bürosunu,
                        <br/>
                        f)	Giriş  sınavı: Yazılı ve sözlü sınavdan oluşan müfettiş yardımcılığı giriş sınavını,
                        <br/>
                        g)	Görev standartları: Görevlerin amacına uygun şekilde, verimli, etkin ve uygulama birliği içinde, etik ilkeler gözetilerek gerçekleştirilmesini temin etmek, görev sonuçlarının adil ve güvenilir olmasını sağlamak, görevlerin kalite kontrol, görevlilerin ise performans bakımından değerlendirilmesine zemin hazırlamak maksadıyla müfettişlerce uyulması gereken genel ilke ve kuralları tespit amacıyla kurul müdürlüğünün teklifi ve başkanın onayı ile uygulamaya konulan teftiş kurulu görev standartlarını,
                        <br/>
                        ğ) İşletme: Belediyenin görev ve sorumluluk kapsamında bulunan özel gelir ve giderleri olan hizmetleriyle ilgili olarak İçişleri Bakanlığı İzni ile kurulan bütçe içi işletmeleri,
                        <br/>
                        h)	Kamu Personel Seçme Sınavı (KPSS): 18/03/2002 tarihli ve 2002/3975 sayılı Bakanlar Kurulu Karan ile kabul edilen, Kamu Görevlerine İlk Defa Atanacaklar için Yapılacak Sınavlar Hakkında Genel Yönetmelikte (A) grubu olarak adlandırılan kadrolara atanacaklar için kurumların kendi mevzuatlarına göre düzenleyecekleri giriş sınavına kabul edilecekleri belirlemek amacıyla kullanılacak olan puanları sağlayan merkezi sınavı,
                        <br/>
                        ı)  Kurul Müdürü: Gebze Belediyesi Teftiş Kurulu Müdürünü,
                        <br/>
                        i)	Kurul: Gebze Belediyesi Teftiş Kurulunu,
                        <br/>
                        j)  Müfettiş: Gebze Belediyesi müfettişlerini,
                        <br/>
                        k) Müfettiş yardımcısı: Bağımsız olarak denetim ve soruşturma yapmaya yetkili olan veya olmayan müfettiş yardımcılarını,
                        <br/>
                        l)  ÖSYM: Ölçme, Seçme ve Yerleştirme Merkezini,
                        <br/>
                        m) Refakat müfettişi: Kurul müdürüne yardımcı olmak üzere görevlendirilen müfettişleri,
                        <br/>
                        n) Yeterlik sınavı: Müfettiş yardımcılarına üç yılın sonunda yapılan yazılı ve sözlü sınavı,
                        <br/>
                        o) Yetkili merci: 02/12/1999 tarihli ve 4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanuna göre izin vermeye yetkili mercii,
                        ifade eder.
                        <br/>
                        <br/>
                        <br/>
                        İKİNCİ BÖLÜM
                        <br/>
                        Kurulun Yapısı ve Bağlılık
                        <br/>
                        <br/>
                        <br/>
                        Kurulun Yapısı
                        <br/>
                        MADDE 5 - (1) Kurul, bir Müdürle Norm kadroda gösterilen Müfettiş ve Müfettiş yardımcısından oluşur.
                        <br/>
                        (2) Kurulun büro işleri müdürlük bünyesinde bulunan kalemde görevli diğer personel tarafından yürütülür.
                        <br/>
                        <br/>
                        <br/>
                        Bağlılık
                        <br/>
                        MADDE  6 - (1) Kurul doğrudan Belediye Başkanına bağlıdır.
                        <br/>
                        (2) Müfettişler; Teftiş, İnceleme ve soruşturmalarını Başkan adına yaparlar.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        İKİNCİ KISIM
                        <br/>
                        <br/>
                        <br/>
                        BİRİNCİ BÖLÜM
                        <br/>
                        Teftiş Kurulu
                        <br/>
                        <br/>
                        <br/>
                        Teftiş Kurulu Müdürlüğünün Görev, Yetki ve Sorumlulukları
                        <br/>
                        MADDE 7 - (1) Teftiş Kurulu, Başkanın onayı üzerine Başkan adına aşağıdaki görevleri yapar.
                        <br/>
                        <br/>
                        <br/>
                        a) 10/12/2003 tarih ve 5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu uyarınca İç Denetçilerin görev alanına giren işler hariç, Belediyenin yönetimi ve denetimi altındaki kişi ve birimler ile her türlü iş ve işlemleri ve etkinlikleriyle ilgili olarak teftiş, denetim ve soruşturma işlemlerini yürütmek.
                        <br/>
                        <br/>
                        <br/>
                        b)	Kamu hizmetlerinin geliştirilip etkinleştirilmesini, verimlilik ve performansın artırılmasını, Belediyenin mevzuat, plan, program ve projelere uygun çalışmasını sağlamak amacıyla araştırmalar yaparak gerekli görüş ve öneriler hazırlayıp Belediye Başkanına sunmak,
                        <br/>
                        c)	Gerektiğinde, Belediye hizmetlerinde performans, etkinlik ve verimliliğin artırılması için üretilecek politika, proje ve hizmet standartlarının oluşumuna katılmak,
                        <br/>
                        ç) İnceleme ve Teftişin etkin bir şekilde yürütülmesini sağlamak amacıyla genel prensipleri tespit etmek ve personelin çalışmalarını teşvik edici teftiş sistemini geliştirmek,
                        <br/>
                        d)  Belediye birimlerinde özel teftiş ve denetim yapmak,
                        <br/>
                        e) Müfettişlerin çalışmaları neticesinde düzenledikleri raporu inceleyip değerlendirmek, Kurul Müdürlüğü görüşü ile birlikte Başkana sunmak,
                        <br/>
                        f)  Müfettişlerin mesleki gelişimini sağlamaya yönelik çalışmalar yürütmek,
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        (2) 02/12/1999 tarih ve 4483 sayılı Memurlar ve Diğer Kamu  Görevlilerinin Yargılanması Hakkında Kanun hükümlerine veya 10/06/1949 tarihli ve 5442 sayılı İl İdaresi Kanun hükümlerine göre Vali veya Kaymakam, 02/12/1999 tarih ve 4483 sayılı Kanunun 5 inci maddesinin 3 üncü fıkrası gereği müfettişlere verilen araştırma ve/veya inceleme görevlerinin yasal süreleri içerisinde tamamlattırılmasını ve gereği için adı geçen Kanuna göre karar alınmak üzere yetkili mercie gönderilmesini sağlamakla görevli ve yetkilidir.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        İKİNCİ BÖLÜM
                        <br/>
                        Tefti ş Kurulu Müdürünün Atanması,
                        <br/>
                        Görev, Yetki ve Sorumlulukları
                        <br/>
                        <br/>
                        <br/>
                        Kurul Müdürünün Atanması
                        <br/>
                        MADDE 8 - (1) Teftiş Kurulu Müdürü, Başkan tarafından bakanlıklar ile bunların bağlı ve ilgili kuruluşlarının merkez teşkilatı ile belediye, idare ve diğer belediyelerde mesleğe özel yarışma sınavı ile girmiş ve yeterlik sınavı sonucunda denetim elemanlığına atanmış, yardımcılık dönemi de dahil olmak üzere en az 10 yıl denetim elemanı olarak çalışmış olan ve 14/07/1965 tarihli ve 657 sayılı Devlet Memurları Kanununun 68/B maddesi hükümlerine göre bu kadroya atanma şartlarını ve bu yönetmeliğin 23 üncü maddesinin birinci fıkrasının (c) bendinde öngörülen eğitim şartlarını taşıyanlar arasından atanır.
                        <br/>
                        <br/>
                        <br/>
                        Görev, Yetki ve Sorumlulukları
                        <br/>
                        MADDE 9 - (1) Kurul Müdürü Başkan adına aşağıdaki görevleri yapar.
                        <br/>
                        a)	Teftiş Kurulu Müdürlüğünün 7 inci maddede sıralanan görevlerini Belediye Başkanının emir ve onayı üzerine Belediye Başkanı adına yürütmek.
                        <br/>
                        b)	Teftiş Kurulunu yönetmek, müfettiş ve müfettiş yardımcıları ile kurul bürosunun çalışmalarını düzenlemek ve denetlemek,
                        <br/>
                        c)	Belediye Başkanının talebi üzerine yıllık teftiş ve çalışma programı hazırlayıp Belediye Başkanının onayına sunmak, onaylanmış teftiş ve çalışma programını uygulamak.
                        <br/>
                        ç) Belediye Başkanının gerekli gördüğü hallerde bizzat teftiş, denetim, inceleme ve soruşturma yapmak,
                        <br/>
                        d)	Belediye Başkanının teftiş, denetleme, inceleme, araştırma ve soruşturma emirleri üzerine Müfettişleri görevlendirmek ve emirlerin uygulanışını izlemek,
                        <br/>
                        e)	Müfettiş ve Müfettiş yardımcılarının çalışmalarını gerekli gördüğü zamanlarda yerinde denetlemek,
                        <br/>
                        <br/>
                        <br/>
                        f)	Müfettişlerden gelen raporları incelemek, eksikliklerin tamamlanmasını ve yanlışlıkların giderilmesini sağlamak, ilgili yerlere göndermek, ilgililerce alınacak önlemleri ve yapılacak işlemlerin sonuçlarını izlemek ve alınması gereken tedbirlerle ilgili önerilerde bulunmak,
                        <br/>
                        g)	Müfettiş Yardımcılığı giriş sınavı ile müfettişlik yeterlik sınavının yapılmasını ve yürütülmesini sağlamak,
                        <br/>
                        ğ) Müfettiş yardımcılarının Müfettişliğe atanmaları ve Müfettişlerin yükselmelerine ait işlemleri yürütmek,
                        <br/>
                        h) Müfettiş ve Müfettiş yardımcılarının mesleki ve bilimsel çalışmalarını teşvik ve tanzim etmek, hizmet içi eğitimlerini sağlamak,
                        <br/>
                        ı) Müfettiş ve Müfettiş yardımcılarının haberleşme ve idari işlere ilişkin işlemlerini yönetmek,
                        <br/>
                        i) Kurulun çalışmalarına ait yıllık faaliyet raporlarını düzenlemek ve Başkana sunmak,
                        <br/>
                        j) Mevzuatın, Müfettişler arasında değişik yorumlandığı hallerde, görüş ve uygulama birliğinin sağlanması için gerekli tedbirleri almak,
                        <br/>
                        k) Teftiş, inceleme ve soruşturmaların yürütülmesinde, uygulama birliği ve esaslarını belirleyen Teftiş ve soruşturma rehberlerinin hazırlanması ve uygulanmasını sağlamak,
                        <br/>
                        l)  Mevzuat ve Belediye Başkanı tarafından verilecek benzeri görevleri yapmak,
                        <br/>
                        m)  Büro hizmetlerinin düzenli yürütülmesini temin etmek,
                        <br/>
                        n) 09/10/2003 tarihli 4982 sayılı Bilgi Edinme Hakkı Kanunu ile 01/11/1984 tarihli 3071 Sayılı Dilekçe Hakkının Kullanılmasına Dair Kanun hükümleri uyarınca Kurul Müdürlüğüne sunulan dilekçelerin ve bilgi edinme taleplerinin takibini yaptırarak yasal süresi içinde cevaplanmasını sağlamak,
                        <br/>
                        o) 10/12/2003 Tarihli ve 5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu uyarınca harcama yetkilisi görevinden kaynaklanan yetkilerini kullanmak, büro personeli arasından taşınır kayıt ve kontrol yetkilisi görevlendirerek 28/12/2006 tarihli ve 2006/11545 sayılı Bakanlar Kurulu Kararı ile yürürlüğe konulan Taşınır Mal Yönetmeliğine göre iş ve işlemlerin takip ve icrasını sağlamak,
                        <br/>
                        ö) Kurul Müdürü kendisine verilen ve Müdürlüğe ait görevlerin yerine getirilmesinden yürürlükteki mevzuat çerçevesinde Belediye Başkanına karşı sorumludur.
                        <br/>
                        <br/>
                        <br/>
                        Teftiş Kurulu Müdürüne Yardım
                        <br/>
                        MADDE 10 - (1) Teftiş kurulu Müdürü Belediye Başkanının onayı ile kendisine yardımcı olmak üzere yeter sayıda Müfettişi Refakat Müfettişi olarak görevlendirebilir.
                        <br/>
                        (2) Refakat Müfettişinin görevleri Müdür tarafından belirlenir ve Teftiş Kuruluna duyurulur.
                        <br/>
                        (3) Refakat Müfettişin görev süresi en fazla 1 yıl olup, süresi dolanlar yeniden görevlendirilebilir.
                        <br/>
                        <br/>
                        Teftiş Kurulu Müdürüne Vekalet
                        <br/>
                        MADDE 11 - (1) Kurul müdürü geçici sebeplerle görevden ayrıldığında veya her hangi bir sebeple Kurul Müdürlüğünün boşalması halinde vekâlet görevi Başkan tarafından, Kurul müdürlüğüne atanma şartlarına haiz Müfettişlerden birine verilir. Bu niteliklere haiz Müfettiş bulunmaması durumunda vekâlet en kıdemli Müfettişe verilir.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        ÜÇÜNCÜ BÖLÜM
                        <br/>
                        Müfettişler
                        <br/>
                        Müfettişlerin Görev, Yetki ve Sorumlulukları
                        <br/>
                        MADDE 12 – (1) Müfettişler, Belediye Başkanının onayı üzerine Belediye Başkanı adına;
                        <br/>
                        <br/>
                        <br/>
                        a)	Gebze Belediyesi merkez birimleri ile bağlı kuruluşların çalışmalarını, işlemlerini teftiş etmek ve denetlemek.
                        <br/>
                        b)	Teftiş ve inceleme sırasında öğrenmiş oldukları ve görev emrinin dışında kalan yolsuzluklar hakkında gecikmeden durumu hemen yazılı olarak Kurul Müdürüne bildirmek.
                        <br/>
                        c)	Mevzuatın uygulanmasından doğan sonuçlar üzerinde inceleme yaparak görülecek yanlışlık ve eksikliklerin giderilmesi ve düzeltilmesi yollarını araştırmak ve işlerin istenen seviyede yürütülmesini sağlamak için alınması gereken tedbirleri ve düşüncelerini bir raporla Kurul Müdürüne sunmak.
                        <br/>
                        ç) Çeşitli konularda yurt içinde ve dışında araştırmalar yapmak, görevlendirildikleri komisyon, kurs, seminer ve toplantılara katılmak ve bu görevlendirmeler sonucunda elde ettikleri bilgi belge ve görüşleri rapor haline getirerek Kurul Müdürüne sunmak.
                        <br/>
                        d)	Mevzuat ile ilgili çalışmalar ve Başkanca verilecek diğer görevleri yapmak,
                        <br/>
                        e)	Personelin görev ve memuriyet sıfatlarıyla ilgili olayları Başkan adına incelemek ve gerekli soruşturmaları yapmak.
                        <br/>
                        f)	Kanun, tüzük ve yönetmeliklerle verilen diğer görevleri yapmak.
                        <br/>
                        g)	10/12/2003 tarih ve 5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu uyarınca iç denetçilerin görev alanına giren işler hariç, Belediyenin / idarenin, yönetimi ve denetimi altındaki birimlerin faaliyetleri ile her türlü iş ve işlemleri ve etkinlikleriyle ilgili  olarak teftiş, inceleme ve soruşturma işlemlerini yürütmek,
                        <br/>
                        ğ) Yürütülen inceleme veya soruşturmanın gerektirdiği hallerde, ilgili kişi, kurum veya kuruluşlardan her türlü bilgi, belge ve kayıtları istemek, bilgi toplamak,
                        <br/>
                        h) Teftiş, inceleme ve soruşturma görevlilerinin gerektirdiği hallerde, Belediyenin birimlerindeki görevlilerin muhafazasına verilmiş olan ayni, nakdi, menkul ve gayrimenkul her türlü varlıklara ilişkin sayım yapmak, bunlara ait gizli olsun veya olmasın her türlü evrak, dosya, vesika veya elektronik, manyetik ve benzeri bilgi işlem ortamındaki verileri tetkik etmek veya almak gerektiğinde tasdikli örneklerini bırakmak suretiyle belgelerin asıllarını almak,
                        <br/>
                        ı) Mevzuat çerçevesinde ilgili personelin görevden uzaklaştırılmasını Başkana teklif etmek,
                        <br/>
                        i) Görevlerinin yürütülmesi sırasında görev konusu dışında öğrendikleri yolsuzlukları ve usulsüz uygulamaları gecikmeden incelemeye başlayabilmek üzere durumu derhal Kurul Müdürlüğüne bildirmek, gecikmesinde zarar umulan ve delerlin kaybına meydan verebilecek hallerde delilleri toplamak,
                        <br/>
                        j) Refakatlerinde çalışan müfettiş yardımcılarının yetiştirilmesini sağlamak ve haklarında refakat döneminin bitimini takip eden bir hafta içinde Kurul Müdürlüğünce belirlenen formata uygun olarak Müfettiş Yardımcısı Değerlendirme Raporu düzenlemek,
                        <br/>
                        k) İlgili mevzuat çerçevesinde Kurul Müdürü tarafından rehberlik ve teftiş hizmetleri ile ilgili olarak verilen benzer işleri yapmak,
                        <br/>
                        <br/>
                        <br/>
                        görev ve yetkilerine haizdirler.
                        <br/>
                        <br/>
                        <br/>
                        (2) Müfettişler, kanun, tüzük ve yönetmeliklerle kendilerine tanınan yetkileri tam olarak kullanmaktan, görevlerini eksiksiz yerine getirmekten sorumludurlar.
                        <br/>
                        (3) Müfettiş yardımcılarının yetkilerini kullanabilmeleri ya da bağımsız olarak görev yapabilmeleri, bu yönetmelikle belirlenen yetişme süresi sonunda, kendilerine yetki verilmesiyle mümkündür.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Görevlendirme
                        <br/>
                        MADDE 13 - (1) Müfettişler, Belediye Başkanının emir ve onayı üzerine Teftiş Kurulu Müdüründen aldıkları talimatla görev yaparlar. Aldıkları görevlerin neticesini Teftiş Kurulu Müdürüne sunarlar. Müfettişlere, Belediye Başkanı ve Kurul Müdürü dışında idareden hiç kimse görev ve emir veremez.
                        <br/>
                        (2) Müfettişler, 02/12/1999 Tarih ve 4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun hükmü gereği, Gebze Kaymakamlık Makamı ve Kocaeli Valilik Makamı tarafından verilen ön inceleme emirlerini yerine getirirler.
                        <br/>
                        <br/>
                        <br/>
                        Müfettişlerin ve Müfettiş Yardımcılarının Uyacakları Hususlar
                        <br/>
                        MADDE 14 -  (1) Müfettişler ve Müfettiş Yardımcıları;
                        <br/>
                        a)	Esas itibariyle teftişin etkin bir şekilde yürütülmesini engelleyen hususlarla, mükerrerlikleri tespit etmek, hadiselerin ekonomik, sosyal, idari ve hukuki sebeplerini, tahlil etmek, verimli çalışmayı teşvike ve yolsuzluklarla usulsüzlüklerin en aza indirilmesine yönelik teftiş usullerini geliştirmek için gerekli tedbirlerin alınmasını göz önünde tutarlar.
                        <br/>
                        <br/>
                        b)	Çalışmaları sırasında rehberlik fonksiyonlarını ön planda tutarak hataları önleyici, aksaklıkları giderici, iş verimini artırıcı, rasyonel ve etkin çalışmayı sağlayıcı, geliştirici ve eğitici olmaya özen gösterirler,
                        <br/>
                        c)	Bulundukları yerlerde görev ve sıfatlarının gerektirdiği saygınlığı ve güven duygusunu sarsacak nitelikte davranışlarda bulunamazlar.
                        <br/>
                        ç) İcraya müdahale edemezler.
                        <br/>
                        d)	Evrak, defter ve kayıtlar üzerine belirli bir döneme ait işlemlerin teftiş edildiğini gösteren tarih ve şerh dışında, ilave ve düzeltme yapamazlar,
                        <br/>
                        e) Teftişe gidecekleri yerleri, yapacakları işleri, görevleri dolayısıyla edindikleri gizli bilgileri ve yazışmalarını, düzenledikleri raporları açığa vuramazlar.
                        <br/>
                        f)	Teftiş, denetim, inceleme ve soruşturmayla görevli bulundukları sırada, bu işlerle ilgili kimselere konuk olamazlar, doğrudan ve dolaylı olarak soruşturma ile ilgili olanların hizmet ve ikramlarını kabul edemezler, bunlarla borç alıp veremezler. Beşeri ve sosyal ilişkilerin gerektirdiği hususlar bu yasakların dışındadır.
                        <br/>
                        g)	Aralarında üçüncü dereceye kadar kan ( üçüncü derece dahil) ve ikinci dereceye kadar kayın (ikinci derece dahil) hısımlık veya çıkar birliği bulunan, yahut tarafsızlığı hakkında kuşku uyandıracak derece uyuşmazlık halleri var olan Belediye Personeli, hakkında denetim işlerine bakamazlar, kendilerine bu tip işlerin verilmesi halinde Kurul Müdürlüğüne bildirirler,
                        <br/>
                        ğ) 14/09/2010 Tarihli ve 27699 sayılı Resmi Gazetede yayımlanan Denetim Görevlilerinin Uyacakları Mesleki Etik Davranış İlkerleri Hakkında Yönetmelik hükümlerine uymak zorundadırlar.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Soruşturma Açılmasını Gerektiren Haller
                        <br/>
                        MADDE 15 - (1) Müfettişler;
                        <br/>
                        a)	Hüviyeti belli kimseler tarafından kişi veya olayların belirtildiği, soyut ve genel nitelikte olmayan, açık adresli, imzalı ve suç teşkil edecek nitelikte iddiaları içeren, ancak iddiaların, sıhhati şüpheye mahal vermeyecek şekilde ortaya konulmuş olması halinde adı soyadı ve imza ile iş veya ikametgah adresinin doğruluğu şartı aranmayan ihbar ve şikayet dilekçelerinde belirtilen konularda,
                        <br/>
                        b)	Denetim ve inceleme sırasında suç sayılan bir eylemi saptamaları halinde,
                        <br/>
                        c)	Başkan tarafından doğrudan talimat verilmesi halinde,
                        <br/>
                        <br/>
                        <br/>
                        soruşturma yapmak ve rapora bağlamakla yükümlüdürler.
                        <br/>
                        <br/>
                        <br/>
                        (2) Birinci fıkranın (a) ve (b) bentleri uyarınca soruşturmaya başlanabilmesi için durumun Kurul Müdürlüğüne belirtilmesi gerekir. Ancak, geciktirilmesinde sakınca görülen veya anında el konulması gereken durumlarda, suç delillerinin saptanması amacıyla, müfettişler tarafından doğrudan doğruya soruşturmaya başlanır, gerekli önlem alınır ve durum kısa sürede Kurul Müdürlüğüne bildirilir.
                        <br/>
                        <br/>
                        <br/>
                        Memurların Görevden Uzaklaştırılması
                        <br/>
                        MADDE 16 - (1) Müfettişler, görevlendirildikleri hususlarla ilgili olarak aşağıdaki şartların gerçekleşmesi halinde ilgilileri usulüne göre görevden uzaklaştırabilirler.
                        <br/>
                        a)	Para ve para hükmündeki evrak ve senetleri, mal ve demirbaş eşyayı, bunların hesaplarını, belge ve defterlerini, her türlü evrakları göstermekten ve soruları cevaplamaktan kaçınan,
                        <br/>
                        b)	Teftiş, inceleme ve soruşturmayı güçleştirecek, engelleyecek veya yanlış yollara sürükleyecek davranışlarda bulunan,
                        <br/>
                        c)	19/04/1990 Tarih ve 3628 sayılı Mal Bildiriminde Bulunulması, Rüşvet ve Yolsuzluklarla Mücadele Kanununun 17 inci maddesi kapsamına giren eylemlerde bulunan,
                        <br/>
                        ç) Evrakta sahtecilik, kayıtlarda tahrifat yapmış olan,
                        <br/>
                        d) Ceza ve disiplin kovuşturmasını gerektirir, görevle ilgili başkaca yolsuzluklarda bulunan veya açıkça ortaya konulması koşuluyla kamu hizmeti gerekleri yönünden görev başında kalmaları sakıncalı görülen,
                        <br/>
                        Personel hakkında, teftiş, inceleme ve soruşturmanın her aşamasında geçici bir önlem niteliğinde olmak üzere görevden uzaklaştırmayı teklif edebilirler. Ancak ilgilinin görevi başında kalmasının sakıncalı olduğunun açık bir biçimde ortaya konması gerekir. Bu hareket ve eylemlerden (a) ve (b) bendinde gösterilenlerin bir tutanakla saptanmış olması şarttır.
                        <br/>
                        (2) Görevden uzaklaştırma işlemi hakkında gereği yapılmak üzere İnsan Kaynakları ve Eğitim Müdürlüğüne bilgi verilir..
                        <br/>
                        (3) Görevden uzaklaştırma tedbirinin uygulandığı soruşturmalar öncelikle ve ivedilikle yürütülür. İlgili birimlerce de bu soruşturmalara ait raporlar üzerine yapılacak işlemlerin diğer işlemlerden öncelikle tamamlanması ve sonuçlandırılması zorunludur.
                        <br/>
                        (4) Soruşturma neticesinde, suçu işlemediği anlaşılan, haklarında yeterli delil bulunmayan memurlar ile disiplin yönünden memurluktan çıkarılmaması veya cezai bir işlem yapılmaması gereken memurlar hakkında görevden uzaklaştırma tedbirinin kaldırılması teklifi, müfettişler tarafından Teftiş Kurulu Müdürlüğü vasıtasıyla Belediye Başkanına bildirilir.
                        <br/>
                        (5) Görevden uzaklaştırma işlemini engelleyen ve bu işlemde ihmali görülen amirler hakkında ayrıca soruşturma yapılır.
                        <br/>
                        <br/>
                        <br/>
                        Birlikte Görev
                        <br/>
                        MADDE 17 - (1) Teftiş, denetim, inceleme ve soruşturma programlarının gruplar halinde uygulanmasında her gruba dahil Müfettişlerden en kıdemlisi o grubun başkanı sıfatıyla çalışmaları düzenler.
                        <br/>
                        (2) Grup başkanları, işe başlarken ve çalışmalarının devamı sırasında teftiş ve tetkiklere verilecek en uygun yönü belirleyip, işlerin seyrini takip ve sonuç alınmasını sağlayabilecek fikir ve tedbirlerin uygulanmasını temin eder.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        İşin Süresinde Bitirilememesi ve İşin Devri
                        <br/>
                        MADDE 18 – (1) Devredilecek işlerle ilgili olarak;
                        <br/>
                        a) Müfettişler, kendilerine verilen işleri ara vermeden Teftiş Kurulu Müdürlüğü’nce belirtilen süreler içinde bizzat yapıp bitirirler.Süresinde tamamlanamayacağı anlaşılan işler hakkında Teftiş Kurulu Müdürlüğüne zamanında bilgi verip alacakları talimata göre hareket ederler.
                        <br/>
                        b)	Müfettişlere verilen işin devredilmemesi asıldır. Geri bırakma ve devir zorunluluğu doğarsa; Müfettişler ellerindeki işleri gerekçesi açıklanmak kaydıyla alınacak yeni bir onayla başka bir Müfettişe devredebilirler.
                        <br/>
                        c)	Devredilecek işler için devri yapacak olan Müfettiş, bir “Devir Notu” hazırlar. En az üç nüsha olarak hazırlanacak devir notuna; Devredilen işin ne olduğu; Devir gününe kadar; işin hangi kısmının ne dereceye kadar incelendiği ve iş hakkında ne gibi görüş ve kanaate varıldığı, hakkındaki düşüncelerini yazar.
                        <br/>
                        (ç) Devredilen işe ait bütün belgeleri sıra numarası altında gösteren dizi pusulasının bir nüshasını, işe ait kayıt ve belgelerle birlikte işi devralan Müfettişe imza karşılığında verir.
                        <br/>
                        (d) Devir notu ve dizi pusulasının ikinci nüshası bir yazı ile devreden Müfettiş tarafından Teftiş Kurulu Müdürlüğüne gönderilir. Üçüncü nüsha devreden Müfettişte kalır.
                        <br/>
                        <br/>
                        <br/>
                        Bilirkişi İncelemesi
                        <br/>
                        MADDE 19 – (1)  İnceleme ve değerlendirilmesi özel bilgi ve yetenek isteyen konuların varlığı halinde konu uzman kurum veya kişilere Müfettiş tarafından incelettirilir. Bunların verecekleri raporlar kanıtlayıcı belge olarak inceleme veya soruşturma raporlarına eklenir.
                        <br/>
                        (2) Bu gibi uzman kurum veya kişilerin ücretleri ile inceleme giderleri fatura veya fatura yerine geçen belgeler karşılığında Belediye Bütçesinden ödenir.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        DÖRDÜNCÜ BÖLÜM
                        <br/>
                        Teftiş Kurulu Bürosu
                        <br/>
                        Kurul Bürosu Personelinin Görev, Yetki ve Sorumlulukları
                        <br/>
                        MADDE 20 – (1) Teftiş Kurulu Müdürlüğü Bürosu, Kurul Müdürüne bağlı yeterli sayıda personelden oluşur.
                        <br/>
                        (2) Kurul Bürosunun görevleri şunlardır:
                        <br/>
                        <br/>
                        <br/>
                        a)	Teftiş Kurulunun her türlü evrak, dosyalama, arşiv ve kütüphane işlemlerini yürütmek,
                        <br/>
                        b)	Müfettişlerden gelen raporları kayıt etmek, ilgili oldukları yerlere sevk işlemlerini yapmak ve sonuçlarını incelemek,
                        <br/>
                        c)	İşlemleri	biten raporların ve evrakların dosyalama işlemlerini yapmak ve muhafaza etmek,
                        <br/>
                        ç) Müfettişlerden gelen çalışma ve hakediş cetvellerinin tahakkuka ait işlemleri yapmak,
                        <br/>
                        d)	Teftiş Kurulunun ayniyat işlemlerini yürütmek,
                        <br/>
                        e)	Teftiş Kurulunun yazışma hizmetlerini yürütmek,
                        <br/>
                        f)	Müfettişlerden gelen raporları gerekli sayıda çoğaltmak, raporları ve diğer evrakı kayıt etmek ve ilgili olduğu yerlere vererek takip etmek.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        g)	Teftiş kurulunun kırtasiye, matbuat ve diğer malzeme ihtiyacının teminine ve Taşınır Mal Yönetmeliği hükümleri çerçevesinde taşınır malları kayıt ve muhafaza etmek, bunlarla ilgili diğer işlemleri yapmak.
                        <br/>
                        ğ) Teftiş Kurulunun yazışmalarıyla, müfettiş, müfettiş yardımcıları ve büro personelinin özlük, diğer idari ve mali ve haberleşme hizmetlerini yürütmek.
                        <br/>
                        h)	Uygulamaya ait mevzuat ve talimatları izleyip saklamak ve bunları müfettiş ve müfettiş yardımcıları ile bütün personele dağıtmak,
                        <br/>
                        ı) Kurul Müdürünün vereceği diğer işleri yapmak,
                        <br/>
                        <br/>
                        <br/>
                        (3) Büroda görev yapan personel; Kurul Müdürü ve Müfettişlere karşı sorumludur. Büro işlerinde gizlilik esastır. Görevleri dolayısıyla edindikleri bilgileri açıklayamazlar. Kurul Müdürü ve Müfettişlerin izni olmadan Belediye Başkanı dışında hiç bir makama evrak ve bilgi veremez ve gösteremezler.
                        <br/>
                        (4) Büro personelinin atanmasında veya görevlendirmesinde Kurul Müdürünün uygun görüşü alınır.
                        <br/>
                        <br/>
                        <br/>
                        ÜÇÜNCÜ KISIM
                        <br/>
                        <br/>
                        <br/>
                        BİRİNCİ BÖLÜM
                        <br/>
                        Gebze Belediyesi Müfettişliğine Giriş
                        <br/>
                        <br/>
                        <br/>
                        Müfettişliğe Giriş
                        <br/>
                        MADDE 21 - (1) Gebze Belediyesi Müfettişliğine, Müfettiş Yardımcısı olarak
                        <br/>
                        girilir. Müfettiş Yardımcılığına atanabilmek için, 03/05/2002 tarih ve 24744 sayılı Resmi
                        <br/>
                        Gazetede yayımlanarak yürürlüğe giren “Kamu Görevine İlk Defa Atanacaklar İçin
                        <br/>
                        Yapılacak Sınavlar Hakkında Genel Yönetmelik” hükümlerine göre yapılacak eleme sınavına katıldıktan sonra, bu yönetmelikte belirlenmiş olan koşullara uygun olanlar arasında A grubu kadrolar için yapılacak Giriş Sınavını kazanmış olmak şarttır.
                        <br/>
                        (2) Giriş sınavı yazılı ve sözlü olmak üzere iki aşamalı bir sınavdır.
                        <br/>
                        (3) Giriş sınavına, KPSS sonuçlarına göre belirlenen adaylardan, açıktan atama izni alınmış kadro sayısının 20 katından fazlası çağrılamaz. Başvuruların bu sayıyı aşması durumunda. KPSS sonuçlarına göre puanı en yüksek olandan düşük olana doğru yapılacak sıralama esas alınır. İstenilen aday sayısına ulaşıldığında son sıradaki adayla aynı puanda olan kişiler de sınava çağrılır.
                        <br/>
                        (4) Müfettiş Yardımcılığı sınavı açılmasına Belediye Başkanının emri ile karar verilir.
                        <br/>
                        <br/>
                        <br/>
                        Müfettiş Yardımcılığı Giriş Sınav Kurulu
                        <br/>
                        MADDE 22 - (1) Müfettiş Yardımcılığına giriş sınavını yapacak kurul; Belediye Başkanının onayı ile Kurul Müdürü başkanlığında, görevlendirilecek dört Müdür veya Müfettiş olmak üzere beş üyeden oluşur. Zorunlu sebeplerden dolayı görev yapamayacak Kurul Başkanı dışındaki asil üyelerin yerine geçmek üzere, aynı usulle dört yedek üye tespit edilir.
                        <br/>
                        (2)	 Giriş sınavı değerlendirme kurulu, sınavların sağlıklı bir şekilde yapılmasını sağlamak ve bu konu da gerekli bütün önlemleri almakla yükümlüdür.
                        <br/>
                        (3)	 Gebze Belediyesi’nde sınav kurulunu oluşturacak yeterli sayıda üye (müfettiş) bulunmadığı takdirde diğer kurumlardan sınav kuruluna üye (Asil/Yedek) görevlendirme talep edilebilir.
                        <br/>
                        (4)	 Giriş sınavı değerlendirme kurulu sekretarya hizmetleri İnsan Kaynakları ve Eğitim Müdürlüğünce yürütülür.
                        <br/>
                        <br/>
                        <br/>
                        Sınav Şartları
                        <br/>
                        MADDE 23 – (1)  Müfettiş Yardımcılığı sınavına katılabilmek için;
                        <br/>
                        a)	14/07/1965 tarihli ve 657 sayılı Devlet Memurları Kanunun 48 inci maddesinde yazılı nitelikleri taşımak.
                        <br/>
                        b)	Sınavın açıldığı yılın Ocak ayının birinci gününde 35 yaşını doldurmamış bulunmak.
                        <br/>
                        c)	Hukuk, Siyasal Bilgiler, İktisat, İşletme, İktisadi ve İdari Birimler Fakültelerinden ya da bunlara denkliği yetkili makamlarca kabul edilen dört yıllık lisans eğitimi veren yurt içi veya yurt dışındaki fakülte veya yüksek okullardan birini bitirmiş olmak.
                        <br/>
                        ç) Askerlik görevini yapmış veya erteletmiş olmak.
                        <br/>
                        d)	İki defadan fazla Müfettiş Yardımcılığı giriş sınavına katılmamış olmak. Müfettiş Yardımcılığı giriş sınavına iki kez girip de kazanamamış olanlar, bir daha bu sınava katılamazlar. Sınavı kazandıkları halde, kazananların alınacak sayıdan fazla olması nedeniyle mesleğe girememiş olanlar, bu maddenin uygulaması bakımından sınava girmemiş sayılır.
                        <br/>
                        e)	Müfettişliğin gerektirdiği karakter, sicil , ifade ve temsil yeteneği, tutum ve davranış yönünden müfettişlik yapabilecek niteliklere sahip bulunmak.
                        <br/>
                        f)	(A) Grubu kadrolar için yapılacak KPSS’ den , sınav duyurusunda belirtilen puan türü ya da türlerinden taban puanı almış olmak.
                        <br/>
                        g)	03/05/2002 tarih ve 24744 sayılı Resmi Gazetede yayımlanarak yürürlüğe giren “Kamu Görevine İlk Defa Atanacaklar İçin Yapılacak Sınavlar Hakkında Genel Yönetmelik” hükümlerine göre yapılacak KPSS na katılmak ve Kuramca yapılacak yazılı ve sözlü sınavda başarılı olmak.
                        <br/>
                        <br/>
                        <br/>
                        (2) Yukarıdaki fıkranın (b) bendinde belirtilen yaş sınırı memuriyet hizmeti olanlar ve lisansüstü öğrenim yapmış olanlar için 35’dir. Askerliğini yapmış olanlar için yaş sınırına askerlik süresi kadar ilave yapılır.
                        <br/>
                        (3) Birinci fıkranın (e) bendinde belirtilen husus, sadece KPSS’ nı kazanan adaylar yönünden söz konusu olup; sözlü sınavdan önce Teftiş Kurulu Müdürlüğü’nce yapılacak incelemeler ile tespit edilir.
                        <br/>
                        <br/>
                        <br/>
                        Giriş Sınavının İlanı
                        <br/>
                        MADDE 24 - (1) Müfettiş yardımcılığı giriş sınavı yapılmasına ihtiyaç duyulması halinde, ilan edilen sayıda aday meslek giriş sınavına alınır. Atama yapılacak kadro sayısı, sınıfı ve dereceleri, sınava katılma şartları, başvuru usulü tarihleri ve yeri, başvuruda istenecek belgeler, sınav tarihi ve yeri, sınava girebilmek için aranan Kamu Personel Seçme Sınavı puan türü ve taban puanı, sınav konuları ve değerlendirme yöntemi ile gerekli görülen diğer hususlar sınav gününden en az otuz gün önce Resmi Gazete’de, Türkiye genelinde yayımlanan tirajı en yüksek ilk beş gazetenin en az birinde ve Belediyenin internet sitesinde, İnsan Kaynakları ve Eğitim Müdürlüğü tarafından duyurulur.
                        <br/>
                        (2) Adayların sınava son başvuru tarihi ve kayıt süresi, yazılı sınav tarihinden en çok on beş gün öncesine kadar devam edecek şekilde tespit olunur.
                        <br/>
                        <br/>
                        <br/>
                        Sınav İşlemleri
                        <br/>
                        MADDE 25 – (1) Yazılı sınava girecek olan adaylar, duyuruda açıklanan süre içinde;
                        <br/>
                        a)	İnsan Kaynakları ve Eğitim Müdürlüğünden temin edecekleri aday formu.
                        <br/>
                        b)	Nüfus cüzdanının aslı veya noterden onaylı örneği.
                        <br/>
                        c)	4.5 x 6 cm boyutlarında iki adet fotoğraf,
                        <br/>
                        ç) Yüksek Öğrenim Kurumu diploması veya mezuniyet belgesinin aslı veya onaylı örneği.
                        <br/>
                        d)	KPSS sonuç belgesinin aslı veya onaylı örneği ile giriş sınavı  duyurusunda belirtilen son başvuru tarihine kadar İnsan Kaynakları ve Eğitim Müdürlüğüne bizzat müracaat etmek zorundadırlar.
                        <br/>
                        <br/>
                        <br/>
                        (2) Sözlü sınava girmeye hak kazanan adaylardan, sınavdan önce ayrıca aşağıdaki belgeler istenir:
                        <br/>
                        <br/>
                        <br/>
                        a)	Tam teşekküllü Devlet Hastanelerinin birinden alınacak sağlık kurulu raporu
                        <br/>
                        b)	Erkek adaylar için, askerlik görevini yaptığını veya tecil durumunu gösterir belgenin aslı veya noterden onaylı örneği.
                        <br/>
                        c)	4.5 x 6 cm boyutlarında 4 adet fotoğraf.
                        <br/>
                        ç) Cumhuriyet Savcılığından alınan sabıka kaydı belgesi.
                        <br/>
                        d)	Aday tarafından el yazısı ile yazılmış ve imzalanmış özgeçmişi.(Bu özgeçmişte; baba ve ana adları ile meslek veya işleri, kendisinin ilk orta ve yüksek öğrenimini yaptığı okullar ve yerleri, kendisi hakkında bilgi verebilecek iki kişinin adı, soyadı ve adresi, yüksek öğrenimden sonra ne gibi işler yaptığı belirtilir.) Aday formu ve eklerinde yer alan bilgilerde gerçeğe aykırı beyanda bulunduğu anlaşılanlar ile ÖSYM tarafından yapılacak kontrol sonucunda KPSS sonuç belgesinde tahrifat yaptığı anlaşılanlar tüm haklarını kaybedecekleri gibi haklarında Türk Ceza Kanunu hükümlerine göre işlem yapılmak üzere yetkili mercilere suç duyurusunda bulunulur.
                        <br/>
                        <br/>
                        <br/>
                        (3) Başvuruların ve birinci fıkrada istenen belgelerin en geç giriş sınavı duyurusunda belirlenen tarih ve saatte, İnsan Kaynakları ve Eğitim Müdürlüğüne elden veya posta yoluyla ya da giriş sınavı duyurusunda belirtildiği takdirde elektronik ortamda teslim edilmesi gerekir. Postadaki gecikmeler ve ilanda belirtilen süre içerisinde yapılmayan başvurular dikkate alınmaz.
                        <br/>
                        <br/>
                        <br/>
                        Yazılı ve Sözlü Sınav Esası ve Yeri
                        <br/>
                        <br/>
                        <br/>
                        MADDE 26 – (1) Aranan nitelikleri taşıyan ve KPSS sonuçlarına göre giriş sınavına çağrılan adaylar, Sınav Kurulunca düzenlenen esaslar dahilinde yazılı ve sözlü sınava tabi tutulurlar.
                        <br/>
                        (2) Sözlü sınava yazılı sınavda başarılı olanlar çağırılır.
                        <br/>
                        (3) Sınava ilişkin diğer esaslara sınav kurulu tarafından karar verilir.
                        <br/>
                        <br/>
                        <br/>
                        Müfettiş Yardımcılığı Giriş Sınavı Adaylık Belgesi
                        <br/>
                        <br/>
                        <br/>
                        MADDE 27 – (1) Müfettiş Yardımcılığı giriş sınavına katılacaklara İnsan Kaynakları ve Eğitim Müdürlüğü tarafından fotoğraflı onaylı, müfettiş yardımcılığına “Sınav Giriş Belgesi” verilir. Sınavlara ancak bu belgenin aslının gösterilmesi suretiyle girilir.
                        <br/>
                        <br/>
                        <br/>
                        Müfettiş Yardımcılığı Giriş Sınavı Konuları
                        <br/>
                        <br/>
                        <br/>
                        MADDE 28 – (1) Müfettiş Yardımcılığı giriş sınavı yazılı ve sözlü olarak yapılır. Yazılı sınavda başarılı olamayanlar sözlü sınava alınmazlar.
                        <br/>
                        (2) Yazılı sınav aşağıda gruplar halinde belirtilen konulardan yapılır.
                        <br/>
                        <br/>
                        <br/>
                        a)	Hukuk;
                        <br/>
                        1)	Anayasa Hukuku (Genel Esaslar),
                        <br/>
                        2)	İdare Hukuku (Genel Esaslar, İdari Kaza, İdari Teşkilat),
                        <br/>
                        3)	Ceza Hukuku (Genel Esaslar),
                        <br/>
                        4)	Ceza Muhakemeleri Usulü Hukuku,
                        <br/>
                        5)	Medeni Hukuk (Aile Hukuku Hariç),
                        <br/>
                        6)	Borçlar Hukuku (Genel Esaslar),
                        <br/>
                        7)	Ticaret Hukuku (Genel Esaslar),
                        <br/>
                        b)	Mahalli İdareler Mevzuatı;
                        <br/>
                        1)	03/07/2005 Tarihli ve 5393 sayılı Belediye Kanunu ve İlgili Mevzuat,
                        <br/>
                        2)	10/07/2004 Tarihli ve 5216 sayılı Büyükşehir Belediye Kanunu ile İlgili Mevzuatı,
                        <br/>
                        c)	Ekonomi;
                        <br/>
                        1)	Genel Ekonomi,
                        <br/>
                        2)	Ekonomi Teorisi,
                        <br/>
                        3)	Ekonomi Politikası,
                        <br/>
                        4)	Para Teorisi ve Politikası,
                        <br/>
                        5)	Uluslar Arası Ekonomi,
                        <br/>
                        6)	Türk Ekonomisi Güncel Ekonomik Sorunlar,
                        <br/>
                        7)	İşletme Ekonomisi,
                        <br/>
                        ç) Maliye;
                        <br/>
                        1)	Genel Maliye,
                        <br/>
                        2)	Kamu Gelirleri,
                        <br/>
                        3)	Maliye Politikaları,
                        <br/>
                        4)	Vergi Hukuku ve Türk Vergi Sistemi,
                        <br/>
                        5)	Bütçe,
                        <br/>
                        d) Muhasebe;
                        <br/>
                        1)	Genel Muhasebe,
                        <br/>
                        2)	Bilanço Analizi,
                        <br/>
                        e)	Yabancı Dil;
                        <br/>
                        1)	İngilizce, Fransızca, Almanca ve Arapça Dillerinden Birisi,
                        <br/>
                        <br/>
                        <br/>
                        (3) Sınav soruları ve her soruya verilecek puanlar ile sınav süresi Sınav Kurulunca saptanır. Hazırlanan sorular Sınav Kurulu üyeleri tarafından imzalanarak mühürlü bir zarf içinde sınavdan bir gün önce Sınav Kurulu Başkanına sunulur.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Yazılı Sınav Sorularının Hazırlanması
                        <br/>
                        MADDE 29 - (1) Yazılı sınav soruları ve cevap anahtarları ile her soruya verilecek puanlar ve sınav süreleri sınav kurulu tarafından sınav konularına göre tespit edilir. Tespit edilen puanlar ve sınav süreleri, sınava giren adaylara duyurulur. Hazırlanan soru kâğıtları ve cevap anahtarları sınav kurulu başkanı ve üyeleri tarafından imzalanır. Her sınava ait soru kâğıtları ayrı ayrı zarflara konularak zarflar kapatılır, üzerine hangi konuya ait sınav soruları olduğu yazılır, arkaları mühürlenip sınav kurulu başkanı ve üyeleri tarafından imzalanır ve ayrı bir zarfa konulacak cevap anahtarları ile birlikte Sınav Kurulu Başkanına teslim edilir.
                        <br/>
                        <br/>
                        <br/>
                        Yazılı Sınavların Yapılış Şekli
                        <br/>
                        MADDE 30 – (1) Yazılı sınavlar, duyurulan yer ve saatte, sınav kurulu tarafından tespit edilen yeterli sayıda sınav gözcüsü nezaretinde başlar ve önceden tespit edilen saatte bitirilir. Sınav başladıktan sonra gelen adaylar sınava alınmazlar.
                        <br/>
                        (2) Sınava giren adayların kimlikleri bir tutanakla tespit edilir. Adaylar yanlarında sınav giriş belgeleri ile birlikte resmi makamlarca verilmiş geçerli bir kimlik belgesini bulundurmak zorundadır
                        <br/>
                        (3) Sınava, içinde sınav soruları bulunan mühürlü zarfın sınava katılanların huzurunda açılması, soruların adaylara dağıtılması veya yazdırılması suretiyle başlanır. Zarfların açılmasına ilişkin bir tutanak, sınav kurulu ve gözcüleri tarafından düzenlenir. Sınava katılan adaylar, soruların cevaplarını, mühürlü cevap kâğıtlarına yazarlar.
                        <br/>
                        (4) Sınav kağıdının adı – soyadı ve aday numarasını içeren bölümün aday tarafından kapatılması zorunludur. Cevap kâğıtlarına, kapatılacak kısım dışında adayların kimliğini belirtecek her hangi bir yazı yazılmaz ve işaret konmaz. Cevap kâğıdına bu şekilde yazı yazan veya işaret koyan adaylarla, sınavda kopya çektiği tespit edilen adaylar hakkında bir tutanak düzenlenerek, sınavları geçersiz sayılır.
                        <br/>
                        (5) Sınav sonunda, toplanan cevap kâğıtları ile tutanaklar bir zarf içerisine konulur ve zarf kapatılıp mühürlenerek imzalandıktan sonra, bu husus ayrı bir tutanakla sınav gözcüleri ve sınav kurulu tarafından tespit edilir
                        <br/>
                        (6) Sınav gözlemcileri ve görevlileri ile sınavı en son terk eden adayında katılımıyla bir sınav durum tespit tutanağı düzenlenir ve imzalanır. Bu tutanak; sınavın tarihi ve yer, sınava başlama ve bitiş saatleri, sınava giren ve girmeyen adaylar, sınav sırasında bir olay olup olmadığı, olmuşsa olayın mahiyeti ile ilgili bilgiler içerir ve sınav kağıtlarının bulunduğu zarfla birlikte giriş sınavı Sınav Kurulu Başkanına teslim edilir.
                        <br/>
                        <br/>
                        <br/>
                        Sınav Kağıtlarının Değerlendirilmesi, Başarının Saptanması
                        <br/>
                        MADDE 31 – (1) Sınav Kurulu Başkanlığınca 100 puan üzerinden verilecek not, kağıdın baş tarafına yazılarak Sınav Kurulu Başkanlığınca imzalanır. Verilen notlar aday sıra numarasına göre düzenlenen cetvellere dökülür.
                        <br/>
                        (2) Yazılı sınavda başarılı sayılabilmek için yabancı dil hariç ,yazılı sınav gruplarından alınan notların her birinin 100 tam puan üzerinden 50’den ve ortalamasının da 70’ ten aşağı olmaması gerekir. Adaylar en yüksek puan alan adaydan başlamak üzere sıralamaya tabi tutulur. İlan edilen boş kadronun dört katı aday yazılı sınavı kazanmış sayılarak sözlü sınava çağrılır. Sonuncu aday ile aynı puanı alan adaylar da kontenjan gözetilmeksizin sözlü sınava çağrılır.
                        <br/>
                        (3) Sınav Kurulu Başkanlığınca yazılı sınav sonuçları bir tutanakla tespit edilir ve imzalanır. Sınavı kazananlara sınavı kazandıkları İnsan Kaynakları ve Eğitim Müdürlüğünce yazılı olarak tebliğ edilir.
                        <br/>
                        <br/>
                        <br/>
                        Sözlü Sınav
                        <br/>
                        MADDE 32 – (1) Yazılı sınavı kazanan adaylar, yazı ile sözlü sınava davet edilirler.
                        <br/>
                        (2) Sözlü sınav adaylara bildirilen yer, gün ve saatte başlar. İlan edilen gün ve saatte, mücbir sebeplerini belgeleyenler dışında sınava girmeyen adaylar haklarını kaybederler. Mazeretlerini sözlü sınavın bitiş tarihinden itibaren en geç üç gün içinde belgeleyenler ve belgesi sınav kurulunca kabul edilenler için 5 işgünü sonra sözlü sınav tekrarı yapılır.
                        <br/>
                        (3) Sözlü sınavda adayların;
                        <br/>
                        <br/>
                        <br/>
                        a) 28 üncü madde belirtilen yazılı sınav konularına ilişkin bilgi düzeyi
                        <br/>
                        b) Bir konuyu kavrayıp özetleme, ifade yeteneği ve muhakeme gücü,
                        <br/>
                        c) Liyakati, temsil kabiliyeti, davranış ve tepkilerinin mesleğe uygunluğu,
                        <br/>
                        ç) Özgüveni, ikna kabiliyeti ve inandırıcılığı,
                        <br/>
                        d) Genel yetenek ve genel kültürü,
                        <br/>
                        yönlerinden değerlendirilerek , ayrı ayrı puan verilmek sureti ile gerçekleştirilir.
                        <br/>
                        <br/>
                        <br/>
                        Sözlü Sınavın Değerlendirilmesi
                        <br/>
                        MADDE 33 – (1) Adaylar sınav kurulu başkanlığı tarafından, 32 inci maddenin üçüncü fıkrasının (a) bendi için elli puan (b), (c), (ç), (d) ve (e) bentlerinde yazılı özelliklerin her biri için onar puan üzerinden değerlendirilir ve verilen puanlar ayrı ayrı tutanağa geçirilir.
                        <br/>
                        (2) Sözlü sınavda adaylara Sınav Kurulu Üyelerinin her biri tarafından 100 tam not üzerinden not verilir. Verilen bu notların ortalaması sözlü sınav notunu oluşturur. Sözlü sınavda başarılı sayılabilmek için alınacak notun 70 den az olmaması zorunludur.
                        <br/>
                        (3) Sınavı kazananların durumu Sınav Kurulu tarafından en yüksek nottan başlanılmak üzere bir tutanağa bağlanır. Notların eşitliği halinde sıralamada KPSS notu esas alınır. Giriş sınavını kazanan adayların listesi başarı sırasına göre hazırlanarak atamaların yapılması için İnsan Kaynakları ve Eğitim Müdürlüğünce Başkanlık Makamına sunulur.
                        <br/>
                        <br/>
                        <br/>
                        Sınav Sonucunun Duyurulması ve Yedek liste
                        <br/>
                        <br/>
                        Sınav Belgelerinin Saklanması ve İtiraz
                        <br/>
                        MADDE 35 – (1) Müfettiş Yardımcılığı giriş sınavında başarılı olup ataması yapılanların sınavla ilgili belgeleri beş yıl, bunun dışındaki sınavla ilgili belgeler beş yılı geçmemek üzere bir sonraki sınav tarihine kadar İnsan Kaynakları ve Eğitim Müdürlüğü arşivinde saklanır.
                        <br/>
                        (2) Giriş sınavı sonuçlarına, sonuçların ilan edildiği tarihten itibaren 5 gün içerisinde Sınav Kuruluna yazılı olarak itiraz edilebilir. İtirazlar Sınav Kurulu tarafından 10 gün içerisinde değerlendirilerek sonuçlandırılır ve sonuç itiraz eden adaylara yazılı olarak bildirilir.
                        <br/>
                        <br/>
                        <br/>
                        İKİNCİ BÖLÜM
                        <br/>
                        Müfettiş Yardımcılarının Atanması ve Yetiştirilmesi
                        <br/>
                        <br/>
                        <br/>
                        Müfettiş Yardımcılığına Atanma ve Kıdem Sırası
                        <br/>
                        MADDE 36 – (1) Giriş sınavında başarı gösterenler başarı sırasına göre boş kadrolara Başkanın onayı ile atanırlar.
                        <br/>
                        (2) Giriş sınavını asıl olarak kazanıp atandığı halde, 14/07/1965 tarihli ve 657 Sayılı Devlet Memurları Kanunun 62 inci maddesinin (b) bendindeki süre içerisinde göreve başlamayanlar için sınav sonuçları kazanılmış hak sayılmaz. Bunların yerlerine sınavı kazanan adaylar arasından başarı sırasına göre atama yapılır.
                        <br/><br/>
                        (3) Giriş sınavında başarılı olup ataması yapılmayanlardan veya ataması yapılıp da herhangi bir sebeple görevden ayrılanlardan boşalan kadroya, sınav sonuçlarının ilanından itibaren altı ay içinde giriş sınavı başarı sıralamasına göre yedek listeden atama yapılabilir.
                        <br/>
                        (4) Müfettiş yardımcılığı kıdeminin belirlenmesinde, giriş sınavındaki başarı derecesi esas alınır. Bu kıdem, müfettiş yardımcılığı süresince geçerlidir.
                        <br/>
                        <br/>
                        <br/>
                        Müfettiş Yardımcılarının Yetiştirilme Amacı
                        <br/>
                        MADDE 37 – (1) Müfettiş Yardımcılığına atananlar üç yıl süreli bir yetişme döneminden geçerler. Bu süre içinde Müfettiş Yardımcılarının;
                        <br/>
                        <br/>
                        <br/>
                        a)	Kişiliklerini mesleğin gerektirdiği niteliklere göre geliştirmek.
                        <br/>
                        b)	Yetki alanına, giren yürürlükteki mevzuat ile teftiş, inceleme ve soruşturma konularında tecrübe ve ihtisas sahibi olmalarını sağlamak,
                        <br/>
                        c)	Mesleki çalışma ve araştırma alışkanlığını kazandırmak,
                        <br/>
                        ç) Yönetim, denetim ve ilgili tüm mevzuatla ilgili gelişmeleri izlemelerini sağlamak.
                        <br/>
                        <br/>
                        <br/>
                        (2) Müfettiş yardımcılarının bu amaçlara göre yetişmelerinde kendi gayret ve çalışmaları esastır. Bu hususta, Teftiş Kurulunca alınan tedbirler yardımcı ve teşvik edici mahiyettedir.
                        <br/>
                        <br/>
                        <br/>
                        Müfettiş Yardımcılığı Dönemi ve Yetiştirme Programı
                        <br/>
                        MADDE 38 – (1) Müfettiş Yardımcıları 21/02/1983 tarihli ve 83/6061 sayılı Bakanlar Kurulu Kararıyla yürürlüğe konulan Aday Memurların Yetiştirilmesine İlişkin Genel Yönetmelik ile bu yönetmelikte belirtilen esaslar dahilinde eğitim ve staja tabi tutulurlar.
                        <br/>
                        (2) Müfettiş Yardımcıları 3 yıllık yardımcılık döneminde aşağıdaki programa göre yetiştirilir. Hastalık ve askerlik gibi zorunlu nedenlerle 3 yıllık süreyi kesintiye uğratan müfettiş yardımcılarının yetiştirme programından ayrı kaldıkları süreler 3 yıllık süreye eklenir.
                        <br/>
                        (3) Birinci Dönem Çalışmaları: En fazla altı ay süren bu dönemde, Kurul Müdürlüğünce hazırlanan bir eğitim programı çerçevesinde, Belediyenin faaliyet konuları ve Teftiş Kurulunun görev alanları ile ilgili her türlü mevzuat ile teftiş, inceleme, araştırma ve soruşturma usul ve esaslarının öğretilmesi amacıyla hizmet içi eğitim verilir.Bu eğitim sürecinde ve sonunda eğiticiler tarafından sınavlar yapılır bu sınavlar sonucunda 100 tam puan üzerinden alınan notların ortalaması birinci dönem çalışma notu sayılır.
                        <br/>
                        (4) İkinci Dönem Çalışmaları:
                        <br/>
                        <br/>
                        <br/>
                        a) En az 18 ay süren bu dönemde, Müfettişlerin refakatinde teftiş, inceleme, araştırma ve soruşturmalarda görevlendirilmek suretiyle, teftiş, inceleme, araştırma ve soruşturma yöntemlerini, mevzuat ve uygulamayı yeterli derecede öğrenmelerini sağlayacak şekilde programlar düzenlenir. Müfettiş yardımcılarının kaydettikleri gelişmeler ile genel tutum ve davranışları hakkında Müfettiş Yardımcısı Değerlendirme Raporu düzenlenir.
                        <br/>
                        b) Müfettiş yardımcıları bu dönemde, refakatinde bulundukları Müfettişin denetim ve gözetimi altında olup, kendilerine verilen görevleri Müfettişlerin talimatlarına göre yerine getirirler. Resen inceleme, teftiş ve soruşturma yapamaz ve rapor düzenleyemezler.
                        <br/>
                        c) Refakatine Müfettiş Yardımcısı verilen Müfettişler, kendilerine verilen görevlerle ilgili çalışmaları yaparak ve/veya yaptırarak Müfettiş yardımcılarını yetiştirirler.
                        <br/>
                        ç) Müfettiş Yardımcıları Değerlendirme Raporunda; ahlak durumu, meslek genel durumu, müfettişlik yeteneği, meslek bilgisi olmak üzere dört nitelikten her biri için müfettiş yardımcısına “çok iyi” (90-100), “iyi” (70-89), “orta” (60-75), “yetersiz” (0-59) notlarından biri verilir. Bunlardan ikisinin “yetersiz” olması halinde değerlendirme raporu olumsuz sayılır. Olumsuz değerlendirme raporu düzenleyen müfettişin yazılı gerekçe belirtmesi şarttır.
                        <br/>
                        d) Refakat Müfettişinin hakkında olumsuz değerlendirme raporu düzenlediği müfettiş yardımcısının müfettişliğe yeterli olmadığı saptanmış olur. Bu durumda olanlar hakkında bu yönetmeliğin 40 ıncı maddesine göre işlem yapılır.
                        <br/>
                        e) Müfettiş Yardımcısı Değerlendirme Raporlarında verilen notların ortalaması  ikinci dönem çalışma notu sayılır.
                        <br/>
                        <br/>
                        <br/>
                        (5)	 Üçüncü Dönem Çalışmaları:
                        <br/>
                        <br/>
                        <br/>
                        a) En az iki yıllık birinci ve ikinci dönem çalışmalarını başarıyla tamamlayan Müfettiş yardımcılarına, Refakatlerinde çalıştıkları Müfettişlerin ve Kurul Müdürünün vereceği yetişme notların ortalaması 100 tam puan üzerinden en az 70 olduğu anlaşılanlara resen teftiş, inceleme ve soruşturma yetkisi verilir.
                        <br/>
                        b)	Birinci ve ikinci dönem çalışmalarını başarıyla tamamlayan Müfettiş yardımcılarının, Belediyenin görev alanına giren konularda Kurul Müdürlüğünce belirlenecek bir etüt raporu - hazırlamaları ve bu raporu üç yıllık yetişme süresinin bitiminden en az üç ay önce Teftiş Kurulu Müdürlüğüne teslim etmeleri şarttır.
                        <br/>
                        <br/>
                        <br/>
                        Müfettiş Yardımcılarına Yetki Verilmemesi
                        <br/>
                        <br/>
                        <br/>
                        MADDE 39 – (1) Resen teftiş, inceleme ve soruşturma yetkisi verilmeyen Müfettiş yardımcılarına, eksik görülen hususları Kurul Müdürlüğünce yazılı olarak bildirilir ve durumları üçer aylık dönemlerde izlenerek 37 inci maddenin 1 fıkrasının (c) bendinde belirtilen değerlendirmeye tabi tutulurlar. Bu değerlendirmede başarılı olamayanlara yeterlilik sınavına kadar yetki verilmez.
                        <br/>
                        <br/>
                        <br/>
                        Müfettiş Yardımcılarının Teftiş Kurulundan Çıkartılması
                        <br/>
                        <br/>
                        <br/>
                        MADDE 40 – (1) Müfettiş yardımcılığı döneminde Müfettişlik karakter ve vasıfları ile bağdaşmayacak tutum ve davranışları sabit olanlar yeterlilik sınavına tabi tutulmadan, Teftiş Kurulu Müdürü ve müfettişlerce düzenlenecek bir durum tutanağı ile Kuruldan çıkarılarak, durumlarına uygun bir başka göreve atanırlar.
                        <br/>
                        <br/>
                        <br/>
                        ÜÇÜNCÜ BÖLÜM
                        <br/>
                        Yeterlilik Sınavı ve Müfettişliğe Atanma
                        <br/>
                        <br/>
                        <br/>
                        Müfettişlik Yeterlik Sınavı ve Sınav Kurulu
                        <br/>
                        MADDE 41 – (1) Müfettiş yardımcıları, üç yıllık yetişme dönemi sonunda, yeterlik sınavına tabi tutulurlar. Yeterlik sınavına girebilmek için;
                        <br/>
                        <br/>
                        <br/>
                        a)	Üç yıllık Müfettiş Yardımcılığı dönemini fiilen başarılı olarak tamamlamış olmak.
                        <br/>
                        b)	Yetişme notunun 100 tam puan üzerinden en az 70 olması zorunludur.
                        <br/>
                        <br/>
                        <br/>
                        (2) Yeterlik sınavı, bu yönetmeliğin 22 inci maddesine göre oluşturulan sınav kurulu tarafından yazılı ve sözlü olmak üzere iki aşamada yapılır. Yazılı sınavda başarılı olamayanlar sözlü sınava alınmazlar.
                        <br/>
                        (3) Yazılı sınavın tarihi ve yeri, sınavdan en az bir ay önce, sözlü sınavın tarihi ve yeri ise sınavdan en az beş gün önce sınava gireceklere İnsan Kaynakları ve Eğitim Müdürlüğünce bildirilir.
                        <br/>
                        (4)Yeterlik sınavının yapılışında bu yönetmeliğin sınavla ilgili hükümleri uygulanır.
                        <br/>
                        <br/>
                        <br/>
                        Yeterlik Sınavı Konuları
                        <br/>
                        MADDE 42 – (1) Yeterlik sınavı Sınav Kurulunca belirlenecek esaslara göre yazılı ve sözlü olmak üzere iki aşamada ve aşağıda belirtilen dört gruptan ve bu gruplardan seçilecek konulardan yapılır.
                        <br/>
                        <br/>
                        <br/>
                        a)	Mahalli idareler mevzuatı ve uygulamaları ile bağlı idarelerin kuruluş kanunları,
                        <br/>
                        b)	Teftiş, inceleme ve soruşturma yöntem ve teknikleri ile ilgili mevzuat;
                        <br/>
                        1)	Teftiş, inceleme, ön inceleme ve soruşturma usulleri,
                        <br/>
                        2)	Raporlama usulleri ve yazım becerisi,
                        <br/>
                        3)	26/09/2004 Tarih ve 5237 sayılı Türk Ceza Kanunun genel hükümleri ile kamu görevlilerine özgü suçlara ilişkin hükümleri,
                        <br/>
                        4)	Ceza Mahkemeleri Usulü Hukuku,
                        <br/>
                        5)	19/04/1990 Tarih ve 3628 sayılı Mal Bildiriminde Bulunulması, Rüşvet ve Yolsuzluklarla Mücadele Kanunu,
                        <br/>
                        6)	02/12/2003 Tarih ve 4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun ve uygulaması,
                        <br/>
                        7)	Belediye Teftiş Kurulu Yönetmeliği ve uygulaması,
                        <br/>
                        c)	Hukuk;
                        <br/>
                        1)	Devlet teşkilatı ile ilgili mevzuat,
                        <br/>
                        2)	İdare Hukuku ve İdari Yargılama Usul Hukuku
                        <br/>
                        3)	14/07/1965 Tarihli ve 657 sayılı Devlet Memurları Kanunu,
                        <br/>
                        4)	22/05/2003 Tarihli ve 4857 Sayılı İş Kanunu,
                        <br/>
                        5)	21/07/1953 tarihli ve 6183 sayılı Amme  Alacaklarının Tahsil Usulü Hakkındaki Kanun,
                        <br/>
                        6)	Vergi Hukuku,
                        <br/>
                        7)	08/09/1983 Tarihli ve 2886 sayılı Devlet İhale Kanunu,
                        <br/>
                        8)	04/01/2002 Tarihli ve 4734 sayılı Kamu İhale Kanunu ve ilgili mevzuat,
                        <br/>
                        9)	05/01/2002 Tarihli ve 4735 sayılı Kamu İhale Sözleşmeleri Kanunu,
                        <br/>
                        10)	03/05/1985 Tarihli ve 3194 sayılı İmar Kanunu ve ilgili mevzuat,
                        <br/>
                        11)	10/12/2003 Tarih ve 5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu ve ilgili mevzuat,
                        <br/>
                        12)	31/05/2006 Tarihli ve 5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu ve ilgili mevzuat,
                        <br/>
                        ç) Muhasebe;
                        <br/>
                        1)	Genel muhasebe,
                        <br/>
                        2)	Bilanço analizi ve teknikleri,
                        <br/>
                        3)	Kurum muhasebesi ve uygulaması.
                        <br/>
                        <br/>
                        <br/>
                        (2) Yazılı sınavda tam not 100 olup, bu sınavda başarılı sayılmak için; alınacak notun 70 olması zorunludur.
                        <br/>
                        (3) Yazılı sınavda başarılı olan Müfettiş Yardımcıları, yazılı sınav tarihinden sonraki beş gün içerisinde Sınav Kurulu tarafından sözlü sınava tabi tutulurlar. Sözlü sınavda, yardımcıların mevzuat bilgilerinin yanı sıra mevzuatın uygulanması hakkındaki bilgi ve becerilerini değerlendirecek tarzda sorular sorulur.
                        <br/>
                        (4) Sözlü sınavda tam not 100 olup bu sınavda başarılı sayılmak için alınacak notun en az 70 olması zorunludur.
                        <br/>
                        <br/>
                        <br/>
                        Yetişme Notu
                        <br/>
                        MADDE 43 – (1) Yetişme notu aşağıda belirtilen konulardan her biri için verilen notlar ortalaması alınarak tespit edilir.
                        <br/>
                        <br/>
                        <br/>
                        a)	Etüt ve İnceleme Notu; Müfettiş Yardımcılarına verilen etüt ve inceleme sonucu düzenledikleri raporlara Kurul Müdürlüğünce verilen not,
                        <br/>
                        b)	Teftiş ve Denetim Notu; Yetkili Müfettiş Yardımcılarının yaptıkları teftiş ve denetim sonunda düzenledikleri raporlara Kurul Müdürlüğünce verilen notlar ortalaması,
                        <br/>
                        c)	Soruşturma Notu; Yetkili Müfettiş Yardımcılarının yaptıkları soruşturma sonunda düzenledikleri raporlara Kurul Müdürlüğünce verilen notlar ortalaması,
                        <br/>
                        ç) Özel Not; Müfettiş Yardımcılarının nitelikleri, tutum ve davranışları, meslek bilgileri, çalışkanlıkları ve mesleki liyakatleri hakkında, yanında çalıştıkları Müfettişler ve Kurul Müdürü tarafından verilen notlar ortalaması, her konudan alınacak notun asgari 70 olması gerekir.
                        <br/>
                        <br/>
                        <br/>
                        (2) Bu notlar 100 tam puan üzerinden verilir.
                        <br/>
                        <br/>
                        <br/>
                        Yeterlik Sınav Notlarının Değerlendirilmesi ve İtirazlar
                        <br/>
                        MADDE 44 – (1) Yeterlik notu; yetişme notu, yazılı sınav ve sözlü sınav notu ortalamasından oluşur. Yeterlik notunun 70’ den aşağı olmaması şarttır.
                        <br/>
                        (2) Yazılı sınav kâğıtları 100 tam puan üzerinden değerlendirilir. Yazılı sınavda başarılı sayılabilmek için yazılı sınav gruplarının her birinden alınan notların en az 65, ortalamasının da en az 70 olması şarttır.
                        <br/>
                        (3) Yazılı sınavda başarılı olan Müfettiş Yardımcıları sözlü sınava tabi tutulurlar. Sözlü sınavda Müfettiş Yardımcılarına Sınav Kurulu üyelerinden her biri 100 tam puan üzerinden puan verir. Verilen puanların ortalaması sözlü sınav puanını oluşturur. Sözlü sınavda başarılı sayılabilmek için bu puanın en az 70 olması şarttır.
                        <br/>
                        (4) En yüksek yeterlik notundan başlayarak bir başarı listesi düzenlenir. Yeterlik sınavında başarılı olanların Müfettişliğe atanmaları yeterli kadro mevcut olmadığı takdirde, başarı sırasına göre yapılır. Notların eşitliği halinde yetişme notu esas alınır.
                        <br/>
                        (5) Yazılı ve sözlü sınav sonuçlarına itirazlar, yazılı ve sözlü sınav sonuçlarının açıklanmasından itibaren yedi iş günü içinde bir dilekçe ile Kurul Müdürlüğüne yapılır. Bu itirazlar, Yeterlik Sınavı Değerlendirme Kurulu tarafından en geç on iş günü içinde incelenir ve sonuç ilgiliye yazılı olarak bildirilir.
                        <br/>
                        <br/>
                        <br/>
                        Yeterlik Sınavını Kazanamayanlar ve Sınava Girmeyenler
                        <br/>
                        MADDE 45 – (1) Yeterlik sınavında başarı gösteremeyenlere yeterlik sınavından itibaren bir yıl içinde bir hak daha verilir.
                        <br/>
                        (2) İkinci yeterlik sınavında da başarı gösteremeyenler ile geçerli bir mazereti olmaksızın yeterlik sınavına girmeyenler hakkında 40 inci madde hükmü uygulanır.
                        <br/>
                        <br/>
                        <br/>
                        Meslek İçi Eğitim
                        <br/>
                        MADDE 46 - (1) Müfettişlerin mesleki bilgi ve beceri seviyelerinin yükseltilmesi, yeteneklerinin geliştirilmesi, moral ve motivasyonlarının arttırılması ve kişisel gelişimleri amacıyla yapılacak eğitimler Kurul Müdürlüğünce planlanır ve uygulanır.
                        <br/>
                        (2)	Ayrıca uygulamada birliğin sağlanması, mesleki tereddütlerin giderilmesi ve sorunların çözüme kavuşturulması için yaptırılan çalışma ve araştırmalardan sonra, Kurul Müdürlüğünce belirlenecek tarih ve yerlerde değerlendirme toplantıları tertip edilebilir.
                        <br/>
                        <br/>
                        <br/>
                        Yabancı Dil Eğitimi
                        <br/>
                        MADDE 47- (1) Müfettişlerin, meslekleriyle ilgili inceleme ve araştırma yapmak uluslararası toplantılara katılma, mahalli idareler alanında yabancı yayınları izleme ve inceleme olanağına kavuşabilmelerini sağlamak amacıyla, yabancı dil öğrenimi için dil kurslarından yararlanmaları halinde, eğitim masrafları genel hükümlere göre Belediye tarafından karşılanır. Yabancı dil kurslarına katılacak olanlar Kurul Müdürlüğünün teklifi ve Başkanın onayı ile belirlenir.
                        <br/>
                        <br/>
                        <br/>
                        Yurt Dışında Eğitim ve Yurt Dışına Gönderilme
                        <br/>
                        MADDE 48 - (1) Müfettişler, Belediyeyi ilgilendiren konularda inceleme ve araştırma yapmak üzere, 14/07/1965 tarihli ve 657 sayılı Devlet Memurları Kanunu ve 21/01/1974 tarihli ve 7/7756 sayılı Bakanlar Kurulu Kararı ile yürürlüğe konulan Yetiştirilmek Amacıyla Yurt Dışına Gönderilecek Devlet Memurları Hakkında Yönetmelik çerçevesinde yurt dışına gönderilebilirler.
                        <br/>
                        (2) Birinci fıkra uyarınca müfettişlerin yurt dışına gönderilmesinde kıdem esas alınır. Ancak 50 inci madde gereğince müfettişliğe yeniden atananların yurt dışına gönderilme sırası, Kuruldan ayrı kaldıkları süreye göre indirime gidilerek belirlenir.
                        <br/>
                        <br/>
                        <br/>
                        DÖRDÜNCÜ BÖLÜM
                        <br/>
                        Yükselme, Kıdem ve Müfettişlik Güvencesi
                        <br/>
                        <br/>
                        <br/>
                        Müfettişliğe Yükselme
                        <br/>
                        MADDE 49 – (1) Yeterlik sınavını başarı ile verip Müfettişliğe tayin edilenlerin maaş dereceleri itibariyle müteakip terfileri genel hükümlere göre yapılır.
                        <br/>
                        <br/>
                        <br/>
                        Müfettişlerin Kıdemi
                        <br/>
                        MADDE 50 – (1) Müfettişlik kıdemine esas süre, Müfettiş Yardımcılığında, Müfettişlikte, Müfettişlik sıfat ve kadrosunu muhafaza edilmek şartıyla idari görevlerde, ücretli ve ücretsiz tüm kanuni izinlerde geçirilen süredir.
                        <br/>
                        (2) Müfettişlik kıdemine esas süreleri aynı olanlar için kıdem sırası; Müfettiş yardımcıları açısından giriş sınavındaki, Müfettişler için yeterlik sınavındaki başarı derecelerine göre tespit edilir.
                        <br/>
                        (3) Teftiş Kurulu Müdürlüğü yaptıktan sonra Müfettişliğe dönenler, dönemlerinin en kıdemlisi sayılırlar. Aynı dönemde bu durumda birden fazla Müfettiş varsa, bunların kıdem sırasının tespitinde Müfettişlik kıdemi esas alınır.
                        <br/>
                        (4) Müfettişlik sıfatını kazandıktan sonra bu görevden ayrılanlardan Müfettişliğe dönenlerin kıdem sırası da, Müfettişlik kıdem sırası esaslarına göre belirlenir.
                        <br/>
                        <br/>
                        <br/>
                        Müfettişlik Güvencesi
                        <br/>
                        MADDE 51 - (1) Teftiş Hizmetleri diğer idari hizmetlerden ayrı bir kariyer olarak düzenlendiğinden, Müfettişler, Teftiş Hizmetlerinin gerektiği gibi yürütülmesini engelleyecek sıhhi, ahlaki veya mesleki yetersizlikleri bulunduğu hukuki deliller ile saptanmadıkça görevlerinden alınamazlar ve kendi istekleri dışında idari görevlere atanamazlar.
                        <br/>
                        (2) Sıhhi, ahlaki veya mesleki yetersizlik hallerinin, Müfettiş raporu veya yargı kararı ile tevsiki esastır.
                        <br/>
                        <br/>
                        <br/>
                        Kuruldan Ayrılan Müfettişlerin Yeniden Atanmaları
                        <br/>
                        MADDE 52- (1) Belediye içinde veya dışında başka bir göreve atanan ya da istifa ederek ayrılan müfettişler; teftiş kurulunda boş kadro bulunduğu ve meslekten ayrı kaldıkları süre içinde müfettişlik mesleğinin şeref ve onurunu  zedeleyici harekette bulunmadıkları, 02/10/1981 tarihli ve 2531 sayılı Kamu Görevlerinden Ayrılanların Yapamayacakları İşler Hakkında Kanun ile getirilen düzenlemelere aykırı iş ve işlemler yapmadıkları ve teftiş kuruluna yararlı olabilecekleri anlaşıldığı takdirde, Başkanın onayı ile Teftiş Kurulu’na Müfettiş olarak atanabilirler.
                        <br/>
                        (2) Müfettiş Yardımcıları görevden ayrıldıkları takdirde yeniden atanamazlar.
                        <br/>
                        <br/>
                        <br/>
                        Naklen veya Açıktan Belediye Müfettişliğe Geçiş
                        <br/>
                        MADDE  53 - (1) Diğer kamu kurum ve kuruluşlarında mesleğe özel yarışma sınavı ile girmiş ve yeterlilik sınavı sonucu denetim elemanlığına atanmış olanlardan bu yönetmeliğin 23 üncü maddesinin birinci fıkrasının (c) bendinde öngörülen eğitim şartlarını taşıyanlar, giriş sınavına tabi tutulmaksızın naklen veya açıktan belediye müfettişliğine atanabilirler.
                        <br/>
                        <br/>
                        <br/>
                        DÖRDÜNCÜ KISIM
                        <br/>
                        <br/>
                        <br/>
                        BİRİNCİ BÖLÜM
                        <br/>
                        Müfettişlerin Çalışma Anlayışı ve Amacı
                        <br/>
                        MADDE 54 – (1) Müfettişlerin çalışma anlayışı; etkin, verimli, iktisadi ve caydırıcı bir denetim sistemini öngörür; hata arayan ve sadece tenkit eden klasik teftiş sistemini reddeder.
                        <br/>
                        (2)	 Müfettişler; Kurumun mevcut hukuk düzeni içersinde amaçlarına zamanında ve verimli olarak ulaşıp ulaşmadığını, amaca yönelik olarak benimsenen ilke, politika ve yöntemler ile yapılan işlem ve eylemlerin yerindelik ve etkinliğini araştırmak, incelemek ve denetlemek, planlanan hedeflerden ve mevzuattan sapmalar varsa bunları ve nedenlerini saptayıp tahlil etmek, aksaklıkların giderilmesi ve kurum hizmetlerinin verimli ve rasyonel bir düzeye ulaşması için alınması gerekli görülen önlemleri belirlemek ve ilgili mercilere tavsiyelerde bulunmak amacını göz önünde tutarlar.
                        <br/>
                        (4)	 Müfettişler, görevlerini yaparken personeli motive etmeye, bilgi ve davranışlarıyla onlara rehberlik yapmaya özen gösterirler,
                        <br/>
                        (5)	 Müfettişler yerine getirilmeyen ve sürüncemede bırakılan işlerin sorumlularının cezalandırılmasına da önem verirler.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        BEŞİNCİ KISIM
                        <br/>
                        <br/>
                        <br/>
                        BİRİNCİ BÖLÜM
                        <br/>
                        Teftiş
                        <br/>
                        <br/>
                        <br/>
                        Teftiş
                        <br/>
                        MADDE 55 – (1) Belediyenin tüm birimlerinin işlem ve faaliyetlerinin, amaca uygunluk, hukuka uygunluk ve performans bakımından risk analizleri çerçevesinde değerlendirildiği, belirli zaman aralıklarıyla gerçekleştirilen denetim plan ve programları kapsamında, sistematik, sürekli ve disiplinli bir yaklaşımla, görev standartlarına uygun olarak, sorunların çözümü konusunda idareye yardımcı olmayı ve rehberliği amaçlayan, insan ve sistem odaklı faaliyettir.
                        <br/>
                        (2) Belediyenin her hangi bir birimi, yönetmelik, genelge ve benzeri düzenlemelerle yetki alanı dışına çıkartılamaz. Her hangi bir birim, mutat ve makul süreler haricinde ve kabul edilebilir bir gerekçe olmaksızın, teftiş dışı tutulamaz.
                        <br/>
                        <br/>
                        <br/>
                        Teftiş Programı
                        <br/>
                        MADDE 56 – (1) Teftiş Kurulunun çalışmaları hazırlanan teftiş programlarına göre yürütülür. Teftiş Programı; teftiş edilecek birimlerin iş kapasiteleri, önceki teftiş programları ve Müfettiş sayısı göz önünde bulundurulmak suretiyle, Belediye Başkanının emri üzerine Kurul Müdürü tarafından hazırlanarak, Belediye Başkanının onayına sunulur.
                        <br/>
                        (2) Teftiş Programında; Müfettişlerce teftiş edilecek birimler ve Müfettişlerin hangi işlemlerin teftişi ile görevlendirileceği ve teftiş süresi gösterilir. Birimlerin teftişi bu program esasına göre yürütülür.
                        <br/>
                        (4) Bu program hazırlanırken tüm birimlerin belirli aralıklarla denetlenmesi amaçlanır. Teftişler sırasında her türlü faaliyet ve işlemlerin mevzuata uygunluğu açısından denetlenmesiyle birlikte denetlenen birimin eksik ve hatalı işlemlerinin düzeltilerek personelin görevi ile ilgili konularda eğitilmeleri sağlanır.
                        <br/>
                        <br/>
                        <br/>
                        Teftiş Programının Uygulanması
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        MADDE 57 – (1) Müfettişlerin teftişe, programda belirtilen tarihte başlamaları esastır. Zorunlu nedenlerin mevcut olması halinde durum gerekçeleri ile Kurul Müdürüne bildirilerek, alınacak emre göre hareket edilir.
                        <br/>
                        <br/>
                        <br/>
                        İnceleme ve Araştırma
                        <br/>
                        <br/>
                        <br/>
                        MADDE 58 – (1) İnceleme ve araştırmalar;
                        <br/>
                        <br/>
                        <br/>
                        a)	Yürürlükteki Kanun, Tüzük, Yönetmelik, Karar ve Emirlerin(talimat olsa daha iyi değil mi?) uygulanmalarında görülen noksanlıklar ve bunların düzeltilmesi yolları ile yeniden konulması gereken hüküm ve usuller.
                        <br/>
                        b)	Teftişlerde cevaplı raporlara bağlanması gerekli görülmeyen hususlar,
                        <br/>
                        c)	Şikâyet ve ihbarlar üzerine yapılan inceleme ve araştırma sonucunda, soruşturma açılmasına gerek görülmeyen haller,
                        <br/>
                        ç) Belediye Başkanınca incelenmesi istenilen veya doğrudan Müfettişçe belirlenen sorun ya da konular hakkında yapılır.
                        <br/>
                        d) Herhangi bir olayın açıklığa kavuşturulması ya da kişiler ve kurumlar yönünden genel hükümlere veya 19/04/1990 tarih ve 3628 sayılı Mal Bildiriminde Bulunması Rüşvet ve Yolsuzluklarla Mücadele Kanununa göre soruşturma yapılmasının gerekip gerekmediğinin belirlenmesidir.
                        <br/>
                        <br/>
                        <br/>
                        Soruşturma
                        <br/>
                        <br/>
                        <br/>
                        MADDE 59 – (1) Belediye personelinin ilgili mevzuatına göre, suç ya da disiplin suçu oluşturan eylem ve işlemlerine ilişkin bütün delillerin elde edilmesi çalışmalarıdır.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        İKİNCİ BÖLÜM
                        <br/>
                        Raporlar
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Rapor Çeşitleri
                        <br/>
                        <br/>
                        <br/>
                        MADDE 60 – (1) Müfettişler çalışmalarının sonucunda işin özelliğine göre ;
                        <br/>
                        a)	Teftiş Raporu,
                        <br/>
                        b)	İnceleme Raporu
                        <br/>
                        c)	Araştırma Raporu,
                        <br/>
                        ç)  Disiplin Soruşturma Raporu,
                        <br/>
                        d)  Tevdi Raporu,
                        <br/>
                        e)	Ön İnceleme Raporu,
                        <br/>
                        f)	Tazmin Raporu,
                        <br/>
                        g)	 Personel Denetleme Raporu
                        <br/>
                        ğ)  Genel Durum Raporu
                        <br/>
                        <br/>
                        <br/>
                        Düzenlerler.
                        <br/>
                        <br/>
                        <br/>
                        Teftiş Raporu
                        <br/>
                        <br/>
                        <br/>
                        MADDE 61 - (1) Teftiş raporu, yapılan teftişlerde noksan ve hatalı bulunan ve ilgili birimlerce düzeltilmesi gereken işlemler hakkında, esas itibariyle üç nüsha olarak ve her birim için ayrı ayrı düzenlenir.
                        <br/>
                        (2)	Raporun aslı ile bir nüshası; aslı usulüne göre cevaplandırıldıktan sonra geri gönderilmek, bir nüshası teftiş dosyasında saklanmak üzere rapor numarasını taşıyan birer yazıya ekli olarak ilgili yerlere tebliğ olunur.
                        <br/>
                        (3)	Teftiş raporlarında;
                        <br/>
                        <br/>
                        <br/>
                        a)	İşlemleri teftiş edilen memurların adları, soyadları ve memuriyet unvanları, teftiş edilen birimlere hangi tarihten hangi tarihe kadar bakıldığı,
                        <br/>
                        b)	Hatalı ve noksan görülen hususların hangi kanun, tüzük, yönetmelik ve genelge ile tebliğlerin hangi maddeleriyle ilgili olduğu,
                        <br/>
                        c)	Raporun ilgililerce cevaplandırılma süreleri,
                        <br/>
                        ç)  Mevzuata göre yapılması gereken işlemler ve diğer öneriler belirtilir.
                        <br/>
                        <br/>
                        <br/>
                        (4)	Tebliğ edilen rapor, müfettiş tarafından belirlenen süre içinde, teftiş edilen birim amirleri tarafından cevaplandırıldıktan sonra müfettişe iade olunur. Gelen rapor en geç bir ay içinde müfettiş tarafından son mütalaası da eklenerek Teftiş Kuruluna verilir.
                        <br/>
                        (5)	Hastalık, askerlik, yurt dışı staj gibi zaruri sebeplerle müfettişlikçe cevaplandırılmayan raporların son mütalaaları Kurul Müdürünün görevlendireceği bir müfettiş tarafından yazılır.
                        <br/>
                        (7)	Teftiş Kurulu, son mütalaası yazılmış olarak gelen raporu Başkan onayı ile gereği yapılmak üzere ilgili birime gönderir ve sonuçlarını yakından izler.
                        <br/>
                        (8)	Rapor tebliğine lüzum görülmeyen hallerde durum bir yazı ile teftiş edilen birime bildirilir ve bu yazının bir nüshası Teftiş Kurulu’na tevdi edilir.
                        <br/>
                        <br/>
                        <br/>
                        İnceleme Raporu
                        <br/>
                        <br/>
                        <br/>
                        MADDE 62 - (1) İnceleme Raporu;
                        <br/>
                        <br/>
                        <br/>
                        a)	Başkan veya Kurul Müdürü tarafından tetkik ettirilen çeşitli konular hakkındaki düşüncelerin,
                        <br/>
                        b)	Yürürlükteki mevzuatın uygulanmasında görülen noksanlıkların ve bunların düzeltilmesi yolları ile düzenlenmesinde yarar görülen konulara ilişkin hüküm ve usuller hakkında görüş ve teklifleri,
                        <br/>
                        c)	Mesleki ve bilimsel çalışmaların,
                        <br/>
                        ç) Şikayet ve ihbarlar üzerine yapılan çalışmalar sonucunda soruşturma açılmasını gerektirir hal görülmediği takdirde yapılacak işleme esas görüşlerin, bildirilmesi maksadıyla düzenlenir.
                        <br/>
                        <br/>
                        <br/>
                        (2)	Müfettişler bu raporları verilen görev gereği olarak düzenlerler.
                        <br/>
                        (3)	İnceleme raporunda;
                        <br/>
                        <br/>
                        <br/>
                        a)	Başlangıç,
                        <br/>
                        b)	İnceleme konusu,
                        <br/>
                        c)	İnceleme ve değerlendirme,
                        <br/>
                        ç)  Sonuç,
                        <br/>
                        <br/>
                        <br/>
                        bölümlerine yer verilir.
                        <br/>
                        <br/>
                        <br/>
                        (4)	İnceleme raporları, konularının ilgilendirdiği birimler göz önünde tutularak yeterli sayıda hazırlanır. Bu raporlar Başkan onayını takiben Kurul Müdürlüğü tarafından gereği yapılmak üzere ilgili birimlere ve mercilere gönderilir.
                        <br/>
                        <br/>
                        <br/>
                        Araştırma Raporu
                        <br/>
                        <br/>
                        <br/>
                        MADDE 63 - (1) Araştırma raporu, Başkanın onayı ile tetkik ettirilen çeşitli konular ve iddialar hakkında inceleme raporuna bağlanması gerekli görülmeyen konular ile 4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanuna göre yetkili merci tarafından yapılacak işleme esas teşkil etmek üzere bu kanun ya da 5442 sayılı İl İdaresi Kanununa göre verilen araştırma veya incelemelerde doğrudan Valilik Makamı ve Kaymakamlık Makamı onayı ve Kurul Müdürünün görev emri uyarınca Belediyenin yönetimi ve denetimi altındaki kişi ve birimlerin uygulamaları hakkında düzenlenen rapordur.
                        <br/>
                        <br/>
                        <br/>
                        Tevdi Raporu
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Disiplin soruşturma raporları, Başkanın onayı üzerine teftiş, inceleme ve soruşturmaya tabi Belediye birimlerinde görevli bütün personel hakkında disiplin suçu yada suç konusu olan veya kusurlu sayılacak eylem ve davranışları hakkında yapılan soruşturmalar sonucunda düzenlenen raporlardır.
                        <br/>
                        (2) Müfettişler, teftiş, inceleme ve ön inceleme sırasında soruşturulması gereken bir eylemi tespit etmeleri halinde durumu Teftiş Kurulu Müdürü aracılığı ile Başkana bildirilerek soruşturma onayı talep ederler.
                        <br/>
                        (3)  Soruşturma raporunda;
                        <br/>
                        <br/>
                        <br/>
                        a)	Başlangıç,
                        <br/>
                        b)	Soruşturma konusu,
                        <br/>
                        c)	İnceleme ve değerlendirme,
                        <br/>
                        ç)  Sonuç,
                        <br/>
                        <br/>
                        <br/>
                        bölümlerine yer verilir.
                        <br/>
                        <br/>
                        MADDE 66 – (1) 02/12/1999 tarihli ve 4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanuna göre yapılan incelemenin sonuçları Ön İnceleme Raporuna bağlanır.
                        <br/>
                        (2)	Müfettiş Ön İnceleme Raporunda; ön inceleme konuları ve işlenen suçların unsurları ile suçlular hakkında hangi kanun hükümlerine göre soruşturma yapılması gerektiğini, suçun tespit edilememesi halinde ise gerekli teklif sebeplerini belirtir.
                        <br/>
                        (3)	Ön İnceleme Raporunda;
                        <br/>
                        a)	Başlangıç,
                        <br/>
                        b)	Ön inceleme konusu,
                        <br/>
                        c)	Hakkında ön inceleme yapılanlar,
                        <br/>
                        ç)  İfadeler,
                        <br/>
                        d)	İnceleme ve değerlendirme,
                        <br/>
                        e)	Sonuç,
                        <br/>
                        bölümlerine yer verilir.
                        <br/>
                        <br/>
                        <br/>
                        (4) Müfettiş, ön incelemeyi bitirdikten sonra  02/12/1999 tarihli ve 4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanunda öngörülen süre içerisinde  raporunu tamamlayıp doğrudan kanunen karar vermeye yetkili mercie tevdi eder. Ayrıca bir yazı ile de Kurul Müdürlüğünü bilgilendirir.
                        <br/>
                        <br/>
                        <br/>
                        Tazmin Raporu
                        <br/>
                        <br/>
                        <br/>
                        MADDE 67 – (1) Tazmin Raporu; Devlete, kişilere memurlar ve diğer kamu görevlileri tarafından verilen zararlarla, borçlar kanunu hükümlerine göre oluşan zararların belirlenmesi halinde zararın kimlerden tazmin edileceğine ilişkin ayrıntılarla görüş ve kanaatin yetkili makama intikali amacıyla hazırlanır. Tazmin raporlarında tazmine neden olan fiil ve bu fiillerin faillerinin yanı sıra tazmine esas tutar hukuksal dayanaklarla ve ayrıntılı bir şekilde ortaya konur.
                        <br/>
                        <br/>
                        <br/>
                        Personel Denetleme Raporu
                        <br/>
                        <br/>
                        <br/>
                        MADDE 68 - (1) Personel Denetleme Raporu, gerekli olması durumunda, teftiş, inceleme ve soruşturma sırasında, personelin çalışmalarındaki başarı durumları gözetilerek özlük dosyasına konulmak üzere düzenlenir.
                        <br/>
                        (2)	Raporda yöneticilerin ve gerekirse diğer personelin;
                        <br/>
                        <br/>
                        <br/>
                        a)	Dış görünüşü, saygı uyandırmada başarı derecesi,
                        <br/>
                        b)	Zeka ve kavrayış kabiliyeti,
                        <br/>
                        c)	İtimada şayan olup olmadığı,
                        <br/>
                        ç)  Sorumluluk duygusu, görevine bağlılığı, iş heyecanı, teşebbüs fikri,
                        <br/>
                        d)	Mesleki bilgisi, mevzuata uyma derecesi, yazılı ve sözlü ifade kabiliyeti, kendini geliştirme ve yenileme gayreti,
                        <br/>
                        e)	İşlerindeki dikkat ve intizamı, yaş ve bünyesi,
                        <br/>
                        f)	İşleri düzenleme, yürütüm ve yönetim yeteneği,
                        <br/>
                        g)	Disipline riayeti,
                        <br/>
                        ğ)  Personel üzerindeki etkinliği ve personelini yetiştirme yeteneği,
                        <br/>
                        h)	Amirlerine, mesai arkadaşlarına, iş sahiplerine karşı tutum ve davranışı,
                        <br/>
                        hususlarında Müfettişin objektif  bilgi ve müşahedelere dayanan kanaatleri belirtilir.
                        <br/>
                        <br/>
                        <br/>
                        (3)	Yeterince bilgi edinilmemiş ve kanaate varılmamış hususlarda görüş belirtilmez.
                        <br/>
                        (4)	Personel Denetleme Raporları, Müfettiş tarafından bir nüsha olarak düzenlenip kapalı zarf içinde bir yazı ekinde Başkana iletilmek üzere Teftiş Kuruluna teslim edilir.
                        <br/>
                        <br/>
                        <br/>
                        Genel Durum Raporu
                        <br/>
                        <br/>
                        <br/>
                        MADDE 69 - (1) Gerekli görülen hallerde, Teftiş Kurulunun bir yıllık çalışma sonuçlarını, Belediyece uygulanan politikaların ve yürütülen hizmetlerin genel durumunu, varsa alınabilecek önlemlere ilişkin görüş ve önerileri içerecek şekilde Başkana sunulmak üzere Kurul Müdürlüğünce hazırlanır.
                        <br/>
                        (2) Bu raporlarda ;
                        <br/>
                        <br/>
                        <br/>
                        a) Teftiş yerleri, teftişi yapılan birimler ve yazılan raporlara.
                        <br/>
                        b)	Başkanın onayı üzerine programla beraber veya sonradan gönderilen tetkik konuları yapılan incelemelerin neticelerine.
                        <br/>
                        c)	Mevzuatın uygulanmasında görülen hata ve noksanlıklara.
                        <br/>
                        ç)  Fiziki durum ve çalışma araçları ile diğer ihtiyaçlara.
                        <br/>
                        d)	Teftiş yılında ve gerekirse daha önceki yıllara ait programların teftişine ait kısımlarının gerçekleştirilme safhaları hakkında istatistiki ve karşılaştırılmalı bilgiler ile bu husustaki görüşlerle uygun ve zorunlu görülen diğer hususlara.
                        <br/>
                        <br/>
                        <br/>
                        yer verilir.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Raporların Düzenlenmesi, Yapılacak İşlemler
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Raporların Düzenlenmesi
                        <br/>
                        <br/>
                        <br/>
                        MADDE 70 – (1)  Raporlar, bilgisayar kullanılarak yazılır. Raporlarda silinti ve kazıntı yapılamaz. Zorunlu olarak yapılan düzeltmeler, Müfettiş tarafından parafe edilir.
                        <br/>
                        (2) Raporların; düzgün cümleler kullanılarak uygun ve anlaşılabilir bir dille ve raporlarda adları geçen kişi ve birimleri rencide edebilecek deyim ve yakıştırmalara, kanıtsız suçlamalara yer verilmeden yazılmasına, hiçbir tereddüde yer vermeyecek açıklıkta olmasına, konu ile ilgisi bulunmayan ayrıntılara yer verilmemesine özen gösterilir.
                        <br/>
                        (3) Raporların her sayfası Müfettiş Mühürü ile mühürlenerek parafe edilir.
                        <br/>
                        <br/>
                        <br/>
                        Raporlar Üzerine Yapılacak İşlemler
                        <br/>
                        <br/>
                        <br/>
                        MADDE 71 – (1)  Bu yönetmelik hükümleri çerçevesinde yapılan görevlendirmeler sonucunda düzenlenen raporlarla ilgili olarak aşağıda belirtilen usuller çerçevesinde işlemler tesis edilir:
                        <br/>
                        <br/>
                        <br/>
                        a)	Raporlar Teftiş Kurulu Müdürlüğünce usul ve esaslar bakımınca incelenir. İnceleme sonucuna göre, esası etkilemeyecek nitelikteki hata ve eksikliklerin tespiti halinde Müfettişin yazılı olarak uyarılması yoluna gidilebilir. Ancak esası etkileyecek derecede açık hata ve eksiklik görülmesi durumunda, tamamlanması ve düzeltilmesi için rapor, yazı ile müfettişe iade edilir. Müfettişin görüşünde ısrar etmesi durumunda, rapor konusu, Kurul Müdürlüğünce yeniden diğer bir Müfettişe verilebilir.
                        <br/>
                        b)	Raporun birden fazla Müfettiş tarafından düzenlenmesi ve Müfettişler arasında raporun sonuçları ile ilgili görüş farklılıklarının bulunması halinde, bu farklılıklar raporda belirtilir. Rapor Teftiş Kurulu tarafından incelenir. Raporda mevcut farklı görüşlerden değiştirilmesi istenen husus ilgili müfettişten yazılı olarak istenir. Müfettişin görüşünde ısrar etmesi halinde, Müfettişleri farklı görüşleri ile birlikte Kurul Müdürlüğü görüşünün de belirtildiği onay hazırlanarak Başkana sunulur.
                        <br/>
                        c)	(a) ve (b) bentlerindeki işlemlere müteakiben Başkan onayı ile birlikte rapor ve ekleri, gereği yerine getirilmek üzere Teftiş Kurulunca ilgili Belediye birimlerine ve mercilere gönderilir, sonuçları izlenir. Raporlardan yapılacak işlemi bulunmadığı anlaşılanlar ile gönderilmesinde fayda görülmeyenler hıfza alınır ve bu durum Müfettişe bildirilir.
                        <br/>
                        ç) Bu tür raporlardaki tenkit düşünce ve tekliflere göre yapılması gereken işlemler, ilgili birimlerce süratle sonuçlandırılır. Ancak, ilgili birimlerce raporlarda maddi hata ya da mevzuata açık aykırılık gibi hususların tespit edilmesi halinde rapor gerekçesi ile birlikte teftiş kuruluna intikal ettirilir. Konunun incelenmesine müteakiben Kurul Müdürünün görüşü doğrultusunda işlem yapılır, ancak ihtilafın Müfettiş ile Kurul Müdürü arasında olması halinde (a), (b) ve (c) bentlerindeki usule göre işlem yapılır.
                        <br/>
                        d)	İlgili birimler, bu maddede belirtilen usulle kendilerine gönderilen raporlar üzerine yapılan işlemler ve varsa yapılan işlemler ile ilgili belgeleri, Teftiş Kuruluna yazılı olarak gönderirler. Kurul Müdürlüğünce, ilgili birimlerden gönderilen yazıların birer örneği rapor yazan Müfettişe, rapor birden fazla Müfettişe ait ise her bir Müfettişe gönderilir. Müfettişler raporları üzerine yapılan işlemleri ve verilen talimatları uygun ve yeterli bulmadıkları takdirde konu ile ilgili görüşlerini gerekçeleri ile birlikte otuz gün içinde Kurul Müdürlüğüne bildirirler. Kurul Müdürlüğünce Müfettiş görüşü, ilgili birime gönderilir. İlgili birim ile Müfettiş arasında görüş ayrılığı giderilmemiş ise konu Kurul Müdürü ve birimin görüşü alınarak Başkan tarafından sonuca bağlanır.
                        <br/>
                        <br/>
                        <br/>
                        ALTINCI KISIM
                        <br/>
                        BİRİNCİ BÖLÜM
                        <br/>
                        Teftiş Edilenlerin Yükümlülüğü
                        <br/>
                        Madde 72 - (1)  Belediye Başkanlığı bünyesinde faaliyet gösterilen birimlerde görev yapan tüm birim müdürleri, memurları ve diğer personel para ve para hükmündeki evrak ve senetlerle, her türlü ayniyatı ve bunlarla ilgili kayıt, belge ve defterleri, ayrıca gizli dahi olsa her türlü evrakı, yazılı talep üzerine Müfettişe göstermek ve/veya vermek, saymasına ve incelemesine yardımda bulunmak zorundadır.
                        <br/>
                        (2) İlgili birim  müdürleri ve personeli, müfettişin gerekli gördüğü evrak, kayıt ve belgelerin asıllarını veya tasdikli suretlerini yazılı talep üzerine vermek zorundadır.
                        <br/>
                        a) Asılları alınan evrak ve  belgelerin, Müfettiş Mühür ve imzası ile onaylı suretleri ilgili birimlere verilir.
                        <br/>
                        <br/>
                        <br/>
                        (3) İlgili birimlerin müdürleri , müfettişlerin görevleri süresince uygun bir çalışma yeri ile göreve ilişkin gerekli araç ve gereçleri sağlamak, lüzum görülen diğer tedbirleri almak zorundadır.
                        <br/>
                        (4)	 İlgili birim  müdürleri ve personeli, Müfettişin sözlü veya yazılı sorularını cevaplamak zorundadır.
                        <br/>
                        (5)	 Teftişe tabi birimlerin müdürleri bir teftiş defteri ve dosyası tutmak, tüm teftiş raporlarını ve bunlar üzerine yapılan yazışmaları bu dosyada muhafaza etmek, görev değişimlerinde görevi devralana zimmetle teslim etmek zorundadır.
                        <br/>
                        (6)	 Teftiş ya da soruşturmaya başlanan birim görevlilerinin hastalık ve benzeri nedenler dışında izne ayrılmalarına, müfettişin olumlu görüşü alındıktan sonra birim amirlerince izin verilir.
                        <br/>
                        a)	Müfettişin birimdeki göreve başlamasından önce verilmiş olan izinler, Müfettişin talebi halinde durdurulur ve personel geri çağrılır.
                        <br/>
                        <br/>
                        <br/>
                        (7)	 Müfettişlerin görev yaptığı birimlerde, başta müdürler olmak üzere tüm personel gereken her türlü kolaylığı göstermek, yardımda bulunmak ve bu Yönetmelikte belirtilen diğer görevleri yerine getirmekle yükümlüdürler.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        İKİNCİ BÖLÜM
                        <br/>
                        Çeşitli Hükümler
                        <br/>
                        <br/>
                        <br/>
                        İzin Kullanılması
                        <br/>
                        <br/>
                        <br/>
                        MADDE 73 – (1) Müfettişler, kanuni izinlerini ilgili mevzuata göre kullanırlar. İzine hangi tarihte başladıklarını ve göreve dönüş tarihlerini Teftiş Kurulu Müdürlüğüne yazı ile bildiriler.
                        <br/>
                        <br/>
                        <br/>
                        Kimlik Belgesi, Mühür ve Demirbaşlar
                        <br/>
                        <br/>
                        <br/>
                        MADDE 74 – (1) Müfettişlere ve Müfettiş Yardımcılarına, Belediye Başkanı tarafından imzalanmış olan ve Müfettişlerin görev ve yetkilerinin belirtildiği fotoğraflı ve soğuk damgalı birer kimlik belgesi verilir. Ayrıca Müfettişlere Mühür Beratı ile birer Resmi Mühür verilir.
                        <br/>
                        (2) Müfettişlere ve Müfettiş Yardımcılarına, taşınabilir bilgisayar, evrak çantası, taşınabilir bellek gibi ihtiyaç duyacakları gerekli olan diğer malzemeleri Belediye sağlar. Teknolojik gelişmeler sürekli takip edilerek söz konusu ekipmanlar zamanında güncellenir.
                        <br/>
                        <br/>
                        <br/>
                        Haberleşme ve Ulaşım Yönetimi
                        <br/>
                        <br/>
                        <br/>
                        MADDE 75 -  (1 ) Müfettişler, kamu kurum ve kuruluşlarıyla, gerçek ve tüzel kişilerle doğrudan yazışma yapabilirler. Ancak, Başbakanlık ve Bakanlıkların merkez ve yurtdışı teşkilatları ile bağlı, ilgili ve ilişkili kuruluşlarıyla yazışmalarını, Kurul Müdürlüğü aracılığıyla yerine getirirler.
                        <br/>
                        (2) Müfettişler, teftiş, inceleme ve soruşturma görevleri ile ilgili acele, fakat gizli olmayan haberleşme durumuna göre telgraf, teleks, faks, telefon veya e-posta kullanabilirler,
                        <br/>
                        (3) Birlikte görevlendirmelerde, yazışma ve haberleşmeler kıdemli müfettişler tarafından yerine getirilir.
                        <br/>
                        (4)  Müfettişler , yazışmaların açık ve resmi ifade tarzına uygun olmasına dikkat ederler.
                        <br/>
                        (5)  Müfettişler, gönderdikleri yazıları giden evrak defterine kaydettirirler.
                        <br/>
                        <br/>
                        <br/>
                        Görevden Ayrılma Halinde İade Edilecek Demirbaşlar, Diğer Eşya ve Belgeler
                        <br/>
                        <br/>
                        <br/>
                        MADDE 76 - (1) Müfettişler herhangi bir sebeple görevlerinden ayrılmaları halinde, kendilerine verilmiş olan kimlik belgesi, resmi mühür ile beratını, bilgisayar ve kullanma müddeti geçmeyen demirbaş ve taşınır eşyaları ve belgeleri bir dizi pusulası ile Teftiş Kurulu Müdürlüğüne iade ederler.
                        <br/>
                        <br/>
                        <br/>
                        YEDİNCİ KISIM
                        <br/>
                        <br/>
                        <br/>
                        BİRİNCİ BÖLÜM
                        <br/>
                        Son Hükümler
                        <br/>
                        <br/>
                        <br/>
                        Yönerge Düzenlenmesi
                        <br/>
                        <br/>
                        <br/>
                        MADDE 77 - (1) Bu yönetmeliğin uygulanması ile ilgili diğer hususlar çıkarılacak yönerge ile belirlenir.
                        <br/>
                        <br/>
                        <br/>
                        Yürürlükten Kaldırılan Yönetmelik
                        <br/>
                        <br/>
                        <br/>
                        MADDE 78 – (1) Gebze Belediyesi Meclisinin 19/02/1997 tarih ve 997/127 sayılı kararı ile kabul edilen Gebze Belediyesi Teftiş Kurulu Yönetmeliği bütün ek ve değişiklikleri ile birlikte yürürlükten kaldırılmıştır.
                        <br/>
                        <br/>
                        <br/>
                        Geçiş Hükümleri


                        <br/>
                        GEÇİCİ MADDE 1 - (1) Bu yönetmeliğin yürürlüğe girdiği tarihten önce Gebze Belediyesinde Teftiş Kurulu Müdür ve Müfettiş yapanların kazanılmış hakları saklıdır. Bu yönetmelikle getirilen tüm hak, görev, yetki, unvan ve sorumlulukları taşırlar.

                        (2) Ancak, 22/02/2007 tarihinden sonra atananların; Belediye ve Bağlı Kuruluşları ile Mahalli İdare Birlikleri Norm Kadro İlke ve Standartlarına Dair Yönetmeliğin 12 inci maddesindeki eğitim şartlarını taşımak ve mesleğe yarışma ve yeterlik sınavıyla girmiş olmaları kaydıyla kazanılmış hakları saklıdır ve bu yönetmelikle getirilen tüm hak, görev, yetki, unvan ve sorumlulukları taşırlar.
                        <br/>
                        (3) Bu yönetmeliğin yürürlüğe girdiği tarihte Kurul Müdürlüğünde Müfettiş Yardımcısı kadrosunda bulunanların yeterlik sınavları ve Müfettişlik kadrolarına atanmaları, önceki yönetmelik/ mevzuat hükümlerine göre sonuçlandırılır.
                        <br/>
                        <br/>
                        <br/>
                        Yürürlük
                        <br/>
                        <br/>
                        <br/>
                        MADDE 79 – (1)   Bu yönetmelik Gebze Belediyesi Meclisi Kabulü ve  ilan tarihinde yürürlüğe girer.
                        <br/>
                        <br/>
                        <br/>
                        Yürütme
                        <br/>
                        <br/>
                        <br/>
                        MADDE 80  – (1) Bu yönetmelik hükümleri Gebze Belediye Başkanlığınca yürütülür.
                    </p>
                </section>
                <section id="bolum2" className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
                    <h3 className="text-lg font-bold text-center"></h3>
                    <p className="text-gray-700 text-left">
                        1965 Yılında Giresun Görele’de doğan Kemal TETİK Ailesiyle 1970 – 1983  tarihleri arası    İstanbul Ataşehir, 1983 den sonra Gebze’ye yerleşmiştir.
                        İlkokulu İstanbul Alaşehir’de Sakarya İlk Okulu, orta ve  lise öğrenimini İzmit İmam Hatip Lisesinde 1985 yılında tamamladı.
                        Vatani görevini 1993-1994 yılında Şanlıurfa’da Asteğmen olarak  yerine getirdi.
                        <br/>
                        1986-1996 Yılında İzmir’de Diyanet İşleri bünyesinde görev yaptıktan sonra  1996 yılında Gebze Belediyesine geçiş yaptı.
                        İktisat Fakültesi Lisans ve Sosyal Hizmet ve Danışmanlık Ön Lisans Bölümü Mezunu,
                        Gebze Belediyesinin bir çok bölümünde Müdürlük görevinde bulunan ve
                        halen Araştırma ve Geliştirme  Müdürü olarak göreve devam eden  Kemal TETİK, Evli ve 3 çocuk babasıdır.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Mecitkeskinoglu;
