import React, { useState, useEffect } from "react";

type ImageType = {
    url: string;
    category: string;
};

const Gallery: React.FC = () => {
    const [images, setImages] = useState<ImageType[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const data: ImageType[] = [
            { url: "/images/gebze/fotoğraflarlagebze/20191120070414.jpg", category: "Doğa" },
            { url: "/images/gebze/fotoğraflarlagebze/20191120070426.jpg", category: "Tarih" },
            { url: "/images/gebze/fotoğraflarlagebze/20191120070442.jpg", category: "Şehir" },
            { url: "/images/gebze/fotoğraflarlagebze/20191120070558.jpg", category: "Doğa" },
            { url: "/images/gebze/fotoğraflarlagebze/20191120070611.jpg", category: "Doğa" },
            { url: "/images/gebze/fotoğraflarlagebze/20191120070629.jpg", category: "Şehir" },
            { url: "/images/gebze/fotoğraflarlagebze/20191120070644.jpg", category: "Doğa" },
            { url: "/images/gebze/fotoğraflarlagebze/20191120070716.jpg", category: "Doğa" },
            { url: "/images/gebze/fotoğraflarlagebze/20191120070734.jpg", category: "Doğa" },
            { url: "/images/gebze/fotoğraflarlagebze/20191120070757.jpg", category: "Doğa" },
            { url: "/images/gebze/fotoğraflarlagebze/20191120070816.jpg", category: "Doğa" },
            { url: "/images/gebze/fotoğraflarlagebze/20191120070843.jpg", category: "Doğa" },
            { url: "/images/gebze/fotoğraflarlagebze/20191120070910.jpg", category: "Doğa" },
            { url: "/images/gebze/fotoğraflarlagebze/20191120070929.jpg", category: "Doğa" },
            { url: "/images/gebze/fotoğraflarlagebze/20191120070950.jpg", category: "Doğa" },
            { url: "/images/gebze/fotoğraflarlagebze/20191120071006.jpg", category: "Doğa" },
        ];
        setImages(data);
    }, []);

    return (
        <div className="p-4 flex justify-end">
            {/* 3 Sütun Masonry Grid */}
            <div className="columns-3 gap-4 space-y-4 max-w-[900px]">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.url}
                        alt={`Image ${index}`}
                        className="w-full max-h-48 object-cover border border-gray-300 rounded-lg shadow-sm hover:scale-105 transition-transform cursor-pointer"
                        onClick={() => setSelectedImage(image.url)}
                    />
                ))}
            </div>

            {/* Modal (Büyük Resim) */}
            {selectedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-0 right-0 m-2 text-white text-3xl"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✖
                        </button>
                        <img src={selectedImage} alt="Selected" className="max-h-[90vh] rounded-lg" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
