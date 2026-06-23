import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEOHelmet from "../components/common/SEOHelmet";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f8f9fa] dark:bg-[#0D0D0D] px-6 relative overflow-hidden transition-colors duration-300">
      <SEOHelmet title="404 Not Found | Boshunia" />
     
      <div className="absolute w-[500px] h-[500px] bg-[#C9A96E]/10 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10 max-w-lg"
      >
        <motion.h1 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="text-[120px] md:text-[180px] font-serif font-bold text-[#C9A96E]/20 leading-none drop-shadow-sm"
        >
          404
        </motion.h1>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 dark:text-white mt-10">Lost in Space</h2>
        </div>

        <p className="mt-16 text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
          The page you are looking for does not exist or has been moved to another universe.
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-[#C9A96E] text-black font-medium tracking-wide hover:opacity-90 transition-opacity"
        >
          Return Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
