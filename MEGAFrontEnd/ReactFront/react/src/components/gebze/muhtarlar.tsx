import React, { useState } from "react";

interface CouncilMember {
    name: string;
    imageUrl: string;
    role: string;
    tel: string;
    map: string;
    mail: string;
    // Modal bileşeninde gösterilecek detaylı bilgiler buraya eklenecek
    // Siz kendi bilgilerinizi ekleyeceksiniz
}

const councilMembers: CouncilMember[] = [
    { name: "Ekrem USANMAZ", imageUrl: "/images/gebze/muhtarlar/Ekrem-USANMAZ.jpg", role: "Adem Yavuz Mahallesi Muhtarı", tel:"0538 632 83 12", map:"Adem Yavuz Mahallesi 2322Sok. No:1 Gebze/ Kocaeli",mail:"ekremusanmaz@gmail.com" },
    { name: "Tezcan GÜRLEK",  imageUrl: "/images/gebze/muhtarlar/Tezcan-GURLEK.jpg", role: "Ahatlı Mahallesi Muhtarı", tel:"0537 585 92 57", map:"Ahatlı Mahallesi 3120 Sok. No:1/1 Gebze/Kocaeli",mail:"" },
    { name: "Remzi KANDAZ", imageUrl: "/images/gebze/muhtarlar/Remzi-KANDAZ.jpg", role: "Arapçeşme Mahallesi Muhtarı", tel:"0532 680 14 20", map:"Arapçeşme Mah. Kavak Cad.No:35 Gebze/Kocaeli",mail:"remzikandaz@hotmail.com"},
    { name: "Halis TEPE", imageUrl: "/images/gebze/muhtarlar/Halis-TEPE.jpg", role: "Balçık Mahallesi Muhtarı", tel:"0532 432 00 54", map:"Balçık Mahallesi Mustafa Kemal Cad. No:47/A Balçık",mail:"halis.tepe41@hotmail.com" },
    { name: "Bayram ARTÜRKASLAN", imageUrl: "/images/gebze/muhtarlar/Bayram-ARTUKASLAN.jpg", role: "Barış Mahallesi Muhtarı", tel:"0538 245 20 66", map:"Barış Mahallesi 1837 sokak No:13 Gebze",mail:"bayramarturkaslan@gmail.com" },
    { name: "Osman ŞAHİN", imageUrl: "/images/gebze/muhtarlar/Osman-SAHİN.jpg", role: "Beylikbağı Mahallesi Muhtarı", tel:"0539 877 51 39", map:"Beylikbağı Mah.Yaşar Doğu Cad. No:12 Gebze/ Kocaeli",mail:"" },
    { name: "Selim ÇETİN",imageUrl: "/images/gebze/muhtarlar/Selim-CETİN.jpg", role: "Cumaköy Mahallesi Muhtarı", tel:"0542 516 41 79", map:"CumaKöy Mah.Cumhuriyet Cad.No:75/A Gebze/Kocaeli",mail:"selim_cetin41@hotmail.com" },
    { name: "Sedat KILDACI", imageUrl: "/images/gebze/muhtarlar/Sedat-KILDACI.jpg", role: "Cumhuriyet Mahallesi Muhtarı", tel:"0537 860 22 75", map:"Cumhuriyet Mah. Kubilay Cad. No:34, Menekşe Parkı, Gebze",mail:"sedatkildaci_@hotmail.com" },
    { name: "Necmi HACIOĞLU", imageUrl: "/images/gebze/muhtarlar/Necmi-HACIOGLU.jpg", role: "Denizli Mahallesi Muhtarı", tel:"0531 658 83 08", map:"Denizli Mah. 3407 Sok. No:22/1, Gebze/Kocaeli",mail:"necmi.haciglu41@gmail.com" },
    { name: "Mehmet YAVAŞ", imageUrl: "/images/gebze/muhtarlar/Mehmet-YAVAS.jpg", role: "Duraklı Mahallesi Muhtarı", tel:"0532 604 95 24", map:"Duraklı Mah. Duraklı Cad. No:148, Gebze/Kocaeli",mail:"" },
    { name: "Yaşar ERDOĞAN", imageUrl: "/images/gebze/muhtarlar/Yasar-ERDOGAN.jpg", role: "Elbizli Mahallesi Muhtarı", tel:"0532 480 61 88", map:"Elbizli Mah. Elbizli Cad. No:1, Gebze/Kocaeli",mail:"" },
    { name: "Tayfun ÖZCAN", imageUrl: "/images/gebze/muhtarlar/Tayfun-OZCAN.jpg", role: "Eskihisar Mahallesi Muhtarı", tel:"0543 679 00 96", map:"Eskihisar Mah. Dr. Zeki Acar Cad. 3024 Sok. No:22, Gebze/Kocaeli",mail:"eskihisarmahallemuhtarligi41@hotmail.com" },
    { name: "Metin TOPÇU",imageUrl: "/images/gebze/muhtarlar/Metin-TOPCU.jpg", role: "Gaziler Mahallesi Muhtarı", tel:"0536 394 25 73", map:"Gaziler Mah. İbrahim Ağa Cad. No:211, Eşref Bitlis Parkı, Gebze/Kocaeli",mail:"metintopcu1960@gmail.com" },
    { name: "Mümin YILMAZ", imageUrl: "/images/gebze/muhtarlar/Mumin-YILMAZ.jpg", role: "Güzeller Mahallesi Muhtarı", tel:"0532 205 08 67", map:"Adres: Güzeller Mah. 922 Sok. No:10, Şehit Ali Atik Parkı, Gebze/Kocaeli",mail:"muhtaryilmaz675@gmail.com" },
    { name: "İrfan Malkoç",imageUrl: "/images/gebze/muhtarlar/Irfan-MALKOC.jpg", role: "Hacıhalil Mahallesi Muhtarı", tel:"0533 632 73 88", map:"Adres: Hacıhalil Mah. 1225 Sok. No:5, Gebze/Kocaeli",mail:"irfanmalkoc61@gmail.com" },
    { name: "Halil GÜK",imageUrl: "/images/gebze/muhtarlar/Halil-GUK.jpg", role: "Hatipler Mahallesi Muhtarı", tel:"0533 614 94 87", map:"Hatipler Mah. Hatipler Cad. No:61, Gebze/Kocaeli",mail:"halilguk70@oiclovd.com" },
    { name: "Ahmet ASLAN", imageUrl: "/images/gebze/muhtarlar/Ahmet-ASLAN.jpg", role: "Hürriyet Mahallesi Muhtarı", tel:"0535 210 81 75", map:"Hürriyet Mah.23 Nisan Cad. No:30 Gebze/Kocaeli",mail:"" },
    { name: "Türker DURSUN", imageUrl: "/images/gebze/muhtarlar/Turker-DURSUN.jpg", role: "İnönü Mahallesi Muhtarı", tel:"0532 382 48 10", map:"İnönü Mah. Şehit Hamdi İpek Çalışkan Cad. Zekeriye Güçlü Parkı İçi Gebze/Kocaeli",mail:"turkerdursun2@gmail.com" },
    { name: "Hüseyin KAHRİMAN", imageUrl: "/images/gebze/muhtarlar/Huseyin-KAHRİMAN.jpg", role: "İstasyon Mahallesi Muhtarı", tel:"0505 258 68 09", map:"İstasyon Mah. Şehit Abdullah HOROZ Cad. No:26 Gebze/Kocaeli",mail:"huseyinkahriman823@gmail.com" },
    { name: "Ahmet ÖZYURT", imageUrl: "/images/gebze/muhtarlar/ahmetozyurt.jpg", role: "Kadıllı Mahallesi Muhtarı", tel:"0535 210 81 75", map:"Kadıllı Mah. Cumhuriyet Cad. No:1/1, Gebze/Kocaeli",mail:"" },
    { name: "Turgut ZAFER",imageUrl: "/images/gebze/muhtarlar/Turgut-ZAFER.jpg", role: "Kargalı Mahallesi Muhtarı", tel:"0535 561 75 94", map:"Kargalı Mah. Kargalı Cad. No:137, Gebze/Kocaeli",mail:"" },
    { name: "İsmail AYAR", imageUrl: "/images/gebze/muhtarlar/Ismail-AYAR.jpg", role: "Kirazpınar Mahallesi Muhtarı", tel:"0532 722 27 90", map:"Kirazpınar Mah. 4170 Sok. No:1, Gebze/Kocaeli",mail:"osmanyilmaz41@gmail.com" },
    { name: "Mehmet ALTINTAŞ", imageUrl: "/images/gebze/muhtarlar/Mehmet-ALTINTAS.jpg", role: "Köşklü Çeşme Mahallesi Muhtarı", tel:"0541 434 60 61", map:"Köşklü Çeşme Mah. Yeni Bağdat Cad. Şehit Kadir Kasa Parkı Blok No: 399 İç Kapı No : A Gebze Kocaeli",mail:"mehmetaltintas63@gmail.com" },
    { name: "Selda ÇAKIRER",imageUrl: "/images/gebze/muhtarlar/Selda-CAKIRER.jpg", role: "Mevlana Mahallesi Muhtarı", tel:"0532 472 02 61", map:"Mevlana Mah. 846 Sok. No:2, Gebze/Kocaeli",mail:"sabantuncer@gmail.com" },
    { name: "Murat YANDIK",imageUrl: "/images/gebze/muhtarlar/Murat-YANDIk.jpg", role: "Mimar Sinan Mahallesi Muhtarı", tel:"0532 302 05 63", map:"Mimar Sinan Mah.7 Sok. No:16 Dostluk Parkı Gebze/Kocaeli",mail:"ebumansur.murat@gmail.com" },
    { name: "Davut KABACA",imageUrl: "/images/gebze/muhtarlar/Davut-KABACA.jpg", role: "Mollafenari Mahallesi Muhtarı", tel:"0532 235 61 65", map:"Mollafenari Mah. 3420 Sok. No:1, Gebze/Kocaeli",mail:"ismailyilmaz@gmail.com" },
    { name: "Feti TAŞDEMİR", imageUrl: "/images/gebze/muhtarlar/Feti-TASDEMIR.jpg", role: "Muallimköy Mahallesi Muhtarı", tel:"0532 456 78 90", map:"Muallimköy Mah. 1234 Sok. No:5, Gebze/Kocaeli",mail:"alirizayildiz@gmail.com" },
    { name: "Metin KARA", imageUrl: "/images/gebze/muhtarlar/Metin-KARA.jpg", role: "Mudarlı Mahallesi Muhtarı", tel:"0532 512 51 95", map:"Mudarlı Mahallesi İstiklal Cad. No:3 Gebze/Kocaeli",mail:"" },
    { name: "Tarık DEĞİRMENCİ", imageUrl: "/images/gebze/muhtarlar/Tarik-DEGIRMENCI.jpg", role: "Mustafapaşa Mahallesi Muhtarı", tel:"0535 767 08 57", map:"Mustafa Paşa Mahallesi 713/1 Sok. No:9 Gebze/Kocaeli",mail:"" },
    { name: "Musa USLU", imageUrl: "/images/gebze/muhtarlar/Musa-USLU.jpg", role: "Osman Yılmaz Mahallesi Muhtarı", tel:"0532 569 61 56", map:"Osman Yılmaz Mah. 611/2 Sok. No:7 Gebze/Kocaeli",mail:"muhtar.amca@hotmail.com" },
    { name: "Ziya GÜLER", imageUrl: "/images/gebze/muhtarlar/Ziya-GULER.jpg", role: "Ovacık Mahallesi Muhtarı", tel:"0532 722 00 93", map:"Sancak Cad. No:2 Ovacık Mah. Gebze/Kocaeli",mail:"" },
    { name: "Fuat ATABEY", imageUrl: "/images/gebze/muhtarlar/Fuat-ATABEY.jpg", role: "Pelitli Mahallesi Muhtarı", tel:"0532 606 99 71", map:"Pelitli Mahallesi 4448 Sok. No:8 Gebze/Kocaeli",mail:"fuatatabey08@hotmail.com" },
    { name: "Mehmet KATI",imageUrl: "/images/gebze/muhtarlar/Mehmet-KATI.jpg", role: "Sultan Orhan Mahallesi Muhtarı", tel:"0536 448 73 73", map:"Sultan Orhan Mah. 1120 Sok. No:48 Gebze/Kocaeli",mail:"mehmetkati4161@gmail.com" },
    { name: "Cevat KARAMAN", imageUrl: "/images/gebze/muhtarlar/Cevat-KAHRAMAN.jpg", role: "Tatlıkuyu Mahallesi Muhtarı", tel:"0533 249 64 64", map:"Tatlıkuyu Mahallesi1317/1 Sok. No:5 Gebze/Kocaeli",mail:"karamancevat_41@hotmail.com" },
    { name: "Mehmet AYDIN", imageUrl: "/images/gebze/muhtarlar/Mehmet-AYDIN.jpg", role: "Tavşanlı Mahallesi Muhtarı", tel:"0532 277 04 23", map:"Tavşanlı Mah. Atatürk Cad. Gebze/Kocaeli",mail:"" },
    { name: "Sami BULDUR", imageUrl: "/images/gebze/muhtarlar/Sami-BULDUR.jpg", role: "Tepemanayır Mahallesi Muhtarı", tel:"0535 669 55 10", map:"Tepemanır Mah.4630 Sok.No:10 Kat:2 Gebze/Kocaeli",mail:"samibuldur4141@gmail.com" },
    { name: "Hüseyin AKIN", imageUrl: "/images/gebze/muhtarlar/Huseyin-AKIN.jpg", role: "Ulus Mahallesi Muhtarı", tel:"0537 573 90 40", map:"Ulus Mah. Yaşar Doğu Cad.No:112 Gebze/Kocaeli",mail:"ulusmahallemuhtarligi@gmail.com" },
    { name: "Ersun ÇEVİK", imageUrl: "/images/gebze/muhtarlar/Ersun-CEVIK.jpg", role: "Yağcılar Mahallesi Muhtarı", tel:"0535 348 31 30", map:"Yağcılar Mahallesi Cumhuriyet Cad. No:96 Gebze/Kocaeli",mail:"" },
    { name: "Şükriye KAVRAN", imageUrl: "/images/gebze/muhtarlar/Sukriye-KAVRAN.jpg", role: "Yavuz Selim Mahallesi Muhtarı", tel:"0535 634 68 79", map:"Yavuz Selim Mah. Selim Paşa Cad. No:60 Gebze/Kocaeli",mail:"kavran634@hotmail.com" },
    { name: "Esengül AKTAŞ", imageUrl: "/images/gebze/muhtarlar/Esengul-AKTAS.jpg", role: "Yenikent Mahallesi Muhtarı", tel:"0543 740 03 01", map:"Yenikent Mah.2424 Sok. No:2 Gebze/Kocaeli",mail:"esengulaktas01@gmail.com" },
];

