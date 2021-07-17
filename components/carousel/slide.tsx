import React from 'react';
import Link from 'next/link';

import { Url } from '../../lib/url-builder';

import styles from './slide.module.css';

const Slide: React.FC<{ imgSrc: string; imgAlt: string; link: Url }> = ({ imgSrc, imgAlt, link, children }) => (
    <div className={styles.slide}>
        <Link {...link}>
            <a className={styles.inner}>
                <img className={styles.img} src={imgSrc} alt={imgAlt} />
                {children}
            </a>
        </Link>
    </div>
);

export type TSlide = typeof Slide;

export default Slide;
