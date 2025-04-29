import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import ImageSlider from "../../Sliders2/SliderTest2.tsx";

const Cumakoy = () => {
    const sliderImages = [
        "/images/hizmetler/mesirealani/cumaköy.jpg",
        "/images/hizmetler/mesirealani/cumaköy2.jpg",
        "/images/hizmetler/mesirealani/cumaköy3.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? sliderImages.length - 1 : prev - 1
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center">
            {/* Slider Container */}
            <div className="relative w-[950px] h-[550px] mt-6 overflow-hidden rounded-xl shadow-lg">
                {/* Image */}
                <img
                    src={sliderImages[currentIndex]}
                    alt={`Slider image ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 bg-black/30">
                    <h1 className="text-4xl md:text-5xl bg-[#022842]/60 font-bold text-white mb-4 rounded-xl px-4 py-3 inline-block">
                        CUMAKÖY MESİRE ALANI
                    </h1>
                    <a
                        href="https://www.google.com/maps/dir//Cumak%C3%B6y,+41400+Gebze%2FKocaeli/@40.9101111,29.4104837,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cb290075c9e929:0xa93baeb721fda3b2!2m2!1d29.4928845!2d40.9101404?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white bg-[#022842] px-4 py-2 rounded-full hover:bg-[#033b60] transition"
                    >
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>Gebze, Kocaeli</span>
                    </a>
                </div>

                {/* Slider Controls */}
                {/* Slider Controls */}
                {/* Slider Controls */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:scale-105 transition duration-200 z-10"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:scale-105 transition duration-200 z-10"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>

            </div>
        </div>
    );
};

export default Cumakoy;
