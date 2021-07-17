import React, { useContext } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';

import styles from './carousel/carousel.module.css';
import stylesSlide from './html_latest_project.module.css';
import { classNames } from '../lib/class-names';
import { buildUrl } from '../lib/url-builder';
import Link from 'next/link';
import { Context } from '../context/main';

const data = [
    {
        name: 'luxury villa',
        link: 'xxii-carat',
        location: 'Perth, Australia'
    },
    {
        name: 'wooden villa',
        link: 'xxii-carat',
        location: 'New York, USA'
    },
    {
        name: 'Skyline',
        link: 'xxii-carat',
        location: 'Michigan, USA'
    },
    {
        name: 'Frozen house',
        link: 'xxii-carat',
        location: 'Mexico'
    }
];

const HtmlLatestProject: React.FC = () => {
    const { lang } = useContext(Context);
    const [emblaRef] = useEmblaCarousel({
        align: 0,
        slidesToScroll: 2,
        skipSnaps: true
    });

    return (
        <section className="wrap wrap--w1790 p-b-75">
            <div className="section-title m-b-70">
                <h5 className="title-sub">our work</h5>
                <h2 className="title-1">Latest project</h2>
            </div>
            <div className="container-fluid">
                <div className={styles.viewport} ref={emblaRef}>
                    <div className={styles.container}>
                        {[...data, ...data].map((item, i) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <div className={classNames('slick-item', stylesSlide.slide)} key={i}>
                                <article className="media media-project">
                                    <figure className="media__img">
                                        <img src="images/project-01.jpg" alt={item.name} />
                                    </figure>
                                    <div className="bg-overlay" />
                                    <div className="media__body">
                                        <h3 className="title">
                                            <Link {...buildUrl('project', lang, { uid: item.link })}>
                                                <a>{item.name}</a>
                                            </Link>
                                        </h3>
                                        <div className="address">{item.location}</div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

    /* return (
        <section className="wrap wrap--w1790 p-b-75">
            <div className="section-title m-b-70">
                <h5 className="title-sub">our work</h5>
                <h2 className="title-1">Latest project</h2>
            </div>
            <div className="container-fluid">
                <div
                    className="slick-wrap slick-project js-slick-wrapper"
                    data-slick-xs="1"
                    data-slick-sm="1"
                    data-slick-md="3"
                    data-slick-lg="4"
                    data-slick-xl="4"
                    data-slick-dots="false"
                    data-slick-customnav="true"
                    data-slick-autoplay="true"
                    data-slick-slide=".slick-item"
                >
                    <div className="slick-wrap-content">
                        <div className="slick-content js-slick-content">
                            {
                                data.map((item, i) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <div className="slick-item" key={i}>
                                        <article className="media media-project">
                                            <figure className="media__img">
                                                <img src="images/project-01.jpg" alt={item.name} />
                                            </figure>
                                            <div className="bg-overlay" />
                                            <div className="media__body">
                                                <h3 className="title">
                                                    <a href="project-detail-1.html">{item.name}</a>
                                                </h3>
                                                <div className="address">{item.location}</div>
                                            </div>
                                        </article>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="slick__nav arrows-1">
                        <i className="slick-prev slick-arrow js-slick-prev ti-angle-left" />
                        <i className="slick-next slick-arrow js-slick-next ti-angle-right" />
                    </div>
                </div>
            </div>
        </section>
    ); */
};

export default HtmlLatestProject;
