import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#01111c] text-white py-20 rounded-t-[16px]">
            <div className="container mx-auto flex justify-between">
                <div className="w-1/3 px-4">
                    <img src="images/abc.png" alt="Logo" className="w-[150px] h-auto" />
                </div>
                <div className="w-1/3 px-4">
                    <h3 className="text-xl mb-4">Hakkımızda</h3>
                    <p>Şirketimiz hakkında daha fazla bilgi edinmek için bizimle iletişime geçin.</p>
                </div>
                <div className="w-1/3 px-4">
                    <h3 className="text-xl mb-4">İletişim</h3>
                    <ul>
                        <li>Adres: Örnek Mah., İstanbul, Türkiye</li>
                        <li>Telefon: +90 123 456 789</li>
                        <li>Email: info@example.com</li>
                    </ul>
                </div>
                <div className="w-1/3 px-4">
                    <h3 className="text-xl mb-4">Sosyal Medya</h3>
                    <ul className="flex">
                        {["Facebook", "Twitter", "Instagram"].map((platform) => (
                            <li key={platform} className="mr-4">
                                <a href="#" className="text-white">
                                    {platform}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
