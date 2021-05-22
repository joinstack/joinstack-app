import React from 'react';
import { Link } from 'react-router-dom';

import TopNavBar from '../components/TopNavBar';
import ArticleList from '../components/ArticleList';
import Footer from '../components/Footer';

function Blog() {
    return (
        <div className="flex-wrapper">
            <div className="container">
                <TopNavBar />
                <div id="articles" className="articles-section">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="section-title" id="all_articles">Our work</h2>
                        </div>
                        <ArticleList />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog;