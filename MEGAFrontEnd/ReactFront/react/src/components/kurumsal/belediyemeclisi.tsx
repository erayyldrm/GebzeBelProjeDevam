import React from 'react';
import Sidebar from "../SideBar/sidebar.tsx";
import { kurumsal } from "../_SayfaBilgileri/Sayfalar.tsx";

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

    // Person card component
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
        <div id="pcoded" className="pcoded">
            <br /><br /><br /><br /><br /><br />
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
                                                            <h1 className="text-2xl font-bold">BELEDİYE MECLİSİ</h1>
                                                        </div>
                                                        <div>
                                                            <nav className="flex" aria-label="Breadcrumb">
                                                                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                                                    <li className="inline-flex items-center">
                                                                        <a href="index.html" className="text-gray-700 hover:text-blue-600">
                                                                            Ana Sayfa
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div className="flex items-center">
                                                                            <span className="mx-2">/</span>
                                                                            <a href="#" className="text-gray-700 hover:text-blue-600">Kurumsal</a>
                                                                        </div>
                                                                    </li>
                                                                    <li aria-current="page">
                                                                        <div className="flex items-center">
                                                                            <span className="mx-2">/</span>
                                                                            <span className="text-gray-500">Belediye Meclisi</span>
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

export default MunicipalityCouncil;