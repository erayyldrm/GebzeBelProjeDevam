
import { useState, useEffect } from 'react';

export const useScript = (urls: string[]): boolean => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const scriptPromises = urls.map(url => {
            return new Promise<void>((resolve, reject) => {
                // Check if the script is already loaded
                const existingScript = document.querySelector(`script[src="${url}"]`);
                if (existingScript) {
                    resolve();
                    return;
                }

                // Create the script element
                const script = document.createElement('script');
                script.src = url;
                script.async = true;

                // Set event handlers
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Failed to load script: ${url}`));

                // Add script to the document
                document.body.appendChild(script);
            });
        });

        // Wait for all scripts to load
        Promise.all(scriptPromises)
            .then(() => setLoaded(true))
            .catch(error => {
                console.error('Error loading scripts:', error);
                setLoaded(false);
            });

        // Cleanup function
        return () => {
            // Optional: remove scripts on component unmount
            // This is typically not necessary as scripts will remain in the DOM
        };
    }, [urls.join(',')]); // Dependencies array with stringified urls

    return loaded;
};

// hooks/useStylesheet.tsx
