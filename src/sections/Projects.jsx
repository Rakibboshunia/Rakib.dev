import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SEOHelmet from "../components/common/SEOHelmet";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import SpotlightCard from "../components/common/SpotlightCard";

const categories = ["All", "E-Commerce", "Landing Page", "Dashboard", "SaaS & Web App", "WordPress"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative min-h-screen transition-colors duration-300 bg-transparent"
    >
      <SEOHelmet title="Projects | Boshunia" />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-12 md:pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-12"
        >
          <div className="max-w-2xl">
            <h2 className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs uppercase mb-6 block font-bold">
              • Technical Portfolio
            </h2>
            <h3 className="text-5xl md:text-7xl font-serif leading-none tracking-tighter">
              Enterprise <br /> <span className="text-[#C9A96E]">Solutions.</span>
            </h3>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className={`pb-2 border-b-2 transition-all duration-500 ${activeCategory === cat
                    ? "border-[#C9A96E] text-[#C9A96E]"
                    : "border-transparent text-gray-500 hover:text-gray-300"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Beautiful Premium Grid (1 col on mobile, 2 col on tablet, 3 col on desktop) */}
      <div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-4 bg-transparent border border-[#C9A96E] text-[#C9A96E] font-bold rounded-full overflow-hidden transition-all hover:bg-[#C9A96E] hover:text-black flex items-center gap-3"
            >
              <span>{showAll ? "Show Less" : "View All Works"}</span>
              <ArrowRight size={18} className={`transition-transform ${showAll ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    className="w-full h-full"
  >
    <SpotlightCard className="glass-card rounded-[2.5rem] overflow-hidden group border-white/5 h-full flex flex-col justify-between">
      <div className="flex-grow">
        <Link to={`/projects/${project.id}`} className="block relative aspect-[3/2] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

          {/* Content Overlay */}
          <div className="absolute bottom-6 left-8 right-8">
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#C9A96E] uppercase mb-2 block">
              {project.category}
            </span>
            <h4 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-[#C9A96E] transition-colors">
              {project.title}
            </h4>
            <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-xs font-bold tracking-widest uppercase text-white">View Details</span>
              <ArrowRight size={16} className="text-[#C9A96E]" />
            </div>
          </div>
        </Link>
      </div>

      <div className="py-6 px-8 flex gap-6 items-center border-t border-white/5 bg-neutral-900/10 dark:bg-black/10">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-[#C9A96E] transition-colors"
        >
          <FaGithub size={20} />
        </a>
        <div className="w-[1px] h-6 bg-white/10"></div>
        <p className="text-xs text-gray-500 line-clamp-1 flex-grow">
          {project.description}
        </p>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="text-[#C9A96E]"
        >
          <ExternalLink size={20} />
        </a>
      </div>
    </SpotlightCard>
  </motion.div>
);

export default Projects;