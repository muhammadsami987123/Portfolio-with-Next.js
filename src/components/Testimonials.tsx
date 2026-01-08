'use client';

import { motion } from 'framer-motion';
import { FiStar, FiMessageSquare } from 'react-icons/fi';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Alex Rivera',
        role: 'CTO, TechFlow Systems',
        content: 'Muhammad is a visionary when it comes to AI orchestration. He rebuilt our entire data pipeline using autonomous agents, reducing our manual overhead by nearly 70%.',
        avatar: 'https://i.pravatar.cc/150?u=alex',
        rating: 5
    },
    {
        name: 'Sarah Chen',
        role: 'Founder, EduAI Labs',
        content: 'Working with him on our agentic tutoring platform was a game-changer. His deep understanding of RAG and vector databases allowed us to launch a month ahead of schedule.',
        avatar: 'https://i.pravatar.cc/150?u=sarah',
        rating: 5
    },
    {
        name: 'David Miller',
        role: 'Product Lead, Nexus Cloud',
        content: 'The level of sophistication in his full-stack architectures is rare. He doesn\'t just write code; he engineers intelligent ecosystems that are built to scale.',
        avatar: 'https://i.pravatar.cc/150?u=david',
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 relative overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase mb-6"
                    >
                        Social Proof
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight"
                    >
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Feedback.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg"
                    >
                        Insights from industry leaders and collaborators who have experienced the power of engineered intelligence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-8 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <div className="absolute top-8 right-8 text-blue-100 dark:text-blue-900/20">
                                <FiMessageSquare size={40} />
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FiStar key={i} className="text-amber-400 fill-amber-400" size={14} />
                                ))}
                            </div>

                            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-8 italic">
                                &quot;{testimonial.content}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-100 dark:border-zinc-800">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">{testimonial.name}</h4>
                                    <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
