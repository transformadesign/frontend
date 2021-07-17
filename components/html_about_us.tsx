import React from 'react';

const AboutUs: React.FC = () => (
    <section className="p-t-120">
        <div className="container">
            <div className="media-about-2 p-b-80">
                <div className="media__img">
                    <img src="images/about-02.jpg" alt="About Us" />
                </div>
                <div className="media__body">
                    <h5 className="title-sub">About us</h5>
                    <h2 className="title-1">We are Transforma</h2>
                    <p className="media__text">
                        Since 2002 the studio has been designing private and public interiors. By this time an
                        impressive amount of projects have been designed and implemented: malls, hotels, restaurants,
                        fitness and spa centers, beauty salons, bars, business centres, demonstration halls and luxury
                        apartments. We work worldwide.
                    </p>
                    <a className="au-btn au-btn--arrow" href="/about">
                        Learn more
                        <i className="zmdi zmdi-arrow-right ic-arrow" />
                    </a>
                </div>
            </div>
            <div className="section-row section-row--fit">
                <div className="media-statistic">
                    <span className="ti-cup media__icon wow fadeInLeft" data-wow-delay="0.2s" />
                    <div className="media__body">
                        <span className="number js-counterup">360</span>
                        <h4 className="name">days of brainstorming sessions a year</h4>
                    </div>
                </div>
                <div className="media-statistic">
                    <span className="ti-user media__icon wow fadeInLeft" data-wow-delay="0.2s" />
                    <div className="media__body">
                        <span className="number js-counterup">150</span>
                        <h4 className="name">completed projects in style &apos;de luxe&apos;</h4>
                    </div>
                </div>
                <div className="media-statistic">
                    <span className="ti-home media__icon wow fadeInLeft" data-wow-delay="0.2s" />
                    <div className="media__body">
                        <span className="number js-counterup">20</span>
                        <h4 className="name">cities around the world where our ideas were embodied</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutUs;
