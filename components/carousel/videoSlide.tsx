import React from 'react';
import Link from 'next/link';

import { Url } from '../../lib/url-builder';

import styles from './slide.module.css';

type Props = { videoSrc: string; link: Url };

const VideoSlide = React.forwardRef<HTMLVideoElement, Props>(({ videoSrc, link, children }, ref) => {
    return (
        <div className={styles.slide}>
            <Link {...link}>
                <a className={styles.inner}>
                    <video
                        className={styles.img}
                        src={videoSrc}
                        autoPlay={false}
                        loop
                        muted
                        controls={false}
                        ref={ref}
                    />
                    {children}
                </a>
            </Link>
        </div>
    );
});

export type TVideoSlide = typeof VideoSlide;

export default VideoSlide;
