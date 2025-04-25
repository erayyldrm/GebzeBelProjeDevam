import React from "react";
import {Route, Routes, Navigate } from "react-router-dom";
import Users from "./Users.tsx";
import Dashboard from './HomePanel.tsx';
import {SearchProvider} from './context/SearchContext.tsx';
import { isAuthenticated, isAdmin } from './services/authService.tsx';




const AdminRoute: React.FC<{children: React.ReactNode}> = ({ children }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/login" />;
    }

    if (!isAdmin()) {
        return <Navigate to="/dashboard" />;
    }

    return <>{children}</>;
};

const _AdminApp: React.FC = () => {
    return (
        <SearchProvider> {/* Wrap ALL routes that need search context */}

            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>

        </SearchProvider>
    );
};
export default _AdminApp;
