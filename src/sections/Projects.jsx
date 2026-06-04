import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

import img1 from "../assets/E-com.jpg";
import img2 from "../assets/landing page.webp";
import img3 from "../assets/dashboard.webp";
import img4 from "../assets/saas.webp";

const projectsData = [
  {
    id: 4,
    title: "EduNest",
    category: "Dashboard",
    badgeLabel: "SAAS PLATFORM",
    description: "The Modern OS for Educational Excellence. Streamline operations, boost student engagement, and gain powerful insights.",
    tags: ["#React", "#TailwindCSS", "#Vite"],
    image: img4,
    link: "https://edu-nest-eta.vercel.app/",
  },
  {
    id: 1,
    title: "OREBI E-Commerce",
    category: "E-Commerce",
    badgeLabel: "E-COMMERCE",
    description: "A premium e-commerce platform featuring complex filtering, cart management, and a high-performance architecture.",
    tags: ["#React", "#TailwindCSS", "#Redux"],
    image: img1,
    link: "#",
  },
  {
    id: 2,
    title: "Gericht Fine Dining",
    category: "Landing Page",
    badgeLabel: "LANDING PAGE",
    description: "A visually stunning immersive web experience for high-end dining, focusing on elegant typography and smooth animations.",
    tags: ["#React", "#CSS3", "#FramerMotion"],
    image: img2,
    link: "#",
  },
  {
    id: 3,
    title: "UNIAO Agency",
    category: "Landing Page",
    badgeLabel: "LANDING PAGE",
    description: "A bold, modern agency portfolio designed to showcase high-impact services and creative excellence.",
    tags: ["#React", "#FramerMotion", "#Tailwind"],
    image: img3,
    link: "#",
  },
];

const categories = ["All", "E-Commerce", "Landing Page", "Dashboard"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 bg-[#f8f9fa] dark:bg-[#0D0D0D] relative min-h-screen font-sans transition-colors duration-300">
      {/* Background Glow similar to original */}
      <div className="absolute w-[600px] h-[600px] bg-[#C9A96E]/5 blur-[150px] rounded-full top-0 left-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center relative mb-16">
          {/* Faded Background Text */}
          <h1 className="absolute inset-0 flex items-center justify-center text-[10vw] font-bold text-[#C9A96E]/5 select-none z-0 tracking-widest mt-8 pointer-events-none">
            PORTFOLIO
          </h1>
          
          <h2 className="text-[#C9A96E] font-serif tracking-[0.3em] text-lg mb-12 mt-16 relative z-10 inline-block">
            <span className="relative inline-block pb-2">
              <span className="text-gray-900 dark:text-white">MY</span>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#C9A96E]"></span>
            </span>{" "}
            WORK
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-6 relative z-10 text-sm font-medium">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`relative pb-2 transition-colors ${
                  activeCategory === cat ? "text-[#C9A96E]" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#C9A96E]"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.a
                href={project.link}
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/5 hover:border-[#C9A96E]/30 dark:hover:border-[#C9A96E]/30 rounded-xl overflow-hidden group shadow-lg flex flex-col h-full hover:-translate-y-2 transition-all duration-300 relative cursor-pointer"
              >
                {/* Image Box */}
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <div className="w-12 h-12 bg-[#C9A96E] rounded-full flex items-center justify-center transition-transform transform md:scale-0 group-hover:scale-100 duration-300 delay-100">
                        <ExternalLink size={20} className="text-black" />
                     </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-xs font-semibold tracking-wider text-[#C9A96E] mb-3">
                    {project.badgeLabel}
                  </span>
                  <h3 className="text-gray-900 dark:text-white text-xl font-medium mb-3 group-hover:text-[#C9A96E] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-[#C9A96E]/70 text-xs font-medium bg-[#C9A96E]/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;