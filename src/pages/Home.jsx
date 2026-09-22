import { useEffect } from "react";
import Lenis from "lenis";
import FlythroughCanvas from "../components/flythrough/FlythroughCanvas";
import CustomCursor from "../components/ui/CustomCursor";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import FeaturedInstagram from "../components/projects/FeaturedInstagram";
import OtherProjects from "../components/projects/OtherProjects";
import ProblemSolving from "../components/problem_solving/ProblemSolving";
import Journey from "../components/journey/Journey";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";

function Home() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
      });

      let frameId;
      function raf(time) {
        lenis.raf(time);
        frameId = requestAnimationFrame(raf);
      }
      frameId = requestAnimationFrame(raf);

      // Global anchor interceptor for Lenis smooth scrolling
      const handleAnchorClick = (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;
        const targetId = anchor.getAttribute("href");
        if (targetId && targetId !== "#") {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl, { offset: -80 });
          }
        }
      };

      document.addEventListener("click", handleAnchorClick);

      return () => {
        cancelAnimationFrame(frameId);
        document.removeEventListener("click", handleAnchorClick);
        lenis.destroy();
      };
    }
  }, []);

  // Lightweight global scroll-stop detector for subtle cinematic text depth
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let scrollTimeout;
    const handleScrollMotion = () => {
      document.body.classList.add("is-scrolling");
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove("is-scrolling");
      }, 150);
    };

    window.addEventListener("scroll", handleScrollMotion, { passive: true });

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScrollMotion);
      document.body.classList.remove("is-scrolling");
    };
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* 1. Custom Interactive Luxury Cursor (Desktop) */}
      <CustomCursor />

      {/* 2. 3D Camera Flythrough Background (replaces flat 2D canvas) */}
      <FlythroughCanvas />

      {/* 3. Luxury Floating Navbar */}
      <Navbar />

      <main>
        {/* 1. Cinematic Hero with 3D Software Architecture */}
        <Hero />

        {/* 2. Immersive About Section */}
        <About />

        {/* 3. Tech Stack / 3D Constellation Skills Matrix */}
        <Skills />

        {/* 4. Flagship Hero Project: Instagram Full-Stack App */}
        <FeaturedInstagram />

        {/* 5. All Other Featured Systems */}
        <OtherProjects />

        {/* 6. How I Build / Problem Solving Methodology */}
        <ProblemSolving />

        {/* 7. Development Progression Journey */}
        <Journey />

        {/* 8. Dramatic Contact CTA & Direct Messaging */}
        <Contact />
      </main>

      {/* 9. Minimal Luxury Footer */}
      <Footer />
    </div>
  );
}

export default Home;