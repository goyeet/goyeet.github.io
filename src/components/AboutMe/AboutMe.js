import "./AboutMe.css";
import portrait from "../../assets/portrait.jpeg";

function AboutMe() {
  return (
    <div className="about-me section" id="about">
      <h2 className="section-header">About Me</h2>
      <div className="container">
        <img className="portrait" src={portrait} />
        <div>
          <p>
            Hey there, I'm Gordon! I'm a recent graduate from UC Santa Cruz with a B.S. in Computer
            Science: Game Design.
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
