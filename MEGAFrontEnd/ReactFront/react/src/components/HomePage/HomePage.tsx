

export default function HomePage() {

    // Sample data for the different sections
    const news = [
        {
            id: 1,
            title: "Başkan Büyükgöz Koltuğu Sultana Devretti",
            image: "/api/placeholder/400/220",
            date: "23 Nisan 2025"
        },
        {
            id: 2,
            title: "41 Genç`i başarılı öğrencileri Başkan Büyükgöz`e konuk oldu",
            image: "/api/placeholder/400/220",
            date: "10 Nisan 2025"
        }
    ];

    const services = [
        {
            id: 1,
            title: "Online İşlem",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            ),
            description: "Hızlıca online işlemlerinizi yapın"
        },
        {
            id: 2,
            title: "E-Başvuru",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                    <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                    <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
            ),
            description: "Projeleriniz için başvuru yapın"
        },
        {
            id: 3,
            title: "Kent İçi Ulaşım",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="8" width="20" height="12" rx="2" ry="2"></rect>
                    <circle cx="7" cy="20" r="1"></circle>
                    <circle cx="17" cy="20" r="1"></circle>
                    <path d="M14 12h2"></path>
                    <path d="M8 12h2"></path>
                    <path d="M10 4v4"></path>
                    <path d="M14 4v4"></path>
                </svg>
            ),
            description: "Toplu taşıma ve ulaşım bilgileri"
        },
        {
            id: 4,
            title: "Sağlık Hizmetleri",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            ),
            description: "Sağlık hizmetlerine erişin"
        },
        {
            id: 5,
            title: "Kültür-Sanat",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
            ),
            description: "Etkinlik ve sanat haberleri"
        },
        {
            id: 6,
            title: "Yardım Merkezi",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
            ),
            description: "Destek ve danışma"
        }
    ];

    const announcements = [
        {
            id: 1,
            title: "65 yaş üstü vatandaşlar için önemli duyuru",
            date: "15 Nisan 2025"
        },
        {
            id: 2,
            title: "Kocaeli'de Bahar Festivali hazırlıkları başladı",
            date: "12 Nisan 2025"
        },
        {
            id: 3,
            title: "Emlak vergisi son ödeme tarihi uzatıldı",
            date: "10 Nisan 2025"
        }
    ];

    const events = [
        {
            id: 1,
            title: "Orta Asya'dan Anadolu'ya Ortakmiras",
            date: "29 Nisan",
            location: "Kültür Merkezi",
            image: "/api/placeholder/300/180",
            time: "18:00"
        },
        {
            id: 2,
            title: "Bahar Konseri",
            date: "30 Nisan",
            location: "Kent Meydanı",
            image: "/api/placeholder/300/180",
            time: "19:30"
        }
    ];

    const discoverCategories = [
        {
            id: 1,
            title: "KOCAELİ'Yİ KEŞFET",
            image: "/api/placeholder/400/250"
        },
        {
            id: 2,
            title: "GEZECEK",
            image: "/api/placeholder/200/140"
        },
        {
            id: 3,
            title: "MÜZELER",
            image: "/api/placeholder/200/140"
        },
        {
            id: 4,
            title: "ROTALAR",
            image: "/api/placeholder/200/140"
        },
        {
            id: 5,
            title: "ORMANLAR",
            image: "/api/placeholder/200/140"
        }
    ];

    const projects = [
        {
            id: 1,
            title: "Kandıra Sahil Çevresi Düzenleme Projesi",
            image: "/api/placeholder/280/160"
        },
        {
            id: 2,
            title: "Akçakoca İspinoz Köprüsü Yenileme Çalışması",
            image: "/api/placeholder/280/160"
        },
        {
            id: 3,
            title: "Derince Mahallesi Kreş ve Spor Merkezi",
            image: "/api/placeholder/280/160"
        },
        {
            id: 4,
            title: "Körfez Yol Genişletme Çalışması",
            image: "/api/placeholder/280/160"
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section with Search */}
            <section className="relative h-96 w-full bg-blue-900 overflow-hidden">
                <video
                    className="absolute w-full h-full object-cover"
                    src="/gebze.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-b"></div>
            </section>


            {/* News Section */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-blue-800">GÜNCEL HABERLER</h2>
                    <a href="#" className="text-sm text-blue-500 hover:underline">Tüm Haberler</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {news.map(item => (
                        <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.date}</p>
                            </div>
                        </div>
                    ))}

                    <div className="bg-gray-100 rounded-lg p-6">
                        <h3 className="font-bold text-lg mb-4">Popüler Linkler</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <p className="text-sm">Encümen kararları son yayımlanan duyurular</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <p className="text-sm">Büyükşehir, sınırlarında tüm yapı ruhsatlarını onaylıyor</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <p className="text-sm">Koronavirüs bilgilendirme anketi: İl Sağlık Müdürlüğü</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <p className="text-sm">Yol Ağaçları: Kurumuş nedenler için Teknik Rapor</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <p className="text-sm">Proje başvuruları için son tarih</p>
                            </li>
                        </ul>
                        <button className="mt-4 text-sm text-blue-500 hover:underline">Daha Fazlası</button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-blue-50 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-blue-800">KOLAY ERİŞİM</h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {services.map(service => (
                            <div key={service.id} className="bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition">
                                <div className="mb-3 w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="font-bold text-sm mb-1">{service.title}</h3>
                                <p className="text-xs text-gray-500">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Announcements & Events Section */}
            <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Announcements */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-blue-800"> DUYURULAR</h2>
                        <a href="#" className="text-sm text-blue-500 hover:underline">Tüm Duyurular</a>
                    </div>

                    <div className="space-y-4">
                        {announcements.map(item => (
                            <div key={item.id} className="flex items-start border-b pb-4">
                                <div className="text-blue-500 mr-3 mt-1">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-sm">{item.title}</p>
                                    <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="#" className="mt-4 inline-block text-sm text-blue-500 hover:underline">Daha Fazlası</a>
                </div>

                {/* Events */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-blue-800">KOCAELİ'DE ETKİNLİKLER</h2>
                        <a href="#" className="text-sm text-blue-500 hover:underline">Tüm Etkinlikler</a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {events.map(event => (
                            <div key={event.id} className="bg-white rounded-lg shadow overflow-hidden">
                                <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="bg-blue-100 text-blue-800 text-center py-1 px-3 rounded-lg">
                                            <div className="font-bold text-lg">{event.date.split(" ")[0]}</div>
                                            <div className="text-xs">{event.date.split(" ")[1] || ""}</div>
                                        </div>
                                        <span className="text-sm text-blue-500">{event.time}</span>
                                    </div>
                                    <h3 className="font-bold mb-1">{event.title}</h3>
                                    <p className="text-xs text-gray-500">{event.location}</p>

                                    <div className="mt-4 flex justify-between text-xs text-gray-500">
                                        <button className="flex items-center">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                            </svg>
                                            <span className="ml-1">Beğen</span>
                                        </button>
                                        <button className="flex items-center">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                            </svg>
                                            <span className="ml-1">Yorum</span>
                                        </button>
                                        <button className="flex items-center">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="18" cy="5" r="3"></circle>
                                                <circle cx="6" cy="12" r="3"></circle>
                                                <circle cx="18" cy="19" r="3"></circle>
                                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                            </svg>
                                            <span className="ml-1">Paylaş</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Discover Section */}
            <section className="bg-gray-100 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-blue-800">KOCAELİ'Yİ KEŞFET</h2>
                        <div className="flex space-x-2">
                            <button className="bg-white px-3 py-1 rounded border text-sm">Turistik</button>
                            <button className="bg-white px-3 py-1 rounded border text-sm">Kültür-Sanat</button>
                            <button className="bg-white px-3 py-1 rounded border text-sm">Spor</button>
                            <button className="bg-white px-3 py-1 rounded border text-sm">Engelsiz ve Yaşlılar</button>
                            <button className="bg-white px-3 py-1 rounded border text-sm">Sağlık ve Temizlik</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="relative rounded-lg overflow-hidden h-64 md:col-span-1 md:row-span-2">
                            <img src={discoverCategories[0].image} alt={discoverCategories[0].title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <h3 className="text-white font-bold text-xl">{discoverCategories[0].title}</h3>
                            </div>
                        </div>

                        {discoverCategories.slice(1).map(category => (
                            <div key={category.id} className="relative rounded-lg overflow-hidden h-32">
                                <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                    <h3 className="text-white font-bold">{category.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Projects Section */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-blue-800">DEVAM EDEN PROJELER</h2>
                        <div className="flex space-x-2 text-sm">
                            <button className="bg-blue-500 text-white px-3 py-1 rounded">Tamamlananlar</button>
                            <button className="bg-white px-3 py-1 rounded border">Devam Eden</button>
                            <button className="bg-white px-3 py-1 rounded border">İhale</button>
                            <button className="bg-white px-3 py-1 rounded border">Planlama ve Tasarı</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {projects.map(project => (
                            <div key={project.id} className="bg-white rounded-lg shadow overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-36 object-cover" />
                                <div className="p-3">
                                    <h3 className="font-bold text-sm">{project.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}