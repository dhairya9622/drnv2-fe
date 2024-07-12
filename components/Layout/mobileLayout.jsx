import React from 'react';
import './Layout.css'; // Ensure you create this file and add the CSS

export function MobileLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-animated">
            <main className="flex-1">{children}</main>
            <footer className="absolute bottom-0 left-0 right-0 py-2 text-center text-xs text-gray-500">
                <p>© 2024 Dhairya Gajjar. Please use Desktop for AI chat.</p>
            </footer>
        </div>
    );
}
