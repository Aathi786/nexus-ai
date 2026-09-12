import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFileAlt, FaArrowRight } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["hero", "about", "skills", "projects", "journey", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "journey", label: "JOURNEY" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar-container">
        {/* Brand */}
        <a href="#hero" className="navbar-brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-symbol">◆</span>
          <span className="brand-name">
            AATHITHYA <span className="brand-gold">R</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-item ${activeSection === link.id ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action / Social Controls */}
        <div className="navbar-actions">
          <a
            href="https://github.com/Aathi786"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-link"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/aathi77"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-link"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>

          <div className="nav-divider" />

          {/* Resume Quick Access */}
          <a
            href="/Aathithya.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
            title="View Resume PDF"
          >
            <FaFileAlt className="btn-icon" />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)}>
        <div className="mobile-nav-panel" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-panel-header">
            <div className="brand-name">
              AATHITHYA <span className="brand-gold">R</span>
            </div>
            <button
              className="mobile-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
            >
              <FaTimes />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`mobile-nav-item ${activeSection === link.id ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <FaArrowRight className="mobile-item-arrow" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-panel-footer">
            <div className="mobile-socials">
              <a
                href="https://github.com/Aathi786"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
                aria-label="GitHub"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/aathi77"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>

            <a
              href="/Aathithya.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-primary mobile-resume-cta"
              onClick={() => setMenuOpen(false)}
            >
              <FaFileAlt /> VIEW RESUME PDF
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;