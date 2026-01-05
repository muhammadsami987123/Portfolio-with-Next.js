'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Background from '@/components/Background';
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiServer,
  FiTool,
  FiCpu,
  FiTerminal,
  FiCloud,
  FiZap,
  FiTrendingUp,
} from 'react-icons/fi';
import {
  SiTailwindcss,
  SiPython,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiFramer,
  SiDjango,
  SiGraphql,
  SiSupabase,
  SiVercel,
  SiOpenai,
  SiLangchain,
  SiHuggingface,
  SiAmazon,
  SiCloudflare,
  SiMongodb,
  SiPlanetscale,
  SiKubernetes,
  SiZapier,
  SiRetool,
  SiN8N,
  SiGooglegemini,
  SiRedis,
  SiTerraform,
  SiVite,
  SiDigitalocean,
  SiRailway,
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
  proficiency: number;
}

interface Category {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  accent: string;
  skills: Skill[];
}

const skillCategories: Category[] = [
  {
    id: 1,
    title: 'Frontend UI/UX',
    icon: <FiLayout />,
    description: 'Architecting high-performance, responsive, and visually stunning interfaces',
    accent: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'React 19 / Next.js 15', icon: <SiReact />, proficiency: 100 },
      { name: 'TypeScript', icon: <SiTypescript />, proficiency: 94 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, proficiency: 100 },
      { name: 'Framer Motion', icon: <SiFramer />, proficiency: 90 },
      { name: 'Vite / State Mgmt', icon: <SiVite />, proficiency: 88 }
    ]
  },
  {
    id: 2,
    title: 'Agentic Backend',
    icon: <FiServer />,
    description: 'Engineering resilient server-side architectures and intelligent logic',
    accent: 'from-indigo-600 to-purple-500',
    skills: [
      { name: 'Node.js / Express', icon: <SiNodedotjs />, proficiency: 92 },
      { name: 'Python / FastAPI', icon: <SiPython />, proficiency: 95 },
      { name: 'Django', icon: <SiDjango />, proficiency: 80 },
      { name: 'GraphQL / Node APIs', icon: <SiGraphql />, proficiency: 85 },
      { name: 'Serverless / Microservices', icon: <FiZap />, proficiency: 90 }
    ]
  },
  {
    id: 3,
    title: 'Intelligence Layer',
    icon: <FiCpu />,
    description: 'Building autonomous agents and leveraging state-of-the-art AI',
    accent: 'from-purple-600 to-pink-500',
    skills: [
      { name: 'OpenAI / Anthropic SDK', icon: <SiOpenai />, proficiency: 98 },
      { name: 'LangChain / CrewAI', icon: <SiLangchain />, proficiency: 92 },
      { name: 'HuggingFace', icon: <SiHuggingface />, proficiency: 85 },
      { name: 'MCP Protocols', icon: <FiTerminal />, proficiency: 95 },
      { name: 'Vector DBs / RAG', icon: <FiDatabase />, proficiency: 90 }
    ]
  },
  {
    id: 4,
    title: 'Cloud & Edge',
    icon: <FiCloud />,
    description: 'Scalable cloud infrastructure and edge delivery networks',
    accent: 'from-sky-500 to-blue-600',
    skills: [
      { name: 'AWS / GCP / Azure', icon: <SiAmazon />, proficiency: 85 },
      { name: 'Vercel / Netlify', icon: <SiVercel />, proficiency: 100 },
      { name: 'Cloudflare / Edge', icon: <SiCloudflare />, proficiency: 94 },
      { name: 'DigitalOcean', icon: <SiDigitalocean />, proficiency: 88 },
      { name: 'Railway / Render', icon: <SiRailway />, proficiency: 92 }
    ]
  },
  {
    id: 5,
    title: 'Database Systems',
    icon: <FiDatabase />,
    description: 'High-availability data persistence and specialized storage',
    accent: 'from-emerald-500 to-teal-400',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, proficiency: 92 },
      { name: 'Supabase / Neon', icon: <SiSupabase />, proficiency: 96 },
      { name: 'MongoDB / Atlas', icon: <SiMongodb />, proficiency: 88 },
      { name: 'PlanetScale / MySQL', icon: <SiPlanetscale />, proficiency: 85 },
      { name: 'Redis / Firebase', icon: <SiRedis />, proficiency: 90 }
    ]
  },
  {
    id: 6,
    title: 'Infrastructure',
    icon: <FiTool />,
    description: 'Cloud-native orchestration and development environment',
    accent: 'from-blue-600 to-indigo-700',
    skills: [
      { name: 'Docker / Compose', icon: <SiDocker />, proficiency: 94 },
      { name: 'Kubernetes / Helm', icon: <SiKubernetes />, proficiency: 85 },
      { name: 'Git / GitHub CLI', icon: <SiGit />, proficiency: 100 },
      { name: 'CI/CD Pipelines', icon: <FiZap />, proficiency: 90 },
      { name: 'Infrastructure as Code', icon: <SiTerraform />, proficiency: 82 }
    ]
  },
  {
    id: 7,
    title: 'Workflows & n8n',
    icon: <FiZap />,
    description: 'Complex workflow automation and specialized systems integration',
    accent: 'from-orange-500 to-rose-500',
    skills: [
      { name: 'n8n Orchestration', icon: <SiN8N />, proficiency: 95 },
      { name: 'Zapier / Make.com', icon: <SiZapier />, proficiency: 92 },
      { name: 'Pipedream automation', icon: <FiZap />, proficiency: 88 },
      { name: 'Custom API Connectors', icon: <FiCode />, proficiency: 90 },
      { name: 'System Interop', icon: <FiTerminal />, proficiency: 94 }
    ]
  },
  {
    id: 8,
    title: 'AI App Builders',
    icon: <FiCpu />,
    description: 'Rapidly deploying autonomous agents and AI-first interfaces',
    accent: 'from-amber-400 to-orange-500',
    skills: [
      { name: 'OpenAI Builders', icon: <SiOpenai />, proficiency: 98 },
      { name: 'OpenAI Apps / Agents', icon: <SiOpenai />, proficiency: 96 },
      { name: 'Gemini MakerSuite', icon: <SiGooglegemini />, proficiency: 92 },
      { name: 'KAgent / Custom Agents', icon: <FiCpu />, proficiency: 85 },
      { name: 'Prompt Engineering', icon: <FiCode />, proficiency: 100 }
    ]
  },
  {
    id: 9,
    title: 'Low-Code Ecosystem',
    icon: <FiLayout />,
    description: 'Professional internal tools and simplified platform utilities',
    accent: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Retool / Appsmith', icon: <SiRetool />, proficiency: 90 },
      { name: 'Bubble / No-Code', icon: <FiLayout />, proficiency: 82 },
      { name: 'OpenCloud CLI', icon: <FiTerminal />, proficiency: 88 },
      { name: 'CLIs (OpenAI/Gemini)', icon: <FiTerminal />, proficiency: 92 },
      { name: 'Platform Utilities', icon: <FiTool />, proficiency: 85 }
    ]
  }
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group relative space-y-3"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:bg-blue-600/10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {skill.icon}
          </div>
          <div>
            <h4 className="text-[13px] font-bold text-zinc-700 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
              {skill.name}
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-1.5 font-bold">
          <span className="text-[10px] text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            PRO LEVEL
          </span>
          <span className="text-xs text-zinc-900 dark:text-white tracking-tighter">
            {skill.proficiency}%
          </span>
        </div>
      </div>

      <div className="relative h-1.5 w-full bg-zinc-100 dark:bg-zinc-800/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400"
        >
          <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-r from-transparent to-white/40 blur-sm"></div>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 right-0 h-full w-1 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <motion.div
      className="group p-[1px] rounded-[2rem] bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800 dark:to-transparent hover:from-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl h-full"
    >
      <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-[2rem] p-7 h-full border border-white/20 dark:border-zinc-800/50 flex flex-col">
        <div className="space-y-6 flex-grow">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.accent} flex items-center justify-center text-white text-xl shadow-lg shrink-0`}>
                {category.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  {category.title}
                </h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <FiTrendingUp className="text-blue-500 text-[10px]" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Core Focus</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
            {category.description}
          </p>

          <div className="space-y-6 pt-2">
            {category.skills.map((skill: Skill, idx: number) => (
              <SkillCard key={skill.name} skill={skill} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <Background showExtraGradients className="py-24 lg:pt-32 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase mb-6 border border-blue-600/10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span>Tech Stack & Expert Skills</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight"
          >
            My Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Specializations.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            A cohesive and premium collection of technologies I use to build intelligent agents,
            scalable cloud systems, and modern web applications.
          </motion.p>
        </div>

        {/* Filter System */}
        <div className="flex flex-wrap justify-center gap-2 mb-20 px-4">
          <button
            onClick={() => setActiveCategory(null)}
            className={`relative px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${activeCategory === null
              ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-lg'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
          >
            All Areas
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Unified Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {skillCategories
              .filter(cat => activeCategory === null || cat.id === activeCategory)
              .map((category) => (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <CategoryCard category={category} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 text-center border-t border-zinc-100 dark:border-zinc-900 pt-12"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-600">
            Continuously evolving with the latest advancements
          </p>
        </motion.div>
      </div>
    </Background>
  );
}
