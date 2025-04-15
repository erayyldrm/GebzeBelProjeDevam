import { MapPin, ChevronRight } from "lucide-react";
const BallikayalarPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            {/* Hero Section - Modified */}
            <div className="container mx-auto relative h-[500px] max-w-6xl mt-6"> {/* Container ve max-width eklendi */}
                <div className="absolute inset-0  z-10" />
                <img
                    src="/images/gebze/tarihiyerler/ballikayalar/sub1.jpg"
                    alt="Ballıkayalar Tabiat Parkı"
                    className="h-full w-full object-cover rounded-lg" /* Yuvarlatılmış kenarlar */
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">BALLIKAYALAR TABİAT PARKI</h1>
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
                                        Ballıkayalar Vadisi, Kocaeli'nin Gebze ilçesinde yer alan doğal bir hazinedir.
                                        1995 yılında Tabiat Parkı olarak koruma altına alınan bu alan, İstanbul'a yaklaşık
                                        45 km uzaklıkta bulunuyor. Vadi, 1600 metrelik dar bir kanyondan oluşmakta ve
                                        etrafı 100 metreyi aşan yüksek kayalıklarla çevrilidir.
                                    </p>
                                    <p className="mb-4 text-justify">
                                        Ballıkayalar Vadisi, adını bölgedeki kayalıklarda yaşayan yaban arılarının
                                        oluşturduğu bal peteğine benzer yapılardan almıştır. Vadide yer alan
                                        şelaleler ve doğal göletler, ziyaretçilere eşsiz bir doğa deneyimi sunmaktadır.
                                    </p>
                                    <p className="mb-4 text-justify">
                                        Bölge, özellikle kaya tırmanışı meraklıları için önemli bir merkez haline gelmiştir.
                                        Farklı zorluk derecelerinde 100'den fazla tırmanış rotası bulunmaktadır. Ayrıca
                                        doğa yürüyüşü, kamp ve piknik için ideal alanlar içermektedir.
                                    </p>
                                    <p className="text-justify">
                                        Ballıkayalar'ın zengin flora ve faunası da görülmeye değerdir. Bölgede
                                        kızılçam, meşe, defne, kocayemiş gibi ağaçlar ve çeşitli yabani hayvanlar
                                        yaşamaktadır. Özellikle bahar aylarında bölge rengarenk çiçeklerle bezenmektedir.
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Aktiviteler</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">🧗‍♂️ Kaya Tırmanışı</h3>
                                            <p className="text-gray-700 text-justify">
                                                Türkiye'nin en önemli kaya tırmanış merkezlerinden biridir. 100+ rotalı
                                                kayalıklarda her seviyeye uygun parkurlar bulunur.
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">🌿 Doğa Yürüyüşü</h3>
                                            <p className="text-gray-700 text-justify">
                                                Vadi boyunca uzanan patikalarda doğa ile başbaşa yürüyüş yapabilirsiniz.
                                                İşaretli rotalar güvenli bir deneyim sunar.
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">🧺 Kamp ve Piknik</h3>
                                            <p className="text-gray-700 text-justify">
                                                Belirlenen alanlarda kamp ve piknik yapabilirsiniz. Temiz hava ve doğal
                                                ortamda dinlenme imkanı bulunur.
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">📸 Fotoğrafçılık</h3>
                                            <p className="text-gray-700 text-justify">
                                                Eşsiz manzaralar ve doğal güzellikler fotoğraf tutkunları için mükemmel
                                                kareler sunmaktadır.
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
                                        İstanbul'dan özel araçla TEM Otoyolu üzerinden yaklaşık 45 dakikalık bir yolculukla
                                        ulaşılabilir. Gebze merkeze 15 km mesafededir.
                                    </p>
                                    <a
                                        href="https://www.google.com/maps/place/Ball%C4%B1kayalar+Tabiat+Park%C4%B1/@40.8299347,29.515808,2509m/data=!3m1!1e3!4m6!3m5!1s0x14cb242bfea49fbf:0x8a949c7858da831d!8m2!3d40.8332309!4d29.5168155!16s%2Fg%2F1thm0p0_?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
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
                                            {id: 1, path: "/images/gebze/tarihiyerler/ballikayalar/2.jpg", alt: "Ballıkayalar görünüm 1"},
                                            {id: 2, path: "/images/gebze/tarihiyerler/ballikayalar/sub2.jpg", alt: "Ballıkayalar görünüm 2"},
                                            {id: 3, path: "/images/gebze/tarihiyerler/ballikayalar/sub3.jpg", alt: "Ballıkayalar görünüm 3"},
                                            {id: 4, path: "/images/gebze/tarihiyerler/ballikayalar/sub4.jpg", alt: "Ballıkayalar görünüm 4"}
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

export default BallikayalarPage;