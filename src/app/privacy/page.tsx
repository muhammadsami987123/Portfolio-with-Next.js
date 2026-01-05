'use client';

import { motion } from 'framer-motion';
import Background from '@/components/Background';
import { FiShield, FiLock, FiEye, FiMail, FiGlobe } from 'react-icons/fi';

export default function PrivacyPolicy() {
    const lastUpdated = "January 6, 2026";

    const sections = [
        {
            title: "Data Collection & Processing",
            icon: <FiEye className="text-blue-500" />,
            content: "This portfolio website is designed with a privacy-first approach. We only collect personal information that you voluntarily provide through our contact form, specifically your Name and Email Address. This data is used solely to respond to your inquiries and is processed directly via email services. We do not store your personal data on our website servers or in a permanent database."
        },
        {
            title: "Automated Data Collection",
            icon: <FiGlobe className="text-purple-500" />,
            content: "Like most websites, we may collect non-identifying information such as browser type, language preference, referring site, and the date/time of each visitor request. This is collected via standard analytics protocols to understand how our architectural insights and projects are viewed by our global audience."
        },
        {
            title: "AI Interactions & Third Parties",
            icon: <FiLock className="text-emerald-500" />,
            content: "This site may feature demonstrations leveraging third-party AI providers (e.g., OpenAI, Anthropic). Any interaction with these modules is transient. However, we also provide links to third-party platforms such as GitHub, Vercel, and LinkedIn. Please be aware that we are not responsible for the privacy practices or the content of these external sites."
        },
        {
            title: "Security Measures",
            icon: <FiShield className="text-red-500" />,
            content: "We implement industry-standard security measures, including SSL encryption, to protect your personal information during transmission. Given the nature of the internet, however, we cannot guarantee 100% security for data transmitted through the contact form or external links."
        },
        {
            title: "Contact Information",
            icon: <FiMail className="text-blue-600" />,
            content: "If you have any questions or concerns regarding this Privacy Protocol or our data handling practices, please contact us directly through the provided email address: m.samiwaseem1234@gmail.com."
        }
    ];

    return (
        <Background className="py-24 lg:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase mb-6 border border-blue-600/10">
                        Privacy Governance
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Protocol.</span>
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium uppercase tracking-[0.2em]">
                        Last Updated: {lastUpdated}
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {sections.map((section, idx) => (
                        <motion.section
                            key={section.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative p-8 rounded-[2rem] bg-white/50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-xl"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                                    {section.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 uppercase tracking-tight">
                                        {section.title}
                                    </h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 pt-12 border-t border-zinc-100 dark:border-zinc-800 text-center"
                >
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                        This protocol ensures the transparency and integrity of our digital architectural presence.
                    </p>
                </motion.div>
            </div>
        </Background>
    );
}
