import React from 'react';
import {Link} from 'react-router-dom';


function ArticleList() {
    return (
            <div className="row articles-row">
                <div className="col-lg-6 col-sm-12">
                    <section className="article-item" style={{ backgroundColor: 'rgba( 42,49,198, 1.0)' }}>
                        <header>
                            <div className="row title-row">
                                <div className="col-md-10 col-sm-10 col-10">
                                    <h4 className="post-title mb-0"> <Link to="/blog/react-app-deployment-firebase"> How to deploy a React application to Firebase </Link></h4>
                                </div>
                                <div className="col-md-2 col-sm-2 col-2 free-col-label">
                                </div>
                            </div>
                        </header>
                        <div className="post-bottom">
                            <div className="row">
                                <div className="col-md-10 col-sm-10 col-10">
                                    <div className="short-description">
                                        <p className="mb-0">Detailed tutorial on how to deploy a React app in minutes.</p>
                                    </div>
                                    <p className="mb-0 extension-text"> About <a href="#">React</a> <a href="#">Firebase</a><a href="#"> Hosting</a></p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <section className="article-item" style={{ backgroundColor: '#663399' }}>
                        <header>
                            <div className="row title-row">
                                <div className="col-md-10 col-sm-10 col-10">
                                    <h4 className="post-title mb-0"> <Link to="/blog/free-lost-my-luggage"> Github Actions: Continuous Delivery with Firebase </Link></h4>
                                </div>
                                <div className="col-md-2 col-sm-2 col-2 free-col-label">
                                </div>
                            </div>
                        </header>
                        <div className="post-bottom">
                            <div className="row">
                                <div className="col-md-10 col-sm-10 col-10">
                                    <div className="short-description">
                                        <p className="mb-0">Using workflows in GitHub Actions to deploy pull requests automatically to a staging environment</p>
                                    </div>
                                    <p className="mb-0 extension-text"> About <a href="#">Github Actions</a> <a href="#"> Firebase</a> <a href="#">CI </a><a href="#"> Hosting</a></p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    )
}

export default ArticleList;