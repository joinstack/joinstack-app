import React from 'react';
import video from '../assets/fast-website.mp4';

function FastVideoSection() {
    return (
        <div className="row process-main">
            <div className="col-md-6 col-xs-12">
                <div class="embed-responsive embed-responsive-16by9">
                    <video className="embed-responsive-item" src={video} autoPlay loop muted playsInline></video>
                </div>
            </div>
            <div className="col-md-6 col-xs-12">
                <h3 className="text-center font-rubik-bold process-main-title">Web apps that are crazy fast</h3>
                <p className="description-process text-center">How fast your web app is, can mean the difference from failure to
                succcess. Your company deserve the fastest app you can get. And we can deliver it.</p>
            </div>          
        </div>
    )
}

export default FastVideoSection;