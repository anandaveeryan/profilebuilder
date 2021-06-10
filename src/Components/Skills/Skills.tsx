import React from 'react';
import './Skills.css';
import {datascienceskills,webskills,cloudskills} from '../../information.js';
import { Fade } from "react-reveal";

interface Props{
    isDark : boolean
}
function Skills(props:Props) {
  return (
    <div className={props.isDark?"skills-container dark":"skills-container"} id="skills-container">
    <div className="skill-header">
        Skills
    </div>
    <div className="skills-container-main">
        <Fade left duration={2000}>
            <div className={props.isDark?"datascience dark1":"datascience"}>
                <div className={props.isDark?"header dark2":"header"}>
                    DataScience & Analytics
                </div>
                <ul>
                <li>{datascienceskills.one}</li>
                <li>{datascienceskills.two}</li>
                </ul>
            </div>
        </Fade>
        <Fade bottom duration={2000}>
            <div className={props.isDark?"fullstack dark1":"fullstack"}>
                <div className={props.isDark?"header dark2":"header"}>
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
            <div className={props.isDark?"cloud dark1":"cloud"}>
                <div className={props.isDark?"header dark2":"header"}>
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
