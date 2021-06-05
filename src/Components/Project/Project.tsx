import React from 'react';
import './Project.css';
import { cricvisual, expandoverflow, profilebuilder } from '../../information.js';
import { Fade } from "react-reveal";

function Project() {
  return (
    <div className="projects-container" id="projects-container">
    <div className="projects-header">
        Projects
    </div>
    <div className="projects-container-main">
        <Fade left duration={2000}>
            <div className="profilebuilder">
                <div className="header">
                    Portfolio Website
                </div>
                <ul>
                <li>{profilebuilder.one}</li>
                <li>{profilebuilder.two}</li>
                </ul>
            </div>
        </Fade>
        <Fade bottom duration={2000}>
            <div className="expandoverflow">
                <div className="header">
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
            <div className="cricvisual">
                <div className="header">
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
