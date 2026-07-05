import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const faqs = [
  // ── Working Together ──
  {
    q: "What is your working process?",
    a: "My process involves 4 key phases — Requirements gathering & planning, UI/UX Design mapping, agile Development with regular check-ins, and finally Testing & Launch. I keep you in the loop every step of the way! 🚀",
  },
  {
    q: "How do we communicate during a project?",
    a: "I stay connected via Slack, WhatsApp, or email — whatever works best for you. I send progress updates every 2–3 days and schedule weekly video calls to align on goals. 💬",
  },
  {
    q: "How many revisions do I get?",
    a: "I include up to 3 rounds of revisions per project milestone. I want you to be 100% satisfied, so I always make sure the final product matches your vision. ✅",
  },
  {
    q: "Do you provide a contract?",
    a: "Yes! Before starting any project, I provide a clear contract outlining scope, timeline, payment terms, and ownership rights — so there are no surprises for either side. 📄",
  },

  // ── Frontend ──
  {
    q: "Will the website be mobile responsive?",
    a: "100%! Every project I build is fully responsive across all screen sizes — mobile, tablet, and desktop. I test on real devices to ensure a flawless experience everywhere. 📱",
  },
  {
    q: "Can you convert Figma to code?",
    a: "Yes! I excel at converting Figma, Adobe XD, or Sketch designs into pixel-perfect, responsive React/Tailwind code with smooth micro-interactions. Just share your design file! 🎨",
  },
  {
    q: "Can you build animations & interactions?",
    a: "Absolutely! I use Framer Motion and GSAP to create buttery-smooth page transitions, scroll animations, hover effects, and micro-interactions that make your site feel premium. ✨",
  },
  {
    q: "Do you write SEO-friendly code?",
    a: "SEO and performance are baked into my workflow. I use semantic HTML5, optimized assets, lazy loading, and fast-loading components to ensure excellent Core Web Vitals and Lighthouse scores. 📈",
  },
  {
    q: "Can you improve my existing website?",
    a: "Yes! I can audit your current site for performance issues, UI/UX improvements, SEO gaps, and bug fixes — then implement all the upgrades. A fresh pair of expert eyes can make a huge difference! 👀",
  },
  {
    q: "Do you build landing pages?",
    a: "Yes, it's one of my specialties! I build high-converting, visually stunning landing pages that are optimized for performance, SEO, and user engagement. 🏆",
  },
  {
    q: "Can you add a CMS so I can edit content?",
    a: "Absolutely! I can integrate headless CMS solutions like Contentful, Sanity, or Strapi so you can manage your website content without touching any code. 🗂️",
  },

  // ── WordPress & Shopify ──
  {
    q: "Do you work with WordPress?",
    a: "Yes! I build custom WordPress websites, themes, and plugins. Whether it's a blog, business site, or portfolio — I can create a fully tailored WordPress solution with Elementor Pro or custom-coded themes. 🎨",
  },
  {
    q: "Can you build a WooCommerce store?",
    a: "Absolutely! I build fully functional WooCommerce stores with custom product pages, payment gateway integration (Stripe, PayPal, bKash), shipping setup, and a polished storefront that converts. 🛒",
  },
  {
    q: "Can you customize an existing WordPress theme?",
    a: "Yes! I can customize any existing WordPress theme — adjusting layouts, colors, fonts, and functionality to perfectly match your brand without breaking existing features. ✂️",
  },
  {
    q: "Do you build Shopify stores?",
    a: "Yes! I design and develop custom Shopify stores with theme customization, product setup, app integrations, and conversion-optimized landing pages to help you sell more effectively. 🏪",
  },
  {
    q: "Can you migrate my site to WordPress or Shopify?",
    a: "Definitely! I can migrate your existing website to WordPress or Shopify while preserving your content, SEO structure, and design — ensuring a smooth, zero-downtime transition. 🔄",
  },
  {
    q: "Will my WordPress/Shopify site be fast and SEO optimized?",
    a: "Yes! I optimize every site for speed using caching plugins, CDN setup, image compression, and clean code. SEO best practices like proper meta tags, schema markup, and sitemap setup are always included. 📈",
  },

  // ── Fullstack / Backend ──
  {
    q: "Can you build a fullstack web app?",
    a: "Yes! I build fullstack applications using React/Next.js on the frontend and Node.js/Express with MongoDB or PostgreSQL on the backend — complete with authentication, APIs, and deployment. 🏗️",
  },
  {
    q: "Can you build a REST API or GraphQL API?",
    a: "Definitely! I design and build scalable REST APIs with Node.js/Express and can also set up GraphQL APIs. I follow best practices for routing, validation, error handling, and security. 🔌",
  },
  {
    q: "Can you handle user authentication?",
    a: "Yes! I implement secure authentication using JWT tokens, bcrypt hashing, and can integrate third-party providers like Google OAuth, GitHub, or Firebase Auth. 🔐",
  },
  {
    q: "Which databases do you work with?",
    a: "I'm experienced with MongoDB (Mongoose), PostgreSQL, MySQL, and Firebase Firestore. I'll recommend the right database based on your project's data structure and scale. 🗄️",
  },
  {
    q: "Can you integrate third-party APIs?",
    a: "Yes! I have experience integrating payment gateways (Stripe, PayPal), messaging APIs (Twilio, SendGrid), maps (Google Maps), social logins, and many other third-party services. 🔗",
  },
  {
    q: "Can you build an e-commerce store?",
    a: "Absolutely! I build custom e-commerce solutions with product listings, cart management, Stripe/PayPal checkout, order tracking, and admin dashboards. 🛒",
  },
  {
    q: "Can you build an admin dashboard?",
    a: "Yes! I specialize in building feature-rich admin dashboards with charts, data tables, user management, analytics, and role-based access control. 📊",
  },

  // ── Performance & Security ──
  {
    q: "How do you ensure website security?",
    a: "I follow security best practices — input validation, rate limiting, CORS policies, HTTPS enforcement, environment variable protection, and sanitizing all user data to prevent XSS & SQL injection. 🛡️",
  },
  {
    q: "Will my website be fast?",
    a: "Speed is a priority! I optimize images, use code splitting, lazy loading, caching strategies, and CDN delivery to achieve sub-2-second load times and high Lighthouse performance scores. ⚡",
  },

  // ── Deployment & Hosting ──
  {
    q: "Can you deploy and host my project?",
    a: "Yes! I deploy to Vercel, Netlify, Railway, or AWS depending on the project type. I also set up custom domains, SSL certificates, and CI/CD pipelines for smooth future updates. 🚀",
  },
  {
    q: "Will I own the source code?",
    a: "100%! Once the project is complete and payment is finalized, you get full ownership of all source code via a private GitHub repository. No strings attached. 📁",
  },

  // ── Process & Pricing ──
  {
    q: "How long does a project take?",
    a: "It depends on the scope! A landing page typically takes 1–2 weeks, while a full web application can take 4–8 weeks. I always deliver on time without compromising quality. ⏱️",
  },
  {
    q: "How do you charge for projects?",
    a: "I offer both fixed-price and hourly rates depending on project type. Typically, I take 50% upfront and 50% on delivery. I'll send a detailed quote after reviewing your requirements. 💰",
  },
  {
    q: "Do you provide maintenance?",
    a: "Absolutely! I offer ongoing maintenance packages to ensure your app runs smoothly, stays updated with dependencies, and scales with your business. Think of me as your long-term tech partner. 🛠️",
  },
  {
    q: "What technologies do you use?",
    a: "I specialize in the MERN stack (MongoDB, Express, React, Node.js), Next.js, Tailwind CSS, and Framer Motion — building modern, performant, and beautiful interfaces. ⚡",
  },
  {
    q: "Do you work with an existing team?",
    a: "Yes! I'm very comfortable collaborating with in-house teams, designers, and other developers. I use Git for version control and follow clean code practices for smooth team collaboration. 👥",
  },
  {
    q: "Open to freelance / remote work?",
    a: "Yes! I'm fully open to freelance projects and long-term remote contracts. I'm comfortable collaborating with global teams across any time zone. Let's connect! 🌍",
  },
];

