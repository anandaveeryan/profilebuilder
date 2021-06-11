import React from 'react';
import './Profilepic.css';
import {details} from '../../information.js';

interface Props{
  isDark : boolean
}

function Profilepic(props : Props) {
  return (
    <div className="main-container">
      <div className={props.isDark?"imgleft dark1":"imgleft"}>
        <img src={process.env.PUBLIC_URL + '/anand.jpg'} alt="ProfilePic" />
      </div>
      <div className={props.isDark?"picturecenter dark":"picturecenter"}>
        <div className="headername">
          {details.name}
        </div>
        <div className="header-p">
          {details.subTitle}
        </div>
      </div> 
    </div>             
  );
}

export default Profilepic;
