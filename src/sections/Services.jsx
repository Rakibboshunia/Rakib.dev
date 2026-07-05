import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHelmet from "../components/common/SEOHelmet";
import MagneticButton from "../components/common/MagneticButton";
import {
  FaPenNib,
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaSearch,
  FaLightbulb,
  FaWordpress,
  FaShopify,
  FaShoppingCart,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const services = [
  {
    title: "React & Next.js Development",
    desc: "Building scalable, high-performance web applications using React.js and Next.js with modern best practices.",
    icon: <SiNextdotjs />,
  },
  {
    title: "Responsive Web Design",
    desc: "Ensuring pixel-perfect, fully responsive layouts across all devices — mobile, tablet, and desktop.",
    icon: <FaMobileAlt />,
  },
  {
    title: "WordPress Development",
    desc: "Creating custom WordPress websites, themes, and Elementor Pro pages tailored to your brand and goals.",
    icon: <FaWordpress />,
  },
  {
    title: "Shopify Store Development",
    desc: "Building and customizing Shopify stores with conversion-optimized product pages and seamless checkout.",
    icon: <FaShopify />,
  },
  {
    title: "E-Commerce Solutions",
    desc: "End-to-end e-commerce development including WooCommerce, product management, and payment integration.",
    icon: <FaShoppingCart />,
  },
  {
    title: "UI/UX Implementation",
    desc: "Transforming Figma and Adobe XD designs into pixel-perfect, interactive, and fully functional web pages.",
    icon: <FaPenNib />,
  },
  {
    title: "SEO & Performance",
    desc: "Optimizing websites for speed, Core Web Vitals, and search engine visibility to maximize organic reach.",
    icon: <FaSearch />,
  },
  {
    title: "Consulting & Strategy",
    desc: "Providing expert guidance on tech stack, architecture decisions, and digital growth strategies.",
    icon: <FaLightbulb />,
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <>
      <section id="services" className="py-16 md:py-24 px-6 bg-[#f8f9fa] dark:bg-[#0D0D0D] relative overflow-hidden transition-colors duration-300">
        <SEOHelmet title="Services | Boshunia" />
        {/* 🔥 Multi Glow Background */}
        <div className="absolute w-[600px] h-[600px] bg-[#C9A96E]/10 blur-[160px] rounded-full top-[-200px] left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-[300px] h-[300px] bg-[#C9A96E]/10 blur-[120px] rounded-full bottom-10 right-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="mb-20 text-center">
            <h2 className="text-[#C9A96E] font-serif tracking-[0.3em] text-lg mb-6">
              • SERVICES •
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Delivering high-quality digital solutions with a focus on design,
              performance, and user experience.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">

            {displayedServices.map((service, i) => {
              const serviceNumber = String(i + 1).padStart(2, "0");
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative p-10 rounded-2xl border border-gray-200 dark:border-[#1a1a1a] bg-white/70 dark:bg-[#111]/70 backdrop-blur-xl transition duration-500 hover:border-[#C9A96E]/50"
                >
                  {/* Clickable Overlay */}
                  <Link to="/contact" className="absolute inset-0 z-10"></Link>

                  {/* 🔢 Number (Background Style) */}
                  <span className="absolute top-6 right-6 text-5xl font-serif text-black/5 dark:text-white/5 group-hover:text-[#C9A96E]/10 transition">
                    {serviceNumber}
                  </span>

                  {/* Glow */}
                  <div className="absolute inset-0 bg-[#C9A96E]/5 opacity-0 group-hover:opacity-100 blur-2xl transition"></div>

                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#C9A96E]/10 text-[#C9A96E] text-xl mb-6 group-hover:scale-110 transition">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl text-gray-900 dark:text-white mb-4 group-hover:text-[#C9A96E] transition">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Divider */}
                  <div className="w-0 h-[1px] bg-[#C9A96E] mt-8 group-hover:w-full transition-all duration-500"></div>

                  {/* Hover Arrow */}
                  <span className="absolute bottom-6 right-6 text-[#C9A96E] opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition">
                    →
                  </span>

                </motion.div>
              );
            })}

          </div>

          {/* Toggle Button */}
          <div className="flex justify-center mt-12">
            <MagneticButton>
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 md:px-10 md:py-4 border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-black font-bold rounded-full transition-all tracking-wider text-xs md:text-sm flex items-center gap-2"
              >
                {showAll ? "SHOW LESS" : "VIEW ALL SERVICES"}
              </button>
            </MagneticButton>
          </div>

        </div>
      </section>

    </>
  );
};

export default Services;