const TypingDots = () => (
  <div className="flex items-end gap-2 mb-3">
    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#a07840] flex items-center justify-center flex-shrink-0 shadow">
      <FaRobot className="text-black text-[10px]" />
    </div>
    <div className="px-4 py-2.5 rounded-2xl rounded-bl-none bg-white dark:bg-[#1e1e1e] border border-gray-100 dark:border-white/8 shadow-sm">
      <div className="flex gap-1 items-center h-3">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  </div>
);

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hey! 👋 I'm Boshunia's assistant. Tap a question below and I'll answer instantly!",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const [asked, setAsked] = useState([]);
  const [pulse, setPulse] = useState(true);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Stop pulsing after first open
  useEffect(() => {
    if (open) setPulse(false);
  }, [open]);

  const handleAsk = (faq, index) => {
    if (asked.includes(index)) return;
    setAsked((prev) => [...prev, index]);
    setMessages((prev) => [...prev, { type: "user", text: faq.q }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { type: "bot", text: faq.a }]);
    }, 1100);
  };

  return (
    <>
      {/* ── Floating Toggle Button ── */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">

        {/* Tooltip when closed */}
        <AnimatePresence>
          {!open && pulse && (
            <motion.div
              initial={{ opacity: 0, y: 5, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg whitespace-nowrap"
            >
              💬 Ask me anything!
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.93 }}
          onClick={() => setOpen((p) => !p)}
          className="relative h-14 w-14 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#a07840] text-black shadow-[0_8px_32px_rgba(201,169,110,0.45)] flex items-center justify-center transition-all duration-300"
          aria-label="Open chatbot"
        >
          {/* Pulse ring */}
          {pulse && (
            <span className="absolute inset-0 rounded-full bg-[#C9A96E]/40 animate-ping" />
          )}
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes className="text-lg" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaRobot className="text-xl" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Chat Popup ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed bottom-24 right-6 z-[9998] w-[340px] sm:w-[380px] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.25)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.6)] bg-white/90 dark:bg-[#111]/90 backdrop-blur-2xl"
          >
            {/* Top bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100 dark:border-white/8 bg-white/80 dark:bg-[#141414]">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#a07840] flex items-center justify-center shadow">
                <FaRobot className="text-black text-sm" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white leading-none mb-0.5">Boshunia's Assistant</p>
                <p className="text-[10px] text-emerald-500 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  Online · Always available
                </p>
              </div>
              <HiSparkles className="text-[#C9A96E] ml-auto text-base" />
            </div>

            {/* Messages */}
            <div
              className="h-[260px] overflow-y-auto px-4 py-4 space-y-1"
              style={{ scrollbarWidth: "none" }}
            >
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className={`flex items-end gap-2 mb-3 ${msg.type === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {msg.type === "bot" ? (
                      <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#a07840] flex items-center justify-center flex-shrink-0 shadow">
                        <FaRobot className="text-black text-[10px]" />
                      </div>
                    ) : (
                      <div className="h-7 w-7 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center flex-shrink-0 text-[9px] font-bold text-white border border-gray-200 dark:border-white/10">
                        You
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed shadow-sm ${msg.type === "bot"
                        ? "rounded-bl-none bg-white dark:bg-[#1e1e1e] border border-gray-100 dark:border-white/8 text-gray-800 dark:text-gray-200"
                        : "rounded-br-none bg-[#C9A96E] text-black font-medium"
                        }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <AnimatePresence>
                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <TypingDots />
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={bottomRef} />
            </div>

            {/* Question chips */}
            <div className="border-t border-gray-100 dark:border-white/8 px-3 py-3 bg-gray-50/90 dark:bg-[#0f0f0f]/90">
              <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-2 px-1 font-semibold">Ask a question</p>
              <div className="flex flex-wrap gap-1.5 max-h-[96px] overflow-y-auto" style={{ scrollbarWidth: "none" }}>
                {faqs.map((faq, i) => {
                  const done = asked.includes(i);
                  return (
                    <motion.button
                      key={i}
                      whileHover={!done ? { scale: 1.03 } : {}}
                      whileTap={!done ? { scale: 0.97 } : {}}
                      onClick={() => handleAsk(faq, i)}
                      disabled={done}
                      className={`flex items-center gap-1 text-[11px] px-3 py-1.5 rounded-full border font-medium transition-all duration-200 ${done
                        ? "border-[#C9A96E]/20 bg-[#C9A96E]/8 text-[#C9A96E]/40 cursor-default line-through"
                        : "border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 hover:border-[#C9A96E]/60 hover:text-[#C9A96E] shadow-sm"
                        }`}
                    >
                      {!done && <FaPaperPlane className="text-[#C9A96E] text-[8px]" />}
                      {faq.q}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
