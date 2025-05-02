import React from "react";

const EtikKomisyonu: React.FC = () => {
    const komisyonUyeleri = [
        { ad: "Ahmet HÜSEYİNÇELEBİ", unvan: "Başkan Yardımcısı", gorev: "Komisyon Başkanı" },
        { ad: "İmran AYYILDIZ", unvan: "İK ve Eğitim Müdür V.", gorev: "Komisyon Üyesi" },
        { ad: "Bilgin ALTAY", unvan: "Mali Hizmetler Müdür V.", gorev: "Komisyon Üyesi" },
    ];

    const etikIlkeler = [
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

    return (
        <div className="min-h-screen mt-3 py-30 px-4 flex justify-center items-start">
            <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6 sm:p-10">

                {/* Başlık Arka Planlı */}
                <div className="relative w-full h-48 sm:h-60 mb-6 rounded-xl overflow-hidden flex items-center justify-center">
                    <img
                        src="/images/etikkomisyonu/etik-ikonlar (5).png"
                        alt="Etik Komisyonu Arka Plan"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-14" />
                </div>

                {/* Etik Komisyonu Başlığı */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl sm:text-4xl font-bold text-blue-700">
                        Etik Komisyonu
                    </h1>
                </div>

                {/* Etik İlkeler */}
                <section className="mb-8">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-lg">
                        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4 text-center">
                            Etik Davranış İlkeleri
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-sm sm:text-base">
                            {etikIlkeler.map((ilke, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">✓</span>
                                    <span>{ilke}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Komisyon Üyeleri */}
                <section className="mt-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4 text-center">
                        Komisyon Üyeleri
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {komisyonUyeleri.map((uye, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 text-center shadow-lg">
                                <h3 className="text-lg font-bold text-gray-800">{uye.ad}</h3>
                                <p className="text-sm text-gray-600">{uye.unvan}</p>
                                <span className="mt-3 inline-block bg-blue-600 text-white text-xs px-4 py-1 rounded-full">
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
