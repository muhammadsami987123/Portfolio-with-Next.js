'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiTwitter, FiSend, FiCheckCircle } from 'react-icons/fi';
import Background from '@/components/Background';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send message');
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Digital Correspondence',
      value: 'm.samiwaseem1234@gmail.com',
    },
    {
      icon: <FiPhone />,
      label: 'Direct Line',
      value: '+92 347 7286878',
    },
    {
      icon: <FiMapPin />,
      label: 'Geographic Base',
      value: 'Karachi, Sindh, Pakistan',
    },
  ];

  return (
    <Background className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase mb-4"
          >
            Communication Nexus
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sync.</span>
          </motion.h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl text-lg leading-relaxed">
            Interested in deploying advanced AI solutions or orchestrating complex full-stack ecosystems? Lets discuss your roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-6 p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 transition-colors hover:border-blue-500/30">
                  <div className="text-2xl text-blue-600 dark:text-blue-400">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-1">{info.label}</p>
                    <p className="text-base font-bold text-zinc-900 dark:text-white">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-zinc-100 dark:border-zinc-800">
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-6">Network Reach</p>
              <div className="flex gap-3">
                {[
                  { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/muhammad-sami-3aa6102b8/', label: 'LinkedIn' },
                  { icon: <FiGithub />, url: 'https://github.com/muhammadsami987123', label: 'GitHub' },
                  { icon: <FiTwitter />, url: 'https://twitter.com/MSAMIWASEEM1', label: 'Twitter' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center hover:scale-110 transition-all border border-zinc-200 dark:border-zinc-700 shadow-sm"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 p-8 lg:p-12 rounded-2xl shadow-xl shadow-zinc-900/5">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Identity</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Muhammad Sami"
                      className="w-full h-14 px-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/50 focus:ring-2 focus:ring-blue-600 transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Signal Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sami@nexus.io"
                      className="w-full h-14 px-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/50 focus:ring-2 focus:ring-blue-600 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Payload / Brief</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Provide details on project scope and technical requirements..."
                    className="w-full px-6 py-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/50 focus:ring-2 focus:ring-blue-600 transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full h-16 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-blue-700 transition-all disabled:opacity-70 shadow-lg shadow-blue-500/20"
                >
                  {status === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white animate-spin rounded-full"></div>
                  ) : (
                    <>Transmit Data <FiSend /></>
                  )}
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400 text-center text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                      <FiCheckCircle /> Signal Successfully Relayed
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </Background>
  );
}