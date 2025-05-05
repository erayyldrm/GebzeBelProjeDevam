import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const Yumrukaya = () => {
    const sliderImages = [
        "/images/hizmetler/mesirealani/gazilerdağı.jpg",
        "/images/hizmetler/mesirealani/gaziler2.jpg",
        "/images/hizmetler/mesirealani/gaziler3.jpg",
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
        <div className="min-h-screen bg-gray-50 flex flex-col items-center px-2 sm:px-4 py-4 sm:py-8">
            <div className="w-full max-w-5xl mx-auto">
                {/* Slider Container */}
                <div className="relative w-full aspect-[16/9] rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden">
                    {/* Image */}
                    <img
                        src={sliderImages[currentIndex]}
                        alt={`Yumrukaya Mesire Alanı ${currentIndex + 1}`}
                        className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-2 sm:px-4">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl bg-[#022842]/85 font-bold text-white mb-3 sm:mb-5 rounded-lg sm:rounded-xl px-4 py-3 sm:px-6 sm:py-4 inline-block shadow-lg transform hover:scale-105 transition duration-300">
                         GAZİLERDAĞI MESİRE ALANI
                        </h1>
                        <a
                            href="https://www.google.com/maps/dir//Gaziler,+Dicle+Cd.+No:48,+41400+Gebze%2FKocaeli/@40.83049,29.3447269,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cb21e3f92f3d03:0xf3e8a2e6ff3f0764!2m2!1d29.4271277!2d40.8305193?hl=tr&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-white bg-[#022842]/85 px-4 py-2 sm:px-5 sm:py-3 rounded-full hover:bg-[#033b60] transition text-sm sm:text-base md:text-lg font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
                        >
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
                            <span>Gebze, Kocaeli</span>
                        </a>
                    </div>

                    {/* Slider Controls */}
                    <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4">
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

                    {/* Indicator dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                        {sliderImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                                    currentIndex === index
                                        ? "bg-white w-3 md:w-4"
                                        : "bg-white/60"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Image counter */}
                <div className="text-center mt-2 text-sm text-gray-600">
                    {currentIndex + 1} / {sliderImages.length}
                </div>
            </div>
        </div>
    );
};

export default Yumrukaya;