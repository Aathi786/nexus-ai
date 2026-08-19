import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrap">
      <div className="footer-container">
        {/* Brand & Stack */}
        <div className="footer-brand-col">
          <h3 className="footer-name">Aathithya R</h3>
          <p className="footer-role">Full-Stack Java Developer</p>
          <p className="footer-tech-stack">Java • Spring Boot • React • Oracle SQL</p>
        </div>

        {/* Quick Links */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Direct Connect */}
        <div className="footer-resources-col">
          <h4 className="footer-col-title">Connect</h4>
          <div className="footer-socials">
            <a
              href="https://github.com/Aathi786"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              aria-label="GitHub Profile"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aathi77"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="mailto:aathi4488@gmail.com"
              className="footer-social-btn"
              aria-label="Email Aathithya"
            >
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <p className="copyright-text">
          © {new Date().getFullYear()} Aathithya R. Designed with clean engineering standards.
        </p>

        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          title="Back to Top"
          aria-label="Scroll back to top"
        >
          <FaChevronUp /> Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
