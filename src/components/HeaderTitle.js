import React from 'react';


function HeaderTitle() {
    var words = ["Creating impressive products", "You name it, we make it", "Creating mobile and web apps for your daily needs", "We bring your ideas to life"];  
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
            <h2 className="header-title">A software development company</h2>
            <p className="text-center sub-title" id="slogan">We bring your ideas to life</p>
        </div>
    )
}

export default HeaderTitle;