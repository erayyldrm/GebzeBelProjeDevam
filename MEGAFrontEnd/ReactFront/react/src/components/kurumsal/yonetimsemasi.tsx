const ManagementChart = () => {
    return (
        <div id="pcoded" className="pcoded">
            <div className="pcoded-container navbar-wrapper">
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <div className="flex flex-col lg:flex-row gap-4">
                                            {/* Ana İçerik Alanı */}
                                            <div className="flex-1 p-2 md:p-4">
                                                {/* Centered Header */}
                                                <div className="shadow p-3 md:p-4 bg-white rounded-xl text-center">
                                                    <h1 className="text-xl md:text-3xl font-bold">YÖNETİM ŞEMASI</h1>
                                                </div>
                                                {/* Added spacing between header and content */}
                                                <div className="my-4 md:my-6"></div>
                                                {/* Main Content */}
                                                <div className="shadow-lg rounded-lg">
                                                    <div className="p-2 md:p-4">
                                                        <div className="col-md-12">
                                                            <ul className="space-y-3 md:space-y-4">
                                                                {/* Başkan */}
                                                                <li>
                                                                    <div className="bg-white rounded-lg shadow-md p-3 md:p-4">
                                                                        <div className="flex flex-col sm:flex-row items-start gap-3">
                                                                            <div className="flex-shrink-0 mx-auto sm:mx-0 w-full sm:w-auto">
                                                                                <div className="relative pb-[125%] sm:pb-0 sm:h-40 md:h-64 sm:w-40 md:w-64">
                                                                                    <img
                                                                                        className="absolute h-full w-full object-cover rounded-lg"
                                                                                        src="/images/kurumsal/belediyemeclisi/zinnurbuyukgoz.jpg"
                                                                                        alt="Zinnur BÜYÜKGÖZ"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="sm:ml-4 w-full mt-3 sm:mt-0">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-lg md:text-xl font-bold">
                                                                                        Zinnur BÜYÜKGÖZ
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <h6 className="text-gray-600 font-semibold mb-2 mt-2 md:mt-3 text-center">İlgili Müdürlükler</h6>
                                                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 rounded-lg shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Özel Kalem Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Dr. Yusuf ATASEVEN</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 rounded-lg shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Hukuk İşleri Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Av. Murat TUNCA</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 rounded-lg shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Teftiş Kurulu Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Kemal TETİK</span>
                                                                                    </button>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                {/* Başkan Yardımcıları */}
                                                                {/* Dursun Ali ARSLAN */}
                                                                <li>
                                                                    <div className="bg-white rounded-lg shadow-md p-3 md:p-4">
                                                                        <div className="flex flex-col sm:flex-row items-start gap-3">
                                                                            <div className="flex-shrink-0 mx-auto sm:mx-0 w-full sm:w-auto">
                                                                                <div className="relative pb-[125%] sm:pb-0 sm:h-40 md:h-64 sm:w-40 md:w-64">
                                                                                    <img
                                                                                        className="absolute h-full w-full object-cover rounded-lg"
                                                                                        src="/images/yonetimsemasi/Dursun ali .jpg"
                                                                                        alt="Dursun Ali ARSLAN"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="sm:ml-4 w-full mt-3 sm:mt-0">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-lg md:text-xl font-bold">
                                                                                        Dursun Ali ARSLAN
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <h6 className="text-gray-600 font-semibold mb-2 mt-2 md:mt-3 text-center">İlgili Müdürlükler</h6>
                                                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Sosyal Destek Hizmetleri Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Mecit KESKİNOĞLU</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Zabıta Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Burhan KANDEMİR</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">İklim Değişikliği ve Sıfır Atık Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Senay ALTINTAŞ</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Temizlik İşleri Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Senay ALTINTAŞ</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                {/* Other Vice Presidents */}
                                                                {/* Follow the same pattern for other vice presidents */}
                                                                {/* Ahmet Hüseyin ÇELEBİ */}
                                                                <li>
                                                                    <div className="bg-white rounded-lg shadow-md p-3 md:p-4">
                                                                        <div className="flex flex-col sm:flex-row items-start gap-3">
                                                                            <div className="flex-shrink-0 mx-auto sm:mx-0 w-full sm:w-auto">
                                                                                <div className="relative pb-[125%] sm:pb-0 sm:h-40 md:h-64 sm:w-40 md:w-64">
                                                                                    <img
                                                                                        className="absolute h-full w-full object-cover rounded-lg"
                                                                                        src="/images/yonetimsemasi/ahmet hüseyin.jpg"
                                                                                        alt="Ahmet Hüseyin ÇELEBİ"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="sm:ml-4 w-full mt-3 sm:mt-0">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-lg md:text-xl font-bold">
                                                                                        Ahmet Hüseyin ÇELEBİ
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <h6 className="text-gray-600 font-semibold mb-2 mt-2 md:mt-3 text-center">İlgili Müdürlükler</h6>
                                                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Mali Hizmetler Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Bilgin ALTAY</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">İnsan Kaynakları ve Eğitim Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">İmran AYYILDIZ</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Ruhsat Denetim Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Erhan HORUZ</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Destek Hizmetleri Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Carullah Recai ER</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                {/* Şerif Canpolat */}
                                                                <li>
                                                                    <div className="bg-white rounded-lg shadow-md p-3 md:p-4">
                                                                        <div className="flex flex-col sm:flex-row items-start gap-3">
                                                                            <div className="flex-shrink-0 mx-auto sm:mx-0 w-full sm:w-auto">
                                                                                <div className="relative pb-[125%] sm:pb-0 sm:h-40 md:h-64 sm:w-40 md:w-64">
                                                                                    <img
                                                                                        className="absolute h-full w-full object-cover rounded-lg"
                                                                                        src="/images/yonetimsemasi/şerif canpolat.jpg"
                                                                                        alt="Şerif Canpolat"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="sm:ml-4 w-full mt-3 sm:mt-0">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-lg md:text-xl font-bold">
                                                                                        Şerif Canpolat
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <h6 className="text-gray-600 font-semibold mb-2 mt-2 md:mt-3 text-center">İlgili Müdürlükler</h6>
                                                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Fen İşleri Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Hafız ALTINTAŞ</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Park ve Bahçeler Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Tunacy TÜRETKEN</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Etüt ve Proje Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Ömer ŞAHİN</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                {/* Muharrem BALTACIOGLU */}
                                                                <li>
                                                                    <div className="bg-white rounded-lg shadow-md p-3 md:p-4">
                                                                        <div className="flex flex-col sm:flex-row items-start gap-3">
                                                                            <div className="flex-shrink-0 mx-auto sm:mx-0 w-full sm:w-auto">
                                                                                <div className="relative pb-[125%] sm:pb-0 sm:h-40 md:h-64 sm:w-40 md:w-64">
                                                                                    <img
                                                                                        className="absolute h-full w-full object-cover rounded-lg"
                                                                                        src="/images/yonetimsemasi/muharrem baltacıoğlu.jpg"
                                                                                        alt="Muharrem BALTACIOGLU"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="sm:ml-4 w-full mt-3 sm:mt-0">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-lg md:text-xl font-bold">
                                                                                        Muharrem BALTACIOGLU
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <h6 className="text-gray-600 font-semibold mb-2 mt-2 md:mt-3 text-center">İlgili Müdürlükler</h6>
                                                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Emlak ve İstimlak Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Şaban SARIAY</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Plan ve Proje Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Asker ÇOBAN</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Bilgi İşlem Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Tümay AKSAN</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">İmar ve Şehircilik Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Mücahit KOKSAL</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Yapı ve Kontrol Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Mücahit KOKSAL</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                {/* Mahmut YANDIK */}
                                                                <li>
                                                                    <div className="bg-white rounded-lg shadow-md p-3 md:p-4">
                                                                        <div className="flex flex-col sm:flex-row items-start gap-3">
                                                                            <div className="flex-shrink-0 mx-auto sm:mx-0 w-full sm:w-auto">
                                                                                <div className="relative pb-[125%] sm:pb-0 sm:h-40 md:h-64 sm:w-40 md:w-64">
                                                                                    <img
                                                                                        className="absolute h-full w-full object-cover rounded-lg"
                                                                                        src="/images/yonetimsemasi/mahmut yandık.jpg"
                                                                                        alt="Mahmut YANDIK"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="sm:ml-4 w-full mt-3 sm:mt-0">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-lg md:text-xl font-bold">
                                                                                        Mahmut YANDIK
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <h6 className="text-gray-600 font-semibold mb-2 mt-2 md:mt-3 text-center">İlgili Müdürlükler</h6>
                                                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Mezarlıklar Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">İslam ÖZDAĞ</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">İşletme ve İştirakler Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Hacı KEY</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Makina İkmal, Bakım ve Onarım Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Dursun Ali Yayla</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                {/* Şener AKIN */}
                                                                <li>
                                                                    <div className="bg-white rounded-lg shadow-md p-3 md:p-4">
                                                                        <div className="flex flex-col sm:flex-row items-start gap-3">
                                                                            <div className="flex-shrink-0 mx-auto sm:mx-0 w-full sm:w-auto">
                                                                                <div className="relative pb-[125%] sm:pb-0 sm:h-40 md:h-64 sm:w-40 md:w-64">
                                                                                    <img
                                                                                        className="absolute h-full w-full object-cover rounded-lg"
                                                                                        src="/images/yonetimsemasi/şener akın.jpg"
                                                                                        alt="Şener AKIN"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="sm:ml-4 w-full mt-3 sm:mt-0">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-lg md:text-xl font-bold">
                                                                                        Şener AKIN
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <h6 className="text-gray-600 font-semibold mb-2 mt-2 md:mt-3 text-center">İlgili Müdürlükler</h6>
                                                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Veteriner İşleri Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Cevat ALTINTAŞ</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Afet İşleri Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Soner BİLİR</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Yazı İşleri Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Bahar ÖZALP</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                {/* Mücahit BİRBEN */}
                                                                <li>
                                                                    <div className="bg-white rounded-lg shadow-md p-3 md:p-4">
                                                                        <div className="flex flex-col sm:flex-row items-start gap-3">
                                                                            <div className="flex-shrink-0 mx-auto sm:mx-0 w-full sm:w-auto">
                                                                                <div className="relative pb-[125%] sm:pb-0 sm:h-40 md:h-64 sm:w-40 md:w-64">
                                                                                    <img
                                                                                        className="absolute h-full w-full object-cover rounded-lg"
                                                                                        src="/images/yonetimsemasi/mücahit birben.jpg"
                                                                                        alt="Mücahit BİRBEN"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="sm:ml-4 w-full mt-3 sm:mt-0">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-lg md:text-xl font-bold">
                                                                                        Mücahit BİRBEN
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <h6 className="text-gray-600 font-semibold mb-2 mt-2 md:mt-3 text-center">İlgili Müdürlükler</h6>
                                                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Gençlik ve Spor Hizmetleri Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Burhannettin DEMİRCİ</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Basın Yayın ve Halkla İlişkiler Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Birsen VURDEM</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Kültür İşleri Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Hasan GÜLER</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block text-sm md:text-base">Kadın ve Aile Hizmetleri Müdürlüğü</span>
                                                                                        <span className="text-xs md:text-sm font-normal">Zeynep YILDIRIM</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
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
            </div>
        </div>
    );
};

export default ManagementChart;