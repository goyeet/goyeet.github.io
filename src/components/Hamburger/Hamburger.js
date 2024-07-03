import "./Hamburger.css";

const Hamburger = ({ isMenuOpen }) => {
  return (
    <div className="hamburger">
      {isMenuOpen ? (
        <div className="close">
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      ) : (
        <div className="menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
