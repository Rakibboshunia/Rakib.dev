import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
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
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-[#C9A96E] flex items-center justify-center font-serif font-bold text-black group-hover:rotate-12 transition-transform">
              B
            </div>
            <span className="font-serif text-xl tracking-widest uppercase hidden sm:block">
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
          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/5 transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#C9A96E]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link to="/contact" className="hidden lg:block px-8 py-2.5 bg-[#C9A96E] text-black font-bold text-[10px] tracking-widest uppercase rounded-full hover:scale-105 transition-transform">
              Let's Talk
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm lg:hidden z-[-1]"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-6 right-6 mt-4 p-8 glass rounded-[2rem] border-white/5 lg:hidden bg-black/90"
            >
              <div className="flex flex-col gap-8 text-center">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                      `text-sm font-bold tracking-[0.4em] uppercase ${
                        isActive ? "text-[#C9A96E]" : "text-gray-400"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
