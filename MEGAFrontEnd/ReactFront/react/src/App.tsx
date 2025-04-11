import React, {useState, useEffect} from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Loader from './components/loader';
import LoginForm from './components/Login_v3/LoginForm2.tsx';
import Footer from './components/Footer/Footer';
import CoolNavbar from './components/NavBar/CoolNavbar';
import SignUp from './components/SignUp/SignUp';
import ContentArea from "./components/Slide/Slide.tsx";
import TEST from "./components/sablon/testsablon.tsx"
import Kurumsal from "./KurumsalApp.tsx";
import Gebze from "./GebzeApp.tsx";
import EventsSection from "./components/Etkinlikler/etkinlikler.tsx";
import KurumsalLayout from './components/Layouts/kurumsalLayout.tsx';





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
        return <Loader/>;
    }

    // Determine if the current route is the login page

    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                {/* Routes WITH navbar and footer */}
                <Route
                    element={
                        <>
                            <CoolNavbar/>
                            <Outlet/> {/* This is important! */}
                            <Footer/>


                        </>
                    }
                >
                    {/* Navbar ve Footerli elemanlar burada olacak */}
                    <Route path="/" element={<ContentArea/>}/>
                    <Route path="/test" element={<TEST/>}></Route>

                    <Route path="/etkinlikler" element={<EventsSection/>}/>
                    <Route
                        path="/kurumsal/*"
                        element={<KurumsalLayout />}
                    >
                        <Route path="*" element={<Kurumsal />} />
                    </Route>


                    <Route path="/gebze/*" element={<Gebze/>}/>


                    {/* Add other routes that need navbar/footer here */}
                </Route>

                {/* Routes WITHOUT navbar and footer */}
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Routes>
        </QueryClientProvider>
    );
};

export default App;
