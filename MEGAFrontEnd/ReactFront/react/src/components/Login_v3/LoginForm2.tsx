import React, { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ParticleBackground from "../backgroundAnim/particle.tsx";
import { login } from "../AdminPanel/services/authService.tsx";

// Custom Ripple Effect Hook
const useRippleEffect = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    };

    return { buttonRef, createRipple };
};

// Add this CSS to your global styles
/*
.ripple {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  transform: scale(0);
  animation: ripple 600ms linear;
  pointer-events: none;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
*/

// Login Credentials Interface
interface LoginCredentials {
    username: string;
    password: string;
}

// Authentication Service
const authService = {
    login: async (credentials: LoginCredentials) => {
        const { data } = await axios.post('http://localhost:8080/api/auth/login', credentials, {
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
    const navigate = useNavigate();

    // For the login button ripple
    const { buttonRef: loginButtonRef, createRipple: createLoginRipple } = useRippleEffect();
    // For the signup button ripple
    const { buttonRef: signupButtonRef, createRipple: createSignupRipple } = useRippleEffect();

    // Login Mutation
    const loginMutation = useMutation({
        mutationFn: authService.login,
        onSuccess: (data) => {
            console.log('Login successful', data);
            setMessage(data.response?.data?.message || 'Giriş Başarılı');

            // Store the token and user data in localStorage
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('user', JSON.stringify({
                tcNo: data.data.tcNo,
                role: data.data.role
            }));

            navigate('/admin/dashboard');
        },
        onError: (error: any) => {
            console.error('Login error:', error);
            setError(
                error.response?.data?.message ||
                error.message ||
                'Giriş başarısız. Lütfen tekrar deneyin.'
            );
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await login(username, password);

        if (success) {
            console.log('Post-login storage verification:', {
                token: localStorage.getItem('token'),
                user: JSON.parse(localStorage.getItem('user') || 'null')
            });

            setTimeout(() => {
                navigate('/admin');
            }, 100);
        }
    };

    return (
        <section className="h-screen bg-cover bg-center flex items-center justify-center">
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
                                <button
                                    ref={loginButtonRef}
                                    onClick={createLoginRipple}
                                    type="submit"
                                    disabled={loginMutation.isPending}
                                    className={`inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out relative overflow-hidden ${
                                        loginMutation.isPending ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                    style={{
                                        background: "linear-gradient(to right, #022842, #222222)",
                                    }}
                                >
                                    {loginMutation.isPending ? 'Giriş Yapılıyor...' : 'GİRİŞ YAP'}
                                </button>
                                <a href="#" className="block mt-2 text-sm">
                                    Parolanızı Mı Unuttunuz?
                                </a>
                            </div>
                            <div className="flex flex-col items-center justify-center mt-4">
                                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                                    Hesabınız yok mu?
                                </p>
                                <Link to="/signup">
                                    <button
                                        ref={signupButtonRef}
                                        onClick={createSignupRipple}
                                        type="button"
                                        className="inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out relative overflow-hidden"
                                        style={{
                                            background: "#f7a600",
                                        }}
                                    >
                                        KAYIT OL
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ParticleBackground />
        </section>
    );
};

export default LoginPage;