'use client';

import { motion } from 'framer-motion';
import Background from '@/components/Background';
import { FiCheckCircle, FiAlertCircle, FiGlobe, FiFileText, FiShield } from 'react-icons/fi';

export default function TermsOfService() {
    const lastUpdated = "January 6, 2026";

    const terms = [
        {
            title: "Agreement to Terms",
            icon: <FiCheckCircle className="text-blue-500" />,
            content: "By accessing and using this portfolio website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. This platform serves as a professional showcase of AI Engineering and Full-Stack Development expertise."
        },
        {
            title: "Intellectual Property Rights",
            icon: <FiShield className="text-purple-500" />,
            content: "All content on this website, including but not limited to source code, project architectures, personal photography, project demonstration videos, UI/UX designs, and text, is the exclusive intellectual property of Muhammad Sami. You are granted a limited license to view this content for informational purposes. Any reproduction, distribution, or commercial use without express written consent is strictly prohibited."
        },
        {
            title: "Third-Party Links & Services",
            icon: <FiGlobe className="text-emerald-500" />,
            content: "This portfolio contains links to external platforms such as Vercel, GitHub, and LinkedIn. We do not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge that your use of third-party platforms is subject to their own respective terms."
        },
        {
            title: "Accuracy & Disclaimer",
            icon: <FiFileText className="text-amber-500" />,
            content: "While we strive for technical precision, the information and demonstrations provided on this site are 'as is' and 'as available.' We make no warranties regarding the absolute accuracy, completeness, or reliability of any project benchmarks or AI responses displayed. Architectural proof-of-concepts are for demonstration purposes and may not reflect production-ready logic for every environment."
        },
        {
            title: "Limitation of Liability",
            icon: <FiAlertCircle className="text-red-500" />,
            content: "To the maximum extent permitted by law, Muhammad Sami shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of this website, the inability to access certain modules, or your reliance on any information provided herein."
        }
    ];

    return (
        <Background className="py-24 lg:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 dark:bg-zinc-900/30 text-zinc-600 dark:text-zinc-400 font-bold text-[10px] tracking-widest uppercase mb-6 border border-zinc-600/10">
                        Legal Framework
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                        Terms <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Framework.</span>
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium uppercase tracking-[0.2em]">
                        Last Updated: {lastUpdated}
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {terms.map((term, idx) => (
                        <motion.section
                            key={term.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative p-8 rounded-[2rem] bg-white/50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-xl"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xl shadow-inner group-hover:rotate-12 transition-transform">
                                    {term.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 uppercase tracking-tight">
                                        {term.title}
                                    </h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
                                        {term.content}
                                    </p>
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-3xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900">
                    <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-60">Professional Governance</p>
                    <p className="text-lg font-medium leading-relaxed">
                        &quot;Software excellence is built on a foundation of intellectual integrity and professional accountability.&quot;
                    </p>
                </div>
            </div>
        </Background>
    );
}
