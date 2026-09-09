import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaCheckCircle } from "react-icons/fa";



const data = [
  {
    name: "Johan",
    role: "Founder, Fleuren Solutions",
    country: "Netherlands",
    text: "Good communication, delivering perfect with own ideas implement to make the project better! pleasure to work with the team.",
    project: "Frontend Project"
  },
  {
    name: "Dan",
    role: "Managing Director, ParkBiz",
    country: "United Kingdom",
    text: "A pleasure working with Boshunia. Communication was excellent and the project was completed on time and I was updated every step of the way. Will be using again in the future.",
    project: "Web Development"
  },
  {
    name: "Liam",
    role: "CEO, TechNova",
    country: "Australia",
    text: "Boshunia is a phenomenal Full Stack developer. He built our entire platform from scratch and it works flawlessly.",
    project: "Full Stack Development"
  },
  {
    name: "Kevin",
    role: "Product Manager, NextGen Apps",
    country: "Ireland",
    text: "Great to work with this team. Excellent communication, very polite and dedicated to their client. Looking forward to the next project already!",
    project: "AI Mobile App & Website"
  },
  {
    name: "David",
    role: "Founder, Soundtrack My Night",
    country: "United States",
    text: "Boshunia delivered an incredible web application for Soundtrack My Night. His design aesthetics and frontend engineering skills are absolutely top-notch.",
    project: "Soundtrack My Night"
  },
  {
    name: "Nguyen",
    role: "Technical Lead, DevCorp",
    country: "Vietnam",
    text: "I'm happy with the result, i think it's exceed my expectation and will come back again if there's any other project.",
    project: "Frontend Project"
  },
  {
    name: "Akilah",
    role: "Project Manager, Collins Agency",
    country: "United States",
    text: "Working with this development team has been such a positive experience! They are very talented, willing to jump on a Zoom call at any time to answer questions and walk through the details of the development phases, etc.",
    project: "Web Development"
  },
  {
    name: "Rory",
    role: "Operations Director, InnovateTech",
    country: "Canada",
    text: "Very impressed with Boshunia and his team. Extremely competent and understanding of the task at hand.",
    project: "AI Mobile App & Website"
  },
  {
    name: "Omar",
    role: "Founder, TechNova BD",
    country: "United Arab Emirates",
    text: "Boshunia transformed our idea into a stunning digital product. His frontend development skills and attention to detail are exceptional.",
    project: "Frontend Development"
  },
  {
    name: "Wei",
    role: "Marketing Director, BrightAds",
    country: "Singapore",
    text: "Working with Boshunia was seamless. He delivered a clean, highly customized WordPress site that boosted our conversions significantly.",
    project: "WordPress Development"
  },
  {
    name: "Lukas",
    role: "Product Manager, DhakaLabs",
    country: "Germany",
    text: "Incredible communication and a true eye for modern frontend architecture. The React application was delivered ahead of schedule.",
    project: "Frontend Project"
  },
  {
    name: "Erik",
    role: "CEO, NextGen BD",
    country: "Sweden",
    text: "Working with Boshunia has been a game-changer. The custom WordPress theme he developed is robust, fast, and easy to manage.",
    project: "Custom WordPress"
  }
];

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? -120 : 120,
    opacity: 0,
    scale: 0.97,
  }),
};

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % data.length);
    }, 7000);
    return () => clearInterval(i);
  }, [index]);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const goTo = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  return (
    <section
      id="testimonials"
      className="relative pt-10 md:pt-14 pb-16 md:pb-24 px-6 bg-white dark:bg-[#080808] overflow-hidden transition-colors duration-500"
    >
      {/* Background glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#C9A96E]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#C9A96E]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs uppercase mb-4 block font-bold">
            • Client Reviews
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tighter leading-tight">
            What My Clients <br />
            <span className="text-[#C9A96E]">Say About Me.</span>
          </h3>
        </motion.div>

        {/* Carousel Card */}
        <div className="relative overflow-hidden px-2 py-4">
          <div className="flex gap-6 w-full">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              {[0, 1, 2, 3].map((offset) => {
                const itemIndex = (index + offset) % data.length;
                const item = data[itemIndex];
                
                return (
                  <motion.div
                    key={itemIndex}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    layout
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] shrink-0 bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-white/5 rounded-3xl p-6 shadow-sm relative flex flex-col justify-between h-auto group hover:border-[#C9A96E]/50 transition-colors"
                  >
                    
                    {/* Decorative quote icon */}
                    <div className="absolute top-4 right-6 text-[#C9A96E]/5 text-6xl pointer-events-none select-none transition-transform group-hover:scale-110">
                      <FaQuoteLeft />
                    </div>

                    <div>
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-[#C9A96E] text-xs" />
                        ))}
                      </div>

                      {/* Review text */}
                      <p className="text-sm font-serif italic text-gray-800 dark:text-gray-100 leading-relaxed mb-6 relative z-10">
                        "{item.text.length > 130 ? item.text.substring(0, 130) + '...' : item.text}"
                      </p>
                    </div>

                    {/* Client info row */}
                    <div className="pt-4 border-t border-gray-200 dark:border-white/10 mt-auto">
                      <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2 mb-1">
                        {item.name}
                        <FaCheckCircle className="text-[#C9A96E] text-xs" />
                      </h4>
                      <div className="flex items-center mt-1">
                        <p className="text-gray-400 text-[9px] font-bold tracking-widest uppercase">
                          {item.country}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Row */}
        <div className="flex items-center justify-between mt-8 gap-4 px-4">

          {/* Prev / Next arrows */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={prevStep}
              className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all duration-300 group"
            >
              <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={nextStep}
              className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all duration-300 group"
            >
              <FaChevronRight className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex gap-1.5 flex-wrap justify-center flex-1">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === index
                    ? "w-6 h-2 bg-[#C9A96E]"
                    : "w-2 h-2 bg-gray-300 dark:bg-white/20 hover:bg-[#C9A96E]/50"
                }`}
              />
            ))}
          </div>

          {/* Slide counter */}
          <p className="text-xs font-bold tracking-widest text-gray-400 dark:text-gray-600 uppercase shrink-0 hidden sm:block">
            {String(index + 1).padStart(2, "0")} / {String(data.length).padStart(2, "0")}
          </p>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;