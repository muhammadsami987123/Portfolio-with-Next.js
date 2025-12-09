'use client';
import { SiPython, SiSanity } from 'react-icons/si';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiServer,
  FiTool,
  FiGitBranch
} from 'react-icons/fi';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiCss3,
  // SiPython, 
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiHtml5,
  SiFramer,
  SiExpress,
  SiDjango,
  SiGraphql,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiAmazon,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiGitlab,
  SiBitbucket,

} from 'react-icons/si';
// import SiJava from 'react-icons/si'
// import SiCsharp from 'react-icons/si'
// Skill data with proficiency levels and expanded icon support
const skillCategories = [
  {
    id: 1,
    title: 'Frontend',
    icon: <FiLayout size={24} className="text-blue-600 dark:text-blue-400" />,
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
    icon: <FiServer size={24} className="text-green-600 dark:text-green-400" />,
    description: 'Developing robust server-side applications and APIs',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, proficiency: 91 },
      { name: 'Express', icon: <SiExpress />, proficiency: 65 },
      { name: 'Python', icon: <SiPython />, proficiency: 95 },
      { name: 'Django', icon: <SiDjango />, proficiency: 19 },
      { name: 'RESTful APIs', icon: <FiServer className="text-sm" />, proficiency: 90 },
      { name: 'GraphQL', icon: <SiGraphql />, proficiency: 18 }
    ]
  },
  {
    id: 3,
    title: 'Database',
    icon: <FiDatabase size={24} className="text-purple-600 dark:text-purple-400" />,
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
    icon: <FiTool size={24} className="text-red-600 dark:text-red-400" />,
    description: 'Automating deployment and managing cloud infrastructure',
    skills: [
      { name: 'Vercel', icon: <SiVercel />, proficiency: 100 },
      { name: 'Docker', icon: <SiDocker />, proficiency: 43 },
      { name: 'CI/CD', icon: <FiTool className="text-sm" />, proficiency: 90 },
      { name: 'AWS', icon: <SiAmazon />, proficiency: 70 },

      { name: 'Netlify', icon: <SiNetlify />, proficiency: 90 }
    ]
  },
  {
    id: 5,
    title: 'Version Control',
    icon: <FiGitBranch size={24} className="text-orange-600 dark:text-orange-400" />,
    description: 'Managing code changes and collaborating with teams',
    skills: [
      { name: 'Git', icon: <SiGit />, proficiency: 90 },
      { name: 'GitHub', icon: <SiGithub />, proficiency: 97 },
      { name: 'GitLab', icon: <SiGitlab />, proficiency: 80 },
      { name: 'Bitbucket', icon: <SiBitbucket />, proficiency: 35 }
    ]
  },
  {
    id: 6,
    title: 'Programming',
    icon: <FiCode size={24} className="text-indigo-600 dark:text-indigo-400" />,
    description: 'Core programming languages and problem-solving',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript />, proficiency: 90 },
      { name: 'TypeScript', icon: <SiTypescript />, proficiency: 85 },
      { name: 'Python', icon: <SiPython />, proficiency: 95 },
      // { name: 'Java', icon: <SiJava />, proficiency: 70 },
      { name: 'Next.js', icon: <SiNextdotjs />, proficiency: 100 }

    ]
  },
  {
    id: 7,
    title: 'AI & Machine Learning',
    icon: <FiCode size={24} className="text-purple-600 dark:text-purple-400" />,
    description: 'Building intelligent agents and leveraging state-of-the-art AI frameworks',
    skills: [
      { name: 'OpenAI SDK', icon: <SiPython />, proficiency: 90 },
      { name: 'LangChain', icon: <SiPython />, proficiency: 80 },
      { name: 'HuggingFace', icon: <SiPython />, proficiency: 75 },
      { name: 'CrewAI', icon: <SiPython />, proficiency: 70 },
      { name: 'Chainlit', icon: <SiPython />, proficiency: 70 },
      { name: 'Streamlit', icon: <SiPython />, proficiency: 85 },
      { name: 'Prompt Engineering', icon: <SiPython />, proficiency: 90 },
      { name: 'LLMs', icon: <SiPython />, proficiency: 85 },
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="relative min-h-screen py-20 lg:py-28 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Dot Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#333_1px,transparent_1px)] opacity-60"></div>
        {/* Gradients */}
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A comprehensive overview of my technical skills and proficiency levels across various domains
          </motion.p>
        </div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full font-medium transition-all ${activeCategory === null ?
              'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/20' :
              'bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700'
              }`}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full font-medium transition-all flex items-center gap-1 sm:gap-2 ${activeCategory === category.id ?
                'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/20' :
                'bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700'
                }`}
              onClick={() => setActiveCategory(category.id as number | null)}
            >
              <span className="hidden sm:inline">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories
            .filter(category => activeCategory === null || category.id === activeCategory)
            .map((category) => (
              <motion.div
                key={category.id}
                className="bg-white dark:bg-zinc-900 rounded-lg sm:rounded-xl shadow-xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                variants={item}
              >
                <div className="p-4 sm:p-6">
                  <div className="flex items-start sm:items-center mb-3">
                    <div className={`p-2 sm:p-3 rounded-lg mr-2 sm:mr-4 bg-opacity-20 flex-shrink-0 ${category.id === 1 ? 'bg-blue-100 dark:bg-blue-900' :
                      category.id === 2 ? 'bg-green-100 dark:bg-green-900' :
                        category.id === 3 ? 'bg-purple-100 dark:bg-purple-900' :
                          category.id === 4 ? 'bg-red-100 dark:bg-red-900' :
                            category.id === 5 ? 'bg-orange-100 dark:bg-orange-900' :
                              'bg-indigo-100 dark:bg-indigo-900'
                      }`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">{category.title}</h3>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="mr-1.5 sm:mr-2 text-sm sm:text-base text-zinc-700 dark:text-zinc-200">
                              {skill.icon}
                            </span>
                            <span className="text-sm sm:text-base font-medium text-zinc-800 dark:text-zinc-100">{skill.name}</span>
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-1.5 sm:h-2">
                          <motion.div
                            className={`h-1.5 sm:h-2 rounded-full ${skill.proficiency >= 90 ? 'bg-green-500 dark:bg-green-400' :
                              skill.proficiency >= 80 ? 'bg-blue-500 dark:bg-blue-400' :
                                skill.proficiency >= 70 ? 'bg-yellow-500 dark:bg-yellow-400' :
                                  'bg-orange-500 dark:bg-orange-400'
                              }`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}