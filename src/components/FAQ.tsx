'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
    {
        question: 'What is your typical project timeline?',
        answer: 'Timelines vary based on complexity. A specialized AI agent can take 1-2 weeks, while a comprehensive full-stack platform integrated with multi-agent workflows typically spans 4-8 weeks.'
    },
    {
        question: 'Do you work with international clients?',
        answer: 'Yes, I have worked with clients across North America, Europe, and Asia. I am accustomed to remote collaboration across various time zones.'
    },
    {
        question: 'Which AI frameworks do you specialize in?',
        answer: 'I primarily work with CrewAI, LangChain, and OpenAI SDKs. For infrastructure, I use Neo4j and Qdrant for vector search and RAG architectures.'
    },
    {
        question: 'Can you integrate AI into existing legacy systems?',
        answer: 'Absolutely. My background in full-stack architecture allows me to bridge the gap between legacy databases and modern agentic layers effectively.'
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase mb-6"
                    >
                        Clarifications
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight"
                    >
                        Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Queries.</span>
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 flex items-center justify-between text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                            >
                                <span className="font-bold text-zinc-900 dark:text-white">{faq.question}</span>
                                {openIndex === index ? (
                                    <FiMinus className="text-blue-600" />
                                ) : (
                                    <FiPlus className="text-zinc-400" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed border-t border-zinc-50 dark:border-zinc-800">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
