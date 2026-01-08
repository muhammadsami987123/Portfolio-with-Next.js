'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import Background from '@/components/Background';



const projects = [
  {
    id: 0,
    title: '100 Days of AI Agents',
    description: 'An intensive technical journey architecting 550+ autonomous AI entities. Focused on multi-agent orchestration, contextual memory, and real-world utility frameworks using OpenAI, LangChain, and CrewAI.',
    tags: ['Python', 'TypeScript', 'OpenAI', 'LangChain', 'AI Agents'],
    imageUrl: '/project-ai-agents.png',
    liveUrl: 'https://github.com/muhammadsami987123/100DaysOfAI-Agents',
    githubUrl: 'https://github.com/muhammadsami987123/100DaysOfAI-Agents',
    category: 'AI & Automation'
  },
  {
    id: 1,
    title: 'Furniture E-Commerce Platform',
    description: 'High-performance commerce solution with advanced product management, secure payment orchestration, and automated shipping logic.',
    tags: ['Next.js', 'Sanity', 'Stripe', 'Tailwind'],
    imageUrl: '/projext1.png',
    liveUrl: 'https://hackthone-two.vercel.app/',
    githubUrl: 'https://github.com/muhammadsami987123/Marketplace-Hackathon-2025.git',
    category: 'Full Stack'
  },
  {
    id: 2,
    title: 'AI-Powered Blog Platform',
    description: 'Modern content ecosystem featuring rich-text capabilities, dynamic SEO optimization, and a headless architectural backend.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Sanity'],
    imageUrl: '/project3.png',
    liveUrl: 'https://blogwebsite-gray.vercel.app/',
    githubUrl: 'https://github.com/muhammadsami987123/Blog-website',
    category: 'Full Stack'
  },
  {
    id: 7,
    title: 'Enterprise Admin Dashboard',
    description: 'Sophisticated dashboard interface for real-time analytics, inventory management, and multi-tenant user orchestration.',
    tags: ['React', 'Node.js', 'Next.js', 'Sanity'],
    imageUrl: '/project16.png',
    liveUrl: 'https://ecommerceadmindashboard-puce.vercel.app/',
    category: 'Systems'
  },
  {
    id: 6,
    title: 'Intelligent Chat Interface',
    description: 'Neural communication bridge featuring context-aware responses, real-time sync, and customizable logic nodes.',
    tags: ['Next.js', 'Node.js', 'Socket.io'],
    imageUrl: '/project8.png',
    liveUrl: 'https://chat-bot-using-next-js.vercel.app/',
    githubUrl: 'https://github.com/muhammadsami987123/ChatBot-using-next.js',
    category: 'AI & Automation'
  },
  {
    id: 3,
    title: 'Electronics Tech Marketplace',
    description: 'Comprehensive online marketplace with advanced search algorithms, secure checkout, and real-time inventory tracking.',
    tags: ['React', 'Sanity', 'Stripe'],
    imageUrl: '/project2.png',
    liveUrl: 'https://e-commerce--exclusive.vercel.app/',
    githubUrl: 'https://github.com/muhammadsami987123/Electronic-E-Commerce.git',
    category: 'Full Stack'
  },
  {
    id: 4,
    title: 'Productivity Logic System',
    description: 'Advanced task management application with local storage persistence, priority filtering, and reactive UI states.',
    tags: ['TypeScript', 'Next.js', 'Tailwind'],
    imageUrl: '/project5.png',
    liveUrl: 'https://todo-app2-rho.vercel.app/',
    githubUrl: 'https://github.com/muhammadsami987123/Todo-app.git',
    category: 'Utility'
  },
  {
    id: 5,
    title: 'Dynamic Resume Architect',
    description: 'Professional resume generation tool with real-time PDF synthesis and customizable logic-driven templates.',
    tags: ['TypeScript', 'Tailwind', 'Next.js'],
    imageUrl: '/project6.png',
    liveUrl: 'https://resme-builder-milestone-05.vercel.app/',
    githubUrl: 'https://github.com/muhammadsami987123/Resme-Builder-Milestone-5.git',
    category: 'Utility'
  },
  {
    id: 16,
    title: 'PaneClouds Infrastructure',
    description: 'Digital presence for cloud-native hosting solutions, architected for high-performance service delivery.',
    tags: ['Next.js', 'Framer Motion'],
    imageUrl: '/project15.png',
    liveUrl: 'https://paneclounds.vercel.app/',
    githubUrl: 'https://github.com/muhammadsami987123/Pana-CLoud',
    category: 'Systems'
  },
  {
    id: 10,
    title: 'Pro Unit Logic Converter',
    description: 'Precision measurement conversion tool built with high-accuracy algorithmic logic.',
    tags: ['Python', 'Streamlit'],
    imageUrl: '/project11.png',
    liveUrl: 'https://unit--convertor.streamlit.app/',
    category: 'Utility'
  },
  {
    id: 11,
    title: 'Data Sweeper & Intelligence',
    description: 'Advanced data cleaning and processing suite for handling large-scale neural datasets.',
    tags: ['Python', 'Pandas', 'Numpy'],
    imageUrl: '/project12.png',
    liveUrl: 'https://data-sweeper-app2.streamlit.app/',
    category: 'AI & Automation'
  }
];

const categories = ['All', 'AI & Automation', 'Full Stack', 'Systems', 'Utility'];

export default function AllProjects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <Background className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase"
          >
            Digital Archive
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            The Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Repository.</span>
          </motion.h2>
          <motion.p
            className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            A full documentation of my technological output, ranging from autonomous AI agents to enterprise-grade web architectures.
          </motion.p>
        </div>

        {/* Search and Filters */}
        <div className="mb-16 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative w-full md:max-w-md group">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Search by title or tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 focus:border-blue-500 dark:focus:border-blue-500/50 outline-none transition-all text-sm font-medium"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all uppercase tracking-widest ${activeCategory === cat
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-lg'
                    : 'bg-zinc-100/50 dark:bg-zinc-800/50 text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-100 dark:border-zinc-800 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
              >
                <div className="aspect-video relative bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading='lazy'
                  />
                  <div className="absolute top-4 right-4 py-1 px-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-[9px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.category}
                  </div>
                </div>

                <div className="p-8 space-y-4 flex-1 flex flex-col">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{project.title}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 text-[9px] font-bold uppercase tracking-wider rounded-lg border border-zinc-100 dark:border-zinc-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 pt-6 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-black tracking-widest text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors uppercase"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[10px] font-black tracking-widest text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors uppercase"
                      >
                        <FiGithub /> Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global Footer Call */}
        <div className="text-center mt-24 pt-16 border-t border-zinc-100 dark:border-zinc-900">
          <p className="text-zinc-500 text-sm mb-6 uppercase tracking-[0.3em] font-bold">Deep Dive into Source</p>
          <a
            href="https://github.com/muhammadsami987123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            <FiGithub className="text-xl" /> Access Complete GitHub Archive
          </a>
        </div>
      </div>
    </Background>
  );
}