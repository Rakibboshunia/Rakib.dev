
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
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

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

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
    <section id="contact" className="py-16 md:py-24 px-6 bg-[#f8f9fa] dark:bg-[#0D0D0D] relative overflow-hidden transition-colors duration-300">
      <SEOHelmet title="Contact | Boshunia" />
      {/* 🔥 Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#C9A96E]/10 blur-[160px] rounded-full top-1/2 left-1/2 -translate-x-1/2 pointer-events-none"></div>

      {/* ================= CONTACT FORM ================= */}
      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs uppercase mb-4 block font-bold">
            • Get In Touch
          </span>
          <h2 className="text-[#C9A96E] font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Let’s Create <br />Something <span className="text-gray-900 dark:text-white">Impactful.</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-md text-base leading-relaxed">
            Have a project in mind, want to discuss contract roles, or simply want to say hello? I’d love to hear from you. Let’s collaborate.
          </p>

          <div className="flex flex-col gap-5 text-gray-600 dark:text-gray-400 text-base font-medium">
            <a href="mailto:official.alrakib@gmail.com" className="flex items-center gap-3 w-fit hover:text-[#C9A96E] transition-colors duration-300">
              <FaEnvelope className="text-[#C9A96E]" />
              <span>official.alrakib@gmail.com</span>
            </a>

            <a href="tel:+8801779296092" className="flex items-center gap-3 w-fit hover:text-[#C9A96E] transition-colors duration-300">
              <FaPhoneAlt className="text-[#C9A96E]" />
              <span>+8801779296092</span>
            </a>
          </div>

          <div className="flex gap-4 mt-10">
            {socials.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border hover:border-white rounded-full border-[#C9A96E] text-[#C9A96E] transition-all duration-300 hover:bg-[#C9A96E] hover:text-black shadow-sm"
              >
                {item.icon}
              </a>
            ))}
          </div>

        </motion.div>

        {/* RIGHT SIDE MESSAGE FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white/80 dark:bg-[#111]/70 backdrop-blur-xl border border-gray-200 dark:border-[#1a1a1a] p-8 md:p-10 rounded-3xl shadow-xl dark:shadow-none"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#C9A96E] px-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="bg-gray-50 dark:bg-[#0D0D0D] border border-gray-300 dark:border-[#1a1a1a] rounded-xl px-4 py-3.5 text-gray-900 dark:text-white focus:border-[#C9A96E] outline-none transition duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#C9A96E] px-1">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                className="bg-gray-50 dark:bg-[#0D0D0D] border border-gray-300 dark:border-[#1a1a1a] rounded-xl px-4 py-3.5 text-gray-900 dark:text-white focus:border-[#C9A96E] outline-none transition duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#C9A96E] px-1">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                className="bg-gray-50 dark:bg-[#0D0D0D] border border-gray-300 dark:border-[#1a1a1a] rounded-xl px-4 py-3.5 text-gray-900 dark:text-white focus:border-[#C9A96E] outline-none transition duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`mt-4 px-6 py-4 rounded-xl bg-[#C9A96E] text-black font-bold text-xs uppercase tracking-widest transition duration-300 shadow-md ${isSending ? "opacity-50 cursor-not-allowed" : "hover:bg-[#b0935d] hover:scale-[1.02]"
                }`}
            >
              {isSending ? "Sending Message..." : "Send Message"}
            </button>
          </div>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;