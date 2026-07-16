import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Offer from "./components/Offer";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);
  return (
    <>
      <Navbar />
      <Hero />
       <About />
       <Services />
       <Offer />
       <Testimonials />
        <FAQ />
  <Footer />
  <ScrollTop />
    </>
  );
}

export default App;