import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Your Name</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A passionate full-stack developer focused on creating exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FiTwitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Email: your.email@example.com
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Phone: +1 (234) 567-890
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Location: City, State, Country
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}