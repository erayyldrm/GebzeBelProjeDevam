import { MapPin, ChevronRight } from "lucide-react";
const EskihisarKalesiPage = () => {

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            {/* Hero Section - Modified */}
            <div className="container mx-auto relative h-[500px] max-w-6xl mt-6"> {/* Container ve max-width eklendi */}
                <div className="absolute inset-0  z-10" />
                <img
                    src="/images/gebze/tarihiyerler/kale/7.JPG"
                    alt="EskihisarKalesi"
                    className="h-full w-full object-cover rounded-lg" /* Yuvarlatılmış kenarlar */
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ESKİHİSAR KALESİ</h1>
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
                                        Eskihisar Kalesi, Kocaeli’nin Gebze ilçesine bağlı Eskihisar Mahallesi’nde, İzmit Körfezi’ne hâkim bir tepe üzerine kurulmuş tarihi bir yapıdır. Yapımının 12. yüzyıla, Bizans İmparatoru I. Manuel Komnenos dönemine dayandığı düşünülmektedir. Kale, antik çağda "Niketiaton" olarak bilinen liman kentini ve deniz geçişlerini korumak amacıyla inşa edilmiştir.

                                        Osmanlı döneminde de önemini sürdüren kale, 1998 yılında restore edilerek ziyarete açılmıştır. Dikdörtgen planlı yapının içinde 10 adet burç ve 4 adet kapı bulunmaktadır. Hem tarihî hem de doğal güzelliğiyle dikkat çeken Eskihisar Kalesi, İzmit Körfezi’ne karşı sunduğu panoramik manzara ile öne çıkar.
                                    </p>

                                </div>

                                <div className="mt-8">
                                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Aktiviteler</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">🌅 Manzara İzleme </h3>
                                            <p className="text-gray-700 text-justify">
                                                Sessiz ve huzurlu ortamda namaz kılabilir, manevi bir atmosferde zaman geçirebilirsiniz.
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">🧭 Tarihi Gezi</h3>
                                            <p className="text-gray-700 text-justify">
                                                Kaleyi ve burçlarını gezerek Bizans ve Osmanlı dönemine ait izleri yakından inceleyebilirsiniz.
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-2">📸 Fotoğrafçılık</h3>
                                            <p className="text-gray-700 text-justify">
                                                Kale surları, burçlar ve İzmit Körfezi manzarası eşliğinde harika kareler yakalayabilirsiniz.
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
                                        Gebze merkezinden hareket eden 411 ve 416 numaralı otobüslerle ulaşım sağlanabilir.

                                        D-100 Karayolu (E-5) veya TEM Otoyolu üzerinden Eskihisar-Feribot tabelaları takip edilerek ulaşılabilir.
                                    </p>
                                    <a
                                        href="https://www.google.com/maps/place/Eskihisar,+Eskihisar+Kalesi,+41400+Gebze%2FKocaeli/@40.7720178,29.431508,628m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14cb2012246f1bdf:0x210fd52d96efc378!8m2!3d40.7720178!4d29.431508!16s%2Fg%2F11byl6ys8g?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
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
                                            {id: 3, path: "/images/gebze/tarihiyerler/kale/sub1.JPG", alt: "EskihisarKalesi görünüm 3"},
                                            {id: 1, path: "/images/gebze/tarihiyerler/kale/sub2.JPG", alt: "EskihisarKalesi görünüm 1"},
                                            {id: 4, path: "/images/gebze/tarihiyerler/kale/sub3.JPG", alt: "EskihisarKalesi görünüm 4"},
                                            {id: 2, path: "/images/gebze/tarihiyerler/kale/sub4.JPG", alt: "EskihisarKalesi görünüm 2"}

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
export default EskihisarKalesiPage;