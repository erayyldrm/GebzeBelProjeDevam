import { MapPin, ChevronRight } from "lucide-react";
const HunkarCayiriPage = () => {
        return (
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                {/* Hero Section - Modified */}
                <div className="container mx-auto relative h-[500px] max-w-6xl mt-6"> {/* Container ve max-width eklendi */}
                    <div className="absolute inset-0  z-10" />
                    <img
                        src="/images/gebze/tarihiyerler/hünkar/8.JPG"
                        alt="HunkarCayiri"
                        className="h-full w-full object-cover rounded-lg" /* Yuvarlatılmış kenarlar */
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">HÜNKAR ÇAYIRI</h1>
                        <div className="flex items-center text-white bg-[#022842] px-4 py-2 rounded-full">
                            <MapPin className="w-5 h-5 mr-2" />
                            <span>Gebze, Kocaeli</span>
                        </div>
                    </div>
                </div><br/>

                {/* Content Section */}
                <div className="container mx-auto px-3 py-9">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-2/3">
                                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Tarihçe ve Genel Bilgi</h2>
                                    <div className="prose max-w-none text-gray-700">
                                        <p className="mb-4 text-justify">
                                            Hünkar Çayırı, Gebze'de Osmanlı padişahı Sultan Abdülaziz'in av yaptığı bir alandır. Doğal güzellikleriyle dikkat çeken bu bölge, tarihi olarak Osmanlı döneminde padişahların dinlenme ve av yapma yeri olarak kullanılmıştır.
                                            Bugün, yürüyüş yapabileceğiniz ve doğayla iç içe vakit geçirebileceğiniz bir alan olarak ziyaretçilere açıktır.
                                        </p>

                                    </div>

                                    <div className="mt-8">
                                        <h2 className="text-2xl font-bold text-blue-800 mb-4">Aktiviteler</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <h3 className="text-lg font-semibold text-blue-700 mb-2">🌿 Doğa Yürüyüşü</h3>
                                                <p className="text-gray-700 text-justify">
                                                    Hünkar Çayırı'nda yürüyüş yolları üzerinde doğa yürüyüşleri yapabilirsiniz. Çevredeki yeşil alanlar ve manzaralar eşliğinde huzurlu bir yürüyüş keyfi sunar.
                                                </p>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <h3 className="text-lg font-semibold text-blue-700 mb-2">🚴‍♂️ Bisiklet Turu</h3>
                                                <p className="text-gray-700 text-justify">
                                                    Bisikletle gezerek çayırlık alanları keşfe çıkabilirsiniz. Hem spor yapabilir hem de bölgenin doğal atmosferini daha hızlı keşfedebilirsiniz.
                                                </p>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <h3 className="text-lg font-semibold text-blue-700 mb-2">🧺 Kamp ve Piknik</h3>
                                                <p className="text-gray-700 text-justify">
                                                    Çayırda doğayla iç içe bir piknik yapabilirsiniz. Geniş alanlar, rahatça oturup dinlenebileceğiniz alanlar sunar.
                                                </p>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <h3 className="text-lg font-semibold text-blue-700 mb-2">🧭 Tarihi Gezi</h3>
                                                <p className="text-gray-700 text-justify">
                                                    Bölgedeki tarihi önem ve geçmiş hakkında bilgi alarak, Osmanlı dönemine ait bu alanı keşfetmek daha anlamlı hale gelir. Rehber eşliğinde geçmişe yolculuk yapabilirsiniz.
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar */}
                                <div className="md:w-1/3">
                                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                        <h3 className="text-xl font-bold text-blue-800 mb-4">🚗 Nasıl Gidilir?</h3>
                                        <p className="text-gray-700 mb-4 text-justify">
                                            D100 karayolu üzerinden yaklaşık 11 km mesafede bulunan Hünkar Çayırı'na özel aracınızla yaklaşık 15 dakikada ulaşabilirsiniz.
                                        </p>
                                        <a
                                            href="https://www.google.com/maps/place/H%C3%BCnkar+%C3%87ay%C4%B1r%C4%B1/@40.813967,29.3409963,17z/data=!3m1!4b1!4m5!3m4!1s0x14cade66bb4b566f:0x563611efabd51aa!8m2!3d40.813967!4d29.343185?shorturl=1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center bg-blue-600 text-black px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                        >
                                            <MapPin className="w-5 h-5 mr-2" />
                                            Haritada Gör
                                        </a>
                                    </div>

                                    <div className="bg-gray-100 p-4 rounded-lg mb-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">🖼️ Galeri</h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            {[
                                                {id: 3, path: "/images/gebze/tarihiyerler/hünkar/sub1.JPG", alt: "HunkarCayiri görünüm 3"},
                                                {id: 1, path: "/images/gebze/tarihiyerler/hünkar/sub3.JPG", alt: "HunkarCayiri görünüm 1"},
                                                {id: 2, path: "/images/gebze/tarihiyerler/hünkar/sub2.JPG", alt: "HunkarCayiri görünüm 2"},
                                                {id: 4, path: "/images/gebze/tarihiyerler/hünkar/8.JPG", alt: "HunkarCayiri görünüm 4"}

                                            ].map((item) => (
                                                <div key={item.id} className="aspect-square overflow-hidden rounded-lg">
                                                    <img
                                                        src={item.path}
                                                        alt={item.alt}
                                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Places Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Diğer Tarihi Yerler</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { name: "Eskihisar Kalesi", imagePath: "/images/gebze/tarihiyerler/kale/7.JPG" },
                                { name: "Anibal'ın Mezarı", imagePath: "/images/gebze/tarihiyerler/anibal/1.JPG" },
                                { name: "Çoban Mustafa Paşa Külliyesi", imagePath: "/images/gebze/tarihiyerler/külliye/3.JPG" },
                                { name: "Hünkar Çayırı", imagePath: "/images/gebze/tarihiyerler/hünkar/8.JPG" }
                            ].map((place, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={place.imagePath}
                                            alt={place.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold mb-2">{place.name}</h3>
                                        <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center text-sm">
                                            Detaylı bilgi
                                            <ChevronRight className="w-4 h-4 ml-1" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div><br/>
                </div>
            </div>
        );
    };
export default HunkarCayiriPage;