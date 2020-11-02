import React, { useCallback } from 'react';
import Link from 'next/link';

import { Url } from '../../lib/url-builder';

import styles from './slide.module.css';

type Props = { videoSrc: string; poster?: string, link: Url };
const EXT_REGEX = /\.([^.]+)$/;
const EXT_TYPES = {
    mp4: 'video/mp4',
    webm: 'video/webm'
};

const VideoSlide = React.forwardRef<HTMLVideoElement, Props>(({ videoSrc, poster, link, children }, ref) => {
    const getMime = useCallback((src: string): string | undefined => {
        const match = EXT_REGEX.exec(src);

        if (!match) {
            return;
        }

        return EXT_TYPES[match[1]];
    }, []);

    return (
        <div className={styles.slide}>
            <Link {...link}>
                <a className={styles.inner}>
                    <video
                        className={styles.img}
                        autoPlay={false}
                        loop
                        muted
                        playsInline
                        controls={false}
                        ref={ref}
                        poster={poster}
                    >
                        <source src={videoSrc} type={getMime(videoSrc)} />
                    </video>
                    {children}
                </a>
            </Link>
        </div>
    );
});

export type TVideoSlide = typeof VideoSlide;

export default VideoSlide;
