import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";


const Gaziler = () => {
    const sliderImages = [
        "/images/hizmetler/mesirealani/gazilerdağı.jpg",

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
                        GAZİLERDAĞI MESİRE ALANI
                    </h1>
                    <a
                        href="https://www.google.com/maps/dir//Gaziler,+Dicle+Cd.+No:48,+41400+Gebze%2FKocaeli/@40.83049,29.3447269,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cb21e3f92f3d03:0xf3e8a2e6ff3f0764!2m2!1d29.4271277!2d40.8305193?hl=tr&entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
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


            </div>
        </div>
    );
};

export default Gaziler;
