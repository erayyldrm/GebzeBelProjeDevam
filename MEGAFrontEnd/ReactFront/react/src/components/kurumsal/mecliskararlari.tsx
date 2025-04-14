import React, { useState } from "react";
import { FileText } from "lucide-react";
import Sidebar from "../SideBar/sidebar.tsx";
import { kurumsal } from "../_SayfaBilgileri/Sayfalar.tsx";

const meclisDocuments = [
    { name: "3 Nisan 2025 Meclis Kararları", url: "/3nisan.pdf" },
    { name: "4 Mart 2025 Meclis Kararları", url: "/4mart.pdf" },
    // diğerleri...
];

const Kararlar = () => {
    const [activeTab, setActiveTab] = useState("meclis"); // meclis | encumen

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
                                            {/* Main Content */}
                                            <div className="col-lg-9 col-md-8">
                                                <div className="card mx-auto w-100">
                                                    <div className="card-block p-5">
                                                        {/* Sekmeler */}
                                                        <div className="flex border-b mb-4">
                                                            <button
                                                                onClick={() => setActiveTab("meclis")}
                                                                className={`px-4 py-2 font-bold ${
                                                                    activeTab === "meclis"
                                                                        ? "border-b-2 border-blue-600 text-blue-600"
                                                                        : "text-gray-500"
                                                                }`}
                                                            >
                                                                Meclis Kararları
                                                            </button>
                                                            <button
                                                                onClick={() => setActiveTab("encumen")}
                                                                className={`ml-4 px-4 py-2 font-bold ${
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
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                                                {meclisDocuments.map((doc, index) => (
                                                                    <div
                                                                        key={index}
                                                                        className="bg-blue-50 p-5 rounded-lg hover:bg-blue-100 transition flex flex-col items-center shadow-md"
                                                                    >
                                                                        <FileText className="text-red-500 mb-3" size={65} />
                                                                        <a
                                                                            href={doc.url}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="text-blue-700 font-semibold text-center"
                                                                        >
                                                                            {doc.name}
                                                                        </a>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <div className="bg-yellow-100 p-5 rounded-lg text-gray-700 text-lg">
                                                                <strong></strong>
                                                                6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kaldırılmıştır.
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
        </div>
    );
};

export default Kararlar;
