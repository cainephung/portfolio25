import { useState } from "react";
import "./navbar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((prev) => !prev);
  const handleClose = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navContent">
        <div className="hamburger" onClick={handleToggle}>
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
        </div>

        <ul className={`navList ${menuOpen ? "show" : ""}`}>
          <li>
            <a href="#home" onClick={handleClose}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={handleClose}>
              Services
            </a>
          </li>
          <li>
            <a href="#experience" onClick={handleClose}>
              Experience
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={handleClose}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleClose}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
