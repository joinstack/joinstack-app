import React from 'react';

import HeaderTitle from '../components/HeaderTitle';
import Footer from '../components/Footer';
import TopNavBar from '../components/TopNavBar';

import illustration from '../assets/working-in-office.svg';
import ProcessCards from '../components/ProcessCards';
import QuoteHome from '../components/QuoteHome';
import PerformanceNumbers from '../components/PerformanceNumbers';

function Home() {

     
 
    return (
        <div className="flex-wrapper">
            <div className="container container-main-page">
                <TopNavBar/>
                <HeaderTitle/>
                <img src={illustration} class="illustration-img text-center"/>
                <div className="max-width-800">
                    <h3 className="title-presentation text-center">We are a web and mobile app development company that turns your ideas into a new driving force of your business.</h3>
                    <p className="description-presentation text-center">We work with brilliant web and mobile app developers to deliver projects on time and maintain the top-notch code standards.</p>
                </div>
                <PerformanceNumbers/>
                <ProcessCards/>
                <QuoteHome/>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
