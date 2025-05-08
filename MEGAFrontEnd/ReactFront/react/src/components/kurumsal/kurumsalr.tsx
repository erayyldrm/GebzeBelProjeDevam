import { useState } from "react";
import { FileText } from "lucide-react";

const documents = [
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
    const [activeTab, setActiveTab] = useState(documents[0].department);

    return (
        <div className="bg-gray-50 min-h-screen py-6">
            <div className="max-w-7xl mx-auto p-5 mt-[-60px]"> {/* mt-[-60px] olarak güncellendi */}
                <div className="relative bg-white border border-gray-300 rounded-2xl shadow-xl p-6">
                    <div className="w-full text-center">
                        <h1 className="text-2xl md:text-3xl text-white font-bold bg-red-900 border-2 border-gray-300 inline-block px-3 py-2 md:px-4 md:py-3 mt-0 rounded-xl md:rounded-2xl">
                            KURUMSAL RAPORLAR
                        </h1>

                        {/* Tab Navigation Buttons */}
                        <div className="flex flex-wrap justify-center mt-4">
                            {documents.map((category) => (
                                <button
                                    key={category.department}
                                    onClick={() => setActiveTab(category.department)}
                                    className={`m-1 px-3 py-2 text-sm md:text-base font-semibold border-2 rounded-lg md:rounded-xl transition-all duration-200 ${
                                        activeTab === category.department
                                            ? "bg-blue-900 text-white border-blue-900"
                                            : "bg-white text-black border-gray-300 hover:bg-blue-50"
                                    }`}
                                    style={{ minWidth: "150px" }}
                                >
                                    {category.department}
                                </button>
                            ))}
                        </div><br/>

                        {/* Documents Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                            {documents
                                .find((cat) => cat.department === activeTab)
                                ?.docs.map((doc, index) => (
                                    <div
                                        key={index}
                                        className="bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors duration-200 p-6 flex flex-col items-center text-center h-full"
                                    >
                                        <FileText className="text-orange-500 mb-2" size={60} />
                                        <a
                                            href={doc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-700 font-semibold hover:underline mt-2 text-sm md:text-base"
                                        >
                                            {doc.name}
                                        </a>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KurumsalRaporlar;