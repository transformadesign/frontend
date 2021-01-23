import React, { useCallback } from 'react';
import Link from 'next/link';
import { RichText, RichTextBlock } from 'prismic-reactjs';

import { classNames } from '../../lib/class-names';
import { Url } from '../../lib/url-builder';
import { leadZero } from '../../lib/leadZero';
import Container from '../container';

import styles from './slide.module.css';

export type Props = {
    videoSrc?: string;
    poster?: string;
    link: Url;
    index: number;
    mainTitle?: RichTextBlock[];
    foreignTitle?: RichTextBlock[];
    description?: RichTextBlock[];
};
const EXT_REGEX = /\.([^.]+)$/;
const EXT_TYPES = {
    mp4: 'video/mp4',
    webm: 'video/webm'
};

const VideoSlide = React.forwardRef<HTMLVideoElement, Props>((props, ref) => {
    const { videoSrc, poster, link, index, mainTitle, foreignTitle, description, children } = props;
    const getMime = useCallback((src: string): string | undefined => {
        const match = EXT_REGEX.exec(src);

        if (!match) {
            return;
        }

        return EXT_TYPES[match[1]];
    }, []);

    const titleText = mainTitle ? RichText.asText(mainTitle) : '';

    return (
        <div className={classNames(styles.slide, 'h-screen sm:h-xv')}>
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
                        className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end sm:flex-row sm:justify-center"
                        aria-hidden="true"
                    >
                        <i className="block h-72 sm:hidden"></i>
                        <Container className="flex flex-col sm:flex-grow overflow-x-hidden mb-24 sm:m-auto">
                            <div className="text-sm mb-2">{leadZero(index + 1)}</div>
                            {foreignTitle && <div className="text-xs uppercase tracking-widest mb-3">{RichText.asText(foreignTitle)}</div>}
                            {titleText && <h3 className="text-5xl font-bold leading-tight mb-8">{titleText}</h3>}
                            {description && <p className="text-sm leading-6">{RichText.asText(description)}</p>}
                            <i className={classNames(styles.arrow, 'w-32')}></i>
                        </Container>
                    </div>
                    {children}
                </a>
            </Link>
        </div>
    );
});

export default VideoSlide;
