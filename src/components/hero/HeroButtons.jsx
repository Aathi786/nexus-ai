import { FaCode, FaPaperPlane, FaFilePdf } from "react-icons/fa";
import "./HeroButtons.css";

function HeroButtons() {
  return (
    <div className="hero-btn-container">
      <a href="#projects" className="btn-primary">
        <FaCode /> Explore Vault
      </a>
      <a href="#contact" className="btn-secondary">
        <FaPaperPlane /> Transmit Message
      </a>
      <a
        href="/Aathithya.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-glass"
      >
        <FaFilePdf /> Resume
      </a>
    </div>
  );
}

export default HeroButtons;
