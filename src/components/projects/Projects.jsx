import { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const PROJECTS_DATA = [
  {
    id: "crs",
    title: "Course Registration System",
    isFeatured: true,
    badgeText: "FEATURED ARCHITECTURE",
    category: "Spring Boot",
    tagline: "Secure enterprise academic portal with role-based access control and relational course scheduling.",
    tech: ["Spring Boot", "Spring Security", "Oracle Database", "REST APIs", "Spring Data JPA", "Hibernate"],
    archFlow: ["Frontend UI", "REST APIs", "Spring Security & Auth", "Spring Data JPA", "Oracle DB"],
    description: "Enterprise course management system empowering students to register for semester courses, manage academic schedules, and prevent scheduling conflicts with role-based security.",
    problem: "Academic institutions struggle with uncoordinated course registration, prerequisite enforcement, and concurrency issues during open enrollment windows.",
    solution: "Built a centralized Spring Boot backend with automated prerequisite validation, real-time seat tracking, and JWT-authenticated role management for Students, Faculty, and Administrators.",
    architecture: "Layered MVC & Microservice-ready architecture with Spring Security filter chains, service abstraction layer, and JPA repositories backed by Oracle SQL.",
    features: [
      "Role-Based Access Control (Student / Admin / Faculty)",
      "Spring Security JWT / Session Protection",
      "Course Capacity & Prerequisite Validation",
      "Spring Data JPA with Oracle Persistence",
      "Comprehensive RESTful Endpoints & Error Handling"
    ],
    github: "https://github.com/Aathi786/Course_Registration_System",
    status: "COMPLETED",
    metric: "Role-Based Security",
  },
  {
    id: "ems",
    title: "Employee Management System",
    isFeatured: false,
    category: "Java EE",
    tagline: "Full-cycle workforce management system with relational data persistence and session tracking.",
    tech: ["Java", "JSP", "Servlet", "JDBC", "Oracle SQL", "HTML/CSS"],
    description: "Enterprise web application designed to manage employee records, department structures, payroll metadata, and administrative privileges with robust CRUD workflows.",
    problem: "Manual and fragmented employee record tracking causing synchronization errors and inconsistent department data.",
    solution: "Engineered a dynamic Java EE application featuring modular MVC separation, automated JDBC transaction management, and secure session tracking.",
    architecture: "Classic Java EE architecture utilizing Servlets as controllers, JSP for dynamic presentation, and DAO design patterns for Oracle database interaction.",
    features: [
      "Full CRUD Operations on Employee Profiles",
      "JDBC Connection Pooling with Oracle DB",
      "Session Management & Authentication",
      "Department & Designation Hierarchy",
      "Custom SQL Queries & PreparedStatements"
    ],
    github: "https://github.com/Aathi786/Employee-Management-System",
    status: "COMPLETED",
    metric: "100% ACID Compliant",
  },
  {
    id: "quiz",
    title: "Quiz Management System",
    isFeatured: false,
    category: "Java EE",
    tagline: "Interactive assessment platform with dynamic question sequencing and instant score evaluation.",
    tech: ["Java", "JSP", "Servlet", "Oracle DB", "JavaScript", "HTML/CSS"],
    description: "Interactive online quiz platform featuring automated score calculation, timed assessment sessions, question categorization, and performance history reports.",
    problem: "Conducting manual evaluations leads to delays in result publication and lacks standardized question randomization.",
    solution: "Created an automated web evaluation engine that serves randomized question banks, tracks active timer states, and computes instant result scores.",
    architecture: "Stateful session-based architecture tracking quiz progressions in real-time, persisting final scorecards to Oracle relational tables.",
    features: [
      "Real-time Automated Score Computation",
      "Dynamic Question Categorization",
      "User Result History & Performance Tracking",
      "Secure Admin Assessment Creation & Editing",
      "Responsive Timed Test Interface"
    ],
    github: "https://github.com/Aathi786/Quizz_Game",
    status: "COMPLETED",
    metric: "Real-Time Scoring",
  },
];

function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === "all") return true;
    if (filter === "spring") return p.category === "Spring Boot";
    if (filter === "javaee") return p.category === "Java EE";
    return true;
  });

  return (
    <section className="projects section-container" id="projects">
      <div className="section-header">
        <span className="section-tag">Applied Engineering</span>
        <h2 className="section-title">FEATURED <span>PROJECTS</span></h2>
        <p className="section-subtitle">
          Real-world applications showcasing scalable Java architectures, Spring Boot security, clean RESTful APIs, and database design.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="project-filter-tabs">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Projects ({PROJECTS_DATA.length})
        </button>
        <button
          className={`filter-btn ${filter === "spring" ? "active" : ""}`}
          onClick={() => setFilter("spring")}
        >
          Spring Boot & Security ({PROJECTS_DATA.filter(p => p.category === "Spring Boot").length})
        </button>
        <button
          className={`filter-btn ${filter === "javaee" ? "active" : ""}`}
          onClick={() => setFilter("javaee")}
        >
          Java EE & Servlets ({PROJECTS_DATA.filter(p => p.category === "Java EE").length})
        </button>
      </div>

      {/* Projects Grid */}
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;