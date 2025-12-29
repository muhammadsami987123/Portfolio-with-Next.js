'use client';

import { ReactNode } from 'react';

interface BackgroundProps {
    children?: ReactNode;
    showExtraGradients?: boolean;
    className?: string;
}

export default function Background({ children, showExtraGradients = false, className = '' }: BackgroundProps) {
    return (
        <div className={`relative overflow-hidden bg-white dark:bg-black transition-colors duration-300 ${className}`}>
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Dot Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#333_1px,transparent_1px)] opacity-60"></div>

                {/* Global Gradients */}
                <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent"></div>

                {showExtraGradients && (
                    <>
                        <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen"></div>
                        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen"></div>
                    </>
                )}
            </div>

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
