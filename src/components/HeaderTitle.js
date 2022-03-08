import React from 'react';
import illustration from '../assets/working-in-office.svg';

function HeaderTitle() {
    var words = ["You name it, we make it", "Creating impressive products", "We bring your ideas to life", "Creating mobile and web apps for your daily needs"];  
    let currentWord = -1; 

    window.setInterval(function(){ 
    const element = document.getElementById("slogan");
    
    if (element) {
        currentWord++; 
        if(currentWord >= words.length) {
            currentWord = 0;
        }  
        element.innerHTML = " " + words[currentWord]; 
    }
    
    }, 4000);

    return (
        <div className="row container-header">
            <div className="col-md-6 col-xs-12">
                <h3 className="header-title">We build beautiful and scalable solutions</h3>
                <p className="text-center sub-title height-60" id="slogan">Creating mobile and web apps for your daily needs</p>
            </div>
            <div className="col-md-6 col-xs-12">
                <img src={illustration} class="illustration-img text-center"/>
            </div>
        </div>
    )
}

export default HeaderTitle;