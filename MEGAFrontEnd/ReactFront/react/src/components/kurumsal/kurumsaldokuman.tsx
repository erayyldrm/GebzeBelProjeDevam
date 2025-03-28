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
        <div className="flex w-4/5 mx-auto">
            <div style={{ width: '20%', minWidth: '200px' }}>
                <Sidebar items={kurumsal} title={"KURUMSAL"} />
            </div>
            <div className="w-3/5 bg-white p-6 shadow-lg rounded-lg ml-6">
                <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">Kurumsal Dokümanlar</h1>
                <ul className="list-none p-0">
                    {documents.map((doc, index) => (
                        <li key={index} className="p-4 bg-blue-100 my-2 rounded-lg hover:bg-blue-200 transition flex items-center">
                            <FileText className="text-red-500 mr-2" size={20} />
                            <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold">
                                {doc.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DocumentList;