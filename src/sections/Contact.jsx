import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaFacebookF, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import SEOHelmet from "../components/common/SEOHelmet";

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

const faqs = [
  { question: "What is your working process?", answer: "My process usually involves Delivery planning & requirements gathering, followed by Design mapping, agile Development, and finally Testing & Launching the product." },
  { question: "Do you provide website maintenance?", answer: "Yes, I offer ongoing maintenance and support to ensure your application runs smoothly, stays updated, and scales efficiently with your business." },
  { question: "How long does it take to build a website?", answer: "The timeline depends heavily on the project scope. A standard landing page may take 1-2 weeks, while a full-stack web application can take 4-8 weeks." },
  { question: "What technologies do you specialize in?", answer: "I specialize in the MERN stack (MongoDB, Express, React, Node.js) along with Next.js and Tailwind CSS for modern, high-performance interfaces." },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    setIsSending(true);
    const toastId = toast.loading("Sending message...");

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    const SERVICE_ID = "service_02k63si";
    const TEMPLATE_ID = "template_glfyc3r";
    const PUBLIC_KEY = "D2PdGt4D4bP2JBsFF";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        toast.success("Message sent successfully!", { id: toastId });
        setFormData({ name: "", email: "", message: "" });
        setIsSending(false);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        toast.error("Failed to send. Please try again later.", { id: toastId });
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 bg-[#f8f9fa] dark:bg-[#0D0D0D] relative overflow-hidden transition-colors duration-300">
      <SEOHelmet title="FAQ & Contact | Boshunia" />
      {/* 🔥 Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#C9A96E]/10 blur-[160px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      {/* ================= ✅ FAQ (NOW FIRST) ================= */}
      <div className="max-w-4xl mx-auto mt-0 relative z-10">
        <h3 className="text-center text-[#C9A96E] font-serif mb-12 tracking-[0.2em] text-lg uppercase">
          • Frequently Asked Questions •
        </h3>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-gray-200 dark:border-[#1a1a1a] rounded-xl overflow-hidden bg-white dark:bg-[#111] shadow-sm hover:border-[#C9A96E]/50 dark:hover:border-[#C9A96E]/50 transition-colors duration-300"
            >
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <span className={`font-medium ${openFaq === i ? "text-[#C9A96E]" : "text-gray-900 dark:text-white"}`}>{faq.question}</span>
                <span className="text-[#C9A96E]">
                  {openFaq === i ? <FaChevronUp /> : <FaChevronDown />}
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
                    <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= CONTACT (UNCHANGED, NOW LAST) ================= */}
      <div className="max-w-6xl mx-auto mt-24 md:mt-40 relative z-10 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-[#C9A96E] font-serif text-4xl mb-6">
            Let’s Work Together
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-md">
            Have a project in mind? I’d love to hear about it. Let’s create something impactful and meaningful together.
          </p>

          <div className="flex flex-col gap-5 text-gray-600 dark:text-gray-400">
            <a href="mailto:fireaiboshunia.info@gmail.com" className="flex items-center gap-3 w-fit hover:text-[#C9A96E] transition">
              <FaEnvelope />
              <span>official.alrakib@gmail.com</span>
            </a>

            <a href="tel:+8801779296092" className="flex items-center gap-3 w-fit hover:text-[#C9A96E] transition">
              <FaPhoneAlt />
              <span>+8801779296092</span>
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            {socials.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border hover:border-white rounded-full border-[#C9A96E] text-[#C9A96E] transition-all hover:bg-[#C9A96E] hover:text-black"
              >
                {item.icon}
              </a>
            ))}
          </div>

        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white/80 dark:bg-[#111]/70 backdrop-blur-xl border border-gray-200 dark:border-[#1a1a1a] p-8 rounded-2xl shadow-xl dark:shadow-none"
        >

          <div className="flex flex-col gap-6">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-gray-50 dark:bg-[#0D0D0D] border border-gray-300 dark:border-[#1a1a1a] rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-[#C9A96E] outline-none transition"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-gray-50 dark:bg-[#0D0D0D] border border-gray-300 dark:border-[#1a1a1a] rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-[#C9A96E] outline-none transition"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="bg-gray-50 dark:bg-[#0D0D0D] border border-gray-300 dark:border-[#1a1a1a] rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-[#C9A96E] outline-none transition"
            ></textarea>

            <button 
              type="submit" 
              disabled={isSending}
              className={`mt-4 px-6 py-3 rounded-lg bg-[#C9A96E] text-black font-medium transition ${
                isSending ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

          </div>

        </motion.form>

      </div>
    </section>
  );
};

export default Contact;