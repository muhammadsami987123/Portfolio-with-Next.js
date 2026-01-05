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
            I am a <span className="text-blue-600 dark:text-blue-400">Senior AI Agent Engineer & Full-Stack Architect</span>, recognized as an industry pioneer in autonomous system design and cloud-native intelligence.
          </p>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              My professional mission is to architect the <span className="italic">&quot;Architecture of Intelligence.&quot;</span> I bridge the gap between sophisticated microservice environments and autonomous agentic layers, enabling systems that don&apos;t just process data—but reason, plan, and execute.
            </p>
            <p>
              Having engineered over <span className="font-bold text-zinc-900 dark:text-white">550+ autonomous AI agents</span> and successfully deployed <span className="font-bold text-zinc-900 dark:text-white">150+ deep-tech projects</span>, I specialize in complex multi-agent orchestration, high-scale Kubernetes deployments, and low-code specialized automation.
            </p>
            <p>
              I am particularly proud of my record in <span className="font-bold text-zinc-900 dark:text-white">National AI Hackathons</span>, where I have consistently been among the <span className="text-blue-600 dark:text-blue-400 font-bold">first to submit</span> award-winning architectures that set new benchmarks for inference efficiency and system scalability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'AI Agents Engineered', value: '550+', icon: <FiCpu /> },
            { label: 'National Victories', value: '3/3', icon: <FiAward /> },
            { label: 'Total Tech Stack', value: '50+', icon: <FiCode /> },
            { label: 'E-commerce Platforms', value: '10+', icon: <FiGlobe /> },
          ].map((stat) => (
            <div key={stat.label} className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/50 transition-all hover:border-zinc-200 dark:hover:border-zinc-600 group">
              <div className="text-blue-600 dark:text-blue-400 mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-zinc-900 dark:text-white mb-1 tracking-tight">{stat.value}</p>
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
              title: 'Intelligence & Core AI',
              skills: ['OpenAI SDK & Anthropic Claude', 'LangChain & Multi-agent CrewAI', 'MCP (Model Context Protocol)', 'RAG & Vector Search (Neo4j, Qdrant)', 'Custom Agentic Infrastructure']
            },
            {
              title: 'Full-Stack Architecture',
              skills: ['Next.js 15 & React 19 Ecosystem', 'TypeScript & Python (FastAPI)', 'Django & Express.js Runtimes', 'High-Performance Tailwind UI/UX', 'GraphQL & Real-time WebSockets']
            },
            {
              title: 'Cloud & Infrastructure',
              skills: ['Kubernetes & Docker Orchestration', 'AWS, GCP, & Azure Cloud', 'Vercel, Railway, & Render Ops', 'CI/CD (GitHub Actions, Argo CD)', 'Cloudflare Edge Computing']
            },
            {
              title: 'Automation & No-Code',
              skills: ['n8n & Zapier Workflow Design', 'Make.com & Pipedream Logic', 'Retool & Appsmith Tooling', 'OpenAI Builder & Custom GPTs', 'Gemini MakerSuite Integration']
            }
          ].map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-sm">
                    <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
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
            title: 'National Hackathon Champion',
            company: 'Pan-Pakistan AI Competitions',
            period: '2024 – 2025',
            description: 'Achieved 3 consecutive victories (Hackathon I, II, & III) specializing in "Physical AI Humanoids", "Cloud-Native Infrastructure", and "Agentic Tutoring Platforms". Noted for being among the fastest submitters with 98%+ architectural bench scores.'
          },
          {
            title: 'Founder & Lead Architect',
            company: 'FolioGenerator.com',
            period: '2025 – Present',
            description: 'Building the future of AI-driven portfolio synthesis. Orchestrating a multi-agent system that autonomously analyzes user data to build, style, and deploy production-ready web platforms.'
          },
          {
            title: 'Senior AI Agent Engineer',
            company: 'Global Intelligence Solutions',
            period: '2024 – Present',
            description: 'Spearheading the implementation of Model Context Protocols (MCP) and RAG paradigms. Developed customized agentic suites for enterprise-level automation and real-time decision making.'
          },
          {
            title: 'Full Stack Consultant',
            company: 'Independent Enterprise Solutions',
            period: '2020 – 2023',
            description: 'Architected and scaled 10+ e-commerce platforms and high-conversion SaaS dashboards. Mastered the migration from legacy CLI systems to modern, highly-available cloud distributions.'
          }
        ].map((item, idx) => (
          <div key={idx} className="relative group">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">{item.period}</p>
                {idx === 0 && (
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 text-[9px] font-bold uppercase tracking-wider border border-amber-500/20">
                    🏆 First to Submit
                  </div>
                )}
              </div>
              <div className="md:col-span-3 space-y-1">
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-tight">{item.company}</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mt-3">{item.description}</p>
              </div>
            </div>
            {idx !== 3 && <div className="mt-8 border-t border-zinc-100 dark:border-zinc-800" />}
          </div>
        ))}
      </div>
    ),
    ai: (
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Narrative Header */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">The Evolution of an <span className="text-blue-600">Agentic Mind.</span></h3>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-3xl">
            <p>
              My AI journey didn&apos;t start with complex models, but with a fascination for <span className="text-zinc-900 dark:text-white font-bold">meaningful automation</span>. In early 2024, I transitioned from traditional full-stack development to exploring how Large Language Models could do more than just generate text—they could <span className="italic">reason</span> and <span className="italic">act</span>.
            </p>
            <p>
              What began as simple prompt engineering experiments quickly evolved into a deep dive into <span className="text-blue-600 font-bold tracking-tight uppercase text-[10px]">Autonomous Agentic Infrastructure</span>. I realized that the future of software isn&apos;t just code we write, but intelligence that writes and executes code on our behalf.
            </p>
          </div>
        </div>

        {/* Journey Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              phase: "Phase I: The Genesis",
              title: "Prompt Engineering & Basic Automation",
              details: "Mastered the art of structured prompting and integrated LLMs into simple web workflows using LangChain and early OpenAI SDKs.",
              icon: <FiBook className="text-blue-500" />
            },
            {
              phase: "Phase II: The Growth",
              title: "550+ Agents & Multi-Agent Systems",
              details: "Engineered hundreds of specialized agents. Focused on orchestration frameworks like CrewAI and AutoGen to solve multi-step industrial problems.",
              icon: <FiCpu className="text-purple-500" />
            },
            {
              phase: "Phase III: The Frontier",
              title: "MCP & Distributed Intelligence",
              details: "Currently mastering Model Context Protocol (MCP) and distributed systems like Kafka to build horizontally scalable AI architectures.",
              icon: <FiAward className="text-amber-500" />
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/30 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="text-[9px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">{item.phase}</p>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-3 leading-tight">{item.title}</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.details}</p>
            </div>
          ))}
        </div>

        {/* Quantified Impact */}
        <div className="relative p-8 rounded-[2.5rem] bg-zinc-900 text-white overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -mr-32 -mt-32 group-hover:bg-blue-600/30 transition-colors" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h4 className="text-xl font-bold tracking-tight">The &quot;100 Days of AI Agents&quot; Milestone</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A pivotal chapter in my journey was building the <span className="text-white font-bold">550+ autonomous agents</span>. This wasn&apos;t just a volume play; it was a rigorous exploration of RAG, tool-calling behavior, and the limits of agentic persistence across 150+ diverse industrial projects.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold tracking-tighter text-blue-400">150+</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mt-2">Projects Deployed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold tracking-tighter text-purple-400">98%</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mt-2">Inference Success</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Future */}
        <div className="flex items-center gap-4 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
          <p className="text-xs font-medium text-blue-700 dark:text-blue-300 leading-relaxed">
            <span className="font-bold uppercase tracking-wider text-[10px]">Where I Stand Today:</span> I am no longer just building tools; I am architecting autonomous ecosystems where intelligence is the primary backbone of the software experience.
          </p>
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
                details: 'Intensive specialization in Generative AI, Cloud-Native Distributed Systems (Kubernetes/Docker), and Agentic Frameworks.'
              },
              {
                title: 'Advanced Software Engineering',
                institution: 'Independent Research & Mastery',
                period: '2020 – 2024',
                details: 'Self-driven focus on Large Scale System Design, Database Normalization, and Professional UI/UX Engineering.'
              }
            ].map((edu, idx) => (
              <div key={idx} className="relative group border-l-2 border-zinc-100 dark:border-zinc-800 pl-6 space-y-2">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-600 ring-4 ring-white dark:ring-zinc-900" />
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{edu.title}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-tight">{edu.institution} | {edu.period}</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12 pt-8 border-t border-zinc-100 dark:border-zinc-800">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <FiAward className="text-purple-600" /> Key Professional Milestones
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'National Hackathon II Winner', year: '2025' },
              { title: 'National Hackathon III Winner', year: '2025' },
              { title: 'Model Context Protocol (MCP) Certified', year: '2025' },
              { title: 'Cloud-Native Architecture Specialist', year: '2025' },
              { title: '1st Place Physical AI Hackathon', year: '2024' },
              { title: 'FolioGenerator Core Innovation', year: '2025' }
            ].map((cert, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/20 transition-all flex justify-between items-center group">
                <div className="space-y-0.5">
                  <p className="text-[11px] font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors uppercase tracking-tight">{cert.title}</p>
                  <p className="text-[9px] text-zinc-500 font-bold tracking-widest leading-none">VALIDATED {cert.year}</p>
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