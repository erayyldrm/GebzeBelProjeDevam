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
        },
        {
            adSoyad: 'İmran AYYILDIZ',
            unvan: 'İnsan Kaynakları ve Eğitim Müdür V.',
            gorev: 'Komisyon Üyesi',
        },
        {
            adSoyad: 'Bilgin ALTAY',
            unvan: 'Mali Hizmetler Müdür V.',
            gorev: 'Komisyon Üyesi',
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Başlık Bölümü */}
                <section className="relative bg-blue-700 py-14 sm:py-20 mb-10 rounded-xl shadow-lg overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
                    <div className="relative flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-10">
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-4 min-w-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-9 w-9 sm:h-10 sm:w-10 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 16h-1v-4h-1m1-4h.01M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"
                                />
                            </svg>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide">
                                Etik Komisyonu
                            </h1>
                        </div>
                        <p className="text-base sm:text-lg md:text-xl font-medium max-w-3xl">
                            Gebze Belediyesi'nin etik değerlerini ve ilkelerini benimseyen, kamu hizmetinde saydamlık, güven ve
                            sorumluluk anlayışıyla hareket eden Etik Komisyonu hakkında detaylı bilgiye buradan ulaşabilirsiniz.
                        </p>
                    </div>
                </section>

                {/* Etik Davranış İlkeleri */}
                <section className="bg-white shadow-lg rounded-xl px-4 py-6 sm:p-6 mb-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-blue-700 border-b-2 border-blue-100 pb-3 mb-6">
                        Etik Davranış İlkeleri
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                        {etikDavranisIlkeleri.map((ilke, i) => (
                            <li key={i} className="flex items-start gap-2 min-w-0">
                                <span className="text-blue-500">✓</span>
                                <span>{ilke}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Komisyon Üyeleri */}
                <section className="bg-white shadow-lg rounded-xl px-4 py-6 sm:p-6 mb-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-blue-700 border-b-2 border-blue-100 pb-3 mb-6 text-center">
                        Etik Komisyonu Üyeleri
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {etikKomisyonuListesi.map((uye, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 p-5 rounded-lg shadow-sm text-center hover:shadow-md transition"
                            >
                                <h3 className="font-semibold text-lg text-gray-800">{uye.adSoyad}</h3>
                                <p className="text-blue-700">{uye.unvan}</p>
                                <span className="mt-2 inline-block bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
                                    {uye.gorev}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default EtikKomisyonu;
