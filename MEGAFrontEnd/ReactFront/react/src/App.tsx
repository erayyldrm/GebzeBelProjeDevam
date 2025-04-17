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
import Hizmetler from "./HizmetlerApp.tsx";
import HizmetlerLayout from "./components/Layouts/hizmetlerLayout.tsx";
import Gebze from "./GebzeApp.tsx";
import EventsSection from "./components/Etkinlikler/etkinlikler.tsx";
import KurumsalLayout from './components/Layouts/kurumsalLayout.tsx';
import GebzeLayout from './components/Layouts/gebzeLayout.tsx';
import Yayin from "./YayinApp.tsx";
import Yayinpdf from "./components/Yayin/yayinpdf.tsx";
import Haberler from "./components/Haberler/haberler.tsx";
import AdminPanel from "./components/AdminPanelTest/testPanel.tsx";



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
                    <Route
                        path="/hizmetler/*"
                        element={<HizmetlerLayout />}
                    >
                        <Route path="*" element={<Hizmetler />} />
                    </Route>

                    {/* Navbar ve Footerli elemanlar burada olacak */}
                    <Route path="/" element={<ContentArea/>}/>
                    <Route path="/test" element={<TEST/>}></Route>

                    <Route path="/etkinlikler" element={<EventsSection/>}/>
                    <Route path="/haberler" element={<Haberler/>}/>
                    {/* Kurumsal gibi gebzede olması lazım */}
                    <Route
                        path="/kurumsal/*"
                        element={<KurumsalLayout />}
                    >
                        <Route path="*" element={<Kurumsal />} />
                    </Route>



                    <Route
                        path="/gebze/*"
                        element={<GebzeLayout />}
                    >
                        <Route path="*" element={<Gebze />} />
                    </Route>


                    <Route path="/yayin/*" element={<Yayin/>}/>
                    <Route path="/yayinpdf/*" element={<Yayinpdf/>}/>


                    {/* Add other routes that need navbar/footer here */}
                </Route>

                {/* Routes WITHOUT navbar and footer */}
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/admin" element={<AdminPanel/>}/>
            </Routes>
        </QueryClientProvider>
    );
};

export default App;
