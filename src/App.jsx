
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import SkillsExperience from "./pages/SkillsExperience";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";
import Preloader from "./components/common/Preloader";
import PageWrapper from "./components/common/PageWrapper";

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
      )}
    </>
  );
}

export default App;
