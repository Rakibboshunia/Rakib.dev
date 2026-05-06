import Hero from "../sections/Hero";
import About from "../sections/About";
import SEOHelmet from "../components/common/SEOHelmet";
import Marquee from "../components/common/Marquee";

const Home = () => {
  return (
    <>
      <SEOHelmet title="Home | Boshunia" />
      <Hero />
      <About />
      <Marquee />
    </>
  );
};

export default Home;