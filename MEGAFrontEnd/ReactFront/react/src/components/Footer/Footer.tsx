import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#022842] text-white py-10 rounded-t-[16px]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Logo Section */}
                <div className="px-4">
                    <img src="/images/abc.png" alt="Logo" className="w-32 mb-4" />

                </div>

                {/* About Section */}
                <div className="px-4">
                    <h3 className="text-xl font-bold mb-4">Hakkımızda</h3>
                    <p>Şirketimiz hakkında daha fazla bilgi edinmek için bizimle iletişime geçin.</p>
                </div>

                {/* Contact Section */}
                <div className="px-4">
                    <h3 className="text-xl font-bold mb-4">İletişim</h3>
                    <ul>
                        <li>Adres: Örnek Mah., İstanbul, Türkiye</li>
                        <li>Telefon: +90 123 456 789</li>
                        <li>Email: info@example.com</li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="px-4">
                    <h3 className="text-xl font-bold mb-4">Sosyal Medya</h3>
                    <ul className="flex space-x-4">
                        {["Facebook", "Twitter", "Instagram"].map((platform) => (
                            <li key={platform}>
                                <a href="#" className="text-white hover:text-gray-300">
                                    <img
                                        src={`/icons/${platform.toLowerCase()}.svg`}
                                        alt={platform}
                                        className="w-6 h-6"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8 text-sm text-gray-400">
                © {new Date().getFullYear()} Şirket Adı. Tüm Hakları Saklıdır.
            </div>
        </footer>
    );
};

export default Footer;
