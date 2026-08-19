import { useState } from "react";
import SkillCard from "./SkillCard";
import "./Skills.css";

const SKILLS_DATA = [
  // Backend & Core
  { name: "Java", category: "backend", level: "Advanced", desc: "Core Java, OOP, Collections, Multithreading, Exception Handling, Streams API" },
  { name: "Spring Boot", category: "backend", level: "Advanced", desc: "RESTful Web Services, Dependency Injection, Component Architecture, Microservices" },
  { name: "Spring Security", category: "backend", level: "Strong", desc: "JWT Authentication, Authorization, Role-Based Access Control (RBAC), CSRF" },
  { name: "JSP", category: "backend", level: "Proficient", desc: "Dynamic server-side page templates, JSTL tags, MVC view layer integration" },
  { name: "Servlet", category: "backend", level: "Proficient", desc: "HTTP request lifecycle, Session tracking, Filters, Request Dispatching" },

  // Frontend
  { name: "React", category: "frontend", level: "Advanced", desc: "Modern Hooks, Component Lifecycle, State Management, Vite, Single-Page Apps" },
  { name: "JavaScript", category: "frontend", level: "Strong", desc: "ES6+, Async/Await, Promises, DOM Manipulation, Fetch API, Event Loop" },
  { name: "HTML", category: "frontend", level: "Proficient", desc: "Semantic HTML5 structure, Accessibility standards, Clean markup conventions" },
  { name: "CSS", category: "frontend", level: "Proficient", desc: "Modern Flexbox & CSS Grid, Responsive Design, Glassmorphism, CSS Custom Properties" },

  // Database & Tools
  { name: "Oracle", category: "database", level: "Advanced", desc: "Relational Schema Design, SQL Queries, Joins, Constraints, Transactions, JDBC" },
  { name: "Git", category: "tools", level: "Strong", desc: "Distributed Version Control, Branching Models, Merging, Rebase, Commit History" },
  { name: "GitHub", category: "tools", level: "Strong", desc: "Repository Management, Pull Requests, Code Reviews, Releases, Collaboration" },
];

function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = SKILLS_DATA.filter((s) => {
    if (activeTab === "all") return true;
    if (activeTab === "backend") return s.category === "backend";
    if (activeTab === "frontend") return s.category === "frontend";
    if (activeTab === "database") return s.category === "database" || s.category === "tools";
    return true;
  });

  return (
    <section className="skills section-container" id="skills">
      <div className="section-header">
        <span className="section-tag">Core Competencies</span>
        <h2 className="section-title">TECHNICAL <span>SKILLS</span></h2>
        <p className="section-subtitle">
          Engineering capabilities across backend system design, enterprise Java frameworks, modern web interfaces, and relational databases.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="skills-filter-tabs">
        <button
          className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All Skills ({SKILLS_DATA.length})
        </button>
        <button
          className={`tab-btn ${activeTab === "backend" ? "active" : ""}`}
          onClick={() => setActiveTab("backend")}
        >
          Backend & Core ({SKILLS_DATA.filter(s => s.category === "backend").length})
        </button>
        <button
          className={`tab-btn ${activeTab === "frontend" ? "active" : ""}`}
          onClick={() => setActiveTab("frontend")}
        >
          Frontend ({SKILLS_DATA.filter(s => s.category === "frontend").length})
        </button>
        <button
          className={`tab-btn ${activeTab === "database" ? "active" : ""}`}
          onClick={() => setActiveTab("database")}
        >
          Database & Version Control ({SKILLS_DATA.filter(s => s.category === "database" || s.category === "tools").length})
        </button>
      </div>

      {/* Skills Matrix Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;