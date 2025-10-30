'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { 
  FiDownload, 
  FiMail, 
  FiLinkedin, 
  FiGithub, 
  FiBook, 
  FiCode, 
  FiGlobe, 
  FiAward,
  FiExternalLink,
  FiLayout,
  FiTool
} from 'react-icons/fi';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');
  const sectionRef = useRef(null);
  
  // Simplified parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  
  const tabs = [
    { id: 'story', label: 'My Story', icon: <FiBook /> },
    { id: 'experience', label: 'Experience', icon: <FiCode /> },
    { id: 'education', label: 'Education', icon: <FiGlobe /> },
    { id: 'skills', label: 'Skills', icon: <FiAward /> },
    { id: 'ai', label: 'AI Journey', icon: <FiGlobe /> },
    { id: 'certifications', label: 'Certifications', icon: <FiAward /> },
  ];
  
  // Skills list for the skills tab
  // const skills = [
  //   { category: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript/TypeScript', 'HTML5/CSS3'] },
  //   { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Database Design'] },
  //   { category: 'Tools', items: ['Git/GitHub', 'Docker', 'CI/CD', 'AWS', 'Vercel/Netlify'] },
  //   { category: 'E-commerce', items: ['Sanity CMS', 'Stripe Integration', 'ShipEngine', 'Payment Gateways', 'Order Management'] }
  // ];

  const tabContent = {
    story: (
      <div className="space-y-4 md:space-y-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I am an <span className="text-blue-600 dark:text-blue-400 font-medium">AI Agent Engineer & Full-Stack Developer</span> based in Karachi, Sindh. I build offline and cloud-enabled AI assistants, automation workflows, and scalable web platforms using Next.js, React, TypeScript, Python/Django, Tailwind CSS, and Sanity CMS. I have successfully delivered 150+ real-world projects, including 7+ e-commerce platforms with advanced integrations such as Stripe and ShipEngine.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          My journey into AI and automation began with a deep curiosity about how technology can simplify and enhance everyday life. Since then, I have engineered 550+ advanced AI agents—leveraging OpenAI SDK, LangChain, HuggingFace, CrewAI, Chainlit, and Streamlit—focused on automation, productivity, and intelligent problem-solving. My work spans from conversational AI to workflow automation, always with an eye on real-world impact.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I thrive on solving complex problems and believe every challenge is an opportunity to innovate. My approach is methodical and client-focused: I break down problems, design scalable solutions, and deliver results that drive measurable business growth. My extensive client experience includes not only technical delivery but also client hunting, acquisition, and long-term relationship management.
        </p>
        <blockquote className="pl-4 border-l-4 border-blue-500 italic text-gray-600 dark:text-gray-400 my-4 md:my-6">
          &quot;Every line of code should contribute to a solution that is not just functional, but exceptional and where possible, intelligent.&quot;
        </blockquote>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I am committed to continuous learning and staying at the forefront of technology, with a special passion for AI, cloud computing, and the future of automation. Most of my AI agents are currently private drafts, available on GitHub or LinkedIn upon request, as I focus on refining and perfecting them for real-world deployment.
        </p>
        <div className="mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
            <p className="text-2xl font-extrabold text-blue-700 dark:text-blue-300">150+</p>
            <p className="text-xs md:text-sm text-blue-700/80 dark:text-blue-300/80">Projects</p>
          </div>
          <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
            <p className="text-2xl font-extrabold text-purple-700 dark:text-purple-300">550+</p>
            <p className="text-xs md:text-sm text-purple-700/80 dark:text-purple-300/80">AI Agents</p>
          </div>
          <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800">
            <p className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-300">7+</p>
            <p className="text-xs md:text-sm text-emerald-700/80 dark:text-emerald-300/80">E‑commerce Platforms</p>
          </div>
          <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800">
            <p className="text-2xl font-extrabold text-amber-700 dark:text-amber-300">50+</p>
            <p className="text-xs md:text-sm text-amber-700/80 dark:text-amber-300/80">UI Projects</p>
          </div>
        </div>
      </div>
    ),
    experience: (
      <div className="space-y-6 md:space-y-8">
        <div className="relative pl-6 md:pl-8 border-l-2 border-blue-600">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-600"></div>
          <div className="mb-1">
            <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">Founder – CodePulse Innovations</h4>
            <p className="text-blue-600 dark:text-blue-400 font-medium">June 2025 – Present • Karachi</p>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Launched FolioGenerator.com, enabling users to build professional portfolios easily</li>
            <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Built the full-stack app from scratch with a focus on scalability and performance</li>
            <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Integrated modern frontend/backend tech for a seamless experience</li>
            <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Owned design, coding, deployment, and maintenance end-to-end</li>
            <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Drove user growth, branding, and product positioning</li>
          </ul>
        </div>
        <div className="relative pl-6 md:pl-8 border-l-2 border-indigo-500">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-indigo-500"></div>
          <div className="mb-1">
            <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">AI Agent Developer</h4>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">Private Projects (OpenAI SDK, LangChain, HuggingFace, CrewAI, Chainlit, Streamlit)</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 md:mb-3">2024 –  Present</p>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 flex-shrink-0">•</span>
              <span>Engineered 550+ advanced AI agents for conversational interfaces, data analysis, automation, and business intelligence</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 flex-shrink-0">•</span>
              <span>Expert in prompt engineering, LLM integration, multi-agent orchestration, and leveraging state-of-the-art AI frameworks</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 flex-shrink-0">•</span>
              <span>Rapid prototyping and iteration of AI solutions, with a focus on reliability, scalability, and ethical AI practices</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 flex-shrink-0">•</span>
              <span>Most agents are private drafts; details available on GitHub/LinkedIn upon request</span>
            </li>
          </ul>
        </div>
        <div className="relative pl-6 md:pl-8 border-l-2 border-blue-500">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-500"></div>
          <div className="mb-1">
            <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">Full Stack Developer</h4>
            <p className="text-blue-600 dark:text-blue-400 font-medium">Client Projects & E-commerce Solutions</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 md:mb-3">2023 – Present</p>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
              <span>Extensive client experience: skilled in client hunting, acquisition, and management, with a proven record of successfully working with and delivering solutions for multiple clients</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
              <span>Architected and launched 7+ scalable e-commerce platforms, integrating secure Stripe payments, custom checkout flows, and robust order management systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
              <span>Delivered 50+ high-performance, mobile-first web applications with Next.js, React, and Tailwind CSS, achieving up to 99 Lighthouse scores</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
              <span>Designed and implemented RESTful APIs and optimized database architectures for reliability and speed</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
              <span>Led client consultations, translating complex business requirements into innovative technical solutions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
              <span>Consistently improved site performance and SEO, resulting in measurable business growth for clients</span>
            </li>
          </ul>
        </div>
        <div className="relative pl-6 md:pl-8 border-l-2 border-green-500">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500"></div>
          <div className="mb-1">
            <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">Web Development Portfolio</h4>
            <p className="text-green-600 dark:text-green-400 font-medium">Freelance & Personal Projects</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 md:mb-3">2020 – 2022</p>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 flex-shrink-0">•</span>
              <span>Developed a diverse portfolio of websites for local businesses, personal brands, and startups, focusing on user experience and conversion optimization</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 flex-shrink-0">•</span>
              <span>Implemented advanced performance optimization techniques, reducing load times by up to 30% and boosting engagement</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 flex-shrink-0">•</span>
              <span>Mastered both fundamental and advanced concepts in JavaScript, HTML, and CSS, applying them to real-world projects</span>
            </li>
          </ul>
        </div>
        <div className="relative pl-6 md:pl-8 border-l-2 border-teal-500">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-teal-500"></div>
          <div className="mb-1">
            <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">Frontend Development Intern – CodeAlpha</h4>
            <p className="text-teal-600 dark:text-teal-400 font-medium">April 2025 – May 2025 (Virtual)</p>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-start"><span className="text-teal-500 mr-2">•</span>Built responsive interfaces and adapted quickly to new frameworks</li>
            <li className="flex items-start"><span className="text-teal-500 mr-2">•</span>Demonstrated analytical skills and teamwork in a fast-paced environment</li>
            <li className="flex items-start"><span className="text-teal-500 mr-2">•</span>Recognized for adaptability, productivity, and consistent performance</li>
          </ul>
        </div>
      </div>
    ),
    education: (
      <div className="space-y-6 md:space-y-8">
        <div className="relative pl-6 md:pl-8 border-l-2 border-purple-500">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-500"></div>
          <div className="mb-2">
            <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">AI and Full Stack Development</h4>
            <div className="flex items-center flex-wrap gap-2">
              <p className="text-purple-600 dark:text-purple-400 font-medium">GIAIC & PIAIC</p>
              <span className="inline-block px-2 py-0.5 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full">Current</span>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm md:text-base">
            Advancing expertise in artificial intelligence and full stack web development through rigorous coursework and project-based learning. The program covers:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-center">
              <span className="text-purple-500 mr-2 flex-shrink-0">•</span>
              <span>Next.js Development</span>
            </li>
            <li className="flex items-center">
              <span className="text-purple-500 mr-2 flex-shrink-0">•</span>
              <span>Python for AI</span>
            </li>
            <li className="flex items-center">
              <span className="text-purple-500 mr-2 flex-shrink-0">•</span>
              <span>Machine Learning</span>
            </li>
            <li className="flex items-center">
              <span className="text-purple-500 mr-2 flex-shrink-0">•</span>
              <span>Cloud Computing</span>
            </li>
          </ul>
        </div>
        
        <div className="relative pl-6 md:pl-8 border-l-2 border-orange-500">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-orange-500"></div>
          <div className="mb-2">
            <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">Professional Development</h4>
            <p className="text-orange-600 dark:text-orange-400 font-medium">Continuous Learning</p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm md:text-base">
            Maintaining a rigorous self-directed learning regimen to stay at the forefront of web development practices and technologies:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <h5 className="font-medium mb-1 text-orange-700 dark:text-orange-300 text-sm md:text-base">Technical Certifications</h5>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Advanced Next.js, React Performance, AWS Solutions</p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h5 className="font-medium mb-1 text-blue-700 dark:text-blue-300 text-sm md:text-base">Industry Workshops</h5>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">UI/UX Best Practices, API Security, JAMstack</p>
            </div>
          </div>
        </div>
      </div>
    ),
    skills: (
      <div className="space-y-6">
        <p className="text-lg text-center font-semibold text-blue-700 dark:text-blue-300">
          Technical Skillset
        </p>
        {/* Grouped sections with simple progress bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700">
            <h5 className="font-bold mb-3 text-gray-900 dark:text-white">Frontend</h5>
            {[
              { name: 'Next.js', level: 100 },
              { name: 'React', level: 90 },
              { name: 'TypeScript', level: 93 },
              { name: 'Tailwind CSS', level: 100 },
            ].map(s => (
              <div key={s.name} className="mb-3">
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300">
                  <span>{s.name}</span><span>{s.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded">
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded" style={{ width: `${s.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700">
            <h5 className="font-bold mb-3 text-gray-900 dark:text-white">Backend & Databases</h5>
            {[
              { name: 'Node.js / Express', level: 85 },
              { name: 'Python / Django', level: 90 },
              { name: 'PostgreSQL / MySQL', level: 80 },
              { name: 'Sanity (Headless CMS)', level: 88 },
            ].map(s => (
              <div key={s.name} className="mb-3">
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300">
                  <span>{s.name}</span><span>{s.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded">
                  <div className="h-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded" style={{ width: `${s.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700">
            <h5 className="font-bold mb-3 text-gray-900 dark:text-white">AI & Agents</h5>
            {[
              { name: 'OpenAI SDK', level: 95 },
              { name: 'LangChain', level: 90 },
              { name: 'HuggingFace', level: 80 },
              { name: 'CrewAI / Chainlit / Streamlit', level: 82 },
              { name: 'Prompt & Context Engineering', level: 92 },
            ].map(s => (
              <div key={s.name} className="mb-3">
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300">
                  <span>{s.name}</span><span>{s.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded">
                  <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded" style={{ width: `${s.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700">
            <h5 className="font-bold mb-3 text-gray-900 dark:text-white">Cloud, DevOps & Tools</h5>
            {[
              { name: 'AWS / Docker', level: 75 },
              { name: 'Vercel / CI-CD', level: 90 },
              { name: 'Git & GitHub', level: 97 },
              { name: 'n8n (Automation)', level: 88 },
            ].map(s => (
              <div key={s.name} className="mb-3">
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300">
                  <span>{s.name}</span><span>{s.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded">
                  <div className="h-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded" style={{ width: `${s.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    ai: (
      <div className="space-y-6 md:space-y-8">
        <div>
          <h4 className="font-bold text-lg md:text-xl text-indigo-700 dark:text-indigo-400">My AI Journey</h4>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Building intelligent agents and automation for real impact. 550+ agents spanning conversational AI, data analysis, business intelligence, and workflow orchestration using OpenAI SDK, LangChain, HuggingFace, CrewAI, Chainlit, and Streamlit.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
            <p className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-300">550+</p>
            <p className="text-xs md:text-sm text-indigo-700/80 dark:text-indigo-300/80">Agents Built</p>
          </div>
          <div className="p-4 rounded-lg bg-fuchsia-50 dark:bg-fuchsia-900/20 border border-fuchsia-100 dark:border-fuchsia-800">
            <p className="text-2xl font-extrabold text-fuchsia-700 dark:text-fuchsia-300">50+</p>
            <p className="text-xs md:text-sm text-fuchsia-700/80 dark:text-fuchsia-300/80">UI Projects</p>
          </div>
          <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800">
            <p className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-300">7+</p>
            <p className="text-xs md:text-sm text-emerald-700/80 dark:text-emerald-300/80">E‑commerce</p>
          </div>
          <div className="p-4 rounded-lg bg-sky-50 dark:bg-sky-900/20 border border-sky-100 dark:border-sky-800">
            <p className="text-2xl font-extrabold text-sky-700 dark:text-sky-300">150+</p>
            <p className="text-xs md:text-sm text-sky-700/80 dark:text-sky-300/80">Projects</p>
          </div>
        </div>

        {/* Tooling badges */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start overflow-x-auto">
          {['OpenAI SDK','LangChain','HuggingFace','CrewAI','Chainlit','Streamlit','MCP','RAG','Vector DBs'].map(t => (
            <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300">{t}</span>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          <div className="relative pl-6 md:pl-8 border-l-2 border-indigo-500">
            <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-indigo-500"></div>
            <div className="mb-1 flex items-center gap-2">
              <h5 className="font-semibold text-gray-900 dark:text-white">Agent Foundations</h5>
              <span className="inline-block px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full">2024</span>
            </div>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>LLM prompting, tool use, retrieval, evaluation</li>
              <li>Built initial agents for Q&A and data extraction</li>
            </ul>
          </div>
          <div className="relative pl-6 md:pl-8 border-l-2 border-purple-500">
            <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-500"></div>
            <div className="mb-1 flex items-center gap-2">
              <h5 className="font-semibold text-gray-900 dark:text-white">Multi‑Agent Orchestration</h5>
              <span className="inline-block px-2 py-0.5 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full">2025</span>
            </div>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>CrewAI, LangChain agents, memory and planning</li>
              <li>Business workflows, BI, and offline assistant tooling</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    certifications: (
      <div className="space-y-6 md:space-y-8">
        <div className="relative pl-6 md:pl-8 border-l-2 border-indigo-500">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-indigo-500"></div>
          <div className="mb-2">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">Prompt & Context Engineering</h4>
              <span className="inline-block px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full">2025</span>
            </div>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">Core Prompting Competencies</p>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Advanced Prompt Engineering Techniques</li>
            <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Prompt & Context Engineering – Level 1</li>
          </ul>
        </div>

        <div className="relative pl-6 md:pl-8 border-l-2 border-purple-500">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-500"></div>
          <div className="mb-2">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">Model Context Protocol (MCP)</h4>
              <span className="inline-block px-2 py-0.5 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full">2025</span>
            </div>
            <p className="text-purple-600 dark:text-purple-400 font-medium">Tooling & Context Interfaces</p>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Model Context Protocol: Advanced Topics</li>
            <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Introduction to Model Context Protocol</li>
          </ul>
        </div>

        <div className="relative pl-6 md:pl-8 border-l-2 border-blue-500">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-500"></div>
          <div className="mb-2">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">Cloud & AI Architecture</h4>
              <span className="inline-block px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">2025</span>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-medium">Scalable Solution Design</p>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Cloud AI Solutions Architect</li>
          </ul>
        </div>

        <div className="relative pl-6 md:pl-8 border-l-2 border-emerald-500">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-500"></div>
          <div className="mb-2">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">AI Ethics</h4>
              <span className="inline-block px-2 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-full">2025</span>
            </div>
            <p className="text-emerald-600 dark:text-emerald-400 font-medium">Responsible AI Practices</p>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span>AI Ethics & Responsible Development</li>
          </ul>
        </div>

        <div className="relative pl-6 md:pl-8 border-l-2 border-orange-500">
          <div className="absolute left-[-4px] md:left-[-8px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-orange-500"></div>
          <div className="mb-2">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">Full Stack</h4>
              <span className="inline-block px-2 py-0.5 text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full">2024</span>
            </div>
            <p className="text-orange-600 dark:text-orange-400 font-medium">Web Development Foundations</p>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>Full Stack Web Development Masterclass</li>
          </ul>
        </div>
      </div>
    )
  };

  // Animation variants with performance optimizations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 80 }
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 md:mb-16 px-2 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              About Me
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
            Full Stack Developer crafting exceptional digital experiences with modern technologies
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 items-start px-2 sm:px-0"
        >
          {/* Profile Column */}
          <motion.div
            variants={itemVariants}
            style={{ y }}
            className="col-span-1 relative w-full max-w-xs mx-auto sm:max-w-none"
          >
            <div className="relative">
              {/* Background Geometric Elements - Simplified for better performance */}
              <div className="absolute -top-4 -left-4 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
              
              {/* Profile Card */}
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 z-10">
                {/* Header Banner */}
                <div className="h-24 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                
                {/* Profile Image */}
                <div className="relative mx-auto -mt-12 w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
                  <Image
                    src="/image.png"
                    alt="Muhammad Sami"
                    fill
                    sizes="(max-width: 768px) 96px, 112px"
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Profile Info */}
                <div className="p-4 md:p-6 text-center">
                  <h3 className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white mb-1">Muhammad Sami</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 md:mb-4">AI Agent Engineer & Full-Stack Developer</p>
                  
                  <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-4 md:mb-6">
                    <span className="px-2 md:px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm">
                      Next.js
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm">
                      React
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm">
                      Tailwind
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs md:text-sm">
                      OpenAI SDK
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs md:text-sm">
                      Python
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs md:text-sm">
                      n8n
                    </span>
                  </div>
                  
                  {/* Stats Row */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 border-t border-gray-100 dark:border-gray-700 pt-4 md:pt-6 mb-4 md:mb-6">
                    <div>
                      <p className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white">7+</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">E-commerce Sites</p>
                    </div>
                    <div>
                      <p className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white">150+</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">Projects Delivered</p>
                    </div>
                    <div>
                      <p className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white">550+</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">AI Agents</p>
                    </div>
                    {/* <div>
                      <p className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white">5+</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">Years Exp.</p>
                    </div> */}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4 mb-4 md:mb-6">
                    <a 
                      href="#contact" 
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition shadow-md hover:shadow-blue-300/30 dark:hover:shadow-blue-500/20"
                    >
                      <FiMail size={16} />
                      <span>Contact</span>
                    </a>
                    <a 
                      href="/resume.pdf" 
                      target="_blank" 
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 text-sm bg-white hover:bg-gray-50 text-gray-800 rounded-lg border border-gray-200 transition shadow-md hover:shadow-gray-300/30 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:shadow-gray-700/20"
                    >
                      <FiDownload size={16} />
                      <span>Resume</span>
                    </a>
                  </div>
                  
                  {/* Social Icons */}
                  <div className="flex justify-center gap-3 md:gap-4">
                    <a 
                      href="https://www.linkedin.com/in/muhammad-sami-3aa6102b8/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 md:p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full border border-gray-200 transition shadow hover:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 dark:border-gray-600"
                      aria-label="LinkedIn Profile"
                    >
                      <FiLinkedin size={18} />
                    </a>
                    <a 
                      href="https://github.com/muhammadsami987123" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 md:p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full border border-gray-200 transition shadow hover:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 dark:border-gray-600"
                      aria-label="GitHub Profile"
                    >
                      <FiGithub size={18} />
                    </a>
                    <a 
                      href="#portfolio" 
                      className="p-2 md:p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full border border-gray-200 transition shadow hover:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 dark:border-gray-600"
                      aria-label="Portfolio"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Tab Content Column */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 lg:col-span-3"
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden min-w-0">
              {/* Tab Navigation */}
              <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-2 sm:px-0">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1 md:gap-2 py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 text-sm sm:text-base font-medium transition-all relative whitespace-nowrap ${
                      activeTab === tab.id 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400" 
                      />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <div className="p-3 sm:p-4 md:p-6 max-h-[65vh] sm:max-h-[70vh] md:max-h-[unset] overflow-y-auto custom-scrollbar">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {tabContent[activeTab as keyof typeof tabContent]}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Improved responsive scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        
        @media (min-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(241, 241, 241, 0.2);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(136, 136, 136, 0.4);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(85, 85, 85, 0.6);
        }
        
        .dark .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(45, 55, 72, 0.2);
        }
        
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(74, 85, 104, 0.4);
        }
        
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(113, 128, 150, 0.6);
        }

        /* Hide scrollbar in tab navigation but keep functionality */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}