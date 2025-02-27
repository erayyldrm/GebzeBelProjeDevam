import React, { useRef, useState } from 'react';
// Import the CSS files from the node_modules directory
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';
import 'hamburgers/dist/hamburgers.min.css';
import 'animsition/dist/css/animsition.min.css';
import 'select2/dist/css/select2.min.css';
import 'daterangepicker/daterangepicker.css';
import './css/util.css';
import './css/main.css';


const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const loginData = {
            username,
            password,
        };

        console.log('loginData:', loginData); // Log the data to check

        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                // Handle successful login (e.g., redirect to dashboard)
            } else {
                console.error('Login failed:', response.statusText);
                // Handle login failure (e.g., show error message)
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="limiter">
            <div className="container-login100" style={{ backgroundImage: "url('/images/arkaplangirisyap.jpg')" }}>
                <div className="wrap-login100">
                    <form className="login100-form validate-form" onSubmit={handleLogin}>
                        <span className="login100-form-logo">
                            <img
                                src="/images/icons/BelediyeLogo.webp"
                                alt="Logo"
                                style={{ width: '150px', height: 'auto' }}
                            />
                        </span>
                        <span className="login100-form-title p-b-34 p-t-27">Giriş Yap</span>

                        <div className="wrap-input100 validate-input" data-validate="Lütfen Bir Kullanıcı Adı Giriniz">
                            <input
                                className="input100"
                                type="text"
                                name="username"
                                placeholder="Kullanıcı Adı"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <span className="focus-input100" data-placeholder="&#xf207;"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Lütfen Bir Parola Giriniz">
                            <input
                                className="input100"
                                type="password"
                                name="password"
                                placeholder="Parola"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="contact100-form-checkbox">
                            <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                            <label className="label-checkbox100" htmlFor="ckb1">Beni Hatırla</label>
                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn" type="submit">Giriş Yap</button>
                        </div>

                        <div className="text-center p-t-90">
                            <a className="txt1" href="#">Şifremi Unuttum ?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
