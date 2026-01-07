'use client';

import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar, FiCheckCircle } from 'react-icons/fi';

interface Certificate {
    title: string;
    issuer: string;
    year: string;
    description?: string;
    link?: string;
    category: string;
}

const certificates: Certificate[] = [
    {
        title: 'National Hackathon II Winner',
        issuer: 'Pan-Pakistan AI Competitions',
        year: '2025',
        category: 'Achievement',
        description: 'Won 1st place for architectural excellence in Cloud-Native AI infrastructure.',
        link: '#'
    },
    {
        title: 'National Hackathon III Winner',
        issuer: 'Pan-Pakistan AI Competitions',
        year: '2025',
        category: 'Achievement',
        description: 'Achieved consecutive victory specializing in Agentic Tutoring Platforms.',
        link: '#'
    },
    {
        title: 'Model Context Protocol (MCP) Certified',
        issuer: 'Anthropic / Specialized Training',
        year: '2025',
        category: 'Technical',
        description: 'Certified in building and scaling MCP servers for distributed AI agents.',
        link: '#'
    },
    {
        title: 'Cloud-Native Architecture Specialist',
        issuer: 'PIAIC Program',
        year: '2025',
        category: 'Technical',
        description: 'Advanced specialization in Kubernetes, Docker, and distributed systems.',
        link: '#'
    },
    {
        title: '1st Place Physical AI Hackathon',
        issuer: 'National AI Challenge',
        year: '2024',
        category: 'Achievement',
        description: 'Recognized for building the fastest-to-submit Physical AI Humanoid prototype.',
        link: '#'
    },
    {
        title: 'FolioGenerator Core Innovation',
        issuer: 'Folio Labs',
        year: '2025',
        category: 'Innovation',
        description: 'Inaugural award for developing recursive multi-agent portfolio synthesis systems.',
        link: '#'
    }
];

export default function Certificates() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/30 transition-all overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <FiAward className="text-6xl text-blue-600" />
                        </div>

                        <div className="relative z-10 space-y-4">
                            <div className="flex items-start justify-between">
                                <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600">
                                    <FiAward className="text-xl" />
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-[9px] font-bold uppercase tracking-widest">
                                    <FiCalendar /> {cert.year}
                                </div>
                            </div>

                            <div>
                                <div className="h-0.5 w-8 bg-blue-600/30 rounded-full mb-3 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500" />
                                <h4 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                    {cert.title}
                                </h4>
                                <p className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-tight mt-1">
                                    {cert.issuer}
                                </p>
                            </div>

                            {cert.description && (
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                                    {cert.description}
                                </p>
                            )}

                            <div className="pt-4 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/50">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                                    <FiCheckCircle className="text-green-500" /> Verified Credential
                                </span>
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1.5 text-xs font-bold"
                                    >
                                        View <FiExternalLink />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
