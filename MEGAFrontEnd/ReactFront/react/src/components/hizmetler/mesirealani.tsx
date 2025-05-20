import { motion } from "framer-motion";
import { MapPin, Phone, Info, X, Mail } from 'lucide-react';
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

interface MesireAlani {
    id: number;
    baslik: string;
    imgUrl: string;
    telefon: string;
    konum: string;
    buttonDetay: string;
    buttonKonum: string;
    mail: string | null;
    detaylar?: string;
}

const WorkshopCenterCard = ({ center }: { center: MesireAlani }) => {
    const [showDetails, setShowDetails] = useState(false);
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        if (center.buttonDetay) {
            navigate(center.buttonDetay);
        } else {
            setShowDetails(!showDetails);
        }
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            className="w-full md:w-2/5 sm:w-3/5 bg-white border border-orange-200 shadow-xl rounded-xl overflow-hidden transition-all relative flex flex-col md:flex-row min-h-[300px] p-4"
        >
            <div className="w-full md:w-1/3 h-[200px] md:h-auto">
                <img
                    src={center.imgUrl}
                    alt={center.baslik}
                    className="object-cover w-full h-full max-h-[270px] rounded-lg"
                />
            </div>

            <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
                <div>
                    <Link
                        to={center.buttonDetay}
                        className="text-lg font-bold text-blue-500 border-b-2 border-blue-400 pb-1 block"
                    >
                        {center.baslik}
                    </Link>
                    <br/>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                            <MapPin className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                            <p>{center.konum}</p>
                        </div>

                        <div className="flex items-center">
                            <Phone className="w-5 h-5 text-blue-600 mr-2" />
                            <p>{center.telefon}</p>
                        </div>

                        {center.mail && (
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 text-blue-600 mr-2" />
                                <p>{center.mail}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <a
                        href={center.buttonKonum}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-3 py-2 bg-gradient-to-r from-sky-500 to-sky-700 text-blue-800 rounded-md hover:from-sky-600 hover:to-sky-800 transition-all shadow-md text-xs flex-1"
                    >
                        <MapPin className="w-4 h-4 mr-2" />
                        Konum
                    </a>

                    <button
                        onClick={handleDetailsClick}
                        className={`flex items-center justify-center px-3 py-2 rounded-md transition-all shadow-md text-xs flex-1 ${
                            showDetails
                                ? "bg-gradient-to-r from-rose-400 to-pink-500 text-blue-800 hover:from-rose-500 hover:to-pink-600"
                                : "bg-gradient-to-r from-indigo-500 to-purple-600 text-blue-800 hover:from-indigo-600 hover:to-purple-700"
                        }`}
                    >
                        {showDetails ? (
                            <>
                                <X className="w-4 h-4 mr-2" />
                                Gizle
                            </>
                        ) : (
                            <>
                                <Info className="w-4 h-4 mr-2" />
                                Detaylı Bilgi
                            </>
                        )}
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default function MesireAlaniPage() {
    const [mesireAlanlari, setMesireAlanlari] = useState<MesireAlani[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMesireAlanlari = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:8080/api/hizmetler/kategori/MESIREALANI');
                setMesireAlanlari(response.data);
            } catch (err) {
                console.error("API Hatası:", err);
                setError('Mesire alanları yüklenirken bir hata oluştu');
            } finally {
                setLoading(false);
            }
        };

        fetchMesireAlanlari();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-1 justify-center items-center">
                    <div className="text-lg">Yükleniyor...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-1 justify-center items-center">
                    <div className="text-red-500 text-lg">{error}</div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1">
                <br />
                <div className="flex-1 px-6 pt-0 mt-[0px] pb-20"> <br/>
                    <section className="mb-40">
                        <div className="max-w-6xl mx-auto px-4">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-blue-500 p-4 rounded-xl shadow-xl mb-5"
                            >
                                <div className="text-2xl font-semibold text-white text-center">
                                    MESİRE ALANLARI
                                </div>
                            </motion.div>

                            {mesireAlanlari.length === 0 ? (
                                <div className="text-center text-gray-500 p-10">
                                    Herhangi bir mesire alanı bulunamadı.
                                </div>
                            ) : (
                                <div className="flex flex-wrap justify-center gap-6">
                                    {mesireAlanlari.map((center) => (
                                        <WorkshopCenterCard key={center.id} center={center} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}