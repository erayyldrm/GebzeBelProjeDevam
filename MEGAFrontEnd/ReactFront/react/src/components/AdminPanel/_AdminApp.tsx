import React from "react";
import {Route, Routes} from "react-router-dom";
import Users from "./Users.tsx";
import Dashboard from './HomePanel.tsx';
import {SearchProvider} from './context/SearchContext.tsx';


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
