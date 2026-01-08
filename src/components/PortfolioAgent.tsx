'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend, FiCpu } from 'react-icons/fi';

export default function PortfolioAgent() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hello! I am Sami\'s Portfolio Agent. How can I help you explore his AI and Full-Stack expertise today?' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        setInput('');

        // Mock response logic
        setTimeout(() => {
            let response = "That's a great question! Sami has engineered over 550 AI agents and specializes in autonomous workflows. You can see his latest work in the Projects section.";
            if (input.toLowerCase().includes('contact')) {
                response = "You can reach Sami via the Contact section at the bottom of the page, or email him at m.samiwaseem1234@gmail.com.";
            } else if (input.toLowerCase().includes('skill')) {
                response = "Sami is an expert in Next.js, Python, LangChain, and CrewAI. Check out the Skills section for a full breakdown.";
            }
            setMessages([...newMessages, { role: 'assistant', content: response }]);
        }, 1000);
    };

    return (
        <>
            <div className="fixed bottom-8 right-8 z-50">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl shadow-blue-500/40 relative group"
                >
                    {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
                    {!isOpen && (
                        <span className="absolute right-full mr-4 py-2 px-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-xs font-bold text-zinc-900 dark:text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                            <FiCpu className="text-blue-600 animate-pulse" />
                            Talk to Sami&apos;s AI
                        </span>
                    )}
                </motion.button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-28 right-8 z-50 w-[350px] max-h-[500px] bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 bg-blue-600 text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                    <FiCpu className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Portfolio Agent</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-[10px] font-medium opacity-80 uppercase tracking-widest">Active Intelligence</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-6 space-y-4 overflow-y-auto min-h-[300px] max-h-[300px] no-scrollbar">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${msg.role === 'user'
                                            ? 'bg-blue-600 text-white rounded-tr-none'
                                            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-tl-none'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask me anything..."
                                    className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-xl py-3 pl-4 pr-12 text-xs focus:ring-2 focus:ring-blue-600 outline-none text-zinc-900 dark:text-white"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                                >
                                    <FiSend size={14} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
