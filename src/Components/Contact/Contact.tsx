import React from 'react';
import './Contact.css';
import {socialmedia} from '../../information.js';
import { Fade } from "react-reveal";

function Contact() {
  return (
    <div className="contactme-container" id="contactme-container">
        <div className="contactme-header">
            Contact Me
        </div>
        <div className="contactme-container-main">
            <Fade left duration={2000}>
                <div className="contact">
                    I'm available in below platforms. Please feel free to contact.
                    <div className="socialmediaapps">
                        <a href={socialmedia.github} target="_blank" className="fa fa-github" rel="noreferrer"></a>
                        <a href={socialmedia.linkedin} target="_blank" className="fa fa-linkedin" rel="noreferrer"></a>
                        <a href={socialmedia.twitter} target="_blank" className="fa fa-twitter" rel="noreferrer"></a>
                        <a href={socialmedia.instagram} target="_blank" className="fa fa-instagram" rel="noreferrer"></a>
                        <a href={socialmedia.gmail} target="_blank" className="fa fa-google" rel="noreferrer"></a>
                    </div>
                </div>
            </Fade>
        </div>
    </div>            
  );
}

export default Contact;
