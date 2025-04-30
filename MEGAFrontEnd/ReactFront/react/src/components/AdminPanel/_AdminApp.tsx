import React, {useEffect} from "react";
import {Route, Routes, Navigate, Outlet, useNavigate} from "react-router-dom";
import Users from "./Users.tsx";
import Dashboard from './HomePanel.tsx';
import {SearchProvider} from './context/SearchContext.tsx';
import {isAuthenticated, isAdmin, setupAuthListener} from './services/authService.tsx';


const AdminRoute = () => {
    // Check these return the expected values
    // console.log('Is authenticated:', isAuthenticated());
    // console.log('Is admin:', isAdmin());
    if (!isAuthenticated()) {
        return <Navigate to="/login"/>;
    }

    if (!isAdmin()) {

        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />; // This will render the child routes
};


const _AdminApp: React.FC = () => {

    const navigate = useNavigate();
    useEffect(() => {
        setupAuthListener(navigate);
    }, [navigate]);

    return (
        <SearchProvider> {/* Wrap ALL routes that need search context */}
            <Routes>
                {/* All routes here are relative to /admin */}
                <Route element={<AdminRoute />}>
                    {/* /admin/dashboard */}
                    <Route path="dashboard" element={<Dashboard />} />

                    {/* /admin/users */}
                    <Route path="users" element={<Users />} />

                    {/* Redirect /admin to /admin/dashboard */}
                    <Route index element={<Navigate to="dashboard" replace />} />
                </Route>
            </Routes>
        </SearchProvider>
    );
};
export default _AdminApp;
