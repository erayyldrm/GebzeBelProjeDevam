import React, { useEffect } from 'react';


const GebzeBelediyesi: React.FC = () => {


    return (
        <div className="bg-gray-100">
            <header className="container mx-auto py-5 text-center">
                <h1 className="text-3xl font-bold text-blue-600">Gebze Belediyesi</h1>
            </header>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Sol Slider Alanı */}
                    <div>
                        <ul className="space-y-4">
                            <li className="relative">
                                <img
                                    src="assets/images/hero-blog/1.jpg"
                                    alt="Lifestyle Image"
                                    className="rounded-lg shadow-lg"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
                                    <span className="bg-blue-500 px-2 py-1 rounded text-xs">Lifestyle</span>
                                    <h3 className="mt-2 text-lg font-semibold">
                                        Bosmogenic an designed for narita tourism in moon
                                    </h3>
                                    <p className="text-sm mt-1 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className="w-4 h-4 mr-1"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z" />
                                        </svg>
                                        March 29, 2022
                                    </p>
                                </div>
                            </li>
                            {/* Diğer Slider Elemanları */}
                            <li className="relative">
                                <img
                                    src="assets/images/hero-blog/11.jpg"
                                    alt="Beauty Image"
                                    className="rounded-lg shadow-lg"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
                                    <span className="bg-pink-500 px-2 py-1 rounded text-xs">Beauty</span>
                                    <h3 className="mt-2 text-lg font-semibold">
                                        Beauty designed narita tourism in moon others
                                    </h3>
                                    <p className="text-sm mt-1 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className="w-4 h-4 mr-1"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z" />
                                        </svg>
                                        March 29, 2022
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Sağ Alan */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <img
                                src="assets/images/hero-blog/2.jpg"
                                alt="Politics Image"
                                className="rounded-lg shadow-lg"
                            />
                            <div className="mt-3">
                                <span className="bg-green-500 px-2 py-1 rounded text-xs">Politics</span>
                                <h3 className="mt-2 text-lg font-semibold">
                                    Dui fames tempora maiores dicta anim? Vel curae eaque ab eaque pharetra blandit
                                </h3>
                            </div>
                        </div>
                        <div>
                            <img
                                src="assets/images/hero-blog/3.jpg"
                                alt="Technology Image"
                                className="rounded-lg shadow-lg"
                            />
                            <div className="mt-3">
                                <span className="bg-purple-500 px-2 py-1 rounded text-xs">Technology</span>
                                <h3 className="mt-2 text-lg font-semibold">Virtual reality is here!</h3>
                            </div>
                        </div>
                        <div>
                            <img
                                src="assets/images/hero-blog/4.jpg"
                                alt="Travel Image"
                                className="rounded-lg shadow-lg"
                            />
                            <div className="mt-3">
                                <span className="bg-orange-500 px-2 py-1 rounded text-xs">Travel</span>
                                <h3 className="mt-2 text-lg font-semibold">Running on the field.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GebzeBelediyesi;

export const GovernliaHeadContent: React.FC = () => {
    React.useEffect(() => {
        // You can dynamically add scripts and styles using useEffect
        const loadScripts = () => {
            const scripts = [
                'assets/js/jquery.min.js',
                'assets/js/bootstrap.min.js',
                'assets/js/owl.carousel.min.js',
                'assets/js/jquery.magnific-popup.min.js',
                'assets/js/wow.min.js',
                'assets/js/back-menus.js',
                'assets/js/plugins.js',
                'assets/js/main.js'




            ];

            scripts.forEach(src => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                document.body.appendChild(script);
            });
        };

        loadScripts();

        // Cleanup function to remove scripts when component unmounts
        return () => {
            // Optional: Remove scripts if needed
        };
    }, []);
    return null;
};