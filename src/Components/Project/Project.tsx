import React from 'react';
import './Project.css';
import { cricvisual, expandoverflow, profilebuilder } from '../../information.js';
import { Fade } from "react-reveal";

interface Props{
    isDark : boolean
}

function Project(props:Props) {
  return (
    <div className="projects-container" id="projects-container">
    <div className="projects-header">
        Projects
    </div>
    <div className="projects-container-main">
        <Fade left duration={2000}>
            <div className={props.isDark?"profilebuilder dark1":"profilebuilder"}>
                <div className={props.isDark?"header dark2":"header"}>
                    Portfolio Website
                </div>
                <ul>
                <li>{profilebuilder.one}</li>
                <li>{profilebuilder.two}</li>
                </ul>
            </div>
        </Fade>
        <Fade bottom duration={2000}>
            <div className={props.isDark?"expandoverflow dark1":"expandoverflow"}>
                <div className={props.isDark?"header dark2":"header"}>
                    Stackoverflow Badge sharing website
                </div>
                <ul>
                <li>{expandoverflow.one}</li>
                <li>{expandoverflow.two}</li>
                <li>{expandoverflow.three}</li>
                </ul>
            </div>
        </Fade>
        <Fade right duration={2000}>
            <div className={props.isDark?"cricvisual dark1":"cricvisual"}>
                <div className={props.isDark?"header dark2":"header"}>
                    Cricket Analytics Website
                </div>
                <ul>
                <li>{cricvisual.one}</li>
                <li>{cricvisual.two}</li>
                <li>{cricvisual.three}</li>
                </ul>
            </div>
        </Fade>
    </div> 
    </div>            
  );
}

export default Project;
