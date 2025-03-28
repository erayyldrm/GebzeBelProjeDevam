// @ts-ignore
import Sidebar from "../SideBar/sidebar.tsx";
import { kurumsal } from "../_SayfaBilgileri/Sayfalar.tsx";
import { FileText } from "lucide-react";

const documents = [
    { name: "Ruhsat ve Denetim Müdürlüğü", url: "docs/ruhsat.pdf" },
    { name: "Zabıta Müdürlüğü", url: "docs/zabita.pdf" },
    { name: "Veteriner İşleri Müdürlüğü", url: "docs/veteriner.pdf" },
    { name: "Temizlik İşleri Müdürlüğü", url: "docs/temizlik.pdf" },
    { name: "Plan ve Proje Müdürlüğü", url: "docs/plan.pdf" },
    { name: "Park ve Bahçeler Müdürlüğü", url: "docs/park.pdf" },
    { name: "Mali Hizmetler Müdürlüğü", url: "docs/mali.pdf" }
];

const DocumentList = () => {
    return (
        <div id="pcoded" className="pcoded">
            <br /><br /><br /><br /><br /><br />
            <div className="pcoded-overlay-box"></div>
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <div className="row">
                                            {/* Main container */}
                                            <div className="container-fluid px-0">
                                                <div className="row gx-lg-4">
                                                    {/* Sidebar - becomes full width on mobile */}
                                                    <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
                                                        <div className="sidebar-wrapper">
                                                            <Sidebar items={kurumsal} title={"KURUMSAL"} />
                                                        </div>
                                                    </div>

                                                    {/* Main Content */}
                                                    <div className="col-lg-9 col-md-8">
                                                        <div className="card">
                                                            <div className="card-block p-3 p-md-4">
                                                                <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
                                                                    Kurumsal Dokümanlar
                                                                </h1>
                                                                <ul className="list-none p-0">
                                                                    {documents.map((doc, index) => (
                                                                        <li
                                                                            key={index}
                                                                            className="p-4 bg-blue-50 my-2 rounded-lg hover:bg-blue-100 transition flex items-center"
                                                                        >
                                                                            <FileText className="text-red-500 mr-2" size={20} />
                                                                            <a
                                                                                href={doc.url}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="text-blue-700 font-semibold"
                                                                            >
                                                                                {doc.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
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
        </div>
    );
};

export default DocumentList;