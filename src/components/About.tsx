'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiDownload, FiMail, FiLinkedin, FiGithub, FiBook, FiCode, FiGlobe } from 'react-icons/fi';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'My Story', icon: <FiBook className="mr-2" /> },
    { id: 'experience', label: 'Experience', icon: <FiCode className="mr-2" /> },
    { id: 'education', label: 'Education', icon: <FiGlobe className="mr-2" /> }
  ];

  const tabContent: { [key: string]: JSX.Element } = {
    story: (
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">
          I'm a passionate web developer based in Karachi, Sindh, with a focus on creating impactful digital experiences. My journey in web development began with a curiosity about how digital products are built, which quickly evolved into a deep passion for creating them myself.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          I specialize in modern web technologies like Next.js, Tailwind CSS, Sanity, Stripe, and ShipEngine, bringing together aesthetics and functionality to deliver exceptional user experiences. My expertise spans from crafting seamless front-end interfaces to implementing robust back-end solutions.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          What drives me is the opportunity to transform ideas into reality through code. I approach each project with meticulous attention to detail, ensuring that every line of code contributes to a cohesive, effective solution. When I'm not coding, I enjoy reading Urdu afsanas and experimenting with new technologies as part of my personal growth journey.
        </p>
      </div>
    ),
    experience: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4 py-1">
          <h4 className="font-bold text-lg">Full Stack Developer</h4>
          <p className="text-blue-600 dark:text-blue-400 font-medium">Live Projects</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">2022 - Present</p>
          <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
            <li>• Developed and deployed complete e-commerce platforms with payment integration</li>
            <li>• Built responsive web applications with modern frameworks</li>
            <li>• Implemented REST APIs and database architecture</li>
            <li>• Collaborated with clients to deliver customized solutions</li>
            <li>• Created 7+ e-commerce websites and 50+ other websites</li>
          </ul>
        </div>
        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h4 className="font-bold text-lg">Web Development Projects</h4>
          <p className="text-green-600 dark:text-green-400 font-medium">Personal Portfolio</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">2020 - 2022</p>
          <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
            <li>• Created multiple personal and client websites</li>
            <li>• Focused on performance optimization and best practices</li>
            <li>• Developed skills in JavaScript, HTML, and CSS</li>
          </ul>
        </div>
      </div>
    ),
    education: (
      <div className="space-y-6">
        <div className="border-l-4 border-purple-500 pl-4 py-1">
          <h4 className="font-bold text-lg">AI and Full Stack Development</h4>
          <p className="text-purple-600 dark:text-purple-400 font-medium">GIAIC & PIAIC</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Current</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Advancing skills in artificial intelligence and full stack development with a focus on Next.js and Python frameworks. Participating in hands-on projects and collaborative learning environments.
          </p>
        </div>
        <div className="border-l-4 border-orange-500 pl-4 py-1">
          <h4 className="font-bold text-lg">Self-directed Learning</h4>
          <p className="text-orange-600 dark:text-orange-400 font-medium">Online Platforms</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Continuous</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Constantly expanding knowledge through online courses, documentation, and community resources. Focused on staying current with the latest web technologies and development practices.
          </p>
        </div>
      </div>
    )
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Full Stack Developer specializing in modern web technologies and e-commerce solutions
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-6 shadow-2xl"></div>
            <div className="relative h-[450px] w-[350px] mx-auto rounded-2xl overflow-hidden group shadow-lg bg-gray-200 dark:bg-slate-800 z-10">
              <Image 
                src="/profile.png" 
                alt="Muhammad Sami" 
                width={350}
                height={450}
                className="object-cover w-full h-full rounded-2xl group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="font-bold text-2xl drop-shadow-md">Muhammad Sami</h3>
                <p className="text-gray-200 text-sm">Web Developer | Full Stack | AI Enthusiast</p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center gap-4">
              <a href="#contact" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition shadow-lg hover:shadow-blue-300/30 dark:hover:shadow-blue-500/20">
                <FiMail />
                <span>Contact Me</span>
              </a>
              <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 rounded-full border border-gray-300 transition shadow-lg hover:shadow-gray-300/30 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:shadow-gray-700/20">
                <FiDownload />
                <span>Resume</span>
              </a>
            </div>
            
            <div className="mt-6 flex justify-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white hover:bg-gray-100 text-gray-800 rounded-full border border-gray-300 transition shadow hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:border-gray-600">
                <FiLinkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white hover:bg-gray-100 text-gray-800 rounded-full border border-gray-300 transition shadow hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:border-gray-600">
                <FiGithub size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
          >
            <div className="flex space-x-2 mb-6 border-b dark:border-gray-700">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-3 px-4 font-medium transition-all ${
                    activeTab === tab.id 
                      ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400' 
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="h-[320px] overflow-y-auto pr-2 custom-scrollbar">
              {tabContent[activeTab]}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}