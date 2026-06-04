
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const CTA = () => {
  return (
    <section className="pt-10 md:pt-14 pb-16 md:pb-24 px-6 relative overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute w-[800px] h-[800px] bg-[#C9A96E]/10 blur-[200px] rounded-full -top-1/2 left-1/2 -translate-x-1/2 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs md:text-sm uppercase mb-8 block font-bold">
            • Have a project in mind?
          </h2>
          
          <h3 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter mb-12">
            Let’s build something <br />
            <span className="text-[#C9A96E]">extraordinary</span> together.
          </h3>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            I’m currently available for freelance work and new opportunities. 
            If you’re looking for a developer who values precision and high-end aesthetics, 
            reach out and let's discuss your vision.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <MagneticButton>
              <Link
                to="/contact"
                className="group relative px-12 py-5 bg-[#C9A96E] text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 flex items-center gap-3 shadow-2xl shadow-[#C9A96E]/20"
              >
                <span>START A PROJECT</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
            
            <Link 
              to="/projects" 
              className="text-white/60 hover:text-white transition-colors font-bold tracking-widest text-xs uppercase border-b border-white/20 pb-1"
            >
              View My Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
