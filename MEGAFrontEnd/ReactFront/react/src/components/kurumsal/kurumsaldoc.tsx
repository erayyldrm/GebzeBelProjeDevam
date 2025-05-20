import { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// API'den gelen veri yapısı
interface KurumsalDoc {
    id: number;
    baslik: string;
    dosyaUrl: string;
    tarih: string;
    aktif: number;
    kategori: string;
}

const KurumsalDoc = () => {
    const [docs, setDocs] = useState<KurumsalDoc[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        fetch("http://localhost:8080/api/kurumsal/kurumsal-doc")
            .then((response) => {
                if (!response.ok) throw new Error("Sunucu hatası");
                return response.json();
            })
            .then((data) => {
                setDocs(data);
                setIsLoading(false);
            })
            .catch(() => {
                setError("Kurumsal dokümanlar yüklenirken hata oluştu.");
                setIsLoading(false);
            });
    }, []);

    const formatTarih = (tarihStr: string) => {
        const tarih = new Date(tarihStr);
        return new Intl.DateTimeFormat('tr-TR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(tarih);
    };

    if (error) return (
        <div className="flex justify-center items-center min-h-screen p-4 bg-light">
            <div className="w-full max-w-2xl bg-white border-left border-danger rounded shadow-lg overflow-hidden">
                <div className="p-4">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <svg className="h-8 w-8 text-danger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <h2 className="text-lg font-bold text-dark">Hata</h2>
                            <p className="text-secondary">{error}</p>
                            <button
                                className="mt-3 px-4 py-2 bg-danger text-white rounded hover:bg-danger"
                                onClick={() => window.location.reload()}
                            >
                                Yeniden Dene
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    if (isLoading) return (
        <div className="w-full max-w-4xl mx-auto my-4 px-4">
            <div className="bg-white rounded shadow-lg overflow-hidden p-4">
                <div className="animate-pulse">
                    <div className="h-8 bg-secondary rounded w-1/4 mb-6"></div>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="h-20 bg-secondary rounded"></div>
                                <div className="h-20 bg-secondary rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            id="kurumsaldoc"
            style={{ minHeight: '100vh' }}
        >
            <div className="pcoded-overlay-box"></div>
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container-left">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className="flex flex-col lg:flex-row justify-center items-start mt-[-21px] p-2 md:p-4"
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                                className="w-full lg:w-9/12"
                                            >
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.98 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.5 }}
                                                    className="bg-white shadow rounded-2xl p-5"
                                                >
                                                    <div className="flex border-b mb-4 overflow-x-auto">
                                                        <span className="whitespace-nowrap px-6 py-3 font-bold text-sm md:text-base border-b-2 border-blue-600 text-blue-600 shadow-sm rounded-t-xl">
                                                            Kurumsal Dokümanlar
                                                        </span>
                                                    </div>
                                                    <AnimatePresence mode="wait">
                                                        <motion.div
                                                            key="kurumsal_doc"
                                                            initial="hidden"
                                                            animate="visible"
                                                            exit={{ opacity: 0, y: -20 }}
                                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6"
                                                        >
                                                            {docs.length > 0 ? (
                                                                docs.map((doc) => (
                                                                    <motion.div
                                                                        key={doc.id}
                                                                        initial={{ opacity: 0, y: 20 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        transition={{ duration: 0.5 }}
                                                                        whileHover={{
                                                                            scale: 1.05,
                                                                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                                                                            backgroundColor: "rgba(219, 234, 254, 0.8)"
                                                                        }}
                                                                        className="bg-blue-50 p-4 rounded-xl transition-all duration-300
                                                                            flex flex-col items-center shadow-md border border-blue-100 h-full"
                                                                    >
                                                                        <motion.div
                                                                            whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                                                                            transition={{ duration: 0.5 }}
                                                                            className="flex items-center justify-center mb-3"
                                                                        >
                                                                            <FileText className="text-red-500 w-16 h-16" />
                                                                        </motion.div>

                                                                        <a
                                                                            href={doc.dosyaUrl}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="text-blue-700 font-semibold text-center text-sm md:text-base break-words hover:underline mt-2"
                                                                        >
                                                                            {doc.baslik}
                                                                        </a>
                                                                        <div className="text-gray-600 text-sm mt-2">
                                                                            {formatTarih(doc.tarih)}
                                                                        </div>
                                                                    </motion.div>
                                                                ))
                                                            ) : (
                                                                <motion.div
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    transition={{ delay: 0.2, duration: 0.5 }}
                                                                    className="col-span-full text-center p-8 bg-blue-50 rounded-xl shadow-sm"
                                                                >
                                                                    <p className="text-blue-700 font-semibold">Veri bulunamadı.</p>
                                                                </motion.div>
                                                            )}
                                                        </motion.div>
                                                    </AnimatePresence>
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default KurumsalDoc;
