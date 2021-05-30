import React from 'react';


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
        <div>
            <h3 className="header-title">We build beautiful and scalable solutions</h3>
            <p className="text-center sub-title" id="slogan">Creating mobile and web apps for your daily needs</p>
        </div>
    )
}

export default HeaderTitle;