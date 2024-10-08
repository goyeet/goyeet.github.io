import "./AboutMe.css";
import portrait from "../../assets/portrait.jpeg";

function AboutMe() {
  return (
    <div className="about-me section" id="about">
      <h2 className="section-header">About Me</h2>
      <div className="about-container">
        <img className="portrait" src={portrait} alt="portrait" />
        <div>
          <p>
            Hey there, I'm Gordon! I'm currently working as a software engineer at Dayspring Partners and am based in San Francisco.
            I'm a graduate from UC Santa Cruz with a B.S. in Computer Science: Game Design and have experience working on web apps, mobile apps, and video games.
          </p>
          <br />
          <p>
            I love creating things and have a passion for finding the best solution to difficult
            problems! In my spare time, jamming out on my drum set, working out, cooking, and
            playing video games with friends.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
