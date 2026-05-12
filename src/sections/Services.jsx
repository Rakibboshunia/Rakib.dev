import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHelmet from "../components/common/SEOHelmet";
import {
  FaPenNib,
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaSearch,
  FaLightbulb,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    desc: "Building unique website tailored to specific business needs and branding.",
    icon: <FaCode />,
    number: "02",
  },
  {
    title: "Responsive Design",
    desc: "Ensuring the website looks and works well on all devices (desktop, tablet, mobile).",
    icon: <FaMobileAlt />,
    number: "02",
  },
  {
    title: "UI/UX Implementation",
    desc: "Transform design mockups (Figma, Adobe XD, etc.) into fully functional web pages.",
    icon: <FaPenNib />,
    number: "01",
  },
  {
    title: "Code Debugging and Maintenance",
    desc: "Identifying and fixing issues in existing code to ensure optimal performance.",
    icon: <FaCode />,
    number: "03",
  },
  {
    title: "Integration Services",
    desc: "Connecting the frontend with APIs or backends to enable data fetching and interactivity.",
    icon: <FaCode />,
    number: "03",
  },
  {
    title: "Version Control and Deployment",
    desc: "Managing code changes and deploying applications efficiently.",
    icon: <FaSearch />,
    number: "04",
  },
  {
    title: "Branding",
    desc: "Creating strong and memorable digital identities for businesses.",
    icon: <FaPalette />,
    number: "03",
  },
  {
    title: "Consulting",
    desc: "Providing strategic insights to grow your digital presence.",
    icon: <FaLightbulb />,
    number: "06",
  },
];

const Services = () => {
  return (
    <>
      <section id="services" className="py-24 md:py-36 px-6 bg-[#f8f9fa] dark:bg-[#0D0D0D] relative overflow-hidden transition-colors duration-300">
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
        <div className="grid md:grid-cols-3 gap-12">

          {services.map((service, i) => (
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
                {service.number}
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
          ))}

        </div>

        </div>
      </section>
    
    </>
  );
};

export default Services;