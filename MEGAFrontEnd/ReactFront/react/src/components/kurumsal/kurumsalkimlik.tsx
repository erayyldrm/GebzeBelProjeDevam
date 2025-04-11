// @ts-ignore
import Sidebar from "../SideBar/sidebar.tsx";
import { kurumsal } from "../_SayfaBilgileri/Sayfalar.tsx";
import { FileText } from "lucide-react";

const documents = [
    { name: "Kurumsal Logo Vektörel", url: "docs/vektorel.pdf" },
    { name: "Gebze Belediyesi Dikey Logo", url: "docs/dikey.pdf" },
    { name: "Gebze Belediyesi Yatay Logo", url: "docs/yatay.pdf" },
    { name: "Başkan Logo", url: "docs/naskanlogo.pdf" },
];


const DocumentList = () => {
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
                                            <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
                                                <div className="sidebar-wrapper">
                                                    <Sidebar items={kurumsal} title={"KURUMSAL"} />
                                                </div>
                                            </div>

                                            {/* Main Content */}
                                            <div className="col-lg-9 col-md-8">
                                                <div className="card mx-auto w-100">
                                                    <div className="card-block p-5">
                                                        <h1 className="text-left text-2xl font-bold text-gray-800 mb-4">
                                                            Kurumsal Kimlik
                                                        </h1>
                                                        {/* Grid Layout */}
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                                            {documents.map((doc, index) => (
                                                                <div
                                                                    key={index}
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

export default DocumentList;
