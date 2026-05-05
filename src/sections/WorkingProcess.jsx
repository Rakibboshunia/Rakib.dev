import { motion } from "framer-motion";
import { FaPaintBrush, FaCode, FaRocket, FaSearch } from "react-icons/fa";

const processes = [
  { title: "Discovery", desc: "Understanding the project scope & requirements.", icon: <FaSearch /> },
  { title: "Design", desc: "Creating intuitive UI/UX with modern aesthetics.", icon: <FaPaintBrush /> },
  { title: "Development", desc: "Building scalable and fast architectures.", icon: <FaCode /> },
  { title: "Launch", desc: "Deploying and optimizing for performance.", icon: <FaRocket /> },
];

const WorkingProcess = () => {
  return (
    <section className="py-24 px-6 bg-[#f8f9fa] dark:bg-[#0D0D0D] transition-colors duration-300 border-t border-gray-200 dark:border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto relative z-10">
        <h3 className="text-center text-[#C9A96E] font-serif mb-16 tracking-[0.2em] text-lg uppercase">
          • Working Process •
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processes.map((proc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center p-8 bg-white dark:bg-[#111] border border-gray-200 dark:border-[#1a1a1a] rounded-2xl relative group shadow-sm hover:border-[#C9A96E]/50 transition-colors"
            >
              {/* Connector Line (Desktop) */}
              {i !== processes.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gray-200 dark:bg-white/10 z-0"></div>
              )}

              <div className="w-16 h-16 rounded-full bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 flex items-center justify-center text-[#C9A96E] text-2xl mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {proc.icon}
              </div>
              <h4 className="text-gray-900 dark:text-white font-medium text-lg mb-3">{proc.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{proc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
