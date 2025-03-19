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
        { name: "Hasan SOBA", imageUrl: "/images/kurumsal/belediyemeclisi/hasansoba.jpg", role: "Meclis Üyesi" },
        { name: "Mahmut YANDIK", imageUrl: "/images/kurumsal/belediyemeclisi/mahmutyandik.jpg", role: "Meclis Üyesi" },
        { name: "Mustafa DEMİRHAN", imageUrl: "/images/kurumsal/belediyemeclisi/mustafademirhan.jpg", role: "Meclis Üyesi" },
        { name: "Ömer Cihan KAVAK", imageUrl: "/images/kurumsal/belediyemeclisi/ömercihankavak.jpg", role: "Meclis Üyesi" },
        { name: "Habibe ÇIRAK", imageUrl: "/images/kurumsal/belediyemeclisi/habibecırak.jpg", role: "Meclis Üyesi" },
        { name: "Selim MALKOÇ", imageUrl: "/images/kurumsal/belediyemeclisi/selimmalkoc.jpg", role: "Meclis Üyesi" },
        { name: "Mehmet Fatih İŞLEK", imageUrl: "/images/kurumsal/belediyemeclisi/mehmetfatihislek.jpg", role: "Meclis Üyesi" },
        { name: "Talip DEMİR", imageUrl: "/images/kurumsal/belediyemeclisi/talipdemir.jpg", role: "Meclis Üyesi" },
        { name: "Azim UYSAL", imageUrl: "/images/kurumsal/belediyemeclisi/azimuysal.jpg", role: "Meclis Üyesi" },
        { name: "Efari BAHÇEVAN", imageUrl: "/images/kurumsal/belediyemeclisi/efearibahcivan.jpg", role: "Meclis Üyesi" },
        { name: "Güler Şahin GENCAY", imageUrl: "/images/kurumsal/belediyemeclisi/gülersahingencay.jpg", role: "Meclis Üyesi" },
        { name: "Selamet GÜNER", imageUrl: "/images/kurumsal/belediyemeclisi/selametgüner.jpg", role: "Meclis Üyesi" },
        { name: "Birgül TOKMAK", imageUrl: "/images/kurumsal/belediyemeclisi/birgültokmak.jpg", role: "Meclis Üyesi" },
        { name: "Ahmet HÜSEYİNÇELEBİ", imageUrl: "/images/kurumsal/belediyemeclisi/ahmethüseyincelebi.jpg", role: "Meclis Üyesi" },
        { name: "Mustafa DEMİR", imageUrl: "/images/kurumsal/belediyemeclisi/mustafademir.jpg", role: "Meclis Üyesi" },
        { name: "Mustafa ÖNAL", imageUrl: "/images/kurumsal/belediyemeclisi/mustafaönal.jpg", role: "Meclis Üyesi" },
        { name: "Ayhan YILMAZ", imageUrl: "/images/kurumsal/belediyemeclisi/ayhantilmaz.jpg", role: "Meclis Üyesi" },
        { name: "Vasfiye AYDIN", imageUrl: "/images/kurumsal/belediyemeclisi/vasfiyeaydin.jpg", role: "Meclis Üyesi" },
        { name: "Şener AKIN", imageUrl: "/images/kurumsal/belediyemeclisi/senerakin.jpg", role: "Meclis Üyesi" },
        { name: "Mehmet DİNÇ", imageUrl: "/images/kurumsal/belediyemeclisi/mehmetdinc.jpg", role: "Meclis Üyesi" },
        { name: "Okan ŞEN", imageUrl: "/images/kurumsal/belediyemeclisi/okansen.jpg", role: "Meclis Üyesi" },
        { name: "Halil AYTAÇ", imageUrl: "/images/kurumsal/belediyemeclisi/halilaytac.jpg", role: "Meclis Üyesi" },
        { name: "Osman SEZER", imageUrl: "/images/kurumsal/belediyemeclisi/osmansezer.jpg", role: "Meclis Üyesi" },
        { name: "Mustafa ATEŞ", imageUrl: "/images/kurumsal/belediyemeclisi/mustafaates.jpg", role: "Meclis Üyesi" },
        { name: "Hasan ÖZDEMİR", imageUrl: "/images/kurumsal/belediyemeclisi/hasanozdemir.jpg", role: "Meclis Üyesi" },
        { name: "Emrullah BİLGİN", imageUrl: "/images/kurumsal/belediyemeclisi/emrullahbilgin.jpg", role: "Meclis Üyesi" },
        { name: "Hüseyin ÖNDER", imageUrl: "/images/kurumsal/belediyemeclisi/hüseyinonder.jpg", role: "Meclis Üyesi" },
        { name: "İrfan İRTEGÜN", imageUrl: "/images/kurumsal/belediyemeclisi/irfan.jpg", role: "Meclis Üyesi" },
        { name: "Ahmet KADI", imageUrl: "/images/kurumsal/belediyemeclisi/ahmetkadi.jpg", role: "Meclis Üyesi" },
        { name: "Gülcan AKSU", imageUrl: "/images/kurumsal/belediyemeclisi/gülcanaksu.jpg", role: "Meclis Üyesi" },
        { name: "Engin SÖZBİR", imageUrl: "/images/kurumsal/belediyemeclisi/engizsozbir.jpg", role: "Meclis Üyesi" },
        { name: "Ferman TORUN", imageUrl: "/images/kurumsal/belediyemeclisi/fermantorun.jpg", role: "Meclis Üyesi" },
        { name: "Nuran GÖKDEMİR", imageUrl: "/images/kurumsal/belediyemeclisi/nurangokdemir.jpg", role: "Meclis Üyesi" },
        { name: "Birol Elüstü", imageUrl: "/images/kurumsal/belediyemeclisi/birolelustu.jpg", role: "Meclis Üyesi" },
        { name: "Zeynep Aslan ÇAPÇI", imageUrl: "/images/kurumsal/belediyemeclisi/zeynepaslancapı.png", role: "Meclis Üyesi" },
        { name: "Yunus Umut AYDOĞDU", imageUrl: "/images/kurumsal/belediyemeclisi/yunusumutaydogdu.png", role: "Meclis Üyesi" },
        { name: "Hakan KAHRAMAN", imageUrl: "/images/kurumsal/belediyemeclisi/hakankahraman.jpg", role: "Meclis Üyesi" }];
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