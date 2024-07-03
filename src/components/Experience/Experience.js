import ExperienceCard from "../ExperienceCard/ExperienceCard";

const experiences = [
  {
    link: "https://www.nutripair.co/",
    jobTitle: "Software Development Intern",
    company: "Nutripair",
    date: "SEPT-DEC 2023",
    description:
      "Collaborated with an Agile team to develop an interactive mobile application to display foods for dietary needs. Coordinated closely with UI/UX team to integrate user-friendly and visually appealing front-end interfaces. Implemented reusable front-end components for iOS and Android using TypeScript in React Native.",
    technologies: ["React Native", "Typescript", "CSS", "Expo", "Figma"],
  },
  {
    link: "https://www.gigsv.biz/",
    jobTitle: "Software Engineering Intern",
    company: "Guardian Insight Group",
    date: "JUNE-SEPT 2023",
    description:
      "Designed, architected, and implemented a web application to help college applicants write their essays. Presented weekly software development and progress reports directly to CTO and Software Architect. Collaborated with a fellow intern to design and build multiple custom WordPress plugins using PHP. Integrated with Excelify's API to generate essay prompts utilizing user-submitted CV input. Developed and refined data tables in the WordPress MySQL database to enhance overall website functionality.",
    technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    link: "https://tech4good.soe.ucsc.edu/#/",
    jobTitle: "Undergraduate Research Assistant: Web Developer",
    company: "Tech4Good Lab @ UCSC",
    date: "MAR-DEC 2022",
    description:
      "Collaborated within teams of 5-8 members to craft web application pages for social computing research. Implemented 10+ front-end components on an Angular-Firebase framework using HTML, Sass, and TypeScript. Actively engaged in team scrum meetings, fostering alignment and progress to collectively achieve our lab's goals. Optimized and refactored legacy code resulting in increased performance and code quality.",
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
