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

const KurumsalDoc = () => {
    return (
        <div className="flex">
            {/* Sidebar would go here */}

            {/* Main content area with sidebar spacing */}
            <div className="w-full pl-72">
                <div className="max-w-7xl mx-auto p-5">
                    {/* Main content frame */}
                    <div className="relative bg-white border border-gray-300 rounded-2xl shadow-xl p-6 mt-[-30px] ">
                        {/* Content */}
                        <div className="w-full text-center">
                            <h1 className="text-3xl text-white font-bold bg-red-900 border-2 border-gray-300 inline-block px-4 py-3 mt-0 rounded-2xl">
                                KURUMSAL DOKÜMANLAR
                            </h1><br/><br/>

                            {/* 4-column grid layout */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {documents.map((doc, index) => (
                                    <div
                                        key={index}
                                        className="bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors duration-200 p-6 flex flex-col items-center text-center h-full"
                                    >
                                        <FileText className="text-red-500 mb-2" size={60} />
                                        <a
                                            href={doc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-700 font-semibold hover:underline mt-2"
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
    );
};

export default KurumsalDoc;