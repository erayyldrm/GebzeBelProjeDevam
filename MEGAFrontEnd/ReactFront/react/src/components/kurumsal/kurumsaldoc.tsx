import { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

interface Document {
    name: string;
    url: string;
}

const documents: Document[] = [
    { name: "Ruhsat ve Denetim Müdürlüğü", url: "docs/ruhsat.pdf" },
    { name: "Zabıta Müdürlüğü", url: "docs/zabita.pdf" },
    { name: "Veteriner İşleri Müdürlüğü", url: "docs/veteriner.pdf" },
    { name: "Temizlik İşleri Müdürlüğü", url: "docs/temizlik.pdf" },
    { name: "Plan ve Proje Müdürlüğü", url: "docs/plan.pdf" },
    { name: "Park ve Bahçeler Müdürlüğü", url: "docs/park.pdf" },
    { name: "Mali Hizmetler Müdürlüğü", url: "docs/mali.pdf" }
];

const KurumsalDoc = () => {
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setLoaded(true);
    }, []);

    // Container animation variants
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

    // Item animation variants
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-10">
            {/* Sidebar would go here */}

            {/* Main content area with sidebar spacing */}
            <div className="w-full pl-72">
                <div className="max-w-7xl mx-auto p-5">
                    {/* Main content frame with softer corners */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative bg-white border border-gray-300 rounded-3xl shadow-xl p-6 mt-[-30px]"
                    >
                        {/* Content */}
                        <div className="w-full text-center">
                            <motion.h1
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-3xl text-white font-bold bg-red-900 border-2 border-gray-300 inline-block px-4 py-2 mt-0 rounded-full"
                            >
                                KURUMSAL DOKÜMANLAR
                            </motion.h1>
                            <br/><br/>

                            {/* 4-column grid layout with animations */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate={loaded ? "visible" : "hidden"}
                                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                            >
                                {documents.map((doc, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                                        }}
                                        className="bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100
                                                transition-all duration-300 p-4 flex flex-col items-center
                                                text-center h-40 w-full shadow-md"
                                    >
                                        <motion.div
                                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className="flex-grow flex items-center justify-center"
                                        >
                                            <FileText className="text-red-500" size={55} />
                                        </motion.div>

                                        <a
                                            href={doc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-700 font-semibold hover:underline mt-2 text-sm transition-colors duration-300"
                                        >
                                            {doc.name}
                                        </a>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default KurumsalDoc;