import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import BALLISTIC from "../../assets/BALLISTIC-verticalcapsule.png";
import AMUSIA from "../../assets/amusia_graveyard.png";
import FLIPPY from "../../assets/adventures_of_flippy.png";
import RSA from "../../assets/shutterstock-encryption-logo.webp";
import MOSAIC from "../../assets/sunset_mosaic.png";

const projects = [
  {
    link: "https://store.steampowered.com/app/2967570/BALLISTIC/",
    img: BALLISTIC,
    projectTitle: "BALLISTIC",
    blurb: "A chaotic dodgeball party game designed to be played with friends!",
    description: "",
    technologies: ["Unity", "Fusion"],
  },
  {
    link: "https://gejpark.github.io/amusia_demo/",
    img: AMUSIA,
    projectTitle: "Amusia",
    blurb: "A 2D Metroidvania game set in a fantasy world of classical music...",
    description:
      "Built in Javascript using the Phaser 3 framework. Designed and implemented over the span of 7 weeks with a group of 2 other classmates. Used multiple playtests to balance game values like jump height, movement speed, hitbox sizes, and more. Collaborated with teammates on level design, deciding mechanics, and flow of gameplay. Programmed game using assets created by our team game artist",
    technologies: ["Phaser3", "JavaScript"],
  },
  {
    link: "https://goyeet.github.io/Adventures-of-Flippy/",
    img: FLIPPY,
    projectTitle: "Adventures of Flippy",
    blurb: "An endless runner inspired by Flappy Bird!",
    description:
      "Built in Javascript using the Phaser 3 framework. Designed and implemented over the span of 1 week. All art assets made in Aesprite.",
    technologies: ["Phaser3", "JavaScript"],
  },
  {
    link: "https://github.com/goyeet/RSA-Cryptosystem",
    img: RSA,
    projectTitle: "RSA Cryptosystem",
    blurb: "A cryptosystem built using the RSA algorithm.",
    description: "",
    technologies: ["C", "GMP Library"],
  },
  {
    link: "https://goyeet.github.io/Mosaic-Generator/",
    img: MOSAIC,
    projectTitle: "Mosaic Generator",
    blurb: "A program that turns images into digital mosaic art.",
    description: "",
    technologies: ["p5.js"],
  },
];

function Projects() {
  return (
    <div className="projects section" id="projects">
      <h2 className="section-header">Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            link={project.link}
            img={project.img}
            projectTitle={project.projectTitle}
            blurb={project.blurb}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
