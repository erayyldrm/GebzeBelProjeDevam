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
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <div className="flex flex-col"> {/* Ana sarmalayıcı, gerekirse başka öğelerle dikey hizalama için */}
                                            {/* --- TÜM İÇERİĞİ KAPSAYAN TEK ANA KART --- */}
                                            <div className="flex-1 bg-white shadow-xl rounded-lg p-4 md:p-6">
                                                {/* Başlık Alanı (Artık kendi başına ayrı bir kart değil) */}
                                                <div className="text-center mb-6 md:mb-8"> {/* Kart içi boşluk için margin ayarlandı */}
                                                    <h1 className="text-xl md:text-3xl font-bold text-white bg-red-900 border-2 border-gray-300 inline-block px-4 py-3 rounded-2xl">
                                                        KURUMSAL KİMLİK
                                                    </h1>
                                                </div>

                                                {/* Ana İçerik - Doküman Kartları (Artık kendi başına ayrı bir kart değil, ana kartın içinde) */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                                    {documents.map((doc, index) => (
                                                        <div
                                                            key={index}
                                                            className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition flex flex-col items-center justify-between text-center shadow-md h-full"
                                                        >
                                                            <FileText className="text-red-500 mb-3" size={64} />
                                                            <a
                                                                href={doc.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-700 font-semibold text-sm break-words"
                                                            >
                                                                {doc.name}
                                                            </a>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* --- TEK ANA KARTIN SONU --- */}
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