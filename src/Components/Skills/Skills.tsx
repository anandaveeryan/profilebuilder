import React from 'react';
import './Skills.css';
import {datascienceskills,webskills,cloudskills} from '../../information.js';
import { Fade } from "react-reveal";

function Skills() {
  return (
    <div className="skills-container" id="skills-container">
    <div className="skill-header">
        Skills
    </div>
    <div className="skills-container-main">
        <Fade left duration={2000}>
            <div className="datascience">
                <div className="header">
                    DataScience & Analytics
                </div>
                <ul>
                <li>{datascienceskills.one}</li>
                <li>{datascienceskills.two}</li>
                </ul>
            </div>
        </Fade>
        <Fade bottom duration={2000}>
            <div className="fullstack">
                <div className="header">
                    Fullstack Web Development
                </div>
                <ul>
                <li>{webskills.one}</li>
                <li>{webskills.two}</li>
                <li>{webskills.three}</li>
                </ul>
            </div>
        </Fade>
        <Fade right duration={2000}>
            <div className="cloud">
                <div className="header">
                    Cloud Technologies
                </div>
                <ul>
                <li>{cloudskills.one}</li>
                <li>{cloudskills.two}</li>
                </ul>
            </div>
        </Fade>
    </div> 
    </div>            
  );
}

export default Skills;
