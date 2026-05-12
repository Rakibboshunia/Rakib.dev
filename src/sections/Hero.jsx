import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import cvFile from "../assets/MD. AL RAKEB RASEL BOSHUNIA .pdf";
import MagneticButton from "../components/common/MagneticButton";

// Import images for the video slideshow
import img1 from "../assets/video/WhatsApp Image.jpeg";
import img2 from "../assets/video/WhatsApp Image 20.jpeg";
import img3 from "../assets/video/WhatsApp Image 2026.jpeg";
import img4 from "../assets/video/WhatsApp Image 2026-05-06 at 11.18.57 AM.jpeg";

const slideshowImages = [img1, img2, img3, img4];

const Hero = () => {
  const containerRef = useRef(null);
  
  const [currentFrame, setCurrentFrame] = useState(0);

  // Slideshow effect to simulate a video
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % slideshowImages.length);
    }, 1500); // Change image every 1.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative h-screen bg-transparent">
      {/* Container */}
      <div 
        className="relative h-screen w-full overflow-hidden bg-transparent"
      >
        
        {/* Overlay Content (Text on Left) */}
        <div className="absolute inset-0 flex items-center pointer-events-none z-10">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div 
              className="w-full lg:w-3/5 flex flex-col items-start text-left will-change-[opacity,transform]"
            >
              {/* 🟢 Availability Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">
                  Available for new projects
                </span>
              </motion.div>

              <span className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs md:text-sm uppercase mb-6 block font-bold shadow-black drop-shadow-md">
                • Specialized in Full-Stack Excellence
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl mix-blend-lighten text-white">
                Crafting <br /> 
                <span className="text-[#C9A96E]">Digital</span> <br />
                Masterpieces.
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-12 drop-shadow-lg font-medium">
                I build high-performance, visually striking web applications that 
                bridge the gap between complex engineering and pure aesthetic.
              </p>

              <div className="flex flex-wrap gap-8 items-center pointer-events-auto">
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

        {/* Slideshow/Video Container (Right Side) */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 right-0 md:right-[5%] w-full md:w-[35vw] h-[60vh] md:h-[70vh] opacity-50 md:opacity-100 rounded-none md:rounded-[3rem] z-0 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black"
        >
          {slideshowImages.map((img, idx) => (
            <img 
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] grayscale hover:grayscale-0 ${currentFrame === idx ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent opacity-90 pointer-events-none md:hidden"></div>
        </div>

        {/* Scroll Background Text */}
        <div 
          className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.04] z-[-1]"
        >
          <h2 className="text-[18vw] font-serif leading-none whitespace-nowrap text-center -mb-5 md:-mb-10 text-white font-bold tracking-tighter">
            DEVELOPER DESIGNER
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;