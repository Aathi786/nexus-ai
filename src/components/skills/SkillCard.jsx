import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaShieldAlt,
  FaLeaf,
  FaDatabase,
  FaFileCode,
  FaGlobe,
} from "react-icons/fa";

function getSkillIcon(skillName) {
  switch (skillName) {
    case "Java":
      return <FaJava />;
    case "Spring Boot":
      return <FaLeaf />;
    case "Spring Security":
      return <FaShieldAlt />;
    case "JSP":
      return <FaFileCode />;
    case "Servlet":
      return <FaGlobe />;
    case "HTML":
      return <FaHtml5 />;
    case "CSS":
      return <FaCss3Alt />;
    case "JavaScript":
      return <FaJs />;
    case "React":
      return <FaReact />;
    case "Oracle":
      return <FaDatabase />;
    case "Git":
      return <FaGitAlt />;
    case "GitHub":
      return <FaGithub />;
    default:
      return <FaDatabase />;
  }
}

function getLevelBadgeClass(level) {
  switch (level) {
    case "Advanced":
      return "level-advanced";
    case "Strong":
      return "level-strong";
    case "Proficient":
      return "level-proficient";
    default:
      return "level-proficient";
  }
}

function SkillCard({ skill }) {
  const skillName = typeof skill === "object" ? skill.name : skill;
  const skillDesc = typeof skill === "object" ? skill.desc : "";
  const skillLevel = typeof skill === "object" ? skill.level : "Proficient";
  const icon = getSkillIcon(skillName);
  const badgeClass = getLevelBadgeClass(skillLevel);

  return (
    <div className="skill-card glass-panel">
      <div className="skill-card-top">
        <div className="skill-icon-wrap">{icon}</div>
        <span className={`skill-level-pill ${badgeClass}`}>{skillLevel}</span>
      </div>

      <h3 className="skill-name">{skillName}</h3>
      {skillDesc && <p className="skill-desc-text">{skillDesc}</p>}

      <div className="skill-card-glow"></div>
    </div>
  );
}

export default SkillCard;