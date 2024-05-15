import React from 'react';

export function Layout({ children }) {
    return (
        <main className= "flex flex-col items-center justify-center min-h-screen bg-blue-950">
            <div className="flex flex-col min-h-screen justify-center bg-blue-950">
                <main className="flex-1">{children}</main>
                <footer className="flex items-center justify-center bg-[#0e1726] py-0.5 text-center text-xs text-white">
                    <span className="font-sans text-[10px]">© Dhairya Gajjar 2024. All rights reserved.</span>
                </footer>
            </div>
        </main>
    );
}
