import { useState } from "react";
import { FaGithub, FaShieldAlt, FaUsers, FaGraduationCap, FaExternalLinkAlt, FaCode, FaCheck } from "react-icons/fa";
import "./OtherProjects.css";

const OTHER_PROJECTS = [
  {
    num: "01",
    id: "crs",
    title: "Course Registration System",
    category: "Spring Boot Enterprise",
    tagline: "Role-based academic course management with automated prerequisite validation and relational scheduling.",
    tech: ["Spring Boot", "Spring Security", "Oracle Database", "REST APIs", "Spring Data JPA", "Hibernate"],
    description:
      "Enterprise web application empowering students to register for semester courses, manage academic schedules, and prevent timing conflicts with role-based security access controls.",
    architecture:
      "Layered MVC architecture utilizing Spring Security filter chains for role authorization (Student / Faculty / Admin), JPA repositories for relational persistence, and Oracle SQL.",
    highlights: [
      "Role-Based Access Control (Student / Faculty / Admin)",
      "Spring Security JWT & Session Protection",
      "Course Capacity & Prerequisite Validation Engine",
      "Spring Data JPA with Oracle SQL Persistence",
    ],
    github: "https://github.com/Aathi786/Course_Registration_System",
    metric: "RBAC Security",
    icon: <FaGraduationCap />,
  },
  {
    num: "02",
    id: "ems",
    title: "Employee Management System",
    category: "Java EE & Relational Persistence",
    tagline: "Full-cycle workforce management system with ACID-compliant database persistence and session tracking.",
    tech: ["Java", "JSP", "Servlet", "JDBC", "Oracle SQL", "HTML/CSS"],
    description:
      "Enterprise web application engineered to manage workforce records, department hierarchies, and administrative privileges with complete CRUD transactional workflows.",
    architecture:
      "Classic Java EE MVC separation with Servlets as controllers, JSP for dynamic templating, and DAO design patterns managing JDBC connection pools with Oracle database.",
    highlights: [
      "Complete CRUD Operations on Employee Profiles",
      "ACID-Compliant JDBC Connection Management",
      "Session-Based User Authentication & Protection",
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
    category: "Java EE Web Platform",
    tagline: "Interactive assessment platform with dynamic question sequencing and automated real-time score evaluation.",
    tech: ["Java", "JSP", "Servlet", "Oracle DB", "JavaScript", "HTML/CSS"],
    description:
      "Automated evaluation platform featuring randomized question sequencing, timed assessment sessions, question categorization, and performance history reports.",
    architecture:
      "Stateful session-based architecture tracking active quiz progressions in real-time and persisting final scorecards to Oracle relational tables.",
    highlights: [
      "Automated Real-Time Score Calculation Engine",
      "Dynamic Question Categorization & Randomization",
      "User Result History & Performance Reporting",
      "Admin Assessment Creation & Editing Interface",
    ],
    github: "https://github.com/Aathi786/Quizz_Game",
    metric: "Real-Time Scoring",
    icon: <FaShieldAlt />,
  },
  {
    num: "04",
    id: "nexus",
    title: "Nexus AI Developer Portfolio",
    category: "Modern React & 3D Web",
    tagline: "High-performance personal developer portfolio featuring Three.js 3D software architectures and black + gold luxury aesthetics.",
    tech: ["React 19", "Three.js", "GSAP", "Vite", "EmailJS", "Custom CSS"],
    description:
      "Cinematic personal developer portfolio engineered with responsive Three.js hardware-accelerated 3D systems, interactive technology matrix, and integrated EmailJS dispatch.",
    architecture:
      "Modular component architecture with custom WebGL canvas lifecycle management, smooth Lenis scrolling, and responsive luxury styling.",
    highlights: [
      "Interactive 3D Software Architecture Centerpiece",
      "Responsive Orbiting Technology Matrix",
      "Integrated EmailJS Direct Dispatch Channel",
      "Mobile-Optimized Luxury Black + Gold Design System",
    ],
    github: "https://github.com/Aathi786/nexus-ai",
    metric: "Three.js + React",
    icon: <FaCode />,
  },
];

function OtherProjects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = OTHER_PROJECTS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "spring") return p.category.includes("Spring Boot");
    if (filter === "javaee") return p.category.includes("Java EE");
    if (filter === "react") return p.category.includes("React");
    return true;
  });

  return (
    <section className="other-projects-section section-container" id="projects">
      <div className="section-header">
        <span className="section-tag">ENGINEERING PORTFOLIO</span>
        <h2 className="section-title">
          MORE <span>FEATURED SYSTEMS</span>
        </h2>
        <p className="section-subtitle">
          Enterprise Java applications, Spring Boot architectures, and relational database systems built from scratch.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="other-projects-filters">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Systems ({OTHER_PROJECTS.length})
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
        <button
          className={`filter-btn ${filter === "react" ? "active" : ""}`}
          onClick={() => setFilter("react")}
        >
          React & Creative Tech
        </button>
      </div>

      {/* Projects Grid */}
      <div className="other-projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="case-study-card gold-panel interactive-card">
            {/* Card Header */}
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

            {/* Key Technical Highlights */}
            <div className="case-highlights-box">
              <span className="highlights-header">KEY CAPABILITIES</span>
              <ul className="case-bullets">
                {project.highlights.map((h, i) => (
                  <li key={i} className="case-bullet-item">
                    <FaCheck className="case-check" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
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
                title={`View ${project.title} source code on GitHub`}
              >
                <FaGithub />
                <span>VIEW REPOSITORY</span>
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
