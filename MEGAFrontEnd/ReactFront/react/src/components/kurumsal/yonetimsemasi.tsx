const ManagementChart = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="bg-white rounded-xl shadow-md p-4 mb-6 text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-blue-900">YÖNETİM ŞEMASI</h1>
                </div>

                {/* Management List */}
                <div className="space-y-6">
                    {/* President */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-4 md:p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Image */}
                                <div className="w-full md:w-48 lg:w-64 flex-shrink-0">
                                    <div className="relative pb-[125%]">
                                        <img
                                            className="absolute h-full w-full object-cover rounded-lg"
                                            src="/images/kurumsal/belediyemeclisi/zinnurbuyukgoz.jpg"
                                            alt="Zinnur BÜYÜKGÖZ"
                                        />
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-bold text-blue-900">Zinnur BÜYÜKGÖZ</h2>
                                    <p className="text-gray-600">Başkan</p>
                                    <hr className="my-3 border-gray-200" />

                                    <h3 className="text-gray-600 font-semibold mb-3 text-center">İlgili Müdürlükler</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Özel Kalem Müdürlüğü</p>
                                            <p className="text-sm">Dr. Yusuf ATASEVEN</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Hukuk İşleri Müdürlüğü</p>
                                            <p className="text-sm">Av. Murat TUNCA</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Teftiş Kurulu Müdürlüğü</p>
                                            <p className="text-sm">Kemal TETİK</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vice Presidents */}
                    {/* Dursun Ali ARSLAN */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-4 md:p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-48 lg:w-64 flex-shrink-0">
                                    <div className="relative pb-[125%]">
                                        <img
                                            className="absolute h-full w-full object-cover rounded-lg"
                                            src="/images/yonetimsemasi/Dursun ali .jpg"
                                            alt="Dursun Ali ARSLAN"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-bold text-blue-900">Dursun Ali ARSLAN</h2>
                                    <p className="text-gray-600">Başkan Yardımcısı</p>
                                    <hr className="my-3 border-gray-200" />

                                    <h3 className="text-gray-600 font-semibold mb-3 text-center">İlgili Müdürlükler</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Sosyal Destek Hizmetleri Müdürlüğü</p>
                                            <p className="text-sm">Mecit KESKİNOĞLU</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Zabıta Müdürlüğü</p>
                                            <p className="text-sm">Burhan KANDEMİR</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">İklim Değişikliği ve Sıfır Atık Müdürlüğü</p>
                                            <p className="text-sm">Senay ALTINTAŞ</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Temizlik İşleri Müdürlüğü</p>
                                            <p className="text-sm">Senay ALTINTAŞ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ahmet Hüseyin ÇELEBİ */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-4 md:p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-48 lg:w-64 flex-shrink-0">
                                    <div className="relative pb-[125%]">
                                        <img
                                            className="absolute h-full w-full object-cover rounded-lg"
                                            src="/images/yonetimsemasi/ahmet hüseyin.jpg"
                                            alt="Ahmet Hüseyin ÇELEBİ"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-bold text-blue-900">Ahmet Hüseyin ÇELEBİ</h2>
                                    <p className="text-gray-600">Başkan Yardımcısı</p>
                                    <hr className="my-3 border-gray-200" />

                                    <h3 className="text-gray-600 font-semibold mb-3 text-center">İlgili Müdürlükler</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Mali Hizmetler Müdürlüğü</p>
                                            <p className="text-sm">Bilgin ALTAY</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">İnsan Kaynakları ve Eğitim Müdürlüğü</p>
                                            <p className="text-sm">İmran AYYILDIZ</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Ruhsat Denetim Müdürlüğü</p>
                                            <p className="text-sm">Erhan HORUZ</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Destek Hizmetleri Müdürlüğü</p>
                                            <p className="text-sm">Carullah Recai ER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Şerif Canpolat */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-4 md:p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-48 lg:w-64 flex-shrink-0">
                                    <div className="relative pb-[125%]">
                                        <img
                                            className="absolute h-full w-full object-cover rounded-lg"
                                            src="/images/yonetimsemasi/şerif canpolat.jpg"
                                            alt="Şerif Canpolat"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-bold text-blue-900">Şerif Canpolat</h2>
                                    <p className="text-gray-600">Başkan Yardımcısı</p>
                                    <hr className="my-3 border-gray-200" />

                                    <h3 className="text-gray-600 font-semibold mb-3 text-center">İlgili Müdürlükler</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Fen İşleri Müdürlüğü</p>
                                            <p className="text-sm">Hafız ALTINTAŞ</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Park ve Bahçeler Müdürlüğü</p>
                                            <p className="text-sm">Tunacy TÜRETKEN</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Etüt ve Proje Müdürlüğü</p>
                                            <p className="text-sm">Ömer ŞAHİN</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Muharrem BALTACIOGLU */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-4 md:p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-48 lg:w-64 flex-shrink-0">
                                    <div className="relative pb-[125%]">
                                        <img
                                            className="absolute h-full w-full object-cover rounded-lg"
                                            src="/images/yonetimsemasi/muharrem baltacıoğlu.jpg"
                                            alt="Muharrem BALTACIOGLU"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-bold text-blue-900">Muharrem BALTACIOGLU</h2>
                                    <p className="text-gray-600">Başkan Yardımcısı</p>
                                    <hr className="my-3 border-gray-200" />

                                    <h3 className="text-gray-600 font-semibold mb-3 text-center">İlgili Müdürlükler</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Emlak ve İstimlak Müdürlüğü</p>
                                            <p className="text-sm">Şaban SARIAY</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Plan ve Proje Müdürlüğü</p>
                                            <p className="text-sm">Asker ÇOBAN</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Bilgi İşlem Müdürlüğü</p>
                                            <p className="text-sm">Tümay AKSAN</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">İmar ve Şehircilik Müdürlüğü</p>
                                            <p className="text-sm">Mücahit KOKSAL</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Yapı ve Kontrol Müdürlüğü</p>
                                            <p className="text-sm">Mücahit KOKSAL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mahmut YANDIK */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-4 md:p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-48 lg:w-64 flex-shrink-0">
                                    <div className="relative pb-[125%]">
                                        <img
                                            className="absolute h-full w-full object-cover rounded-lg"
                                            src="/images/yonetimsemasi/mahmut yandık.jpg"
                                            alt="Mahmut YANDIK"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-bold text-blue-900">Mahmut YANDIK</h2>
                                    <p className="text-gray-600">Başkan Yardımcısı</p>
                                    <hr className="my-3 border-gray-200" />

                                    <h3 className="text-gray-600 font-semibold mb-3 text-center">İlgili Müdürlükler</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Mezarlıklar Müdürlüğü</p>
                                            <p className="text-sm">İslam ÖZDAĞ</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">İşletme ve İştirakler Müdürlüğü</p>
                                            <p className="text-sm">Hacı KEY</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Makina İkmal, Bakım ve Onarım Müdürlüğü</p>
                                            <p className="text-sm">Dursun Ali Yayla</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Şener AKIN */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-4 md:p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-48 lg:w-64 flex-shrink-0">
                                    <div className="relative pb-[125%]">
                                        <img
                                            className="absolute h-full w-full object-cover rounded-lg"
                                            src="/images/yonetimsemasi/şener akın.jpg"
                                            alt="Şener AKIN"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-bold text-blue-900">Şener AKIN</h2>
                                    <p className="text-gray-600">Başkan Yardımcısı</p>
                                    <hr className="my-3 border-gray-200" />

                                    <h3 className="text-gray-600 font-semibold mb-3 text-center">İlgili Müdürlükler</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Veteriner İşleri Müdürlüğü</p>
                                            <p className="text-sm">Cevat ALTINTAŞ</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Afet İşleri Müdürlüğü</p>
                                            <p className="text-sm">Soner BİLİR</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Yazı İşleri Müdürlüğü</p>
                                            <p className="text-sm">Bahar ÖZALP</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mücahit BİRBEN */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-4 md:p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-48 lg:w-64 flex-shrink-0">
                                    <div className="relative pb-[125%]">
                                        <img
                                            className="absolute h-full w-full object-cover rounded-lg"
                                            src="/images/yonetimsemasi/mücahit birben.jpg"
                                            alt="Mücahit BİRBEN"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-bold text-blue-900">Mücahit BİRBEN</h2>
                                    <p className="text-gray-600">Başkan Yardımcısı</p>
                                    <hr className="my-3 border-gray-200" />

                                    <h3 className="text-gray-600 font-semibold mb-3 text-center">İlgili Müdürlükler</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Gençlik ve Spor Hizmetleri Müdürlüğü</p>
                                            <p className="text-sm">Burhannettin DEMİRCİ</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Basın Yayın ve Halkla İlişkiler Müdürlüğü</p>
                                            <p className="text-sm">Birsen VURDEM</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Kültür İşleri Müdürlüğü</p>
                                            <p className="text-sm">Hasan GÜLER</p>
                                        </div>
                                        <div className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg shadow transition-colors">
                                            <p className="font-medium">Kadın ve Aile Hizmetleri Müdürlüğü</p>
                                            <p className="text-sm">Zeynep YILDIRIM</p>
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

export default ManagementChart;