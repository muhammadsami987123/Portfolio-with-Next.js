'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload, FiCheck } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    { icon: <FiGithub size={22} />, url: 'https://github.com/muhammadsami987123', label: 'GitHub' },
    { icon: <FiLinkedin size={22} />, url: 'https://www.linkedin.com/in/muhammad-sami-3aa6102b8/', label: 'LinkedIn' },
    { icon: <FiTwitter size={22} />, url: 'https://x.com/MSAMIWASEEM1', label: 'X' },
    { icon: <FiMail size={22} />, url: '#contact', label: 'Contact' },
  ];

  if (!mounted) return null;

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-300">

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Dot Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#333_1px,transparent_1px)] opacity-60"></div>

        {/* Gradients */}
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent"></div>
        <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 min-h-[calc(100vh-80px)] lg:min-h-screen pt-32 lg:pt-36 pb-12">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 max-w-2xl lg:text-left text-center"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm mb-4"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Available for new projects</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-5 leading-[1.1]">
              Engineering Intelligence, <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                Designing Experiences.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Meet <span className="font-semibold text-zinc-900 dark:text-white">Muhammad Sami</span>, your next AI & Full Stack Innovator.
              Building the Future with Intelligence & Code.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <Link href="#projects" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto h-12 px-8 bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-zinc-900/10 dark:shadow-white/10">
                  View Projects
                  <FiArrowRight />
                </button>
              </Link>

              <a
                href="https://muhammad-sami-resume.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto h-12 px-8 bg-transparent text-zinc-900 dark:text-white font-medium border border-zinc-200 dark:border-zinc-700 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                  <FiDownload /> Resume
                </button>
              </a>
            </div>

            {/* Tech Stack / Socials */}
            <div className="flex items-center gap-8 justify-center lg:justify-start border-t border-zinc-100 dark:border-zinc-800 pt-6">
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors transform hover:-translate-y-1 duration-200"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex-1 relative w-full max-w-[500px] flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Card Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Main Image Container */}
              <div className="relative bg-white dark:bg-zinc-900 rounded-[2rem] p-3 shadow-2xl border border-white/20 dark:border-zinc-800">
                <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5] w-[260px] sm:w-[300px] lg:w-[340px] bg-gradient-to-b from-gray-100 to-white dark:from-zinc-800 dark:to-zinc-900">
                  <Image
                    src="/profile1.png"
                    alt="Muhammad Sami Profile"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />

                  {/* Glass Info Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-blue-200 uppercase tracking-wider mb-1">Specialization</p>
                        <p className="font-bold text-lg leading-tight">AI Engineering</p>
                        <p className="text-sm text-gray-200 mt-0.5">Full Stack Dev</p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                        <FiCheck className="text-white" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
