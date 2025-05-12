import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import axios from 'axios';

// City Interface
interface City {
    id?: number;
    name: string;
    city: string;
    country: string;
    flag: string;
    type: 'domestic' | 'international'; // New field to differentiate location type
}

// City Card Component
const CityCard: React.FC<{ city: City }> = ({ city }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-2xl overflow-hidden transition-all"
    >
        <div className="p-4">
            <div className="flex items-center gap-2">
                {city.flag && (
                    <img
                        src={city.flag}
                        alt={city.country}
                        className="w-6 h-4 rounded-sm"
                    />
                )}
                <h2 className="text-xl font-semibold">{city.name}</h2>
            </div>
            <p className="text-gray-600 mt-2">{city.city}, {city.country}</p>
        </div>
    </motion.div>
);

// Sister Cities Component
const SisterCities: React.FC = () => {
    // State to store domestic and international cities
    const [cities, setCities] = useState<City[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Validate and transform city data
    const transformCityData = (data: any, type: 'domestic' | 'international'): City[] => {
        // If data is null or undefined, return an empty array
        if (!data) return [];

        // If data is already an array, map it
        if (Array.isArray(data)) {
            return data.map(city => ({
                id: city?.id,
                name: city?.name || 'Bilinmeyen Şehir',
                city: city?.city || '',
                country: city?.country || 'Türkiye',
                flag: city?.flag || '/default-flag.png',
                type: type
            }));
        }

        // If data has a content or data property, try to use that
        if (data.content && Array.isArray(data.content)) {
            return data.content.map((city: any) => ({
                id: city?.id,
                name: city?.name || 'Bilinmeyen Şehir',
                city: city?.city || '',
                country: city?.country || 'Türkiye',
                flag: city?.flag || '/default-flag.png',
                type: type
            }));
        }

        // If data has a data property, try to use that
        if (data.data && Array.isArray(data.data)) {
            return data.data.map((city: any) => ({
                id: city?.id,
                name: city?.name || 'Bilinmeyen Şehir',
                city: city?.city || '',
                country: city?.country || 'Türkiye',
                flag: city?.flag || '/default-flag.png',
                type: type
            }));
        }

        // If no recognizable structure, return empty array
        console.warn('Unrecognized city data structure:', data);
        return [];
    };

    // Fetch cities when component mounts
    useEffect(() => {
        const fetchCities = async () => {
            try {
                // Fetch domestic cities
                const domesticResponse = await axios.get('/api/kardes-sehirler/domestic');

                // Fetch international cities
                const internationalResponse = await axios.get('/api/kardes-sehirler/international');

                // Transform and combine cities
                const domesticCities = transformCityData(domesticResponse.data, 'domestic');
                const internationalCities = transformCityData(internationalResponse.data, 'international');

                setCities([...domesticCities, ...internationalCities]);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching cities:', err);
                setError("Şehirler yüklenirken hata oluştu");
                setLoading(false);
            }
        };

        fetchCities();
    }, []);

    // Loading state
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-900"></div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="flex justify-center items-center h-screen text-red-600">
                {error}
            </div>
        );
    }

    // Separate domestic and international cities
    const domesticCities = cities.filter(city => city.type === 'domestic');
    const internationalCities = cities.filter(city => city.type === 'international');

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-red-900 shadow-lg rounded-2xl p-3 mb-8 text-center">
                <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white">
                    KARDEŞ ŞEHİRLER
                </h1>
            </div>

            {/* Domestic Cities Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                    <span className="mr-2">🏠</span> Yurt İçi Kardeş Şehirler
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {domesticCities.length > 0 ? (
                        domesticCities.map((city, index) => (
                            <CityCard
                                key={`domestic-${city.id ?? index}`}
                                city={city}
                            />
                        ))
                    ) : (
                        <p className="text-gray-600 col-span-full text-center">
                            Yurt içi kardeş şehir bulunamadı.
                        </p>
                    )}
                </div>
            </section>

            {/* International Cities Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                    <span className="mr-2">🌍</span> Yurt Dışı Kardeş Şehirler
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {internationalCities.length > 0 ? (
                        internationalCities.map((city, index) => (
                            <CityCard
                                key={`international-${city.id ?? index}`}
                                city={city}
                            />
                        ))
                    ) : (
                        <p className="text-gray-600 col-span-full text-center">
                            Yurt dışı kardeş şehir bulunamadı.
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default SisterCities;