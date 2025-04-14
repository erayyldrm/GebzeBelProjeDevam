import {DropdownItem} from './types.tsx';
import {
    FiActivity,
    FiAward, FiBook, FiBookOpen, FiCamera,
    FiCoffee,
    FiClipboard,
    FiEye, FiGlobe, FiHeart, FiHome,
    FiLayout, FiMap, FiMapPin, FiRefreshCw,
    FiTarget,
    FiTool,
    FiUser,
    FiUserCheck, FiDollarSign, FiEdit, FiPhone, FiInfo,
    FiUsers,
    FiCreditCard,
    FiFileText
} from 'react-icons/fi';

export const gebze: DropdownItem[] = [
    {
        icon: <FiBookOpen className="text-gray-800" size={24}/>,
        title: 'TARİHÇE',
        description: 'Gebze Tarihçesi hakkında bilgi',
        path:'/gebze/tarihce'
    },
    {
        icon: <FiMap className="text-gray-800"/>,
        title: 'BUGÜNKÜ GEBZE',
        description: 'Bugünkü Gebze hakkında bilgi',
        path:'/gebze/bugunkugebze'},
    {
        icon: <FiMapPin className="text-gray-800"/>,
        title: 'MAHALLE MUHTARLARI',
        description: 'Mahalle Muhtarları hakkında bilgi',
        path:'/gebze/muhtarlar'
    },
    {
        icon: <FiMap className="text-gray-800"/>,
        title: 'TARİHİ YERLER',
        description: 'Tarihi Yerler hakkında bilgi',
        path:'/gebze/tarihiyerler'
    },
    {
        icon: <FiCamera className="text-gray-800"/>,
        title: 'FOTOĞRAFLARLA GEBZE',
        description: 'Gebze Fotoğrafları hakkında bilgi',
        path:'/gebze/fotograflarlaGebze'
    },
    {
        icon: <FiGlobe className="text-gray-800"/>,
        title: 'KARDEŞ ŞEHİRLER',
        description: 'Kardeş Şehirler hakkında bilgi',
        path:'/gebze/kardessehirler'
    },
    {
        icon: <FiUsers className="text-gray-800"/>,
        title: 'ÜYE OLDUĞUMUZ BİRLİKLER',
        description: 'Üye Olduğumuz Birlikler hakkında bilgi',
        path:'/gebze/uyeoldugumuzbirlikler'
    },
    {icon: <FiMap className="text-gray-800"/>,
        title: '360 SANAL TUR',
        description: 'Gebze 360 Sanal Tur',
        path:'/gebze/360sanaltur'
    },

];
export const kurumsal: DropdownItem[] = [

    {
        icon: <FiUsers className="text-gray-800" size={20}/>,
        title: 'BAŞKAN',
        description: 'Başkan hakkında bilgi',
        path: '/kurumsal/baskan'// onClick yerine pathname kullanın

    },
    {
        icon: <FiEye className="text-gray-800" size={20}/>,
        title: 'VİZYONUMUZ',
        description: 'Vizyonumuz hakkında bilgi',
        path: '/kurumsal/vizyon_2'

    },
    {
        icon: <FiTarget className="text-gray-800" size={20}/>,
        title: 'MİSYONUMUZ',
        description: 'Misyonumuz hakkında bilgi',
        path: '/kurumsal/misyon_2'
    },
    {
        icon: <FiAward className="text-gray-800" size={20}/>,
        title: 'İLKELERİMİZ',
        description: 'İlkelerimiz hakkında bilgi',
        path: '/kurumsal/ilkelerimiz_2'
    },
    {
        icon: <FiUsers className="text-gray-800" size={20}/>,
        title: 'BELEDİYE MECLİSİ',
        description: 'Belediye Meclisi hakkında bilgi',
        path: '/kurumsal/belediyemeclisi'
    },
    {
        icon: <FiLayout className="text-gray-800" size={20}/>,
        title: 'YÖNETİM ŞEMASI',
        description: 'Yönetim Şeması hakkında bilgi',
        path: '/kurumsal/yonetimsemasi'
    },
    {
        icon: <FiUsers className="text-gray-800" size={20}/>,
        title: 'BAŞKAN YARDIMCILARI',
        description: 'Başkan Yardımcıları hakkında bilgi',
        path:'/kurumsal/baskanyardimcilari'
    },
    {
        icon: <FiUser className="text-gray-800" size={20}/>,
        title: 'BAŞKAN DANIŞMANLARI',
        description: 'Başkan Danışmanları hakkında bilgi',
        path: '/kurumsal/baskandanismanlari'
    },
    {
        icon: <FiFileText className="text-gray-800" size={20}/>,
        title: 'MÜDÜRLÜKLER',
        description: 'Müdürlükler hakkında bilgi',
        path:'/kurumsal/mudurlukler'
    },
    {
        icon: <FiUsers className="text-gray-800" size={20}/>,
        title: 'ESKİ BAŞKANLAR',
        description: 'Eski Başkanlar hakkında bilgi',
        path:'/kurumsal/eskibaskanlar'
    },
    {
        icon: <FiUserCheck className="text-gray-800" size={20}/>,
        title: 'ARABULUCULUK KOMİSYONU',
        description: 'Arabuluculuk Komisyonu hakkında bilgi',
        path:'/kurumsal/arabuluculuk'
    },
    {
        icon: <FiUserCheck className="text-gray-800" size={20}/>,
        title: 'ETİK KOMİSYONU',
        description: 'Etik Komisyonu hakkında bilgi',
        path: '/kurumsal/etikkomisyonu'
    },
    {
        icon: <FiClipboard className="text-gray-800" size={20}/>,
        title: 'MECLİS KARALARI',
        description: 'Meclis Kararları hakkında bilgi',
        path: '/kurumsal/mecliskararlari'
    },
    {
        icon: <FiFileText className="text-gray-800" size={20}/>,
        title: 'KURUMSAL KİMLİK',
        description: 'Kurumsal Kimlik hakkında bilgi',
        path: '/kurumsal/kurumsalkimlik'
    },
    {
        icon: <FiFileText className="text-gray-800" size={20}/>,
        title: 'KURUMSAL RAPORLAR',
        description: 'Kurumsal Raporlar hakkında bilgi',
        path: '/kurumsal/raporlar'
    },
    {
        icon: <FiFileText className="text-gray-800" size={20}/>,
        title: 'KURUMSAL DÖKÜMANLAR',
        description: 'Kurumsal Dökümanlar hakkında bilgi',
        path: '/kurumsal/kurumsaldoc'
    },

];

