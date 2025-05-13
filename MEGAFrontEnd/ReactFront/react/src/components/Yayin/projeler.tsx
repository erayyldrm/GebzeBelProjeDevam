// @ts-ignore
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const documents = [
    { name: "SÖZ VERDİĞİMİZ GİBİ", url: "/proje.pdf" },
    // Daha çok proje eklenebilir
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const Projeler = () => {
    return (

        <div className="flex justify-center pt-6 pb-8 sm:pt-8 sm:pb-10 px-4">
            <div className="flex flex-col space-y-6 w-full max-w-[860px]">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="w-full bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col"
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center mb-4"
                    >
                        <div className="text-center text-xl md:text-2xl lg:text-3xl font-extrabold text-blue-900 bg-white border-2 border-blue-900 px-4 md:px-6 py-2 md:py-3 rounded-xl shadow-md">
                            GEBZE BELEDİYESİ PROJELERİ
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-3 md:gap-4">
                        {documents.map((doc, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                                }}
                                className="flex items-center justify-between bg-blue-50 hover:bg-blue-100 p-3 md:p-4 rounded-lg transition shadow-md"
                            >
                                <div className="flex items-center gap-3 md:gap-4">
                                    <FileText className="text-orange-500" size={24} />
                                    <span className="text-blue-700 font-medium text-xs sm:text-sm md:text-base">
                                        {doc.name}
                                    </span>
                                </div>
                                <a
                                    href={doc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline text-xs sm:text-sm whitespace-nowrap"
                                >
                                    Görüntüle
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="w-full aspect-[4/3] sm:aspect-[16/9] max-h-[610px] bg-white/90 border border-gray-300 rounded-2xl shadow-lg p-4 md:p-6 flex flex-col backdrop-blur-sm"
                >
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-70 z-10"></div>
                        <img
                            src="/images/yayınlar/yayınlar.png"
                            alt="Gebze Belediyesi Projeleri"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Bilgi Kartı */}

            </div>
        </div>
    );
};
export default Projeler;
