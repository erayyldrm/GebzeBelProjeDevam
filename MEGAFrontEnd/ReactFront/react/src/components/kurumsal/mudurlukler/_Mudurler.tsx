import { kurumsal } from "../../_SayfaBilgileri/Sayfalar.tsx";
import Sidebar from "../../SideBar/sidebar.tsx";
import React, { useEffect, useState } from "react";

interface Department {
    id: number;
    name: string;
    managerName: string;
    email: string;
    imageUrl: string;
}

const Layout: React.FC = () => {
    const [departments, setDepartments] = useState<Department[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/mudurluk")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then((text) => {
                try {
                    const data = JSON.parse(text);
                    setDepartments(data);
                } catch (error) {
                    console.error("Error parsing JSON:", error, "Response text:", text);
                }
            })
            .catch((error) => console.error("Error fetching departments:", error));
    }, []);

    return (
        <div className="page-wrapper">
            {/* Sayfa Başlığı */}
            <section className="page-title m-0 bg-[#3b71ca]">
                <div className="auto-container">
                    <div className="content-box">
                        <div className="content-wrapper">
                            <div className="title">
                                <h1>Müdürler</h1>
                            </div>
                            <ul className="bread-crumb">
                                <li>Ana Sayfa</li>
                                <li>Kurumsal</li>
                                <li>Müdürler</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="col-span-1">
                <aside className="sidebar sidebar-style-two">
                    <Sidebar items={kurumsal} title={"Kurumsal"} />
                </aside>
            </div>
            {/* Sayfa İçeriği */}
            <section className="sidebar-page-container">
                <div className="auto-container">
                    <div className="grid grid-cols-4 gap-6">
                        {/* Sidebar - Olduğu Yerde Kalacak */}


                        {/* Resimler 3 satır olarak yan tarafa gelecek */}
                        <div className="col-span-3">
                            <div className="grid grid-cols-3 gap-6">
                                {departments.map((dept, index) => (
                                    <div
                                        key={dept.id || index}
                                        className="bg-white shadow-md rounded-lg p-4"
                                    >
                                        <img
                                            src={dept.imageUrl}
                                            alt={dept.managerName}
                                            className="w-full h-80 object-cover rounded-md mb-3"
                                        />
                                        <h2 className="text-lg font-bold">{dept.name}</h2>
                                        <p className="text-gray-600">Yönetici: {dept.managerName}</p>
                                        <p className="text-blue-500">{dept.email}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Layout;