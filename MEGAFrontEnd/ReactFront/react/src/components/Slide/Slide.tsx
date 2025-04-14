import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css"; // Ensure you include Swiper styles

const DynamicSlider: React.FC = () => {
    const images = [
        "https://www.w3schools.com/w3images/fjords.jpg",
        "https://www.w3schools.com/w3images/mountains.jpg",
        "https://www.w3schools.com/w3images/lights.jpg",
        "https://www.w3schools.com/w3images/nature.jpg",
    ];

    useEffect(() => {
        new Swiper(".swiper-container", {
            spaceBetween: 10,
            loop: true, // Infinite loop
            autoplay: {
                delay: 1000, // Auto slide every 1 second
                disableOnInteraction: false, // Ensure autoplay continues even after user interaction
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }, []);

    return (
        <>
            {/* Page Title Section */}
            <section className="page-title relative h-[600px] overflow-hidden" style={{ marginTop: '0' }}>
                {/* Arka Plan Videosu */}
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src="/gebze.mp4" type="video/mp4" />
                    Tarayıcınız video etiketini desteklemiyor.
                </video>

                {/* İçerik */}
                <div className="auto-container relative z-10 h-full flex items-center justify-center">
                    <div className="content-box">
                        <div className="content-wrapper text-center">
                            <div className="title">
                                <h1 className="text-white text-6xl font-bold opacity-50">Gebze Belediyesi</h1>
                            </div>
                            <ul className="bread-crumb text-white mt-4">
                                <li><a href="http://localhost:5173/">Home</a></li>
                                <li>our Departments</li>
                                <li>Business & Taxation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <div className="flex-grow ml-5" style={{ marginTop: '0' }}>
                <div className="container mx-auto px-4 py-5">
                    <div className="w-full max-w-[800px] mx-auto p-5 bg-white rounded-lg shadow-lg mb-10">
                        {/* Slider Section */}
                        <div className="swiper-container overflow-hidden relative">
                            <div className="swiper-wrapper">
                                {images.map((image, index) => (
                                    <div className="swiper-slide relative" key={index}>
                                        <img
                                            src={image}
                                            alt={`Slider ${index + 1}`}
                                            className="w-full h-auto object-cover rounded-lg"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center">
                                            Başlık {index + 1}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Pagination */}
                            <div className="swiper-pagination absolute bottom-4 w-full text-center" />
                        </div>
                    </div>

                    {/* Main Content with Responsive Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Left Sidebar Column */}
                        <div className="col-span-1 bg-[#064169] p-5 rounded-lg text-white">
                            <h3 className="text-xl mb-4">Hakkımızda</h3>
                            <p>
                                Şirketimiz hakkında daha fazla bilgi edinmek için bizimle iletişime
                                geçin.
                            </p>
                        </div>
                        {/* 3 Other Columns */}
                        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {/* Column 1 */}
                            <div className="bg-white p-5 rounded-lg shadow-lg">
                                <h3 className="text-xl mb-4">Column 1</h3>
                                <p>İçerik 1</p>
                            </div>
                            {/* Column 2 */}
                            <div className="bg-white p-5 rounded-lg shadow-lg">
                                <h3 className="text-xl mb-4">Column 2</h3>
                                <p>İçerik 2</p>
                            </div>
                            {/* Column 3 */}
                            <div className="bg-white p-5 rounded-lg shadow-lg">
                                <h3 className="text-xl mb-4">Column 3</h3>
                                <p>İçerik 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DynamicSlider;