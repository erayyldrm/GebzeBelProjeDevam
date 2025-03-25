import {kurumsal} from '../../_SayfaBilgileri/Sayfalar.tsx';
import Sidebar from '../../SideBar/sidebar.tsx'
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
                return response.text(); // Read as text first
            })
            .then((text) => {
                try {
                    const data = JSON.parse(text); // Parse manually
                    setDepartments(data);
                } catch (error) {
                    console.error("Error parsing JSON:", error, "Response text:", text);
                }
            })
            .catch((error) => console.error("Error fetching departments:", error));
    }, []);
    console.log(departments);



    return (
        <div className="page-wrapper">



            {/* Page Title */}
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

            {/* Sidebar Page Container */}
            <section className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-8 order-lg-2">
                            <div className="depertment-details pl-5">


                                {/* Display Departments as Cards */}
                                <div className="auto-container my-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {departments.map((dept,index) => (
                                            <div key={dept.id || index} className="bg-white shadow-md rounded-lg p-4">
                                                <img src={dept.imageUrl} alt={dept.managerName} className="w-full h-40 object-cover rounded-md mb-3"/>
                                                <h2 className="text-lg font-bold">{dept.name}</h2>
                                                <p className="text-gray-600">Yönetici: {dept.managerName}</p>
                                                <p className="text-blue-500">{dept.email}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="row mb-30">

                                    <div className="col-md-6">
                                        <div className="group-title"><h4>Bilgilendirme</h4></div>
                                        <ul className="list">
                                            <li>Listealt1</li>
                                            <li>Listleak2</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 feature-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="icon-train"></span></div>
                                            <div className="content">
                                                <div className="category"><a href="#">Link4</a></div>
                                                <h3>Link yazı</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 feature-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="icon-pets-2"></span></div>
                                            <div className="content">
                                                <div className="category"><a href="#">Link3</a></div>
                                                <h3>Link yazı</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 feature-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="icon-laptop"></span></div>
                                            <div className="content">
                                                <div className="category"><a href="#">LİNK2</a></div>
                                                <h3>Link yazı</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 feature-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="icon-report"></span></div>
                                            <div className="content">
                                                <div className="category"><a href="#">Link1</a></div>
                                                <h3>link yazı</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text">

                                    ALT YAZI  ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI ALT YAZI
                                </div>
                                <ul className="page-pagination mt-5">
                                    <li className="prev-page"><a href="#"><i className="icon-arrow"></i>Prev</a></li>
                                    <li className="next-page"><a href="#">Next<i className="icon-arrow"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <aside className="sidebar sidebar-style-two">
                                <Sidebar items={kurumsal} title={"Gebze"} />

                            </aside>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Layout;

