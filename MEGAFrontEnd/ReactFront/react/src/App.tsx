import React, { useState, useEffect } from 'react';
import Loader from './components/loader';
import LoginForm from './components/Login_v3/LoginForm';
import Footer from './components/Footer/Footer';
import CoolNavbar from './components/NavBar/CoolNavbar';
import SignUp from './components/SignUp/SignUp';
import './files/assets/css/style.css';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(true); // Sayfa kontrolü

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <CoolNavbar />
            {isLogin ? (
                <LoginForm onSwitchToSignUp={() => setIsLogin(false)} />
            ) : (
                <SignUp onSwitchToLoginForm={() => setIsLogin(true)} />
            )}
            <Footer />
        </>
    );
};

export default App;
