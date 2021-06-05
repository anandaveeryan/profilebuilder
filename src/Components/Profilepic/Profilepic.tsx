import React from 'react';
import './Profilepic.css';
import {details} from '../../information.js';

function Profilepic() {
  return (
    <div className="main-container">
      <div className="imgleft">
        <img src={process.env.PUBLIC_URL + '/anand1.jpg'} alt="ProfilePic" />
      </div>
      <div className="picturecenter">
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
