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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav ref={menuRef} className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <a href="#about" className="navLink">
          About
        </a>
        <a href="#experience" className="navLink">
          Experience
        </a>
        <a href="#projects" className="navLink">
          Projects
        </a>
      </nav>
      <div ref={hamburgerRef} onClick={toggleMenu} className="top-bar">
        <Hamburger isMenuOpen={isMenuOpen} />
      </div>
    </>
  );
}

export default Navbar;
