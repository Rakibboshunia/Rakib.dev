import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#f8f9fa] dark:bg-[#0D0D0D]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 bg-[#C9A96E]/20 blur-3xl rounded-full scale-150"></div>
        
        {/* Brand Text */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "10px" }}
          animate={{ opacity: 1, letterSpacing: "4px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[#C9A96E] font-serif text-3xl md:text-5xl tracking-[0.3em] uppercase relative z-10"
        >
          Boshunia.
        </motion.h1>

        {/* Minimal Loader Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-[2px] bg-[#C9A96E] mt-6 mx-auto absolute left-0 right-0"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
