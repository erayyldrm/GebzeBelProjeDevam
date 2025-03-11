import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {TERipple} from "tw-elements-react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import {Link} from 'react-router-dom';
import axios from "axios";
import {useMutation} from "@tanstack/react-query";

interface RegisterCredentials {
    TCNo:string;
    password:string;
}

// Authentication Service
const authService = {
    register: async (credentials: RegisterCredentials) => {
        const { data } = await axios.post('http://localhost:8080/api/auth/register', credentials, {
            withCredentials: true
        });
        return data;
    }
};

const SignUP: React.FC = () =>{
    const [TCNo, setTCNo] = useState('');
    const [password, setPassword] = useState('');
    const [regismessage, setregisMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const registermutation = useMutation({
        mutationFn: authService.register,
        onSuccess: (data) => {
            setregisMessage(data.response?.data?.message || 'Kaydolma başarılı');
        },
        onError: (error: any) => {
            setError(
                error.response?.data?.message ||
                'Kaydolma başarısız. Backend açık mı?'
            );
        }
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        registermutation.mutate({
            TCNo: TCNo,
            password
        });
    };

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
                                    Personel Kayıt Ol Sayfası
                                </h4>
                                {error && (
                                    <div className="text-red-500 text-center mb-4">
                                        {error}
                                    </div>
                                )}
                                {regismessage && (
                                    <div className="text-blue-500 text-center mb-4">
                                        {regismessage}
                                    </div>

                                )}
                                <form onSubmit={handleSubmit}>
                                    {["TC Kimlik No", "Parola"].map(
                                        (placeholder, index) => (
                                            <div key={index} className="mb-3">
                                                <input
                                                    value={placeholder === "Parola" ? password : TCNo} placeholder={placeholder}
                                                    type={
                                                        placeholder === "Parola"
                                                            ? "password"
                                                            : placeholder ==="TC Kimlik No"
                                                            ? "number"
                                                            : "text"
                                                    }
                                                    onChange={
                                                    placeholder === "Parola"
                                                        ?(e) => setPassword(e.target.value)
                                                        :placeholder ==="TC Kimlik No"
                                                        ?(e)=>setTCNo(e.target.value)
                                                        : undefined
                                                }
                                                    required
                                                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                                                />
                                            </div>
                                        )
                                    )}
                                    <div className="text-center mb-4">
                                        <TERipple rippleColor="light" className="w-full">
                                            <button
                                                className="inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out bg-gradient-to-r from-orange-500 to-blue-900"
                                                type="submit"
                                                style={{
                                                    background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                                }}
                                                disabled={registermutation.isPending}
                                            >
                                                {registermutation.isPending ? 'Kayıt Yapılıyor...' : 'Kayıt Ol'}

                                            </button>
                                        </TERipple>
                                        <a
                                            href="#"
                                            className="block mt-2 text-sm text-blue-600 dark:text-blue-400"
                                        >
                                            Parolanızı Mı Unuttunuz?
                                        </a>
                                    </div>
                                    <div className="flex flex-col items-center justify-center mt-4">
                                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                                            Hesabınız Var mı?
                                        </p>
                                        <Link to="/login">
                                        <button
                                            type="button"
                                            className="inline-block rounded border-2 border-danger px-4 pb-[4px] pt-1 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out"
                                        >
                                            Giriş Yap
                                        </button>
                                        </Link>
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
