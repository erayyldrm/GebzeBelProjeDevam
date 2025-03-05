import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TERipple } from "tw-elements-react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

interface SignUpProps {
    onSwitchToLoginForm: () => void;
}

const SignUP: React.FC<SignUpProps> = ({ onSwitchToLoginForm }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.section
                className="h-screen bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
            >
                <div className="w-full max-w-md">
                    <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                        <div className="g-0 flex flex-wrap flex-row-reverse">
                            <div className="w-full p-6">
                                <div className="text-center mb-4">
                                    <img
                                        className="w-40 mx-auto"
                                        src="/images/logo.png"
                                        alt="Logo"
                                    />
                                </div>
                                <h4 className="mb-4 text-lg font-semibold text-center">
                                    Personel Giriş Sayfası
                                </h4>
                                <form>
                                    {["Kullanıcı Adı", "Ad", "Soyad", "Parola"].map(
                                        (placeholder, index) => (
                                            <div key={index} className="mb-3">
                                                <input
                                                    type={
                                                        placeholder === "Parola"
                                                            ? "password"
                                                            : "text"
                                                    }
                                                    placeholder={placeholder}
                                                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                                                />
                                            </div>
                                        )
                                    )}
                                    <div className="text-center mb-4">
                                        <TERipple rippleColor="light" className="w-full">
                                            <button
                                                className="inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out bg-gradient-to-r from-orange-500 to-blue-900"
                                                type="button"
                                                style={{
                                                    background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                                }}

                                            >
                                                Kayıt Ol
                                            </button>
                                        </TERipple>
                                        <a
                                            href="#!"
                                            className="block mt-2 text-sm text-blue-600 dark:text-blue-400"
                                        >
                                            Parolanızı Mı Unuttunuz?
                                        </a>
                                    </div>
                                    <div className="flex flex-col items-center justify-center mt-4">
                                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                                            Hesabınız Var mı?
                                        </p>
                                        <button
                                            type="button"
                                            className="inline-block rounded border-2 border-danger px-4 pb-[4px] pt-1 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out"
                                            onClick={onSwitchToLoginForm}
                                        >
                                            Giriş Yap
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </AnimatePresence>
    );
};

export default SignUP;
