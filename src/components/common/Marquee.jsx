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
    <div className="bg-[#C9A96E] py-4 overflow-hidden flex whitespace-nowrap items-center w-full relative z-20 border-y border-[#B0925B]">
      <motion.div
        className="flex gap-12 min-w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35, // Smooth slow movement
        }}
      >
        {/* Render twice for seamless loop */}
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center gap-6">
            <span className="text-black/60 text-2xl group-hover:text-black transition-colors">
              {item.icon}
            </span>
            <h2 className="text-black font-bold text-lg tracking-[0.2em] uppercase whitespace-nowrap">
              {item.text}
            </h2>
            <span className="text-black/30 text-2xl ml-6">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
