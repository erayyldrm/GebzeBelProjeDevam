import React, { useState } from 'react';
import { Search, Calendar, ChevronRight, Bell, Filter, Eye, TreePine, Users, Heart, Music, Car, Leaf } from 'lucide-react';

interface Duyuru {
    id: number;
    baslik: string;
    ozet: string;
    tarih: string;
    kategori: string;
    okunmaSayisi: number;
    onemli: boolean;
}

const DuyurularSayfasi: React.FC = () => {
    const [aramaMetni, setAramaMetni] = useState('');
    const [secilenKategori, setSecilenKategori] = useState('Tümü');

    const duyurular: Duyuru[] = [
        {
            id: 1,
            baslik: "Gebze'de Yeni Park Alanları Açılıyor",
            ozet: "Şehrimizin çeşitli bölgelerinde yeni park ve yeşil alanlar vatandaşlarımızın hizmetine sunuluyor.",
            tarih: "2024-05-20",
            kategori: "Çevre",
            okunmaSayisi: 1250,
            onemli: true
        },
        {
            id: 2,
            baslik: "Belediye Meclis Toplantısı Duyurusu",
            ozet: "Mayıs ayı olağan meclis toplantısı 25 Mayıs Cumartesi günü saat 14:00'da yapılacaktır.",
            tarih: "2024-05-18",
            kategori: "Toplantı",
            okunmaSayisi: 890,
            onemli: false
        },
        {
            id: 3,
            baslik: "Sosyal Yardım Başvuruları Başladı",
            ozet: "2024 yılı sosyal yardım başvuruları için gerekli belgeler ve başvuru koşulları açıklandı.",
            tarih: "2024-05-15",
            kategori: "Sosyal Hizmetler",
            okunmaSayisi: 2340,
            onemli: true
        },
        {
            id: 4,
            baslik: "Kültür Merkezi Etkinlik Programı",
            ozet: "Haziran ayında gerçekleştirilecek kültürel etkinlikler ve konser programı duyuruldu.",
            tarih: "2024-05-12",
            kategori: "Kültür",
            okunmaSayisi: 675,
            onemli: false
        },
        {
            id: 5,
            baslik: "Yol Bakım ve Onarım Çalışmaları",
            ozet: "Şehrin ana arterlerinde başlayacak asfalt ve bakım çalışmaları hakkında bilgilendirme.",
            tarih: "2024-05-10",
            kategori: "Ulaşım",
            okunmaSayisi: 1890,
            onemli: false
        },
        {
            id: 6,
            baslik: "Çevre Temizlik Kampanyası",
            ozet: "Vatandaşlarımız ile birlikte gerçekleştireceğimiz büyük çevre temizlik kampanyası başlıyor.",
            tarih: "2024-05-08",
            kategori: "Çevre",
            okunmaSayisi: 1456,
            onemli: true
        }
    ];

    const kategoriler = ['Tümü', 'Çevre', 'Toplantı', 'Sosyal Hizmetler', 'Kültür', 'Ulaşım'];

    const getKategoriIcon = (kategori: string) => {
        switch (kategori) {
            case 'Çevre':
                return TreePine;
            case 'Toplantı':
                return Users;
            case 'Sosyal Hizmetler':
                return Heart;
            case 'Kültür':
                return Music;
            case 'Ulaşım':
                return Car;
            default:
                return Bell;
        }
    };

    const getDuyuruIcon = (baslik: string, kategori: string) => {
        if (baslik.toLowerCase().includes('park') || baslik.toLowerCase().includes('yeşil')) {
            return TreePine;
        } else if (baslik.toLowerCase().includes('temizlik') || baslik.toLowerCase().includes('çevre')) {
            return Leaf;
        } else if (baslik.toLowerCase().includes('meclis') || baslik.toLowerCase().includes('toplantı')) {
            return Users;
        } else if (baslik.toLowerCase().includes('sosyal') || baslik.toLowerCase().includes('yardım')) {
            return Heart;
        } else if (baslik.toLowerCase().includes('kültür') || baslik.toLowerCase().includes('etkinlik') || baslik.toLowerCase().includes('konser')) {
            return Music;
        } else if (baslik.toLowerCase().includes('yol') || baslik.toLowerCase().includes('ulaşım') || baslik.toLowerCase().includes('asfalt')) {
            return Car;
        } else {
            return getKategoriIcon(kategori);
        }
    };

    const filtrelenmisDuyurular = duyurular.filter(duyuru => {
        const aramaUygun = duyuru.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
            duyuru.ozet.toLowerCase().includes(aramaMetni.toLowerCase());
        const kategoriUygun = secilenKategori === 'Tümü' || duyuru.kategori === secilenKategori;
        return aramaUygun && kategoriUygun;
    });

    const formatTarih = (tarih: string) => {
        return new Date(tarih).toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                            <Bell className="w-6 h-6 text-blue-600" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Duyurular</h1>
                        <p className="text-base text-gray-600 max-w-xl mx-auto">
                            Gebze Belediyesi'nin güncel duyuru ve haberlerini takip edin
                        </p>
                    </div>

                    {/* Search and Filter */}
                    <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                            {/* Search */}
                            <div className="relative flex-1 max-w-md group">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 transition-all duration-300 group-hover:text-blue-500 group-focus-within:text-blue-500" />
                                <input
                                    type="text"
                                    placeholder="Duyurularda arama yapın..."
                                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md transform hover:scale-105 focus:scale-105"
                                    value={aramaMetni}
                                    onChange={(e) => setAramaMetni(e.target.value)}
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium text-gray-700">Kategori:</span>
                                <div className="relative group">
                                    <Filter className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-3.5 h-3.5 transition-all duration-300 group-hover:text-blue-500" />
                                    <select
                                        className="pl-8 pr-6 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm appearance-none cursor-pointer text-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md transform hover:scale-105 focus:scale-105"
                                        value={secilenKategori}
                                        onChange={(e) => setSecilenKategori(e.target.value)}
                                    >
                                        {kategoriler.map(kategori => (
                                            <option key={kategori} value={kategori}>{kategori}</option>
                                        ))}
                                    </select>

                                    {/* Custom dropdown arrow with animation */}
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-gray-400 transition-all duration-300 group-hover:text-blue-500 group-focus-within:rotate-180"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid gap-6">
                    {/* Important Announcements */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-1 h-8 bg-red-500 mr-3"></span>
                            Önemli Duyurular
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filtrelenmisDuyurular.filter(d => d.onemli).map(duyuru => {
                                const IconComponent = getDuyuruIcon(duyuru.baslik, duyuru.kategori);
                                return (
                                    <div key={duyuru.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-red-500">
                                        <div className="p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">
                                                    {duyuru.kategori}
                                                </span>
                                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                                    ÖNEMLİ
                                                </span>
                                            </div>
                                            <div className="flex items-start space-x-3 mb-2">
                                                <IconComponent className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                                                <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
                                                    {duyuru.baslik}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                                                {duyuru.ozet}
                                            </p>
                                            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    {formatTarih(duyuru.tarih)}
                                                </div>
                                                <div className="flex items-center">
                                                    <Eye className="w-4 h-4 mr-1" />
                                                    {duyuru.okunmaSayisi}
                                                </div>
                                            </div>
                                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-sm">
                                                Devamını Oku
                                                <ChevronRight className="w-4 h-4 ml-1" />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* All Announcements */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-1 h-8 bg-blue-500 mr-3"></span>
                            Tüm Duyurular
                        </h2>
                        <div className="space-y-6">
                            {filtrelenmisDuyurular.map(duyuru => {
                                const IconComponent = getDuyuruIcon(duyuru.baslik, duyuru.kategori);
                                return (
                                    <div key={duyuru.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="md:flex">
                                            <div className="p-6 flex-1">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center space-x-2">
                                                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                                            {duyuru.kategori}
                                                        </span>
                                                        {duyuru.onemli && (
                                                            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                                                ÖNEMLİ
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <Calendar className="w-4 h-4 mr-1" />
                                                        {formatTarih(duyuru.tarih)}
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3 mb-3">
                                                    <IconComponent className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                                    <h3 className="text-xl font-semibold text-gray-900">
                                                        {duyuru.baslik}
                                                    </h3>
                                                </div>
                                                <p className="text-gray-600 mb-4">
                                                    {duyuru.ozet}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <Eye className="w-4 h-4 mr-1" />
                                                        {duyuru.okunmaSayisi} görüntülenme
                                                    </div>
                                                    <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                                                        Devamını Oku
                                                        <ChevronRight className="w-4 h-4 ml-1" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {filtrelenmisDuyurular.length === 0 && (
                            <div className="text-center py-12">
                                <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Duyuru bulunamadı</h3>
                                <p className="text-gray-500">Arama kriterlerinize uygun duyuru bulunmamaktadır.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DuyurularSayfasi;