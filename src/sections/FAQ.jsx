import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import SEOHelmet from "../components/common/SEOHelmet";

const faqs = [
  { question: "What is your working process?", answer: "My process usually involves Delivery planning & requirements gathering, followed by Design mapping, agile Development, and finally Testing & Launching the product." },
  { question: "Do you provide website maintenance?", answer: "Yes, I offer ongoing maintenance and support to ensure your application runs smoothly, stays updated, and scales efficiently with your business." },
  { question: "How long does it take to build a website?", answer: "The timeline depends heavily on the project scope. A standard landing page may take 1-2 weeks, while a comprehensive web application can take 4-8 weeks." },
  { question: "What technologies do you specialize in?", answer: "I specialize in the MERN stack (MongoDB, Express, React, Node.js) along with Next.js and Tailwind CSS for modern, high-performance interfaces." },
  { question: "Can you convert Figma or Adobe XD designs into websites?", answer: "Absolutely! I specialize in converting Figma, XD, or Sketch designs into clean, semantic, and pixel-perfect React/Tailwind code with smooth responsive layouts and micro-interactions." },
  { question: "Do you write clean, SEO-friendly code?", answer: "Yes, SEO and performance are core to my workflow. I build websites using clean, semantically correct HTML5, optimized media assets, and fast-loading components to ensure excellent scores on search engines." },
  { question: "Are you open to remote contract or freelance opportunities?", answer: "Yes, I am fully open to both freelance projects and long-term remote frontend development contracts. I am highly comfortable collaborating with global teams across different time zones." },
];

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-6 bg-[#f8f9fa] dark:bg-[#080808] relative overflow-hidden transition-colors duration-300">
      <SEOHelmet title="FAQ | Boshunia" />
      {/* 🔥 Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-[#C9A96E]/5 blur-[150px] rounded-full top-1/4 left-1/4 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs uppercase mb-4 block font-bold">
            • Have Questions?
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif leading-none tracking-tighter text-gray-900 dark:text-white">
            Frequently Asked <span className="text-[#C9A96E]">Questions.</span>
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border border-gray-200 dark:border-[#1a1a1a] rounded-2xl overflow-hidden bg-white dark:bg-[#111] shadow-sm hover:border-[#C9A96E]/30 dark:hover:border-[#C9A96E]/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full text-left px-6 py-5 md:py-6 flex justify-between items-center focus:outline-none"
              >
                <span className={`font-semibold text-base md:text-lg ${openFaq === i ? "text-[#C9A96E]" : "text-gray-900 dark:text-white"} transition-colors`}>
                  {faq.question}
                </span>
                <span className="text-[#C9A96E] ml-4 shrink-0">
                  {openFaq === i ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                </span>
              </button>

              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
