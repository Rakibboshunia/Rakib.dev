
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import mypic from "../assets/boshunia-about.jpg";
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
      className="py-12 md:py-16 px-6 relative overflow-hidden transition-colors duration-300"
    >
      <SEOHelmet title="About | Boshunia" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs md:text-sm uppercase mb-4 block font-bold">
            • About Me
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tighter leading-[1.1]">
            Driven by <span className="italic text-gray-500">Logic.</span> <br /> Designed for <span className="text-[#C9A96E]">Impact.</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* 🖼 Image Section - 5 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group border-2 border-transparent hover:border-[#C9A96E]/30 transition-all duration-700">
              <img
                src={mypic}
                alt="Rakib Boshunia"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -20 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="absolute -top-6 -left-6 md:-left-8 bg-white dark:bg-[#111] text-[#080808] dark:text-white w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center border-4 border-gray-100 dark:border-[#080808] shadow-xl z-20"
            >
              <span className="text-3xl md:text-4xl font-serif font-bold text-[#C9A96E]">10+</span>
              <span className="text-[8px] md:text-[10px] tracking-[0.2em] font-bold uppercase mt-1 text-center leading-tight">Months<br/>Experience</span>
            </motion.div>

            {/* Floating Info */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 right-0 md:-right-6 glass-card p-6 md:p-8 rounded-3xl border-white/10 shadow-2xl max-w-[220px] md:max-w-[260px] backdrop-blur-xl"
            >
              <p className="text-[10px] tracking-[0.3em] font-bold text-[#C9A96E] uppercase mb-3">Focus</p>
              <p className="text-xs md:text-sm leading-relaxed font-medium text-gray-800 dark:text-gray-200">Delivering pixel-perfect, highly interactive frontend applications.</p>
            </motion.div>
          </motion.div>

          {/* 🧠 Text Section - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight font-serif tracking-tight text-gray-900 dark:text-white">
              Crafting <span className="text-[#C9A96E] italic">digital</span> experiences that feel effortless.
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg mb-8 max-w-xl">
              As a specialized Frontend Developer, I bridge the gap between complex functionality and stunning visual design. I build applications that don't just work flawlessly—they leave a lasting impression.
              <br /><br />
              My expertise lies in React ecosystem, interactive animations, and responsive architectures, ensuring every project is highly scalable, fast, and visually premium.
            </p>

            {/* 📊 Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {stats.map((stat, i) => (
                <SpotlightCard key={i} className="glass-card p-10 rounded-3xl text-center border-white/5">
                  <div className="text-[#C9A96E] text-4xl font-serif mb-2">
                    <Counter end={stat.value} duration={3} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] tracking-[0.4em] uppercase font-bold text-gray-400">{stat.label}</div>
                </SpotlightCard>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 items-center">
              <MagneticButton>
                <a
                  href={cvFile}
                  download="MD_AL_RAKEB_RASEL_BOSHUNIA_CV.pdf"
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
