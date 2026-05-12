import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Services from "../sections/Services";
import Testimonial from "../sections/Testimonial";
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
      <Testimonial />
      <CTA />
      <Contact />
    </>
  );
};

export default Home;