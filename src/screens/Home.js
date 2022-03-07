import React from 'react';

import HeaderTitle from '../components/HeaderTitle';
import Footer from '../components/Footer';
import TopNavBar from '../components/TopNavBar';

import illustration from '../assets/illustration.jpeg';
import ProcessCards from '../components/ProcessCards';
import QuoteHome from '../components/QuoteHome';

function Home() {

     
 
    return (
        <div className="flex-wrapper">
            <div className="container">
                <TopNavBar/>
                <HeaderTitle/>
                <img src={illustration} class="illustration-img text-center"/>
                <div className="max-width-800">
                    <h3 className="title-presentation text-center">We are a web and mobile app development company that turns your ideas into a new driving force of your business.</h3>
                    <p className="description-presentation text-center">We work with brilliant web and mobile app developers to deliver projects on time and maintain the top-notch code standards.</p>
                </div>
                <div className="row numbers-presentation">
                    <h3 className="text-center font-rubik-bold">We proudly delivered so far</h3>
                    <div className="col-md-4 col-xs-12 padding-top-5">
                        <p className="text-center numbers-subtitle">125</p>
                        <p className="text-center text-numbers">Websites</p>
                    </div>
                    <div className="col-md-4 col-xs-12 padding-top-5">
                        <p className="text-center numbers-subtitle">14</p>
                        <p className="text-center text-numbers">Mobile Apps</p>
                    </div>
                    <div className="col-md-4 col-xs-12 padding-top-5">
                        <p className="text-center numbers-subtitle">54</p>
                        <p className="text-center text-numbers">Tools for developers</p>
                    </div>
                </div>
                <ProcessCards/>
                <QuoteHome/>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
