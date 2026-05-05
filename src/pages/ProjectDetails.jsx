import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
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

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return null;

  return (
    <section ref={containerRef} className="relative min-h-screen bg-transparent pb-32">
      <SEOHelmet title={`${project.title} | Boshunia`} />
      
      {/* 🚀 FULL SCREEN HERO */}
      <div className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ opacity, scale }} className="absolute inset-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale brightness-50" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-center px-6">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link to="/projects" className="inline-flex items-center text-xs font-bold tracking-[0.4em] text-[#C9A96E] uppercase mb-12 hover:gap-4 transition-all">
                <ArrowLeft size={16} className="mr-4" /> Back to Works
              </Link>
              <h1 className="text-[10vw] font-serif leading-none tracking-tighter text-white mb-12">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-12">
                <div>
                   <p className="text-[10px] tracking-widest text-[#C9A96E] font-bold uppercase mb-2">Category</p>
                   <p className="text-xl text-white font-serif">{project.category}</p>
                </div>
                <div>
                   <p className="text-[10px] tracking-widest text-[#C9A96E] font-bold uppercase mb-2">Year</p>
                   <p className="text-xl text-white font-serif">2024</p>
                </div>
                <div className="ml-auto hidden md:block">
                   <MagneticButton>
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="w-32 h-32 rounded-full bg-[#C9A96E] flex items-center justify-center text-black font-bold text-xs tracking-widest uppercase hover:scale-110 transition-transform">
                        Live Site
                      </a>
                   </MagneticButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 🧾 CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-24">
          
          {/* Sidebar - 4 columns */}
          <aside className="lg:col-span-4 h-fit lg:sticky lg:top-32">
            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] tracking-[0.4em] font-bold text-[#C9A96E] uppercase mb-6">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-4 py-2 glass rounded-full text-xs font-medium border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] tracking-[0.4em] font-bold text-[#C9A96E] uppercase mb-6">Links</h4>
                <div className="flex flex-col gap-4">
                  <a href={project.githubLink} className="flex items-center justify-between p-6 glass rounded-2xl border-white/5 hover:bg-[#C9A96E]/10 transition-colors group">
                    <span className="font-medium">GitHub Repository</span>
                    <FaGithub size={20} className="text-[#C9A96E] group-hover:rotate-12 transition-transform" />
                  </a>
                  <a href={project.liveLink} className="flex items-center justify-between p-6 glass rounded-2xl border-white/5 hover:bg-[#C9A96E]/10 transition-colors group">
                    <span className="font-medium">Live Preview</span>
                    <ExternalLink size={20} className="text-[#C9A96E] group-hover:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content - 8 columns */}
          <main className="lg:col-span-8 space-y-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h3 className="text-4xl font-serif">Project Overview</h3>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                {project.overview}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-12 glass rounded-[3rem] border-white/5"
            >
              <h3 className="text-2xl font-serif mb-8 text-[#C9A96E]">The Challenge</h3>
              <p className="text-lg text-gray-400 leading-relaxed italic border-l-2 border-[#C9A96E] pl-8">
                {project.challenges}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h3 className="text-4xl font-serif">The Engineering</h3>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                {project.solution}
              </p>
            </motion.div>
          </main>
        </div>
      </div>

      {/* ⏭ NEXT PROJECT PREVIEW */}
      <div 
        onClick={() => navigate(`/projects/${nextProject.id}`)}
        className="relative h-[60vh] w-full mt-32 cursor-pointer group overflow-hidden"
      >
        <img 
          src={nextProject.image} 
          alt={nextProject.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale" 
        />
        <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[10px] tracking-[0.5em] text-[#C9A96E] uppercase mb-8 font-bold">NEXT PROJECT</p>
            <h2 className="text-[6vw] font-serif text-white tracking-tighter transition-transform duration-700 group-hover:scale-105">
              {nextProject.title}
            </h2>
            <ArrowRight size={40} className="mx-auto mt-8 text-[#C9A96E] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

