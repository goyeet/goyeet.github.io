import "./ExperienceCard.css";

function ExperienceCard({ link, jobTitle, company, date, description, technologies }) {
  return (
    <div className="experience-card">
      <div className="title-date-group">
        <h3 className="job-title">{jobTitle}</h3>
        <span className="date">{date}</span>
      </div>
      <a href={link} target="_blank" className="company">
        {company}
      </a>
      <p className="job-description">{description}</p>
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

export default ExperienceCard;
