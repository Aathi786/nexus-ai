import { useState, useRef, useEffect } from "react";
import {
  FaCode,
  FaShieldAlt,
  FaDatabase,
  FaLayerGroup,
  FaGraduationCap,
  FaCheckCircle,
} from "react-icons/fa";
import "./About.css";

function About() {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouch(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY, opacity: 0.25 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
  };

  const engineeringPillars = [
    {
      id: "fullstack",
      icon: <FaLayerGroup />,
      title: "Full-Stack Integration",
      description:
        "Connecting React user interfaces with Spring Boot REST services through clean API contracts and state synchronization.",
    },
    {
      id: "security",
      icon: <FaShieldAlt />,
      title: "Spring Security & JWT",
      description:
        "Implementing stateless JWT authentication filters, CORS configurations, password hashing, and role-based access control.",
    },
    {
      id: "database",
      icon: <FaDatabase />,
      title: "Database Architecture",
      description:
        "Designing document schemas in MongoDB Atlas for rapid social data, paired with relational database design in Oracle.",
    },
    {
      id: "clean-arch",
      icon: <FaCode />,
      title: "Layered MVC Architecture",
      description:
        "Structuring projects into clean controller, service, repository, and model layers to maintain separation of concerns.",
    },
  ];

  return (
    <section className="about-section section-container" id="about">
      {/* Background Subtle Ambient Gold Lighting */}
      <div className="about-bg-decoration" aria-hidden="true">
        <div className="about-gold-glow"></div>
      </div>

      <div className="section-header">
        <span className="section-tag">ENGINEERING PROFILE</span>
        <h2 className="section-title">
          ARCHITECTING <span>FULL-STACK SYSTEMS</span>
        </h2>
        <p className="section-subtitle">
          Bridging modern frontend reactivity with enterprise Java backend stability and secure cloud persistence.
        </p>
      </div>

      <div className="about-grid">
        {/* Left Column: Interactive 3D Profile Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="about-profile-card gold-panel"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* Dynamic Specular Gold Glare */}
          <div
            className="card-specular-glare"
            style={{
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(212, 175, 55, ${tilt.opacity}) 0%, transparent 65%)`,
            }}
            aria-hidden="true"
          />

          <div className="profile-portrait-frame">
            <img
              src="/avatar.png"
              alt="Aathithya R - Java Full Stack Developer"
              className="profile-portrait-img"
              loading="lazy"
            />
            <div className="portrait-rim-glow" aria-hidden="true"></div>
          </div>

          <div className="profile-card-meta">
            <div className="profile-badge">
              <FaGraduationCap className="badge-icon" />
              <span>B.SC. COMPUTER SCIENCE</span>
            </div>

            <h3 className="profile-name">Aathithya R</h3>
            <p className="profile-role">Java Full Stack Developer</p>

            <div className="profile-checkpoints">
              <div className="profile-check-item">
                <FaCheckCircle className="check-icon" />
                <span>Fresher seeking software engineering roles</span>
              </div>
              <div className="profile-check-item">
                <FaCheckCircle className="check-icon" />
                <span>Full-stack application development</span>
              </div>
              <div className="profile-check-item">
                <FaCheckCircle className="check-icon" />
                <span>React, Spring Boot, JWT & MongoDB Atlas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Engineering Pillars */}
        <div className="about-content-column">
          {/* Top Narrative Card */}
          <div className="about-narrative-box gold-panel">
            <h3 className="narrative-headline">
              Driven by clean architecture, security, and practical execution.
            </h3>
            <div className="narrative-body">
              <p>
                I am a <strong>B.Sc. Computer Science graduate</strong> and entry-level software engineer focused on Java full-stack web development. I engineer end-to-end applications from the database up to the user interface.
              </p>
              <p>
                My core stack centers on pairing <strong>React</strong> with <strong>Spring Boot</strong>, implementing stateless authentication via <strong>Spring Security & JWT</strong>, and managing cloud persistence in <strong>MongoDB Atlas</strong> and <strong>Oracle</strong>.
              </p>
            </div>
          </div>

          {/* Bottom 2x2 Pillars Grid */}
          <div className="about-pillars-grid">
            {engineeringPillars.map((pillar, index) => (
              <div key={pillar.id} className="pillar-card glass-panel interactive-card">
                <div className="pillar-header">
                  <div className="pillar-icon-box">{pillar.icon}</div>
                  <span className="pillar-index">0{index + 1}</span>
                </div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;