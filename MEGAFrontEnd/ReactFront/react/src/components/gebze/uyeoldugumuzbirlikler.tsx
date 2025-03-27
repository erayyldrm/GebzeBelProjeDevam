import React from 'react';

const membershipData = [
    {
        logo: '/images/gebze/uyeoldugumuzbirlikler/1.jpg',
        title: 'ANADOLU MEDENİYETLER BELEDİYELER BİRLİĞİ',
        url: 'https://www.anadolubirlik.org.tr',
    },
    {
        logo: '/images/gebze/uyeoldugumuzbirlikler/2.png',
        title: 'BİRLEŞMİŞ KENTLER VE YEREL YÖNETİMLER',
        url: 'https://www.uclg.org',
    },
    {
        logo: '/images/gebze/uyeoldugumuzbirlikler/3.jpg',
        title: 'GEBZE BELEDİYELER BİRLİĞİ',
        url: 'https://www.gebzebelediyelerbirligi.org',
    },
    {
        logo: '/images/gebze/uyeoldugumuzbirlikler/4.png',
        title: 'MARMARA BELEDİYELER BİRLİĞİ',
        url: 'https://www.marmara.gov.tr',
    },
    {
        logo: '/images/gebze/uyeoldugumuzbirlikler/5.png',
        title: 'TARİHİ KENTLER BİRLİĞİ',
        url: 'https://www.tarihikentlerbirligi.org',
    },
    {
        logo: '/images/gebze/uyeoldugumuzbirlikler/6.png',
        title: 'TÜRK DÜNYASI BELEDİYELER BİRLİĞİ',
        url: 'https://www.tdbb.org.tr',
    },
    {
        logo: '/images/gebze/uyeoldugumuzbirlikler/7.png',
        title: 'TÜRKİYE BELEDİYELER BİRLİĞİ',
        url: 'https://www.tbb.gov.tr',
    },
    {
        logo: '/images/gebze/uyeoldugumuzbirlikler/8.png',
        title: 'TÜRKİYE SAĞLIKLI KENTLER BİRLİĞİ',
        url: 'https://www.skb.gov.tr',
    },
    {
        logo: '/images/gebze/uyeoldugumuzbirlikler/9.png',
        title: 'AGRICITIES ULUSLARARASI TARIM ŞEHİRLERİ BİRLİĞİ',
        url: 'https://www.agricities.org',
    }
];

const CorporateMembershipCard: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8"><br/><br/><br/><br/><br/><br/><br/>
            <div className="bg-blue-900 rounded-2xl p-2 flex justify-center items-center max-w-[466px] mx-auto">
                <img
                    src="/images/gebze/uyeoldugumuzbirlikler/gebze-belediyesi-birlik.png"
                    alt="Gebze Belediyesi"
                    className="h-24 object-contain"
                />
            </div>
            <br/>
            <div className="grid grid-cols-3 gap-8 bg-white p-8 rounded-b-2xl shadow-lg">
                {membershipData.map((org, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col"
                    >
                        <div className="p-6 flex flex-col items-center text-center flex-grow">
                            <div className="mb-4 w-48 h-48 flex items-center justify-center">
                                <img
                                    src={org.logo}
                                    alt={org.title}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex-grow">
                                {org.title}
                            </h3>
                        </div>
                        <div className="p-4">
                            <button
                                onClick={() => window.open(org.url, "_blank")}
                                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Detaylı Bilgi
                            </button>
                        </div>
                    </div>
                ))}
            </div><br/><br/>
        </div>
    );
};

export default CorporateMembershipCard;