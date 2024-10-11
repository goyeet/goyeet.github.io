import ExperienceCard from "../ExperienceCard/ExperienceCard";

const experiences = [
  {
    link: "https://www.dayspringpartners.com/",
    jobTitle: "Associate Software Engineer",
    company: "Dayspring Partners",
    date: "SEPT 2024 - PRESENT",
    description:
        "Developing custom software solutions for company clients.",
    technologies: ["PHP", "WordPress", "Symfony", "Angular", "Typescript", "HTML", "CSS"],
  },
  {
    link: "https://www.nutripair.co/",
    jobTitle: "Software Development Intern",
    company: "Nutripair",
    date: "SEPT-DEC 2023",
    description:
      "Collaborated with an Agile team to develop an interactive mobile application to display foods for dietary needs.",
    technologies: ["React Native", "Typescript", "CSS", "Expo", "Figma"],
  },
  {
    link: "https://www.gigsv.biz/",
    jobTitle: "Software Engineering Intern",
    company: "Guardian Insight Group",
    date: "JUNE-SEPT 2023",
    description:
      "Designed, architected, and implemented a web application to help college applicants write their essays.",
    technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    link: "https://tech4good.soe.ucsc.edu/#/",
    jobTitle: "Undergraduate Web Developer",
    company: "Tech4Good Lab @ UCSC",
    date: "MAR-DEC 2022",
    description:
      "Implemented components of web application pages for social computing research.",
    technologies: ["Angular", "TypeScript", "HTML", "SASS", "Firebase"],
  },
];

function Experience() {
  return (
    <div className="experience section" id="experience">
      <h2 className="section-header">Experience</h2>
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          link={experience.link}
          jobTitle={experience.jobTitle}
          company={experience.company}
          date={experience.date}
          description={experience.description}
          technologies={experience.technologies}
        />
      ))}
    </div>
  );
}

export default Experience;
