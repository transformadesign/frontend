import React, { useCallback } from 'react';
import Link from 'next/link';
import { RichText, RichTextBlock } from 'prismic-reactjs';

import { classNames } from '../../lib/class-names';
import { Url } from '../../lib/url-builder';
import { leadZero } from '../../lib/leadZero';

import styles from './slide.module.css';

export type Props = {
    videoSrc: string;
    poster?: string;
    link: Url;
    index: number;
    title: RichTextBlock[];
    foreignTitle: RichTextBlock[];
};
const EXT_REGEX = /\.([^.]+)$/;
const EXT_TYPES = {
    mp4: 'video/mp4',
    webm: 'video/webm'
};

const VideoSlide = React.forwardRef<HTMLVideoElement, Props>((props, ref) => {
    const { videoSrc, poster, link, index, title, foreignTitle, children } = props;
    const getMime = useCallback((src: string): string | undefined => {
        const match = EXT_REGEX.exec(src);

        if (!match) {
            return;
        }

        return EXT_TYPES[match[1]];
    }, []);

    return (
        <div className={classNames(styles.slide)}>
            <Link {...link}>
                <a className={styles.inner}>
                    <video
                        className={styles.img}
                        autoPlay={false}
                        loop={false}
                        muted
                        playsInline
                        controls={false}
                        ref={ref}
                        poster={poster}
                        preload="metadata"
                        data-novideo={videoSrc ? undefined : true}
                    >
                        {videoSrc && <source src={videoSrc} type={getMime(videoSrc)} />}
                    </video>
                    <div
                        className="flex flex-col absolute top-0 bottom-0 left-0 right-0 py-24 px-2 justify-center box-content"
                    >
                        <div>{leadZero(index + 1)}</div>
                        <div className="text-xs uppercase">{RichText.asText(foreignTitle)}</div>
                        <h3 className="text-4xl font-bold">{RichText.asText(title)}</h3>
                    </div>
                    {children}
                </a>
            </Link>
        </div>
    );
});

export default VideoSlide;
