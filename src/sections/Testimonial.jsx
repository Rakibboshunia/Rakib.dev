import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteRight, FaStar, FaChevronLeft, FaChevronRight, FaCheckCircle } from "react-icons/fa";

import img1 from "../assets/review/pic1.jpg";
import img2 from "../assets/review/pic2.jpg";
import img3 from "../assets/review/pic3.jpg";
import img4 from "../assets/review/pic4.webp";
import img5 from "../assets/review/pic1.jpg";
import img6 from "../assets/review/pic6.png";
import img7 from "../assets/review/pic7.png";
import img8 from "../assets/review/pic8.png";
import img9 from "../assets/review/pic9.png";
import img10 from "../assets/review/pic10.png";

// Bangladeshi Client Images
import bdClient1 from "../assets/review/bd-client-1.png";
import bdClient2 from "../assets/review/bd-client-2.png";
import bdClient3 from "../assets/review/bd-client-3.png";
import bdClient4 from "../assets/review/bd-client-4.png";
import bdClient5 from "../assets/review/bd-client-5.png";

const data = [
  {
    name: "Johan Fleuren",
    role: "Founder, Fleuren Solutions",
    country: "Netherlands",
    image: img1,
    text: "Good communication, delivering perfect with own ideas implement to make the project better! pleasure to work with the team.",
    project: "Frontend Project"
  },
  {
    name: "Danparkbiz",
    role: "Managing Director, ParkBiz",
    country: "United Kingdom",
    image: img2,
    text: "A pleasure working with Rakibul. Communication was excellent and the project was completed on time and I was updated every step of the way. Will be using again in the future.",
    project: "Web Development"
  },
  {
    name: "Fahad",
    role: "CEO, TechNova",
    country: "Bangladesh",
    image: bdClient1,
    text: "Great team, Amazing work. Highly recommend.",
    project: "Web Development"
  },
  {
    name: "Rory Clerkin",
    role: "Product Manager, NextGen Apps",
    country: "Ireland",
    image: img4,
    text: "Great to work with this team. Excellent communication, very polite and dedicated to their client. Looking forward to the next project already!",
    project: "AI Mobile App & Website"
  },
  {
    name: "Rory Clark",
    role: "Founder, Soundtrack My Night",
    country: "United States",
    image: img5,
    text: "Rakib delivered an incredible web application for Soundtrack My Night. His design aesthetics and frontend engineering skills are absolutely top-notch.",
    project: "Soundtrack My Night"
  },
  {
    name: "Nguyen Thach",
    role: "Technical Lead, DevCorp",
    country: "Vietnam",
    image: img6,
    text: "I'm happy with the result, i think it's exceed my expectation and will come back again if there's any other project.",
    project: "Frontend Project"
  },
  {
    name: "Akilah Collins",
    role: "Project Manager, Collins Agency",
    country: "United States",
    image: img7,
    text: "Working with this development team has been such a positive experience! They are very talented, willing to jump on a Zoom call at any time to answer questions and walk through the details of the development phases, etc.",
    project: "Web Development"
  },
  {
    name: "Rory C.",
    role: "Operations Director, InnovateTech",
    country: "Canada",
    image: img8,
    text: "Very impressed with Rakibul and his team. Extremely competent and understanding of the task at hand.",
    project: "AI Mobile App & Website"
  },
  {
    name: "Tanvir Ahmed",
    role: "Founder, TechNova BD",
    country: "Bangladesh",
    image: bdClient2,
    text: "Rakib transformed our idea into a stunning digital product. His attention to detail and UI skills are exceptional.",
    project: "E-Commerce Platform"
  },
  {
    name: "Shariar Hossain",
    role: "Marketing Director, BrightAds",
    country: "Bangladesh",
    image: bdClient3,
    text: "Working with Rakib was seamless. He delivered a clean, modern design that boosted our conversions significantly.",
    project: "Marketing Dashboard"
  },
  {
    name: "Mahmud Hasan",
    role: "Product Manager, DhakaLabs",
    country: "Bangladesh",
    image: bdClient4,
    text: "Incredible communication and a true eye for modern design. The project was delivered ahead of schedule with flawless execution.",
    project: "SaaS Application"
  },
  {
    name: "Zayed Khan",
    role: "CEO, NextGen BD",
    country: "Bangladesh",
    image: bdClient5,
    text: "Working with Rakib has been an absolute game-changer for our business. The web app is robust, incredibly fast, and looks stunning.",
    project: "Enterprise Web App"
  }
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto slide
  useEffect(() => {
    const i = setInterval(() => {
      nextStep();
    }, 8000);
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

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      filter: "blur(10px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      filter: "blur(10px)",
    }),
  };

  return (
    <section
      id="testimonials"
      className="relative pt-10 md:pt-14 pb-16 md:pb-24 px-6 bg-white dark:bg-[#080808] overflow-hidden transition-colors duration-500"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#C9A96E]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#C9A96E]/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side: Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs uppercase mb-8 block font-bold">
                • Client Testimonials
              </h2>
              <h3 className="text-5xl md:text-7xl font-serif tracking-tighter leading-[0.9] mb-12">
                What Industry <br />
                <span className="text-[#C9A96E]">Leaders Say.</span>
              </h3>
            </motion.div>

            <div className="relative min-h-[300px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8"
                >
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#C9A96E] text-sm" />
                    ))}
                  </div>

                  <p className="text-2xl md:text-4xl font-serif italic text-gray-900 dark:text-gray-100 leading-tight">
                    "{data[index].text}"
                  </p>

                  <div className="pt-8 flex items-center gap-6">
                    <div className="relative">
                      <img
                        src={data[index].image}
                        alt={data[index].name}
                        className="w-16 h-16 rounded-full object-cover grayscale brightness-110"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-[#C9A96E] text-black rounded-full p-1 border-2 border-white dark:border-[#080808]">
                        <FaCheckCircle size={10} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">{data[index].name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-[#C9A96E] text-[10px] font-bold tracking-[0.2em] uppercase">
                          {data[index].role}
                        </p>
                        <span className="text-gray-400 dark:text-gray-600 text-[10px]">•</span>
                        <p className="text-gray-500 dark:text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                          {data[index].country}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-16">
              <button
                onClick={prevStep}
                className="w-14 h-14 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all duration-300 group"
              >
                <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={nextStep}
                className="w-14 h-14 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all duration-300 group"
              >
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Visual Element */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-[#C9A96E]/20 animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-[#C9A96E]/10 animate-[spin_15s_linear_infinite_reverse]"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5 glass-card rounded-[3rem] overflow-hidden rotate-3 shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={index}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 1 }}
                      src={data[index].image}
                      className="w-full h-full object-cover grayscale"
                      alt="Testimonial background"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-[#C9A96E] text-[10px] font-bold tracking-[0.4em] uppercase mb-2">Project Success</p>
                    <h4 className="text-white text-xl font-serif">{data[index].project}</h4>
                  </div>
                </div>
              </div>

              {/* Floating Quote Icon */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-[#C9A96E] flex items-center justify-center text-black text-3xl shadow-xl shadow-[#C9A96E]/20 z-20"
              >
                <FaQuoteRight />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;