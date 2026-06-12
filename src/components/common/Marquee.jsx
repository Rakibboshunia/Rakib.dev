import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaFigma } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const Marquee = () => {
  const marqueeItems = [
    { text: "UI/UX DESIGN", icon: <FaFigma /> },
    { text: "FRONTEND DEVELOPER", icon: <FaReact /> },
    { text: "REACT JS EXPERT", icon: <FaReact /> },
    { text: "NEXT JS EXPERT", icon: <SiNextdotjs /> },
    { text: "MERN STACK", icon: <SiMongodb /> },
    { text: "WEB PERFORMANCE", icon: <SiJavascript /> },
    { text: "CREATIVE DEVELOPMENT", icon: <SiTailwindcss /> },
    { text: "NODE JS", icon: <FaNodeJs /> },
    { text: "HTML5 & CSS3", icon: <FaHtml5 /> },
  ];

  return (
    <div className="relative w-full h-[20vh] md:h-[25vh] flex items-center justify-center overflow-hidden z-20 bg-transparent my-4">
      
      {/* First Line (Right to Left, Gold Background) */}
      <div className="absolute w-[150%] md:w-[115%] bg-[#C9A96E] py-4 flex whitespace-nowrap items-center border-y border-[#B0925B] -rotate-6 shadow-2xl z-20">
        <motion.div
          className="flex gap-8 md:gap-12 min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center gap-4 md:gap-6">
              <span className="text-black/60 text-2xl transition-colors">
                {item.icon}
              </span>
              <h2 className="text-black font-bold text-base md:text-lg tracking-[0.2em] uppercase whitespace-nowrap">
                {item.text}
              </h2>
              <span className="text-black/30 text-2xl ml-4 md:ml-6">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Line (Left to Right, Dark Background) */}
      <div className="absolute w-[150%] md:w-[115%] bg-[#111111] py-4 flex whitespace-nowrap items-center border-y border-white/5 rotate-6 shadow-2xl z-10">
        <motion.div
          className="flex gap-8 md:gap-12 min-w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index + 100} className="flex items-center gap-4 md:gap-6">
              <span className="text-[#C9A96E]/60 text-2xl transition-colors">
                {item.icon}
              </span>
              <h2 className="text-white font-bold text-base md:text-lg tracking-[0.2em] uppercase whitespace-nowrap">
                {item.text}
              </h2>
              <span className="text-[#C9A96E]/30 text-2xl ml-4 md:ml-6">•</span>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};

export default Marquee;
