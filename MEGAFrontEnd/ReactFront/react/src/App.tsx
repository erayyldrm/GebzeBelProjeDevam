import {Outlet, Route, Routes} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginForm from './components/Login_v3/LoginForm2.tsx';
import Footer from './components/Footer/Footer';
import CoolNavbar from './components/NavBar/CoolNavbar';
import SignUp from './components/SignUp/SignUp';
import ContentArea from "./components/Slide/Slide.tsx";
import Baskan from "./components/kurumsal/baskan.tsx";
import BelediyeMeclisi from "./components/kurumsal/belediyemeclisi.tsx";


const queryClient = new QueryClient();

const App: React.FC = () => {


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
