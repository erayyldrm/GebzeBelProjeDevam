import React, {useState} from 'react';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {TERipple} from "tw-elements-react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import {Link} from 'react-router-dom';


// Login Credentials Interface
interface LoginCredentials {
    username: string;
    password: string;
}


// Authentication Service
const authService = {
    login: async (credentials: LoginCredentials) => {
        const {data} = await axios.post('http://localhost:8080/api/auth/login', credentials, {
            withCredentials: true
        });
        return data;
    }
};

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    // Login Mutation
    const loginMutation = useMutation({
        mutationFn: authService.login,
        onSuccess: (data) => {
            //console.log('Login successful', data);
            setMessage(data.response?.data?.message || 'Giriş Başaşrılı');
            // Geçiş yapılacak diğer sayfayı yönlendirme ekleyebilirsiniz
        },
        onError: (error: any) => {
            setError(
                error.response?.data?.message ||
                'Giriş başarısız. Lütfen tekrar deneyin. Backend açık mı?'
            );
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        loginMutation.mutate({
            username,
            password
        });
    };

    return (
        <section
            className="h-screen bg-[url('images/BackgroundForm.jpeg')] bg-cover bg-center flex items-center justify-center">
            <div className="w-full max-w-md px-4 mx-auto">
                <div className="rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                    <div className="p-4 sm:p-6 flex flex-col justify-center">
                        <div className="text-center mb-4">
                            <img
                                className="w-32 sm:w-40 mx-auto"
                                src="/images/logo.png"
                                alt="logo"
                            />
                        </div>
                        <h4 className="mb-4 text-base sm:text-lg font-semibold text-center">
                            Personel Giriş Sayfası
                        </h4>

                        {error && (
                            <div className="text-red-500 text-center mb-4">
                                {error}
                            </div>
                        )}
                        {message && (
                            <div className="text-blue-500 text-center mb-4">
                                {message}
                            </div>

                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Kullanıcı Adı"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    placeholder="Parola"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                                    required
                                />
                            </div>
                            <div className="text-center mb-4">
                                <TERipple rippleColor="light" className="w-full">
                                    <button
                                        className="inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out"
                                        type="submit"
                                        disabled={loginMutation.isPending}
                                        style={{
                                            background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                        }}
                                    >
                                        {loginMutation.isPending ? 'Giriş Yapılıyor...' : 'GİRİŞ YAP'}
                                    </button>
                                </TERipple>
                                <a href="#" className="block mt-2 text-sm">
                                    Parolanızı Mı Unuttunuz?
                                </a>
                            </div>
                            <div className="flex items-center justify-between mb-6">
                                <p className="mb-0 text-sm">Hesabınız Yok Mu?</p>
                                <TERipple rippleColor="light">
                                    <Link to="/signup">
                                        <button
                                            type="button"
                                            className="inline-block rounded border-2 border-danger px-4 pb-[4px] pt-1 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out"
                                        >
                                            KAYIT OL
                                        </button>
                                    </Link>
                                </TERipple>
                            </div>
                        </form>
                    </div>

                </div>
            </div>


        </section>
    );
};

export default LoginPage;
