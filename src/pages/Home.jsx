
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Services from "../sections/Services";
import WorkingProcess from "../sections/WorkingProcess";
import Testimonial from "../sections/Testimonial";
import FAQ from "../sections/FAQ";
import Contact from "../sections/Contact";
import SEOHelmet from "../components/common/SEOHelmet";
import Marquee from "../components/common/Marquee";
import CTA from "../components/common/CTA";

const Home = () => {
  return (
    <>
      <SEOHelmet title="Home | Boshunia" />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <WorkingProcess />
      <Testimonial />
      <CTA />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
