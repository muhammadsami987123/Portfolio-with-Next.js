'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Background from '@/components/Background';
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiServer,
  FiTool,
  FiGitBranch,
  FiCpu,
  FiTerminal,
} from 'react-icons/fi';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiFramer,
  SiExpress,
  SiDjango,
  SiGraphql,
  SiMysql,
  SiSupabase,
  SiVercel,
  SiGithub,
  SiSanity,
  SiOpenai,
  SiLangchain,
  SiHuggingface,
  SiFirebase,
  SiAmazon,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiStreamlit,
  SiBitbucket
} from 'react-icons/si';

const skillCategories = [
  {
    id: 1,
    title: 'Frontend',
    icon: <FiLayout />,
    description: 'Building responsive, accessible, and performant user interfaces',
    skills: [
      { name: 'React', icon: <SiReact />, proficiency: 90 },
      { name: 'Next.js', icon: <SiNextdotjs />, proficiency: 100 },
      { name: 'JavaScript', icon: <SiJavascript />, proficiency: 90 },
      { name: 'TypeScript', icon: <SiTypescript />, proficiency: 93 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, proficiency: 100 },
      { name: 'CSS3', icon: <SiCss3 />, proficiency: 98 },
      { name: 'HTML5', icon: <SiHtml5 />, proficiency: 95 },
      { name: 'Framer Motion', icon: <SiFramer />, proficiency: 75 }
    ]
  },
  {
    id: 2,
    title: 'Backend',
    icon: <FiServer />,
    description: 'Developing robust server-side applications and APIs',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, proficiency: 91 },
      { name: 'Express', icon: <SiExpress />, proficiency: 65 },
      { name: 'Python', icon: <SiPython />, proficiency: 95 },
      { name: 'Django', icon: <SiDjango />, proficiency: 19 },
      { name: 'RESTful APIs', icon: <FiCode />, proficiency: 90 },
      { name: 'GraphQL', icon: <SiGraphql />, proficiency: 18 }
    ]
  },
  {
    id: 3,
    title: 'Database',
    icon: <FiDatabase />,
    description: 'Designing and optimizing database structures for applications',
    skills: [
      { name: 'Sanity', icon: <SiSanity />, proficiency: 91 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, proficiency: 10 },
      { name: 'MySQL', icon: <SiMysql />, proficiency: 16 },
      { name: 'Supabase', icon: <SiSupabase />, proficiency: 13 },
      { name: 'Firebase', icon: <SiFirebase />, proficiency: 9 }
    ]
  },
  {
    id: 4,
    title: 'DevOps',
    icon: <FiTool />,
    description: 'Automating deployment and managing cloud infrastructure',
    skills: [
      { name: 'AWS', icon: <SiAmazon />, proficiency: 70 },
      { name: 'Netlify', icon: <SiNetlify />, proficiency: 90 },
      { name: 'Vercel', icon: <SiVercel />, proficiency: 95 },
      { name: 'Docker', icon: <SiDocker />, proficiency: 75 },
      { name: 'CI/CD Pipelines', icon: <FiTool />, proficiency: 85 }
    ]
  },
  {
    id: 5,
    title: 'Version Control',
    icon: <FiGitBranch />,
    description: 'Collaborative development and source code management',
    skills: [
      { name: 'Git', icon: <SiGit />, proficiency: 95 },
      { name: 'GitHub', icon: <SiGithub />, proficiency: 97 },
      { name: 'Bitbucket', icon: <SiBitbucket />, proficiency: 35 }
    ]
  },
  {
    id: 6,
    title: 'Programming',
    icon: <FiTerminal />,
    description: 'Fundamental programming languages and problem solving',
    skills: [
      { name: 'Python', icon: <SiPython />, proficiency: 95 },
      { name: 'TypeScript', icon: <SiTypescript />, proficiency: 93 },
      { name: 'JavaScript', icon: <SiJavascript />, proficiency: 90 },
      { name: 'Java', icon: <FiTerminal />, proficiency: 60 }
    ]
  },
  {
    id: 7,
    title: 'AI & Machine Learning',
    icon: <FiCpu />,
    description: 'Building intelligent agents and leveraging state-of-the-art AI frameworks',
    skills: [
      { name: 'OpenAI SDK', icon: <SiOpenai />, proficiency: 90 },
      { name: 'LangChain', icon: <SiLangchain />, proficiency: 80 },
      { name: 'HuggingFace', icon: <SiHuggingface />, proficiency: 75 },
      { name: 'CrewAI', icon: <FiCpu />, proficiency: 70 },
      { name: 'Chainlit', icon: <FiCode />, proficiency: 70 },
      { name: 'Streamlit', icon: <SiStreamlit />, proficiency: 85 },
      { name: 'Prompt Engineering', icon: <FiCode />, proficiency: 90 }
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <Background className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase mb-4"
          >
            Technical Stack
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Expertise.</span>
          </motion.h2>
          <motion.p
            className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A comprehensive overview of my technical skills and proficiency levels across various domains.
          </motion.p>
        </div>

        {/* Categories as minimalist filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeCategory === null
                ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-lg'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
          >
            All
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
            >
              <span className="opacity-70">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {skillCategories
            .filter(category => activeCategory === null || category.id === activeCategory)
            .map((category) => (
              <motion.div
                key={category.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-white dark:bg-zinc-900/50 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800 text-blue-600 dark:text-blue-400">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{category.title}</h3>
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider">{category.description.split(',')[0]}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2.5">
                      <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-400 text-base">{skill.icon}</span>
                          <span className="font-bold text-zinc-700 dark:text-zinc-200">{skill.name}</span>
                        </div>
                        <span className="font-bold text-blue-600 dark:text-blue-400 tracking-tighter">{skill.proficiency}%</span>
                      </div>
                      <div className="h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${skill.proficiency > 80
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                              : skill.proficiency > 50
                                ? 'bg-blue-500/60'
                                : 'bg-orange-500/60'
                            }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </Background>
  );
}
