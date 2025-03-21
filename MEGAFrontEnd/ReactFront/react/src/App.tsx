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
import Tumayaksan from "./components/kurumsal/mudurlukler/tumayaksan.tsx";
import Sonerbılır from "./components/kurumsal/mudurlukler/sonerbılır.tsx";
import Bırsenvurdem from "./components/kurumsal/mudurlukler/bırsenvurdem.tsx";
import Carullaher from "./components/kurumsal/mudurlukler/carullaher.tsx";
import SabansarAy from "./components/kurumsal/mudurlukler/sabansarıay.tsx";
import Omersahın from "./components/kurumsal/mudurlukler/omersahın.tsx";
import Hafızaltıntaş from "./components/kurumsal/mudurlukler/hafızaltıntaş.tsx";
import Burhanettındemırcı from "./components/kurumsal/mudurlukler/burhanettındemırcı.tsx";
import Muratanca from "./components/kurumsal/mudurlukler/muratanca.tsx";
import Senayaltıntas from "./components/kurumsal/mudurlukler/senayaltntas.tsx";
import Mucahıtkoksal from "./components/kurumsal/mudurlukler/mucahıtkoksal.tsx";




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
                    <Route path="/test" element={<TEST/>}></Route>
                    <Route path="/kurumsal/yonetimseması" element={<ManagementChart/>}></Route>
                    <Route path="/kurumsal/mudurlukler/tumayaksan" element={<Tumayaksan/>}></Route>
                    <Route path="/kurumsal/mudurlukler/sonerbılır" element={<Sonerbılır/>}></Route>
                    <Route path="/kurumsal/mudurlukler/bırsenvurdem" element={<Bırsenvurdem/>}></Route>
                    <Route path="/kurumsal/mudurlukler/carullaher" element={<Carullaher/>}></Route>
                    <Route path="/kurumsal/mudurlukler/sabansarıay" element={<SabansarAy/>}></Route>
                    <Route path="/kurumsal/mudurlukler/omersahın" element={<Omersahın/>}></Route>
                    <Route path="/kurumsal/mudurlukler/hafızaltıntaş" element={<Hafızaltıntaş/>}></Route>
                    <Route path="/kurumsal/mudurlukler/burhanettındemırcı" element={<Burhanettındemırcı/>}></Route>
                    <Route path="/kurumsal/mudurlukler/muratanca" element={<Muratanca/>}></Route>
                    <Route path="/kurumsal/mudurlukler/senayaltıntas" element={<Senayaltıntas/>}></Route>
                    <Route path="/kurumsal/mudurlukler/mucahıtkoksal" element={<Mucahıtkoksal/>}></Route>


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
