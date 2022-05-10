import React from 'react';
import video from '../assets/fast-website.mp4';

function FastVideoSection() {
    return (
        <div className="row process-main">
            <div className="col-md-6 col-xs-12">
                <div class="embed-responsive embed-responsive-16by9">
                    <video class="embed-responsive-item" src={video} loop autoPlay muted playsinline></video>
                </div>
            </div>
            <div className="col-md-6 col-xs-12">
                <h3 className="text-center font-rubik-bold process-main-title">Web apps that are crazy fast</h3>
            </div>          
        </div>
    )
}

export default FastVideoSection;