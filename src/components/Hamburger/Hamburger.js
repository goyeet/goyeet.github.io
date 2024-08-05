import "./Hamburger.css";

const Hamburger = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="hamburger" onClick={toggleMenu}>
      <div className={`bar ${isMenuOpen ? "top" : ""}`}></div>
      <div className={`bar ${isMenuOpen ? "middle" : ""}`}></div>
      <div className={`bar ${isMenuOpen ? "bottom" : ""}`}></div>
    </div>
  );
};

export default Hamburger;
