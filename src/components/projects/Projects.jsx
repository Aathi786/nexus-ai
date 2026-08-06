import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {

  const projects = [

    {
      title: "Employee Management System",
      tech: "Java • JSP • Servlet • JDBC • Oracle",
      description: "Manage employee records with CRUD operations.",
      github: "https://github.com/Aathi786/Employee-Management-System"
    },

    {
      title: "Quiz Management System",
      tech: "Java • JSP • Servlet • Oracle",
      description: "Online quiz platform with score calculation.",
      github: "https://github.com/Aathi786/Quizz_Game"
    },

    {
      title: "Course Registration System",
      tech: "Spring Boot • Spring Security • Oracle",
      description: "Students can register and manage courses securely.",
      github: "https://github.com/Aathi786/Course_Registration_System"
    }

  ];

  return (
    <section className="projects" id="projects">

      <h2>PROJECT VAULT</h2>

      <div className="project-grid">

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;