import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import CustomCursor from "../common/CustomCursor";
import ScrollToTop from "../common/ScrollToTop";
import InteractiveBackground from "../common/InteractiveBackground";
import PageTransition from "../common/PageTransition";
import { Toaster } from "react-hot-toast";
import { useTheme } from "../../context/ThemeContext";

const RootLayout = () => {
  const location = useLocation();
  const { theme: currentTheme } = useTheme();

  return (
    <>
      <CustomCursor />
      <InteractiveBackground />
      <ScrollToTop />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: currentTheme === 'dark' ? '#111' : '#fff',
            color: currentTheme === 'dark' ? '#fff' : '#333',
            border: currentTheme === 'dark' ? '1px solid #333' : '1px solid #eaeaea',
          },
        }}
      />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="min-h-screen pt-20"
        >
          <PageTransition>
            <Outlet />
          </PageTransition>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default RootLayout;
