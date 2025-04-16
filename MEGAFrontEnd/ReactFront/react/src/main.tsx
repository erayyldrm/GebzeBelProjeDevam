// src/main.tsx
import React from 'react';
import './output.css';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import './index.scss';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
    </React.StrictMode>
);
