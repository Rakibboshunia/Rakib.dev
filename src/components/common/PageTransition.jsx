
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants
    };
  };

  const nbOfColumns = 5;

  return (
    <div className="relative">
      <div className="fixed inset-0 pointer-events-none z-[9999] flex">
        {[...Array(nbOfColumns)].map((_, i) => (
          <motion.div
            key={i}
            {...anim({
              initial: { top: 0 },
              enter: { top: "100%", transition: { duration: 0.5, delay: 0.05 * i, ease: [0.215, 0.61, 0.355, 1] } },
              exit: { top: 0, transition: { duration: 0.5, delay: 0.05 * i, ease: [0.215, 0.61, 0.355, 1] } }
            })}
            className="relative h-full w-full bg-[#C9A96E]"
          />
        ))}
      </div>
      {children}
    </div>
  );
};

export default PageTransition;
