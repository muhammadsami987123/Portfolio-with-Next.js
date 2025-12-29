'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Background from '@/components/Background';
import {
  FiDownload,
  FiMail,
  FiLinkedin,
  FiGithub,
  FiBook,
  FiCode,
  FiAward,
  FiGlobe,
  FiCpu,
  FiTrendingUp,
} from 'react-icons/fi';

export default function About() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <FiBook /> },
    { id: 'experience', label: 'Experience', icon: <FiCode /> },
    { id: 'skills', label: 'Skills', icon: <FiAward /> },
    { id: 'ai', label: 'AI Journey', icon: <FiCpu /> },
    { id: 'education', label: 'Education', icon: <FiGlobe /> },
  ];

  const tabContent = {
    profile: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-xl font-medium text-zinc-900 dark:text-white leading-relaxed">
            I am an <span className="text-blue-600 dark:text-blue-400">AI Agent Engineer & Full-Stack Developer</span> based in Karachi, dedicated to pioneering the next generation of intelligent automation.
          </p>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              My expertise lies at the intersection of sophisticated web architectures and cutting-edge artificial intelligence. I specialize in building autonomous AI agents, intelligent workflow automations, and scalable full-stack applications that solve complex real-world challenges.
            </p>
            <p>
              With over <span className="font-bold text-zinc-900 dark:text-white">150+ successful projects</span> and <span className="font-bold text-zinc-900 dark:text-white">550+ AI agents</span> developed, I bring a unique perspective to every solution—combining technical depth with a focus on measurable business impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Successful Projects', value: '150+', icon: <FiTrendingUp /> },
            { label: 'AI Agents Engineered', value: '550+', icon: <FiCpu /> },
            { label: 'E-commerce Platforms', value: '7+', icon: <FiGlobe /> },
            { label: 'UI/UX Solutions', value: '50+', icon: <FiAward /> },
          ].map((stat) => (
            <div key={stat.label} className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/50 transition-all hover:border-zinc-200 dark:hover:border-zinc-600 group">
              <div className="text-blue-600 dark:text-blue-400 mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    skills: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'AI & Machine Learning',
              skills: ['OpenAI SDK & API Integration', 'LangChain & CrewAI Frameworks', 'Prompt & Context Engineering', 'RAG & Vector Databases', 'HuggingFace & Model Finetuning']
            },
            {
              title: 'Full-Stack Development',
              skills: ['Next.js & React Ecosystem', 'TypeScript & JavaScript', 'Python & Django Architecture', 'Tailwind CSS & Modern UI', 'Headless CMS (Sanity, Strapi)']
            },
            {
              title: 'Backend & Data',
              skills: ['Node.js & Express.js', 'PostgreSQL & MySQL', 'REST & GraphQL APIs', 'Database Optimization', 'Real-time Systems (Socket.io)']
            },
            {
              title: 'DevOps & Tools',
              skills: ['Docker & Containerization', 'AWS & Cloud Infrastructure', 'CI/CD Pipelines (Vercel, GitHub)', 'Git & Collaborative Workflow', 'n8n & Workflow Automation']
            }
          ].map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 text-sm">
                    <span className="text-blue-500/50">→</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
    experience: (
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {[
          {
            title: 'Founder & Lead Engineer',
            company: 'CodePulse Innovations',
            period: '2025 – Present',
            description: 'Leading product development of AI-driven SaaS solutions, including FolioGenerator.com. Architecting scalable full-stack applications with focus on performance.'
          },
          {
            title: 'AI Agent Architect',
            company: 'Independent Engineering',
            period: '2024 – Present',
            description: 'Developed 550+ advanced AI agents utilizing OpenAI, LangChain, and CrewAI. Focused on multi-agent orchestration and autonomous problem-solving workflows.'
          },
          {
            title: 'Full Stack Consultant',
            company: 'Diverse Client Ecosystem',
            period: '2023 – Present',
            description: 'Delivering end-to-end web solutions for global clients. Specialized in high-conversion e-commerce and complex dashboard architectures.'
          },
          {
            title: 'Web Development Solutions',
            company: 'Independent Contractor',
            period: '2020 – 2022',
            description: 'Successfully delivered digital products for local and international clients, mastering JavaScript, PHP, and modern CSS frameworks.'
          }
        ].map((item, idx) => (
          <div key={idx} className="relative group">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{item.period}</p>
              </div>
              <div className="md:col-span-3 space-y-1">
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium text-xs">{item.company}</p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mt-2">{item.description}</p>
              </div>
            </div>
            {idx !== 3 && <div className="mt-8 border-t border-zinc-100 dark:border-zinc-800" />}
          </div>
        ))}
      </div>
    ),
    ai: (
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Orchestrating Autonomous Intelligence</h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            My AI research and development focus on the practical application of Large Language Models (LLMs) through autonomous agents. I specialize in building multi-agent systems where each entity possesses specific tools, memory, and objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
            <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Core Focus Areas</h4>
            <ul className="space-y-3">
              {[
                'Autonomous Multi-Agent Orchestration',
                'Advanced Retrieval Augmented Generation (RAG)',
                'Model Context Protocol (MCP) Implementation',
                'Prompt Engineering & Chain-of-Thought Logic',
                'Local LLM Deployment & Performance Tuning'
              ].map(item => (
                <li key={item} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
            <h4 className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-4">Research Milestones</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-zinc-900 dark:text-white mb-1">550+ Agents Built</p>
                <p className="text-[10px] text-zinc-500">Spanning BI, automation, and creative workflows.</p>
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900 dark:text-white mb-1">Context Preservation</p>
                <p className="text-[10px] text-zinc-500">Developing methods for long-term agent memory.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    education: (
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-8">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <FiGlobe className="text-blue-600" /> Academic & Specialized Training
          </h3>
          <div className="space-y-8">
            {[
              {
                title: 'AI and Full Stack Specialization',
                institution: 'GIAIC & PIAIC Program',
                period: '2024 – Present',
                details: 'Intensive curriculum covering Generative AI, Cloud-Native Computing, and Modern Web Architectures.'
              },
              {
                title: 'Advanced Software Engineering',
                institution: 'Professional Development',
                period: 'Continuous',
                details: 'Self-directed mastery of distributed systems, database optimization, and scalable UI design patterns.'
              }
            ].map((edu, idx) => (
              <div key={idx} className="relative group border-l-2 border-zinc-100 dark:border-zinc-800 pl-6 space-y-2">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-600" />
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{edu.title}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium text-xs">{edu.institution} | {edu.period}</p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12 pt-8 border-t border-zinc-100 dark:border-zinc-800">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <FiAward className="text-purple-600" /> Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Prompt & Context Engineering', year: '2025' },
              { title: 'Model Context Protocol (MCP)', year: '2025' },
              { title: 'Cloud & AI Architecture Specialist', year: '2025' },
              { title: 'Responsible AI & Ethics', year: '2025' },
              { title: 'Full Stack Web Masterclass', year: '2024' },
              { title: 'Top Performer - CodeAlpha Intern', year: '2025' }
            ].map((cert, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/20 transition-all flex justify-between items-center group">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors uppercase tracking-tight">{cert.title}</p>
                  <p className="text-[10px] text-zinc-500 font-bold tracking-widest">VALIDATED {cert.year}</p>
                </div>
                <div className="text-blue-600 dark:text-blue-400 opacity-20 group-hover:opacity-100 transition-opacity">
                  <FiAward />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  };

  return (
    <Background className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tighter">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Intelligence.</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            Engineering the intersection of sophisticated web development and modular AI solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          {/* Profile Card Column */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 lg:sticky lg:top-24"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-xl">
                <div className="aspect-[4/5] relative bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src="/profile1.png"
                    alt="Muhammad Sami"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white tracking-tight">Muhammad Sami</h3>
                    <p className="text-zinc-300 text-xs font-bold uppercase tracking-widest mt-1">AI & Full-Stack Engineer</p>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="flex justify-center gap-6">
                    {[
                      { href: "https://www.linkedin.com/in/muhammad-sami-3aa6102b8/", icon: <FiLinkedin />, label: "LinkedIn" },
                      { href: "https://github.com/muhammadsami987123", icon: <FiGithub />, label: "GitHub" },
                      { href: "mailto:m.samiwaseem1234@gmail.com", icon: <FiMail />, label: "Email" }
                    ].map(social => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-blue-600 transition-all hover:scale-110"
                        aria-label={social.label}
                      >
                        <span className="text-xl">{social.icon}</span>
                      </a>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://muhammad-sami-resume.vercel.app/"
                      target="_blank"
                      className="flex items-center justify-center gap-2 py-3 bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white rounded-xl font-bold text-xs transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                    >
                      <FiGlobe /> Web CV
                    </a>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      className="flex items-center justify-center gap-2 py-3 border-2 border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-xl font-bold text-xs transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-[0.98]"
                    >
                      <FiDownload /> Get PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tab Content Column */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 space-y-12"
          >
            {/* Minimalist Tab Navigation */}
            <div className="flex flex-wrap gap-1 p-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 w-fit">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-2.5 px-6 text-sm font-bold rounded-lg transition-all ${activeTab === tab.id
                    ? 'bg-white dark:bg-zinc-700 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
                    }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic Content Area */}
            <div className="min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {tabContent[activeTab as keyof typeof tabContent]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Background>
  );
}