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
          I am a <span className="text-blue-600 dark:text-blue-400 font-medium">Full Stack Web Developer, AI & Automation Enthusiast, and IT Innovator</span> based in Karachi, Sindh. My expertise lies in building responsive, scalable, and intelligent web applications using Next.js, React, TypeScript, Tailwind CSS, and Sanity CMS. I have successfully delivered 50+ real-world projects, including 7+ e-commerce platforms with advanced integrations such as Stripe and ShipEngine.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          My journey into AI and automation began with a deep curiosity about how technology can simplify and enhance everyday life. Since then, I have engineered 20+ advanced AI agents—leveraging OpenAI SDK, LangChain, HuggingFace, CrewAI, Chainlit, and Streamlit—focused on automation, productivity, and intelligent problem-solving. My work spans from conversational AI to workflow automation, always with an eye on real-world impact.
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
      </div>
    ),
    experience: (
      <div className="space-y-6 md:space-y-8">
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
              <span>Engineered 20+ advanced AI agents for conversational interfaces, data analysis, automation, and creative problem-solving</span>
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
        <p className="text-lg text-center font-semibold text-blue-700 dark:text-blue-300 mb-2">
          My Key Skills
        </p>
        <div className="flex flex-wrap gap-2 justify-center overflow-x-auto pb-2">
          <span className="flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900 rounded-full text-blue-700 dark:text-blue-300 font-medium text-xs border border-blue-200 dark:border-blue-700"><FiLayout className="mr-1" /> React.js</span>
          <span className="flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900 rounded-full text-blue-700 dark:text-blue-300 font-medium text-xs border border-blue-200 dark:border-blue-700"><FiLayout className="mr-1" /> Next.js</span>
          <span className="flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900 rounded-full text-blue-700 dark:text-blue-300 font-medium text-xs border border-blue-200 dark:border-blue-700"><FiLayout className="mr-1" /> TypeScript</span>
          <span className="flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900 rounded-full text-blue-700 dark:text-blue-300 font-medium text-xs border border-blue-200 dark:border-blue-700"><FiLayout className="mr-1" /> Tailwind CSS</span>
          <span className="flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900 rounded-full text-blue-700 dark:text-blue-300 font-medium text-xs border border-blue-200 dark:border-blue-700"><FiLayout className="mr-1" /> Sanity CMS</span>
          <span className="flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900 rounded-full text-blue-700 dark:text-blue-300 font-medium text-xs border border-blue-200 dark:border-blue-700"><FiLayout className="mr-1" /> JavaScript</span>
          <span className="flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900 rounded-full text-blue-700 dark:text-blue-300 font-medium text-xs border border-blue-200 dark:border-blue-700"><FiLayout className="mr-1" /> HTML5</span>
          <span className="flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900 rounded-full text-blue-700 dark:text-blue-300 font-medium text-xs border border-blue-200 dark:border-blue-700"><FiLayout className="mr-1" /> CSS3</span>
          <span className="flex items-center px-3 py-1 bg-purple-50 dark:bg-purple-900 rounded-full text-purple-700 dark:text-purple-300 font-medium text-xs border border-purple-200 dark:border-purple-700"><FiCode className="mr-1" /> Python</span>
          <span className="flex items-center px-3 py-1 bg-purple-50 dark:bg-purple-900 rounded-full text-purple-700 dark:text-purple-300 font-medium text-xs border border-purple-200 dark:border-purple-700">OpenAI SDK</span>
          <span className="flex items-center px-3 py-1 bg-purple-50 dark:bg-purple-900 rounded-full text-purple-700 dark:text-purple-300 font-medium text-xs border border-purple-200 dark:border-purple-700">LangChain</span>
          <span className="flex items-center px-3 py-1 bg-purple-50 dark:bg-purple-900 rounded-full text-purple-700 dark:text-purple-300 font-medium text-xs border border-purple-200 dark:border-purple-700">HuggingFace</span>
          <span className="flex items-center px-3 py-1 bg-purple-50 dark:bg-purple-900 rounded-full text-purple-700 dark:text-purple-300 font-medium text-xs border border-purple-200 dark:border-purple-700">CrewAI</span>
          <span className="flex items-center px-3 py-1 bg-purple-50 dark:bg-purple-900 rounded-full text-purple-700 dark:text-purple-300 font-medium text-xs border border-purple-200 dark:border-purple-700">Chainlit</span>
          <span className="flex items-center px-3 py-1 bg-purple-50 dark:bg-purple-900 rounded-full text-purple-700 dark:text-purple-300 font-medium text-xs border border-purple-200 dark:border-purple-700">Streamlit</span>
          <span className="flex items-center px-3 py-1 bg-purple-50 dark:bg-purple-900 rounded-full text-purple-700 dark:text-purple-300 font-medium text-xs border border-purple-200 dark:border-purple-700">Prompt Engineering</span>
          <span className="flex items-center px-3 py-1 bg-purple-50 dark:bg-purple-900 rounded-full text-purple-700 dark:text-purple-300 font-medium text-xs border border-purple-200 dark:border-purple-700">LLMs</span>
          <span className="flex items-center px-3 py-1 bg-green-50 dark:bg-green-900 rounded-full text-green-700 dark:text-green-300 font-medium text-xs border border-green-200 dark:border-green-700"><FiTool className="mr-1" /> Node.js</span>
          <span className="flex items-center px-3 py-1 bg-green-50 dark:bg-green-900 rounded-full text-green-700 dark:text-green-300 font-medium text-xs border border-green-200 dark:border-green-700"><FiTool className="mr-1" /> Express</span>
          <span className="flex items-center px-3 py-1 bg-green-50 dark:bg-green-900 rounded-full text-green-700 dark:text-green-300 font-medium text-xs border border-green-200 dark:border-green-700"><FiTool className="mr-1" /> Docker</span>
          <span className="flex items-center px-3 py-1 bg-green-50 dark:bg-green-900 rounded-full text-green-700 dark:text-green-300 font-medium text-xs border border-green-200 dark:border-green-700"><FiTool className="mr-1" /> AWS</span>
          <span className="flex items-center px-3 py-1 bg-green-50 dark:bg-green-900 rounded-full text-green-700 dark:text-green-300 font-medium text-xs border border-green-200 dark:border-green-700"><FiTool className="mr-1" /> Vercel</span>
          <span className="flex items-center px-3 py-1 bg-green-50 dark:bg-green-900 rounded-full text-green-700 dark:text-green-300 font-medium text-xs border border-green-200 dark:border-green-700"><FiTool className="mr-1" /> Netlify</span>
          <span className="flex items-center px-3 py-1 bg-green-50 dark:bg-green-900 rounded-full text-green-700 dark:text-green-300 font-medium text-xs border border-green-200 dark:border-green-700"><FiTool className="mr-1" /> Git</span>
          <span className="flex items-center px-3 py-1 bg-green-50 dark:bg-green-900 rounded-full text-green-700 dark:text-green-300 font-medium text-xs border border-green-200 dark:border-green-700"><FiTool className="mr-1" /> GitHub</span>
        </div>
      </div>
    ),
    ai: (
      <div className="space-y-4 md:space-y-6">
        <h4 className="font-bold text-lg md:text-xl text-indigo-700 dark:text-indigo-400">My AI Journey</h4>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          My AI journey has been defined by a relentless pursuit of innovation and mastery in intelligent systems. I have built over 20 AI agents using frameworks such as OpenAI SDK, LangChain, HuggingFace, CrewAI, Chainlit, and Streamlit. My focus areas include prompt engineering, LLMs, and agent orchestration. While most of my work remains private, I am committed to pushing the boundaries of what AI can achieve.
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>20+ AI agents (private drafts on GitHub/LinkedIn)</li>
          <li>Expertise in OpenAI SDK, LangChain, HuggingFace, CrewAI, Chainlit, Streamlit</li>
          <li>Focus on conversational AI, data analysis, and workflow automation</li>
          <li>Continuous learning and experimentation in AI/ML</li>
        </ul>
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
                    src="/profile.png" 
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
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 md:mb-4">Full Stack Developer</p>
                  
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
                  </div>
                  
                  {/* Stats Row */}
                  <div className="grid grid-cols-2 gap-2 md:gap-4 border-t border-gray-100 dark:border-gray-700 pt-4 md:pt-6 mb-4 md:mb-6">
                    <div>
                      <p className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white">7+</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">E-commerce Sites</p>
                    </div>
                    <div>
                      <p className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white">50+</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">Projects</p>
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
                      className="flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition shadow-md hover:shadow-blue-300/30 dark:hover:shadow-blue-500/20"
                    >
                      <FiMail size={16} />
                      <span>Contact</span>
                    </a>
                    <a 
                      href="/resume.pdf" 
                      target="_blank" 
                      className="flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 text-sm bg-white hover:bg-gray-50 text-gray-800 rounded-lg border border-gray-200 transition shadow-md hover:shadow-gray-300/30 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:shadow-gray-700/20"
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
            <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
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
              <div className="p-3 sm:p-4 md:p-6 max-h-[60vh] sm:max-h-[70vh] md:max-h-[unset] overflow-y-auto custom-scrollbar">
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