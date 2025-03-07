import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Loader from './components/loader';
import LoginForm from './components/Login_v3/LoginForm';
import Footer from './components/Footer/Footer';
import CoolNavbar from './components/NavBar/CoolNavbar';
import SignUp from './components/SignUp/SignUp';
import ContentArea from "./components/Slide/Slide.tsx";

const queryClient = new QueryClient();

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    // Determine if the current route is the login page

    return (
        <QueryClientProvider client={queryClient}>
            <CoolNavbar />
            <Routes>
                {/* Login ve SignUp sayfa kontrolü */}
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/" element={<ContentArea/>} />
            </Routes>
            <Footer />
        </QueryClientProvider>
    );
};

export default App;
