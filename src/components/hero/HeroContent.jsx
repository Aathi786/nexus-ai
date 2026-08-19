import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaGithub, FaLinkedin, FaCode, FaPaperPlane, FaFilePdf, FaAtom } from "react-icons/fa";
import Stats from "./Stats";
import "./HeroContent.css";

function HeroContent({ onToggleGravity }) {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full-Stack Java Developer",
        "Spring Boot & Microservices",
        "React & Modern Web Apps",
        "Backend Architecture",
      ],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1800,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="hero-content">
      {/* Status Pill */}
      <div className="hero-badge">
        <span className="live-dot"></span>
        <span>OPEN FOR ROLES • 2025 GRADUATE</span>
      </div>

      {/* Main Name Heading */}
      <h1 className="hero-name">
        AATHITHYA R
      </h1>

      {/* Professional Role with Typed Animation */}
      <h2 className="hero-roles">
        <span className="role-prefix">&gt; </span>
        <span ref={typedRef} className="role-typed">Full-Stack Java Developer</span>
      </h2>

      {/* Supporting Value Proposition */}
      <p className="hero-bio">
        I build scalable backend systems and modern web applications using Java, Spring Boot, React and Oracle. Focused on robust API architecture, database integrity, and high-performance user interfaces.
      </p>

      {/* Primary CTA Buttons */}
      <div className="hero-cta-group">
        <a href="#projects" className="btn-primary">
          <FaCode /> View Projects
        </a>
        <a href="#contact" className="btn-secondary">
          <FaPaperPlane /> Get in Touch
        </a>
        <a
          href="/Aathithya.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glass"
          title="Open Resume in new tab"
        >
          <FaFilePdf /> Resume
        </a>
      </div>

      {/* Social Links & Interactive Gravity Trigger */}
      <div className="hero-social-strip">
        <div className="social-links">
          <a
            href="https://github.com/Aathi786"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="GitHub Profile"
            title="GitHub: Aathi786"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/aathi77"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="LinkedIn Profile"
            title="LinkedIn: aathi77"
          >
            <FaLinkedin />
          </a>
        </div>

        {onToggleGravity && (
          <button
            className="hero-gravity-pill"
            onClick={onToggleGravity}
            title="Launch Interactive Zero-G Physics Sandbox"
          >
            <FaAtom className="spin-icon" />
            <span>Gravity Mode</span>
          </button>
        )}
      </div>

      {/* Key Metrics Bar */}
      <Stats />
    </div>
  );
}

export default HeroContent;