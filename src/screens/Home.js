import React from 'react';

import ArticleList from '../components/ArticleList';
import Footer from '../components/Footer';
import TopNavBar from '../components/TopNavBar';

function Home() {

    var words = ["Full stack developer", "Tool maker", " Creative entrepreneur"];  
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
        <div className="flex-wrapper">
            <div className="container">
                <TopNavBar/>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
