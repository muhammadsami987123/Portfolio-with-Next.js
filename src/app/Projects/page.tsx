'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';



const projects = [
  {
    id: 0,
    title: '🤖 100 Days of AI Agents',
    description: 'A 100-day journey building AI-powered agents using Python, TypeScript, and LLMs to automate real-world tasks. Built 550+ diverse AI agents including conversational AI, data analysis bots, workflow automation agents, and advanced LLM integrations using OpenAI SDK, LangChain, HuggingFace, CrewAI, Chainlit, and Streamlit.',
    tags: ['Python', 'TypeScript', 'OpenAI', 'LangChain', 'GPT', 'AI Agents', 'LLM', 'Automation', 'HuggingFace', 'CrewAI'],
    imageUrl: '/project-ai-agents.png',
    liveUrl: 'https://github.com/muhammadsami987123/100DaysOfAI-Agents',
    githubUrl: 'https://github.com/muhammadsami987123/100DaysOfAI-Agents',
    featured: true,
    stats: {
      stars: 12,
      forks: 1,
      agents: '550+'
    }
  },
  {
    id: 1,
    title: 'Furniture E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
    tags: ['React', 'Node.js', 'next.js', 'sanity', 'Stripe', 'tailwind', 'shipengin'],
    imageUrl: '/projext1.png',
    liveUrl: 'https://hackthone-two.vercel.app/',
    githubUrl: 'https://github.com/muhammadsami987123/Marketplace-Hackathon-2025.git',
  },
  {
    id: 2,
    title: 'Blog Website',
    description: 'A modern blog platform with rich text editing, user authentication, and content management features.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity', 'Markdown'],
    imageUrl: '/project3.png',
    liveUrl: 'https://blogwebsite-gray.vercel.app/',
    githubUrl: 'https://github.com/muhammadsami987123/Blog-website',
  },
  {
    id: 6,
    title: 'ChatBot',
    description: 'A chatbot application that provides automated responses to user queries, with a customizable interface and conversation history.',
    tags: ['React', 'Node.js', "Next.js", 'Tailwind CSS', 'Chat Engine API'],
    imageUrl: '/project8.png',
    liveUrl: 'https://chat-bot-using-next-js.vercel.app/',
    githubUrl: 'https://github.com/muhammadsami987123/ChatBot-using-next.js',
  },
  {
    id: 7,
    title: 'Admin Dashboard',
    description: 'A responsive admin dashboard e-commerce website with user management, analytics, and product management features.',
    tags: ['React', 'Node.js', 'next.js', 'sanity', 'Tailwind CSS'],
    imageUrl: '/project16.png',
    liveUrl: 'https://ecommerceadmindashboard-puce.vercel.app/',
  },
  {
    id: 3,
    title: 'Electronics E-Commerce Platform ',
    description: 'A complete online marketplace for buying all types of electronic items, from smartphones to home appliances, with advanced search and filtering capabilities.',
    tags: ['React', 'Node.js', 'sanity', 'Stripe', 'Tailwind CSS', 'Search API'],
    imageUrl: '/project2.png',
    liveUrl: 'https://e-commerce--exclusive.vercel.app/',
    githubUrl: 'https://github.com/muhammadsami987123/Electronic-E-Commerce.git',
  },
  // {
  //  id:7,
  //  title : 'Admin Dashboard',
  //  description : 'A responsive admin dashboard e-commerce website with user management, analytics, and product management features.',
  //   tags : ['React', 'Node.js', 'next.js', 'sanity', 'Tailwind CSS'],
  //   imageUrl : '/project16.png',
  //   liveUrl : 'https://ecommerceadmindashboard-puce.vercel.app/',
  // },
  {
    id: 4,
    title: 'Todo Application',
    description: 'A full-featured todo app with task management, due dates, priority levels, and filtering options.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Local Storage', 'next.js'],
    imageUrl: '/project5.png',
    liveUrl: 'https://todo-app2-rho.vercel.app/',
    githubUrl: 'https://github.com/muhammadsami987123/Todo-app.git',
  },


];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-20 lg:py-28 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Dot Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#333_1px,transparent_1px)] opacity-60"></div>
        {/* Gradients */}
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <section className="mb-8 sm:mb-10 md:mb-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-zinc-900 dark:via-purple-900/10 dark:to-blue-900/10 rounded-xl sm:rounded-2xl shadow-lg border border-purple-200 dark:border-purple-800/50">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="text-2xl sm:text-3xl md:text-4xl">🤖</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              100 Days of AI Agents Challenge
            </h3>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-zinc-800 dark:text-zinc-200 mb-3 sm:mb-4 leading-relaxed">
            Completed an intensive <strong>100-day journey</strong> building AI-powered agents using cutting-edge technologies.
            This challenge represents a comprehensive exploration of AI agent development, from basic automation to advanced multi-agent systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="bg-white/60 dark:bg-zinc-800/60 p-3 sm:p-4 rounded-lg backdrop-blur-sm shadow-sm">
              <h4 className="font-bold text-sm sm:text-base text-blue-700 dark:text-blue-300 mb-2 sm:mb-3 flex items-center gap-2">
                <span>🎯</span> Key Achievements
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Built <strong>550+ functional AI agents</strong> for real-world automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Mastered <strong>OpenAI SDK, LangChain, and CrewAI</strong> frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Integrated <strong>voice AI (TTS/STT)</strong> and multimodal capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Developed agents for <strong>Google Calendar, Gmail, Weather APIs</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-white/60 dark:bg-zinc-800/60 p-3 sm:p-4 rounded-lg backdrop-blur-sm shadow-sm">
              <h4 className="font-bold text-sm sm:text-base text-purple-700 dark:text-purple-300 mb-2 sm:mb-3 flex items-center gap-2">
                <span>💡</span> Key Learnings
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">→</span>
                  <span><strong>Prompt Engineering</strong> for optimal LLM responses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">→</span>
                  <span><strong>Function Calling</strong> and tool integration patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">→</span>
                  <span><strong>Multi-agent orchestration</strong> with AutoGen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">→</span>
                  <span><strong>RAG systems</strong> with embeddings and vector databases</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
            <span className="px-2 sm:px-3 py-1 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-semibold">Python</span>
            <span className="px-2 sm:px-3 py-1 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-semibold">TypeScript</span>
            <span className="px-2 sm:px-3 py-1 bg-green-600 text-white rounded-full text-xs sm:text-sm font-semibold">OpenAI</span>
            <span className="px-2 sm:px-3 py-1 bg-purple-600 text-white rounded-full text-xs sm:text-sm font-semibold">LangChain</span>
            <span className="px-2 sm:px-3 py-1 bg-pink-600 text-white rounded-full text-xs sm:text-sm font-semibold">CrewAI</span>
            <span className="px-2 sm:px-3 py-1 bg-indigo-600 text-white rounded-full text-xs sm:text-sm font-semibold">HuggingFace</span>
            <span className="px-2 sm:px-3 py-1 bg-cyan-600 text-white rounded-full text-xs sm:text-sm font-semibold">Streamlit</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-purple-200 dark:border-purple-700">
            <a
              href="https://github.com/muhammadsami987123/100DaysOfAI-Agents"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              <FiGithub className="text-lg sm:text-xl" />
              View Challenge Repository
            </a>
            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1">
                ⭐ <strong>12</strong> stars
              </span>
              <span className="flex items-center gap-1">
                🔱 <strong>1</strong> fork
              </span>
            </div>
          </div>
        </section>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-40 sm:h-48 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover "
                  loading='lazy'
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-3 sm:mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-badge text-xs sm:text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <FiGithub className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <Link href="/AllProjects" className="inline-flex items-center text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline">
            <FiArrowRight className="mr-2" /> Show More Projects
          </Link>
        </div>
        {/* <div className="text-center mt-12">
          <a 
            href="https://github.com/muhammadsami987123" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <FiGithub className="mr-2" /> See more on GitHub
          </a>
        </div> */}
      </div>
    </section>
  );
}
