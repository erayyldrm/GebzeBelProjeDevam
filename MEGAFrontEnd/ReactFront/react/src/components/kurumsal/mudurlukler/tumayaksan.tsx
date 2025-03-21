import React from "react";

const Tumayaksan: React.FC = () => {
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
                        src="/images/kurumsal/mudurlukler/avatar-3.jpg"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">Bilgi İşlem Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" /> Tümay AKSAN
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" /> bilgiislem@gebze.bel.tr
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
                        <br/>
                        Amaç
                        <br/>
                        MADDE 1 – (1) Bu yönetmeliğin amacı, Bilgi İşlem Müdürlüğünün teşkilat yapısını, hukukî statüsünü, görev, yetki, çalışma usul ve esaslarını belirleyerek, hizmetlerin daha etkin ve verimli bir şekilde yürütülmesini sağlamaktır.
                        <br/>
                        Kapsam
                        <br/>
                        MADDE 2 – (1)  Bu yönetmelik Bilgi İşlem Müdürlüğünün; hukuki statüsünü, görev, yetki ve sorumlulukları ile çalışma usul ve esaslarını kapsar.
                        <br/>
                        Dayanak
                        <br/>
                        MADDE 3 – (1)  Bu Yönetmelik 5393 sayılı Belediye Kanununun 15.maddesinin  (b)  fıkrası hükümlerine dayanılarak hazırlanmıştır.
                        <br/>
                        Tanımlar
                        <br/>
                        MADDE 4 – (1)  Bu Yönetmelikte ifade edilen,
                        <br/>
                        a)Başkanlık              	 		: Gebze Belediye Başkanlığını,
                        <br/>
                        b)Meclis               			: Gebze Belediye Meclisini,
                        <br/>
                        c)Belediye            			: Gebze Belediyesini,
                        <br/>
                        d)Belediye Başkanı   	 		: Gebze Belediye Başkanını,
                        <br/>
                        e)Müdürlük              	 		: Bilgi İşlem Müdürlüğünü,
                        <br/>
                        f)Müdür                     	 		: Bilgi İşlem Müdürünü,
                        <br/>
                        g)Birim 				: Bilgi İşlem Müdürlüğü Birimlerini,
                        <br/>
                        h)Birim Sorumlusu			: Bilgi İşlem Müdürlüğü Birim Sorumlularını,
                        <br/>
                        ı)Strateji Geliştirme ve Kalite Yönetim Temsilcisi	: Bilgi İşlem Müdürlüğü Strateji Geliştirme ve Kalite Yönetim Temsilcisini,
                         <br/>
                        h)Yazılım Geliştirme Servisi		: Yönetim Bilgi Sistemi ile ilgili iş ve işlemleri gerçekleştiren birim.
                        <br/>
                        ı)Bilgi Teknolojileri Servisi		: Bilgi İşlem Müdürlüğünce her türlü elektronik veriyi oluşturmak, işlemek, saklamak, korumak ve değiştirmek veya bunlara erişmek için kullanılan depolama,   ağ ve diğer fiziksel aygıtların, altyapı ve işlemlerin yürütülmesini gerçekleştiren birim,
                        <br/>
                        i)Web Tasarım Servisi		: Belediyeye ait web sayfalarının tasarımı, yönetilmesi ve kontrolünü sağlayan birim.
                        <br/>



                        İKİNCİ BÖLÜM
                        <br/>
                        Kuruluş, Teşkilat, Bağlılık, Müdürlük Görev ve Yetkileri
                        <br/>
                        Kuruluş
                        <br/>
                        MADDE 5 – (1) Bilgi İşlem Müdürlüğü; 5393 sayılı Belediye Kanununun 48. maddesi ve 22.02.2007 tarihli, 26442 sayılı Resmi Gazetede yayımlanarak yürürlüğe giren “Belediye ve Bağlı Kuruluşları İle Mahalli İdare Birlikleri Norm Kadro İlke Ve Standartlarına Dair Yönetmelik” hükümlerine dayanarak, Gebze Belediye Meclisinin 04.06.2007 tarih ve 110 sayılı kararı gereğince kurulmuştur.
                        <br/>
                        Teşkilat
                        <br/>
                        MADDE 6 – (1)  Bilgi İşlem Müdürlüğü İdari Teşkilatı; müdür, yazılım geliştirme servisi, bilgi teknolojileri servisi, web tasarım servisinde görevli personellerden (işçi, memur, sözleşmeli memur, belediye iktisadi teşebbüsü statüsündeki şirket bünyesinde çalışan personellerden ) oluşur.
                        (2)  Müdürlüğün iç organizasyon yapılarının teşkili, söz konusu ilgili müdürlüğün teklifi ve bağlı olduğu üst amirin onayı ile gerçekleştirilecek bir iç düzenleme ile geçerlilik kazanır.
                        <br/>
                        Bağlılık
                        <br/>
                        MADDE 7-Bilgi İşlem Müdürlüğü , Belediye Başkanına veya Başkan Yardımcısına bağlıdır. Başkan bu görevi bizzat veya görevlendireceği kişi eliyle yürütür.
                        <br/>
                        Müdürlüğün Görevleri
                        <br/>
                        MADDE 8 – (1)  Belediyenin bilgi işlem ihtiyacının envanterini yapmak, bilgi işlem sisteminin tesis, teçhizat ve malzeme ihtiyacını belirlemek, ihtiyaca göre öneriler hazırlamak.
                        (2)  Bilgi işlem faaliyetleri için gerekli sistem analizi, programlama, operasyon çalışmalarını yönlendirmek, nezaret etmek, denetim altında tutmak.
                        (3)  Bilgi işlem sistemi içerisinde bilgi işleme, sonuç alma ve bilgi iletimi çalışmalarını hızlı ve güvenilir olarak zamanında yürütülmesini sağlamak.
                        (4)  Bilgi işlem alanındaki teçhizat ve sistem programlama dili, program gelişmelerini izlemek, uygun görülürse Belediyede kullanılması için öneriler hazırlamak.
                        (5)  Bilgi işlem sisteminin teçhizatı ve programlarının alındığı kuruluşlarla ilişkileri düzenlemek, sözleşme hazırlamak, gerekli servisi almak, teçhizatı verimli, etkili, ekonomik, düzenli kullanımını sağlamak, gerekli önlemleri onaya sunmak, uygulamaya koymak.
                        (6)  Kurum için gerekli verilerin toplanmasını sağlamak ve sistem çıktı raporlarının dağıtımını, bilgilerini ve gizliliğini disiplin altında tutmak.
                        (7)  Vatandaşları ilgilendiren bilgi işlem hizmetlerinin yürütülmesini sağlamak.
                        (8)  Başka kuruluşlardan alınacak bilgi işlem servis hizmetlerini düzenlemek ve kontrol altında tutmak.
                        (9)  Sistem programlarının ve diğer paket programların kullanılması için, personele gerekli eğitim vererek yetişmiş eleman sayısını artırmak.
                        (10)  Sistem otomasyonu verilerinin günlük yedeklerini almak.
                        (11)  Sistem otomasyonuna bağlı donanımsal, yazılımsal ve kullanıcılara bağlı sorunları gidererek sistemin sorusuz çalışmasını sağlamak.
                        <br/>
                        (12)  Belediyenin sistem otomasyonunda ve birimlerinde kullanılan bilgisayar programını hazırlamak veya gerekli programları satın alarak, zamanla değişen kanunun, tüzük ve yönetmeliklere göre gerekli düzenlemeleri yaparak teknik destek vermek.
                        (13)  Belediye faaliyetlerinin, etkinliklerinin sayısal ortamda (Internet, CD-DVD gibi) kentliye ulaştırılması amacıyla çeşitli tanıtım ve grafik faaliyetlerinin yürütülmesini koordine etmek.
                        (14)  Kent bilgi sistemi çalışmaları doğrultusunda verilerin güncellenmesini koordine etmek.
                        (15)  http://www.gebze.bel.tr web sitesinin sorunsuz çalışmasını sağlamak
                        (16)  Kurum bünyesinde, korsan yazılım ve idarece uygun görülmeyen teçhizatın kullanılmasını önlemek.
                        (17)  Müdürlük yıllık bütçesini hazırlamak.
                        (18)  Müdürlüğe ait ihale ve ayniyat işlemlerini yapmak.
                        (19)  Mesleki konularda birim içi ve birim dışı eğitim çalışmalarını yapmak.
                        (20)  Stratejik Planlama ve Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        Müdürlüğün Yetkisi
                        v
                        MADDE 9  – (1)  Bilgi İşlem Müdürlüğü, bu yönetmelikte sayılan görevleri ve 5393 sayılı Belediye Kanununa dayanarak Belediye Başkanınca kendisine verilen tüm görevleri kanunlar çerçevesinde yapmaya yetkilidir.
                        <br/>
                        Müdürlüğün Sorumluluğu
                        <br/>
                        MADDE 10  – (1)  Bilgi İşlem Müdürlüğü, Belediye Başkanınca verilen ve bu yönetmelikte tarif edilen görevler ile ilgili yasalarda belirtilen görevleri gereken özen ve çabuklukla yapmak ve yürütmekle sorumludur.
                        <br/>
                        Müdürün Görev, Yetki ve Sorumluluğu
                        <br/>
                        MADDE 11 – (1)  Bilgi İşlem Müdürü, görev ve sorumluluklarını yerine getirebilmenin gerektirdiği bütün faaliyetleri yürütmekte Başkan veya Başkan’ın yetki devri yaptığı Başkan Yardımcısı’na karşı sorumludur.
                        (2)  Bilgi İşlem Müdürlüğünün asli olan hizmetlerinin neler olduğunu tespit edip, personeli ile görev dağılımını yaparak çalışmaları kontrol etmek.
                        (3)  Belediyenin diğer tüm müdürlükleri ile Bilgi İşlem Müdürlüğü arasındaki diyalogları sağlamak.
                        (4)  Belediye müdürlük, servislerine hizmet veren uygulama yazılımların sağlıklı çalışmalarını kontrol etmek.
                        (5)  Yeni projeler hakkında idareye bilgi vermek, maliyet hesabı yaparak, onaylanan projenin hayata geçirilmesini sağlamak.
                        (6) Müdürlüklerin mevcut donanımlarının bakım ve onarımında gerekli işlemlerin yapılmasını sağlamak, kontrol etmek, ihtiyaç duyulan parçaların temin edilmesini sağlamak.
                        (7)  Sistemin sağlıklı çalışması için gerekli önlemleri almak, kontrol etmek.
                        (8)  Harcama yetkilisi olarak müdürlük giderlerinin tahakkukunu gerçekleştirmek.
                        (9)  Üstlerinden aldığı emir ve görevleri yerine getirmek.
                        (10)  Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        (11)  Disiplin Amirleri Yönetmeliğince kendisine verilen görevi yapmak.
                        <br/>
                        Strateji Geliştirme Ve Kalite Yönetim Temsilcisinin Görev, Yetki ve Sorumluluğu
                        MADDE 12 – (1)  Belediye Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve ISO 9001:2015 Kalite Yönetim Sistemi uygulamalarında birim temsilcisi olarak görev yapar ve hazırlama çalışmalarında bulunmak.
                        (2)  Birimi ile ilgili dönemsel olarak performans ve kalite hedeflerini belirler, izler ve bu hedeflerine uygun faaliyetlerde bulunmak.
                        (3)  Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve ISO
                        9001:2015 Kalite Yönetim Sistemi ile ilgili birim aylık raporlarını düzenleyerek üst yönetime sunmak.
                        (4)  Belediye Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı uygulamalarına ve Kalite politikasının benimsenmesine yönelik olarak çalışmalarda bulunur ve gereklerini yerine getirilmesini sağlamak.
                        (5)  Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite El Kitabında birimi ile ilgili bölümü hazırlar ve yılda bir kez gözden geçirmek, gerekirse revize etmek.
                        (6)  İç denetim faaliyeti kapsamında denetçilere birimi ile ilgili konularda bilgi verir ve Biriminde Kalite Yönetim Sistemi’nin etkinliği konusunda rapor hazırlar ve Yönetimin Gözden Geçirmesi toplantısına sunmak üzere Kalite Yönetim Koordinatörlüğüne iletmek.
                        (7)  Sistemde birimi ile ilgili doğabilecek uygunsuzlukların belirlenmesi ve giderilmesi için düzeltici, önleyici faaliyetlerin planlanması ve takibi işlemlerini yapmak.
                        (8)  Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite ile ilgili kurum içi ve kurum dışı toplantılara ve eğitimlere katılmak.
                        (9)  Yönetim tarafından oluşturulmuş olan diğer kurallar çerçevesinde ve Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite Yönetim Sistemi içinde hazırlanmış dokümanlarda belirtilen diğer görevlerini yerine getirmek.
                        Yazılım Geliştirme Servisinin Görev, Yetki ve Sorumluluğu
                        MADDE 13– (1)  Belediye uygulama yazılımlarımızı (MIS(Belediye Bilgi Sistemi), e-imza, mobil imza) kurmak, devreye almak, faal halde tutulmasını sağlamak veya sağlatmak.
                        (2)  Belediye uygulama yazılımlarımızın işletilmesini, geliştirilmesini sağlamak veya sağlatmak.
                        (3)  Müdürlüklerin kullanacağı yazılımları kurmak, test etmek.
                        (4)  MIS uygulama yazılımlarını kurmak, devreye alınmasını ve geliştirilmesini sağlamak.
                        (5)  Üst yönetimin izin verdiği MIS uygulama yazılımlarının ve verilerinin yayınlanmasını (web, mobil gibi tabanlarda) sağlamak veya sağlatmak.
                        (6)  Müdürlüklerin yazılım ihtiyaç ve sorunlarını tespit edip, yardımcı olmak.
                        (7)  Belediye uygulama yazılımlarımız ile ilgili amirlerin, diğer müdürlüklerin talep ettiği belediye personelinin şifre ve menü yetkilendirilmelerini yapmak.
                        (8)  Ar-Ge çalışmaları sonuçlarına göre amirlerin onayladığı Yönetim Bilgi Sistemleri ile ilgili yazılımların mevcut haliyle veya ihtiyaç durumunda geliştirilerek, sisteme entegre edilmesini sağlamak veya sağlatmak.
                        (9)  Belediyenin veri tabanındaki bilgilerin güvenliğini sağlamak.
                        (10)  Üstlerinden aldığı benzer nitelikteki emir ve görevleri yerine getirmek.
                        (11)  Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.

                        <br/>
                        Bilgi Teknolojileri Servis Görevlisinin Görev, Yetki ve Sorumluluğu
                        MADDE 14 – (1)  Belediyenin mevcut olan tüm donanımların bakım ve onarımını yapmak.
                        (2)  Donanımların ağ yapılarını kurmak ve takip etmek.
                        (3)  Network kablolama işlemlerini yapmak ve işlerliğini test etmek.
                        (4)  Müdürlüklerin donanım ihtiyaç ve sorunlarını tespit edip, ihtiyaç olan donanımı belirlemek ve satın alınmasına yardımcı olmak.
                        (5)  Tespit edilen donanımsal arızalarda Bilgi İşlem Müdürüne bilgi vermek.
                        (6)  Güvenlik kamerası kurulum, bakım onarım ve görüntülerin kayıt altına alınmasını ve geriye dönük kayıtların verilmesi.
                        (7)  Servislerden gelen donanım sorunlarını çözmek.
                        (8)  Yazıcı, tarayıcı gibi çevre birimlerinin bakım, onarım ve sarf malzeme desteğini sağlamak.
                        (9)  Antivirüs programlarını çalışır halde tutmak, bakım ve güncellemelerini yapmak.
                        (10) Yeni kullanılacak programlar ve/veya eski programların güncellemeleri ile yeni sürümlerini araştırıp Bilgi İşlem Müdürüne bilgi vermek.
                        (11)  Korsan yazılımlara karşı belediye birimlerinde rutin kontrol yapmak.
                        (12)  Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        (13)  Sunucu sistemlerinin kurulum ve yapılandırılmasını sağlamak
                        (14)  Active Directory servisinin kurulum ve yönetimini sağlamak.
                        (15)  Sanal ortamda işletim sistemi kurulumlarını yapmak.
                        (16)  Ağ teknolojileri tasarım ve yönetimini sağlamak
                        (17)  GIS (Coğrafi Bilgi Sistemi) sisteminin çalışabilirliğini ve güncelleştirilmesini sağlamak.
                        (18)  Bilişim teknolojileri ile ilgili gelişmeleri takip etmek.
                        (19)  Üstlerinden aldığı benzer nitelikteki emir ve görevleri yerine getirmek.
                        (20)  Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        (21) 5651 sayılı Kanun kapsamında zaman damgalı kullanıcı işlem kayıtlarının tutulmasını sağlamak.
                        <br/>
                        Web Tasarım Servis Görevlisinin Görev, Yetki ve Sorumluluğu
                        MADDE 15– (1)  Belediyeye ait web sitesinin güncelleştirilmesini sağlamak.
                        (2) Web sitesi kontrol panelinin yönetimi ve kullanıcı yetkilendirme işlemlerin yapılmasını sağlamak.
                        (3) Web sitesi alan adları satın alma, güncelleme işlemlerini yürütmek.
                        (4) Web sunucusu bakım ve yedek işlemlerini yürütmek.
                        (5) Web sitesi alan adları DNS tanımlar ve yönlendirmelerini sağlamak.
                        (6) Web sayfası içeriğinin kontrolünü sağlamak.
                        (7) Web sayfası güvenlik altyapısını kontrol eder ve sıkıntılı durumlarda raporlayarak çözümlemeyi sağlar.
                        (8)  Belediyenin yeni projelerine web tasarımı ve eklentilerini hazırlar.
                        <br/>



                        ÜÇÜNCÜ BÖLÜM
                        <br/>
                        Görev ve Hizmetlerin İcrası
                        <br/>
                        Görevin Planlanması
                        <br/>
                        MADDE 16 - (1)  Bilgi İşlem Müdürlüğündeki iş ve işlemler Müdür tarafından düzenlenen plan dahilinde yürütülür.
                        <br/>
                        Görevin Yürütülmesi
                        <br/>
                        MADDE 17 – (1)  Müdürlükte görevli tüm personel, kendilerine verilen görevleri yasa ve yönetmelikler doğrultusunda gereken özen ve süratle yapmak zorundadır.

                        <br/>
                        DÖRDÜNCÜ BÖLÜM
                        <br/>
                        İşbirliği ve Koordinasyon
                        <br/>

                        Müdürlük Birimleri Arasında İşbirliği
                        <br/>
                        MADDE 18 – (1)  Müdürlük dahilinde çalışanlar arasındaki işbirliği ve koordinasyon, Müdür tarafından sağlanır.
                        (2)  Müdürlüğe gelen tüm evraklar toplanıp konularına göre dosyalandıktan sonra müdüre iletilir.
                        Müdür, evrakları gereği için ilgili personele tevzi eder.
                        (3) Bu Yönetmelikte adı geçen görevlilerin ölüm hariç her hangi bir nedenle görevlerinden ayrılmaları durumunda görevleri gereği yanlarında bulunan her türlü dosya, yazı ve belgeler ile zimmeti altında bulunan eşyaları bir çizelgeye bağlı olarak yeni görevliye devir teslimini yapmaları zorunludur. Devir-teslim yapılmadan görevden ayrılma işlemleri yapılmaz.
                        (4) Çalışanın ölümü halinde, kendisine verilen yazı, belge ve diğer eşyalar birim amirinin hazırlayacağı bir tutanakla yeni görevliye teslim edilir.

                        <br/>
                        BEŞİNCİ BÖLÜM
                        <br/>
                        Evraklarla İlgili İşlemler ve Arşivleme
                        <br/>
                        Gelen Giden Evrakla İlgili Yapılacak İşlem
                        MADDE 19 – (1)  Müdürlüğe gelen veya giden evrak kayıt işlemleri elektronik ortamda yapılır.
                        <br/>
                        Evrakların Arşivlenmesi MADDE 20 – (1)  Elektronik ortamda kayıt işlemleri yapılan tüm evraklar dijital olarak kullanılan evrak sistemi tarafından arşivlenir.
                        (2)  Elektronik imzasız gelen veya giden tüm evrakların birer sureti saklanır, işlemleri bitenler arşive kaldırılır ve saklanır.

                        <br/>



                        ALTINCI BÖLÜM
                        <br/>
                        Denetim
                        <br/>
                        Denetim ve Disiplin hükümleri
                        <br/>
                        MADDE 21 – (1)  Bilgi İşlem Müdürü tüm personelini her zaman denetleme yetkisine sahiptir.
                        (2)  Bilgi İşlem Müdürü 1. Disiplin Amiri olarak disiplin mevzuatı doğrultusunda işlemleri yürütür.
                        (3)  Bilgi İşlem Müdürlüğünde çalışan tüm personelin izin, rapor, derece ve kademe ilerlemesi, ödüllendirme ve cezalandırma vb. işlemlere ilişkin belgeleri kapsayan özlük dosyası tutulur.

                        <br/>
                        YEDİNCİ BÖLÜM
                        <br/>
                        Çeşitli ve Son Hükümler
                        <br/>
                        Yürürlük
                        <br/>
                        MADDE 22  – (1)  Bu Yönetmelik hükümleri Gebze Belediye Meclisinin kabulü ve ilanı ile yürürlüğe girer.

                        <br/>
                        Yürütme
                        <br/>
                        MADDE 23 – (1)  Bu Yönetmelik hükümlerini Gebze Belediye Başkanı yürütür.
                    </p>
                </section>
                <section id="bolum2" className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
                    <h3 className="text-lg font-bold text-center"></h3>
                    <p className="text-gray-700 text-left">1987 yılında Ankara’da dünyaya geldi.<br/>
                        Sarar İlköğretim Okulu, Mamak Anadolu Lisesinin ardından Kırıkkale Üniversitesi Fen – Edebiyat Fakültesi Matematik bölümünden 2009 yılında mezun oldu.
                        <br/>
                        2013 – 2014 yılları arasında Uşak İŞKUR İl Müdürlüğünde sözleşmeli memur olarak görev yaptı. <br/>
                        2014 yılında Gebze Belediyesine zabıta memuru unvanı ile atandı.
                        <br/>
                        Zabıta Müdürlüğü Güvenlik ve İdari İşler Servisi ile Destek Hizmetleri Müdürlüğü Makine İkmal Bakım ve Onarım Servislerinde servis sorumluluğu görevlerini icra ettikten sonra 05.07.2019 tarihi itibari ile Bilgi İşlem Müdür Vekili görevine getirildi.
                        <br/>
                        Evli ve iki çocuk babasıdır. </p>

                </section>
            </div>
        </div>
    );
};

export default Tumayaksan;
