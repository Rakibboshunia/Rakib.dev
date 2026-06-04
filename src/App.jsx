
import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import RootLayout from "./components/layout/RootLayout";
import Preloader from "./components/common/Preloader";
import PageWrapper from "./components/common/PageWrapper";

// Lazy-loaded page components for bundle size optimization
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./sections/About"));
const Services = lazy(() => import("./sections/Services"));
const Projects = lazy(() => import("./sections/Projects"));
const SkillsExperience = lazy(() => import("./pages/SkillsExperience"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const Contact = lazy(() => import("./sections/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show preloader for 1.8 seconds on initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <Suspense fallback={<div className="min-h-screen bg-transparent" />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="services" element={<PageWrapper><Services /></PageWrapper>} />
              <Route path="projects" element={<PageWrapper><Projects /></PageWrapper>} />
              <Route path="projects/:id" element={<PageWrapper><ProjectDetails /></PageWrapper>} />
              <Route path="skills" element={<PageWrapper><SkillsExperience /></PageWrapper>} />
              <Route path="contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
}

export default App;
