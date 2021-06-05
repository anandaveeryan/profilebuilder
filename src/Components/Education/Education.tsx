import React from 'react';
import './Education.css';
import {education} from '../../information.js';
import { Fade } from "react-reveal";

function Education() {
  return (
    <div className="education-container" id="education-container">
        <div className="education-header">
            Education
        </div>
        <div className="education-container-main">
            <Fade left duration={2000}>
                <div className="vit">
                    <div className="header-container">
                    <div className='vit-container'>
                        <div className="collegename">
                            Vellore Institute of Technology
                        </div>
                        <div className="year">
                            2016 May - 2021 June
                        </div>
                    </div>
                    <div className="coursename">
                        Integrated M.tech Software Engineering
                    </div>
                    </div>
                    <div className="collegelearnings">
                        <ul>
                        <li>{education.coursework}</li>
                        <li>{education.projects}</li>
                        </ul>
                    </div>
                </div>
            </Fade>
        </div> 
    </div>            
  );
}

export default Education;
