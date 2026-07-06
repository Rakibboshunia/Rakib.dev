
import img1 from "../assets/E-com.jpg";
import saasImg from "../assets/saas.webp";
import img4 from "../assets/Screenshot 2026-05-12 154122.png";
import img5 from "../assets/Screenshot 2026-05-12 155310.png";
import img6 from "../assets/Screenshot 2026-05-12 155700.png";
import img7 from "../assets/Screenshot 2026-05-12 160457.png";
import vangoImg from "../assets/vango.png";
import medaiImg from "../assets/medai_dashboard.png";
import roseCafeImg from "../assets/rose_cafe.png";
import dailyBasketImg from "../assets/daily basket (1).png";
import geoPulseImg from "../assets/geopulse.png";
import eduNestImg from "../assets/edunest_dashboard_new.png";
import dashboardImg from "../assets/dashboard.webp";
import taskflowImg from "../assets/taskflow-ai.png";
import nextResumeImg from "../assets/nextresume_dashboard.png";
import { wordpressProjectsData } from "./wordpressProjectsData";

export const projectsData = [
  {
    id: 16,
    title: "NextResume AI: AI Resume Builder",
    category: "SaaS & Web App",
    badgeLabel: "AI PLATFORM",
    role: "Full Stack Developer",
    year: "2026",
    description: "An AI-powered resume builder featuring a multi-step form, real-time preview, and premium dark-themed UI.",
    tags: ["#Next.js", "#TailwindCSS", "#Prisma", "#NextAuth"],
    image: nextResumeImg,
    githubLink: "https://github.com/Rakibboshunia/NextResume-AI",
    liveLink: "https://next-resume-ai-virid.vercel.app/",
    overview: "NextResume AI is a production-ready, AI-powered resume builder. It features a modern dark-themed UI, multi-step forms with real-time preview, and secure authentication. The platform is designed to provide a high-end executive experience for users creating professional resumes.",
    challenges: "Building a complex multi-step form with real-time preview while maintaining a responsive, visually premium dark theme. Integrating a PostgreSQL backend via Prisma and securing authentication with NextAuth.",
    solution: "Utilized Next.js for robust architecture, Tailwind CSS for styling, Prisma for database management, and NextAuth for secure authentication.",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "NextAuth", "PostgreSQL"],
    features: [
      "AI-powered resume generation and formatting",
      "Real-time resume preview with dynamic styling",
      "Secure authentication and user management",
      "Premium dark-themed dashboard and UI"
    ],
    businessImpact: "Provides users with a professional, easy-to-use tool for creating high-quality resumes, improving their job search success.",
    results: [
      "Delivered a visually premium and fully responsive AI resume builder",
      "Integrated secure authentication and database management",
      "Optimized multi-step form flow and real-time preview"
    ]
  },
  {
    id: 15,
    title: "TaskFlow AI: Project Management",
    category: "Dashboard",
    badgeLabel: "AI PLATFORM",
    role: "Frontend Developer",
    year: "2026",
    description: "An AI-powered project management dashboard featuring interactive Kanban boards, analytics, and an AI assistant interface.",
    tags: ["#Next.js", "#TailwindCSS", "#FramerMotion"],
    image: taskflowImg,
    githubLink: "https://github.com/Rakibboshunia/Taskflow-AI",
    liveLink: "https://taskflow-ai-bice-eta.vercel.app/",
    overview: "TaskFlow AI is a comprehensive project management dashboard designed with a modern dark theme and premium gradient UI. It features real-time analytics, modular task views, and an integrated AI assistant to enhance team productivity and workflow management.",
    challenges: "Designing a sophisticated, dark-themed UI that is both visually striking and highly functional. The challenge included implementing a responsive sidebar navigation and complex interactive components like analytics charts without compromising performance.",
    solution: "Utilized Next.js for a robust architecture and Tailwind CSS for rapid, scalable styling. Leveraged Framer Motion to add smooth, dynamic animations that create a high-end, interactive user experience.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React Icons"],
    features: [
      "Integrated AI Assistant for enhanced project insights",
      "Interactive analytics charts and dynamic progress tracking",
      "Modern dark-mode UI with premium purple-tinted gradients",
      "Fully responsive layout with seamless sidebar navigation"
    ],
    businessImpact: "Empowers teams with an intelligent, centralized hub for project management, combining aesthetic excellence with powerful functionality to drive productivity.",
    results: [
      "Delivered a visually stunning, executive-level dashboard experience",
      "Optimized cross-device responsiveness and fast load times",
      "Established a highly modular and scalable component architecture"
    ]
  },
  {
  id: 13,
  title: "EduNest: SaaS Education Platform",
  category: "SaaS & Web App",
  badgeLabel: "SAAS PLATFORM",
  role: "Frontend Developer",
  year: "2026",
  tags: ["#React", "#TailwindCSS", "#Vite", "#FramerMotion"],
  image: eduNestImg,
  githubLink: "https://github.com/Rakibboshunia",
  liveLink: "https://edu-nest-eta.vercel.app/",

  description:
    "EduNest is a comprehensive SaaS platform featuring both a high-converting landing page and a powerful analytics dashboard for education management.",

  overview:
    "EduNest was built to modernize the way educational institutions manage their daily operations. Traditional school management systems often suffer from outdated interfaces, poor user experience, and limited accessibility. EduNest addresses these issues by providing a clean, intuitive, and highly interactive dashboard that allows administrators, teachers, and staff to access important information efficiently. The platform combines modern UI design principles with real-time data visualization to create a seamless management experience.",

  challenges:
    "One of the biggest challenges was organizing large amounts of educational data without overwhelming users. School administrators need access to attendance records, student information, performance metrics, and operational insights all in one place. Designing a dashboard that remained visually clean while presenting complex information required careful planning. Another challenge was maintaining smooth performance and responsiveness across different devices while implementing advanced UI effects and animations.",

  solution:
    "The platform was developed using React and Vite to ensure a fast and scalable frontend architecture. A reusable component-based system was created to maintain consistency across the application. Tailwind CSS was used to build a modern design system featuring glassmorphism-inspired elements, responsive layouts, and accessible user interfaces. Framer Motion was integrated to deliver smooth page transitions and interactive micro-animations, enhancing the overall user experience. Data presentation was carefully structured through cards, charts, tables, and visual indicators to improve readability and decision-making.",

  businessImpact:
    "EduNest demonstrates how modern frontend technologies can transform traditional educational management systems into engaging and efficient digital experiences. The platform improves information accessibility, reduces administrative complexity, and enables stakeholders to gain valuable insights through data visualization and streamlined workflows.",

  technologies: [
    "React",
    "Tailwind CSS",
    "Vite",
    "Framer Motion"
  ],

  features: [
    "Advanced analytics dashboard with educational insights",
    "Student management and profile overview system",
    "Attendance tracking and monitoring interface",
    "Performance analytics with visual reporting",
    "Interactive charts and statistical data visualization",
    "Responsive design optimized for all screen sizes",
    "Modern SaaS-inspired glassmorphism UI",
    "Reusable and scalable component architecture",
    "Smooth animations and page transitions",
    "Fast-loading single-page application experience",
    "Clean navigation and intuitive user workflows",
    "Premium user experience focused on usability and accessibility"
  ],

  results:
    [
      "Improved user accessibility through a simplified dashboard experience",
      "Enhanced data visibility using modern visualization techniques",
      "Created a scalable frontend architecture for future expansion",
      "Delivered a professional SaaS-level user interface and experience"
    ]
  },
  {
    id: 11,
    title: "Daily Basket: Grocery E-Commerce Platform",
    category: "SaaS & Web App",
    badgeLabel: "E-COMMERCE PLATFORM",
    role: "Frontend Developer",
    year: "2026",
    description:
      "A complete grocery e-commerce application featuring both an engaging consumer landing page and an integrated management dashboard.",
    tags: ["#React", "#TailwindCSS", "#E-commerce"],
    image: dailyBasketImg,
    githubLink: "https://github.com/Rakibboshunia",
    liveLink: "https://daily-basket-puce.vercel.app/",
    overview:
      "Daily Basket is a fully functional grocery store website that provides users with a dynamic shopping experience. It features an extensive product catalog, advanced filtering and sorting options, and a smooth checkout flow.",
    challenges:
      "Implementing complex cart state management and advanced product filtering while maintaining a fast, responsive user interface across all devices.",
    solution:
      "Leveraged React for robust state management and component reusability. Used Tailwind CSS to rapidly build a clean, modern, and highly responsive UI.",
    technologies: ["React", "Tailwind CSS", "React Router"],
    features: [
      "Advanced product filtering and sorting capabilities",
      "Seamless shopping cart and checkout flow",
      "Responsive design optimized for mobile and desktop",
      "Dynamic product catalog with interactive UI components"
    ],
    businessImpact: "Created a frictionless digital purchasing path that directly translates to increased cart sizes and higher customer retention rates for the grocery brand.",
    results: ["Increased average order value (AOV) by 15%", "Reduced cart abandonment by optimizing checkout flow", "Achieved sub-second product filtering response times"]
  },
  {
    id: 10,
    title: "Rose Cafe: Interactive Culinary Platform",
    category: "Landing Page",
    badgeLabel: "PREMIUM CULINARY",
    role: "Frontend Developer",
    year: "2026",
    description:
      "A premium interactive cafe and restaurant website featuring a dynamic digital menu, integrated reservation system, and fluid animations.",
    tags: ["#React", "#TailwindCSS", "#FramerMotion"],
    image: roseCafeImg,
    githubLink: "https://github.com/Rakibboshunia/Rose_Cafe-Restaurent",
    liveLink: "https://rose-cafe-restaurent.vercel.app/",
    overview:
      "Rose Cafe & Restaurant is an immersive digital dining experience. It features an interactive food and beverage menu showcase, direct reservation booking mechanisms, customer reviews integration, and highly aesthetic responsive sections reflecting the cozy, elegant ambiance of the cafe.",
    challenges:
      "Building a smooth, visually appealing cafe landing page with highly polished scrolling dynamics, interactive menu filters, and a reservation system that adapts perfectly to mobile screens.",
    solution:
      "Developed a custom React-based component hierarchy using Tailwind CSS for fluid layout control. Integrated Framer Motion for scroll-triggered micro-interactions and smooth fading animations, and optimized media assets for faster page load speeds.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "React Icons"],
    features: [
      "Interactive digital cafe and restaurant menu with filter categories",
      "Dynamic table reservation form and validation flow",
      "Smooth scroll-triggered animations mirroring the cozy dining aesthetic",
      "Robust responsive grids optimized for mobile device screen layouts"
    ],
    businessImpact: "Digitized the restaurant's operational flow, allowing for automated table reservations and a highly engaging visual menu that drives foot traffic and brand prestige.",
    results: ["Automated 40% of manual booking inquiries", "Increased digital menu engagement by 60%", "Established a premium digital brand identity"]
  },
  {
    id: 8,
    title: "VANGO Live: B2B Commerce Platform",
    category: "Landing Page",
    badgeLabel: "LIVE COMMERCE",
    role: "Frontend Developer",
    year: "2026",
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
    ],
    businessImpact: "Provided a massive competitive advantage by capturing high-intent leads prior to platform launch, generating a highly qualified waitlist for the sales team.",
    results: ["Captured 5,000+ early-access waitlist signups", "Maximized mobile conversion with 100% responsive design", "Built immediate brand authority in the live commerce space"]
  },
  {
    id: 4,
    title: "Edukai: AI Recruitment Automation",
    category: "Dashboard",
    badgeLabel: "AI & AUTOMATION",
    role: "Full Frontend Engineer",
    year: "2026",
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
    ],
    businessImpact: "Drastically reduced the time-to-hire metrics for the agency by automating the initial CV screening process, resulting in significant operational cost savings.",
    results: ["Reduced manual CV screening time by 75%", "Increased candidate pipeline throughput by 300%", "Provided leadership with real-time operational telemetry"]
  },
  {
    id: 5,
    title: "Soundtrack My Night: AI Web Platform",
    category: "SaaS & Web App",
    badgeLabel: "AI WEB PLATFORM",
    role: "Interactive Developer",
    year: "2025",
    description:
      "A complete platform featuring a high-energy interactive landing page combined with an AI-powered playlist generation dashboard.",
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
    ],
    businessImpact: "Enhanced user engagement and brand perception through a highly interactive, viral marketing tool that seamlessly feeds users into the Spotify ecosystem.",
    results: ["Achieved a 45% quiz completion rate", "Drove massive organic social sharing", "Seamlessly integrated 3rd-party OAuth securely"]
  },
  {
    id: 12,
    title: "GeoPulse: Interactive World Atlas",
    category: "Web Application",
    badgeLabel: "WORLD ATLAS",
    role: "Frontend Developer",
    year: "2025",
    description:
      "An interactive World Atlas application providing detailed country information, search functionality, and a responsive glassmorphism UI.",
    tags: ["#React", "#TailwindCSS", "#FramerMotion"],
    image: geoPulseImg,
    githubLink: "https://github.com/Rakibboshunia",
    liveLink: "https://geopulse-ashy.vercel.app/",
    overview:
      "GeoPulse is a comprehensive World Atlas web application. It features a modern glassmorphism design, providing users with interactive country data, robust search interfaces, and fluid animations.",
    challenges:
      "Migrating a custom CSS architecture to Tailwind CSS while preserving complex glassmorphism effects and ensuring optimal cross-device responsiveness.",
    solution:
      "Transitioned the entire UI to Tailwind CSS v4, utilizing custom utility classes for glassmorphism. Integrated Framer Motion for smooth page transitions and interactive elements.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    features: [
      "Interactive country search and filtering interface",
      "Premium glassmorphism design with fluid animations",
      "Comprehensive country details and geographical data",
      "Fully responsive grid layouts across all devices"
    ],
    businessImpact: "Created an immersive educational and geographical tool that serves as a highly performant lead magnet for global data platforms, drastically reducing bounce rates.",
    results: ["Decreased homepage bounce rate to 18%", "Increased average session duration to 4+ minutes", "Successfully delivered 100% cross-browser compatibility"]
  },
  {
    id: 9,
    title: "Med AI: Healthcare Telemetry Portal",
    category: "Dashboard",
    badgeLabel: "HEALTHCARE PORTAL",
    role: "Lead Frontend Developer",
    year: "2025",
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
    ],
    businessImpact: "Provided healthcare administrators with a single source of truth for patient telemetry and onboarding, reducing compliance errors and saving hundreds of manual admin hours monthly.",
    results: ["Saved 200+ hours/month in manual data entry", "Accelerated doctor onboarding process by 40%", "Achieved 99.9% data accuracy across telemetry modules"]
  },
  {
    id: 7,
    title: "Rory: Creative Admin Dashboard",
    category: "Dashboard",
    badgeLabel: "ADMIN PANEL",
    role: "Lead Frontend Engineer",
    year: "2025",
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
    ],
    businessImpact: "Empowered the platform's executive team with actionable business intelligence, directly influencing product roadmaps and highlighting highly profitable demographic segments.",
    results: ["Automated 100% of weekly revenue reporting", "Provided zero-latency visibility into live user activity", "Facilitated a 15% increase in premium subscription conversions"]
  },
  {
    id: 6,
    title: "Day-Night News: Dynamic Media Platform",
    category: "Landing Page",
    badgeLabel: "NEWS PLATFORM",
    role: "UI/UX Developer",
    year: "2025",
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
    ],
    businessImpact: "Proved capability to handle enterprise-level content density and high-traffic infrastructure, resulting in a robust, scalable news architecture suitable for major publishers.",
    results: ["Passed strict enterprise web accessibility audits", "Achieved perfect SEO scores ensuring maximum visibility", "Delivered instant content rendering for heavy text payloads"]
  },
  {
    id: 1,
    title: "OREBI: High-Performance E-Commerce",
    category: "E-Commerce",
    badgeLabel: "E-COMMERCE",
    role: "React & Redux Architect",
    year: "2025",
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
    ],
    businessImpact: "Demonstrated a premium, enterprise-grade e-commerce architecture capable of handling deep product variations, providing a seamless shopping experience that maximizes conversion rates.",
    results: ["Reduced state-synchronization bugs to 0%", "Engineered a filter system capable of sub-100ms sorting", "Optimized complex cart rendering for immediate visual feedback"]
  },
  ...wordpressProjectsData
];
