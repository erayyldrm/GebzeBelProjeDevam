import React from "react";
import Sidebar from "../SideBar/sidebar.tsx";
import { gebze } from "../_SayfaBilgileri/Sayfalar.tsx";

interface CouncilMember {
    name: string;
    imageUrl: string;
    role: string;
}

const councilMembers: CouncilMember[] = [
    { name: "Ekrem USANMAZ", imageUrl: "/images/gebze/muhtarlar/Ekrem-USANMAZ.jpg", role: "Adem Yavuz Mahallesi Muhtarı" },
    { name: "Tezcan GÜRLEK",  imageUrl: "/images/gebze/muhtarlar/Tezcan-GURLEK.jpg", role: "Ahatlı Mahallesi Muhtarı" },
    { name: "Remzi KANDAZ", imageUrl: "/images/gebze/muhtarlar/Remzi-KANDAZ.jpg", role: "Arapçeşme Mahallesi Muhtarı" },
    { name: "Halis TEPE", imageUrl: "/images/gebze/muhtarlar/Halis-TEPE.jpg", role: "Balçık Mahallesi Muhtarı" },
    { name: "Bayram ARTÜRKASLAN", imageUrl: "/images/gebze/muhtarlar/Bayram-ARTUKASLAN.jpg", role: "Barış Mahallesi Muhtarı" },
    { name: "Osman ŞAHİN", imageUrl: "/images/gebze/muhtarlar/Osman-SAHİN.jpg", role: "Beylikbağı Mahallesi Muhtarı" },
    { name: "Selim ÇETİN",imageUrl: "/images/gebze/muhtarlar/Selim-CETİN.jpg", role: "Cumaköy Mahallesi Muhtarı" },
    { name: "Sedat KILDACI", imageUrl: "/images/gebze/muhtarlar/Sedat-KILDACI.jpg", role: "Cumhuriyet Mahallesi Muhtarı" },
    { name: "Necmi HACIOĞLU", imageUrl: "/images/gebze/muhtarlar/Necmi-HACIOGLU.jpg", role: "Denizli Mahallesi Muhtarı" },
    { name: "Mehmet YAVAŞ", imageUrl: "/images/gebze/muhtarlar/Mehmet-YAVAS.jpg", role: "Duraklı Mahallesi Muhtarı" },
    { name: "Yaşar ERDOĞAN", imageUrl: "/images/gebze/muhtarlar/Yasar-ERDOGAN.jpg", role: "Elbizli Mahallesi Muhtarı" },
    { name: "Tayfun ÖZCAN", imageUrl: "/images/gebze/muhtarlar/Tayfun-OZCAN.jpg", role: "Eskihisar Mahallesi Muhtarı" },
    { name: "Metin TOPÇU",imageUrl: "/images/gebze/muhtarlar/Metin-TOPCU.jpg", role: "Gaziler Mahallesi Muhtarı" },
    { name: "Mümin YILMAZ", imageUrl: "/images/gebze/muhtarlar/Mumin-YILMAZ.jpg", role: "Güzeller Mahallesi Muhtarı" },
    { name: "İrfan Malkoç",imageUrl: "/images/gebze/muhtarlar/Irfan-MALKOC.jpg", role: "Hacıhalil Mahallesi Muhtarı" },
    { name: "Halil GÜK",imageUrl: "/images/gebze/muhtarlar/Halil-GUK.jpg", role: "Hatipler Mahallesi Muhtarı" },
    { name: "Ahmet ASLAN", imageUrl: "/images/gebze/muhtarlar/Ahmet-ASLAN.jpg", role: "Hürriyet Mahallesi Muhtarı" },
    { name: "Türker DURSUN", imageUrl: "/images/gebze/muhtarlar/Turker-DURSUN.jpg", role: "İnönü Mahallesi Muhtarı" },
    { name: "Hüseyin KAHRİMAN", imageUrl: "/images/gebze/muhtarlar/Huseyin-KAHRİMAN.jpg", role: "İstasyon Mahallesi Muhtarı" },
    { name: "Ahmet ÖZYURT", imageUrl: "/images/gebze/muhtarlar/ahmetozyurt.jpg", role: "Kadıllı Mahallesi Muhtarı" },
    { name: "Turgut ZAFER",imageUrl: "/images/gebze/muhtarlar/Turgut-ZAFER.jpg", role: "Kargalı Mahallesi Muhtarı" },
    { name: "İsmail AYAR", imageUrl: "/images/gebze/muhtarlar/Ismail-AYAR.jpg", role: "Kirazpınar Mahallesi Muhtarı" },
    { name: "Mehmet ALTINTAŞ", imageUrl: "/images/gebze/muhtarlar/Mehmet-ALTINTAS.jpg", role: "Köşklü Çeşme Mahallesi Muhtarı" },
    { name: "Selda ÇAKIRER",imageUrl: "/images/gebze/muhtarlar/Selda-CAKIRER.jpg", role: "Mevlana Mahallesi Muhtarı" },
    { name: "Murat YANDIK",imageUrl: "/images/gebze/muhtarlar/Murat-YANDIk.jpg", role: "Mimar Sinan Mahallesi Muhtarı" },
    { name: "Davut KABACA",imageUrl: "/images/gebze/muhtarlar/Davut-KABACA.jpg", role: "Mollafenari Mahallesi Muhtarı" },
    { name: "Feti TAŞDEMİR", imageUrl: "/images/gebze/muhtarlar/Feti-TASDEMIR.jpg", role: "Muallimköy Mahallesi Muhtarı" },
    { name: "Metin KARA", imageUrl: "/images/gebze/muhtarlar/Metin-KARA.jpg", role: "Mudarlı Mahallesi Muhtarı" },
    { name: "Tarık DEĞİRMENCİ", imageUrl: "/images/gebze/muhtarlar/Tarik-DEGIRMENCI.jpg", role: "Mustafapaşa Mahallesi Muhtarı" },
    { name: "Musa USLU", imageUrl: "/images/gebze/muhtarlar/Musa-USLU.jpg", role: "Osman Yılmaz Mahallesi Muhtarı" },
    { name: "Ziya GÜLER", imageUrl: "/images/gebze/muhtarlar/Ziya-GULER.jpg", role: "Ovacık Mahallesi Muhtarı" },
    { name: "Fuat ATABEY", imageUrl: "/images/gebze/muhtarlar/Fuat-ATABEY.jpg", role: "Pelitli Mahallesi Muhtarı" },
    { name: "Mehmet KATI",imageUrl: "/images/gebze/muhtarlar/Mehmet-KATI.jpg", role: "Sultan Orhan Mahallesi Muhtarı" },
    { name: "Cevat KARAMAN", imageUrl: "/images/gebze/muhtarlar/Cevat-KAHRAMAN.jpg", role: "Tatlıkuyu Mahallesi Muhtarı" },
    { name: "Mehmet AYDIN", imageUrl: "/images/gebze/muhtarlar/Mehmet-AYDIN.jpg", role: "Tavşanlı Mahallesi Muhtarı" },
    { name: "Sami BULDUR", imageUrl: "/images/gebze/muhtarlar/Sami-BULDUR.jpg", role: "Tepemanayır Mahallesi Muhtarı" },
    { name: "Hüseyin AKIN", imageUrl: "/images/gebze/muhtarlar/Huseyin-AKIN.jpg", role: "Ulus Mahallesi Muhtarı" },
    { name: "Ersun ÇEVİK", imageUrl: "/images/gebze/muhtarlar/Ersun-CEVIK.jpg", role: "Yağcılar Mahallesi Muhtarı" },
    { name: "Şükriye KAVRAN", imageUrl: "/images/gebze/muhtarlar/Sukriye-KAVRAN.jpg", role: "Yavuz Selim Mahallesi Muhtarı" },
    { name: "Esengül AKTAŞ", imageUrl: "/images/gebze/muhtarlar/Esengul-AKTAS.jpg", role: "Yenikent Mahallesi Muhtarı" },
];

const PersonCard: React.FC<{ person: CouncilMember }> = ({ person }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mb-5 text-center">
        <img
            src={person.imageUrl}
            alt={person.name}
            className="h-36 w-full object-cover"
            onError={(e) => (e.currentTarget.src = "/api/placeholder/250/230")}
        />
        <div className="p-4">
            <h4 className="text-lg font-medium text-gray-800">{person.name}</h4>
            <span className="text-gray-600 font-medium">{person.role}</span>
        </div>
    </div>
);
const GebzePage: React.FC = () => {
    return (
        <div id="pcoded" className="pcoded">
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">MAHALLE MUHTARLARI</h1>
                                    <div className="page-wrapper">
                                        <div className="flex flex-row gap-4">


                                            {/* Council Members Section */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                                                {councilMembers.map((member, index) => (
                                                    <PersonCard key={index} person={member} />
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
