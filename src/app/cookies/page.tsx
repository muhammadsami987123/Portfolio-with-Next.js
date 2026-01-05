'use client';

import { motion } from 'framer-motion';
import Background from '@/components/Background';
import { FiCheck, FiInfo, FiSettings, FiActivity } from 'react-icons/fi';

export default function CookiesPolicy() {
    const lastUpdated = "January 6, 2026";

    const categories = [
        {
            title: "Essential Cookies",
            status: "Always Active",
            icon: <FiSettings className="text-blue-500" />,
            content: "These are necessary for the website to function. They handle basic functions like page navigation, security, and the persistent 'dark mode' state across your session."
        },
        {
            title: "Performance & Analytics",
            status: "Optional",
            icon: <FiActivity className="text-purple-500" />,
            content: "These allow us to count visits and traffic sources so we can measure and improve the architectural performance of our site. No personally identifiable data is shared."
        },
        {
            title: "Agentic Memory",
            status: "Session-based",
            icon: <FiInfo className="text-orange-500" />,
            content: "Some AI demonstrations may use temporary session storage to maintain conversation context during your visit. This 'memory' is cleared once the browser is closed."
        }
    ];

    return (
        <Background className="py-24 lg:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase mb-6 border border-blue-600/10">
                        Cookie Configuration
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                        Cookies <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Inventory.</span>
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium uppercase tracking-[0.2em]">
                        Last Updated: {lastUpdated}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-[2rem] bg-white/50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row gap-8 items-start md:items-center"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-2xl shadow-inner shrink-0">
                                {cat.icon}
                            </div>
                            <div className="flex-1 space-y-2">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white uppercase tracking-tight">{cat.title}</h3>
                                    <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-400">
                                        {cat.status}
                                    </span>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                                    {cat.content}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                                <FiCheck /> Configured
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-center text-xs text-zinc-400"
                >
                    You can adjust your cookie settings at any time through your browser configuration.
                </motion.p>
            </div>
        </Background>
    );
}
