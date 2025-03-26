import React from "react";

const   Hasangüler: React.FC = () => {
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
                        src="/images/kurumsal/mudurlukler/avatar-21.jpg"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">Ruhsat ve Denetim Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" /> Erhan HORUZ
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" />   ruhsat@gebze.bel.tr
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
                        AMAÇ, KAPSAM, HUKUKİ DAYANAK VE TANIMLAR, KURULUŞ
                        <br/>
                        <br/>
                        <br/>
                        Amaç: Müdürlüğümüz Çalışma Yönetmeliği gözden geçirilerek mer’i mevzuata göre yeniden hazırlanmıştır.
                        <br/>
                        Yeniden hazırlanan “Müdürlüğümüz Çalışma Yönetmeliğin” 5393 Sayılı Belediye Kanunun 18/m maddesi gereğince görüşülüp karara bağlanması için yazımız ve ekinin Ekim 2019 Belediye Meclisine havale edilmesi hususunda;
                        <br/>
                        <br/>
                        <br/>
                        Madde 1:
                        <br/>
                        Bu yönetmelik Gebze Belediye Başkanlığı Ruhsat ve Denetim Müdürlüğü görev, yetki ve sorumluluk alanları ile ilgili çalışma esaslarını belirlemek amacıyla düzenlenmiştir.
                        <br/>
                        <br/>
                        <br/>
                        Kapsam:
                        <br/>
                        Madde 2:
                        <br/>
                        Bu yönetmelik Ruhsat ve Denetim Müdürlüğünün Görev, Yetki ve Sorumluluklarını kapsar.
                        <br/>
                        <br/>
                        <br/>
                        Hukuki Dayanak:
                        <br/>
                        Madde 3:
                        <br/>
                        Bu yönetmelik, 5393 sayılı Belediye Kanunu, 3572 sayılı İşyeri Açma ve Çalışma Ruhsatlarına Dair Kanun Hükmünde Kararnamenin Değiştirilerek Kabulüne Dair Kanunu, 14 Temmuz 2005 tarih ve 2005/9207 sayılı İşyeri Açma ve Çalışma Ruhsatlarına İlişkin Yönetmelik,  2559 sayılı Polis Vazife ve Selahiyet Kanunu,3194 sayılı İmar Kanunu, 5216 sayılı Büyükşehir Belediye Kanunu, 1593 sayılı Umumi Hıfzıssıhha Kanunu, 1608 sayılı Umumu Belediye 5237 sayılı Türk Ceza Kanunu, 634 sayılı Kat Mülkiyet Kanunu, 2464 sayılı Belediye Gelirler Kanunu, ilgili kanunlar, kararname,  yönetmelik ve talimatnameler ile Belediye Meclisi ve Encümen Kararlarına dayanarak hazırlanmıştır.
                        <br/>
                        <br/>
                        <br/>
                        Kuruluş:
                        <br/>
                        Madde 4:
                        <br/>
                        Ruhsat ve Denetim Müdürlüğü; 27.11.2011 tarih ve 28125 sayılı “Norm Kadro İlke ve Standartlarına Dair Yönetmelikˮ hükümlerine dayanılarak Gebze Belediye Meclisinin 02.03.2012 tarih ve 54 sayılı kararı gereğince kurulmuştur.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        İKİNCİ BÖLÜM
                        <br/>
                        TANIMLAR, GÖREV TANIMLARI
                        <br/>
                        Tanımlar
                        <br/>
                        Madde 5:
                        <br/>
                        a) Başkanlık		:  Gebze Belediye Başkanlığını,
                        <br/>
                        b) Müdürlük		:  Ruhsat ve Denetim Müdürlüğünü,
                        <br/>
                        c) Müdür		:  Ruhsat ve Denetim Müdürünü,
                        <br/>
                        d) Ruhsat Müracaat ve Kontrol Servis Sorumlusu: İşyeri Açma ve Çalışma Ruhsat işlemlerini yürüten servis personelinin çalışmalarından sorumlu personeli,
                        <br/>
                        e) Strateji Planlama ve Yazı İşleri Servisi Sorumlusu: Genel evrak yazışma ve kayıtları, personel işlemleri, Müdürlük performans göstergeleri ve bütçe hesaplamaları işlemlerini yürüten personeli,
                        <br/>
                        f) Strateji Geliştirme ve Kalite Yönetim Temsilcisi: Belediye Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporları, İç Kontrol Eylem Planı ve ISO 9001: 2015 Kalite Yönetim Sistemi Uygulama çalışmalarını yürüten temsilciyi,  ifade eder.
                        <br/>
                        <br/>
                        <br/>
                        Genel Görev Tanımları
                        <br/>
                        1.	Madde 6:
                        <br/>
                        2.	Belediye sınırları içindeki ticari ve ekonomik faaliyetlerde; 5393 sayılı Belediye Kanunu, 3572 sayılı İşyeri Açma ve Çalışma Ruhsatlarına Dair Kanun Hükmünde Kararnamenin Değiştirilerek Kabulüne Dair Kanunu, 14 Temmuz 2005 tarih ve 2005/9207 sayılı İşyeri Açma ve Çalışma Ruhsatlarına İlişkin Yönetmelik , 2559 sayılı Polis Vazife ve Selahiyet Kanunu, 3194 Sayılı İmar Kanunu, 5216 Sayılı Büyükşehir Belediye Kanunu ve  ilgili kanunlar, kararname, yönetmelik ve talimatnameler ile  Belediye Meclisi ve Encümen Kararlarının ilgilendirdiği konuları planlı programlı ve verimli şekilde yürütmek,
                        <br/>
                        3.	Belediye hudutları içerisinde tüm sıhhi müesseselerle, 2. ve 3.sınıf gayri sıhhi müesseselere, umuma açık işyerlerine ruhsat verme görevini yapmak,
                        <br/>
                        4.	Büyükşehir Belediyesinin sorumlu olduğu alanlarda Belediye emir ve yasakları konusunda koordineli çalışmak,
                        <br/>
                        5.	Müdürlüğümüze ait stratejik hedefleri belirleyerek bu hedefler doğrultusunda performans göstergelerini oluşturmak,
                        <br/>
                        6.	Performans göstergelerinin yıl içerisinde periyodik kontrollerini yaparak stratejik hedeflere uygunluğunu takip etmek,
                        <br/>
                        7.	Müdürlüğümüzün yıllık faaliyet ve performans esaslı bütçesini hazırlamak,
                        <br/>
                        8.	Müdürlüğümüzün aylık faaliyet raporlarını hazırlayarak kalite yönetim sistemine ve Başkan Yardımcısına göndermek,
                        <br/>
                        9.	Müdürlüğümüzün yıllık eğitim ve seminer programlarını planlayarak yıl içerisinde İnsan Kaynakları Müdürlüğü ile uygulamasını sağlamak,
                        <br/>
                        10.	Müdürlüğümüz bünyesinde çalışan personelin görev ve tanımlarını koşullara uygun şekilde revize edilmesini sağlamak,
                        <br/>
                        11.	Müdürlüğümüzde ehliyeti olan personeli komisyonda şoför olarak görevlendirmek,
                        <br/>
                        12.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek,
                        <br/>
                        13.	Müdürlük yıllık bütçesini hazırlamak,
                        <br/>
                        14.	Mesleki konularda birim içi ve birim dışı eğitim çalışmalarını yapmak.
                        <br/>
                        15.	Görev Unvanı: Müdür
                        <br/>
                        16.	I-Görev ve Sorumlulukları:
                        <br/>
                        17.	Madde 7:
                        <br/>
                        <br/>
                        <br/>
                        1.	Müdürlüğü Başkanlık Huzurunda temsil eder. Tam yetkili ve sorumlu kişidir.
                        <br/>
                        2.	Kanunlarda, yönetmeliklerde, meri mevzuat hükümlerinde, belediye meclisi, belediye encümeni ve belediye başkanı tarafından verilen görev ve sorumlulukları yerine getirmek,
                        <br/>
                        3.	Belediye suçlarının işlenmesini önleyici idari tedbirleri almak, bu suçları işleyenlere karşı verilecek cezaları takip etmek,
                        <br/>
                        4.	Belediye Ruhsat ve Denetim Müdürlüğünün en üst Amirliği sıfatıyla Ruhsat ve Denetim çalışmalarını yasal olmak kaydıyla yazılı ve sözlü emirlerle yürütür,
                        <br/>
                        5.	Belediye Ruhsat ve Denetim Müdürü sıfatıyla, Belediye Ruhsat ve Denetim birinci sicil amiri olup memur personelin başarı ve performans değerlendirmesi yapmak,
                        <br/>
                        6.	Disiplin amirleri yönetmeliğince kendisine verilen görevi yapmak,
                        <br/>
                        7.	Müdürlüğün sevk, idare ve disiplininden sorumludur,
                        <br/>
                        8.	Günlük, haftalık, yıllık müdürlük faaliyetlerini kontrol etmek,
                        <br/>
                        9.	Müdürlüğün mal ve hizmet alım işlemlerini yürütmek,
                        <br/>
                        10.	Sıhhi, Gayri sıhhi ve umuma açık istirahat ve eğlence yerlerine işyeri açma ve çalışma ruhsatı vermek ve denetlemek,
                        <br/>
                        11.	Ruhsat ve Denetim Müdürlüğünün görev alanına giren sözlü, yazılı ve benzeri şekilde gelen şikâyetleri değerlendirmek,
                        <br/>
                        12.	İşyeri açma ve çalıştırma ruhsatlarının verilmesinde ve işyerlerin denetimlerinden sorumlu olmak,
                        <br/>
                        13.	Üstlerinden aldığı emir ve görevleri yerine getirmek,
                        <br/>
                        14.	Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek.
                        <br/>
                        15.	Görev Unvanı: Ruhsat ve Kontrol Servisi
                        <br/>
                        16.	I-Görev ve Sorumlulukları:
                        <br/>
                        17.	Madde 8:
                        <br/>
                        <br/>
                        <br/>
                        18. Ruhsat Servisi evrak kayıt işlemlerini yürütmek,
                        <br/>
                        1.	Sıhhi işyerleri, Umuma Açık İşyerleri ile 2. ve 3. sınıf Gayri Sıhhi Müessese işyerlerine, işyeri açma ve çalışma ruhsatı düzenlemek, gerekli durumlarda ruhsat iptali, Ruhsat devir, intibak ve güncelleme işlemlerinin yerine getirilmesi, Mesul Müdürlük belgesi verilmesi, ruhsat aşamasında kontrol etmek  gerek görürse ilgili birimlere havale etmek. Ruhsat verilen işyerlerine ait ruhsat dosyalarını arşivlemek, gerekli görülmesi halinde müdürlük çalışması ile ilgili olarak belediye meclisi ve belediye encümeninden kararlar aldırmak,
                        <br/>
                        2.	Sıhhi Müesseseler sınıfındaki işyerlerinin İşyeri Açma ve Çalışma ruhsatları başvurularının kabul edilmesi, gerekli evrakların istenmesi, işyerlerinin kontrol edilmesi, ruhsatlarının düzenlenmesi veya reddedilmesi ile ilgili tüm işlemleri gerçekleştirmek, Alkollü içki satış noktalarına yönelik uygulamaya konulan mesafe şartına ilişkin faaliyetine izin verilen işyerinin mesafe şartına uygunluk yazısı yazmak,
                        <br/>
                        3.	Umuma Açık İstirahat ve Eğlence yerlerinin İşyeri Açma ve Çalışma Ruhsat başvurularının değerlendirilmesi, bu tip işyerleriyle alakalı olarak Emniyet Müdürlüğü, Zabıta Müdürlüğü ve İmar Müdürlüğü ile koordineli çalışma ve yazışmalar yapmak, İşyerlerinin ruhsat kriterleri açısından uygun olup olmadığını ruhsat düzenlenmeden önce kontrol etmek, rapor tanzim edilmesi ve bunların sonucunda İşyeri Ruhsatı düzenlenmesi veya talebin reddi ile ilgili tüm işlemleri gerçekleştirmek,
                        <br/>
                        4.	2. ve 3. sınıf Gayri Sıhhi Müesseselerin kurulmadan önce başvuruları alarak mevzuat ve çevre sağlığı açısından mahallinde tetkik etmek, gerekli görüldüğü durumlarda ilgili kurum ve kuruluşların görüşlerini alarak, uygun görülenlerin çalışma ruhsatlarını tanzim etmek,
                        <br/>
                        5.	Amirlerince Kanun, Tüzük, Yönetmelik, Genelgeler ve diğer mevzuatlara uygun olarak verilecek her   türlü görevleri zamanında ve eksiksiz olarak yerine getirmek,
                        <br/>
                        6.	İşyerleri ile ilgili gerek duyulan konuların Encümen’e veya Belediye Meclisine havale edilmesi ve çıkan kararları, işyeri sahiplerine tebliğ etmek ve benzeri konular ile ilgili her türlü işlemleri yapmak ve yaptırtmak,
                        <br/>
                        7.	İşyerini kapatan esnaflar ile ilgili İşyeri Açma ve Çalışma Ruhsatlarının iptali ile ilgili her türlü işlemler ve yazışmaları yapmak,
                        <br/>
                        8.	2559 sayılı Polis Vazife ve Selahiyat Kanununun 8. maddesinde belirtilen fiiller sebebi ile 3 defa faaliyetten men edilen işyerlerinde bu fiillerin tekrarı halinde İşyeri Açma ve Çalışma Ruhsatlarının iptal edilmesi ve bununla ile ilgili tüm işlemler ve tebliğleri yapmak,
                        <br/>
                        9.	Verilen İşyeri Açma ve Çalışma Ruhsatlarının aylık olarak Sosyal Güvenlik Kurumu İl Müdürlüğü, Ticaret Odası Başkanlığına, Esnaf ve Sanatkarlar Odaları Birliği, İlçe Gıda, Tarım ve Hayvancılık Müdürlüğü ve Bilim Sanayi ve Teknoloji İl Müdürlüğüne gönderilmesi, Umuma Açık İstirahat ve Eğlence Yerleri Ruhsatlarının da Gebze Emniyet Müdürlüğü’ne ve Kaymakamlık Makamına bildirilmesini gerçekleştirmek,
                        <br/>
                        10.	Ruhsatlı işyerlerinin sahibinin ölümü halinde kanuni mirasçılar adına Ruhsat intibakının yapılması, işyerinin devredilmesi halinde ise tüm ruhsatla ilgili devir işlemleri ve yazışmaları gerçekleştirmek,
                        <br/>
                        11.	Emniyet Müdürlüğü ve Zabıta Müdürlüğü tarafından; Müdürlüğümüze gönderilen işyeri tutanaklarına istinaden ilgili işyerlerine cezai işlem uygulanması ile ilgili her türlü işlemleri yapmak,
                        <br/>
                        12.	Müdürlük makamının vereceği diğer görevleri yerine getirmek.
                        <br/>
                        <br/>
                        <br/>
                        13.	Görev Unvanı: Strateji Geliştirme ve Kalite Yönetim Temsilcisi
                        <br/>
                        14.	I-Görev ve Sorumlulukları:
                        <br/>
                        15.	Madde 10:
                        <br/>
                        <br/>
                        <br/>
                        16.	Belediye Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve ISO 9001:2015 Kalite Yönetim Sistemi uygulamalarında birim temsilcisi olarak görev yapmak ve hazırlama çalışmalarında bulunmak,
                        <br/>
                        17.	Birimi ile ilgili dönemsel olarak performans ve kalite hedeflerini belirlemek, izlemek ve bu hedeflerine uygun faaliyetlerde bulunmak,
                        <br/>
                        18.	Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve ISO 9001:2015 Kalite Yönetim Sistemi ile ilgili birim aylık raporlarını düzenleyerek üst yönetime sunmak,
                        <br/>
                        19.	Belediye Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı uygulamalarına ve Kalite politikasının benimsenmesine yönelik olarak çalışmalarda bulunmak ve gereklerini yerine getirilmesini sağlamak,
                        <br/>
                        20.	Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite El Kitabında birimi ile ilgili bölümü hazırlamak ve yılda bir kez gözden geçirmek, gerekirse revize etmek,
                        <br/>
                        21.	İç denetim faaliyeti kapsamında denetçilere birimi ile ilgili konularda bilgi vermek ve Biriminde Kalite Yönetim Sistemi’nin etkinliği konusunda rapor hazırlamak ve Yönetimin Gözden Geçirmesi toplantısına sunmak üzere Kalite Yönetim Koordinatörlüğüne iletmek,
                        <br/>
                        22.	Sistemde birimi ile ilgili doğabilecek uygunsuzlukların belirlenmesi ve giderilmesi için düzeltici, önleyici faaliyetlerin planlanması ve takibi işlemlerini yapmak,
                        <br/>
                        23.	Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite ile ilgili kurum içi ve kurum dışı toplantılara ve eğitimlere katılmak,
                        <br/>
                        24.	Yönetim tarafından oluşturulmuş olan diğer kurallar çerçevesinde ve Stratejik Plan, Performans Esaslı Bütçeleme, Faaliyet Raporu, İç Kontrol Eylem Planı ve Kalite Yönetim Sistemi içinde hazırlanmış dokümanlarda belirtilen diğer görevlerini yerine getirmek,
                        <br/>
                        <br/>
                        <br/>
                        25.	Görev Unvanı: Strateji Planlama ve Yazı İşleri Servisi
                        <br/>
                        26.	I-Görev ve Sorumlulukları:
                        <br/>
                        27.	Madde 11:
                        <br/>
                        <br/>
                        <br/>
                        28.	Mevzuat geliştirme işlemlerini yürütmek,
                        <br/>
                        29.	Genel evrak kayıt işlemlerini yürütmek,
                        <br/>
                        30.	Ruhsat ve Denetim Müdürlüğü personel işlerini yürütmek,
                        <br/>
                        31.	Müdürlükçe verilen görevleri yürütmek,
                        <br/>
                        32.	Üstlerinden aldığı emir ve görevleri yerine getirmek,
                        <br/>
                        33.	Servisine havale edilen evrakın gereğini yerine getirmek ve servisinden çıkan evrakların arşivleme işlemlerini yürütmek,
                        <br/>
                        34.	Servisin görev alanına giren iş ve işlemlerini planlama uygulama kontrol etme önlem alma ve sürekli iyileştirme işlemlerini yürütmek,
                        <br/>
                        35.	Personelin yıllık izinlerini planlamak,
                        <br/>
                        36.	Müdürlüğümüze ait stratejik hedefleri belirleyerek bu hedefler doğrultusunda performans göstergelerini oluşturmak,
                        <br/>
                        37.	10. Performans göstergelerinin yıl içerisinde periyodik kontrollerini yaparak stratejik hedeflere uygunluğunu takip etmek,
                        <br/>
                        38.	11.  Müdürlüğümüzün yıllık faaliyet ve performans esaslı bütçesini hazırlamak,
                        <br/>
                        39.	12. Müdürlüğümüzün aylık faaliyet raporlarını hazırlayarak kalite yönetim sistemine ve Başkan Yardımcısına göndermek,
                        <br/>
                        40.	13. Müdürlüğümüzün yıllık eğitim ve seminer programlarını planlayarak yıl içerisinde İnsan Kaynakları Müdürlüğü ile uygulamasını sağlamak,
                        <br/>
                        41.	14. Müdürlüğümüz bünyesinde çalışan personelin görev ve tanımlarını koşullara uygun şekilde revize edilmesini sağlamak,
                        <br/>
                        42.	15. Kalite Yönetim Sistemi çalışmalarını uygulamak ve geliştirmek,
                        <br/>
                        43.	16. Mesleki konularda birim içi ve birim dışı eğitim çalışmalarını yapmak.
                        <br/>
                        44.	Organizasyon Şeması
                        <br/>
                        45.	Madde 12:
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        ÜÇÜNCÜ BÖLÜM
                        <br/>
                        FAALİYETLER
                        <br/>
                        <br/>
                        <br/>
                        Faaliyetler
                        <br/>
                        1.	Madde 13:
                        <br/>
                        2.	Sınırlarımız içerisinde faaliyet gösteren işyerlerini ruhsatlandırmak,
                        <br/>
                        3.	Umuma açık işyerlerinde çalışan personele mesul müdürlük belgesi vermek,
                        <br/>
                        4.	İşyeri ruhsatlarını değişen adreslere göre güncellemek,
                        <br/>
                        <br/>
                        <br/>
                        a.	DÖRDÜNCÜ BÖLÜM
                        <br/>
                        5.	MÜDÜRLÜK İÇİ DENETİM, DİSİPLİN CEZALARI
                        <br/>
                        6.	Müdürlük İçi Denetim
                        <br/>
                        7.	Madde 14:
                        <br/>
                        8.	Personel en yakın amirinden başlayarak denetime tabi tutulur.
                        <br/>
                        9.	Ruhsat ve Denetim Müdürü tüm personelini her türlü denetleme yetkisine sahiptir.
                        <br/>
                        10.	Disiplin Cezaları
                        <br/>
                        11.	Madde 15:
                        <br/>
                        12.	Ruhsat ve Denetim Müdürlüğü çalışan tüm personelle ilgili disiplin işlemlerini 657 sayılı Devlet memurları Kanunu ile 4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun hükümlerine ve yürürlükteki ilgili diğer mevzuata uygun olarak yürütülür.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        BEŞİNCİ BÖLÜM
                        <br/>
                        ÇEŞİTLİ VE SON HÜKÜMLER
                        <br/>
                        <br/>
                        <br/>
                        Yönetmelikte Hüküm Bulunmayan Haller
                        <br/>
                        Madde 16:
                        <br/>
                        İş bu yönetmelikte hüküm bulunmayan hallerde yürürlükteki ilgili mevzuat hükümlerine uyulur.
                        <br/>
                        <br/>
                        <br/>
                        Yürürlük
                        <br/>
                        Madde 17:
                        <br/>
                        Bu yönetmelik Belediye Meclisi tarafından onaylanmasını takiben 3011 sayılı Resmi Gazetede Yayımlanacak Olan Yönetmelikler hakkında kanun doğrultusunda ilan edildiği tarihte yürürlüğe girer.
                        <br/>
                        <br/>
                        <br/>
                        Yürütme
                        <br/>
                        Madde 18:
                        <br/>
                        Bu yönetmelik hükümlerini Belediye Başkanı yürütür.
                    </p>
                </section>
                <section id="bolum2" className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
                    <h3 className="text-lg font-bold text-center"></h3>
                    <p className="text-gray-700 text-left">
                        25.06.1986 yılında Ankara’ da dünyaya geldi.
                        İlk ve ortaokulu Adana’ da liseyi Erzurum Lisesinde tamamladı.
                        2003 yılı üniversite giriş sınavı neticesinde Gaziantep Üniversitesi Gıda Mühendisliği Bölümüne yerleşti. Aynı bölümden 2008, 2011 ve 2018 yıllarında sırasıyla Lisans, Yüksek lisans ve Doktora derecelerini alan Erhan Horuz yine aynı bölümde 8 yıl Araştırma Görevlisi olarak görev yaptı.
                        2019 yılında Gaziantep Büyükşehir Belediyesine naklen geçiş yaptı ve Tarımsal Hizmetler ve Çevre Koruma ve Kontrol Daire Başkanlıklarında Mühendis unvanı ile görev yaptı.
                        Nisan 2020 itibariyle Gebze Belediyesi bünyesine dahil oldu. Ağustos 2020 itibari ile de Ruhsat ve Denetim Müdür Vekili olarak görevini sürdürmektedir.
                        Evli ve 2 çocuk babası olan Erhan Horuz’ un Science Citation Index‘ de taranan dergilerde yayımlanmış 9 adet makalesi olup çalışmalarına 400’ in üzerinde atıf yapılmıştır.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Hasangüler;
