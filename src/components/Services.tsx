'use client';

import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiLayers, FiZap, FiDatabase, FiSmartphone } from 'react-icons/fi';

const services = [
    {
        title: 'Autonomous AI Agents',
        description: 'Developing self-reasoning agentic workflows that plan, execute, and optimize complex industrial tasks using CrewAI and LangChain.',
        icon: <FiCpu />,
        color: 'blue'
    },
    {
        title: 'Custom RAG Architectures',
        description: 'Engineering high-precision Retrieval-Augmented Generation systems with vector databases like Chroma, Pinecone, and Neo4j.',
        icon: <FiDatabase />,
        color: 'indigo'
    },
    {
        title: 'Full-Stack AI Platforms',
        description: 'Building scalable Next.js and Python-based applications integrated with real-time intelligence and sophisticated UI/UX.',
        icon: <FiCode />,
        color: 'purple'
    },
    {
        title: 'Workflow Automation',
        description: 'Scaling business operations by connecting specialized APIs and internal tools with intelligent automation logic (n8n/Make).',
        icon: <FiZap />,
        color: 'amber'
    },
    {
        title: 'Distributed Systems',
        description: 'Architecting horizontally scalable infrastructure and MCP-driven microservices for high-performance AI inference.',
        icon: <FiLayers />,
        color: 'cyan'
    },
    {
        title: 'Intelligent Mobile Apps',
        description: 'Designing cross-platform mobile experiences that leverage on-device or cloud-based neural processing.',
        icon: <FiSmartphone />,
        color: 'rose'
    }
];

export default function Services() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase mb-6"
                    >
                        Capabilities
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight"
                    >
                        Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Solutions.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg"
                    >
                        Specialized services focused on bridging the gap between sophisticated software architecture and autonomous intelligence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 text-blue-600`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                                {service.description}
                            </p>

                            <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-blue-500 transition-colors">
                                <div className="w-8 h-[1px] bg-zinc-200 dark:bg-zinc-800 group-hover:bg-blue-500 transition-colors" />
                                Specialized Service
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
