import React from 'react';

import ArticleList from '../components/ArticleList';
import HeaderTitle from '../components/HeaderTitle';
import Footer from '../components/Footer';
import TopNavBar from '../components/TopNavBar';

import illustration from '../assets/illustration.jpeg';

function Home() {

     
 
    return (
        <div className="flex-wrapper">
            <div className="container">
                <TopNavBar/>
                <HeaderTitle/>
                <img src={illustration} class="illustration-img text-center"/>
                <div className="max-width-800">
                    <h3 className="title-presentation text-center">We are a web & app development company that turns your ideas into a new driving force of your business.</h3>
                    <p className="description-presentation text-center">We hire brilliant web and mobile app developers to deliver projects on time and maintain the top-notch code standards.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
