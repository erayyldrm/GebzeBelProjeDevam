import { useEffect, useState, ChangeEvent } from 'react';

// Define the type for a sister city object
interface KardesSehir {
    id: number;
    name: string;
    city: string;
    country: string;
    flag: string;
}

const KardesSehirlerCard = () => {
    const [sehirlerData, setSehirlerData] = useState<KardesSehir[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedCountry, setSelectedCountry] = useState<string>('all');
    const [countries, setCountries] = useState<string[]>([]);

    useEffect(() => {
        const fetchSehirlerData = async () => {
            try {
                let url = 'http://localhost:8080/api/kardes-sehirler';

                if (selectedCountry !== 'all' && selectedCountry !== '') {
                    url = `http://localhost:8080/api/kardes-sehirler/by-country/${selectedCountry}`;
                }

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`API yanıt hatası: ${response.status}`);
                }

                const data = await response.json() as KardesSehir[];
                setSehirlerData(data);

                // Extract unique countries for the filter
                if (selectedCountry === 'all') {
                    const uniqueCountries = [...new Set(data.map(city => city.country))];
                    setCountries(uniqueCountries);
                }

                setLoading(false);
            } catch (err) {
                console.error('Veri çekme hatası:', err);
                // Fix for error.message typing issue
                setError(err instanceof Error ? err.message : 'Bilinmeyen bir hata oluştu');
                setLoading(false);
            }
        };

        fetchSehirlerData();
    }, [selectedCountry]);

    // Fix the event typing for the select element
    const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(e.target.value);
    };

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8 flex justify-center items-center">
                <p className="text-lg">Yükleniyor...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8 flex justify-center items-center">
                <p className="text-lg text-red-500">Hata: {error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 mt-4">
            {/* Başlık Kutusu */}
            <div className="bg-blue-900 rounded-t-2xl p-2 flex justify-center items-center max-w-[466px] mx-auto">
                <img
                    src="/images/gebze/kardessehirler/kardes-sehirler-logo.png"
                    alt="Kardeş Şehirler"
                    className="h-24 object-contain"
                />
            </div>

            {/* Filtre */}
            <div className="bg-white p-4 shadow-md rounded-b-2xl max-w-[466px] mx-auto mb-6">
                <div className="mb-4">
                    <label htmlFor="countryFilter" className="block text-sm font-medium text-gray-700 mb-1">
                        Ülkeye Göre Filtrele:
                    </label>
                    <select
                        id="countryFilter"
                        className="w-full border border-gray-300 rounded-md py-2 px-3"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                    >
                        <option value="all">Tüm Ülkeler</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Kartlar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-6 rounded-2xl shadow-lg">
                {sehirlerData.length > 0 ? (
                    sehirlerData.map((city: KardesSehir) => (
                        <div
                            key={city.id}
                            className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col"
                        >
                            <div className="p-6 flex flex-col items-center text-center flex-grow">
                                {/* Flag */}
                                <div className="mb-4 w-[150px] h-[100px] flex items-center justify-center bg-gray-100 rounded-lg">
                                    <img
                                        src={city.flag || `/images/flags/${city.country.toLowerCase()}.png`}
                                        alt={`${city.country} flag`}
                                        className="w-full h-full object-contain p-2"
                                    />
                                </div>

                                {/* City Info */}
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                                    {city.name}
                                </h3>

                                <div className="text-gray-600 mb-2">
                                    <span className="font-medium">Şehir:</span> {city.city}
                                </div>

                                <div className="text-gray-600 mb-4">
                                    <span className="font-medium">Ülke:</span> {city.country}
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 border-t border-gray-200">
                                <div className="flex gap-2">
                                    <button
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                                    >
                                        Detaylar
                                    </button>
                                    <button
                                        className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                                    >
                                        Haritada Gör
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-3 text-center py-8">
                        <p className="text-lg text-gray-500">Bu filtreye uygun kardeş şehir bulunamadı.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default KardesSehirlerCard;