import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Scroll listener to update the active nav indicator as the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "portfolio", "about", "services", "contact"];
      const scrollPosition = window.scrollY + 160; // Offset buffer for header

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 selection:text-white antialiased overflow-x-hidden">
      
      {/* Interactive Fluid Cursor Splash */}
      <SplashCursor />

      {/* Sticky Navigation Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Sections */}
      <main>
        {/* Home / Hero Section */}
        <Hero 
          onSeeWork={() => scrollToSection("portfolio")} 
          onGetInTouch={() => scrollToSection("contact")} 
        />

        {/* Portfolio / Case Studies Section */}
        <Portfolio />

        {/* About Story & Toolkit Section */}
        <About />

        {/* Freelance Services & Custom Scope Section */}
        <Services onQuoteRequested={() => scrollToSection("contact")} />

        {/* Social Proof / Client Testimonials Section */}
        <Testimonials />

        {/* Interactive Contact & Direct channels Section */}
        <Contact />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
