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
import TEST from "./components/sablon/testsablon.tsx"
import ManagementChart from "./components/kurumsal/yonetimsemasi.tsx";
import BaskanPage from "./components/kurumsal/vizyon_2.tsx";
import Misyon from "./components/kurumsal/misyon_2.tsx";
import İlkelerimiz from "./components/kurumsal/ilkelerimiz_2.tsx";
import Eskibaskanlar from "./components/kurumsal/eskibaskanlar.tsx";
import KardesSehirler from "./components/gebze/kardessehirler.tsx";
import Muhtarlar from "./components/gebze/muhtarlar.tsx";
import Tarihce from "./components/gebze/tarihce.tsx";
import Fotoğraflarla from "./components/gebze/fotolarla.tsx";
import BugunkuGebze from "./components/gebze/bugunkugebze.tsx";
import EventsSection from "./components/Etkinlikler/etkinlikler.tsx";
import Hacikey from "./components/kurumsal/mudurlukler/hacikey.tsx";
import Mecitkeskinoglu from "./components/kurumsal/mudurlukler/mecitkeskinoglu.tsx";
import Kemaltetik from "./components/kurumsal/mudurlukler/kemaltetik.tsx";
import Senayaltintas from "./components/kurumsal/mudurlukler/senayaltıntas.tsx";
import Cevataltintas from "./components/kurumsal/mudurlukler/cevataltintas.tsx";
import Leventsargin from "./components/kurumsal/mudurlukler/leventsargin.tsx";
import Baharozalp from "./components/kurumsal/mudurlukler/baharozalp.tsx";
import Burhankandemir from "./components/kurumsal/mudurlukler/burhankandemir.tsx";





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
                            <Outlet /> {/* This is important! */}
                            <Footer />


                        </>
                    }
                >
                    {/* Navbar ve Footerli elemanlar burada olacak */}
                    <Route path="/" element={<ContentArea/>} />
                    <Route path="/kurumsal/baskan" element={<Baskan/>} />
                    <Route path="/kurumsal/belediyemeclisi" element={<BelediyeMeclisi/>}/>
                    <Route path="/kurumsal/vizyon_2" element={<BaskanPage/>}/>
                    <Route path="/kurumsal/misyon_2" element={<Misyon/>}/>
                    <Route path="/kurumsal/ilkelerimiz_2" element={<İlkelerimiz/>}/>
                    <Route path="/test" element={<TEST/>}></Route>
                    <Route path="/kurumsal/yonetimseması" element={<ManagementChart/>}></Route>
                    <Route path="/kurumsal/eskibaskanlar" element={<Eskibaskanlar />}></Route>
                    <Route path="/gebze/kardessehirler" element={<KardesSehirler/>}/>
                    <Route path="/gebze/muhtarlar" element={<Muhtarlar/>}/>
                    <Route path="/gebze/tarihce" element={<Tarihce/>}/>
                    <Route path="/gebze/fotoğraflarlagebze" element={<Fotoğraflarla/>}/>
                    <Route path="/gebze/bugunkugebze" element={<BugunkuGebze/>}/>
                    <Route path="/etkinlikler" element={<EventsSection/>}/>
                    <Route path="/kurumsal/mudurlukler/hacikey" element={<Hacikey/>}/>
                    <Route path="/kurumsal/mudurlukler/mecitkeskinoglu" element={<Mecitkeskinoglu/>}/>
                    <Route path="/kurumsal/mudurlukler/kemaltetik" element={<Kemaltetik/>}/>
                    <Route path="/kurumsal/mudurlukler/senayaltıntas" element={<Senayaltintas/>}/>
                    <Route path="/kurumsal/mudurlukler/cevataltintas" element={<Cevataltintas/>}/>
                    <Route path="/kurumsal/mudurlukler/leventsargin" element={<Leventsargin/>}/>
                    <Route path="/kurumsal/mudurlukler/baharozalp" element={<Baharozalp/>}/>
                    <Route path="/kurumsal/mudurlukler/burhankandemir" element={<Burhankandemir/>}/>



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
