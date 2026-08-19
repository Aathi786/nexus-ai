import { useState, useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaCheck, FaServer, FaChevronDown, FaChevronUp, FaLayerGroup, FaShieldAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });
  const [expanded, setExpanded] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTilt({ x: rotateX, y: rotateY });
    setSpotlight({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className={`project-card glass-panel ${project.isFeatured ? "featured-project-card" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${tilt.x !== 0 ? -4 : 0}px)`,
      }}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <div
        className="card-spotlight"
        style={{
          background: `radial-gradient(circle 240px at ${spotlight.x}px ${spotlight.y}px, rgba(0, 229, 255, 0.12), transparent 80%)`,
          opacity: spotlight.opacity,
        }}
      />

      {/* Card Header & Badges */}
      <div className="card-top">
        <div className="project-category-chip">
          {project.isFeatured ? <FaShieldAlt /> : <FaServer />}
          <span>{project.category}</span>
        </div>

        {project.isFeatured ? (
          <span className="featured-badge">
            ★ {project.badgeText}
          </span>
        ) : (
          <span className="project-status">
            <span className="status-dot"></span> {project.status}
          </span>
        )}
      </div>

      {/* Project Title */}
      <h3 className="project-title">{project.title}</h3>

      {/* Short Tagline */}
      <p className="project-tagline">{project.tagline}</p>

      {/* Tech Tags */}
      <div className="project-tags">
        {project.tech.map((t, idx) => (
          <span key={idx} className="tech-badge">
            {t}
          </span>
        ))}
      </div>

      {/* Visual Architecture Flow for Featured Project */}
      {project.archFlow && (
        <div className="arch-flow-box">
          <div className="arch-flow-header">
            <FaLayerGroup />
            <span>ARCHITECTURE FLOW</span>
          </div>
          <div className="arch-flow-steps">
            {project.archFlow.map((step, idx) => (
              <span key={idx} className="arch-step">
                {step}
                {idx < project.archFlow.length - 1 && <span className="arch-arrow">→</span>}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Key Features Summary List */}
      <div className="project-features">
        <h4 className="features-title">Key Implementations:</h4>
        {project.features.slice(0, 3).map((feat, idx) => (
          <div key={idx} className="feature-line">
            <span className="check-icon"><FaCheck /></span>
            <span>{feat}</span>
          </div>
        ))}
      </div>

      {/* Expandable Architecture Details View */}
      {expanded && (
        <div className="project-expanded-panel">
          <div className="detail-block">
            <span className="detail-label">PROBLEM STATEMENT:</span>
            <p className="detail-text">{project.problem}</p>
          </div>

          <div className="detail-block">
            <span className="detail-label">ENGINEERING SOLUTION:</span>
            <p className="detail-text">{project.solution}</p>
          </div>

          <div className="detail-block">
            <span className="detail-label">ARCHITECTURE OVERVIEW:</span>
            <p className="detail-text">{project.architecture}</p>
          </div>
        </div>
      )}

      {/* Footer & Action Controls */}
      <div className="card-footer">
        <button
          type="button"
          className="btn-toggle-details"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <span>{expanded ? "Hide Details" : "View Architecture Details"}</span>
          {expanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-github"
          aria-label={`View ${project.title} source on GitHub`}
        >
          <FaGithub />
          <span>Source Code</span>
          <FaExternalLinkAlt className="ext-icon" />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;