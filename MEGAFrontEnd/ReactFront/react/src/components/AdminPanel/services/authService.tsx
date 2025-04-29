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
        console.log('Full login response:', data); // Debug log

        if (data.status === 'success') {
            // Store token
            localStorage.setItem('token', data.data.token);

            // Store complete user data including role from response
            const userData = {
                ...data.data,      // Spread all data properties
                role: data.role    // Include the role from top level
            };

            localStorage.setItem('user', JSON.stringify(userData));
            console.log('Stored user data:', userData); // Debug

            return true;
        }
        return false;
    } catch (error) {
        console.error('Login error:', error);
        return false;
    }
};

// authService.ts
export const logout = () => {
    // Clear all auth-related items
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Optional: Clear any other application state
    // localStorage.removeItem('other-app-data');

    // For complete cleanup, consider:
     sessionStorage.clear();

    // Redirect will happen in the UI component
    console.log('User logged out successfully');
};

// Add to authService.ts
export const setupAuthListener = (navigate: (path: string) => void) => {
    // Listen for storage changes (logout from other tabs)
    window.addEventListener('storage', (event) => {
        if (event.key === 'token' && !event.newValue) {
            navigate('/login');
        }
    });

    // Check auth periodically
    setInterval(() => {
        if (!isAuthenticated()) {
            navigate('/login');
        }
    }, 300000); // 5 minutes
};

export const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
};

export const isAuthenticated = () => {

    return localStorage.getItem('token') !== null;
};

export const getUserRole = () => {
    try {
        const userStr = localStorage.getItem('user');
        if (!userStr) {
            console.warn('No user data in localStorage');
            return null;
        }

        const user = JSON.parse(userStr);
        console.log('Current localStorage user:', user);

        // Check role in multiple possible locations
        return user?.role || null;
    } catch (error) {
        console.error('Error parsing user data:', error);
        return null;
    }
};
export const hasRole = (requiredRole: string) => {
    const role = getUserRole();
    return role === requiredRole;
};

export const isAdmin = () => {
    const role = getUserRole();
    return role && role.toLowerCase() === 'admin';

};