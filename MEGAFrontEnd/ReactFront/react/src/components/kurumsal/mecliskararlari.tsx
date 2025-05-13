import { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Document {
    name: string;
    url: string;
}

const meclisDocuments: Document[] = [
    { name: "3 Nisan 2025 Meclis Kararları", url: "https://www.gebze.bel.tr/dosya/20250410150120.pdf" },
    { name: "4 Mart 2025 Meclis Kararları", url: "https://www.gebze.bel.tr/dosya/20250311163949.rar" },
    { name: "4 Şubat 2025 Meclis Kararları", url: "https://www.gebze.bel.tr/dosya/20250210111051.pdf" },
    { name: "2 Ocak 2025 Meclis Kararları", url: "https://www.gebze.bel.tr/dosya/20250108162430.pdf" },
    { name: "24 Aralık 2024 Meclis Kararları", url: "https://www.gebze.bel.tr/dosya/20241227170844.pdf" },
    { name: "3 Aralık 2024 Meclis Kararları", url: "https://www.gebze.bel.tr/dosya/20241227170753.pdf" },
    { name: "5 Kasım 2024 Meclis Kararları", url: "https://www.gebze.bel.tr/dosya/20241111141116.pdf" },
    { name: "1 Ekim 2024 Meclis Kararları", url: "https://www.gebze.bel.tr/dosya/20241017094509.pdf" },
];

const Kararlar = () => {
    const [activeTab, setActiveTab] = useState<string>("meclis");
    const [isChanging, setIsChanging] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);

    // Container animation variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2
            }
        }
    };

    // Item animation variants
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const handleTabChange = (tab: string) => {
        if (tab !== activeTab && !isChanging) {
            setIsChanging(true);
            setLoaded(false);
            setTimeout(() => {
                setActiveTab(tab);
                setTimeout(() => {
                    setIsChanging(false);
                    setLoaded(true);
                }, 50);
            }, 300);
        }
    };

    useEffect(() => {
        // Trigger initial animation after component mounts
        setTimeout(() => {
            setLoaded(true);
        }, 100);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            id="pcoded"
            className="pcoded"
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
                                            {/* Ana İçerik Alanı */}
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
                                                    {/* Başlık */}

                                                    {/* Sekmeler */}
                                                    <div className="flex border-b mb-4 overflow-x-auto">
                                                        <motion.button
                                                            initial={{ y: -10, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ duration: 0.4, delay: 0.3 }}
                                                            whileHover={{
                                                                scale: 1.05,
                                                                backgroundColor: activeTab === "meclis" ? undefined : "rgba(239, 246, 255, 0.8)"
                                                            }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={() => handleTabChange("meclis")}
                                                            className={`whitespace-nowrap px-6 py-3 font-bold text-sm md:text-base
                                                                transition-all duration-300 ease-in-out rounded-t-xl
                                                                ${activeTab === "meclis"
                                                                ? "border-b-2 border-blue-600 text-blue-600 shadow-sm"
                                                                : "text-gray-500"
                                                            }`}
                                                        >
                                                            Meclis Kararları
                                                        </motion.button>
                                                        <motion.button
                                                            initial={{ y: -10, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ duration: 0.4, delay: 0.4 }}
                                                            whileHover={{
                                                                scale: 1.05,
                                                                backgroundColor: activeTab === "encumen" ? undefined : "rgba(239, 246, 255, 0.8)"
                                                            }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={() => handleTabChange("encumen")}
                                                            className={`whitespace-nowrap ml-4 px-6 py-3 font-bold text-sm md:text-base
                                                                transition-all duration-300 ease-in-out rounded-t-xl
                                                                ${activeTab === "encumen"
                                                                ? "border-b-2 border-blue-600 text-blue-600 shadow-sm"
                                                                : "text-gray-500"
                                                            }`}
                                                        >
                                                            Encümen Kararları
                                                        </motion.button>
                                                    </div>

                                                    {/* İçerik - Geliştirilmiş Animasyon */}
                                                    <AnimatePresence mode="wait">
                                                        {activeTab === "meclis" ? (
                                                            <motion.div
                                                                key="meclis"
                                                                variants={containerVariants}
                                                                initial="hidden"
                                                                animate={loaded ? "visible" : "hidden"}
                                                                exit={{ opacity: 0, y: -20 }}
                                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6"
                                                            >
                                                                {meclisDocuments.map((doc, index) => (
                                                                    <motion.div
                                                                        key={index}
                                                                        variants={itemVariants}
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
                                                                            href={doc.url}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="text-blue-700 font-semibold text-center text-sm md:text-base break-words hover:underline mt-2"
                                                                        >
                                                                            {doc.name}
                                                                        </a>
                                                                    </motion.div>
                                                                ))}
                                                            </motion.div>
                                                        ) : (
                                                            <motion.div
                                                                key="encumen"
                                                                initial={{ opacity: 0, y: 20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -20 }}
                                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                                whileHover={{ scale: 1.01 }}
                                                                className="bg-yellow-100 p-6 rounded-xl text-gray-700 text-lg mt-6
                                                                    border border-yellow-200 shadow-md"
                                                            >
                                                                <motion.strong
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    transition={{ delay: 0.2, duration: 0.5 }}
                                                                >
                                                                    Encümen Kararları 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kaldırılmıştır.
                                                                </motion.strong>
                                                            </motion.div>
                                                        )}
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

export default Kararlar;