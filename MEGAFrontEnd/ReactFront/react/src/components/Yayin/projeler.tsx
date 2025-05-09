// @ts-ignore
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const documents = [
    { name: "Söz verdiğimiz gibi", url: "/proje.pdf" },
    { name: "Yatırım Planı 2025", url: "/yatirim.pdf" },
    { name: "Altyapı Gelişim Raporu", url: "/altyapi.pdf" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const Projeler = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full max-w-4xl bg-white rounded-2xl shadow-xl md:shadow-2xl lg:shadow-3xl xl:shadow-4xl p-6 md:p-10 transform transition-transform duration-300 translate-y-[-60px] flex flex-col items-center"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-center text-2xl md:text-3xl font-bold text-white bg-red-900 border-2 border-white inline-block px-6 py-3 rounded-2xl mb-8"
                >
                    GEBZE BELEDİYESİ PROJELERİ
                </motion.h1>

                <div className="w-full flex flex-col gap-4">
                    {documents.map((doc, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                            }}
                            className="flex items-center justify-between bg-blue-50 hover:bg-blue-100 p-4 rounded-xl transition shadow-md"
                        >
                            <div className="flex items-center gap-4">
                                <FileText className="text-red-500" size={32} />
                                <span className="text-blue-700 font-medium text-sm md:text-base">{doc.name}</span>
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
                </div>
            </motion.div>
        </div>
    );
};

export default Projeler;