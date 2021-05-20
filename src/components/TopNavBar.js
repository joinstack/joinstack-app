import React from 'react';

import {Link, Route} from 'react-router-dom';


function TopNavBar() {
    return (
        <nav>
            <input type="checkbox" id="nav" className="hidden" />
            <label htmlFor="nav" className="nav-btn">
                <i />
                <i />
                <i />
            </label>
            <div className="logo">
                <Link to="/">Joinstack</Link>
            </div>
            <div className="nav-wrapper">
                <ul>
                    <li>
                        <Link to="/">How it works</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/blog">Our Work</Link>
                    </li>
                    <li>
                        <Link to="/">Get started</Link>
                    </li> 
                </ul>
            </div>
        </nav>
    )
}

export default TopNavBar;