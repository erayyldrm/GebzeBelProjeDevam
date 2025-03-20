import React from 'react';
interface CouncilMember {
    name: string;
    imageUrl: string;
    role: string;
}
const MunicipalityCouncil: React.FC = () => {
    // Mayor data
    const mayor: CouncilMember = {
        name: "Zinnur BÜYÜKGÖZ",
        imageUrl: "/images/kurumsal/belediyemeclisi/zinnurbuyukgoz.jpg",
        role: "Başkan"
    };
    // Council members data
    const councilMembers: CouncilMember[] = [
        { name: "Adnan KÖŞKER", imageUrl: "/images/kurumsal/eskibaskanlar/Adnan-KOSKER.jpg", role: "2009 - 2019" },
        { name: "İbrahim Pehlivan", imageUrl: "/images/kurumsal/eskibaskanlar/Ibrahim-PEHLIVAN.jpg", role: "2004-2009" },
        { name: "Ahmet PENBEGÜLLÜ", imageUrl: "/images/kurumsal/eskibaskanlar/Ahmet-PENBEGULLU.jpg", role: "1994 - 2004" },
        { name: "Mehmet EMİN AKIN", imageUrl: "/images/kurumsal/eskibaskanlar/Mehmet-Emin-AKIN.jpg", role: "1989 - 1994" },
        { name: "Bülent ATASAYAN", imageUrl: "/images/kurumsal/eskibaskanlar/Bulent-ATASAYAN.jpg", role: "1984 - 1987" },
        { name: "Bnb.Erol SANVER", imageUrl: "/images/kurumsal/eskibaskanlar/Bnb.Erol-SANVER.jpg", role: "1980 - 4 ay" },
        { name: "Kubilay İlgün", imageUrl: "/images/kurumsal/eskibaskanlar/Kubilay-ILGUN.jpg", role: "1980 - 1983" },
        { name: "Sedat Tüze", imageUrl: "/images/kurumsal/eskibaskanlar/Sedat-TUZE.jpg", role: "1977 - 1980" },
        { name: "Ziya FIRAT", imageUrl: "/images/kurumsal/eskibaskanlar/Ziya-FIRAT.jpg", role: "1973 - 1977" },
        { name: "Mehmet ÜSTÜNDAĞ", imageUrl: "/images/kurumsal/eskibaskanlar/Mehmet-USTUNDAG.jpg", role: "1963 - 1973" },
        { name: "Selahattin Altaş", imageUrl:"/images/kurumsal/eskibaskanlar/Selahattin-ALTAS.jpg", role: "1960 - 1963" },
        { name: "Hüseyin ÖZGEN", imageUrl: "/images/kurumsal/eskibaskanlar/Huseyin-OZGEN.jpg", role: "1950 - 1960" },
        { name: "Hayri GÖKÇEN", imageUrl: "/images/kurumsal/eskibaskanlar/Hayri.GOKCEN.jpg", role: "1945 - 1950" },
        { name: "Esat SAYDUK", imageUrl: "/images/kurumsal/eskibaskanlar/Esat-SAYDUK.jpg", role: "1939 - 1945" },
        { name: "Ahmet ELDEM", imageUrl: "/images/kurumsal/eskibaskanlar/Ahmet-ELDEM.jpg", role: "1935 - 1939" },
        { name: "Lütfü BEY", imageUrl: "/images/kurumsal/eskibaskanlar/Lutfu-BEY.jpg", role: "1933 - 1935" },
        { name: "Bekir KANDİLCİ", imageUrl: "/images/kurumsal/eskibaskanlar/Bekir-KANDILCI.jpg", role:"1932 - 1933" },
        { name: "İsmail ARTAR", imageUrl:"/images/kurumsal/eskibaskanlar/Ismail-ARTAR.jpg", role: "1930 - 1932" },
        { name: "Mustafa Zeki TOROS", imageUrl: "/images/kurumsal/eskibaskanlar/Mustafa-Zeki-TOROS.jpg", role: "1928 - 1930" },
        { name: "Arif Çavuş SÖĞÜTLÜ", imageUrl: "/images/kurumsal/eskibaskanlar/Arif-CAVUS-SOGUTLU.jpg", role: "1926 - 1928" },
        { name: "İzzet BEY", imageUrl: "/images/kurumsal/eskibaskanlar/Izzet-BEY.jpg", role: "1923 - 1924" },
        { name: "Hacı Mehmet BEY", imageUrl: "/images/kurumsal/eskibaskanlar/Hacı-Mehmet-BEY.jpg", role: "1922 - 1923" },
        { name: "Sandıkçı Hüzeyin Efe", imageUrl: "/images/kurumsal/eskibaskanlar/Sandikci-Huzeyin-EFE.jpg", role: "1921 - 1922" },
        { name: "Nazmi Çavuş", imageUrl:"/images/kurumsal/eskibaskanlar/Nazmi-CAVUS.jpg", role: "1920 - 1921" },
        { name: "Cerrah Apdullah EFENDİ", imageUrl: "/images/kurumsal/eskibaskanlar/Cerrah-Abdullah-EFENDİ.jpg", role: "1919 - 1920" },
        { name: "Halil AKİFOĞlU", imageUrl: "/images/kurumsal/eskibaskanlar/Halil-AKIFOGLU.jpg", role: "1918 - 1919" },
        { name: "Nalbant Kadir USTA", imageUrl: "/images/kurumsal/eskibaskanlar/Nalbat-Kadir-USTA.jpg", role: "1916 - 1918" },
        { name: "Vodinalı Hafız BEY", imageUrl: "/images/kurumsal/eskibaskanlar/Vodinalı-Hafiz-BEY.jpg", role: "1915 - 1916" },
        { name: "Hafız Ali DÖNMEZ", imageUrl: "/images/kurumsal/eskibaskanlar/Hafiz-Ali-DONMEZ.jpg", role: "1914 - 1915" },
        { name: "Sapçı Mehmet Çavuş", imageUrl: "/images/kurumsal/eskibaskanlar/Sapci-Mehmet-CAVUS.jpg", role: "1911 - 1914" }];
    // Person card component for reusability
    const PersonCard: React.FC<{ person: CouncilMember; isPresident?: boolean }> = ({ person, isPresident = false }) => {
        const cardClasses = isPresident ? "max-w-md mb-10" : "max-w-xs mb-5";
        const imgClasses = isPresident ? "h-[50px] w-[300px] object-cover" : "h-36 w-full object-cover";
        return (
            <div className={`bg-white rounded-lg shadow-md overflow-hidden ${cardClasses}`}>
                <div className="text-center">
                    <div className="relative">
                        <img
                            src={person.imageUrl}
                            alt={person.name}
                            className={imgClasses}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/api/placeholder/250/230";
                            }}
                        />
                    </div>
                    <div className="p-4">
                        <h4 className="text-lg font-medium text-gray-800">{person.name}</h4>
                        <div className="mt-2">
                            <span className="text-gray-600 font-medium">{person.role}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-2xl font-bold">BELEDİYE MECLİSİ</h1>
                    </div>
                    <div>
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <a href="index.html" className="text-gray-700 hover:text-blue-600">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        <a href="#" className="ml-1 text-gray-700 hover:text-blue-600 md:ml-2">Kurumsal</a>
                                    </div>
                                </li>
                                <li aria-current="page">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="ml-1 text-gray-500 md:ml-2">Belediye Meclisi</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Mayor Section */}
            <div className="flex justify-center mb-8">
                <PersonCard person={mayor} isPresident={true} />
            </div>

            {/* Council Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {councilMembers.map((member, index) => (
                    <PersonCard key={index} person={member} />
                ))}
            </div>
        </div>
    );
};
export default MunicipalityCouncil;