import React from 'react';
import './Contact.css';
import {socialmedia} from '../../information.js';
import { Fade } from "react-reveal";

interface Props{
    isDark : boolean
}

function Contact(props:Props) {
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
                        <a href={socialmedia.github} target="_blank" className="fab fa-github" rel="noreferrer"></a>
                        <a href={socialmedia.linkedin} target="_blank" className="fab fa-linkedin" rel="noreferrer"></a>
                        <a href={socialmedia.twitter} target="_blank" className="fab fa-twitter" rel="noreferrer"></a>
                        <a href={socialmedia.instagram} target="_blank" className="fab fa-instagram" rel="noreferrer"></a>
                        <a href={socialmedia.gmail} target="_blank" className="fab fa-google" rel="noreferrer"></a>
                    </div>
                </div>
            </Fade>
        </div>
    </div>            
  );
}

export default Contact;
