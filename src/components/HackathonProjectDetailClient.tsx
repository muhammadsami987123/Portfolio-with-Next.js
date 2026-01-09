'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiArrowLeft, FiExternalLink, FiGithub, FiAward,
    FiCheckCircle, FiCpu, FiLayers, FiPlay,
    FiCode, FiMessageSquare, FiCloud, FiSettings,
    FiZap, FiActivity, FiTarget, FiSmartphone, FiAlertCircle
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import Image from 'next/image';
import Link from 'next/link';
import Background from '@/components/Background';
import { hackathonProjects } from '@/data/hackathon-projects';
import { useState, useEffect } from 'react';

// Specialized Video Player Component for Robust Playback
const VideoPlayer = ({ videoUrl, title }: { videoUrl: string; title: string }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const isMP4 = videoUrl.toLowerCase().endsWith('.mp4');
    const isGDrive = videoUrl.includes('drive.google.com');

    // Timeout for loading state as fallbacks for cross-origin iframes
    useEffect(() => {
        const timer = setTimeout(() => {
            if (isLoading) {
                setShowHint(true);
            }
        }, 10000); // 10 seconds before showing a hint
        return () => clearTimeout(timer);
    }, [isLoading]);

    return (
        <div className="relative w-full h-full bg-black flex items-center justify-center overflow-hidden">
            {isLoading && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-zinc-900 px-6 text-center">
                    <div className="relative w-16 h-16 mb-6">
                        <div className="absolute inset-0 border-4 border-blue-500/10 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin"></div>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2 animate-pulse">Establishing Secure Stream...</p>
                    {showHint && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[9px] text-zinc-500 max-w-[200px] leading-relaxed"
                        >
                            {isGDrive ? "Google Drive is taking longer than usual. Ensure the video is set to 'Anyone with link'." : "Connection is slower than expected."}
                        </motion.p>
                    )}
                </div>
            )}

            {hasError && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-zinc-900 px-6 text-center">
                    <FiAlertCircle className="text-red-500 text-2xl mb-4" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Stream Connection Failed</p>
                </div>
            )}

            {isMP4 ? (
                <video
                    src={videoUrl}
                    title={title}
                    autoPlay
                    controls
                    className="w-full h-full object-contain z-10"
                    onLoadedData={() => setIsLoading(false)}
                    onError={() => {
                        setIsLoading(false);
                        setHasError(true);
                    }}
                />
            ) : (
                <iframe
                    src={videoUrl.includes('?') ? `${videoUrl}&autoplay=1` : `${videoUrl}?autoplay=1`}
                    title={title}
                    className={`w-full h-full border-0 z-10 transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    onLoad={() => setIsLoading(false)}
                ></iframe>
            )}

            {/* Error / Accessibility Fallback Overlay */}
            {!isLoading && isGDrive && (
                <div className="absolute bottom-4 left-4 right-4 z-30 flex justify-between items-center bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <p className="text-[10px] text-zinc-400 font-medium">Video restricted? Ensure permissions are set to public.</p>
                    <a
                        href={videoUrl.replace('/preview', '/view')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-[9px] font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5"
                    >
                        <FiExternalLink /> Open in Drive
                    </a>
                </div>
            )}
        </div>
    );
};

const iconMap: Record<string, IconType> = {
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

export default function HackathonProjectDetailClient() {
    const params = useParams();
    const router = useRouter();
    const project = hackathonProjects.find(p => p.slug === params.slug);
    const [isPlaying, setIsPlaying] = useState(false);

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
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link
                        href="/#hackathons"
                        className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-500 transition-colors font-bold text-[10px] uppercase tracking-[0.2em]"
                    >
                        <FiArrowLeft className="text-sm" /> Back to Victories
                    </Link>
                </motion.div>

                {/* Hero Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-7 space-y-10"
                    >
                        <div className="space-y-6">
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 font-bold text-[10px] uppercase tracking-widest border border-blue-600/20">
                                    <FiAward className="text-xs" /> {project.achievement}
                                </span>
                                <span className="text-zinc-500 dark:text-zinc-500 text-[10px] font-bold tracking-widest uppercase">
                                    ID: {project.id}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white leading-[1.05] tracking-tight">
                                {project.title}
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium max-w-2xl">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2.5">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider rounded-xl border border-zinc-200 dark:border-zinc-800/50 backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href={project.liveUrl} target="_blank" className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all shadow-xl shadow-blue-500/10 flex items-center gap-2 group">
                                <FiExternalLink className="group-hover:rotate-45 transition-transform" /> Live Project
                            </a>
                            <a href={project.githubUrl} target="_blank" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all border border-zinc-200 dark:border-zinc-800 flex items-center gap-2 shadow-lg">
                                <FiGithub /> Repository
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="absolute -inset-4 bg-blue-500/10 dark:bg-blue-600/20 blur-[60px] rounded-full"></div>
                        <div className="relative aspect-[4/3] lg:aspect-[3/4] xl:aspect-square rounded-[40px] overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl transition-all duration-700">
                            <AnimatePresence mode="wait">
                                {!isPlaying ? (
                                    <motion.div
                                        key="image"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="relative w-full h-full cursor-pointer group"
                                        onClick={() => setIsPlaying(true)}
                                    >
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-500">
                                                <FiPlay className="ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-xl border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest">
                                                <FiSmartphone /> Click to watch in action
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="video"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="w-full h-full"
                                    >
                                        <VideoPlayer videoUrl={project.videoUrl || ''} title={project.title} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-10 bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-100 dark:border-zinc-800 space-y-4 shadow-sm"
                    >
                        <FiTarget className="text-red-500 text-2xl" />
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white uppercase tracking-wider">The Challenge</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{project.challenge}</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-10 bg-white dark:bg-blue-900/5 rounded-3xl border border-blue-500/10 space-y-4 shadow-sm"
                    >
                        <FiZap className="text-blue-500 text-2xl" />
                        <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">The Solution</h3>
                        <p className="text-zinc-500 dark:text-zinc-300 text-sm leading-relaxed">{project.solution}</p>
                    </motion.div>
                </div>

                {/* Modules */}
                <div className="mb-24">
                    <h2 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-10 text-center uppercase tracking-widest">System Architecture</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {project.modules?.map((module, i) => {
                            const Icon = iconMap[module.icon || 'cpu'];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-zinc-50 dark:bg-zinc-900/80 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/30 transition-all group hover:shadow-lg"
                                >
                                    <div className="mb-6 w-12 h-12 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center text-xl shadow-lg ring-4 ring-zinc-900/5 dark:ring-white/5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
