import { useState } from "react";
import { FaGithub, FaShieldAlt, FaUsers, FaGraduationCap, FaExternalLinkAlt, FaRobot } from "react-icons/fa";
import "./OtherProjects.css";

const OTHER_PROJECTS = [
  {
    num: "01",
    id: "crs",
    title: "Course Registration System",
    category: "Spring Boot Enterprise",
    tagline: "Role-based academic course management with automated prerequisite validation and relational scheduling.",
    tech: ["Spring Boot", "Spring Security", "Oracle Database", "REST APIs", "Spring Data JPA", "Hibernate"],
    whatItDoes: "Empowers students to register for semester courses, manages seat capacities, and prevents scheduling conflicts.",
    whatIBuilt: "Engineered a Spring Boot backend with role-based JWT access (Student / Faculty / Admin), prerequisite checks, and Oracle SQL persistence.",
    highlights: [
      "Role-Based Access Control (Student / Faculty / Admin)",
      "Automated Prerequisite & Seat Capacity Engine",
      "Spring Data JPA with Oracle Relational Persistence",
      "RESTful API Architecture & Exception Handling",
    ],
    github: "https://github.com/Aathi786/Course_Registration_System",
    metric: "RBAC Security",
    icon: <FaGraduationCap />,
  },
  {
    num: "02",
    id: "ems",
    title: "Employee Management System",
    category: "Java EE & Persistence",
    tagline: "Full-cycle workforce management system with ACID-compliant database persistence and session tracking.",
    whatItDoes: "Streamlines employee record tracking, department designations, payroll metadata, and administrative operations.",
    whatIBuilt: "Architected a classic Java EE application featuring modular MVC separation, automated JDBC transaction pooling, and session control.",
    tech: ["Java", "JSP", "Servlet", "JDBC", "Oracle SQL", "HTML/CSS"],
    highlights: [
      "Full CRUD Operations on Employee Records",
      "ACID-Compliant JDBC Connection Management",
      "Session-Based Authentication & Role Privileges",
      "Department & Designation Hierarchy Management",
    ],
    github: "https://github.com/Aathi786/Employee-Management-System",
    metric: "ACID Transactions",
    icon: <FaUsers />,
  },
  {
    num: "03",
    id: "quiz",
    title: "Quiz Management System",
    category: "Java EE Dynamic Web",
    tagline: "Interactive assessment platform with dynamic question sequencing and automated real-time score evaluation.",
    whatItDoes: "Serves randomized question banks, tracks timed tests, and computes instant result scorecards.",
    whatIBuilt: "Developed a stateful Java web evaluation engine tracking test progression in real-time and persisting scores to Oracle database tables.",
    tech: ["Java", "JSP", "Servlet", "Oracle DB", "JavaScript", "HTML/CSS"],
    highlights: [
      "Real-Time Automated Score Calculation",
      "Dynamic Question Categorization & Randomization",
      "User Result History & Performance Tracking",
      "Admin Assessment Creation & Editing Interface",
    ],
    github: "https://github.com/Aathi786/Quizz_Game",
    metric: "Real-Time Scoring",
    icon: <FaShieldAlt />,
  },
  {
    num: "04",
    id: "nexus",
    title: "Nexus AI Assistant",
    category: "AI & Modern Web",
    tagline: "Intelligent developer assistant interface featuring interactive full-stack conversational workflows.",
    whatItDoes: "Provides real-time interactive developer query processing and dynamic prompt response visualization.",
    whatIBuilt: "Engineered responsive client architecture, asynchronous API payload streaming, and clean state synchronization.",
    tech: ["React", "JavaScript", "REST APIs", "Modern CSS", "Vite"],
    highlights: [
      "Asynchronous Response Streaming & Parsing",
      "Dynamic Query Interface & Prompt Handling",
      "Component State Synchronization",
      "Responsive Dark-Themed UI Architecture",
    ],
    github: "https://github.com/Aathi786/nexus-ai",
    metric: "React + AI Stream",
    icon: <FaRobot />,
  },
];

function OtherProjects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = OTHER_PROJECTS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "spring") return p.category.includes("Spring Boot");
    if (filter === "javaee") return p.category.includes("Java EE");
    return true;
  });

  return (
    <section className="other-projects-section section-container" id="projects">
      {/* Direct Filter Tabs without large redundant headers */}
      <div className="other-projects-filters">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Applications ({OTHER_PROJECTS.length})
        </button>
        <button
          className={`filter-btn ${filter === "spring" ? "active" : ""}`}
          onClick={() => setFilter("spring")}
        >
          Spring Boot & Security
        </button>
        <button
          className={`filter-btn ${filter === "javaee" ? "active" : ""}`}
          onClick={() => setFilter("javaee")}
        >
          Java EE & Servlets
        </button>
      </div>

      {/* Projects Grid */}
      <div className="other-projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="case-study-card gold-panel interactive-card">
            {/* Card Top */}
            <div className="case-study-top">
              <div className="case-num-wrap">
                <span className="case-num">{project.num}</span>
                <span className="case-category">{project.category}</span>
              </div>
              <div className="case-icon-box">{project.icon}</div>
            </div>

            {/* Title & Tagline */}
            <h3 className="case-title">{project.title}</h3>
            <p className="case-tagline">{project.tagline}</p>

            {/* Tech Stack Chips */}
            <div className="case-tech-list">
              {project.tech.map((t) => (
                <span key={t} className="case-tech-chip">
                  {t}
                </span>
              ))}
            </div>

            {/* Short Scannable What it does / What I built */}
            <div className="case-summary-box">
              <p className="case-summary-line">
                <strong>What it does:</strong> {project.whatItDoes}
              </p>
              <p className="case-summary-line">
                <strong>What I built:</strong> {project.whatIBuilt}
              </p>
            </div>

            {/* Card Footer Actions */}
            <div className="case-card-footer">
              <div className="case-metric-tag">
                <span className="metric-dot"></span>
                <span>{project.metric}</span>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="case-github-btn"
                title={`View ${project.title} on GitHub`}
              >
                <FaGithub />
                <span>GITHUB REPO</span>
                <FaExternalLinkAlt className="ext-icon-sm" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OtherProjects;
