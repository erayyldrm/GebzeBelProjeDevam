// src/services/authService.ts
const API_URL = 'http://localhost:8080/api/auth';

export const login = async (username: string, password: string) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (data.status === 'success') {
            // Store token in localStorage
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('user', JSON.stringify({
                tcNo: data.data.tcNo,
                role: data.role
            }));
            return true;
        }
        return false;
    } catch (error) {
        console.error('Login error:', error);
        return false;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
};

export const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
};

export const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
};

export const getUserRole = () => {
    const userStr = localStorage.getItem('user');
    if (!userStr) return null;

    const user = JSON.parse(userStr);
    return user.role || null;
};

export const hasRole = (requiredRole: string) => {
    const role = getUserRole();
    return role === requiredRole;
};

export const isAdmin = () => {
    return hasRole('Admin');
};