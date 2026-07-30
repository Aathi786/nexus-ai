import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        NEXUS AI
      </div>

     <ul className={menuOpen ? "nav-links active" : "nav-links"}>

  <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>

  <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>

  <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>

  <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>

  <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

  {/* Mobile Resume */}

  <li className="mobile-resume">

    <a
      href="/Aathithya.pdf"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setMenuOpen(false)}
    >
      Resume
    </a>

  </li>

  <li className="mobile-download">

    <a
      href="/Aathithya.pdf"
      download="Aathithya.pdf"
      onClick={() => setMenuOpen(false)}
    >
      Download Resume
    </a>

  </li>

</ul>

<div className="resume-panel">

  <a
    href="/Aathithya.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-btn"
  >
    Resume
  </a>

  <a
    href="/Aathithya.pdf"
    download="Aathithya.pdf"
    className="download-btn"
  >
    Download PDF
  </a>

</div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
}

export default Navbar;