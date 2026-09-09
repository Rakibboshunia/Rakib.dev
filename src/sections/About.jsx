
import { useState } from "react";
import { motion } from "framer-motion";
import SEOHelmet from "../components/common/SEOHelmet";
import cvFile from "../assets/MD. AL RAKEB RASEL BOSHUNIA.pdf";
import MagneticButton from "../components/common/MagneticButton";
import SpotlightCard from "../components/common/SpotlightCard";

const Counter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startAnimation = () => {
    if (hasAnimated) return;
    setHasAnimated(true);
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <motion.span onViewportEnter={startAnimation}>
      {count}{suffix}
    </motion.span>
  );
};

const stats = [
  { label: "Projects", value: 20, suffix: "+" },
  { label: "Clients", value: 12, suffix: "+" },
  { label: "Rating", value: 5, suffix: "★" },
];

const highlights = [
  { label: "Stack", value: "MERN + Next.js" },
  { label: "Specialty", value: "Shopify & WordPress" },
  { label: "Status", value: "Open to Work" },
  { label: "Based In", value: "Bangladesh" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-6 relative overflow-hidden transition-colors duration-300"
    >
      <SEOHelmet title="About | Boshunia" />

      {/* Subtle background glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#C9A96E]/5 blur-[140px] rounded-full top-0 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs uppercase mb-4 block font-bold">
            • About Me
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tighter leading-[1.1]">
            Driven by <span className="italic text-gray-500 dark:text-gray-400">Logic.</span>{" "}
            Designed for <span className="text-[#C9A96E]">Impact.</span>
          </h3>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="text-2xl md:text-3xl font-serif tracking-tight text-gray-900 dark:text-white mb-5 leading-snug">
              Crafting <span className="text-[#C9A96E] italic">digital</span> experiences{" "}
              that feel effortless.
            </h4>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg mb-6">
              As an experienced Frontend Developer expanding into Full Stack, I bridge the gap
              between complex functionality and stunning visual design — building applications
              that don't just work flawlessly, they leave a lasting impression.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg mb-10">
              My expertise lies in MERN Stack web applications, comprehensive Shopify store setups,
              and advanced WordPress development. I've delivered successful projects for clients
              worldwide, ensuring every platform is scalable, fast, and visually premium.
            </p>

            <MagneticButton>
              <a
                href={cvFile}
                download="MD_AL_RAKEB_RASEL_BOSHUNIA_CV.pdf"
                className="inline-flex items-center gap-3 px-10 py-4 bg-[#C9A96E] text-black font-bold rounded-full hover:shadow-[0_20px_40px_rgba(201,169,110,0.3)] transition-all tracking-wider text-sm"
              >
                Download Resume
              </a>
            </MagneticButton>
          </motion.div>

          {/* RIGHT — Stats + Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <SpotlightCard key={i} className="glass-card p-8 rounded-3xl text-center border-white/5">
                  <div className="text-[#C9A96E] text-4xl font-serif mb-2">
                    <Counter end={stat.value} duration={3} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] tracking-[0.4em] uppercase font-bold text-gray-400">
                    {stat.label}
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass-card p-5 rounded-2xl border border-white/5"
                >
                  <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#C9A96E] mb-1">
                    {item.label}
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 font-semibold text-sm">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
