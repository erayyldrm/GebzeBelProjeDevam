import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const wasteTypes = [
    {
        icon: "🧃",
        title: "Ambalaj Atıkları",
        description: "Cam, plastik, metal ve kâğıt ambalaj atıkları.",
        image: "/images/hizmetler/donusum/ambalaj.jpg",
        detailPage: "hizmetler/geridonusum/ambalaj",
        mapLink: "http://google.com/maps/place/Mevlana+Kapal%C4%B1+Pazar+Yeri/@40.8113533,29.4191744,18z/data=!4m6!3m5!1s0x14cb214b36d25719:0x23db983d4dff738b!8m2!3d40.8115684!4d29.4190946!16s%2Fg%2F11gnprgbd1?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
    },
    {
        icon: "🔋",
        title: "Atık Piller Ve Akümülülatörler",
        description: "Kullanılmış pillerin çevreye zarar vermeden toplanması.",
        image: "/images/hizmetler/donusum/pil.jpg",
        detailPage: "hizmetler/geridonusum/piller",
        mapLink: "https://www.google.com/maps/place/Mevlana+Kapal%C4%B1+Pazar+Yeri/@40.8113533,29.4191744,18z/data=!4m6!3m5!1s0x14cb214b36d25719:0x23db983d4dff738b!8m2!3d40.8115684!4d29.4190946!16s%2Fg%2F11gnprgbd1?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
    },
    {
        icon: "️️🛢️",
        title: "Bitkisel Ve Atık Yağlar",
        description: "Kullanılmış yağların uygun şekilde bertaraf edilmesi.",
        image: "/images/hizmetler/donusum/bitkisel.jpg",
        detailPage: "hizmetler/geridonusum/bitkisel",
        mapLink: "https://www.google.com/maps/place/Mevlana+Kapal%C4%B1+Pazar+Yeri/@40.8113533,29.4191744,18z/data=!4m6!3m5!1s0x14cb214b36d25719:0x23db983d4dff738b!8m2!3d40.8120141!4d29.4188972!16s%2Fg%2F11gnprgbd1?entry=tts&shorturl=1"
    },
    {
        icon: "📱",
        title: "Elektronik Atıklar",
        description: "Kullanılmış elektronik cihazların uygun şekilde bertaraf edilmesi.",
        image: "/images/hizmetler/donusum/elektronik.jpg",
        detailPage: "hizmetler/geridonusum/elektronik",
        mapLink: "https://www.google.com/maps/place/Mevlana+Kapal%C4%B1+Pazar+Yeri/@40.8113533,29.4191744,18z/data=!4m6!3m5!1s0x14cb214b36d25719:0x23db983d4dff738b!8m2!3d40.8115684!4d29.4190946!16s%2Fg%2F11gnprgbd1?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
    },
    {
        icon: "🍂",
        title: "Evsel Atıklar",
        description: "Evsel Çöpler ve Organik Atıklar.",
        image: "/images/hizmetler/donusum/evsel.jpeg",
        detailPage: "hizmetler/geridonusum/evsel",
        mapLink: "https://www.google.com/maps/place/Mevlana+Kapal%C4%B1+Pazar+Yeri/@40.8113533,29.4191744,18z/data=!4m6!3m5!1s0x14cb214b36d25719:0x23db983d4dff738b!8m2!3d40.8120141!4d29.4188972!16s%2Fg%2F11gnprgbd1?entry=tts&shorturl=1"
    },
    {
        icon: "🪑",
        title: "İri Hacimli Atıklar",
        description: "Kullanılmayacak durumda olan büyük hacimli eşyaların toplanması.",
        image: "/images/hizmetler/donusum/irihacimli.jpeg",
        detailPage: "hizmetler/geridonusum/hacimli",
        mapLink: "https://www.google.com/maps/place/Mevlana+Kapal%C4%B1+Pazar+Yeri/@40.8113533,29.4191744,18z/data=!4m6!3m5!1s0x14cb214b36d25719:0x23db983d4dff738b!8m2!3d40.8120141!4d29.4188972!16s%2Fg%2F11gnprgbd1?entry=tts&shorturl=1"
    },
    {
        icon: "🏗️",
        title: "Moloz Atıkları",
        description: "İnşaat ve yıkım sonucu oluşan atıkların bertarafı.",
        image: "/images/hizmetler/donusum/moloz.jpg",
        detailPage: "hizmetler/geridonusum/moloz",
        mapLink: "https://www.google.com/maps/place/Mevlana+Kapal%C4%B1+Pazar+Yeri/@40.8113533,29.4191744,18z/data=!4m6!3m5!1s0x14cb214b36d25719:0x23db983d4dff738b!8m2!3d40.8115684!4d29.4190946!16s%2Fg%2F11gnprgbd1?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
    },
    {
        icon: "♻️",
        title: "Sıfır Atık Nedir?",
        description: "Atıkların geri dönüşümle bertaraf edilmesi.",
        image: "/images/hizmetler/donusum/sifiratik.jpg",
        detailPage: "hizmetler/geridonusum/sifiratik",
        mapLink: "https://www.google.com/maps/place/Mevlana+Kapal%C4%B1+Pazar+Yeri/@40.8113533,29.4191744,18z/data=!4m6!3m5!1s0x14cb214b36d25719:0x23db983d4dff738b!8m2!3d40.8115684!4d29.4190946!16s%2Fg%2F11gnprgbd1?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
    },
    {
        icon: "👕",
        title: "Tekstil Atıkları",
        description: "Giysi, ayakkabı ve tekstil ürünlerinin geri dönüşümü.",
        image: "/images/hizmetler/donusum/tekstil.jpg",
        detailPage: "hizmetler/geridonusum/tekstil",
        mapLink: "https://www.google.com/maps/place/Mevlana+Kapal%C4%B1+Pazar+Yeri/@40.8113533,29.4191744,18z/data=!4m6!3m5!1s0x14cb214b36d25719:0x23db983d4dff738b!8m2!3d40.8120141!4d29.4188972!16s%2Fg%2F11gnprgbd1?entry=tts&shorturl=1"
    }
];

