
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
                                        <div className="flex flex-row gap-4">

                                            {/* Ana İçerik Alanı */}
                                            <div className="flex-1 p-4">
                                                {/* Centered Header */}
                                                <div className="shadow p-4 bg-white rounded-xl text-center">
                                                    <h1 className="text-3xl font-bold">YÖNETİM ŞEMASI</h1>
                                                </div>
                                                {/* Added spacing between header and content */}
                                                <div className="my-6"></div>
                                                {/* Main Content */}
                                                <div className="shadow-lg rounded-lg">
                                                    <div className="p-4">
                                                        <div className="col-md-12">
                                                            <ul className="space-y-4">
                                                                {/* Başkan */}
                                                                <li>
                                                                    <div className="bg-white rounded-lg shadow-md p-4">
                                                                        <div className="flex items-start">
                                                                            <a className="flex-shrink-0" href="#">
                                                                                <img
                                                                                    className="rounded-lg"
                                                                                    src="/images/kurumsal/belediyemeclisi/zinnurbuyukgoz.jpg"
                                                                                    width="270"
                                                                                    height="350"
                                                                                    alt="Zinnur BÜYÜKGÖZ"
                                                                                />
                                                                            </a>
                                                                            <div className="ml-4 w-full">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                        Zinnur BÜYÜKGÖZ
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <h6 className="text-gray-600 font-semibold mb-2 mt-3 text-center">İlgili Müdürlükler</h6>
                                                                                <div className="grid grid-cols-2 gap-2">
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Özel Kalem Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Dr. Yusuf ATASEVEN</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Hukuk İşleri Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Av. Murat TUNCA</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Teftiş Kurulu Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Kemal TETİK</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                {/* Başkan Yardımcıları */}
                                                                {/* Dursun Ali ARSLAN */}
                                                                <li>
                                                                    <div className="bg-white rounded-lg shadow-md p-4">
                                                                        <div className="flex items-start">
                                                                            <a className="flex-shrink-0" href="#">
                                                                                <img
                                                                                    className="rounded-lg"
                                                                                    src="/images/yonetimsemasi/Dursun ali .jpg"
                                                                                    width="270"
                                                                                    height="350"
                                                                                    alt="Dursun Ali ARSLAN"
                                                                                />
                                                                            </a>
                                                                            <div className="ml-4 w-full">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                        Dursun Ali ARSLAN
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <h6 className="text-gray-600 font-semibold mb-2 mt-3 text-center">İlgili Müdürlükler</h6>
                                                                                <div className="grid grid-cols-2 gap-3">
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Sosyal Destek Hizmetleri Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Mecit KESKİNOĞLU</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Zabıta Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Burhan KANDEMİR</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">İklim Değişikliği ve Sıfır Atık Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Senay ALTINTAŞ</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Temizlik İşleri Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Senay ALTINTAŞ</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                {/* Ahmet Hüseyin ÇELEBİ */}
                                                                <li>
                                                                    <div className="bg-white rounded-lg shadow-md p-4">
                                                                        <div className="flex items-start">
                                                                            <a className="flex-shrink-0" href="#">
                                                                                <img
                                                                                    className="rounded-lg"
                                                                                    src="/images/yonetimsemasi/ahmet hüseyin.jpg"
                                                                                    width="270"
                                                                                    height="350"
                                                                                    alt="Ahmet Hüseyin ÇELEBİ"
                                                                                />
                                                                            </a>
                                                                            <div className="ml-4 w-full">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                        Ahmet Hüseyin ÇELEBİ
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <h6 className="text-gray-600 font-semibold mb-2 mt-3 text-center">İlgili Müdürlükler</h6>
                                                                                <div className="grid grid-cols-2 gap-3">
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Mali Hizmetler Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Bilgin ALTAY</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">İnsan Kaynakları ve Eğitim Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">İmran AYYILDIZ</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Ruhsat Denetim Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Erhan HORUZ</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Destek Hizmetleri Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Carullah Recai ER</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                {/* Şerif Canpolat */}
                                                                <li>
                                                                    <div className="bg-white rounded-lg shadow-md p-4">
                                                                        <div className="flex items-start">
                                                                            <a className="flex-shrink-0" href="#">
                                                                                <img
                                                                                    className="rounded-lg"
                                                                                    src="/images/yonetimsemasi/şerif canpolat.jpg"
                                                                                    width="270"
                                                                                    height="350"
                                                                                    alt="Şerif Canpolat"
                                                                                />
                                                                            </a>
                                                                            <div className="ml-4 w-full">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                        Şerif Canpolat
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <h6 className="text-gray-600 font-semibold mb-2 mt-3 text-center">İlgili Müdürlükler</h6>
                                                                                <div className="grid grid-cols-2 gap-3">
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Fen İşleri Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Hafız ALTINTAŞ</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Park ve Bahçeler Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Tunacy TÜRETKEN</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Etüt ve Proje Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Ömer ŞAHİN</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                {/* Muharrem BALTACIOGLU */}
                                                                <li>
                                                                    <div className="bg-white rounded-lg shadow-md p-4">
                                                                        <div className="flex items-start">
                                                                            <a className="flex-shrink-0" href="#">
                                                                                <img
                                                                                    className="rounded-lg"
                                                                                    src="/images/yonetimsemasi/muharrem baltacıoğlu.jpg"
                                                                                    width="270"
                                                                                    height="350"
                                                                                    alt="Muharrem BALTACIOGLU"
                                                                                />
                                                                            </a>
                                                                            <div className="ml-4 w-full">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                        Muharrem BALTACIOGLU
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <h6 className="text-gray-600 font-semibold mb-2 mt-3 text-center">İlgili Müdürlükler</h6>
                                                                                <div className="grid grid-cols-2 gap-3">
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Emlak ve İstimlak Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Şaban SARIAY</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Plan ve Proje Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Asker ÇOBAN</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Bilgi İşlem Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Tümay AKSAN</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">İmar ve Şehircilik Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Mücahit KOKSAL</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Yapı ve Kontrol Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Mücahit KOKSAL</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                {/* Mahmut YANDIK */}
                                                                <li>
                                                                    <div className="bg-white rounded-lg shadow-md p-4">
                                                                        <div className="flex items-start">
                                                                            <a className="flex-shrink-0" href="#">
                                                                                <img
                                                                                    className="rounded-lg"
                                                                                    src="/images/yonetimsemasi/mahmut yandık.jpg"
                                                                                    width="270"
                                                                                    height="350"
                                                                                    alt="Mahmut YANDIK"
                                                                                />
                                                                            </a>
                                                                            <div className="ml-4 w-full">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                        Mahmut YANDIK
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <h6 className="text-gray-600 font-semibold mb-2 mt-3 text-center">İlgili Müdürlükler</h6>
                                                                                <div className="grid grid-cols-2 gap-3">

                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Mezarlıklar Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">İslam ÖZDAĞ</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">İşletme ve İştirakler Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Hacı KEY</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Makina İkmal, Bakım ve Onarım Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Dursun Ali Yayla</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                {/* Şener AKIN */}
                                                                <li>
                                                                    <div className="bg-white rounded-lg shadow-md p-4">
                                                                        <div className="flex items-start">
                                                                            <a className="flex-shrink-0" href="#">
                                                                                <img
                                                                                    className="rounded-lg"
                                                                                    src="/images/yonetimsemasi/şener akın.jpg"
                                                                                    width="270"
                                                                                    height="350"
                                                                                    alt="Şener AKIN"
                                                                                />
                                                                            </a>
                                                                            <div className="ml-4 w-full">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                        Şener AKIN
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <h6 className="text-gray-600 font-semibold mb-2 mt-3 text-center">İlgili Müdürlükler</h6>
                                                                                <div className="grid grid-cols-2 gap-3">
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Veteriner İşleri Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Cevat ALTINTAŞ</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Afet İşleri Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Soner BİLİR</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Yazı İşleri Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Bahar ÖZALP</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                {/* Mücahit BİRBEN */}
                                                                <li>
                                                                    <div className="bg-white rounded-lg shadow-md p-4">
                                                                        <div className="flex items-start">
                                                                            <a className="flex-shrink-0" href="#">
                                                                                <img
                                                                                    className="rounded-lg"
                                                                                    src="/images/yonetimsemasi/mücahit birben.jpg"
                                                                                    width="270"
                                                                                    height="350"
                                                                                    alt="Mücahit BİRBEN"
                                                                                />
                                                                            </a>
                                                                            <div className="ml-4 w-full">
                                                                                <div>
                                                                                    <h4 className="inline-block text-blue-900 text-xl font-bold">
                                                                                        Mücahit BİRBEN
                                                                                    </h4>
                                                                                    <h6 className="text-gray-600">Başkan Yardımcısı</h6>
                                                                                    <hr className="my-2 border-t border-gray-300" />
                                                                                </div>

                                                                                <h6 className="text-gray-600 font-semibold mb-2 mt-3 text-center">İlgili Müdürlükler</h6>
                                                                                <div className="grid grid-cols-2 gap-3">
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Gençlik ve Spor Hizmetleri Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Burhannettin DEMİRCİ</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Basın Yayın ve Halkla İlişkiler Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Birsen VURDEM</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Kültür İşleri Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Hasan GÜLER</span>
                                                                                    </button>
                                                                                    <button className="bg-[#005599] hover:bg-blue-900 text-white font-medium py-2 px-2 rounded shadow transition-colors duration-300 h-full">
                                                                                        <span className="block">Kadın ve Aile Hizmetleri Müdürlüğü</span>
                                                                                        <span className="text-sm font-normal">Zeynep YILDIRIM</span>
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