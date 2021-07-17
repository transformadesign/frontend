import React from 'react';

const Service: React.FC = () => (
    <section className="section bg-pattern-tf p-t-60 p-b-20">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-xl-3">
                    <div className="section-title section-title--light text-left p-t-55">
                        <h5 className="title-sub">what we do</h5>
                        <h2 className="title-1">Our Specilization</h2>
                    </div>
                </div>
                <div className="col-md-12 col-xl-9">
                    <div className="service-wrap">
                        <div className="media-service-2">
                            <div className="media__body">
                                <div className="media__icon">
                                    <img src="images/icon/service-01.jpg" alt="service 1" />
                                </div>
                                <h4 className="media__title">
                                    <a href="#">INTERIOR DESIGN</a>
                                </h4>
                            </div>
                        </div>
                        <div className="media-service-2">
                            <div className="media__body">
                                <div className="media__icon">
                                    <img src="images/icon/service-02.jpg" alt="service 2" />
                                </div>
                                <h4 className="media__title">
                                    <a href="#">OUTER SPACES</a>
                                </h4>
                            </div>
                        </div>
                        <div className="media-service-2">
                            <div className="media__body">
                                <div className="media__icon">
                                    <img src="images/icon/service-03.jpg" alt="service 3" />
                                </div>
                                <h4 className="media__title">
                                    <a href="#">ARCHITECTURE</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Service;
