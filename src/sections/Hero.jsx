import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import cvFile from "../assets/MD. AL RAKEB RASEL BOSHUNIA .pdf";
import MagneticButton from "../components/common/MagneticButton";
import heroImg from "../assets/boshunia-hero.jpg";

const Hero = () => {
  const containerRef = useRef(null);

  return (
    <section 
      id="home" 
      ref={containerRef} 
      className="relative min-h-screen md:h-screen bg-transparent flex flex-col justify-center overflow-hidden pt-28 pb-16 md:py-0"
    >
      {/* Container */}
      <div className="relative w-full flex-grow flex flex-col md:block justify-center bg-transparent">
        
        {/* Text Content (Left Side on Desktop, Top on Mobile) */}
        <div className="relative md:absolute md:inset-0 flex items-center pointer-events-none z-10 w-full px-6 md:px-0">
          <div className="w-full max-w-7xl mx-auto pointer-events-auto">
            <div className="w-full lg:w-3/5 flex flex-col items-start text-left will-change-[opacity,transform]">
              
              {/* 🟢 Availability Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">
                  Available for new projects
                </span>
              </motion.div>

              <span className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs md:text-sm uppercase mb-4 md:mb-6 block font-bold shadow-black drop-shadow-md">
                • Specialized in Frontend Excellence
              </span>
              
              <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-serif leading-[0.9] tracking-tighter mb-6 md:mb-8 drop-shadow-2xl mix-blend-lighten text-white">
                Crafting <br />
                <span className="text-[#C9A96E]">Digital</span> <br />
                Masterpieces.
              </h1>

              <p className="text-gray-300 text-base md:text-xl max-w-xl mb-8 md:mb-12 drop-shadow-lg font-medium">
                I build high-performance, visually striking web applications that
                bridge the gap between complex engineering and pure aesthetic.
              </p>

              <div className="flex flex-wrap gap-6 md:gap-8 items-center">
                <MagneticButton>
                  <a
                    href={cvFile}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative px-8 py-4 bg-[#C9A96E] text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105 flex items-center gap-3 shadow-xl"
                  >
                    <span>GET RESUME</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </MagneticButton>

                <button className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase hover:text-[#C9A96E] transition-colors group text-white">
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#C9A96E] transition-colors bg-black/20 backdrop-blur-sm">
                    <Play size={14} fill="currentColor" />
                  </div>
                  View Showreel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Premium Portrait Container (Right Side on Desktop, Bottom on Mobile) */}
        <div className="relative md:absolute md:top-1/2 md:-translate-y-1/2 right-0 md:right-[5%] w-full md:w-[34vw] h-[55vh] md:h-[75vh] z-0 flex items-center justify-center px-6 md:px-0 mt-12 md:mt-0">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -inset-10 bg-gradient-to-tr from-[#C9A96E]/15 via-transparent to-transparent rounded-[4rem] blur-3xl opacity-60 pointer-events-none z-0" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)] bg-neutral-950/20 backdrop-blur-sm group z-10 hover:border-[#C9A96E]/30 transition-all duration-700"
          >
            {/* Elegant Grayscale to Color Image with Hover Zoom */}
            <motion.img
              src={heroImg}
              alt="Rakib Boshunia"
              className="w-full h-full object-cover object-top transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Premium Gold Lighting Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute inset-0 bg-[#C9A96E]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Floating Premium Badge */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-6 left-5 right-5 md:bottom-8 md:left-8 md:right-8 bg-neutral-900/80 border border-white/10 backdrop-blur-xl p-4 md:p-6 rounded-3xl flex items-center justify-between shadow-2xl translate-y-0 group-hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <div>
                <h4 className="text-white font-serif text-sm md:text-base tracking-wider mb-1">Al-Rakeb Boshunia</h4>
                <p className="text-[9px] md:text-[10px] text-[#C9A96E] font-bold tracking-[0.25em] uppercase">Frontend Architect</p>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:border-[#C9A96E] group-hover:text-[#C9A96E] transition-all duration-500 bg-white/5">
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.div>
          </motion.div>

          {/* Subtle responsive side fading overlay for desktop only */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-90 pointer-events-none hidden md:block z-20"></div>
        </div>

        {/* Scroll Background Text */}
        <div className="absolute bottom-10 md:bottom-[15%] left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none opacity-[0.03] z-[-1]">
          <h2 className="text-[14vw] md:text-[10vw] font-serif leading-none whitespace-nowrap text-center text-white font-bold tracking-tighter">
            DEVELOPER
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;