import ProjectCard from "../ProjectCard/ProjectCard";

const projects = [
  {
    link: "https://www.nutripair.co/",
    projectTitle: "Amusia",
    blurb: "A 2D Metroidvania game set in a fantasy world of classical music.",
    description:
      "Built in Javascript using the Phaser 3 framework. Designed and implemented over the span of 7 weeks with a group of 2 other classmates. Used multiple playtests to balance game values like jump height, movement speed, hitbox sizes, and more. Collaborated with teammates on level design, deciding mechanics, and flow of gameplay. Programmed game using assets created by our team game artist",
    technologies: ["Phaser3", "JavaScript"],
  },
];

function Projects() {
  return (
    <div className="projects section" id="projects">
      <h2 className="section-header">Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          link={project.link}
          projectTitle={project.projectTitle}
          blurb={project.blurb}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}

export default Projects;
