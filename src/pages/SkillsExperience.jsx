import { motion } from "framer-motion";
import SEOHelmet from "../components/common/SEOHelmet";

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiNextdotjs, SiBootstrap } from "react-icons/si";

const mernSkills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
];

const experiences = [
  {
    role: "Frontend Developer",
    company: "Fire AI - Betopia Group",
    year: "2025 - Present",
    desc: "Developing and deploying frontend web applications, e-commerce platforms, and interactive user interfaces.",
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    year: "2024 - 2025",
    desc: "Specialized in building responsive frontend architectures using React, Next.js, and Tailwind CSS with a focus on web performance.",
  },
  {
    role: "Designer For POD (print on demand) Store",
    company: "Freelance - Various Clients Worldwide",
    year: "2021 - 2024",
    desc: "Crafted unique designs for print-on-demand platforms, leveraging creativity and market trends to create compelling products that resonate with customers.",
  }
];

const SkillsExperience = () => {
  return (
    <section id="skills-experience" className="py-20 px-6 bg-[#f8f9fa] dark:bg-[#0D0D0D] relative overflow-hidden min-h-screen transition-colors duration-300">
      <SEOHelmet title="Skills & Experience | Boshunia" />
      {/* Background glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#C9A96E]/10 blur-[150px] rounded-full top-[-100px] left-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#C9A96E] font-serif tracking-[0.3em] text-lg mb-4">
            • SKILLS & EXPERIENCE •
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A track record of crafting premium digital experiences and mastering modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-white/10 pb-4">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {mernSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center justify-center p-8 bg-white dark:bg-[#111]/70 backdrop-blur-xl border border-gray-200 dark:border-[#1a1a1a] rounded-2xl shadow-sm hover:border-[#C9A96E] dark:hover:border-[#C9A96E]/50 hover:shadow-lg transition-all duration-300 group cursor-default"
                >
                  <span className="text-5xl text-gray-300 dark:text-gray-600 group-hover:text-[#C9A96E] transition-colors duration-300 mb-4 drop-shadow-sm">
                    {skill.icon}
                  </span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium tracking-wide group-hover:text-[#C9A96E] transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-white/10 pb-4">Experience</h3>
            <div className="flex flex-col gap-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                  className="relative pl-8 border-l border-[#C9A96E]/30"
                >
                  <span className="absolute -left-2 top-0 w-4 h-4 bg-[#f8f9fa] dark:bg-[#0D0D0D] border-2 border-[#C9A96E] rounded-full"></span>
                  <div className="text-[#C9A96E] text-sm font-medium tracking-wide mb-1">{exp.year}</div>
                  <h4 className="text-xl text-gray-900 dark:text-white font-medium">{exp.role}</h4>
                  <div className="text-gray-600 dark:text-gray-400 text-sm mb-3">{exp.company}</div>
                  <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;
