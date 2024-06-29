import "./Hero.css";
import portrait from "../../assets/portrait.jpeg";

function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <div className="header">
          <h1 className="title">Gordon Yee</h1>
          <p className="description">Software Engineer</p>
        </div>
        {/* <img className="portrait" src={portrait} /> */}
      </div>
    </header>
  );
}

export default Hero;
