
import { MapPin, Clock, Phone, Calendar, Info, ChevronRight } from "lucide-react";

const BallikayalarPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-96 w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src="/api/placeholder/1200/600"
                    alt="Ballıkayalar Tabiat Parkı"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">BALLIKAYALAR TABİAT PARKI</h1>
                    <div className="flex items-center text-white bg-blue-600/80 px-4 py-2 rounded-full">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>Gebze, Kocaeli</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Quick Info Panel */}
                    <div className="bg-blue-100 p-4 flex flex-wrap gap-6 justify-center md:justify-start">
                        <div className="flex items-center">
                            <Clock className="w-5 h-5 text-blue-700 mr-2" />
                            <div>
                                <h3 className="text-xs font-semibold text-blue-800">ZİYARET SAATLERİ</h3>
                                <p className="text-sm">08:00 - 19:00</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Phone className="w-5 h-5 text-blue-700 mr-2" />
                            <div>
                                <h3 className="text-xs font-semibold text-blue-800">İLETİŞİM</h3>
                                <p className="text-sm">0262 642 04 30</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-5 h-5 text-blue-700 mr-2" />
                            <div>
                                <h3 className="text-xs font-semibold text-blue-800">EN İYİ ZAMAN</h3>
                                <p className="text-sm">Nisan - Ekim Arası</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Info className="w-5 h-5 text-blue-700 mr-2" />
                            <div>
                                <h3 className="text-xs font-semibold text-blue-800">GİRİŞ ÜCRETİ</h3>
                                <p className="text-sm">10 TL</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-2/3">
                                <h2 className="text-2xl font-bold text-blue-800 mb-4">Tarihçe ve Genel Bilgi</h2>
                                <div className="prose max-w-none text-gray-700">
                                    <p className="mb-4">
                                        Ballıkayalar Vadisi, Kocaeli'nin Gebze ilçesinde yer alan doğal bir hazinedir.
                                        1995 yılında Tabiat Parkı olarak koruma altına alınan bu alan, İstanbul'a yaklaşık
                                        45 km uzaklıkta bulunuyor. Vadi, 1600 metrelik dar bir kanyondan oluşmakta ve
                                        etrafı 100 metreyi aşan yüksek kayalıklarla çevrilidir.
                                    </p>
                                    <p className="mb-4">
                                        Ballıkayalar Vadisi, adını bölgedeki kayalıklarda yaşayan yaban arılarının
                                        oluşturduğu bal peteğine benzer yapılardan almıştır. Vadide yer alan
                                        şelaleler ve doğal göletler, ziyaretçilere eşsiz bir doğa deneyimi sunmaktadır.
                                    </p>
                                    <p className="mb-4">
                                        Bölge, özellikle kaya tırmanışı meraklıları için önemli bir merkez haline gelmiştir.
                                        Farklı zorluk derecelerinde 100'den fazla tırmanış rotası bulunmaktadır. Ayrıca
                                        doğa yürüyüşü, kamp ve piknik için ideal alanlar içermektedir.
                                    </p>
                                    <p>
                                        Ballıkayalar'ın zengin flora ve faunası da görülmeye değerdir. Bölgede
                                        kızılçam, meşe, defne, kocayemiş gibi ağaçlar ve çeşitli yabani hayvanlar
                                        yaşamaktadır. Özellikle bahar aylarında bölge rengarenk çiçeklerle bezenmektedir.
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Aktiviteler</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">Kaya Tırmanışı</h3>
                                            <p className="text-gray-700">
                                                Türkiye'nin en önemli kaya tırmanış merkezlerinden biridir. 100+ rotalı
                                                kayalıklarda her seviyeye uygun parkurlar bulunur.
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">Doğa Yürüyüşü</h3>
                                            <p className="text-gray-700">
                                                Vadi boyunca uzanan patikalarda doğa ile başbaşa yürüyüş yapabilirsiniz.
                                                İşaretli rotalar güvenli bir deneyim sunar.
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">Kamp ve Piknik</h3>
                                            <p className="text-gray-700">
                                                Belirlenen alanlarda kamp ve piknik yapabilirsiniz. Temiz hava ve doğal
                                                ortamda dinlenme imkanı bulunur.
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">Fotoğrafçılık</h3>
                                            <p className="text-gray-700">
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
                                    <h3 className="text-xl font-bold text-blue-800 mb-4">Nasıl Gidilir?</h3>
                                    <p className="text-gray-700 mb-4">
                                        İstanbul'dan özel araçla TEM Otoyolu üzerinden yaklaşık 45 dakikalık bir yolculukla
                                        ulaşılabilir. Gebze merkeze 15 km mesafededir.
                                    </p>
                                    <a
                                        href="https://maps.app.goo.gl/vAfkWYpGCpFv5WSXA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        <MapPin className="w-5 h-5 mr-2" />
                                        Haritada Gör
                                    </a>
                                </div>

                                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Galeri</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[1, 2, 3, 4].map((num) => (
                                            <div key={num} className="aspect-square overflow-hidden rounded-lg">
                                                <img
                                                    src={`/api/placeholder/300/300?text=Ballıkayalar ${num}`}
                                                    alt={`Ballıkayalar görünüm ${num}`}
                                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-3 text-center">
                                        <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                                            Tüm fotoğrafları gör
                                            <ChevronRight className="w-4 h-4 ml-1" />
                                        </a>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h3 className="text-xl font-bold text-green-800 mb-3">Ziyaretçi Notları</h3>
                                    <ul className="space-y-3">
                                        <li className="text-gray-700 flex items-start">
                                            <ChevronRight className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                                            <span>Yaz aylarında şapka, güneş kremi ve bol su bulundurmayı unutmayın.</span>
                                        </li>
                                        <li className="text-gray-700 flex items-start">
                                            <ChevronRight className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                                            <span>Tırmanış için profesyonel ekipman ve rehber eşliğinde hareket etmeniz önerilir.</span>
                                        </li>
                                        <li className="text-gray-700 flex items-start">
                                            <ChevronRight className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                                            <span>Çöplerinizi yanınızda götürmeyi ve doğal hayata saygılı olmayı unutmayın.</span>
                                        </li>
                                        <li className="text-gray-700 flex items-start">
                                            <ChevronRight className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                                            <span>Hafta sonları ziyaretçi yoğunluğu artmaktadır, hafta içi ziyaret etmeniz önerilir.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Places Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Yakınlardaki Diğer Tarihi Yerler</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {["Eskihisar Kalesi", "Anibal'ın Mezarı", "Çoban Mustafa Paşa Külliyesi", "Hünkar Çayırı"].map((place, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={`/api/placeholder/400/300?text=${place}`}
                                        alt={place}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">{place}</h3>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center text-sm">
                                        Detaylı bilgi
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-blue-900 text-white mt-12 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-xl font-bold">Gebze Belediyesi</h2>
                            <p className="text-blue-200">Tarihi ve Kültürel Değerlerimiz</p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-200 transition-colors">Ana Sayfa</a>
                            <a href="#" className="hover:text-blue-200 transition-colors">Tüm Tarihi Yerler</a>
                            <a href="#" className="hover:text-blue-200 transition-colors">İletişim</a>
                        </div>
                    </div>
                    <div className="mt-6 text-center text-blue-200 text-sm">
                        © 2025 Gebze Belediyesi. Tüm Hakları Saklıdır.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BallikayalarPage;