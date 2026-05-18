import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebookF, FaArrowUp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const specialties = [
  "Frontend Architecture",
  "UI/UX Engineering",
  "React & Next.js Ecosystem",
  "Performance & SEO Optimization"
];

const socials = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/share/1BCYEaFJih/",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/md-al-rakeb-rasel-boshunia",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/Rakibboshunia",
  },
];

const Footer = () => {
  const [localTime, setLocalTime] = useState("");

  // Dynamic active Bangladesh Time Zone Clock
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setLocalTime(formatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 10000); // Update every 10s
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#fcfcfc] dark:bg-[#080808] relative overflow-hidden pt-20 pb-8 px-6 border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
      
      {/* Ambient background glows */}
      <div className="absolute w-[600px] h-[600px] bg-[#C9A96E]/5 blur-[160px] rounded-full -top-1/3 left-1/4 pointer-events-none z-0"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#C9A96E]/5 blur-[140px] rounded-full -bottom-1/3 right-1/4 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 🎬 UPPER ROW: HUGE CINEMATIC BRANDING */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6 space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-900 dark:text-white font-serif text-3xl md:text-4xl tracking-[0.25em] font-extrabold uppercase"
            >
              BOSHUNIA<span className="text-[#C9A96E]">.</span>
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 text-base max-w-md leading-relaxed font-medium">
              Crafting premium digital creations that fuse advanced engineering with meticulous aesthetic layout designs. Available for freelance assignments globally.
            </p>
            
            {/* Dynamic Local Clock Panel */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              <FaClock className="text-[#C9A96E] animate-pulse" />
              <span>Dhaka, BD</span>
              <span className="text-[#C9A96E] font-mono">{localTime || "12:00 PM"}</span>
            </div>
          </div>

          {/* 🧾 DETAILS COLUMNS */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Quick Links Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#C9A96E]">
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-gray-600 dark:text-gray-400 hover:text-[#C9A96E] dark:hover:text-[#C9A96E] transition-colors text-sm font-semibold hover:translate-x-1 duration-300 inline-block transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Specialties Column */}
            <div className="space-y-4 col-span-1">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#C9A96E]">
                Specialties
              </h4>
              <ul className="space-y-2.5 text-gray-600 dark:text-gray-400 text-sm font-semibold">
                {specialties.map((item, i) => (
                  <li key={i} className="hover:text-white transition-colors duration-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Connect Column */}
            <div className="space-y-4 col-span-2 md:col-span-1">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#C9A96E]">
                Connect
              </h4>
              <ul className="space-y-3.5 text-gray-600 dark:text-gray-400 text-sm font-semibold">
                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#C9A96E] shrink-0" />
                  <span>Rangpur, Bangladesh</span>
                </li>
                <li>
                  <a 
                    href="mailto:official.alrakib@gmail.com"
                    className="flex items-center gap-3 hover:text-[#C9A96E] transition-colors group"
                  >
                    <FaEnvelope className="text-[#C9A96E] shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-mono text-xs truncate">official.alrakib@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+8801779296092"
                    className="flex items-center gap-3 hover:text-[#C9A96E] transition-colors group"
                  >
                    <FaPhoneAlt className="text-[#C9A96E] shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-mono">+880 1779 296092</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* 🎬 GORGEOUS DIVIDER LINE WITH PULSING CORE ORB */}
        <div className="relative my-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#080808] border border-[#C9A96E]/40 rounded-full flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-[#C9A96E] rounded-full animate-ping absolute"></span>
            <span className="w-1.5 h-1.5 bg-[#C9A96E] rounded-full"></span>
          </div>
        </div>

        {/* 🎬 LOWER ROW: COPYRIGHT, SOCIALS, MAGNETIC TOP BUTTON */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left: Copyright */}
          <div className="order-3 md:order-1 text-center md:text-left text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-widest">
            <p>
              © 2026 <span className="text-[#C9A96E]">BOSHUNIA</span>. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="order-1 md:order-2 flex items-center gap-4">
            {socials.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-gray-200 dark:border-white/10 hover:border-[#C9A96E] dark:hover:border-[#C9A96E] rounded-full text-gray-500 dark:text-white/60 hover:text-black dark:hover:text-black hover:bg-[#C9A96E] dark:hover:bg-[#C9A96E] transition-all duration-300 shadow-sm"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Right: Premium Magnetic Back to Top Circle Button */}
          <div className="order-2 md:order-3">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full border border-[#C9A96E]/30 hover:border-[#C9A96E] text-[#C9A96E] flex items-center justify-center hover:bg-[#C9A96E] hover:text-black transition-all duration-500 group shadow-lg"
              title="Back to Top"
            >
              <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" size={14} />
            </button>
          </div>

        </div>

        {/* 🎬 EXTRA-LARGE BACKGROUND SIGNATURE TEXT */}
        <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none opacity-[0.02] dark:opacity-[0.015] z-[-1] hidden md:block">
          <h2 className="text-[12vw] font-serif leading-none text-center font-black tracking-[0.2em] text-gray-900 dark:text-white">
            BOSHUNIA
          </h2>
        </div>

      </div>
    </footer>
  );
};

export default Footer;