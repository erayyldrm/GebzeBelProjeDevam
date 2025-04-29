// @ts-ignore
import Sidebar from "../SideBar/sidebar.tsx";
import { FileText } from "lucide-react";

const documents = [
    { name: "Kurumsal Logo Vektörel", url: "https://www.gebze.bel.tr/dosya/20191119061531.pdf" },
    { name: "Gebze Belediyesi Dikey Logo", url: "https://www.gebze.bel.tr/dosya/20191119061557.png" },
    { name: "Gebze Belediyesi Yatay Logo", url: "https://www.gebze.bel.tr/dosya/20191119061614.png" },
    { name: "Başkan Logo", url: "https://www.gebze.bel.tr/dosya/20191119061653.png" },
];

const Kimlik = () => {
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
                                        <div className="row flex justify-center items-start mt-[-20px]">
                                            {/* Main Content */}
                                            <div className="col-lg-9 col-md-8">
                                                <div className="card mx-auto w-full max-w-6xl">
                                                    <div className="card-block p-5 text-center">
                                                        <h1 className="text-3xl text-white font-bold bg-red-900 border-2 border-gray-300 inline-block px-4 py-3 mt-1 rounded-2xl">
                                                            KURUMSAL KİMLİK
                                                        </h1><br/><br/>
                                                        {/* Grid Layout */}
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                                            {documents.map((doc, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition flex flex-col items-center shadow-md"
                                                                >
                                                                    <FileText className="text-red-500 mb-3" size={100} />
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

export default Kimlik;
