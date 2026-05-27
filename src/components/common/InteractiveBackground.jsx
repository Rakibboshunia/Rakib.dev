
import { motion, useScroll, useTransform } from "framer-motion";

const InteractiveBackground = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
      {/* Mesh Gradients */}
      <motion.div 
        style={{ rotate, scale }}
        className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-[#C9A96E]/5 blur-[150px] mix-blend-screen animate-pulse"
      />
      
      <motion.div 
        style={{ rotate: -rotate, scale }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#C9A96E]/10 blur-[180px] mix-blend-screen"
      />

      {/* Subtle Noise/Grain - Added via CSS in index.css */}
      <div className="absolute inset-0 noise opacity-[0.03] dark:opacity-[0.05]"></div>
      
      {/* Dark Overlay for depth */}
      <div className="absolute inset-0 bg-transparent dark:bg-[#0D0D0D]/10"></div>
    </div>
  );
};

export default InteractiveBackground;
