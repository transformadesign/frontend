import React from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';

import styles from './carousel/carousel.module.css';
import stylesSlide from './html_projects.module.css';
import { classNames } from '../lib/class-names';

const data = [
    {
        img: '/images/slide-01.jpg',
        link: '/project',
        name: 'Cora Restaurant',
        location: 'Perth - Australia'
    },
    {
        img: '/images/slide-12.jpg',
        link: '/project',
        name: 'Stone Home',
        location: 'Canberra - Australia'
    },
    {
        img: '/images/slide-13.jpg',
        link: '/project',
        name: 'Shine House',
        location: 'Rio - Brazil'
    }
];

const HtmlProjects: React.FC = () => {
    const [emblaRef] = useEmblaCarousel({
        align: 'center',
        slidesToScroll: 1,
        skipSnaps: true
    });

    return (
        <div className="container-fluid">
            <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.container}>
                    {[...data, ...data].map((item, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div className={classNames('slick-item', stylesSlide.slide)} key={i}>
                            <article className="media media-project">
                                <figure className="media__img">
                                    <img src={item.img} alt={item.name} />
                                </figure>
                                <div className="bg-overlay" />
                                <div className="media__body">
                                    <h3 className="title">
                                        <a href={item.link}>{item.name}</a>
                                    </h3>
                                    <div className="address">{item.location}</div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HtmlProjects;
