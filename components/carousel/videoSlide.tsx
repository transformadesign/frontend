import React, { useCallback } from 'react';
import Link from 'next/link';
import { RichText, RichTextBlock } from 'prismic-reactjs';

import { classNames } from '../../lib/class-names';
import { Url } from '../../lib/url-builder';
import { leadZero } from '../../lib/leadZero';
import Container from '../container';

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

    const titleText = RichText.asText(title);

    return (
        <div className={classNames(styles.slide)}>
            <Link {...link}>
                <a className={styles.inner} aria-label={titleText}>
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
                        className="absolute top-0 bottom-0 left-0 right-0 flex flex-row justify-center"
                        aria-hidden="true"
                    >
                        <Container className="flex flex-col flex-grow justify-center py-24 overflow-hidden">
                            <div>{leadZero(index + 1)}</div>
                            <div className="text-xs uppercase">{RichText.asText(foreignTitle)}</div>
                            <h3 className="text-4xl font-bold">{titleText}</h3>
                        </Container>
                    </div>
                    {children}
                </a>
            </Link>
        </div>
    );
});

export default VideoSlide;
