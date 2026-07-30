import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {

  return (
    <div className="project-card">

      <span className="status">
        ● COMPLETED
      </span>

      <h3>{project.title}</h3>

      <p className="tech">
        {project.tech}
      </p>

      <p>
        {project.description}
      </p>

      <div className="buttons">

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn"
        >
          <FaGithub />
          View Source
        </a>

      </div>

    </div>
  );
}

export default ProjectCard;