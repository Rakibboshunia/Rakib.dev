import { motion } from "framer-motion";
import { FaPaintBrush, FaCode, FaRocket, FaSearch } from "react-icons/fa";

const processes = [
  {
    title: "Discovery",
    desc: "We start by deep-diving into your project scope, target audience, and business goals to ensure a solid foundation.",
    icon: <FaSearch />,
    step: "01"
  },
  {
    title: "Design",
    desc: "Crafting intuitive UI/UX with modern aesthetics, focus on user psychology, and high-end visual storytelling.",
    icon: <FaPaintBrush />,
    step: "02"
  },
  {
    title: "Development",
    desc: "Translating designs into clean, scalable code using cutting-edge technologies for maximum performance.",
    icon: <FaCode />,
    step: "03"
  },
  {
    title: "Launch",
    desc: "Rigorous testing followed by seamless deployment and optimization to ensure your product performs at its best.",
    icon: <FaRocket />,
    step: "04"
  },
];

const WorkingProcess = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-[#fcfcfc] dark:bg-[#080808] transition-colors duration-500 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#C9A96E] font-serif mb-6 tracking-[0.4em] text-xs uppercase font-bold"
          >
            • The Methodology
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif tracking-tighter"
          >
            How I Bring Your <br /> <span className="text-[#C9A96E]">Vision to Life.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {processes.map((proc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group p-10 bg-white dark:bg-[#0c0c0c] border border-gray-100 dark:border-white/5 rounded-[2.5rem] hover:border-[#C9A96E]/30 transition-all duration-500 shadow-xl shadow-black/5"
            >
              {/* Step Number Backdrop */}
              <span className="absolute top-6 right-8 text-7xl font-serif text-gray-50 dark:text-white/[0.02] group-hover:text-[#C9A96E]/5 transition-colors duration-500 pointer-events-none select-none">
                {proc.step}
              </span>

              <div className="w-14 h-14 rounded-2xl bg-[#C9A96E]/10 flex items-center justify-center text-[#C9A96E] text-xl mb-10 group-hover:scale-110 group-hover:bg-[#C9A96E] group-hover:text-black transition-all duration-500">
                {proc.icon}
              </div>

              <h4 className="text-gray-900 dark:text-white font-serif text-2xl mb-4 group-hover:text-[#C9A96E] transition-colors">{proc.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
                {proc.desc}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
