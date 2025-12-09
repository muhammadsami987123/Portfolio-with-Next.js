'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send message');
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitError('There was a problem sending your message.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 lg:py-28 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Dot Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#333_1px,transparent_1px)] opacity-60"></div>
        {/* Gradients */}
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          <motion.div
            className="w-full max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold mb-4 sm:mb-6">Contact Information</h3>

            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
              <div className="flex items-start">
                <div className="p-2 sm:p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg mr-3 flex-shrink-0 text-zinc-600 dark:text-zinc-400">
                  <FiMail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-base sm:text-lg mb-1">Email</h4>
                  <a href="mailto:m.samiwaseem1234@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base break-words">
                    m.samiwaseem1234@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 sm:p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg mr-3 flex-shrink-0 text-zinc-600 dark:text-zinc-400">
                  <FiPhone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-base sm:text-lg mb-1">Phone</h4>
                  <a href="tel:+923477286878" className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base">
                    +92 347 7286878
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 sm:p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg mr-3 flex-shrink-0 text-zinc-600 dark:text-zinc-400">
                  <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-base sm:text-lg mb-1">Location</h4>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base">
                    Karachi, Sindh, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold mb-3 sm:mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/muhammad-sami-3aa6102b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200 text-zinc-600 dark:text-zinc-400"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://github.com/muhammadsami987123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://twitter.com/MSAMIWASEEM1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="w-full max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold mb-4 sm:mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium mb-1.5 sm:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-lg focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white focus:border-transparent transition-all outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-1.5 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-lg focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white focus:border-transparent transition-all outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-lg focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white focus:border-transparent transition-all resize-none outline-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-lg transition-colors duration-200 flex justify-center items-center shadow-md hover:shadow-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitSuccess && (
                <div className="p-3 sm:p-4 text-sm sm:text-base bg-green-100 text-green-800 rounded-md">
                  Your message has been sent successfully!
                </div>
              )}

              {submitError && (
                <div className="p-3 sm:p-4 text-sm sm:text-base bg-red-100 text-red-800 rounded-md">
                  {submitError}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}