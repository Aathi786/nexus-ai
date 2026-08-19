import { FaCheckCircle } from "react-icons/fa";

function SkillCard() {
  const competencies = [
    { name: "Enterprise Java & Spring Boot", level: "Advanced", desc: "Microservices, REST APIs, Security, MVC" },
    { name: "Relational Database Design & SQL", level: "Advanced", desc: "Oracle DB, JDBC, JPA/Hibernate, Transactions" },
    { name: "React & Modern UI Architecture", level: "Advanced", desc: "Single-Page Apps, Responsive CSS, State Hooks" },
    { name: "Web Security & Authorization", level: "Strong", desc: "Spring Security, JWT, Role-Based Access" },
    { name: "Git Workflow & Collaboration", level: "Strong", desc: "Version Control, Pull Requests, Code Reviews" },
  ];

  return (
    <div className="glass-panel telemetry-card">
      <div className="telemetry-header">
        <h3>Architecture Focus</h3>
        <span className="metric-tag">
          <FaCheckCircle /> VERIFIED
        </span>
      </div>

      <div className="competencies-list">
        {competencies.map((item, index) => (
          <div key={index} className="competency-item">
            <div className="comp-top">
              <span className="comp-name">{item.name}</span>
              <span className={`comp-level ${item.level === "Advanced" ? "tag-adv" : "tag-str"}`}>
                {item.level}
              </span>
            </div>
            <p className="comp-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="telemetry-footer-note">
        <span>Clean code standards, layered architectures, and database transaction integrity.</span>
      </div>
    </div>
  );
}

export default SkillCard;