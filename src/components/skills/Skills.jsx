import "./Skills.css";
import SkillCard from "./SkillCard";

function Skills() {

  const skills = [
    "Java",
    "Spring Boot",
    "Spring Security",
    "JSP",
    "Servlet",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Oracle",
    "Git",
    "GitHub"
  ];

  return (
    <section className="skills" id="skills">

      <h2>SKILL MATRIX</h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            skill={skill}
          />
        ))}

      </div>

    </section>
  );
}

export default Skills;