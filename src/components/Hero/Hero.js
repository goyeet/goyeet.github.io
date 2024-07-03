import "./Hero.css";
import portrait from "../../assets/Portrait.png";

function Hero() {
  return (
    <header className="hero">
      <div className="header">
        <h1 className="title">Gordon Yee</h1>
        <p className="description">Software Engineer</p>
      </div>
      {/* <img className="portrait-png" src={portrait} /> */}
    </header>
  );
}

export default Hero;
