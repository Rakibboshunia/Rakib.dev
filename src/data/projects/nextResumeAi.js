import nextResumeImg from "../../assets/nextresume_dashboard.png";
import resumeLanding from "../../assets/Resume Ai/screencapture-next-resume-ai-virid-vercel-app-2026-07-16-23_28_36.png";
import resumeDashboard from "../../assets/Resume Ai/screencapture-next-resume-ai-virid-vercel-app-dashboard-2026-07-16-23_29_06.png";
import resumeAssistant from "../../assets/Resume Ai/screencapture-next-resume-ai-virid-vercel-app-dashboard-assistant-2026-07-16-23_29_37.png";
import resumeBilling from "../../assets/Resume Ai/screencapture-next-resume-ai-virid-vercel-app-dashboard-billing-2026-07-16-23_30_10.png";
import resumeCoverLetters from "../../assets/Resume Ai/screencapture-next-resume-ai-virid-vercel-app-dashboard-cover-letters-2026-07-16-23_29_43.png";
import resumeCreate from "../../assets/Resume Ai/screencapture-next-resume-ai-virid-vercel-app-dashboard-create-2026-07-16-23_29_20.png";
import resumeJobs from "../../assets/Resume Ai/screencapture-next-resume-ai-virid-vercel-app-dashboard-jobs-2026-07-16-23_29_49.png";
import resumeProfile from "../../assets/Resume Ai/screencapture-next-resume-ai-virid-vercel-app-dashboard-profile-2026-07-16-23_29_57.png";
import resumeResumes from "../../assets/Resume Ai/screencapture-next-resume-ai-virid-vercel-app-dashboard-resumes-2026-07-16-23_29_13.png";
import resumeSettings from "../../assets/Resume Ai/screencapture-next-resume-ai-virid-vercel-app-dashboard-settings-2026-07-16-23_30_04.png";
import resumeTemplates from "../../assets/Resume Ai/screencapture-next-resume-ai-virid-vercel-app-dashboard-templates-2026-07-16-23_29_31.png";
import resumeLogin from "../../assets/Resume Ai/screencapture-next-resume-ai-virid-vercel-app-login-2026-07-16-23_30_18.png";

export const nextResumeAi = {
  id: 16,
  title: "NextResume AI: AI Resume Builder",
  category: "SaaS & Web App",
  badgeLabel: "AI PLATFORM",
  role: "Full Stack Developer",
  year: "2026",
  description: "An AI-powered resume builder featuring a multi-step form, real-time preview, and premium dark-themed UI.",
  tags: ["#Next.js", "#TailwindCSS", "#Prisma", "#NextAuth"],
  image: nextResumeImg,
  galleryImages: [
    resumeLanding,
    resumeLogin,
    resumeDashboard,
    resumeResumes,
    resumeCreate,
    resumeTemplates,
    resumeAssistant,
    resumeCoverLetters,
    resumeJobs,
    resumeProfile,
    resumeSettings,
    resumeBilling,
  ],
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
};
