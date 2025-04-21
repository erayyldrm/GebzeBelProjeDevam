import React from 'react';

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
            resim: '/images/avatars/avatar1.jpg'
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
        <div
            className="page-wrapper"
            style={{
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                minHeight: '100vh',
                margin: '0 auto',
                maxWidth: '1200px',
                padding: '0 20px'
            }}
        >
            {/* Page Title */}
            <section className="page-title" style={{ backgroundImage: 'url(/images/kurumsal/gebze.jpg)' }}>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="content-wrapper text-center">
                            <div className="title">
                                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-wide drop-shadow-md mb-5">
                                    Etik Komisyonu
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sidebar Page Container */}
            <section className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row justify-content-center">
                        <div className="w-full px-4 sm:px-6 md:px-0 lg:w-10/12">
                            {/* Etik Davranış İlkeleri Kartı */}
                            <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-8">
                                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-600 border-b pb-2 text-center sm:text-left">
                                    ETİK DAVRANIŞ İLKELERİ
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {etikDavranisIlkeleri.map((ilke, index) => (
                                        <div
                                            key={index}
                                            className="bg-blue-50 p-3 rounded-md hover:bg-blue-100 transition-colors duration-300 flex items-start"
                                        >
                                            <span className="mr-2 text-blue-600">✓</span>
                                            <span>{ilke}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Etik Komisyonu Listesi Kartları */}
                            <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
                                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-600 border-b pb-2 text-center sm:text-left">
                                    ETİK KOMİSYONU LİSTESİ
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {etikKomisyonuListesi.map((uye, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-50 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 text-center"
                                        >
                                            <div className="p-4">
                                                <img
                                                    src={uye.resim}
                                                    alt={uye.adSoyad}
                                                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                                                />
                                                <h3 className="font-bold text-lg text-gray-800">{uye.adSoyad}</h3>
                                                <p className="text-blue-600 mb-2">{uye.unvan}</p>
                                                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm inline-block">
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
            </section>
        </div>
    );
};

export default EtikKomisyonu;
