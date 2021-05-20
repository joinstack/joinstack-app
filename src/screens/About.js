import React from 'react';

import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';

function About() {
    return (
        <div className="flex-wrapper">
            <div className="container">
                <TopNavBar />
                <h1 className="about-title text-center">About Us</h1>
                <div id="typedtext">
                    <p className="text-center bio">We are JoinStack, an independent software development company in Bucharest.<br />We build apps, products and experiences that represent you.<br />Your product. Your company. Your audience.<br />In the process of developing a product our approach is always the same, in that it’s never the same.<br />We start by listening and let that shape our design process, with our clients as partners every step of the way.<br />Then, we bring designs to life. Capture your audience’s attention and leave an impression,<br />telling your story through concept, color, creativity and awesome code.<br />Finally whether you play it, watch it, double tap or swipe it, we merge the creative and the technical to build it.<br />Scaled up or scaled down, on any screen or surface. You name it, we make it.<br />Because we help brands all over the world to create impressive products!</p> 
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;