import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[90] w-12 h-12 flex justify-center items-center rounded-full bg-white dark:bg-[#111] border border-gray-200 dark:border-[#1a1a1a] shadow-lg hover:border-[#C9A96E] dark:hover:border-[#C9A96E] text-gray-500 hover:text-[#C9A96E] dark:text-gray-400 dark:hover:text-[#C9A96E] transition-colors focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaChevronUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
