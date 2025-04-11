import React from 'react';
import Sidebar from "../SideBar/sidebar.tsx";
import {kurumsal} from "../_SayfaBilgileri/Sayfalar.tsx";

const EtikKomisyonu: React.FC = () => {
    const etikDavranisIlkeleri = [
        "Halka Hizmet Bilinci",
        "Hizmet Standartlarına Uymak",
        "Amaç ve Misyona Bağlılık",
        "Dürüstlük ve Tarafsızlık",
        "Saygınlık ve Güven",
        "Nezaket ve Saygı",
        "Ayrımcılık Yapmamak",
        "Saydamlık ve Katılımcılık",
        "Hediye Almamak",
        "Kamu Mallarını Korumak",
        "Savurganlıktan Kaçınmak",
        "Çıkar Çatışmasından Kaçınmak",
        "Hesap Verme Sorumluluğu",
        "İmtiyazsız Kamu Hizmeti",
        "Doğruluk"
    ];

    const etikKomisyonuListesi = [
        {
            adSoyad: 'Ahmet HÜSEYİNÇELEBİ',
            unvan: 'Başkan Yardımcısı',
            gorev: 'Komisyon Başkanı',
            resim: '/images/avatars/avatar1.jpg' // Varsayılan avatar ekleyebilirsiniz
        },
        {
            adSoyad: 'İmran AYYILDIZ',
            unvan: 'İnsan Kaynakları ve Eğitim Müdür V.',
            gorev: 'Komisyon Üyesi',
            resim: '/images/avatars/avatar2.jpg'
        },
        {
            adSoyad: 'Bilgin ALTAY',
            unvan: 'Mali Hizmetler Müdür V.',
            gorev: 'Komisyon Üyesi',
            resim: '/images/avatars/avatar3.jpg'
        }
    ];

    return (
        <div className="page-wrapper">
            {/* Page Title */}
            <section className="page-title" style={{ backgroundImage: 'url(/images/kurumsal/gebze.jpg)' }}>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="content-wrapper">
                            <div className="title">
                                <h1 style={{ color: "white", fontSize: "150px", fontFamily: "Poppins" }}>Etik Komisyonu</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sidebar Page Container */}
            <section className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-8 order-lg-2">
                            <div className="depertment-details pl-5">
                                {/* Etik Davranış İlkeleri Kartı */}
                                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                                    <h2 className="text-2xl font-bold mb-4 text-blue-600 border-b pb-2">ETİK DAVRANIŞ İLKELERİ</h2>
                                    <div className="grid grid-cols-3 gap-3">
                                        {etikDavranisIlkeleri.map((ilke, index) => (
                                            <div
                                                key={index}
                                                className="bg-blue-50 p-3 rounded-md hover:bg-blue-100 transition-colors duration-300 flex items-center"
                                            >
                                                <span className="mr-2 text-blue-600">✓</span>
                                                {ilke}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Etik Komisyonu Listesi Kartları */}
                                <div className="bg-white shadow-lg rounded-lg p-6">
                                    <h2 className="text-2xl font-bold mb-4 text-blue-600 border-b pb-2">ETİK KOMISYONU LİSTESİ</h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        {etikKomisyonuListesi.map((uye, index) => (
                                            <div
                                                key={index}
                                                className="bg-gray-50 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300"
                                            >
                                                <div className="p-4 text-center">


                                                    <h3 className="font-bold text-lg text-gray-800">{uye.adSoyad}</h3>
                                                    <p className="text-blue-600 mb-2">{uye.unvan}</p>
                                                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                                                        {uye.gorev}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default EtikKomisyonu;