const GeriDonusumPage = () => {
    const [activeButtons, setActiveButtons] = useState<Record<number, string>>({});
    const navigate = useNavigate();

    const handleActionClick = (cardIndex: number, buttonType: string, detailPage: string, mapLink: string) => {
        setActiveButtons({ [cardIndex]: buttonType });

        if (buttonType === "detayli") {
            navigate(`/${detailPage}`);
        } else if (buttonType === "konum") {
            window.open(mapLink, "_blank");
        }
    };

    return (
        <div className="min-h-screen bg-green-50 text-gray-800 font-sans mt-3" style={{
            margin: '0 auto',
            maxWidth: 'calc(100% - 120px)',
            paddingLeft: '40px',
            paddingRight: '20px',

        }}>
            <header className="bg-green-100 px-6 py-10 rounded-b-2xl shadow-inner">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="text-6xl sm:text-7xl">♻️</div>
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-green-900 mb-2">
                            Geri Dönüşüm Noktaları
                        </h1>
                        <div className="bg-white border-l-4 border-green-600 p-4 rounded shadow text-gray-700 max-w-2xl">
                            Atıkların doğru yere atılması, temiz bir gelecek için atılmış büyük bir adımdır. Buradan hangi atığı nereye bırakabileceğinizi öğrenebilirsiniz.
                        </div>
                    </div>
                </div>
            </header>

            <div className="py-10 max-w-7xl mx-auto">
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {wasteTypes.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition flex flex-col justify-between h-full">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-32 object-cover object-center rounded-xl mb-4"
                            />
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold mb-2">
                                    {item.icon} {item.title}
                                </h2>
                                <p className="text-sm text-gray-700 mb-4">{item.description}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between gap-2 mb-4">
                                <button
                                    onClick={() => handleActionClick(index, "detayli", item.detailPage, item.mapLink)}
                                    style={
                                        activeButtons[index] === "detayli"
                                            ? { backgroundColor: "#022842", color: "#FFFFFF" }
                                            : { backgroundColor: "#FFFFFF", color: "#000000" }
                                    }
                                    className="px-4 py-2 border border-green-600 rounded hover:bg-gray-200 transition text-sm w-full"
                                >
                                    ℹ️ Hakkında
                                </button>
                                <button
                                    onClick={() => handleActionClick(index, "konum", item.detailPage, item.mapLink)}
                                    style={
                                        activeButtons[index] === "konum"
                                            ? { backgroundColor: "#022842", color: "#FFFFFF" }
                                            : { backgroundColor: "#FFFFFF", color: "#000000" }
                                    }
                                    className="px-4 py-2 border border-green-600 rounded hover:bg-gray-200 transition text-sm w-full"
                                >
                                    🚩 Konum
                                </button>
                            </div>
                            <div className="text-xs text-gray-500 border-t pt-2 text-center">
                                📞  0262 642 10 10&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;📩 sifiratik@gebze.bel.tr
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GeriDonusumPage;
