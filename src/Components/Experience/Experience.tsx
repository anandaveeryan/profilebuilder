import React from 'react';
import './Experience.css';
import {internship} from '../../information.js';
import { Fade } from "react-reveal";

function Experience() {
  return (
    <div className="experience-container" id="experience-container">
    <div className="experience-header">
        Experience
    </div>
    <div className="experience-container-main">
        <Fade left duration={2000}>
            <div className="powerschool">
                <div className="powerschool-header-container">
                    <div className='powerschool-container'>
                        <div className="companyname">
                            Powerschool
                        </div>
                        <div className="internship-year">
                            2020 Aug - 2021 May
                        </div>
                    </div>
                    <div className="designation">
                        Machine Learning Engineer Intern
                    </div>
                </div>
                <ul>
                <li>{internship.one}</li>
                <li>{internship.two}</li>
                <li>{internship.three}</li>
                <li>{internship.four}</li>
                </ul>
            </div>
        </Fade>
    </div> 
    </div>            
  );
}

export default Experience;
