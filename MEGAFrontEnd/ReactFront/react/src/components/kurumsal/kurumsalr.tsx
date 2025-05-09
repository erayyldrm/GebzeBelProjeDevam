import { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

interface Document {
    name: string;
    url: string;
}

interface DocumentCategory {
    department: string;
    docs: Document[];
}

const documents: DocumentCategory[] = [
    {
        department: "Strateji Plan",
        docs: [
            { name: "Gebze Belediyesi 2025 - 2019 Stratejik Plan", url: "/2025plan.pdf" },
            { name: "Gebze Belediyesi 2020 Stratejik Plan", url: "/2020plan.pdf" },
            { name: "Gebze Belediyesi 2015 - 2019 Stratejik Plan ", url: "/2015plan.pdf" },
            { name: "Gebze Belediyesi 2015 - 2019 Stratejik Plan (revize) ", url: "/revize.plan.pdf" },
            { name: "Gebze Belediyesi 2010 - 2014 Stratejik Plan ", url: "/2010plan.pdf" },
            { name: "Gebze Belediyesi 2006 - 2010 Stratejik Plan ", url: "/2006plan.pdf" },
        ],
    },
    {
        department: "Faaliyet Raporu",
        docs: [
            { name: "2023 Maali Yılı İdare Faaliyet Rapru", url: "/2023mali.pdf" },
            { name: "2022 Maali Yılı İdare Faaliyet Raporu", url: "/2022mali.pdf" },
            { name: "2021 Maali Yılı İdare Faaliyet Raporu", url: "/2021mali.pdf" },
            { name: "2020 Faaliyet Raporu", url: "/2020faliyet.pdf" },
            { name: "2019 Faaliyet Raporu", url: "/2019faliyet.pdf" },
            { name: "2018 Faaliyet Raporu", url: "/2018faliyet.pdf" },
            { name: "2017 Faaliyet Raporu", url: "/2017faliyet.pdf" },
            { name: "2016 Faaliyet Raporu", url: "/2016faliyet.pdf" },
            { name: "2015 Faaliyet Raporu", url: "/2015faliyet.pdf" },
            { name: "2014 Faaliyet Raporu", url: "/2014faliyet.pdf" },
            { name: "2013 Faaliyet Raporu", url: "/2013faliyet.pdf" },
            { name: "2012 Faaliyet Raporu", url: "/2012faliyet.pdf" },
            { name: "2011 Faaliyet Raporu", url: "/2011faliyet.pdf" },
            { name: "2010 Faaliyet Raporu", url: "/2010faliyet.pdf" },
            { name: "2009 Faaliyet Raporu", url: "/2009faliyet.pdf" },
            { name: "2008 Faaliyet Raporu", url: "/2008faliyet.pdf" },
            { name: "2007 Faaliyet Raporu", url: "/2007faliyet.pdf" },
            { name: "2006 Faaliyet Raporu", url: "/2007faliyet.pdf" },
        ],
    },
    {
        department: "Performans Programı",
        docs: [
            { name: "2025 Maali Yılı Performans Programı ", url: "/2025performans.pdf" },
            { name: "2024 Maali Yılı Performans Kitabı ", url: "/202performans.pdf" },
            { name: "2023 Maali Yılı Performans Programı", url: "/2023performans.pdf" },
            { name: "2021 Performans Programı", url: "/2021performans.pdf" },
            { name: "2020 Performans Programı", url: "/2020performans.pdf" },
            { name: "2019 Performans Programı", url: "/2019performans.pdf" },
            { name: "2018 Performans Programı", url: "/2018performans.pdf" },
            { name: "2017 Performans Programı", url: "/2017performans.pdf" },
            { name: "2016 Performans Programı", url: "/2016performans.pdf" },
            { name: "2015 Performans Programı", url: "/2015performans.pdf" },
            { name: "2014 Performans Programı", url: "/2014performans.pdf" },
            { name: "2013 Performans Programı", url: "/2013performans.pdf" },
            { name: "2012 Performans Programı", url: "/2012performans.pdf" },
            { name: "2011 Performans Programı", url: "/2011performans.pdf" },
            { name: "2010 Performans Programı", url: "/2010performans.pdf" },
            { name: "2009 Performans Programı", url: "/2009performans.pdf" },
            { name: "2008 Performans Programı", url: "/2008performans.pdf" },
        ],
    },
    {
        department: "İç Kontrol Eylem Planı",
        docs: [
            { name: "2025 - 2029 İç Kontrol Eylem Planı", url: "/2025eylem.pdf" },
            { name: "2020 - 2024 İç Kontrol Eylem Planı", url: "/2020eylem.pdf" },
            { name: "2015 - 2019 İç Kontrol Eylem Planı", url: "/2015eylem.pdf" },
        ],
    },
    {
        department: "Mali Durum ve Beklentiler Raporu",
        docs: [
            { name: "2023 Maali Durum Ve Beklentiler Raporu", url: "/2023beklenti.pdf" },
            { name: "2022 Maali Durum Ve Beklentiler Raporu", url: "/2022beklenti.pdf" },
            { name: "2021 Maali Durum Ve Beklentiler Raporu ", url: "/2021beklenti.pdf" },
            { name: "2020 Maali Durum Ve Beklentiler Raporu ", url: "/2020beklenti.pdf" },
        ],
    },
];

const KurumsalRaporlar = () => {
    const [activeTab, setActiveTab] = useState<string>(documents[0].department);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [displayedDocs, setDisplayedDocs] = useState<Document[]>(documents[0].docs);

    // Container animation variants for staggered animations
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

    // Tab button animation variants
    const tabVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: i => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: i * 0.1
            }
        })
    };

    const handleTabChange = (newTab: string) => {
        if (newTab !== activeTab) {
            setLoaded(false); // Trigger exit animation

            setTimeout(() => {
                setActiveTab(newTab);
                const newDocs = documents.find((cat) => cat.department === newTab)?.docs || [];
                setDisplayedDocs(newDocs);

                setTimeout(() => {
                    setLoaded(true); // Trigger entrance animation
                }, 50);
            }, 300);
        }
    };

    useEffect(() => {
        // Initialize displayed docs
        const initialDocs = documents.find((cat) => cat.department === activeTab)?.docs || [];
        setDisplayedDocs(initialDocs);

        // Trigger animation after component mounts
        setTimeout(() => {
            setLoaded(true);
        }, 100);
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen py-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-7xl mx-auto p-5 mt-[-60px]"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative bg-white border border-gray-300 rounded-3xl shadow-xl p-6"
                >
                    <div className="w-full text-center">
                        <motion.h1
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl md:text-3xl text-white font-bold bg-red-900 border-2 border-gray-300 inline-block px-3 py-2 md:px-4 md:py-3 mt-0 rounded-full md:rounded-full"
                        >
                            KURUMSAL RAPORLAR
                        </motion.h1>

                        {/* Tab Navigation Buttons with Animation */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap justify-center mt-4"
                        >
                            {documents.map((category, index) => (
                                <motion.button
                                    key={category.department}
                                    custom={index}
                                    variants={tabVariants}
                                    onClick={() => handleTabChange(category.department)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`m-1 px-3 py-2 text-sm md:text-base font-semibold border-2 rounded-full transition-all duration-300 ease-in-out ${
                                        activeTab === category.department
                                            ? "bg-blue-900 text-white border-blue-900 shadow-md"
                                            : "bg-white text-black border-gray-300 hover:bg-blue-50"
                                    }`}
                                    style={{ minWidth: "150px" }}
                                >
                                    {category.department}
                                </motion.button>
                            ))}
                        </motion.div><br/>

                        {/* Documents Grid with Animation */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={loaded ? "visible" : "hidden"}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
                        >
                            {displayedDocs?.map((doc, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                                    }}
                                    className="bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-all duration-300 p-6 flex flex-col items-center text-center h-full"
                                >
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex-grow flex items-center justify-center"
                                    >
                                        <FileText className="text-orange-500 mb-2" size={60} />
                                    </motion.div>

                                    <a
                                        href={doc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-700 font-semibold hover:underline mt-2 text-sm md:text-base"
                                    >
                                        {doc.name}
                                    </a>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default KurumsalRaporlar;