// Modal bileşeni
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    person: CouncilMember | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, person }) => {
    if (!isOpen || !person) return null;

    return (
        <div className="fixed inset-0 bg-[#022842]/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full">
                <div className="flex justify-end p-2">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <span className="text-2xl">&times;</span>
                    </button>
                </div>
                <div className="flex flex-row">
                    {/* Left side - Image */}
                    <div className="w-1/3 p-4">
                        <img
                            src={person.imageUrl}
                            alt={person.name}
                            className="w-full object-cover rounded-lg shadow-md"
                        />
                    </div>

                    {/* Right side - Information */}
                    <div className="w-2/3 p-4">
                        <div className="border-b pb-3 mb-4">
                            <h4 className="text-lg font-bold text-gray-800">{person.role}</h4>
                            <h3 className="text-xl font-semibold text-gray-800">{person.name}</h3>
                        </div>

                        <div className="space-y-3">
                            {person.tel && (
                                <div className="flex items-center">
                                    <div className="bg-blue-100 h-8 w-8 rounded-full flex items-center justify-center text-blue-600 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Telefon:</span> {person.tel}
                                    </div>
                                </div>
                            )}

                            {person.mail && (
                                <div className="flex items-center">
                                    <div className="bg-red-100 h-8 w-8 rounded-full flex items-center justify-center text-red-600 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="font-semibold">E-posta:</span> {person.mail}
                                    </div>
                                </div>
                            )}

                            {person.map && (
                                <div className="flex items-start text-left">
                                    <div className="bg-green-100 h-8 w-8 rounded-full flex items-center justify-center text-green-600 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <span className="font-semibold">Adres:</span> {person.map}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PersonCard: React.FC<{ person: CouncilMember }> = ({ person }) => {
    const [showModal, setShowModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mb-5 text-center">
            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={openModal}
            >
                <img
                    src={person.imageUrl}
                    alt={person.name}
                    className="h-36 w-full object-cover"
                    onError={(e) => (e.currentTarget.src = "/api/placeholder/250/230")}
                />
                <div
                    className={`absolute inset-0 flex items-center justify-center  ${isHovered ? 'bg-opacity-40' : 'bg-opacity-0'} transition-all duration-300 cursor-pointer`}
                >
                    <div className={`bg-white text-black py-1 px-3 rounded ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                        Detaylı Bilgi
                    </div>
                </div>
            </div>
            <div className="p-4">
                <h4 className="text-lg font-medium text-gray-800">{person.name}</h4>
                <span className="text-gray-600 font-medium">{person.role}</span>

            </div>
            <Modal isOpen={showModal} onClose={closeModal} person={person} />
        </div>
    );
};

const GebzePage: React.FC = () => {
    return (
        <div id="pcoded" className="pcoded">
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div
                            className="pcoded-contentcontainer mx-auto px-3 bg-white bg-opacity-60 rounded-xl shadow-lg">
                            <div className="pcoded-inner-content ">
                                <div className="main-body">
                                    <div
                                        className="bg-red-900 shadow-lg rounded-2xl p-3 mb-6 my-3 mx-auto w-full max-w-xl text-center">
                                        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white">MAHALLE
                                            MUHTARLARI</h1>
                                    </div>

                                    <div className="page-wrapper">
                                        <div className="flex flex-row gap-4 mt-1">
                                            {/* Council Members Section */}
                                            <div
                                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                                                {councilMembers.map((member, index) => (
                                                    <PersonCard key={index} person={member}/>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GebzePage;