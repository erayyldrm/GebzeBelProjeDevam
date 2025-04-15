import React, { useState, useEffect } from "react";

type ImageType = {
    url: string;
};
const Gallery: React.FC = () => {
    const [images, setImages] = useState<ImageType[]>([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    useEffect(() => {
        const data: ImageType[] = [
            { url: "/images/gebze/fotoğraflarlagebze/_86F3564.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/2.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/6- Çoban Mustafa Paşa Türbesi - Gebze.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/20211103_115109.jpg"},
            { url: "/images/gebze/fotoğraflarlagebze/B00I5598.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/D86F0576.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/D86F0798.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/D86F0121.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/D86F9438.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/D86F9442.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/D86F9448.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/D86F9461.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/D86F9470.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/D86F9483.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/D86F9495.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/DJI_0005.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/DJI_0018.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/DJI_0501.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/DJI_0523.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/DJI_0552.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/DJI_0579.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/DJI_0592.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/DJI_0600.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/DJI_0624.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/DJI_0628.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/DJI_0660.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/DJI_0696.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/DJI_0931.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/DSC03057.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/DSCN0319.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/genel 2.jpg"},
            { url: "/images/gebze/fotoğraflarlagebze/IMG_8201.JPG"},
            { url: "/images/gebze/fotoğraflarlagebze/20191120071450.jpg"}
        ];
        setImages(data);
    }, []);

    const handleNext = () => {
        if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    };

    const handlePrev = () => {
        if (selectedImageIndex !== null && selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };

    return (
        <div className="flex justify-center w-full">
            <div className="p-4 flex flex-col items-center w-full max-w-[1200px]">
                <div className="bg-[#891737] shadow-lg rounded-2xl p-6 mb-6 w-full text-center">
                    <h1 className="text-3xl font-bold text-white">FOTOĞRAFLARLA GEBZE</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                    {images.map((image, index) => (
                        <div key={index} className="flex justify-center">
                            <img
                                src={image.url}
                                alt={`Image ${index}`}
                                className="w-full h-[200px] object-cover border border-gray-300 rounded-2xl shadow-sm transition-all duration-300 hover:brightness-110 hover:scale-105"
                                onClick={() => setSelectedImageIndex(index)}
                            />
                        </div>
                    ))}
                </div>
                {selectedImageIndex !== null && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        <div className="relative flex items-center max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                            <button
                                className="absolute left-0 ml-4 text-white text-3xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
                                onClick={handlePrev}
                                disabled={selectedImageIndex === 0}
                            >
                                ◀
                            </button>
                            <img
                                src={images[selectedImageIndex].url}
                                alt="Selected"
                                className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
                            />
                            <button
                                className="absolute right-0 mr-4 text-white text-3xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
                                onClick={handleNext}
                                disabled={selectedImageIndex === images.length - 1}
                            >
                                ▶
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;