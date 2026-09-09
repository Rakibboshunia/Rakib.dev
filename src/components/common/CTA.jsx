import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";

const hireMeEmailBody = `Hi Boshunia,

I came across your portfolio and I'm interested in hiring you.

Project: 
Budget: 
Timeline: 
WhatsApp: 

Looking forward to your response.

Best Regards,
[Your Name]`;

const hireMeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=official.alrakib@gmail.com&su=${encodeURIComponent("Hiring Inquiry — Let's Work Together")}&body=${encodeURIComponent(hireMeEmailBody)}`;

const stats = [
  { value: "30+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
];

const CTA = () => {
  return (
    <section className="pt-10 md:pt-14 pb-16 md:pb-24 px-6 relative overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute w-[800px] h-[800px] bg-[#C9A96E]/10 blur-[200px] rounded-full -top-1/2 left-1/2 -translate-x-1/2 opacity-50"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 text-[#C9A96E] font-sans tracking-[0.4em] text-[10px] uppercase mb-8 font-bold">
            <span className="w-8 h-[1px] bg-[#C9A96E]"></span>
            Open to Opportunities
            <span className="w-8 h-[1px] bg-[#C9A96E]"></span>
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[0.9] tracking-tighter mb-6">
            Let's Build Something <br />
            <span className="text-[#C9A96E]">Extraordinary</span> Together.
          </h2>

          {/* Subtext */}
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-14 leading-relaxed">
            Available for freelance projects, long-term contracts, and full-time roles.
            If you value precision, performance, and premium design — let's talk.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <MagneticButton>
              <Link
                to="/contact"
                className="group relative px-10 py-4 bg-[#C9A96E] text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 flex items-center gap-3 shadow-2xl shadow-[#C9A96E]/20 text-[11px] tracking-widest uppercase"
              >
                <span>Start a Project</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>

            <a
              href={hireMeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-10 py-4 border border-white/20 text-white/70 hover:border-[#C9A96E] hover:text-[#C9A96E] font-bold rounded-full transition-all duration-300 text-[11px] tracking-widest uppercase"
            >
              <Mail size={14} />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/5 mb-14"></div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-3xl md:text-4xl font-serif text-[#C9A96E]">{stat.value}</span>
                <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/30">{stat.label}</span>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
