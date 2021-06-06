import React from 'react';
import './Topbutton.css';

interface SelectProtected {
    readonly wrapperElement : HTMLButtonElement;
}

const selectProtected: SelectProtected = {
    wrapperElement : document.createElement("button")
};

function Topbutton() {
    function TopEvent() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
      }
      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
            let form = document.getElementById('topButton');
            if(form)
                form.style.visibility = "visible";
        } else {
            let form = document.getElementById('topButton')
            if(form)
                form.style.visibility = "hidden";             
        }
      }
      window.onscroll = function () {
        scrollFunction();
      };
      window.onload = function () {
        scrollFunction();
      }; 
  return (
    <button onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-angle-double-up"></i>
    </button>
  );
}

export default Topbutton;
