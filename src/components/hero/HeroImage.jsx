import Hero3DCanvas from "../3d/Hero3DCanvas";
import "./HeroImage.css";

function HeroImage() {
  return (
    <div className="hero-image-wrapper">
      {/* 3D Holographic Developer Core Canvas */}
      <Hero3DCanvas />

      {/* Subtle Orbital Scan Rings */}
      <div className="scan-ring ring1" aria-hidden="true"></div>
      <div className="scan-ring ring2" aria-hidden="true"></div>
      <div className="scan-ring ring3" aria-hidden="true"></div>
      <div className="scan-laser" aria-hidden="true"></div>

      {/* Developer Avatar Container */}
      <div className="avatar-frame">
        <img
          src="/avatar.png"
          alt="Aathithya R - Full-Stack Java Developer"
          className="avatar-img"
          loading="eager"
        />
        <div className="avatar-glass-overlay"></div>
      </div>

      {/* Clean Telemetry Micro-Badges */}
      <div className="hud-badge hud-top">
        <span className="hud-dot green"></span>
        <span>STATUS: AVAILABLE</span>
      </div>

      <div className="hud-badge hud-left">
        <span className="hud-dot cyan"></span>
        <span>JAVA 21 • SPRING</span>
      </div>

      <div className="hud-badge hud-right">
        <span className="hud-dot purple"></span>
        <span>REACT • REST APIs</span>
      </div>

      <div className="hud-badge hud-bottom">
        <span className="hud-dot green"></span>
        <span>ORACLE SQL • JPA</span>
      </div>
    </div>
  );
}

export default HeroImage;