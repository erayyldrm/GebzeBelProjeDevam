import React, { useState, useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css"; // Ensure you include Swiper styles

const DynamicSlider: React.FC = () => {
    const images = [
        "https://www.w3schools.com/w3images/fjords.jpg",
        "https://www.w3schools.com/w3images/mountains.jpg",
        "https://www.w3schools.com/w3images/lights.jpg",
        "https://www.w3schools.com/w3images/nature.jpg",
    ];

    const [swiper, setSwiper] = useState<any>(null);

    useEffect(() => {
        const swiperInstance = new Swiper(".swiper-container", {
            spaceBetween: 10,
            navigation: true, // Optional: Add navigation buttons (next/prev)
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            loop: true, // Optional: Make it loop infinitely
            autoplay: {
                delay: 3000, // Automatic slide every 3 seconds
            },
        });

        setSwiper(swiperInstance);

        return () => {
            swiperInstance.destroy(); // Clean up on component unmount
        };
    }, []);

    return (
        <div className="flex-grow ml-5">
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

                {/* Main Content with 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* 3 Other Columns */}
                    <div className="col-span-3 grid grid-cols-3 gap-6">
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
    );
};

export default DynamicSlider;
