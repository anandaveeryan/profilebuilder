import React from 'react';
import './Navbar.css';

interface Props{
  isDark : boolean,
  toggleState: (e: React.ChangeEvent, title: boolean) => void;
}

function Navbar(props:Props) {
  //const {isDark} = useContext(StyleContext);
  //const [isChecked, setChecked] = useState(false);
  //const styleContext = useContext(StyleContext);  
  return (
    <div>
      <div className={props.isDark?"navbar dark":"navbar"}>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className={props.isDark?"menu-icon dark-menu-icon":"menu-icon"} htmlFor="menu-btn">
              <span className={props.isDark?"navicon dark-navicon":"navicon"}></span>
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
            <li>
            <div className="toggle-container">
            <label className="switch">
              <input type="checkbox" onChange={(e) => props.toggleState(e, props.isDark)}/>
              <span className="slider round"></span>
              </label>
            </div>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
