import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import Hamburger from "../Hamburger/Hamburger";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <a href="#about" className="navLink">
          About
        </a>
        <a href="#experience" className="navLink">
          Experience
        </a>
        <a href="#projects" className="navLink">
          Projects
        </a>
        <a href="#contact" className="navLink" onClick={handleLinkClick}>
          Contact
        </a>
      </nav>
      <nav
        ref={menuRef}
        className={`navbar-mobile ${isMenuOpen ? "open" : ""}`}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <a href="#about" className="navLink" onClick={handleLinkClick}>
          About
        </a>
        <a href="#experience" className="navLink" onClick={handleLinkClick}>
          Experience
        </a>
        <a href="#projects" className="navLink" onClick={handleLinkClick}>
          Projects
        </a>
        <a href="#contact" className="navLink" onClick={handleLinkClick}>
          Contact
        </a>
      </nav>
      <div className="top-bar">
        <div ref={hamburgerRef} onClick={toggleMenu}>
          <Hamburger isMenuOpen={isMenuOpen} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
