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
import Kurumsal from "./KurumsalApp.tsx"
import KardesSehirler from "./components/gebze/kardessehirler.tsx";
import Muhtarlar from "./components/gebze/muhtarlar.tsx";
import Tarihce from "./components/gebze/tarihce.tsx";
import Fotoğraflarla from "./components/gebze/fotolarla.tsx";
import BugunkuGebze from "./components/gebze/bugunkugebze.tsx";
import EventsSection from "./components/Etkinlikler/etkinlikler.tsx";
import Gallarytest from "./components/gebze/gallarytest.tsx";
import UyeOldugumuzBirlikler from "./components/gebze/uyeoldugumuzbirlikler.tsx";
import SanalTur from "./components/gebze/360sanaltur.tsx";


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
                    <Route path="/gebze/kardessehirler" element={<KardesSehirler/>}/>
                    <Route path="/gebze/muhtarlar" element={<Muhtarlar/>}/>
                    <Route path="/gebze/tarihce" element={<Tarihce/>}/>
                    <Route path="/gebze/fotoğraflarlagebze" element={<Fotoğraflarla/>}/>
                    <Route path="/gebze/bugunkugebze" element={<BugunkuGebze/>}/>
                    <Route path="/etkinlikler" element={<EventsSection/>}/>
                    <Route path="/gebze/tarihiyerler" element={<Gallarytest/>}/>
                    <Route path="/gebze/uyeoldugumuzbirlikler" element={<UyeOldugumuzBirlikler/>}/>
                    <Route path="/gebze/360sanaltur" element={<SanalTur/>}/>
                    <Route path="/kurumsal/*" element={<Kurumsal />} />



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
