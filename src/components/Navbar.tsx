'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  } );

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-tight select-none">
              Muhammad Sami
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-2 items-center">
            {[
              { href: '/About', label: 'About' },
              { href: '/Projects', label: 'Projects' },
              { href: '/Skills', label: 'Skills' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1 font-medium transition-all duration-200
                  ${pathname === link.href ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'}
                  group`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0.5 w-full h-0.5 rounded bg-gradient-to-r from-blue-600 to-purple-500 transition-all duration-300
                    ${pathname === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-80'}`}
                />
              </Link>
            ))}
            <Link
              href="/Contact"
              className="ml-4 px-5 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-500 text-white shadow-lg hover:from-blue-700 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-2xl"
        >
          <div className="px-4 py-3 space-y-1">
            {[
              { href: '/About', label: 'About' },
              { href: '/Projects', label: 'Projects' },
              { href: '/Skills', label: 'Skills' },
              { href: '/Contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 px-4 rounded font-medium transition-all duration-200
                  ${pathname === link.href ? 'bg-gradient-to-r from-blue-600 to-purple-500 text-white' : 'hover:bg-gray-100 dark:hover:bg-slate-800'}`}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
    
  );
}
