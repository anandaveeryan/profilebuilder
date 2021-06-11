import React, {useState} from 'react';
import Navbar from './Navigationbar/Navbar';
import Profilepic from './Profilepic/Profilepic';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Topbutton from './Topbutton/Topbutton';
import './Main.css';

interface Props{
  isDark ?: boolean
}

function Main(props:Props) {
  const [isDark, setDark] = useState(false);
  const toggleState = (e: React.ChangeEvent, title: boolean) => {
    setDark(!title);
    console.log(isDark);
  }
  console.log(isDark);
  return (
    <div className={isDark?"dark-menu":""}>
      <Navbar toggleState={(e, title) => toggleState(e, title)} isDark={isDark}/>
      <Profilepic isDark={isDark}/>
      <Skills isDark={isDark}/>
      <Education isDark={isDark}/>
      <Experience isDark={isDark}/>
      <Project isDark={isDark}/>
      <Contact isDark={isDark}/>
      <Topbutton isDark={isDark}/>
    </div>
  );
}

export default Main;
