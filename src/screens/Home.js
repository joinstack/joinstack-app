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
            </div>
            <Footer />
        </div>
    )
}

export default Home;