export const hizmetler: DropdownItem[] = [
    {
        icon: <FiTool className="text-gray-800"/>,
        title: 'ATÖLYELER',
        description: 'Atölye çalışmaları hakkında bilgi'
    },
    {
        icon: <FiHome className="text-gray-800"/>,
        title: 'BEBEK VE ÇOCUK BAKIM EVİ',
        description: 'Bebek ve çocuk bakımı hakkında bilgi'
    },
    {
        icon: <FiBook className="text-gray-800"/>,
        title: 'EĞİTİMLER',
        description: 'Eğitim programları hakkında bilgi'
    },
    {
        icon: <FiHeart className="text-gray-800"/>,
        title: 'EVLENDİRME',
        description: 'Evlendirme işlemleri hakkında bilgi'
    },
    {
        icon: <FiRefreshCw className="text-gray-800"/>,
        title: 'GERİ DÖNÜŞÜM',
        description: 'Geri dönüşüm hizmetleri hakkında bilgi'
    },
    {
        icon: <FiActivity className="text-gray-800"/>,
        title: 'GÜREŞ',
        description: 'Güreş etkinlikleri hakkında bilgi'
    },
    {
        icon: <FiBookOpen className="text-gray-800"/>,
        title: 'KÜTÜPHANE',
        description: 'Kütüphane hizmetleri hakkında bilgi'
    },
    {icon: <FiMapPin className="text-gray-800"/>, title: 'MERKEZLER', description: 'Merkezler hakkında bilgi'},
    {
        icon: <FiCoffee className="text-gray-800"/>,
        title: 'MESİRE ALANI',
        description: 'Mesire alanları hakkında bilgi'
    },
];
export const eBelediye: DropdownItem[] = [
    {
        icon: <FiDollarSign className="text-gray-800"/>,
        title: 'VERGİ İŞLEMLERİ',
        description: 'Vergi işlemleri hakkında bilgi'
    },
    {
        icon: <FiCreditCard className="text-gray-800"/>,
        title: 'VERGİ & BORÇ ÖDEME',
        description: 'Vergi ve borç ödeme işlemleri'
    },
    {icon: <FiEdit className="text-gray-800"/>, title: 'E-BEYAN', description: 'E-Beyan işlemleri'},
    {
        icon: <FiClipboard className="text-gray-800"/>,
        title: 'E-BEYAN BİLDİRİM TAKİP',
        description: 'E-Beyan bildirim takip işlemleri'
    },
    {
        icon: <FiPhone className="text-gray-800"/>,
        title: 'GEBZE İLETİŞİM MERKEZİ',
        description: 'Gebze iletişim merkezi hakkında bilgi'
    },
    {icon: <FiFileText className="text-gray-800"/>, title: 'BAŞVURU FORMU', description: 'Başvuru formu işlemleri'},
    {icon: <FiFileText className="text-gray-800"/>, title: 'BAŞVURU TAKİP', description: 'Başvuru takip işlemleri'},
    {
        icon: <FiInfo className="text-gray-800"/>,
        title: 'BİLGİ EDİNME (CİMER)',
        description: 'Bilgi edinme işlemleri (CİMER)'
    },
];

export const yayınlarımız: DropdownItem[] = [
    {
        icon: <FiDollarSign className="text-gray-800"/>,
        title: 'GEBZE BELEDİYESİ PROJELERİ',
        description: 'Gerçekleştirilen projeler',
        path: '/yayin/projeler'
    },
    {
        icon: <FiCreditCard className="text-gray-800"/>,
        title: 'GEBZE MANŞET',
        description: 'Vergi ve borç ödeme işlemleri',
        path: '/yayin/manset'
    },
    {   icon: <FiEdit className="text-gray-800"/>,
        title: 'KÜLTÜR YAYINLARI',
        description: 'Kültürel yayınlanan belgeler ',
        path: '/yayin/kultur'
    }
];