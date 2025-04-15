import React from 'react';
interface CouncilMember {
    name: string;
    imageUrl: string;
    role: string;
}

const FormerMayors: React.FC = () => {
    // Council members data
    const formerMayors: CouncilMember[] = [
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


    // Person card component
    const PersonCard: React.FC<{ person: CouncilMember }> = ({ person }) => {
        return (
            <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mb-5">
                <div className="text-center">
                    <div className="relative">
                        <img
                            src={person.imageUrl}
                            alt={person.name}
                            className="w-full h-36 object-cover"
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
        <div id="pcoded" className="pcoded">
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <div className="flex flex-row gap-4">


                                            {/* Ana İçerik Alanı */}
                                            <div className="flex-1 p-4">
                                                {/* Header */}
                                                <div className="mb-8">
                                                    <div className="flex flex-col md:flex-row justify-between items-center">
                                                        <div className="mb-4 md:mb-0">
                                                            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">ESKİ BELEDİYE BAŞKANLARI</h1>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Former Mayors Grid */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                                    {formerMayors.map((mayor, index) => (
                                                        <PersonCard key={index} person={mayor} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormerMayors;