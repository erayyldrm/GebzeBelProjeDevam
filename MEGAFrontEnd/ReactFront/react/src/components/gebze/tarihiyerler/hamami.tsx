import { MapPin, ChevronRight } from "lucide-react";
const CobanMustafaPasaHamamiPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            {/* Hero Section - Modified */}
            <div className="container mx-auto relative h-[500px] max-w-6xl mt-6"> {/* Container ve max-width eklendi */}
                <div className="absolute inset-0  z-10" />
                <img
                    src="/images/gebze/tarihiyerler/hamam/4.JPG"
                    alt="AnibalinMezari"
                    className="h-full w-full object-cover rounded-lg" /* Yuvarlatılmış kenarlar */
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ÇOBAN MUSTAFA PAŞA HAMAMI</h1>
                    <div className="flex items-center text-white bg-[#022842] px-4 py-2 rounded-full">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>Gebze, Kocaeli</span>
                    </div>
                </div>
            </div><br/>

            {/* Content Section */}
            <div className="container mx-auto px-3 py-9">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Quick Info Panel */}


                    {/* Main Content */}
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-2/3">
                                <h2 className="text-2xl font-bold text-blue-800 mb-4">Tarihçe ve Genel Bilgi</h2>
                                <div className="prose max-w-none text-gray-700">
                                    <p className="mb-4 text-justify">
                                        Çoban Mustafa Paşa Hamamı, 1523 yılında Osmanlı dönemi devlet adamı Çoban Mustafa Paşa tarafından inşa edilmiştir. Gebze'nin Hacıhalil Mahallesi'nde yer alan bu tarihi hamam, iki ana kubbeden oluşan yapısıyla dikkat çeker. Osmanlı mimarisinin güzel bir örneği olan hamam, günümüzde aktif olarak kullanılmamakta, ancak tarihi bir yapı olarak korunmaktadır. Hem yerli hem de yabancı turistler tarafından ziyaret edilmektedir.
                                    </p>

                                </div>

                                <div className="mt-8">
                                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Aktiviteler</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">🧭 Tarihi Gezi</h3>
                                            <p className="text-gray-700 text-justify">
                                                Çoban Mustafa Paşa Hamamı’nı gezip, Osmanlı dönemi mimarisini keşfedin. Hamamın yapımında kullanılan taşlar, kubbeler ve kemerler hakkında rehberli bilgi alabilirsiniz.
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">📸 Fotoğrafçılık</h3>
                                            <p className="text-gray-700 text-justify">
                                                Hamamın tarihi yapısını ve mimarisini fotoğraflayın. Özellikle iç mekanın detayları, duvarlar ve pencereler oldukça etkileyici.
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">☕ Kültürel Sohbet</h3>
                                            <p className="text-gray-700 text-justify">
                                                Hamamın tarihini ve mimarisini keşfederken, arkadaşlarınızla Osmanlı kültürü ve yaşam tarzı üzerine sohbet edebilirsiniz.
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">🍽️ Yerel Lezzetler</h3>
                                            <p className="text-gray-700 text-justify">
                                                Hamama yakın kafeler ve restoranlarda yerel yemekleri tadabilirsiniz. Geleneksel Osmanlı mutfağından örnekler alabilirsiniz.
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
                                        Gebze ilçe merkezine ulaşan otobüs hatları ve Marmaray tren hattı ile hamama kolayca ulaşabilirsiniz. En yakın duraklar arasında Ak Çarşı, İbrahim Ağa Caddesi, Bülbül Caddesi ve İsmetpaşa Caddesi bulunmaktadır. Bu duraklardan yürüyerek hamama ulaşmak mümkündür.​
                                    </p>
                                    <a
                                        href="https://www.google.com/maps/place/Tarihi+%C3%87ar%C5%9F%C4%B1+Hamam%C4%B1/@40.7992254,29.4309593,17z/data=!4m5!3m4!1s0x14cb20894af6630f:0xda82440ad30b8594!8m2!3d40.7985669!4d29.4341429?shorturl=1"
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
                                            {id: 1, path: "/images/gebze/tarihiyerler/hamam/sub1.JPG", alt: "CobanMustafaPasaHamami görünüm 1"},
                                            {id: 2, path: "/images/gebze/tarihiyerler/hamam/sub2.JPG", alt: "CobanMustafaPasaHamami görünüm 2"},
                                            {id: 3, path: "/images/gebze/tarihiyerler/hamam/sub3.JPG", alt: "CobanMustafaPasaHamami görünüm 3"},
                                            {id: 4, path: "/images/gebze/tarihiyerler/hamam/4.JPG", alt: "CobanMustafaPasaHamami görünüm 4"}
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

export default CobanMustafaPasaHamamiPage;