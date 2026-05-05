import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import mypic from "../assets/boshunia.jpeg";
import cvFile from "../assets/MD. AL RAKEB RASEL BOSHUNIA .pdf";
import MagneticButton from "../components/common/MagneticButton";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 overflow-hidden pt-32 pb-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT CONTENT - 7 Columns */}
        <motion.div 
          style={{ opacity }}
          className="lg:col-span-7 z-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs uppercase mb-8 block font-bold">
              • Specialized in Full-Stack Excellence
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter mb-10">
              Crafting <br /> 
              <span className="text-[#C9A96E]">Digital</span> <br />
              Masterpieces.
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-12"
          >
            I build high-performance, visually striking web applications that 
            bridge the gap between complex engineering and pure aesthetic. 
            Welcome to the next generation of the web.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 items-center"
          >
            <MagneticButton>
              <a
                href={cvFile}
                target="_blank"
                rel="noreferrer"
                className="group relative px-10 py-5 bg-[#C9A96E] text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105 flex items-center gap-3"
              >
                <span>GET RESUME</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>

            <button className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase hover:text-[#C9A96E] transition-colors group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C9A96E] transition-colors">
                <Play size={14} fill="currentColor" />
              </div>
              View Showreel
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL - 5 Columns */}
        <div className="lg:col-span-5 relative">
          <motion.div 
            style={{ y: y1 }}
            className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src={mypic} 
              alt="Rakib Boshunia" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute -top-12 -right-12 w-64 h-64 border border-[#C9A96E]/20 rounded-full -z-10"
          />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#C9A96E]/10 blur-3xl rounded-full -z-10" />
          
          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-12 -left-12 glass p-6 rounded-2xl border-white/10 shadow-2xl hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E]">
                <span className="text-xs font-bold">2+</span>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase opacity-50">Experience</p>
                <p className="text-sm font-bold">Years of Innovation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Background Text */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.02] dark:opacity-[0.03]"
      >
        <h2 className="text-[25vw] font-serif leading-none whitespace-nowrap -mb-10">
          DEVELOPER DESIGNER ENGINEER
        </h2>
      </motion.div>
    </section>
  );
};

export default Hero;