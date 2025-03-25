import React from 'react';

interface GalleryItemProps {
    effect: string;
    imageSrc: string;
    title: string;
    description: string[];
    linkText?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
                                                     effect,
                                                     imageSrc,
                                                     title,
                                                     description,
                                                     linkText
                                                 }) => {
    return (
        <div className="relative overflow-hidden group">
            <img
                src={imageSrc}
                alt={`Gallery image ${effect}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                {description.map((line, index) => (
                    <p key={index} className="mb-1">{line}</p>
                ))}
                {linkText && (
                    <a
                        href="#"
                        className="mt-2 px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                    >
                        {linkText}
                    </a>
                )}
            </div>
        </div>
    );
};

const GalleryPage: React.FC = () => {
    const galleries = [
        {
            effect: 'julia',
            items: [
                {
                    src: '/images/gebze/tarihiyerler/1.JPG',
                    title: 'Passionate Julia',
                    description: [
                        'Julia dances in the deep dark',
                        'She loves the smell of the ocean',
                        'And dives into the morning light'
                    ],
                    linkText: 'View more'
                },
                {
                    src: '/images/gebze/tarihiyerler/3.JPG',
                    title: 'Passionate Julia',
                    description: [
                        'Julia dances in the deep dark',
                        'She loves the smell of the ocean',
                        'And dives into the morning light'
                    ],
                    linkText: 'View more'
                }
            ]
        },
        {
            effect: 'goliath',
            items: [
                {
                    src: '../files/assets/images/light-box/l3.jpg',
                    title: 'Thoughtful Goliath',
                    description: ['When Goliath comes out, you should run.'],
                    linkText: 'View more'
                },
                {
                    src: '../files/assets/images/light-box/l4.jpg',
                    title: 'Thoughtful Goliath',
                    description: ['When Goliath comes out, you should run.'],
                    linkText: 'View more'
                }
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6 bg-gray-100 border-b">
                        <h1 className="text-2xl font-bold text-gray-800">Gallery Advance</h1>
                        <p className="text-gray-500 mt-2">
                            lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </p>
                    </div>

                    <div className="p-6">
                        {galleries.map((gallery, galleryIndex) => (
                            <div
                                key={galleryIndex}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                            >
                                {gallery.items.map((item, itemIndex) => (
                                    <GalleryItem
                                        key={itemIndex}
                                        effect={gallery.effect}
                                        imageSrc={item.src}
                                        title={item.title}
                                        description={item.description}
                                        linkText={item.linkText}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;