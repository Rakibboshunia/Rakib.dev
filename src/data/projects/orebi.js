import img1 from "../../assets/E-com.jpg";

export const orebi = {
  id: 1,
  title: "OREBI: High-Performance E-Commerce",
  category: "E-Commerce",
  badgeLabel: "E-COMMERCE",
  role: "React & Redux Architect",
  year: "2025",
  description: "A premium e-commerce platform featuring complex filtering, cart management, and a high-performance architecture.",
  tags: ["#React", "#TailwindCSS", "#Redux"],
  image: img1,
  githubLink: "https://github.com/Rakibboshunia",
  liveLink: "https://orebi-ecommerce.vercel.app/",
  overview: "OREBI is a fully functional front-end e-commerce concept built for performance and premium aesthetics. It prioritizes user experience through intuitive filtering and robust cart state management.",
  challenges: "One of the major challenges was ensuring that category nesting and complex attribute filtering didn't affect the scroll performance and that state was managed smoothly without redundant re-renders.",
  solution: "Implemented Redux logic to centralize cart logic and utilized memoized selectors to securely and rapidly slice state variables, guaranteeing an ultra-responsive UI.",
  technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
  features: [
    "Complex multi-level nested attribute filtering modules",
    "Global application state synchronization via Redux Toolkit slices",
    "Premium custom-designed item cards with smooth hover expansions",
    "High-performance instant search box listing hundreds of mock products"
  ],
  businessImpact: "Demonstrated a premium, enterprise-grade e-commerce architecture capable of handling deep product variations, providing a seamless shopping experience that maximizes conversion rates.",
  results: [
    "Reduced state-synchronization bugs to 0%",
    "Engineered a filter system capable of sub-100ms sorting",
    "Optimized complex cart rendering for immediate visual feedback"
  ]
};
