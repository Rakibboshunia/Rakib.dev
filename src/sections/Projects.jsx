import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SEOHelmet from "../components/common/SEOHelmet";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import SpotlightCard from "../components/common/SpotlightCard";

const categories = ["All", "E-Commerce", "Landing Page", "Dashboard"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative min-h-screen transition-colors duration-300 bg-transparent"
    >
      <SEOHelmet title="Projects | Boshunia" />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-12"
        >
          <div className="max-w-2xl">
            <h2 className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs uppercase mb-6 block font-bold">
              • Selected Works
            </h2>
            <h3 className="text-5xl md:text-7xl font-serif leading-none tracking-tighter">
              Bespoke <br /> <span className="text-[#C9A96E]">Creations.</span>
            </h3>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`pb-2 border-b-2 transition-all duration-500 ${
                  activeCategory === cat
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

      {/* Horizontal Scroll Content (Desktop) */}
      <div ref={scrollRef} className="relative h-[300vh] hidden lg:block">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-12 px-[10vw]">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Grid Content (Mobile/Tablet) */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 gap-12">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isGrid />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isGrid = false }) => (
  <motion.div
    layout
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className={`${isGrid ? "w-full" : "w-[450px] shrink-0"}`}
  >
    <SpotlightCard className="glass-card rounded-[2.5rem] overflow-hidden group border-white/5 h-full">
      <Link to={`/projects/${project.id}`} className="block relative aspect-[4/5] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-10 left-10 right-10">
           <span className="text-[10px] font-bold tracking-[0.3em] text-[#C9A96E] uppercase mb-3 block">
             {project.category}
           </span>
           <h4 className="text-2xl font-serif text-white mb-6 group-hover:text-[#C9A96E] transition-colors">
             {project.title}
           </h4>
           <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-xs font-bold tracking-widest uppercase text-white">View Details</span>
              <ArrowRight size={16} className="text-[#C9A96E]" />
           </div>
        </div>
      </Link>

      <div className="p-10 flex gap-6 items-center border-t border-white/5">
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