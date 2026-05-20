import img1 from "../assets/E-com.jpg";
import img2 from "../assets/landing page.webp";
import img3 from "../assets/dashboard.webp";
import img4 from "../assets/Screenshot 2026-05-12 154122.png";
import img5 from "../assets/Screenshot 2026-05-12 155310.png";
import img6 from "../assets/Screenshot 2026-05-12 155700.png";
import img7 from "../assets/Screenshot 2026-05-12 160457.png";
import vangoImg from "../assets/vango.png";
import medaiImg from "../assets/medai_dashboard.png";

export const projectsData = [
  {
    id: 9,
    title: "Med AI Dashboard",
    category: "Dashboard",
    badgeLabel: "HEALTHCARE PORTAL",
    role: "Lead Frontend Developer",
    description:
      "A medical administration and user analytics platform designed for tracking doctor onboarding, pharmacy registrations, and patient growth telemetry.",
    tags: ["#React", "#Chart.js", "#TailwindCSS", "#Redux"],
    image: medaiImg,
    githubLink: "https://github.com/Rakibboshunia/MedAi_Dashboard",
    liveLink: "https://medai.watch/",
    overview:
      "Med AI is an administrative and telemetry portal designed for healthcare management. It allows monitoring active users, onboarded doctors, and pharmacy registrations, tracking patient growth trends and medication statistics with clean interactive graphs.",
    challenges:
      "Building a highly interactive administration dashboard with statistics, custom user profile sliders, and data charts while keeping visual responsiveness flawless.",
    solution:
      "Implemented modular component design in React, Chart.js for clean analytics visualization, and a slide-out drawer pattern for editing profile information.",
    technologies: ["React", "Chart.js", "Tailwind CSS", "Redux"],
    features: [
      "Dynamic onboarding metrics tracking for users, doctors, and pharmacies",
      "Interactive data visualizations tracking user growth timelines",
      "Monthly added medication summary indicators",
      "Custom slide-out account profile manager and authentication panel"
    ]
  },
  {
    id: 8,
    title: "VANGO Live Landing Page",
    category: "Landing Page",
    badgeLabel: "LIVE COMMERCE",
    role: "Frontend Developer",
    description:
      "A world-class premium landing page for a revolutionary live commerce platform built to empower people who sell live.",
    tags: ["#React", "#TailwindCSS", "#FramerMotion"],
    image: vangoImg,
    githubLink: "https://github.com/Rakibboshunia/Vango_Live",
    liveLink: "https://ecommerce-bizsolutio-landingpage.vercel.app/",
    overview:
      "VANGO Live is a next-generation platform for live sellers. The landing page features premium neon gradients, rich modern typography, fluid interactive widgets, and seamless animations to capture waitlist signups.",
    challenges:
      "Achieving pixel-perfect responsiveness while placing dense interactive dashboard cards and mockups around the mobile asset without creating layout overflow.",
    solution:
      "Leveraged CSS Grid, custom Tailwind responsive states, and Framer Motion to animate floating micro-interactive cards symmetrically around the center device mockup.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    features: [
      "High-fidelity interactive mobile chat widget simulator",
      "Floating live stream dashboard metric overlays",
      "Vibrant, neon-glowing custom-themed waitlist signup",
      "Agile responsive CSS grids ensuring perfect 100% mobile adaptability"
    ]
  },
  {
    id: 7,
    title: "Rory Admin Dashboard",
    category: "Dashboard",
    badgeLabel: "ADMIN PANEL",
    role: "Lead Frontend Engineer",
    description:
      "A feature-rich administrative dashboard built for managing a creative platform, focusing on data visualization and user management.",
    tags: ["#React", "#Chart.js", "#Firebase", "#TailwindCSS"],
    image: img7,
    githubLink: "https://github.com/Rakibboshunia/Rory-Admin-Dashboard",
    liveLink: "https://rory-admin-dashboard.vercel.app/",
    overview:
      "Rory Admin Dashboard is the nerve center for the Soundtrack My Night ecosystem. It provides administrators with a birds-eye view of user activity, playlist generation metrics, and revenue tracking.",
    challenges:
      "Integrating disparate data streams into a cohesive, high-performance dashboard that provides actionable insights without overwhelming the user.",
    solution:
      "Leveraged React with optimized state management and used modular component architecture. Integrated charting libraries for clear data visualization and implemented secure authentication for admin access.",
    technologies: ["React", "Chart.js", "Firebase", "Tailwind CSS"],
    features: [
      "Dynamic telemetry analytics with rich interactive Chart.js widgets",
      "Fully configured Firebase Admin database with role-based auth",
      "Compact multi-functional side drawer with intuitive responsive routing",
      "Custom automated email reports for seamless platform monitoring"
    ]
  },
  {
    id: 6,
    title: "Day-Night News",
    category: "Landing Page",
    badgeLabel: "NEWS PLATFORM",
    role: "UI/UX Developer",
    description:
      "A sophisticated pixel-perfect recreation of a major news platform, featuring dynamic themes and a high-density information architecture.",
    tags: ["#React", "#TailwindCSS", "#ContextAPI"],
    image: img6,
    githubLink: "https://github.com/Rakibboshunia/BBC-News-Copy",
    liveLink: "https://bbc-news-dublicate.vercel.app/",
    overview:
      "Day-Night News is a technical demonstration of complex UI cloning and responsive design. It replicates the BBC News interface with precision, focusing on accessibility and readability.",
    challenges:
      "Managing a highly dense content grid and ensuring that the typography remains perfectly legible across various screen sizes and themes (Light vs. Dark).",
    solution:
      "Utilized Tailwind's advanced grid system and implemented a robust theme provider. Used semantic HTML5 elements to ensure the information hierarchy matches industry standards.",
    technologies: ["React", "Tailwind CSS", "Context API"],
    features: [
      "High-density, mathematically precise responsive news grid",
      "Advanced context-driven Theme Provider (Instant Light/Dark toggle)",
      "Strict semantic HTML5 structure achieving 100% SEO scores",
      "Full ARIA compliance, ensuring keyboard navigability and high accessibility"
    ]
  },
  {
    id: 5,
    title: "Soundtrack My Night",
    category: "Landing Page",
    badgeLabel: "INTERACTIVE WEB",
    role: "Interactive Developer",
    description:
      "A vibrant, high-energy landing page for an AI-powered Spotify playlist generator specifically designed for wedding events.",
    tags: ["#React", "#SpotifyAPI", "#FramerMotion", "#TailwindCSS"],
    image: img5,
    githubLink: "https://github.com/Rakibboshunia/Rory_Music_Playlist",
    liveLink: "https://soundtrackmynight.com/",
    overview:
      "Soundtrack My Night is a creative digital platform that helps couples generate the perfect wedding playlist. The site features a 60-second quiz and instant Spotify integration.",
    challenges:
      "Creating a visual identity that feels both celebratory and technologically advanced, while ensuring a smooth transition between the landing page and the interactive quiz component.",
    solution:
      "Implemented a high-contrast, vibrant color palette with smooth Framer Motion transitions. Optimized the mobile experience to ensure the quiz is easily accessible for users on the go.",
    technologies: ["React", "Spotify API", "Framer Motion", "Tailwind CSS"],
    features: [
      "Engaging 60-second interactive playlist generator quiz",
      "Robust client-side Spotify OAuth and Web API query pipelines",
      "Highly aesthetic fluid transitions via Framer Motion triggers",
      "Premium customized user data payload feedback forms"
    ]
  },
  {
    id: 4,
    title: "Edukai Automation Engine",
    category: "Dashboard",
    badgeLabel: "AI & AUTOMATION",
    role: "Full Frontend Engineer",
    description:
      "An AI-powered CV automation and recruitment dashboard system for monitoring real-time workflows and processing efficiency.",
    tags: ["#React", "#Node.js", "#TailwindCSS"],
    image: img4,
    githubLink: "https://github.com/Rakibboshunia/EduKai",
    liveLink: "https://edukaicvsub.edukai.co.uk/",
    overview:
      "Edukai is a sophisticated automation engine designed to streamline recruitment processes. It features a real-time dashboard for monitoring CV imports, quality checks, and submission success rates.",
    challenges:
      "Ensuring real-time data synchronization across various automation stages while maintaining a clean, intuitive interface for super admins to manage complex recruitment workflows.",
    solution:
      "Developed a robust dashboard using React with real-time state updates. Integrated data visualization for tracking success rates and processing metrics, ensuring high visibility into system performance.",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    features: [
      "Real-time recruitment processing telemetry tracking graphs",
      "Highly-performant search & filtering engine for CV sorting",
      "Visual draggable recruitment pipelines for dynamic progress updates",
      "Robust CSV spreadsheet export integration"
    ]
  },
  {
    id: 1,
    title: "OREBI E-Commerce",
    category: "E-Commerce",
    badgeLabel: "E-COMMERCE",
    role: "React & Redux Architect",
    description:
      "A premium e-commerce platform featuring complex filtering, cart management, and a high-performance architecture.",
    tags: ["#React", "#TailwindCSS", "#Redux"],
    image: img1,
    githubLink: "https://github.com/Rakibboshunia",
    liveLink: "https://orebi-ecommerce.vercel.app/",
    overview:
      "OREBI is a fully functional front-end e-commerce concept built for performance and premium aesthetics. It prioritizes user experience through intuitive filtering and robust cart state management.",
    challenges:
      "One of the major challenges was ensuring that category nesting and complex attribute filtering didn't affect the scroll performance and that state was managed smoothly without redundant re-renders.",
    solution:
      "Implemented Redux logic to centralize cart logic and utilized memoized selectors to securely and rapidly slice state variables, guaranteeing an ultra-responsive UI.",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
    features: [
      "Complex multi-level nested attribute filtering modules",
      "Global application state synchronization via Redux Toolkit slices",
      "Premium custom-designed item cards with smooth hover expansions",
      "High-performance instant search box listing hundreds of mock products"
    ]
  },
  {
    id: 2,
    title: "Gericht Fine Dining",
    category: "Landing Page",
    badgeLabel: "LANDING PAGE",
    role: "Creative UI Developer",
    description:
      "A visually stunning immersive web experience for high-end dining, focusing on elegant typography and smooth animations.",
    tags: ["#React", "#CSS3", "#FramerMotion"],
    image: img2,
    githubLink: "https://github.com/Rakibboshunia",
    liveLink: "https://gericht-restaurant.vercel.app/",
    overview:
      "Designed specifically for luxury clientele, the Gericht Fine Dining app relies heavily on visual storytelling, micro-animations, and striking high-contrast imagery to deliver a digital experience akin to fine dining.",
    challenges:
      "Managing excessive high-res imagery while keeping the website lightweight and guaranteeing fluid scrolling performance on mobile environments without stuttering.",
    solution:
      "Utilized Framer Motion for scroll-linked animations and lazy-loaded image assets. CSS variables were employed rigorously to ensure immediate theme adaptability.",
    technologies: ["React", "CSS3", "Framer Motion", "Vite"],
    features: [
      "Splendid luxurious typographic storytelling pages",
      "Sophisticated scroll-triggered animations mirroring fine dining",
      "Ultra-fast asset lazy loading, minimizing layout shifts (CLS)",
      "Premium custom video player overlays showcasing restaurant trailers"
    ]
  },
  {
    id: 3,
    title: "UNIAO Agency",
    category: "Landing Page",
    badgeLabel: "LANDING PAGE",
    role: "Creative Frontend Developer",
    description:
      "A bold, modern agency portfolio designed to showcase high-impact services and creative excellence.",
    tags: ["#React", "#FramerMotion", "#TailwindCSS"],
    image: img3,
    githubLink: "https://github.com/Rakibboshunia",
    liveLink: "https://uniao-agency.vercel.app/",
    overview:
      "The UNIAO Agency platform is developed to act as an authoritative digital footprint for an agency. Its bold typography and unorthodox grids echo the creative nature of the services offered.",
    challenges:
      "Translating chaotic and highly customized Figma designs into mathematically robust, responsive grids that wouldn't break on odd aspect ratios.",
    solution:
      "Created dynamic layout components using modern CSS Grid and Tailwind flex utilities to ensure mathematical precision without losing the creative edge. Nested animations provide additional flair.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Context API"],
    features: [
      "Asymmetric layouts styled with state-of-the-art CSS Grid",
      "Fluid interactive sidebar navigation with spring motion physics",
      "Dynamic client project showcase tabs with smooth slide transitions",
      "Ultra-minimalist responsive contact card forms"
    ]
  }
];
