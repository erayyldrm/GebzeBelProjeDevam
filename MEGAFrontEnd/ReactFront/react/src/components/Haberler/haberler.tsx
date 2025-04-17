import React, { useState, useEffect } from 'react';

// Haber tipi tanımlaması
interface NewsItem {
    id: number;
    title: string;
    summary: string;
    content: string;
    imageUrl: string;
    date: string;
    category: string;
}

// Ana bileşen
const NewsPage: React.FC = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    // Kategoriler
    const categories = ['Şirket Haberleri', 'Duyurular', 'Etkinlikler', 'Basın Bültenleri'];

    // Haberler verisi (gerçek uygulamada API'den alınacaktır)
    useEffect(() => {
        // Burada gerçek bir API isteği yapılabilir
        // fetch('/api/news').then(res => res.json()).then(data => setNews(data))

        // Örnek veri
        const sampleNews: NewsItem[] = [
            {
                id: 1,
                title: 'Yeni Ofisimizi Açtık',
                summary: 'Şirketimiz İstanbul\'da yeni bir ofis açtı',
                content: 'Şirketimiz büyümeye devam ediyor! İstanbul Levent\'te açtığımız yeni ofisimizle müşterilerimize daha iyi hizmet verebileceğiz.',
                imageUrl: '/images/new-office.jpg',
                date: '15 Nisan 2025',
                category: 'Şirket Haberleri'
            },
            {
                id: 2,
                title: 'Yıllık Teknoloji Konferansımız',
                summary: 'Bu yılki teknoloji konferansımızın tarihi belli oldu',
                content: 'Her yıl düzenlediğimiz teknoloji konferansımız bu yıl 10-12 Haziran tarihlerinde gerçekleştirilecek. Katılımcılar için erken kayıt avantajları devam ediyor.',
                imageUrl: '/images/conference.jpg',
                date: '10 Nisan 2025',
                category: 'Etkinlikler'
            },
            {
                id: 3,
                title: 'Yeni Ürün Lansmanı',
                summary: 'Yeni ürünümüz piyasaya sürüldü',
                content: 'Uzun süredir üzerinde çalıştığımız yeni ürünümüz bugün itibariyle piyasaya sürüldü. Ürünümüz en son teknolojiyle donatılmış olup kullanıcılarımıza büyük kolaylıklar sağlayacaktır.',
                imageUrl: '/images/new-product.jpg',
                date: '5 Nisan 2025',
                category: 'Duyurular'
            },
            {
                id: 4,
                title: 'Sürdürülebilirlik Raporumuz Yayınlandı',
                summary: '2024 yılı sürdürülebilirlik raporumuz yayınlandı',
                content: 'Şirketimizin 2024 yılı sürdürülebilirlik raporu yayınlandı. Raporda çevresel etkimizi azaltmak için attığımız adımlar ve sosyal sorumluluk projelerimiz detaylı olarak yer alıyor.',
                imageUrl: '/images/sustainability.jpg',
                date: '1 Nisan 2025',
                category: 'Basın Bültenleri'
            },
        ];

        setNews(sampleNews);
        setLoading(false);
    }, []);

    // Filtreleme fonksiyonu
    const filteredNews = news.filter(item => {
        // Kategori filtreleme
        const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;

        // Arama filtreleme
        const searchMatch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.summary.toLowerCase().includes(searchQuery.toLowerCase());

        return categoryMatch && searchMatch;
    });

    return (
        <div className="news-page">
            {/* Header */}
            <header className="bg-primary text-white py-4">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Şirket Adı</h1>
                        <nav>
                            <ul className="flex space-x-6">
                                <li><a href="/" className="hover:text-secondary">Ana Sayfa</a></li>
                                <li><a href="/about" className="hover:text-secondary">Hakkımızda</a></li>
                                <li><a href="/news" className="hover:text-secondary font-bold">Haberler</a></li>
                                <li><a href="/contact" className="hover:text-secondary">İletişim</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Ana İçerik */}
            <main className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-primary">Haberler</h2>
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Haber ara..."
                            className="border rounded-lg px-4 py-2 w-64"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Kategori Filtreleme */}
                <div className="category-filter mb-8">
                    <ul className="flex space-x-2">
                        <li>
                            <button
                                className={`px-4 py-2 rounded-lg ${selectedCategory === 'all' ? 'bg-primary text-white' : 'bg-gray-200'}`}
                                onClick={() => setSelectedCategory('all')}
                            >
                                Tümü
                            </button>
                        </li>
                        {categories.map((category) => (
                            <li key={category}>
                                <button
                                    className={`px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-200'}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Haberler Listesi */}
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <p className="text-xl text-gray-600">Yükleniyor...</p>
                    </div>
                ) : filteredNews.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredNews.map((item) => (
                            <div key={item.id} className="news-card bg-white rounded-lg overflow-hidden shadow-lg">
                                <div className="news-image h-48 bg-gray-300">
                                    <img src="/api/placeholder/400/320" alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm text-gray-600">{item.date}</span>
                                        <span className="text-xs bg-secondary text-white px-2 py-1 rounded">{item.category}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-600 mb-4">{item.summary}</p>
                                    <button className="text-primary font-semibold hover:underline">
                                        Devamını Oku &rarr;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-64">
                        <p className="text-xl text-gray-600">Sonuç bulunamadı</p>
                    </div>
                )}

                {/* Sayfalama */}
                <div className="pagination flex justify-center mt-8">
                    <button className="px-4 py-2 mx-1 rounded-lg bg-gray-200 disabled:opacity-50">
                        &laquo; Önceki
                    </button>
                    <button className="px-4 py-2 mx-1 rounded-lg bg-primary text-white">1</button>
                    <button className="px-4 py-2 mx-1 rounded-lg bg-gray-200">2</button>
                    <button className="px-4 py-2 mx-1 rounded-lg bg-gray-200">3</button>
                    <button className="px-4 py-2 mx-1 rounded-lg bg-gray-200">
                        Sonraki &raquo;
                    </button>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-primary text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Şirket Adı</h3>
                            <p>Profesyonel çözümler sunan kurumsal şirketiniz.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">İletişim</h3>
                            <p>Adres: İstanbul, Türkiye</p>
                            <p>Email: info@sirketadi.com</p>
                            <p>Telefon: +90 212 123 45 67</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Bizi Takip Edin</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-white hover:text-secondary">Facebook</a>
                                <a href="#" className="text-white hover:text-secondary">Twitter</a>
                                <a href="#" className="text-white hover:text-secondary">LinkedIn</a>
                                <a href="#" className="text-white hover:text-secondary">Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                        <p>&copy; {new Date().getFullYear()} Şirket Adı. Tüm hakları saklıdır.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// CSS için Tailwind kullanılmaktadır
// Aşağıdaki CSS değişkenlerini tailwind.config.js dosyasında tanımlayabilirsiniz
/**
 * module.exports = {
 *   theme: {
 *     extend: {
 *       colors: {
 *         primary: '#2c3e50',
 *         secondary: '#3498db',
 *         accent: '#e74c3c',
 *       }
 *     }
 *   }
 * }
 */

export default NewsPage;