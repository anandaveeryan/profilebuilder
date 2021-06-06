import React from 'react';
import Navbar from './Navigationbar/Navbar';
import Profilepic from './Profilepic/Profilepic';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Topbutton from './Topbutton/Topbutton';

function Main() {
  return (
    <div>
      <Navbar/>
      <Profilepic/>
      <Skills/>
      <Education/>
      <Experience/>
      <Project/>
      <Contact/>
      <Topbutton/>
    </div>
  );
}

export default Main;
