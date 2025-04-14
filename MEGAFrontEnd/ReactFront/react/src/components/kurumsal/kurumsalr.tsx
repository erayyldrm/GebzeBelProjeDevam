import React, { useState } from "react";
import { FileText } from "lucide-react";

// PDFs grouped by their departments
const documents = [
    {
        department: "Faaliyet Raporu",
        docs: [
            { name: "2023 Mali İdare Yılı Faaliyet Raporu", url: "/2023mali.pdf" },
            { name: "2022 Mali İdare Yılı Faaliyet Raporu", url: "/2022mali.pdf" },
            { name: "2021 Mali İdare Yılı Faaliyet Raporu", url: "/2021mali.pdf" },
            { name: "2020 Faaliyet Raporu", url: "/2020faaliyet.pdf" },
            { name: "2019 Faaliyet Raporu", url: "/2019faaliyet.pdf" },
            { name: "2018 Faaliyet Raporu", url: "/.pdf" },
            { name: "Veteriner İşleri Müdürlüğü", url: "/veteriner.pdf" },
            { name: "Veteriner İşleri Müdürlüğü", url: "/veteriner.pdf" },
            { name: "Veteriner İşleri Müdürlüğü", url: "/veteriner.pdf" },
            { name: "Veteriner İşleri Müdürlüğü", url: "/veteriner.pdf" },
            { name: "Veteriner İşleri Müdürlüğü", url: "/veteriner.pdf" },
            { name: "Veteriner İşleri Müdürlüğü", url: "/veteriner.pdf" },
            { name: "Veteriner İşleri Müdürlüğü", url: "/veteriner.pdf" },
            { name: "Veteriner İşleri Müdürlüğü", url: "/veteriner.pdf" },
            { name: "Veteriner İşleri Müdürlüğü", url: "/veteriner.pdf" },
            { name: "Veteriner İşleri Müdürlüğü", url: "/veteriner.pdf" },
            { name: "Veteriner İşleri Müdürlüğü", url: "/veteriner.pdf" },
            { name: "Veteriner İşleri Müdürlüğü", url: "/veteriner.pdf" },
        ],
    },
    {
        department: "İç Kontrol Eylem Planı",
        docs: [
            { name: "Temizlik İşleri Müdürlüğü", url: "docs/temizlik.pdf" },
            { name: "Park ve Bahçeler Müdürlüğü", url: "docs/park.pdf" },
            { name: "Mali Hizmetler Müdürlüğü", url: "docs/mali.pdf" },
        ],
    },
    {
        department: "Mali Durum ve Beklentiler Raporu",
        docs: [
            { name: "İmar Ve Şehircilik Müdürlüğü", url: "docs/imar.pdf" },
            { name: "Fen İşleri Müdürlüğü", url: "docs/fen.pdf" },
            { name: "Fen İşleri Müdürlüğü", url: "docs/fen.pdf" },
            { name: "Fen İşleri Müdürlüğü", url: "docs/fen.pdf" },
        ],
    },
    {
        department: "Performans Ve Plan",
        docs: [
            { name: "Emlak Ve İstimlak Müdürlüğü", url: "docs/emlak.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
        ],
    },
    {
        department: "Strateji Ve Plan",
        docs: [
            { name: "Emlak Ve İstimlak Müdürlüğü", url: "docs/emlak.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
            { name: "Sosyal Destek Hizmetleri", url: "docs/sosyal.pdf" },
        ],
    },
];

const Kraporlar = () => {
    return (
        <div id="pcoded" className="pcoded">
            <br /><br /><br /><br /><br /><br />
            <div className="pcoded-overlay-box"></div>
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container-left">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <div className="row">
                                            {/* Sidebar */}

                                            {/* Main Content */}
                                            <div className="col-lg-9 col-md-8">
                                                <div className="card mx-auto w-100">
                                                    <div className="card-block p-5">
                                                        <h1 className="text-left text-2xl font-bold text-gray-800 mb-4">
                                                            Kurumsal Raporlar
                                                        </h1>
                                                        {/* Loop through document categories */}
                                                        {documents.map((category, index) => (
                                                            <div key={index} className="mb-8">
                                                                <h2 className="text-xl font-bold text-gray-800 mt-4 mb-4 pb-2 border-b-2 border-blue-500">
                                                                    {category.department}
                                                                </h2>
                                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                                                    {category.docs.map((doc, idx) => (
                                                                        <div
                                                                            key={idx}
                                                                            className="bg-blue-50 p-5 rounded-lg hover:bg-blue-100 transition flex flex-col items-center shadow-md"
                                                                        >
                                                                            <FileText className="text-red-500 mb-3" size={65} />
                                                                            <a
                                                                                href={doc.url}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="text-blue-700 font-semibold text-left"
                                                                            >
                                                                                {doc.name}
                                                                            </a>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
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

export default Kraporlar;
