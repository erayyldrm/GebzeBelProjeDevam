import React, { useState } from "react";

// ============= TYPE DEFINITIONS =============
interface Author {
    img: string;
    name: string;
    title?: string;
}

interface MunicipalityNews {
    img: string;
    tag: string;
    title: string;
    desc: string;
    date: string;
    author: Author;
}

interface ArticleCardProps {
    img: string;
    title: string;
    desc: string;
}

interface NewsCardProps {
    img: string;
    tag: string;
    title: string;
    desc: string;
    author: Author;
    date: string;
}

// ============= HABER KARTLARI =============

// Haber Kartı 1: Büyük Görsel Kart (Manşet Haberi)
const FeaturedNewsCard: React.FC<ArticleCardProps> = ({ img, title, desc }) => {
    return (
        <div className="relative grid min-h-[24rem] items-end overflow-hidden rounded-xl shadow-lg">
            <img src={img} alt={title} className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
            <div className="relative flex flex-col justify-end p-6">
                <span className="mb-2 inline-block bg-green-600 px-3 py-1 text-xs font-semibold text-white rounded-full">ÖNE ÇIKAN</span>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="mt-2 font-normal text-white/80">{desc}</p>
                <button className="mt-4 self-start bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                    Devamını Oku
                </button>
            </div>
        </div>
    );
};

