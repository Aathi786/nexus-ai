import { FaGithub, FaLinkedin, FaDownload, FaArrowDown, FaShieldAlt, FaServer, FaDatabase, FaReact } from "react-icons/fa";
import Hero3DArchitecture from "./Hero3DArchitecture";
import "./Hero.css";

function Hero() {
  const scrollToFeatured = (e) => {
    e.preventDefault();
    const el = document.getElementById("featured-project");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Background Architectural 3D Centerpiece */}
      <div className="hero-3d-wrapper">
        <Hero3DArchitecture />
      </div>

      <div className="hero-container">
        {/* Top Status & Role Pill */}
        <div className="hero-pill-badge">
          <span className="live-pulse-dot"></span>
          <span className="pill-text">JAVA FULL STACK DEVELOPER • READY FOR OPPORTUNITIES</span>
        </div>

        {/* Cinematic Main Typography */}
        <div className="hero-typography">
          <h1 className="hero-title">
            <span className="hero-title-first">AATHITHYA</span>
            <span className="hero-title-last gold-gradient-text"> R</span>
          </h1>

          <p className="hero-role-subtitle">
            JAVA FULL STACK DEVELOPER
          </p>

          <p className="hero-description">
            Builds scalable full-stack web applications using Java, Spring Boot, React, Spring Security, JWT, and modern databases.
          </p>
        </div>

        {/* Primary & Secondary CTAs */}
        <div className="hero-cta-group">
          <a
            href="#featured-project"
            onClick={scrollToFeatured}
            className="btn-gold-primary hero-btn"
          >
            <span>EXPLORE MY WORK</span>
            <FaArrowDown className="cta-arrow" />
          </a>

          <a
            href="/Aathithya.pdf"
            download="Aathithya_FullStack_Resume.pdf"
            className="btn-gold-secondary hero-btn"
            title="Download PDF Resume"
          >
            <FaDownload />
            <span>DOWNLOAD RESUME</span>
          </a>

          <div className="hero-social-links">
            <a
              href="https://github.com/Aathi786"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aathi77"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Technical Competency Matrix Highlights (No fake stats) */}
        <div className="hero-highlights-bar">
          <div className="highlight-item">
            <div className="highlight-icon-wrap">
              <FaReact />
            </div>
            <div className="highlight-info">
              <span className="highlight-label">FRONTEND</span>
              <span className="highlight-val">React + Modern Web</span>
            </div>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon-wrap">
              <FaServer />
            </div>
            <div className="highlight-info">
              <span className="highlight-label">BACKEND</span>
              <span className="highlight-val">Java + Spring Boot</span>
            </div>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon-wrap">
              <FaShieldAlt />
            </div>
            <div className="highlight-info">
              <span className="highlight-label">SECURITY</span>
              <span className="highlight-val">Spring Security + JWT</span>
            </div>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon-wrap">
              <FaDatabase />
            </div>
            <div className="highlight-info">
              <span className="highlight-label">DATABASE</span>
              <span className="highlight-val">MongoDB Atlas + Oracle</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Prompt Indicator */}
      <div className="hero-scroll-indicator" onClick={scrollToFeatured}>
        <span className="scroll-text">SCROLL TO DISCOVER</span>
        <div className="scroll-line-gold"></div>
      </div>
    </section>
  );
}

export default Hero;