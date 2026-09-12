import { FaGithub, FaLinkedin, FaArrowUp, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-top-gold-line"></div>

      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="footer-brand-title">
            AATHITHYA <span className="gold-gradient-text">R</span>
          </div>
          <p className="footer-role-text">
            Java Full Stack Developer | Entry-Level Software Engineer
          </p>
          <p className="footer-subtext">
            Architecting scalable Java backend microservices and responsive React interfaces.
          </p>
        </div>

        {/* Quick Nav Column */}
        <div className="footer-nav-col">
          <span className="footer-col-title">NAVIGATION</span>
          <ul className="footer-nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills Matrix</a></li>
            <li><a href="#featured-project">Featured Project</a></li>
            <li><a href="#projects">All Projects</a></li>
            <li><a href="#how-i-build">How I Build</a></li>
            <li><a href="#journey">Journey</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social & Connect Column */}
        <div className="footer-social-col">
          <span className="footer-col-title">CONNECT</span>
          <div className="footer-social-buttons">
            <a
              href="https://github.com/Aathi786"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-pill"
              aria-label="GitHub Profile"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/aathi77"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-pill"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:aathi4488@gmail.com"
              className="footer-social-pill"
              aria-label="Send Email"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="footer-back-to-top-btn"
            title="Scroll to top"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <FaArrowUp />
          </button>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom-bar">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} <strong>Aathithya R</strong>. All rights reserved.
        </p>
        <div className="footer-tech-signature">
          <span>Engineered with React 19, Three.js & Java Spirit</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
