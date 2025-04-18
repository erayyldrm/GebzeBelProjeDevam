import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ChevronDown, ChevronUp } from "lucide-react";

interface ServiceDetailProps {
    title: string;
    description: string;
    imageUrl: string;
    address: string;
    phone: string;
    workingHours: string;
    announcements: string[];
}

const workshopData = [];

const Nislemleri: React.FC<ServiceDetailProps> = ({
                                                   title = "NİKAH İŞLEMLERİ",
                                                   description = "",
                                                   imageUrl = "",
                                                   address = "",
                                                   phone = "",
                                                   workingHours = "",

                                               }) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleIndex = (index: number) => {
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center min-h-screen px-4"
        >
            {/* Kart İçeriği: Başlık, Resim, Verilen Hizmetler ve İletişim Bilgileri */}
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-6 w-full max-w-5xl">

                {/* Başlık ve Resim */}
                <div className="mb-8 text-center text-blue-800">
                    <div className="text-2xl md:text-2xl font-semibold text-blue-500 mb-3">
                        {title}
                    </div>

                    <div className="flex justify-center">
                        <div className="relative h-[500px] sm:h-[600px] md:h-[750px] lg:h-[850px] w-[90%] sm:w-3/4 md:w-2/3 lg:w-2/3 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/images/hizmetler/evlendirme/nikah.jpg"
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t flex items-center justify-center">
                                <div className="text-white text-center px-4 max-w-2xl">
                                    <p className="text-lg md:text-xl font-medium">{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>

                {/* 2 Sütun: Verilen Hizmetler ve İletişim Bilgileri Yan Yana */}
                <div className="flex flex-col md:flex-row gap-5">

                    {/* Sol: Verilen Hizmetler */}
                    <div className="md:w-2/3 w-full">
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b pb-2">
                                Verilen Hizmetler
                            </h2>
                            <p className="text-gray-700 mb-4 text-sm sm:text-base">VERİLEN HİZMETLER
                                NİKÂH İÇİN GEREKLİ OLAN EVRAK LİSTESİ
<br/>
                                1.	Çiftler T.C. Nüfus Cüzdanlarıyla (daha önce boşanma, ölüm varsa nüfus cüzdanlarına işlenmiş son medeni halleri yazılı olacak.) 1 adet Nüfus Cüzdan fotokopileri.
                                <br/>
                                2.	Son altı ay içerisinde çekilmiş 3(Yabancı evlilikte 4)’er adet vesikalık fotoğraf, (fotokopi veya biometrik kabul edilmez.)
                                <br/>
                                3.	Aile Hekimlerinden (Yabancı gelin veya damat Merkez Sağlık Ocağından) (4721, 1593, 123-124 maddelerin yazılı olduğu Evlendirme Yönetmeliği’nin 14-15 maddesine uygun)  Evlenme Sağlık Raporu, (özellikle fotoğrafın üzerine kaşe – imza yaptırılacak)
                                <br/>
                                4.	Kızlık soyadını kullanmak isteyen bayanlar müracaat sırasında soyadı dilekçesi vermelidir.(Memurluğumuzda matbu halde bulunmaktadır.)
                                <br/>
                                5.	Mal Rejimi Sözleşmesi varsa evraklarını müracaat sırasında teslim etmeleri gerekmektedir.
                                <br/>
                                <br/>

                                REŞİT OLMAYANLAR
                                <br/>
                                1-	18 yaşını bitirmiş olanlar kendi başına evlenebilir.
                                <br/>
                                2-	17 yaşını bitirmiş olanlar da anne, baba muvafakat imzaları nikâh memurluğumuzda,  anne baba gelememe durumlarında, muvafakat name noterden alınacak. (anne - baba ölmüş, boşanmış veya vasi durumunda iseler Nüfus Müdürlüğünden vukuatlı nüfus kayıt örneği getirilecek.)
                                <br/>
                                3-	16 yaşını bitirmiş olanlar aile mahkemesinden kesinleşmiş evlenmeye izin kararı ile evlenebilirler.
                                <br/>
                                <br/>

                                BOŞANMIŞ VE DUL OLAN BAYANLAR
                                <br/>
                                1-	Boşanmış ve dul olan bayanlar, boşanma ve eşinin ölüm tarihi nüfusa işlendikten sonra 10 ay (300 gün ) evlenemezler.
                                <br/>
                                2-	Bu süre bitmeden nikâh yaptırmak isteyen Bayanlar 10 ay evlenme yasağını (bekleme süresini) kaldırmak için, kesinleşmiş mahkeme kararı almaları gerekmektedir.
                                <br/>
                                <br/>

                                YABANCI EVLİLİKLERDE GEREKLİ OLAN EVRAKLAR
                                <br/>
                                1-	Avrupa Ülke Vatandaşları kendi ülkelerinden çok dilli evlenme ehliyet belgesi ve doğum sicil raporu alacak, 3 adet fotokopisi olacak.
                                <br/>
                                2-	Diğer Ülke vatandaşları, Lahey sözleşmesine taraf olan Ülkeler ülkelerinden bekârlık belgesi (Medeni hali açıkça yazılacak) ve Doğum sicil belgesi  (anne-baba isimleri olacak) getirecek olup evraklar Apositilli olacak. Lahey Sözleşmesine taraf olmayan ülkeler Ülkelerindeki Türk Yetkili Makamlarınca(Büyükelçilik)onay yaptırılacak. Evraklar Türkiye’de çeviri yapılarak noter tasdikli olacak ya da Türkiye’deki Başkonsolosluklarından Bekârlık Belgesi alacak(anne-baba adı-medeni hali yazılı olacak) Türkçe tercüme onaylı, konsolosluğun bağlı bulunduğu il Kaymakamlıklarınca Tasdikli olup, 3 adet fotokopisi olacak. Ankara’da konsolosluğu olan Dışişleri Bakanlığınca onaylanacak 3 adet fotokopisi olacak. İkamet tezkeresi olan yabancı vatandaşların süresi bitmemiş olacak alınan bekârlık belgesi, doğum sicil belgesi var ise ikametgâh tezkerelerindeki karakterleri ile pasaporttaki yazı karakterlerinin aynı olması zorunludur. Alınan evraklar ve çevirilerde kesinlikle buna dikkat edilmelidir.
                                <br/>
                                3-	Vize tarihi geçmemiş, pasaportun 3 adet fotokopisi olacak,(Tercüme yapılmasına gerek yoktur)
                                <br/>
                                4-	Evlenen kişi Türkçe bilmiyorsa nikâhta yeminli tercüman getirilecek,
                                <br/>
                                5-	Yabancı ve T.C. vatandaşı olan çifte vatandaşlık halinde, kesinlikle T.C. vatandaşı olarak nikâhı yapılır.
                                <br/>
                                6-	Suriye vatandaşı olanlar Suriye kimlikleriyle,   Kayıtlı oldukları Göç İdaresinden Evlenme Ehliyet Belgesi alacaklardır.
                                <br/>
                                7-	Nikâhını Belediyemizde yaptırmak isteyen Suriye vatandaşları, Kocaeli Göç İdaresi dışında farklı göç idaresine kayıtlı ise Kocaeli ili için yol izin Belgesi getirmeleri gerekmektedir.
                                <br/>
                                8-	Nikâhını Belediyemizde yaptırmak isteyen Suriye Vatandaşlarının kayıtlı oldukları Göç İdaresinden Nikâh için aldıkları Evlenme Ehliyet belgelerine verilecek makam bölümüne “Gebze”  veya “İlgili Makama” şeklinde yazdırmaları gerekmektedir.
                                <br/>
                                9-	Nikâh kıydırmak isteyen Suriye Vatandaşı Boşanmış ve dul olan bayanlar, boşanma ve eşinin ölüm tarihini Göç İdaresinden alınan Evlenme Ehliyet Belgesine yazdırmaları gerekmektedir.(Yol izin belgesi, Evlenme ehliyet Belgesi işlemleri şahısların e- devleti üzerinden yapılmaktadır.)

                                <br/>
                                <br/>
                                NOT:
                                <br/>
                                1-	Başvurular; Hafta içi 09.00-12.30, 13.30-17.00, saatleri arasında, çiftin birlikte müracaatı ile yapılacaktır.
                                <br/>
                                2-	Evraklarını tamamlamış çiftler birlikte müracaat ederek nikâh için gün alacaklar. Gelemeyen adayın vekâlet vermesi zorunludur. (Bunun için noterden Özel Vekâletname düzenlenmesi ve bu vekâletnamede vekâlet veren ile vekili ve evleneceği kişinin tam kimliği ile evlenme işlemlerinin yürütülmesi için verilmiş olduğu açıkça belirtilmesi şarttır.) Evlendirme Yönetmeliği 17. Madde gereğince; “Vekâletnamede kişilerin nüfus cüzdanı fotokopileri arka sayfada onaylı olmalıdır. Alınan vekâletle birlikte Evlenme Sağlık Raporu da gönderilmelidir.
                                <br/>
                                Nüfus cüzdanı fotokopileri, nüfus cüzdanı bilgilerine göre olmalıdır.” (Sürücü Belgesi / Pasaport dökümü bilgileri kesinlikle kabul edilmez.)
                                <br/>
                                3-	Nikâh günü 18 yaşını doldurmuş iki şahitle gelinecek. (Şahitlerin T.C. Kimlik No yazılı Nüfus Cüzdanları olacak, anne-baba şahit olamaz).
                                <br/>
                                4-	Hafta sonu düğün salonlarında,  diğer mahallerde nikâh isteyen çiftler önceden nikâh tarihlerini bildirmeleri ve evraklarını teslim etmeleri gerekmektedir.
                                <br/>
                                5-	Tüm Evrakların geçerlilik süresi 6 aydır.
                                <br/>
                                6-	Saat 16:30 ‘dan sonra nikâh kıyılmaz.
                            </p>   </section>
                        {/* PDF İndir Alanı */}
                        <div className="flex items-center mt-8 space-x-3 bg-blue-50 p-4 rounded-lg shadow-sm">
                            <img
                                src="/images/hizmetler/evlendirme/pdf.png.png"
                                alt="PDF Icon"
                                className="w-8 h-8 object-contain"
                            />
                            <a
                                href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fwww.gebze.bel.tr%2Fdosya%2F20250107100448.docx&wdOrigin=BROWSELINK"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 font-medium hover:underline"
                            >
                                2025 Yılı Nikah Ücret Tarifesi
                            </a>
                        </div>

                        {/* Atölyeler */}
                        <section className="mb-16">
                            <div className="space-y-4">
                                {workshopData.map((item, index) => (
                                    <div key={index} className="bg-blue-50 rounded-lg p-4 shadow-sm">
                                        <button
                                            onClick={() => toggleIndex(index)}
                                            className="flex items-center justify-between w-full text-left"
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-600 text-lg">•</span>
                                                <span className="text-blue-800 font-medium">
                                                    {item.title}
                                                </span>
                                            </div>
                                            {openIndexes.includes(index) ? (
                                                <ChevronUp size={18} />
                                            ) : (
                                                <ChevronDown size={18} />
                                            )}
                                        </button>
                                        {openIndexes.includes(index) && (
                                            <ul className="mt-2 ml-6 list-disc text-sm text-gray-700 space-y-1">
                                                {item.sub.map((subItem, i) => (
                                                    <li key={i}>{subItem}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sağ: İletişim Bilgileri */}
                    <div className="md:w-1/3 max-w-sm w-full">
                        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">
                                İletişim Bilgileri
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <p className="text-gray-700">
                                        Hacıhalil, Şht. Numan Dede Cd. No:8, 41400 Gebze/Kocaeli
                                        {" "}
                                        {address}
                                    </p>
                                </div>
                                <br />
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">0262 6465313
                                        {phone}</p>
                                </div>
                                <br />
                                <div className="flex items-center">
                                    <Clock className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">09:00 - 16:30 {workingHours}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Nislemleri
