import { useState, useEffect } from 'react';

export const useStylesheet = (urls: string[]): boolean => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const stylesheetPromises = urls.map(url => {
            return new Promise<void>((resolve, reject) => {
                // Check if the stylesheet is already loaded
                const existingLink = document.querySelector(`link[href="${url}"]`);
                if (existingLink) {
                    resolve();
                    return;
                }

                // Create the link element
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = url;

                // Set event handlers
                link.onload = () => resolve();
                link.onerror = () => reject(new Error(`Failed to load stylesheet: ${url}`));

                // Add link to the document head
                document.head.appendChild(link);
            });
        });

        // Wait for all stylesheets to load
        Promise.all(stylesheetPromises)
            .then(() => setLoaded(true))
            .catch(error => {
                console.error('Error loading stylesheets:', error);
                setLoaded(false);
            });

        // Cleanup function
        return () => {
            // Optional: remove stylesheets on component unmount
            // This is typically not necessary as stylesheets will remain in the DOM
        };
    }, [urls.join(',')]); // Dependencies array with stringified urls

    return loaded;
};