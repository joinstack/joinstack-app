import React from 'react';


function Footer() {
    return (
        <div className="footer fixed-bottom">
            <div className="social-icons text-center">
                <ul>
                    <li>
                        <a href="https://github.com/joinstack" aria-label="Github">
                            <i className="fa fa-github fa-lg" aria-hidden />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/joinstacktech" aria-label="Instagram">
                            <i className="fa fa-instagram fa-lg" aria-hidden />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/joinstack/" aria-label="LinkedIn">
                            <i className="fa fa-linkedin fa-lg" aria-hidden />
                        </a>
                    </li>
                </ul>
            </div>
            <p className="text-center">© 2018-2021 Joinstack. All rights reserved.</p>
        </div>
    )
}

export default Footer;