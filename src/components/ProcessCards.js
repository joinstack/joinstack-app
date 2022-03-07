import React from 'react';


function ProcessCards() {
    return (
        <div className="row process-main">
                    <h3 className="text-center font-rubik-bold process-main-title">How we build apps</h3>
                    <div className="row">
                        <div className="col-md-6 col-xs-12 process-card padding-top-5">
                            <h5 className="font-rubik-bold process-subtitle text-center">DISCOVERY</h5>
                            <p className="description-process text-center">Our lean process delivers high-value items first. 
                                Iterative testing and analytics keep us continually focused on 
                                generating the best return for your business. We ask big questions: 
                                Why are we here? Where are we going? Asking the right questions is 
                                critical to discovering the best approach.</p>
                        </div>
                        <div className="col-md-6 col-xs-12 process-card padding-top-5">
                            <h5 className="font-rubik-bold process-subtitle text-center">DESIGN</h5>
                            <p className="description-process text-center">We study the science of user behavior. Smart design stays out of your way.
                                A beautiful interface elevates content to its best form. It instills 
                                confidence in your users and builds trust in your brand.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-xs-12 process-car padding-top-5">
                            <h5 className="font-rubik-bold process-subtitle text-center">DEVELOPMENT</h5>
                            <p className="description-process text-center">This is where it all comes together. 
                            This is where your lightning-fast app is born and where our lifelong 
                            dedication to engineering shines. Our developers don’t come to work 
                            to do a job—they come to perfect their craft.</p>
                        </div>
                        <div className="col-md-6 col-xs-12 process-card padding-top-5">
                            <h5 className="font-rubik-bold process-subtitle text-center">DEPLOYMENT</h5>
                            <p className="description-process text-center">This isn’t a one-night stand. 
                            We’re shooting for long, successful relationships. We use analytics, 
                            heat-mapping, split testing, and user research to be dead sure we get 
                            it right, and stay on track after launch.</p>
                        </div>
                    </div>
        </div>
    )
}

export default ProcessCards;