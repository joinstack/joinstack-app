import React from 'react';


function PerformanceNumbers() {
    return (
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
    )
}

export default PerformanceNumbers;