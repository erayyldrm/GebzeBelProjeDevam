import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Loader from './components/loader';
import LoginForm from './components/Login_v3/LoginForm';
import Footer from './components/Footer/Footer'
import CoolNavbar from './components/NavBar/CoolNavbar'

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

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <CoolNavbar/>
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    {/* Other routes */}
                </Routes>
                <Footer/>
            </Router>
        </QueryClientProvider>
    );
};

export default App;