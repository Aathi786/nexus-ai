import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFilePdf, FaDownload, FaAtom } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ onToggleGravity }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ["home", "about", "projects", "skills", "terminal", "contact"];
      const scrollPosition = window.scrollY + 140;

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
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar glass-panel">
        {/* Brand Logo */}
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-dot"></span>
          <span className="logo-text">AATHITHYA<span className="logo-highlight">.DEV</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Gravity Mode Trigger */}
          <button
            className="gravity-toggle-btn"
            onClick={onToggleGravity}
            title="Launch Interactive Zero-G Physics Sandbox"
            aria-label="Toggle Gravity Mode"
          >
            <FaAtom className="spin-icon" />
            <span>GRAVITY</span>
          </button>

          {/* Resume View & Download */}
          <div className="resume-group">
            <a
              href="/Aathithya.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume-view"
              title="View Resume in browser"
            >
              <FaFilePdf /> Resume
            </a>
            <a
              href="/Aathithya.pdf"
              download="Aathithya_FullStack_Resume.pdf"
              className="btn-resume-download"
              title="Download Resume PDF"
              aria-label="Download Resume PDF"
            >
              <FaDownload />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${menuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-actions">
          <button
            className="gravity-toggle-btn full-w"
            onClick={() => {
              setMenuOpen(false);
              onToggleGravity();
            }}
          >
            <FaAtom /> GRAVITY MODE
          </button>

          <a
            href="/Aathithya.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume-view full-w"
            onClick={() => setMenuOpen(false)}
          >
            <FaFilePdf /> View Resume
          </a>

          <a
            href="/Aathithya.pdf"
            download="Aathithya_FullStack_Resume.pdf"
            className="btn-resume-download-mobile"
            onClick={() => setMenuOpen(false)}
          >
            <FaDownload /> Download Resume PDF
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;