// Haber Kartı 2: Liste Görünümü
const NewsListCard: React.FC<NewsCardProps> = ({
                                                   img,
                                                   tag,
                                                   title,
                                                   desc,
                                                   author,
                                                   date,
                                               }) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:w-1/3 h-48 md:h-auto">
                <img
                    src={img}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-4 md:p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">{tag}</span>
                    <span className="text-gray-500 text-xs">{date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{desc}</p>
                <div className="flex items-center gap-3 mt-auto">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                        <span className="text-sm text-gray-700">{author.name}</span>
                        {author.title && <p className="text-xs text-gray-500">{author.title}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Haber Kartı 3: Kompakt Kart
const CompactNewsCard: React.FC<NewsCardProps> = ({
                                                      img,
                                                      tag,
                                                      title,
                                                      date,
                                                  }) => {
    return (
        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img
                src={img}
                alt={title}
                className="w-16 h-16 object-cover rounded-md"
            />
            <div>
                <span className="text-xs font-medium text-green-600">{tag}</span>
                <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">{title}</h4>
                <span className="text-xs text-gray-500">{date}</span>
            </div>
        </div>
    );
};

// Haber Kartı 4: Blog Kartı
const MunicipalityNewsCard: React.FC<NewsCardProps> = ({
                                                           img,
                                                           tag,
                                                           title,
                                                           desc,
                                                           author,
                                                           date,
                                                       }) => {
    return (
        <div className="rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">{tag}</span>
                    <span className="text-xs text-gray-500">{date}</span>
                </div>
                <a href="#" className="block">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-green-600 transition-colors">{title}</h3>
                </a>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{desc}</p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-8 h-8 rounded-full"
                    />
                    <div>
                        <span className="text-sm font-medium text-gray-700">{author.name}</span>
                        {author.title && <p className="text-xs text-gray-500">{author.title}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

// ============= ÖRNEK VERİLER =============

// Ana belediye haberleri
const MUNICIPALITY_NEWS: MunicipalityNews[] = [
    {
        img: `/images/gebze/fotoğraflarlagebze/2.JPG`,
        tag: "ALTYAPI",
        title: "Belediye Su Arıtma Tesisi İnşaatı Tamamlandı",
        desc: "Şehrimizin günlük su ihtiyacını karşılayacak modern su arıtma tesisinin inşaatı tamamlandı. Tesis önümüzdeki ay hizmete girecek.",
        date: "10 Mayıs 2025",
        author: {
            img: `/images/logo.png`,
            name: "Gebze Belediyesi",
            title: "Belediye Basın"
        },
    },
    {
        img: `/images/Haberler/habergörselleri/cevretemizligeridönüsüm/cevre3.jpg`,
        tag: "ÇEVRE",
        title: "Dünya Çevre Haftası Gebze'de kutlandı",
        desc: "Gebze Belediye Başkanı Zinnur Büyükgöz’ün ev sahipliğinde düzenlenen Çevre Haftası etkinlikleri kapsamında ‘Çevreni Koru Geleceğe Hayat Ver’ sloganıyla düzenlenen şenlik geniş katılımla gerçekleştirildi.",
        date: "12 Mayıs 2025",
        author: {
            img: `/images/logo.png`,
            name: "Gebze Belediyesi",
            title: "Park ve Bahçeler Müdürlüğü"
        },
    },
    {
        img: `/images/Haberler/habergörselleri/egitimvegenclik/egitim3.jpg`,
        tag: "GENÇLİK",
        title: "Başkanımız gençlerle buluştu",
        desc: "Gebze Belediyesi Başkanı Zinnur Büyükgöz gençlerle hasbihal etti.",
        date: "16 Mayıs 2025",
        author: {
            img: `/images/logo.png`,
            name: "Gebze Belediyesi",
            title: "Gençlik ve SPor Müdürlüğü"
        },
    },
    {
        img: `/api/placeholder/800/500`,
        tag: "KÜLTÜR",
        title: "Belediye Kültür Merkezi Yaz Etkinlikleri Başlıyor",
        desc: "Belediyemiz Kültür Merkezi'nde düzenlenecek yaz etkinlikleri programı açıklandı. Konserler, tiyatro gösterileri ve çocuk etkinlikleri Haziran ayında başlıyor.",
        date: "18 Mayıs 2025",
        author: {
            img: `/api/placeholder/100/100`,
            name: "Ayşe Öztürk",
            title: "Kültür İşleri Müdürü"
        },
    },
    {
        img: `/api/placeholder/800/500`,
        tag: "SOSYAL DESTEK",
        title: "İhtiyaç Sahibi Ailelere Gıda Yardımı",
        desc: "Belediyemiz tarafından tespit edilen ihtiyaç sahibi 500 aileye gıda yardım paketleri dağıtıldı. Yardımlar düzenli olarak devam edecek.",
        date: "10 Mayıs 2025",
        author: {
            img: `/api/placeholder/100/100`,
            name: "Elif Yıldız",
            title: "Sosyal Hizmetler Sorumlusu"
        },
    },
    {
        img: `/api/placeholder/800/500`,
        tag: "EĞİTİM",
        title: "Belediye Kütüphanesi Yenilendi",
        desc: "Merkez Belediye Kütüphanesi, modern tasarımı ve zenginleştirilmiş kitap koleksiyonuyla yeniden hizmete açıldı. Kütüphane 24 saat hizmet verecek.",
        date: "12 Mayıs 2025",
        author: {
            img: `/api/placeholder/100/100`,
            name: "Can Yılmaz",
            title: "Eğitim İşleri Koordinatörü"
        },
    },
];

// Duyurular
const ANNOUNCEMENTS: MunicipalityNews[] = [
    {
        img: `./images/`,
        tag: "DUYURU",
        title: "Su Kesintisi Bilgilendirmesi",
        desc: "Şebeke bakım çalışmaları nedeniyle 10 Mayıs Cumartesi günü 09:00-15:00 saatleri arasında Merkez ve Yeni Mahalle'de su kesintisi yapılacaktır.",
        date: "7 Mayıs 2025 - 14:30",
        author: {
            img: `/api/placeholder/100/100`,
            name: "Ali Kaya",
            title: "Su ve Kanalizasyon Müdürü"
        },
    },
    {
        img: `/api/placeholder/800/500`,
        tag: "DUYURU",
        title: "Emlak Vergisi Son Ödeme Tarihi",
        desc: "2025 yılı Emlak Vergisi ilk taksit ödemelerinin son tarihi 31 Mayıs 2025'tir. Ödemelerinizi belediye veznelerinden ve online sistemden yapabilirsiniz.",
        date: "7 Mayıs 2025 - 13:15",
        author: {
            img: `/api/placeholder/100/100`,
            name: "Seda Demir",
            title: "Mali Hizmetler Müdürü"
        },
    },
    {
        img: `/api/placeholder/800/500`,
        tag: "DUYURU",
        title: "Kültür Merkezi Yaz Kursu Kayıtları",
        desc: "Belediyemiz Kültür Merkezi'nde düzenlenecek yaz kursları için kayıtlar 15 Mayıs'ta başlıyor. Müzik, resim ve spor branşlarında kurslar verilecektir.",
        date: "7 Mayıs 2025 - 11:45",
        author: {
            img: `/api/placeholder/100/100`,
            name: "Kemal Öztürk",
            title: "Kültür ve Sosyal İşler Müdürü"
        },
    },
];


// ============= BÖLÜMLER =============


// Duyurular Bölümü
const AnnouncementsSection: React.FC = () => {
    return (
        <section className="py-6 bg-green-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-600 text-white px-3 py-1 text-xs font-bold rounded-md">DUYURULAR</span>
                    <h2 className="text-xl font-bold text-gray-800">Önemli Bilgilendirmeler</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ANNOUNCEMENTS.map((news, index) => (
                        <NewsListCard key={index} {...news} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Manşet Haberleri Bölümü
const FeaturedNewsSection: React.FC = () => {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Öne Çıkan Haberler</h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-8">
                        <FeaturedNewsCard
                            img={MUNICIPALITY_NEWS[0].img}
                            title={MUNICIPALITY_NEWS[0].title}
                            desc={MUNICIPALITY_NEWS[0].desc}
                        />
                    </div>

                    <div className="lg:col-span-4 grid grid-cols-1 gap-4">
                        {MUNICIPALITY_NEWS.slice(1, 3).map((news, index) => (
                            <NewsListCard key={index} {...news} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};



// Ana Haberler Bölümü
const MainNewsSection: React.FC = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Belediye Haberleri</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MUNICIPALITY_NEWS.map((post, index) => (
                        <MunicipalityNewsCard key={index} {...post} />
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full transition-colors font-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                        Daha Fazla Göster
                    </button>
                </div>
            </div>
        </section>
    );
};


// ============= ANA SAYFA BİLEŞENİ =============

const MunicipalityNewsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <AnnouncementsSection />
            <FeaturedNewsSection />
            <MainNewsSection />
        </div>
    );
};

export default MunicipalityNewsPage;