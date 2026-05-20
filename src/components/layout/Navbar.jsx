import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Immersive Mobile Menu Variants
  const menuVariants = {
    hidden: { 
      opacity: 0, 
      y: "-100%",
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, rotate: 2 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      {/* Professional Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A96E] origin-left z-[101]"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative glass rounded-full border-white/5 transition-all duration-500 ${
          scrolled ? "px-8 py-3 bg-white/5 backdrop-blur-xl border-white/10" : "px-4 py-2 bg-transparent border-transparent"
        } flex items-center justify-between`}>
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group z-[110]">
            <div className="w-8 h-8 rounded-lg bg-[#C9A96E] flex items-center justify-center font-serif font-bold text-black group-hover:rotate-12 transition-transform">
              B
            </div>
            <span className="font-serif text-xl tracking-widest uppercase hidden sm:block text-gray-900 dark:text-white">
              Boshunia.
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-[10px] font-bold tracking-[0.3em] uppercase transition-all hover:text-[#C9A96E] relative group ${
                    isActive ? "text-[#C9A96E]" : "text-gray-400"
                  }`
                }
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[1px] bg-[#C9A96E] transition-all duration-500 w-0 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 z-[110]">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full hover:bg-white/5 transition-colors text-gray-600 dark:text-gray-300"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Mobile Menu"
              className="lg:hidden p-2 text-[#C9A96E] hover:scale-110 transition-transform focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

            <Link to="/contact" className="hidden lg:block px-8 py-2.5 bg-[#C9A96E] text-black font-bold text-[10px] tracking-widest uppercase rounded-full hover:scale-105 transition-transform">
              Let's Talk
            </Link>
          </div>
        </div>
      </div>

      {/* 🌟 IMMERSIVE FULL SCREEN MOBILE MENU OVERLAY 🌟 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 w-screen h-screen bg-[#080808]/98 backdrop-blur-3xl lg:hidden z-[90] flex flex-col justify-between px-8 py-24 overflow-hidden"
          >
            {/* Ambient Background Gold Glow */}
            <div className="absolute w-[350px] h-[350px] bg-[#C9A96E]/10 blur-[130px] rounded-full top-1/4 left-1/2 -translate-x-1/2 pointer-events-none z-0"></div>

            {/* Menu Header Details */}
            <div className="relative z-10 flex justify-between items-center border-b border-white/5 pb-6">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/30">
                • Menu Navigation
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C9A96E]">
                BOSHUNIA PORTFOLIO
              </span>
            </div>

            {/* Main Menu Links Grid */}
            <div className="relative z-10 flex flex-col justify-center gap-6 md:gap-8 my-auto">
              {navLinks.map((link, idx) => (
                <motion.div 
                  key={link.path}
                  variants={itemVariants}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                      `flex items-baseline gap-4 font-serif text-4xl md:text-5xl tracking-tighter uppercase transition-colors duration-300 ${
                        isActive ? "text-[#C9A96E]" : "text-white/60 hover:text-white"
                      }`
                    }
                  >
                    <span className="font-sans text-[10px] font-black tracking-widest text-[#C9A96E]">
                      0{idx + 1}
                    </span>
                    <span>{link.name}</span>
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Immersive Menu Footer Details */}
            <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between items-start md:items-end border-t border-white/5 pt-8">
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/30">
                  OFFICIAL EMAIL
                </span>
                <a 
                  href="mailto:official.alrakib@gmail.com" 
                  className="font-mono text-sm text-[#C9A96E] hover:text-white transition-colors"
                >
                  official.alrakib@gmail.com
                </a>
              </div>

              {/* Social Icons inside Mobile Menu */}
              <div className="flex items-center gap-4">
                {socials.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#C9A96E] rounded-full text-white/65 hover:text-black hover:bg-[#C9A96E] transition-all duration-300 shadow-sm"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
