import React, { useState } from "react";
import { FileText } from "lucide-react";

const documents = [
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
]
const Kararlar = () => {
    const [activeTab, setActiveTab] = useState<string>(documents[0].department);

    return (
        <div
            className="p-6 bg-gray-50 shadow-lg min-h-screen"
            style={{
                margin: '0 auto', // Ortalanmış sayfa
                maxWidth: 'calc(100% - 80px)', // Sağ taraftan genişlik ayarı
                padding: '0 20px', // İçerik boşlukları
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Sayfa arkasına gölge
            }}
        >
            <h1 className="text-3xl font-bold text-center mb-12 text-blue-700">
                Kurumsal Raporlar
            </h1>

            {/* Sekmeler - Inline style ile renk kontrolü */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {documents.map((category) => (
                    <button
                        key={category.department}
                        onClick={() => setActiveTab(category.department)}
                        style={
                            activeTab === category.department
                                ? { backgroundColor: "#022842", color: "#FFFFFF" } // Seçili başlık için renk
                                : { backgroundColor: "#FFFFFF", color: "#000000" } // Seçili olmayan başlık için renk
                        }
                        className="px-6 py-3 text-base md:text-lg rounded-md font-semibold border-2 transition-all duration-200"
                    >
                        {category.department}
                    </button>
                ))}
            </div>

            {/* İçerik */}
            {activeTab && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                    {documents
                        .find((cat) => cat.department === activeTab)
                        ?.docs.map((doc, i) => (
                            <div
                                key={i}
                                className="bg-blue-50 p-6 rounded-md hover:bg-blue-100 transition shadow-md flex flex-col items-center mb-6"
                            >
                                <FileText className="text-orange-500 mb-4" size={75} />
                                <a
                                    href={doc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 text-base font-semibold text-center mb-4 hover:text-blue-900 hover:underline"
                                >
                                    {doc.name}
                                </a>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Kararlar;