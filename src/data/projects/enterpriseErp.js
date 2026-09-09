import erpDashboard from "../../assets/erp-dashboard.png";

export const enterpriseErp = {
  id: 18,
  title: "Enterprise ERP System",
  category: "SaaS & Web App",
  badgeLabel: "ENTERPRISE PLATFORM",
  role: "Full Stack Developer",
  year: "2026",
  description: "An advanced modular Enterprise Resource Planning (ERP) system with real-time analytics, order management, revenue tracking, and comprehensive business operations dashboard.",
  tags: ["#React.js", "#Next.js", "#Node.js", "#Express.js", "#MongoDB", "#TailwindCSS", "#shadcn/ui", "#TypeScript"],
  image: erpDashboard,
  galleryImages: [
    erpDashboard,
  ],
  liveLink: "https://erp-system-sable-eta.vercel.app",
  overview: "Enterprise ERP System is a comprehensive, modular business management platform designed for large-scale operations. It features a real-time dashboard with KPI tracking, revenue analytics with bar chart visualizations, live order feeds with status management, and a clean professional interface built for enterprise environments.",
  challenges: "Building a scalable, modular ERP architecture that handles real-time data across multiple business domains — revenue, orders, purchases, and customer analytics — while maintaining a clean and intuitive user experience.",
  solution: "Utilized Next.js App Router for a robust, server-first architecture with TypeScript for type safety. Implemented a modular sidebar navigation, real-time analytics charts, and a responsive dashboard layout using shadcn/ui components and Tailwind CSS.",
  technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts"],
  features: [
    "Real-time KPI dashboard with revenue, sales, purchases, and customer metrics",
    "Interactive Revenue Analytics bar chart with monthly breakdown",
    "Live Today's Orders feed with status tracking (Completed, Processing, Pending)",
    "Modular sidebar with full ERP module navigation",
    "Light/Dark theme support with system preference detection",
    "Role-based authentication and admin panel"
  ],
  businessImpact: "Empowers enterprises with a centralized, real-time view of all business operations — reducing decision-making time and providing leadership with instant access to critical financial and operational metrics.",
  results: [
    "Delivered a fully functional, modular ERP dashboard with live data visualization",
    "Achieved a clean, professional UI suitable for enterprise-level deployment",
    "Built with scalable Next.js architecture ready for backend integration"
  ]
};
