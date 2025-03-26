import { motion } from "framer-motion";

const domesticMunicipalities = [
    { name: "Acıgöl Belediyesi", city: "Nevşehir", country: "Türkiye", flag: "https://flagcdn.com/w320/tr.png" },
    { name: "Gülşehir Belediyesi", city: "Nevşehir", country: "Türkiye", flag: "https://flagcdn.com/w320/tr.png" },
    { name: "Silvan Belediyesi", city: "Diyarbakır", country: "Türkiye", flag: "https://flagcdn.com/w320/tr.png" },
    { name: "Selçuk Belediyesi", city: "İzmir", country: "Türkiye", flag: "https://flagcdn.com/w320/tr.png" },
    { name: "Saltukova Belediyesi", city: "Zonguldak", country: "Türkiye", flag: "https://flagcdn.com/w320/tr.png" },
    { name: "Malazgirt Belediyesi", city: "Muş", country: "Türkiye", flag: "https://flagcdn.com/w320/tr.png" },
    { name: "Durankaya Belediyesi", city: "Hakkari", country: "Türkiye", flag: "https://flagcdn.com/w320/tr.png" }
];

const internationalMunicipalities = [
    { name: "Değirmenlik Belediyesi", city: "Değirmenlik", country: "KKTC", flag: "https://flagcdn.com/w320/cy.png" },
    { name: "Karakol Şehri", city: "Issık-Göl", country: "Kırgızistan", flag: "https://flagcdn.com/w320/kg.png" },
    { name: "Samuil Belediyesi", city: "Razgrad", country: "Bulgaristan", flag: "https://flagcdn.com/w320/bg.png" },
    { name: "Pilea Belediyesi", city: "Selanik", country: "Yunanistan", flag: "https://flagcdn.com/w320/gr.png" },
    { name: "Oeiras Belediyesi", city: "Lizbon", country: "Portekiz", flag: "https://flagcdn.com/w320/pt.png" },
    { name: "Kakanj Belediyesi", city: "Kakanj", country: "Bosna Hersek", flag: "https://flagcdn.com/w320/ba.png" },
    { name: "Garowe Belediyesi", city: "Garowe", country: "Somali", flag: "https://flagcdn.com/w320/so.png" }
];

const CityCard = ({ city }: { city: { name: string; city: string; country: string; flag: string } }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-lg rounded-2xl overflow-hidden transition-all"
    >
        <div className="p-4">
            <div className="flex items-center gap-2">
                <img src={city.flag} alt={city.country} className="w-6 h-4 rounded-sm" />
                <h2 className="text-xl font-semibold">{city.name}</h2>
            </div>
            <p className="text-gray-600 mt-2">{city.city}, {city.country}</p>
        </div>
    </motion.div>
);

export default function SisterCities() {
    return (
        <div>
        <div className="container mx-auto px-4 py-8">
            <br/><h1 className="text-3xl font-bold text-center mb-6">Kardeş Şehirler</h1>

            {/* Yurt İçi Şehirler */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">🏠 Yurt İçi Kardeş Şehirler</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {domesticMunicipalities.map((city, index) => (
                    <CityCard key={index} city={city} />
                ))}
            </div>

            {/* Yurt Dışı Şehirler */}
            <h2 className="text-2xl font-semibold mt-12 mb-4">🌍 Yurt Dışı Kardeş Şehirler</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {internationalMunicipalities.map((city, index) => (
                    <CityCard key={index} city={city} />
                ))}
            </div>

            {/* Garowe sonrası boşluk */}
            <br />
        </div>
        </div>
    );
}
