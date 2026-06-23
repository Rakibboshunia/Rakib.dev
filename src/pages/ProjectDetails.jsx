import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowLeft, ArrowRight, Shield, Cpu, Layers, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SEOHelmet from "../components/common/SEOHelmet";
import { projectsData } from "../data/projectsData";
import MagneticButton from "../components/common/MagneticButton";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectIndex = projectsData.findIndex((proj) => proj.id === parseInt(id));
  const project = projectsData[projectIndex];
  
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return null;

  const displayUrl = project.liveLink && project.liveLink !== "#"
    ? project.liveLink
    : `https://demo.boshunia.dev/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#f8f9fa] dark:bg-[#080808] pb-32 transition-colors duration-300 overflow-hidden">
      <SEOHelmet title={`${project.title} | Boshunia`} description={project.overview || project.description} />
      
      {/* 🚀 GLOWING AMBIENT BACKGROUND */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C9A96E]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[80vh] right-1/4 w-[600px] h-[600px] bg-[#C9A96E]/5 blur-[180px] rounded-full pointer-events-none z-0"></div>

      {/* 🚀 HEADER HERO AREA */}
      <div className="relative pt-24 md:pt-36 px-6 max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center text-xs font-bold tracking-[0.4em] text-[#C9A96E] uppercase mb-12 hover:gap-4 transition-all group"
          >
            <ArrowLeft size={16} className="mr-3 group-hover:-translate-x-1 transition-transform" /> Back to Works
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-4xl">
              <span className="text-[10px] tracking-[0.4em] font-extrabold text-[#C9A96E] uppercase mb-4 block">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-900 dark:text-white leading-none tracking-tighter">
                {project.title}
              </h1>
            </div>
            
            {project.liveLink && project.liveLink !== "#" && (
              <div className="shrink-0">
                <MagneticButton>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#C9A96E] hover:bg-[#b0935d] text-black font-bold text-xs tracking-widest uppercase flex flex-col items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl"
                  >
                    <span>Live Site</span>
                    <ExternalLink size={14} />
                  </a>
                </MagneticButton>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-6xl mx-auto mb-24 rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-gray-200/50 dark:border-white/10 bg-white dark:bg-[#111]"
        >
          {/* Browser Window Control Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-white/5">
            {/* Buttons */}
            <div className="flex gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
            </div>
            {/* Mock Address Bar */}
            <div className="hidden sm:flex items-center justify-center bg-gray-200 dark:bg-black/30 text-gray-500 dark:text-gray-400 text-xs px-6 py-1.5 rounded-lg w-1/2 max-w-[400px] font-mono tracking-wide text-center truncate border border-gray-300/40 dark:border-white/5 select-none">
              {displayUrl}
            </div>
            {/* Blank right spacer for symmetry */}
            <div className="w-12"></div>
          </div>
          
          {/* Main Screenshot Container */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-102" 
            />
            {/* Glow Behind Mockup */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
      </div>

      {/* 🧾 CORE DETAILS INFO SECTION */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Sidebar - Metadata & Technologies */}
          <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-32 h-fit">
            
            {/* Metadata Card */}
            <div className="p-8 bg-white/50 dark:bg-[#111]/50 backdrop-blur-xl border border-gray-200 dark:border-white/5 rounded-3xl space-y-6 shadow-sm">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-[10px] tracking-wider text-[#C9A96E] font-bold uppercase block mb-1">Role</span>
                  <span className="text-base text-gray-900 dark:text-white font-medium">{project.role || "Frontend Developer"}</span>
                </div>
                <div>
                  <span className="text-[10px] tracking-wider text-[#C9A96E] font-bold uppercase block mb-1">Year</span>
                  <span className="text-base text-gray-900 dark:text-white font-medium">2024</span>
                </div>
              </div>
              <div className="h-[1px] bg-gray-200 dark:bg-white/5 w-full"></div>
              <div>
                <span className="text-[10px] tracking-wider text-[#C9A96E] font-bold uppercase block mb-3">Core Stack</span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3.5 py-1.5 bg-gray-100 dark:bg-white/5 hover:bg-[#C9A96E]/20 text-gray-800 dark:text-gray-300 text-xs font-semibold rounded-full border border-gray-200 dark:border-white/5 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Card */}
            <div className="space-y-4">
              <h4 className="text-[10px] tracking-[0.4em] font-extrabold text-[#C9A96E] uppercase px-2">Access Links</h4>
              <div className="flex flex-col gap-4">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-6 bg-white dark:bg-[#111] hover:bg-[#C9A96E]/10 dark:hover:bg-[#C9A96E]/15 border border-gray-200 dark:border-white/5 rounded-2xl transition-all duration-300 group shadow-sm"
                >
                  <span className="font-semibold text-gray-900 dark:text-white group-hover:text-[#C9A96E] transition-colors">GitHub Repository</span>
                  <FaGithub size={20} className="text-gray-500 dark:text-gray-400 group-hover:text-[#C9A96E] group-hover:rotate-12 transition-all" />
                </a>
                
                {project.liveLink && project.liveLink !== "#" && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-between p-6 bg-white dark:bg-[#111] hover:bg-[#C9A96E]/10 dark:hover:bg-[#C9A96E]/15 border border-gray-200 dark:border-white/5 rounded-2xl transition-all duration-300 group shadow-sm"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white group-hover:text-[#C9A96E] transition-colors">Live Preview</span>
                    <ExternalLink size={20} className="text-gray-500 dark:text-gray-400 group-hover:text-[#C9A96E] group-hover:rotate-12 transition-all" />
                  </a>
                )}
              </div>
            </div>

          </aside>

          {/* Right Main Content - Presentation */}
          <main className="lg:col-span-8 space-y-24">
            
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white flex items-center gap-3">
                <Layers className="text-[#C9A96E]" size={28} /> Project Overview
              </h3>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light font-sans">
                {project.overview}
              </p>
            </motion.div>

            {/* Challenges Display Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 bg-white/70 dark:bg-[#111]/70 backdrop-blur-xl rounded-[2.5rem] border border-gray-200 dark:border-white/5 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A96E]/5 blur-[30px] rounded-full"></div>
              <h3 className="text-xl md:text-2xl font-serif text-[#C9A96E] mb-6 flex items-center gap-2.5">
                <Shield size={20} /> The Engineering Challenge
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed italic border-l-4 border-[#C9A96E] pl-6 md:pl-8 font-serif">
                "{project.challenges}"
              </p>
            </motion.div>

            {/* Core Implementation / Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white flex items-center gap-3">
                <Cpu className="text-[#C9A96E]" size={28} /> Core Solutions
              </h3>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light font-sans">
                {project.solution}
              </p>
            </motion.div>

            {/* 🌟 NEW: KEY FEATURES LIST SECTION */}
            {project.features && project.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <h3 className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white flex items-center gap-3">
                  <CheckCircle2 className="text-[#C9A96E]" size={28} /> Key Technical Features
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.features.map((feature, i) => (
                    <div 
                      key={i} 
                      className="p-6 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/5 rounded-2xl flex items-start gap-4 hover:border-[#C9A96E]/30 transition-all duration-300 shadow-sm"
                    >
                      <CheckCircle2 className="text-[#C9A96E] shrink-0 mt-1" size={18} />
                      <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed font-sans">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </main>
        </div>
      </div>

      {/* ⏭ NEXT PROJECT PREVIEW SECTION */}
      <div 
        onClick={() => navigate(`/projects/${nextProject.id}`)}
        className="relative h-[55vh] md:h-[65vh] w-full mt-36 cursor-pointer group overflow-hidden border-t border-white/5 shadow-2xl"
      >
        <img 
          src={nextProject.image} 
          alt={nextProject.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 grayscale group-hover:grayscale-0 brightness-40 group-hover:brightness-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:via-black/70 transition-colors duration-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-[10px] tracking-[0.6em] text-[#C9A96E] uppercase mb-6 font-extrabold">NEXT SHOWCASE</p>
            <h2 className="text-4xl md:text-7xl font-serif text-white tracking-tighter transition-all duration-700 group-hover:scale-[1.02] max-w-4xl mx-auto leading-tight">
              {nextProject.title}
            </h2>
            <div className="flex items-center justify-center gap-2 mt-8 text-xs font-extrabold tracking-widest text-[#C9A96E] uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <span>Explore Project</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
