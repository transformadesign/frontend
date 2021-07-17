import React, { useContext } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';

import styles from './carousel/carousel.module.css';
import stylesSlide from './html_projects.module.css';
import { classNames } from '../lib/class-names';
import { Context } from '../context/main';
import { buildUrl } from '../lib/url-builder';
import Link from 'next/link';

const data = [
    {
        img: '/images/slide-01.jpg',
        link: 'xxii-carat',
        name: 'Cora Restaurant',
        location: 'Perth - Australia'
    },
    {
        img: '/images/slide-12.jpg',
        link: 'xxii-carat',
        name: 'Stone Home',
        location: 'Canberra - Australia'
    },
    {
        img: '/images/slide-13.jpg',
        link: 'xxii-carat',
        name: 'Shine House',
        location: 'Rio - Brazil'
    }
];

const HtmlProjects: React.FC = () => {
    const { lang } = useContext(Context);
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
    );
};

export default HtmlProjects;
