import "./ProjectCard.css";

function ProjectCard({ link, projectTitle, blurb, description, technologies }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{projectTitle}</h3>
      <span className="project-blurb">{blurb}</span>
      <p className="project-description">{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <div key={index} className="tech">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
