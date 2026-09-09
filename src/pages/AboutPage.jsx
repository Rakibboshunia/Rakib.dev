import { motion } from "framer-motion";
import SEOHelmet from "../components/common/SEOHelmet";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, LayoutTemplate, Zap, ShieldCheck, MapPin, GraduationCap, Briefcase, Globe } from "lucide-react";

const tenets = [
  { icon: <Code2 size={18} />, label: "Clean, Scalable Architecture" },
  { icon: <LayoutTemplate size={18} />, label: "Pixel-Perfect UI/UX" },
  { icon: <Zap size={18} />, label: "High-Performance Rendering" },
  { icon: <ShieldCheck size={18} />, label: "Enterprise-Grade Security" },
];

const quickFacts = [
  { icon: <MapPin size={15} />, label: "Location", value: "Bangladesh" },
  { icon: <Briefcase size={15} />, label: "Role", value: "Frontend Developer" },
  { icon: <GraduationCap size={15} />, label: "Degree", value: "B.Sc in Computer Science" },
  { icon: <Globe size={15} />, label: "Availability", value: "Open to Work" },
];

const AboutPage = () => {
  return (
    <div className="pt-24 pb-20 px-6 min-h-screen bg-[#f8f9fa] dark:bg-[#080808] relative overflow-hidden transition-colors duration-300">
      <SEOHelmet title="About Me | Boshunia" />

      {/* Background Glows */}
      <div className="absolute w-[600px] h-[600px] bg-[#C9A96E]/8 blur-[150px] rounded-full top-[-100px] left-[-100px] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-blue-900/5 blur-[120px] rounded-full bottom-[-100px] right-[-100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* HERO HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 mt-10"
        >
          <h2 className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs uppercase mb-5 block font-bold">
            • The Complete Story •
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tighter leading-none text-gray-900 dark:text-white mb-5">
            Engineering <span className="text-[#C9A96E] italic">Vision.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-medium">
            From creative design to complex frontend architecture — the full story of my journey,
            philosophy, and dedication to the craft.
          </p>
        </motion.div>

        {/* QUICK FACTS STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {quickFacts.map((fact, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/5 rounded-2xl p-5 flex items-start gap-3"
            >
              <span className="text-[#C9A96E] mt-0.5">{fact.icon}</span>
              <div>
                <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-0.5">{fact.label}</p>
                <p className="text-gray-900 dark:text-white font-semibold text-sm">{fact.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CORE TENETS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/5 rounded-3xl p-8 md:p-10 mb-10"
        >
          <h4 className="text-[#C9A96E] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Core Tenets</h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {tenets.map((t, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-[#C9A96E]">{t.icon}</span>
                <span className="font-medium text-sm">{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* THE STORY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/5 rounded-3xl p-8 md:p-12 space-y-10"
        >
          <div>
            <h3 className="text-2xl font-serif text-gray-900 dark:text-white mb-4">The Genesis</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base font-light">
              My journey into the world of digital engineering didn't begin with just writing lines of code;
              it started with a profound fascination for design and user experience. During my early years as
              a Print-on-Demand designer, I learned how visual aesthetics directly influence human emotion
              and conversion. I realized that a beautiful design is only as powerful as the infrastructure supporting it.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-gray-900 dark:text-white mb-4">Evolution into Engineering</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base font-light">
              Driven by the desire to bring my designs to life, I transitioned into software engineering.
              Pursuing a B.Sc in Computer Science provided me with the foundational knowledge of data structures,
              algorithms, and system design. But it was my hands-on experience with modern JavaScript frameworks
              that truly unlocked my potential.
            </p>
            <br />
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base font-light">
              I have developed deep expertise in crafting <strong className="text-gray-900 dark:text-white">MERN Stack Web Applications</strong> using
              React and Next.js. Beyond custom development, I am highly experienced in complete{" "}
              <strong className="text-gray-900 dark:text-white">Shopify Store Setup</strong> and advanced{" "}
              <strong className="text-gray-900 dark:text-white">WordPress Development</strong>. I have delivered
              high-converting, scalable platforms that are both visually premium and technically robust.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-gray-900 dark:text-white mb-4">My Professional Philosophy</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base font-light mb-6">
              I believe that enterprise software shouldn't feel heavy or clunky. The modern user demands
              applications that are as beautiful as they are functional. My philosophy is built on three pillars:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                <h4 className="text-[#C9A96E] font-bold text-xs tracking-widest uppercase mb-2">1. Precision</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Every pixel, animation, and state transition is carefully calculated for a flawless experience.</p>
              </div>
              <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                <h4 className="text-[#C9A96E] font-bold text-xs tracking-widest uppercase mb-2">2. Performance</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Aesthetics mean nothing if the application is slow. I prioritize sub-second rendering and optimal bundle sizes.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-gray-900 dark:text-white mb-4">The Present & Future</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base font-light">
              Today, as a Frontend Developer, I architect SaaS platforms, interactive e-commerce sites,
              and highly secure corporate portals — while concurrently mastering backend technologies to
              become a complete Full Stack Engineer. I continuously explore the bleeding edge of web technologies,
              including AI integrations and advanced rendering techniques.
            </p>
          </div>

          {/* CTA Row */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-white/10">
            <Link
              to="/skills"
              className="group flex items-center gap-3 px-8 py-3.5 bg-[#C9A96E] text-black font-bold text-xs tracking-widest uppercase rounded-full hover:scale-105 transition-transform"
            >
              View Technical Skills
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="group flex items-center gap-3 px-8 py-3.5 bg-transparent border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold text-xs tracking-widest uppercase rounded-full hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
            >
              See My Work
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutPage;
