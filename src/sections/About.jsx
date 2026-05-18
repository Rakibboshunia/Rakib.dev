import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import mypic from "../assets/boshunia-about.jpg";
import SEOHelmet from "../components/common/SEOHelmet";
import cvFile from "../assets/MD. AL RAKEB RASEL BOSHUNIA .pdf";
import MagneticButton from "../components/common/MagneticButton";
import SpotlightCard from "../components/common/SpotlightCard";

const Counter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startAnimation = () => {
    if (hasAnimated) return;
    setHasAnimated(true);

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
  };

  return (
    <motion.span onViewportEnter={startAnimation}>
      {count}{suffix}
    </motion.span>
  );
};

const About = () => {
  const stats = [
    { label: "Projects", value: 20, suffix: "+" },
    { label: "Clients", value: 12, suffix: "+" },
    { label: "Rating", value: 5, suffix: "★" },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-6 relative overflow-hidden transition-colors duration-300"
    >
      <SEOHelmet title="About | Boshunia" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs uppercase mb-6 block font-bold">
            • The Narrative
          </h2>
          <h3 className="text-5xl md:text-7xl font-serif tracking-tighter leading-none">
            Precision & <br /> <span className="text-[#C9A96E]">Purpose.</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-20 items-center">
          {/* 🖼 Image Section - 5 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src={mypic}
                alt="Rakib Boshunia"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Info */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 right-0 md:-right-6 glass-card p-8 rounded-3xl border-white/10 shadow-2xl max-w-[240px]"
            >
              <p className="text-[10px] tracking-[0.3em] font-bold text-[#C9A96E] uppercase mb-4">Background</p>
              <p className="text-sm leading-relaxed font-medium">Merging computer science principles with high-end aesthetic design.</p>
            </motion.div>
          </motion.div>

          {/* 🧠 Text Section - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h3 className="text-3xl md:text-5xl mb-10 leading-tight font-serif tracking-tight">
              Engineering <span className="text-[#C9A96E]">impactful</span> <br />
              digital ecosystems.
            </h3>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg mb-16 max-w-xl">
              I specialize in bridging the gap between complex backend logic and
              seamless frontend interfaces. My approach is rooted in clean code,
              scalable architecture, and a relentless pursuit of visual perfection.
              <br /><br />
              Currently focused on evolving my stack with advanced Node.js integrations
              and state-of-the-art interactive design patterns.
            </p>

            {/* 📊 Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {stats.map((stat, i) => (
                <SpotlightCard key={i} className="glass-card p-10 rounded-3xl text-center border-white/5">
                  <div className="text-[#C9A96E] text-4xl font-serif mb-2">
                    <Counter end={stat.value} duration={3} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] tracking-[0.4em] uppercase font-bold opacity-40">{stat.label}</div>
                </SpotlightCard>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 items-center">
              <MagneticButton>
                <a
                  href={cvFile}
                  target="_blank"
                  rel="noreferrer"
                  className="px-12 py-5 bg-[#C9A96E] text-black font-bold rounded-full hover:shadow-[0_20px_40px_rgba(201,169,110,0.3)] transition-all tracking-wider"
                >
                  DOWNLOAD RESUME
                </a>
              </MagneticButton>

              <div className="flex gap-3">
                {[1, 2, 3].map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="w-1 h-1 rounded-full bg-[#C9A96E]"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
