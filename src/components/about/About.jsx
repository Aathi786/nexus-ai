import { FaCode, FaShieldAlt, FaDatabase, FaLayerGroup, FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import "./About.css";

function About() {
  const engineeringPillars = [
    {
      id: "fullstack",
      icon: <FaLayerGroup />,
      title: "Full-Stack Synergy",
      description:
        "Connecting dynamic React user interfaces with robust Spring Boot REST services through clean API contracts and state synchronization.",
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
      title: "Polyglot Persistence",
      description:
        "Designing document schemas in MongoDB Atlas for rapid social data, paired with relational SQL database design in Oracle.",
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
      {/* Background Decorative Gold Accents */}
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
        {/* Left Narrative Column */}
        <div className="about-narrative-card gold-panel">
          <div className="narrative-badge">
            <FaGraduationCap className="badge-icon" />
            <span>B.Sc. COMPUTER SCIENCE GRADUATE</span>
          </div>

          <h3 className="narrative-headline">
            Driven by clean architecture, security, and real-world execution.
          </h3>

          <div className="narrative-paragraphs">
            <p>
              I am a <strong>B.Sc. Computer Science graduate</strong> and entry-level software engineer focused on Java full-stack web development. I specialize in building complete, production-ready applications from the database up to the user interface.
            </p>
            <p>
              My recent engineering work centers on pairing <strong>React</strong> with <strong>Spring Boot</strong>, implementing end-to-end authentication via <strong>Spring Security & JWT</strong>, and managing cloud-persisted data in <strong>MongoDB Atlas</strong>.
            </p>
          </div>

          {/* Quick Truthful Credentials */}
          <div className="narrative-checkpoints">
            <div className="checkpoint-item">
              <FaCheckCircle className="check-icon" />
              <span>Fresher actively seeking developer / software engineering roles</span>
            </div>
            <div className="checkpoint-item">
              <FaCheckCircle className="check-icon" />
              <span>Proven track record building complete full-stack web apps</span>
            </div>
            <div className="checkpoint-item">
              <FaCheckCircle className="check-icon" />
              <span>Hands-on with REST APIs, JWT pipelines, and NoSQL/SQL databases</span>
            </div>
          </div>

          <div className="narrative-footer-line">
            <div className="gold-line"></div>
          </div>
        </div>

        {/* Right Engineering Pillars Grid */}
        <div className="about-pillars-grid">
          {engineeringPillars.map((pillar, index) => (
            <div key={pillar.id} className="pillar-card glass-panel">
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
    </section>
  );
}

export default About;
