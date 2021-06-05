import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <div className="navbar">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
        <ul className="menu">
            <li>
                <a href="#skills-container">Skills</a>
            </li>
            <li>
                <a href="#education-container">Education</a>
            </li>
            <li>
                <a href="#experience-container">Experience</a>
            </li>
            <li>
                <a href="#projects-container">Project</a>
            </li>
            <li>
                <a href="#contactme-container">Contact Me</a>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
