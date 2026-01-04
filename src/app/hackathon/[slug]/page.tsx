'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    FiArrowLeft, FiExternalLink, FiGithub, FiAward,
    FiCheckCircle, FiCpu, FiLayers, FiPlay,
    FiCode, FiMessageSquare, FiCloud, FiSettings,
    FiZap, FiActivity, FiTarget, FiHash
} from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import Background from '@/components/Background';
import { hackathonProjects } from '@/data/hackathon-projects';
import { useRef } from 'react';

const iconMap: Record<string, any> = {
    cpu: FiCpu,
    layers: FiLayers,
    play: FiPlay,
    code: FiCode,
    message: FiMessageSquare,
    cloud: FiCloud,
    settings: FiSettings,
    zap: FiZap,
    activity: FiActivity
};

export default function HackathonProjectDetail() {
    const params = useParams();
    const router = useRouter();
    const project = hackathonProjects.find(p => p.slug === params.slug);

    if (!project) {
        return (
            <Background className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-6">
                    <h1 className="text-2xl font-bold dark:text-white">PROJECT_NOT_FOUND</h1>
                    <button
                        onClick={() => router.push('/')}
                        className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all"
                    >
                        Return Home
                    </button>
                </div>
            </Background>
        );
    }

    return (
        <Background className="min-h-screen">
            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link
                        href="/#hackathons"
                        className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-500 transition-colors font-bold text-sm tracking-tight"
                    >
                        <FiArrowLeft /> Back to Victories
                    </Link>
                </motion.div>

                {/* Hero Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 font-bold text-[10px] uppercase tracking-wider border border-blue-600/20">
                                    <FiAward /> {project.achievement}
                                </span>
                                <span className="text-zinc-400 text-[10px] font-bold tracking-widest uppercase">
                                    ID: {project.id}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white leading-tight tracking-tight">
                                {project.title}
                            </h1>
                            <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-zinc-200 dark:border-zinc-800">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a href={project.liveUrl} target="_blank" className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2">
                                <FiExternalLink /> Live Project
                            </a>
                            <a href={project.githubUrl} target="_blank" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all border border-zinc-200 dark:border-zinc-700 flex items-center gap-2">
                                <FiGithub /> GitHub
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl"
                    >
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-100 dark:border-zinc-800 space-y-4"
                    >
                        <FiTarget className="text-red-500 text-2xl" />
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white uppercase tracking-wider">The Challenge</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{project.challenge}</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 bg-white dark:bg-blue-900/10 rounded-3xl border border-blue-500/10 space-y-4"
                    >
                        <FiZap className="text-blue-500 text-2xl" />
                        <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">The Solution</h3>
                        <p className="text-zinc-500 dark:text-zinc-300 text-sm leading-relaxed">{project.solution}</p>
                    </motion.div>
                </div>

                {/* Modules */}
                <div className="mb-24">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">System Architecture</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {project.modules?.map((module, i) => {
                            const Icon = iconMap[module.icon || 'cpu'];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/30 transition-all group"
                                >
                                    <div className="mb-6 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                                        <Icon />
                                    </div>
                                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">{module.title}</h4>
                                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{module.content}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Outcomes & Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    <div className="lg:col-span-3 space-y-8">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Key Outcomes</h2>
                        <div className="space-y-4">
                            {project.outcomes.map((outcome, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex gap-4 p-5 bg-white dark:bg-zinc-900/30 rounded-2xl border border-zinc-100 dark:border-zinc-800"
                                >
                                    <FiCheckCircle className="text-blue-600 shrink-0 mt-1" />
                                    <p className="text-zinc-600 dark:text-zinc-300 text-sm font-medium leading-relaxed">{outcome}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-6 bg-zinc-50 dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Tech Foundation</h2>
                        <div className="space-y-6">
                            {project.stack.map((stack, i) => (
                                <div key={i} className="space-y-3">
                                    <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{stack.category}</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {stack.items.map((item, j) => (
                                            <span key={j} className="px-3 py-1.5 rounded-lg text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-800 text-[10px] font-bold uppercase tracking-wider border border-zinc-200 dark:border-zinc-700">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Background>
    );
}
