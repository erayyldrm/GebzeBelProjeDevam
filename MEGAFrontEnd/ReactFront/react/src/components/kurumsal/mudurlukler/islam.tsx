import React from "react";

const   İslam: React.FC = () => {
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
                        src="/images/kurumsal/mudurlukler/avatar-17.jpg"
                        alt="Tümay Aksan"
                        className="w-48 h-60 object-cover rounded-lg shadow-md"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">Mezarlıklar Müdürlüğü</h2>
                        <hr className="border-t-2 border-blue-500 my-2" />
                        <p className="text-blue-700 font-semibold flex items-center">
                            <img src="/images/kurumsal/iconlar/icon-1.png" alt="Profile" className="w-5 h-5 mr-2" />  İslam ÖZDAĞ
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="/images/kurumsal/iconlar/ıcon12.png" alt="Email" className="w-5 h-5 mr-2" />  mezarlik@gebze.bel.tr


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
                        <br/>
                        Amaç
                        <br/>
                        MADDE 1 –  Bu Yönetmeliğin amacı cenazenin ölümünden defnine kadar bütün iş ve işlemlerin usullerini  belirlemektir.
                        <br/>
                        Kapsam
                        <br/>
                        MADDE 2 –  Cenazelerin yıkattırılması, kefenlenmesi, nakli, defni ve icabı halinde mezarlıktan tekrar çıkartılması ile sağlık açısından mahsuru bulunan cenazelerin ne suretle defnolunacağı,  ilgili usul ve esasları kapsar.
                        <br/>
                        Dayanak
                        <br/>
                        MADDE 3 –  Bu Yönetmelik 24/4/1930 tarihli ve 1593 sayılı Umumi Hıfzıssıhha Kanununun 222 maddesine istinaden hazırlanmıştır.
                        <br/>
                        Tanımlar
                        <br/>
                        MADDE 4 –  Bu Yönetmelikte geçen,
                        <br/>
                        <br/>
                        <br/>
                        a)	KBB :Kocaeli Büyükşehir Belediyesi
                        <br/>
                        b)	Belediye :Gebze Belediyesi
                        <br/>
                        c)	Cenaze (Ölü): Tıbben beyin ve kalp ölümü gerçekleşen kişiyi,
                        <br/>
                        d)	Defin: Cenazelerin şartlarına uygun olarak gömülmesini,
                        <br/>
                        e)	Gassal: Cenazeyi yıkamakla görevli kişiyi,
                        <br/>
                        f)	Kefenleme: Cenazelerin şartlarına uygun olarak kefenlenmesini,
                        <br/>
                        g)	Gömme izin belgesi: Tabip veya gömme izin belgesi görevlisi tarafından verilen, cenazenin defninin yapılmasının veya başka bir mahalle naklinin  uygun olduğunu gösterir belge,
                        <br/>
                        h)	Bulaşıcı hastalık: Etkenin bulaşma yoluna göre gerekli koruyucu önlemler alınmadığı takdirde kişiye bulaşabilen, mikroorganizmaların ve/veya ürünlerinin neden olduğu enfeksiyon hastalıklarını,
                        <br/>
                        Cenazenin morga nakili işlemi ,yıkanması, kefenlenmesi ve toprağa defni
                        <br/>
                        <br/>
                        <br/>
                        MADDE 5- Mezarlıklar müdürlüğüne ölenin yakınlarının müracaat ettiğinde öncelikle defin ruhsatı(gömme izin belgesi) alınıp alınmadığı sorulur.
                        <br/>
                        Gömme İzin Belgesi Verilmesi
                        <br/>
                        (1)	Ölüm resmi sağlık kurumlarında gerçekleşmiş veya cenaze resmi sağlık kurumuna getirilmiş ise, gömme izin belgesi sağlık kurumunca düzenlenir ve kurumun müdür veya baştabibi tarafından tasdik edilir.
                        <br/>
                        (2)	Ölüm özel sağlık kuruluşlarında gerçekleşmiş ise, ölüme sebep olan hastalık esnasında tedavi eden tabibin verdiği gömme izin belgesi varsa belediye tabibi, yoksa aile hekimliğinin uygulandığı illerde toplum sağlığı hekimi, aile hekimi diğer illerde sağlık ocağı hekimi tarafından tasdik edilmek şartıyla geçerli olur.
                        <br/>
                        (3)	Ölümün sağlık kurumları dışında gerçekleşmesi durumunda gömme izin belgesi cenazenin bulunduğu yerdeki belediye tabibi tarafından, belediye tabibi bulunmayan yerlerde aile hekimliğinin uygulandığı illerde toplum sağlığı hekimi, aile hekimi diğer illerde sağlık ocağı hekimi tarafından, bunların bulunmaması halinde gömme izin belgesi görevlisi tarafından verilir. Gömme izin belgesi görevlisi bulunmayan yerlerde ise jandarma karakol komutanları veya köy muhtarları tarafından verilir.
                        <br/>
                        <br/>
                        <br/>
                        MADDE 6– Defin kağıdı olan cenazeler yakınlarının mezarlıklar müdürlük görevlilerine gerekli bilgiyi verdikten sonra   evlerinden veya hastanelerden özel donanımlı cenaze aracıyla  alınarak cenazenin bozulmaması için soğutma tertibatı bulunan belediye  morguna kaldırılarak defin işlemleri için gerekli işlemlere başlanır.
                        <br/>
                        MADDE 7– Cenazelerin yıkanması esnasında gassallar tarafından dikkat edilmesi gereken hususlar
                        <br/>
                        a)	Cenaze yakınlarının isteği doğrultusunda cenaze  hangi vakitte kaldırılmak isteniyorsa görevlilerce istenilen vakitten en az iki saat öncesinden  cenaze defne hazır hale getirmek için gerekli işlemler (yıkama ,kefenleme, tabuta koyma) başlatılır
                        <br/>
                        b)	Yıkama esnasında eldiven ve önlük giyilir,
                        <br/>
                        b) Ölünün kan ve kanla kirlenmiş vücut sıvılarına, ağız, göz ve bütünlüğü bozulmuş derisine temastan kaçınılır,
                        <br/>
                        c) Solunum yoluyla bulaşan hastalıklardan ölenlerin yıkanması sırasında koruyucu maske takılır,
                        <br/>
                        ç) Bulaşıcı hastalık nedeniyle ölenler için gömme izin belgesi veren hekimin veya gömme izin belgesi görevlisinin bildirim yaptığı sağlık kuruluşunun talimatlarına göre ek önlemler alınır,
                        <br/>
                        d) Gereken önlemler alınmasına rağmen gözle görülebilir şekilde ceset kaynaklı kan veya vücut sıvısıyla kirlenmiş cenaze yıkama yeri, tabut ve cenaze nakil aracı % 10’luk çamaşır suyu çözeltisiyle yıkanır veya bu mümkün olmadığı takdirde silinir.
                        <br/>
                        <br/>
                        <br/>
                        MADDE 8 – Cenazenin ,Yıkanması, Kefenlenmesinin bitiminden sonraki işlemler
                        <br/>
                        a)	Görevlilerce cenaze yakınlarının isteği doğrultusunda cenaze namazından önce istenilen mahalde mezar kazım işlemi yerine getirilir.
                        <br/>
                        b)	Defne hazırlanan cenaze yakınlarının isteği doğrultusunda helallik için evine götürülüp cenaze imamı eşliğinde helallık alınır.
                        <br/>
                        MADDE 9 – Cenazenin defni
                        <br/>
                        <br/>
                        <br/>
                        a)	 Gömme izin belgesi alınmadıkça hiçbir cenaze gömülemez.
                        <br/>
                        b)	 Mezarlıklara, sabah saat sekizden akşam gün batıncaya kadar cenaze gömülebilir. Bu saatler dışında, zorunlu sebepler haricinde cenaze gömülemez. Zorunlu  sebebin tayini belediye  başkanına aittir.
                        <br/>
                        c)	 Cenaze yakınlarının isteği doğrultusunda istenilen camide namazı kılınır ve defin için hazırlanan mezarlığa götürülüp imam eşliğinde defin işlemi tamamlanır
                        <br/>
                        d)	Bir mezar yerine en az 5 yıl sonra  mükerrer defin yapılabilinir.
                        <br/>
                        e)	 Adli tıptan ve diğer resmi dairelerden gelen kimliği belirsiz cenazeler dahil olmak üzere yetkili ve görevli makamlardan gömme izin belgesi alınmayan cenazeler mezarlığa  defin edilemez.
                        <br/>
                        f)	Sahipsiz cenazeler savcılığın yazılı talimatı olmadan defnedilemez.
                        <br/>
                        g)	Adli vakalarda Savcılık talimatıyla otopsiye giden  cenazeler, otopsiden sonra yetkili makamlarca verilen ölüm raporu alındıktan sonra  defnedilir.
                        <br/>
                        h)	Yabancı uyruklu cenazeler söz konusu ülkenin konsolosluğu ve ya temsilciliği ile irtibat kurularak gerekli işlemler yapılır
                        <br/>
                        MADDE 10 – Fakir veya kimsesiz cenazeler; belediyece herhangi bir ücret alınmadan kaldırılır, yıkattırılır, kefenlenir ve gömülür.
                        <br/>
                        Cenazelerin Nakli
                        <br/>
                        Cenaze nakil araçlarının temini
                        <br/>
                        <br/>
                        <br/>
                        MADDE 11 –
                        <br/>
                        a)	Defin ve nakil için uygunluk belgesi  olmayan cenazeler için  nakil  işlemleri yapılmaz.
                        <br/>
                        b)	) Belediye sınırları içerisindeki cenaze nakli, belediye tarafından yapılır veya yaptırılır.
                        <br/>
                        c)	Cenazeler yakınlarının isteği olması halinde belediye encümeninin belirlediği tarife çerçevesinde belediye  sınırları dışına cenaze nakli için tahsis edilen özel donanımlı araçlarla belediye imkanları doğrultusunda nakiller yapılır veya yaptırılır. Toplu nakil sağlanması için KBB ve çevre Belediyelerle  irtibat kurulur. İrtibat neticesinde cenaze nakline  imkan bulunmasa Belediye kendi imkanlarıyla Belediye sınırları dışına cenaze naklini sağlar.
                        <br/>
                        d)	  Cenazenin bozulma ihtimali bulunmayan durumda soğutma tertibatsız araçlarla nakil yapılabilinir.
                        <br/>
                        e)	Belediye sınırları dışına cenaze nakil saatlerini belediye sınırları içindeki cenaze hizmetlerini aksatmayacak şekilde belediye görevlilerince belirlenir. İl/ilçe dışı cenaze nakillerinde toplu nakil sağlanması için  KBB ve çevre Belediyelerle  irtibata geçilerek cenaze nakli sağlanır. KBB ve çevre Belediyelerle  irtibat kurulur. İrtibat neticesinde cenaze nakline  imkan  bulunmasa Belediye kendi imkanlarıyla Belediye sınırları dışına cenaze naklini sağlar. Uygun tertibatı olan Cenaze nakil araçlarında birden fazla cenaze nakli yapılır.
                        <br/>
                        f)	Kolera, veba, çiçek,  şarbon, cüzam ve ruam hastalıklarından vefat edenlerin, vefatlarının üzerinden bir sene geçmeden bulunduğu beldeden yurtiçi veya yurtdışındaki başka bir beldeye nakli yapılamaz
                        <br/>
                        <br/>
                        <br/>
                        g)	Belediye sınırları içinde defnedilmiş kişinin herhangi bir sebeple (mahkeme kararı, sehven başkasının aile yerine defnedilme, kazı ve yol çalışması, cenaze yakınlarının talebi  v.b) başka bir mezara veya  mezarlığa nakil amacıyla cenaze çıkarılabilmesi için, belediye tabibinin  uygun görüşü alındıktan sonra nakli yapılabilir.
                        <br/>
                        <br/>
                        <br/>
                        h)	Kolera, veba, çiçek veya  lekeli humma hastalıklarından  vefat edenlerin bir sene geçmeden mezardan çıkarılarak başka bir mahalle  nakilleri yapılamaz
                        <br/>
                        <br/>
                        <br/>
                        i)	Yetkili makamlar karar vermesi halinde  Adli otopsi amacıyla cenazenin mezardan çıkarılabilir.
                        <br/>
                        <br/>
                        <br/>
                        Diğer Hususlar
                        <br/>
                        Mezar inşa ebatları
                        <br/>
                        MADDE 12- Cenaze Yıkama ve defin hizmeti  ihtiyaç duyuldukça 365 gün,  hafta tatili, genel tatil ,resmi ve dini bayram tatilleri dahil 7 gün 24 saat aksatılmadan devam ettirilir.
                        <br/>
                        MADDE 13-Mezar yeri yapım ruhsatı alınmadan mezar inşasına izin verilmez.
                        <br/>
                        a)Büyük mezarlık ebatları azami;
                        <br/>
                        a1) Bir kişilik    :1,25 x 2,20 = 2,75 m2
                        <br/>
                        a2) İki kişilik    :2,75 x 2,20 = 6,05 m2
                        <br/>
                        a3) Üç kişilik    :4,25 x 2,20 = 9,35 m2
                        <br/>
                        a2) Dört kişilik :5,75 x 2,20 = 12,65 m2
                        <br/>
                        <br/>
                        <br/>
                        b)Cocuk ve bebek mezar ebadı azami : 0,50 x 1= 0,50 m2
                        <br/>
                        <br/>
                        <br/>
                        c)Mezar inşasının topraktan yüksekliği  azami 60 cm olacaktır. Arazinin eyim durumuna göre  bir tarafı azami 60 cm olacak şekilde yükselti verilebilir.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        MADDE 14 –5 yıl geçtiği halde herhangi bir sebeple çevrilmiş ama alınmamış mezar yerleri için Belediye en son belirlediği tarifeye göre diğer şahıslara  satış yapıp yapmamakta serbesttir.
                        <br/>
                        <br/>
                        <br/>
                        MADDE 15 –Boş veya dolu mezar yeri kullanım belgesi alınmış ancak herhangi bir sebeple defin yapılmayacak yerler için aynı mezarlıkta veya başka bir mezarlıkta aynı büyüklükte  ücretsiz yer tahsis edilir. Bu durum kayıtlara işlenir.
                        <br/>
                        <br/>
                        <br/>
                        MADDE 16 –Mezar yeri kullanım belgesi alınmış ve üzerine sehven başka bir cenaze defnedilmiş yerler için aynı mezarlıkta veya başka bir mezarlıkta aynı büyüklükte  ücretsiz yer tahsis edilir. Bu durum kayıtlara işlenir.
                        <br/>
                        <br/>
                        <br/>
                        MADDE 17-Talep edilmesi halinde Aile mezar yeri alan vatandaşlara belirlenen yasal ebatlarda olmak üzere Belediyenin belirlediği tarife üzerinden ücreti peşin tahsil edilerek “MEZAR YERİ KULLANIM BELGESİ “ verilir.
                        <br/>
                        <br/>
                        <br/>
                        YÜRÜRLÜK
                        <br/>
                        <br/>
                        <br/>
                        MADDE 18-Bu yönetmelik Belediye Meclisinde kabul edilip ilanından sonra yürürlüğe girer.
                        <br/>
                        <br/>
                        <br/>
                        YÜRÜTME
                        <br/>
                        MADDE 19- Bu yönetmelik hükümlerini Gebze Belediye Başkanı ve yetki verdiği amirler yürütür.
                    </p>
                </section>
                <section id="bolum2" className="p-4 bg-gray-50 rounded-lg shadow-md mt-4">
                    <h3 className="text-lg font-bold text-center"></h3>
                    <p className="text-gray-700 text-left">
                        1993 Gebze/Kocaeli doğumludur. Lise öğrenimini Gebze Sarkuysan Anadolu Lisesinde, üniversite eğitimini de sırasıyla 2015 yılında Samsun Ondokuz Mayıs Üniversitesi Çevre Mühendisliği bölümü ve 2018 yılında da Kocaeli Üniversitesi İnşaat Teknolojisi-Teknikerliği bölümlerde başarıyla tamamladı.
                        Okullardan mezun olmanın akabinde, Çevre ve Şehircilik Bakanlığı’nın belirlemiş olduğu tüm kriterleri yerine getirerek Çevre Görevlisi belgesini almaya hak kazanmıştır. Bu hususta Altyapı, Çevre Teknolojileri, Atık Yönetimi konularında çalışan çeşitli firmalarda Çevre Mühendisliği ve diğer alanlarda çalışmalarda başarıyla rol aldı. 2016 yılında Gebze Belediyesi Çevre Koruma ve Kontrol servisinde Çevre Mühendisi olarak göreve başladı. Görev süresi içerisinde Sıfır Atık Projesi kapsamında birçok Kurum-Kuruluş ve Sivil Toplum Kuruluşları ile birlikte birçok projeye imza attı.
                        Çeşitli STK’larda yöneticilik görevlerinde bulunarak birçok kültürel ve sosyal projenin içerisinde yer aldı
                        2016 yılından bu yana Gebze Belediyesi’nde görev yapan Özdağ, 2021 yılı ekim ayından bu yana Gebze Belediyesi Temizlik İşleri Müdürü olarak görevlendirilerek çalışmalarını sürdürmektedir.
                        Evli ve bir çocuk babasıdır.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default İslam;
