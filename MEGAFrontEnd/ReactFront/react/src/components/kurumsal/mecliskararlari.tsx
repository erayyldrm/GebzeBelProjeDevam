import React, { useState } from "react";
import { FileText } from "lucide-react";

const meclisDocuments = [
    { name: "3 Nisan 2025 Meclis Kararları", url: "https://www.gebze.bel.tr/dosya/20250410150120.pdf" },
    { name: "4 Mart 2025 Meclis Kararları", url: "https://www.gebze.bel.tr/dosya/20250311163949.rar" },
    { name: "4 Şubat 2025 Meclis Kararları", url: "https://www.gebze.bel.tr/dosya/20250210111051.pdf" },
    { name: "2 Ocak 2025 Meclis Kararları", url: "https://www.gebze.bel.tr/dosya/20250108162430.pdf" },
    { name: "24 Aralık 2024 Meclis Kararları", url: "https://www.gebze.bel.tr/dosya/20241227170844.pdf" },
    { name: "3 Aralık 2024 Meclis Kararları", url: "https://www.gebze.bel.tr/dosya/20241227170753.pdf" },
    { name: "5 Kasım 2024 Meclis Kararları", url: "https://www.gebze.bel.tr/dosya/20241111141116.pdf" },
    { name: "1 Ekim 2024 Meclis Kararları", url: "https://www.gebze.bel.tr/dosya/20241017094509.pdf" },
    // diğerleri...
];

const Kararlar = () => {
    const [activeTab, setActiveTab] = useState("meclis");

    return (
        <div id="pcoded" className="pcoded">
            <div className="pcoded-overlay-box"></div>
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container-left">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <div className="flex flex-col lg:flex-row justify-center items-start mt-[-40px] p-2 md:p-4">
                                            {/* Ana İçerik Alanı */}
                                            <div className="w-full lg:w-9/12">
                                                <div className="bg-white shadow rounded-xl p-5">
                                                    {/* Sekmeler */}
                                                    <div className="flex border-b mb-4 overflow-x-auto">
                                                        <button
                                                            onClick={() => setActiveTab("meclis")}
                                                            className={`whitespace-nowrap px-4 py-2 font-bold text-sm md:text-base ${
                                                                activeTab === "meclis"
                                                                    ? "border-b-2 border-blue-600 text-blue-600"
                                                                    : "text-gray-500"
                                                            }`}
                                                        >
                                                            Meclis Kararları
                                                        </button>
                                                        <button
                                                            onClick={() => setActiveTab("encumen")}
                                                            className={`whitespace-nowrap ml-4 px-4 py-2 font-bold text-sm md:text-base ${
                                                                activeTab === "encumen"
                                                                    ? "border-b-2 border-blue-600 text-blue-600"
                                                                    : "text-gray-500"
                                                            }`}
                                                        >
                                                            Encümen Kararları
                                                        </button>
                                                    </div>

                                                    {/* İçerik */}
                                                    {activeTab === "meclis" ? (
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                                                            {meclisDocuments.map((doc, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition flex flex-col items-center shadow-md"
                                                                >
                                                                    <FileText className="text-red-500 mb-3 w-16 h-16" />
                                                                    <a
                                                                        href={doc.url}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="text-blue-700 font-semibold text-center text-sm md:text-base break-words"
                                                                    >
                                                                        {doc.name}
                                                                    </a>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div className="bg-yellow-100 p-5 rounded-lg text-gray-700 text-lg mt-4">
                                                            <strong>
                                                                Encümen Kararları 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kaldırılmıştır.
                                                            </strong>
                                                        </div>
                                                    )}
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

export default Kararlar;