import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: '/About', label: 'About' },
    { href: '/Projects', label: 'Projects' },
    { href: '/Skills', label: 'Skills' },
    { href: '/Contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/muhammadsami987123', icon: <FiGithub size={20} />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/muhammad-sami-3aa6102b8/', icon: <FiLinkedin size={20} />, label: 'LinkedIn' },
    { href: 'https://x.com/MSAMIWASEEM1', icon: <FiTwitter size={20} />, label: 'X' },
  ];

  return (
    <footer className="bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8">
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-4 mb-12">

          {/* Brand & Description */}
          <div className="max-w-sm">
            <h3 className="font-bold text-xl mb-4 tracking-tight">Muhammad Sami</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              AI Agent Engineer & Full-Stack Developer. Building the future of intelligent automation and scalable web systems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-zinc-900 dark:text-white">Navigation</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-zinc-900 dark:text-white">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:m.samiwaseem1234@gmail.com" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2">
                    <FiMail size={16} /> m.samiwaseem1234@gmail.com
                  </a>
                </li>
                <li className="text-zinc-600 dark:text-zinc-400">
                  Karachi, Pakistan
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            © {currentYear} Muhammad Sami. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-500">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}