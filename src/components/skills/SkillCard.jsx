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
  FaGlobe
} from "react-icons/fa";

function SkillCard({ skill }) {

  let icon;

  switch (skill) {

    case "Java":
      icon = <FaJava />;
      break;

    case "Spring Boot":
      icon = <FaLeaf />;
      break;

    case "Spring Security":
      icon = <FaShieldAlt />;
      break;

    case "JSP":
      icon = <FaFileCode />;
      break;

    case "Servlet":
      icon = <FaGlobe />;
      break;

    case "HTML":
      icon = <FaHtml5 />;
      break;

    case "CSS":
      icon = <FaCss3Alt />;
      break;

    case "JavaScript":
      icon = <FaJs />;
      break;

    case "React":
      icon = <FaReact />;
      break;

    case "Oracle":
      icon = <FaDatabase />;
      break;

    case "Git":
      icon = <FaGitAlt />;
      break;

    case "GitHub":
      icon = <FaGithub />;
      break;

    default:
      icon = <FaDatabase />;
  }

  return (
    <div className="skill-card">

      <div className="skill-icon">
        {icon}
      </div>

      <span>{skill}</span>

    </div>
  );
}

export default SkillCard;