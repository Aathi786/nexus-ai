import StatusCard from "./StatusCard";
import SkillCard from "./SkillCard";
import TechFloatingGlobe from "../3d/TechFloatingGlobe";
import "./Dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard section-container" id="about">
      <div className="section-header">
        <span className="section-tag">Developer Profile</span>
        <h2 className="section-title">ABOUT & <span>BACKGROUND</span></h2>
        <p className="section-subtitle">
          Passionate about building dependable software systems, designing clean database schemas, and delivering seamless user experiences.
        </p>
      </div>

      <div className="dashboard-grid">
        {/* Left: Professional Background & Education */}
        <StatusCard />

        {/* Center: 3D Interactive Technology Sphere */}
        <div className="dashboard-globe-card glass-panel">
          <div className="globe-header">
            <span className="globe-title">STACK ARCHITECTURE</span>
            <span className="live-ping">● 3D INTERACTIVE</span>
          </div>
          <TechFloatingGlobe />
          <div className="globe-footer">
            <span>Primary Ecosystem</span>
            <span className="glow-tag">Java 21 • Spring Boot • React • Oracle</span>
          </div>
        </div>

        {/* Right: Core Engineering Competencies */}
        <SkillCard />
      </div>
    </section>
  );
}

export default Dashboard;