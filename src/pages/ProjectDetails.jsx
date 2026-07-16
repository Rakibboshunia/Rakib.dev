import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowLeft, ArrowRight, Shield, Cpu, Layers, CheckCircle2, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
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

  const [activeGalleryImg, setActiveGalleryImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveGalleryImg(0);
  }, [id]);

  if (!project) return null;

  const gallery = project.galleryImages || [];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevLightbox = () => setLightboxIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  const nextLightbox = () => setLightboxIndex((prev) => (prev + 1) % gallery.length);

  const displayUrl = project.liveLink && project.liveLink !== "#"
    ? project.liveLink
    : `https://demo.boshunia.dev/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <>
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
            className="relative w-full max-w-6xl mx-auto mb-24 space-y-4"
          >
            {/* Browser Window + Main Gallery Image */}
            <div className="rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-gray-200/50 dark:border-white/10 bg-white dark:bg-[#111]">
              {/* Browser Bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-white/5">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="hidden sm:flex items-center justify-center bg-gray-200 dark:bg-black/30 text-gray-500 dark:text-gray-400 text-xs px-6 py-1.5 rounded-lg w-1/2 max-w-[400px] font-mono tracking-wide text-center truncate border border-gray-300/40 dark:border-white/5 select-none">
                  {displayUrl}
                </div>
                <div className="w-12"></div>
              </div>

              {/* Main Image */}
              {gallery.length > 0 ? (
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950 cursor-zoom-in group"
                  onClick={() => openLightbox(activeGalleryImg)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeGalleryImg}
                      src={gallery[activeGalleryImg]}
                      alt={`${project.title} screenshot ${activeGalleryImg + 1}`}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  {/* Zoom hint */}
                  <div className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={18} />
                  </div>
                  {/* Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
                    {activeGalleryImg + 1} / {gallery.length}
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            {gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-[#C9A96E]/30 scrollbar-track-transparent">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveGalleryImg(i)}
                    className={`relative shrink-0 w-28 h-18 rounded-xl overflow-hidden border-2 transition-all duration-200 ${activeGalleryImg === i
                        ? "border-[#C9A96E] shadow-[0_0_12px_rgba(201,169,110,0.5)] scale-105"
                        : "border-gray-200 dark:border-white/10 opacity-55 hover:opacity-100 hover:border-[#C9A96E]/50"
                      }`}
                  >
                    <img src={img} alt={`thumb ${i + 1}`} className="w-full h-full object-cover aspect-video" />
                  </button>
                ))}
              </div>
            )}
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
                    <span className="text-base text-gray-900 dark:text-white font-medium">{project.year || "2024"}</span>
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


              {/* 🔥 BUSINESS IMPACT SECTION */}
              {project.businessImpact && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="p-8 md:p-12 mt-16 bg-[#C9A96E]/10 dark:bg-[#C9A96E]/5 rounded-[2.5rem] border border-[#C9A96E]/30 shadow-lg"
                >
                  <h3 className="text-2xl md:text-3xl font-serif text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <span className="text-3xl">📈</span> Business Impact & Value
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light font-sans mb-8">
                    {project.businessImpact}
                  </p>

                  {project.results && project.results.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-[10px] tracking-[0.3em] font-bold text-[#C9A96E] uppercase">Measurable Results</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {project.results.map((res, i) => (
                          <div key={i} className="flex items-center gap-3 bg-white/50 dark:bg-black/30 p-4 rounded-xl border border-gray-200/50 dark:border-white/5">
                            <div className="w-2 h-2 rounded-full bg-[#C9A96E] shrink-0"></div>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{res}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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

      {/* 🔍 LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxOpen && gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
            >
              <X size={24} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
              className="absolute left-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Main lightbox image */}
            <motion.div
              className="max-w-5xl max-h-[85vh] mx-16 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <img
                src={gallery[lightboxIndex]}
                alt={`${project.title} screenshot ${lightboxIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
              className="absolute right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all"
            >
              <ChevronRight size={28} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
              {lightboxIndex + 1} / {gallery.length}
            </div>

            {/* Thumbnail strip in lightbox */}
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-xl px-4">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${lightboxIndex === i ? "border-[#C9A96E] scale-110" : "border-white/20 opacity-50 hover:opacity-80"
                    }`}
                >
                  <img src={img} alt={`thumb ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetails;
