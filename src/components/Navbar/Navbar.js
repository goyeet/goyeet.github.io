import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="#about" className="navLink">
          About
        </a>
        <a href="#skills" className="navLink">
          Skills
        </a>
        <a href="#experience" className="navLink">
          Experience
        </a>
        <a href="#projects" className="navLink">
          Projects
        </a>
      </nav>
    </>
  );
}

export default Navbar;
