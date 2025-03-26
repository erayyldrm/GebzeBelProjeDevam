import React from "react";

const Muratanca: React.FC = () => {
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
                        src="/images/kurumsal/mudurlukler/avatar-9.jpg"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">Hukuk İşleri Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" /> Av. Murat TANCA
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" /> hukuk@gebze.bel.tr
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
                        GENEL HÜKÜMLER
                        <br/>
                        AMAÇ
                        <br/>
                        MADDE 1
                        <br/>
                        Bu Yönetmeliğin amacı, Hukuk işleri Müdürlüğünün görev, çalışma teşkilat yapısını, işleyişini ve yetkileri ile sorumluluğunu düzenlemektir.
                        <br/>
                        DAYANAK
                        <br/>
                        MADDE 2
                        <br/>
                        Bu Yönetmelik, 5393 sayılı Belediye Kanununun 15/b, 1136 sayılı Avukatlık Kanunu hükümlerine dayanılarak hazırlanmıştır.
                        <br/>
                        TANIMLAR
                        <br/>
                        MADDE 3
                        <br/>
                        Bu Yönetmelikte adı geçen;
                        <br/>
                        Yönetmelik: Gebze  Belediye Başkanlığı Hukuk İşleri Müdürlüğü Görev ve Çalışma Yönetmeliğini,
                        <br/>
                        Belediye: Gebze  Belediye Başkanlığını,
                        <br/>
                        Başkan   : Gebze  Belediye Başkanını,
                        <br/>
                        Meclis    : Gebze Belediye Meclisini,
                        <br/>
                        Müdürlük: 5393 Sayılı Belediye Kanununun 48.maddesi gereğince, Belediye ve Bağlı Kuruluşları ile Mahalli İdare Birlikleri Norm Kadro İlke ve Standartlarına İlişkin Esaslar çerçevesindeki Hukuk İşleri Müdürlüğünü,
                        <br/>
                        Hukuk İşleri Müdürü: Birim müdürünü veya müdür vekilini ve sadece verilen yetkiyi kullandığı alanlara münhasır olmak üzere müdür tarafından verilen imza yetkisini kullananları,


                        <br/>
                        Avukat: Belediyenin norm kadro ilke ve standartlarına göre, Müdürlük bünyesinde ihdas edilmiş olan Avukat kadrolarına daimi veya sözleşmeli memur statüsünde atanan, avukatlık ruhsatına sahip ve avukatlık mesleğini icra etme yetkisi bulunan kişileri,


                        <br/>
                        Büro Personeli: Belediyenin memur veya işçi kadrolarında istihdam edilmiş olup ihtiyaca göre Belediye Başkanı tarafından Müdürlükte görevlendirilen veya Müdürlüğün ilgili kadrolarına atanan ve evrak kayıt-takip, yazım, dosyalama, arşiv, mutemetlik, tahakkuk memurluğu ve diğer idari hizmetlerini yürüten personeli, ifade eder.

                        <br/>

                        MÜDÜRLÜĞÜN GÖREVİ
                        <br/>
                        MADDE 4
                        <br/>
                        Belediye Başkanına bağlı olarak görev yapan Müdürlük;
                        <br/>
                        a)Belediyenin davacı veya davalı sıfatında bulunduğu adli ve idari yargı yerlerinde, icra-iflas dairelerinde, noterlerde, hakemler ve resmi kurum ve kuruluşlarda; Belediye hak ve menfaatlerinin korunması için, Belediye tüzel kişiliğini vekaleten temsil etmek, dava açmak, açılan davalara katılmak, icra takipleri yapmak ve yürütmek, gerekli savunmaları yapmak, deliller ibraz ederek dava ve icra-iflas takiplerini sonuçlandırmak, aleyhe karara karşı kanun yollarına başvurmak;
                        <br/>
                        b)Belediye Encümeni ve Müdürlüklerin kendi görevlerini yapmaları veya yetkilerini kullanmaları esnasında karşılaştıkları sorunlar veya mevzuatın yorumlanması hususundaki hukuki mütalaa taleplerini karşılamak;
                        <br/>
                        c)Müdürlüğün rutin işleyişi ile ilgili idari iş ve işlemleri yapmak;
                        <br/>
                        d)Adli ve idari görevlerin ifası için bütçe ile tahsis edilen ödeneği kullanmak, harcamaları yapmak ve bunun için gerekli sarf belgelerini düzenlemek;
                        <br/>
                        e)Başkanlık Makamı tarafından tevdi edilen diğer görevleri yapmakla görevlidir.
                        <br/>
                        MÜDÜRLÜĞÜN YETKİSİ
                        <br/>
                        MADDE 5
                        <br/>
                        Müdürlük, yukarıda belirtilen ve diğer mevzuat gereğince yüklenen görevlerini yaparken Başkanın Müdürlük Avukatlarını vekil tayin ettiği vekaletnamedeki yetkilere sahiptir.
                        <br/>
                        SORUMLULUK
                        <br/>
                        MADDE 6
                        <br/>
                        Müdürlüğe ait görevlerin yapılmasında; Müdürlük idari personeli ve avukatlar Müdüre, Müdür de Belediye Başkanına ve var ise bağlı olunan Başkan Yardımcısına karşı sorumludurlar.
                        <br/>
                        PERSONELİN NİTELİKLERİ, GÖREV, YETKİ VE SORUMLULUKLARI
                        <br/>
                        KURULUŞ
                        <br/>
                        MADDE 7
                        <br/>
                        Müdürlük, Hukuk işleri Müdürü ve kadro sayıları ile derece-kademeleri norm kadro ilke ve standartları çerçevesinde belirlenen kadrolara Belediye Başkanı tarafından atanan veya görevlendirilen avukatlar ile idari personelden oluşur.



                        <br/>



                        MÜDÜRÜN GÖREV, YETKİ VE SORUMLULUĞU
                        <br/>
                        MADDE 8
                        <br/>
                        Hukuk işleri Müdürü, Müdürlüğün yönetiminde tam yetkili ve sorumlu olup avukatlar arasından atanır. Müdürlüğü Başkanlığa karşı temsil eder. Müdürlüğün çalışmalarını düzenler, yönetir, denetler. Müdürlük içi yönergeler yayınlar. Gelen idari ve adli evrakın, ilgili personele dağıtımını yapar. Müdürlük personelinin özlük ve sicillerini düzenler.

                        Diğer Müdürlüklerle gerekli adli ve idari yazışmaları hazırlar. Adli ve idari dava dosyalarının avukatlara dağıtımını yapar. Hukuki görüş taleplerini inceleyerek bizzat veya uygun gördüğü avukat aracılığıyla rapora bağlayarak, imzalayacağı bir üst yazıyla talepte bulunan Müdürlüğe bildirir.

                        Başkanlığın uygun görmesiyle Belediye Encümenine ve/veya diğer ihtisas komisyonlarına veya kurallara görevlendirilirse bu görevleri de yerine getirir.

                        Müdürün izin, istirahat, geçici görev, azil veya açığa alınma gibi nedenlerle görevi başında bulunmadığı durumlarda müdüre ait görev ve yetkiler; Müdürlük avukatları arasından Başkanlık Makamı tarafından görevlendirilen vekil tarafından yürütülür.
                        <br/>
                        AVUKATLARIN GÖREV, YETKİ VE SORUMLULUĞU
                        <br/>
                        MADDE 9
                        <br/>
                        Avukatlar, 1136 sayılı Avukatlık Kanunu ile Başkanlığa izafeten Belediye Başkanının kendilerini vekil tayin ettiği vekaletnamedeki yetkiler çerçevesinde; adli, idari, mali yargı yerleri ile hakem heyetlerinde Belediye Başkanlığının lehine dava açmak, takip başlatmak ve aleyhte açılmış tüm dava ve icra-iflas takiplerini her aşamada yürütmek ve sonuçlandırmakla görevli, yetkili ve sorumlu olup bu bağlamda Belediye Başkanlığının hak ve menfaatlerinin korunması için ilk derece Mahkemeleri ile Bölge Adliye Mahkememsi’nde, Bölge İdare Mahkemesi’nde,  Yargıtay’da, Danıştay’da duruşmalara, keşiflere katılırlar. Dava ve icra-iflas takipleri için ihtiyaç duyulan bilgi ve belgelerin temini için kurum, kuruluşlar ile tüm gerçek veya tüzel kişilere müracaatla talepte bulunma yetkisine sahiptirler.

                        <br/>

                        Mesleki bilgi gerektiren hususlarda; talep halinde Belediyemiz bünyesinde veya yasal usullere uyulmak kaydıyla diğer kurumlarda oluşturulan kurullar veya komisyonlarda da avukatlar görevlendirilebilirler.

                        Avukatlar, Avukatlık mesleğiyle bağdaşmayan işlerden olmamak kaydıyla ve gerektiğinde Başkanlık veya Müdürlük tarafından kendilerine tevdi edilen raportörlük, muhasiplik, mutemetlik ve diğer idari görevleri de yürütürler.

                        Avukatlar, kendilerine verilen dava ve icra-iflas dosyalarındaki belgeler ile idari türden belgelerin saklanmasından ve işi bitip ilgili yerlere iadesi gerekenlerin iadesinden; sonuçlanan iş ve işlemleri, gereği yapılmak üzere ilgili birimlere zamanında bildirmekle görevli ve sorumludurlar.

                        Müdürlük temsilcisinin de bulunması gereken Müdürlükler arası kurul veya toplantıya Müdürün görevlendirdiği avukat, Müdürlüğü temsilen katılır.

                        Müdürlük tarafından gerekli görülen toplantılara ve çalışmalara avukatlar katılır, katılan avukatlar istişare görüşünü bildirir ve gerekli diğer katkıları sağlarlar.

                        <br/>

                        BÜRO PERSONELİNİN NİTELİĞİ
                        <br/>
                        MADDE 10
                        <br/>
                        Müdürlüğün büro personeli; Müdürlüğün işleyişi için ayniyat, kalem, tahakkuk, evrak yazım ve takip, arşiv memurluğu gibi tüm idari işlerini yürütmek üzere Müdürlüğe tahsis edilmiş kadrolarda istihdam edilen  veya Başkanlıkça, Müdürlükte görevlendirilen, avukatlar dışındaki memur veya işçi statüsündeki Belediye personelinden oluşur.
                        <br/>
                        BÜRO PERSONELİNİN GÖREV, YETKİ VE SORUMLULUĞU
                        <br/>
                        MADDE 11
                        <br/>
                        Büro personeli, Müdürün görev taksimi suretiyle, işbirliği içinde ve birbirleri ile koordineli şekilde aşağıdaki görevleri yaparlar:
                        <br/>
                        a)Müdürlüğe gelen tüm evrakın adli, idari tasnifini yaparak ilgili defterlere kaydedilmesini takiben avukatlara veya ilgili personele dağıtımı yapılmak üzere Müdür görüş ve imzasına sunmak; Müdür havalesinden sonra, gereği yapılmak üzere ilgili personele, zimmet defterine kayıt suretiyle teslimini yapmak;
                        <br/>
                        b)Müdürlük veya Müdürlük avukatları adına gelen adli veya idari tebligatları tebellüğ etmek;
                        <br/>
                        c)Giden evrakın dosya veya Müdürlük nüshasını ayırdıktan sonra giden evrak ve zimmet defterlerine kayıt suretiyle ilgili yerlere teslim veya tevdiini yapmak; Mahkemelere gidecek dava, cevap dilekçeleri ile ibraz edilecek delil listeleri ve sair belgeleri ilgili Mahkemelerine, icra-iflas dairelerine süresinde teslim etmek veya ilgili Mahkemesine, icra-iflas dairelerine gönderilmek üzere muhabere kalemine teslim etmek; dava ve icra-iflas takiplerinin sonuçlanması için gerekli harç, damga vergisi, keşif, bilirkişi, posta ücretleri gibi Müdürlük bütçesinden karşılanan yargılama giderlerini ilgili yerlere yatırmak, sarf belgelerini temin ederek Müdürlük giderlerine usulünce işlemek;
                        <br/>
                        d)Müdürlüğün tüm adli ve idari yazılarını yazıp ilgili avukat ve müdür imzasına sunmak, imzadan sonra ilgili yerlere çıkışını yapmak;
                        <br/>
                        e)Müdürlük büro personelinin görev ve yetkisinde olup belirtilen görevi süresinde ve gereği gibi yerine getirmeyenler hakkında 657 sayılı Devlet Memurları Kanununun 125. ve devamı maddelerine göre disiplin işlemi yapılır. Görevi ihmal veya kötüye kullanma hakkındaki yasal hükümler saklıdır.
                        <br/>
                        DAVA AÇILMASI, İCRA-İFLAS TAKİBİ YAPILMASI
                        <br/>
                        MADDE 12
                        <br/>
                        Belediyeye vekaleten, gerçek veya tüzel kişi üçüncü şahıslar aleyhinde dava açmak veya icra-iflas takibi yapılması gereken hallerde; konu hangi Müdürlüğün görev alanına giriyor ise ilgili Müdürlük tarafından gerekçesi belirtilmek ve ilgili tüm bilgi ve belgeler eklenmek suretiyle, Başkanlık Onayı alınarak dava açılması veya icra-iflas takibi yapılması talebi hukuk işleri Müdürlüğüne intikal ettirilir. Gelen onay yazısı üzerine Müdür tarafından derhal bir avukat görevlendirilir ve avukat, bilgi ve belgeleri mesleki bilgi ve birikimi çerçevesinde değerlendirip, gerekirse diğer meslektaşları ile istişare ederek başvurulacak yasal yolu en kısa sürede tespit edilip yasal işlemi başlatır.


                        <br/>
                        AÇILMIŞ DAVA VE İCRA TAKİPLERİNDE YAPILACAK İŞLEM
                        <br/>
                        MADDE 13
                        <br/>
                        Belediye aleyhine dava açıldığında veya icra takiplerinde; buna ilişkin dava dilekçesi, ödeme veya icra emrini alan tüm Müdürlükler, savunmaya esas olacak tüm bilgi ve belgeler ile delillerini liste, gerekiyorsa dosya halinde ilgili yazıya ekleyerek en kısa sürede; süreli durumlarda ise Müdürlükçe savunma için değerlendirme yapılabilmesi için süre bitiminden en az üç (3) gün önce Hukuk işleri Müdürlüğüne teslim edeceklerdir. Teslim edilen evraklar   Müdür tarafından hemen bir avukata havale edilerek Müdürlüğün ilgili dava defterine kaydedilerek dosyası açılır ve dosya zimmetle ilgili avukata teslim edilir. Avukat da en kısa sürede dosyayı inceleyerek değerlendirmesini yapıp gerekli yasal işlemi yapar.

                        Dava dilekçesi, ödeme veya icra emri doğrudan veya genel evrak bürosu aracılığıyla Müdürlüğe intikal ettiğinde, Müdürlükte yukarıdaki şekilde dosya oluşturulup avukata teslim edildikten sonra ilgili tüm Müdürlüklere dava dilekçesi, icra emri veya ödeme emri ile varsa Ara Kararı yada Yürütmeyi Durdurma Kararı  gönderilerek savunmaya ilişkin tüm bilgi ve belgeler yukarıdaki usulde ilgili Müdürlüklerden temin edilerek yasal gereği yapılır.

                        Belediyenin taraf olduğu dava veya icra takipleri hakkında verilmiş nihai kararlara karşı, dosya avukatı tarafından itiraz, temyiz, kararın düzeltilmesi, yargılamanın iadesi gibi yasal yollara  başvurulmakla birlikte, bu kararlar gereğince bir idari işlem tesisi gerektiği hallerde ilgili Müdürlükte gecikmeksizin işlem tesisine başlayacaktır.

                        DAVADAN, İCRA-İFLAS TAKİBİNDEN, KANUN YOLLARINA BAŞVURUDAN
                        <br/>
                        FERAGAT
                        <br/>
                        MADDE 14
                        <br/>
                        Belediyenin taraf olduğu dava veya icra takiplerine devam edilmesinde veya kanun yollarına başvurulmasında hukuki yarar bulunmaması veya başlangıçta bulunan hukuki yararın ortadan kalkması durumunda, dava ve icra takiplerine devam edilmemesi veya kanun yollarına başvurulmaması gerektiğinde;

                        Hukuk işleri Müdürlüğü tarafından; takibinde veya yasal yollara başvurulmasında yarar bulunmadığını veya kalmadığını ortaya koyan, ilgili Müdürlüğün maddi, teknik görüşleri ile buna dair hukuki gerekçeyi içerecek şekilde Başkanlık Makamından onay alınması zorunludur.

                        DAVANIN SULH İLE TASFİYESİ, KABUL VE FERAGAT
                        <br/>
                        MADDE 15
                        <br/>
                        Vergi, resim ve harçlar dışında kalan ve dava konusu olan Belediye uyuşmazlıklarının sulh ile tasfiyesi, kabul ve feragat için 5393 sayılı yasaya göre Belediye Meclisi veya Encümenince bu konuda karar alınması gereklidir.


                        <br/>


                        HUKUKSAL GÖRÜŞ BİLDİRİLMESİ
                        <br/>
                        MADDE 16
                        <br/>
                        Müdürlükler, kendi görev ve yetki alanları ile ilgili yasal mevzuatın yorumunda veya maddi olaylar ile idari işlemlere uygulanması gereken yasal mevzuat konusunda ya da belge ve bilgilerin değerlendirilmesi karşısında sorunla karşılaştıkları takdirde; hukuki yorum gerektiren olay, bilgi veya belgeler ile hukuki çözüm talep edilen hususu somut ve açık olarak belirtip; buna ilişkin müdürlük görüşünü ve belgeleri de ekleyerek hukuki görüş talep ederler.

                        Hukuki görüş talebi, Müdür tarafından bir avukata havale edilir. Avukat, talep gerekçesi ile belge ve delillerin maddi ve yasal mevzuat çerçevesinde hukuki değerlendirmesini yaparak, gerekirse diğer avukatlarla veya konunun uzmanlarıyla istişare ederek görüşünü rapor halinde Müdürlüğe sunar. Bu rapor Müdürlüğün hukuki görüşü olarak ilgili Müdürlüğe bildirilir.

                        Belli bir konu hakkında bildirilmiş  hukuki görüş benzer mahiyetteki olaylar hakkında da örnek teşkil etmekte olup, hukuki görüş talebi tekrarından kaçınılacaktır.

                        Takip edilmekte olan dava veya icra dosyaları ile ilgili olsun veya olmasın üçüncü şahıslara hukuki yardımda veya görüş bildiriminde bulunulmaz.

                        Hukuki görüş yazılarının yasal bağlayıcılığı bulunmayıp görüşü istenen hususla ilgili karar ve icra yetkisi görüş isteyen birime aittir, hukuki görüş yazıları  yol gösterici mahiyettedir.
                        <br/>
                        ARŞİVLEME
                        <br/>
                        MADDE 17
                        <br/>
                        Müdürlükten giden hukuki görüş yazıları ile her türlü evrakın birebir sureti ilgili klasörde saklanır. Adli veya idari inceleme için getirtilen belge veya dosya asılları ilgili birimlere zimmetle iade edilir. Sonuçlanan dava ve icra dosyaları, Müdür onayıyla, defter kayıtları kapatılarak arşive kaldırılır. Bu işlemlerin yapılmasında ilgili büro personeli sorumludur.
                        <br/>
                        İKİNCİ BÖLÜM
                        <br/>
                        İŞBİRLİĞİ VE KOORDİNASYON


                        <br/>
                        MÜDÜRLÜKLER ARASI KOORDİNASYON
                        <br/>
                        MADDE 18
                        <br/>
                        Belediyenin stratejik plan, yatırım ve çalışma programlarındaki hedefleri zamanında ulaşabilmesi, hizmette verimlilik ve çalışma barışının sağlanabilmesi için Müdürlükler arası koordinasyon ve yardımlaşma esastır. Müdürlükler birbirlerine karşı, hukuken eşit statüde olup, birbirlerine yazışmalarındaki hususları arz ederler.
                        <br/>
                        Başkanlık tarafından aksine bir karar alınmadığı sürece Müdürlük, Belediyenin diğer Müdürlükleriyle doğrudan yazışma yapar. Yazışmalar Müdürlük altı seviyelerde yapılmaz.

                        <br/>

                        DIŞ YAZIŞMALAR
                        <br/>
                        MADDE 19
                        <br/>
                        Belediye dışındaki kamu ve özel kurum ve kuruluşlar, gerçek ve tüzel kişiler ile yapılacak her türlü idari yazışma Müdürün parafı, Başkan veya yetkili Yardımcısının imzası ile yapılır.

                        <br/>

                        DENETİM, PERSONEL SİCİLLERİ
                        <br/>
                        DENETİM
                        <br/>
                        MADDE 20
                        <br/>
                        Müdürlüğün 5393 sayılı Belediye Kanununun 54. 55. ve 58.maddelerinde belirtilen denetim amaç, kapsam ve usulleri dışında ayrıca iş ve işlemlerin hukuka ve usule uygunluğu yönünden her zaman Müdürün denetimine tabidir. Bu kapsamda Müdür gerekli gördüğünde ilgili avukat ile büro personelinden, sonuçlandırdıkları işler ile iştirak edilen duruşma, keşif veya katıldıkları komisyon veya kurul çalışmaları hakkında rapor halinde bilgi isteyebilir. Müdür her türlü dosya ve evrakı her zaman inceleyebilir.
                        <br/>
                        Avukatların yargısal faaliyet kapsamında vekaletnamedeki yetkiye dayanarak yaptıkları avukatlık hizmeti 1136 sayılı Avukatlık Kanununun ilgili hükümleri kapsamında denetlenir.
                        <br/>
                        PERSONEL SİCİLLERİ VE DOSYALARI

                        <br/>

                        MADDE 21
                        <br/>
                        Müdürlükte çalışan tüm personelin,  İnsan Kaynakları Müdürlüğü tarafından tutulan özlük dosyalarının haricinde Müdürlükte çalışma onayından itibaren izin, istirahat, ceza, kademe ve derece ilerlemesi ile çeşitli görevlendirmelere ilişkin işlemlerini gösteren gölge dosyaları düzenlenir.
                        <br/>
                        Personelin özlük ve disiplin dosya  evrakları  genel usule göre İnsan Kaynakları Müdürlüğü tarafından tutularak gizli dosyalarında saklanır.

                        <br/>

                        ÇEŞİTLİ HÜKÜMLER
                        <br/>


                        AVUKATLIK ÜCRETİNİN DAĞITIMI

                        <br/>

                        MADDE 22


                        <br/>
                        Belediye lehine sonuçlanan dava ve icra takipleri nedeniyle hükme bağlanarak karşı taraftan tahsil edilen vekalet ücretlerinin; avukatlara (sözleşmeliler dahil) ve Müdürlükte fiilen çalışan personele dağıtımında 5393 sayılı Belediye Yasasının 82.maddesi hükmüne göre uygulama yapılır.



                        <br/>

                        İLİŞİK KESME
                        <br/>


                        MADDE 23

                        <br/>

                        Bu maddede adı geçen tüm personel, emeklilik, istifa, nakil, görevden uzaklaştırma gibi nedenlerle Müdürlükten ayrılmadan evvel kendisine teslim edilen evrak, dosya, emanet, avans veya harcırah paraları ile bütün ayni ve demirbaş eşyayı; yerine göreve başlayan veya müdür tarafından belirlenen kişiye tutanakla teslim etmeden ve eksik varsa buna ilişkin tutanak tanzimle eksiklerin bedelini Belediye veznesine yatırmadan ilişiği kesilemez.

                        <br/>

                        ÜÇÜNCÜ BÖLÜM
                        <br/>
                        YÜRÜTME VE YÜRÜRLÜK

                        <br/>

                        YÜRÜRLÜK



                        MADDE 24

                        <br/>

                        İş bu yönetmelikte yer almayan hususlarda yürürlükteki ilgili umumi hükümler çerçevesinde hareket edilir.
                        <br/>
                        MADDE 25
                        <br/>
                        Bu Yönetmelik,  Belediye Meclisinin kabulü ve yayımı ile yürürlüğe girer.
                        <br/>
                        YÜRÜTME


                        <br/>
                        MADDE 26
                        <br/>
                        Bu Yönetmelik hükümlerini Belediye Başkanı yürütür.</p>
        </section>
    <section id="bolum2" className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
        <h3 className="text-lg font-bold text-center"></h3>
        <p className="text-gray-700 text-left">1970 yılında Tokat’ın Niksar İlçesinde doğdu.
            <br/>İlkokul, ortaokul ve lise tahsilini burada yaptı. Marmara Üniversitesi Hukuk Fakültesi mezunu olup 2012 yılına kadar serbest avukatlık yaptı.
            <br/>
            2012 yılı Ocak ayında Gebze Belediyesi bünyesinde avukat olarak göreve başlamış olup 2014 yılı Aralık ayından itibaren Hukuk İşleri Müdürü olarak görev yapmıştır.
            <br/>
            Temmuz 2019 tarihinden itibaren ise Yazı İşleri Müdürlüğü görevini yürütmektedir.
            <br/>
            Evli ve iki çocuk babasıdır
        </p>
    </section>
            </div>
        </div>
    );
};

export default Muratanca;
