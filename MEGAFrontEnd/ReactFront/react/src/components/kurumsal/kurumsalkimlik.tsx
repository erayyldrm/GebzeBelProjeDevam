// @ts-ignore
import { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const documents = [
    { name: "Kurumsal Logo Vektörel", url: "https://www.gebze.bel.tr/dosya/20191119061531.pdf" },
    { name: "Gebze Belediyesi Dikey Logo", url: "https://www.gebze.bel.tr/dosya/20191119061557.png" },
    { name: "Gebze Belediyesi Yatay Logo", url: "https://www.gebze.bel.tr/dosya/20191119061614.png" },
    { name: "Başkan Logo", url: "https://www.gebze.bel.tr/dosya/20191119061653.png" },
];

const Kimlik = () => {
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div id="pcoded" className="pcoded">
            <div className="pcoded-overlay-box"></div>
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper" style={{ marginTop: '-20px' }}>
                                        <div className="flex flex-col">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, ease: "easeOut" }}
                                                className="flex-1 bg-white shadow-xl rounded-lg p-4 md:p-6"
                                            >
                                                <div className="text-center mb-6 md:mb-8">
                                                    <motion.h1
                                                        initial={{ scale: 0.9, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        transition={{ duration: 0.5, delay: 0.2 }}
                                                        className="text-xl md:text-3xl font-bold text-white bg-red-900 border-2 border-gray-100 inline-block px-4 py-3 rounded-2xl"
                                                    >
                                                        KURUMSAL KİMLİK
                                                    </motion.h1>
                                                </div>

                                                {/* Liste Görünümünde Doküman Kartları */}
                                                <motion.div
                                                    variants={containerVariants}
                                                    initial="hidden"
                                                    animate={loaded ? "visible" : "hidden"}
                                                    className="flex flex-col gap-4"
                                                >
                                                    {documents.map((doc, index) => (
                                                        <motion.div
                                                            key={index}
                                                            variants={itemVariants}
                                                            whileHover={{
                                                                scale: 1.02,
                                                                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                                                            }}
                                                            className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition flex items-center justify-between shadow-md"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <FileText className="text-red-500" size={32} />
                                                                <span className="text-sm font-medium text-blue-700">{doc.name}</span>
                                                            </div>
                                                            <a
                                                                href={doc.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-600 hover:underline text-sm"
                                                            >
                                                                Görüntüle
                                                            </a>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kimlik;
