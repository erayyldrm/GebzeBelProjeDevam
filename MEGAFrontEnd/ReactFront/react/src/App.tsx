import React, { useState, useEffect } from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Loader from './components/loader';
import LoginForm from './components/Login_v3/LoginForm2.tsx';
import Footer from './components/Footer/Footer';
import CoolNavbar from './components/NavBar/CoolNavbar';
import SignUp from './components/SignUp/SignUp';
import ContentArea from "./components/Slide/Slide.tsx";
import Baskan from "./components/kurumsal/baskan.tsx";
import BelediyeMeclisi from "./components/kurumsal/belediyemeclisi.tsx";
import Tarihce from "./components/gebze/tarihce.tsx";
import TEST from "./components/sablon/testsablon.tsx"
import Sidebar from './components/SideBar/sidebar';

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
            <Routes>
                {/* Routes WITH navbar and footer */}
                <Route
                    element={
                        <>
                            <CoolNavbar />
                            <Sidebar /><Outlet /> {/* This is important! */}

                            <Footer />


                        </>
                    }
                >
                    {/* Navbar ve Footerli elemanlar burada olacak */}
                    <Route path="/" element={<ContentArea/>} />
                    <Route path="/kurumsal/baskan" element={<Baskan/>} />
                    <Route path="/kurumsal/belediyemeclisi" element={<BelediyeMeclisi/>}/>

                    <Route path="/gebze/tarihce" element={<Tarihce/>}/>
                    <Route path="/test" element={<TEST/>}></Route>

                    {/* Add other routes that need navbar/footer here */}
                </Route>

                {/* Routes WITHOUT navbar and footer */}
                <Route path="/login" element={<LoginForm/>} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </QueryClientProvider>
    );
};

export default App;
