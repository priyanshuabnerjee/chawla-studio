import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import About from "./components/About";
import FeaturedStory from "./components/FeaturedStory";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Quote />
      <About />
      <FeaturedStory />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingContact />

    </>
  );
}