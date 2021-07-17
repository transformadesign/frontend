import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';

import { classNames } from '../../lib/class-names';
import { buildUrl } from '../../lib/url-builder';
import { Main } from '../../lib/api';

import { Context } from '../../context/main';

import Progress from './progress';
import Thumb from './progress/thumb';
import VideoSlide from './videoSlide';

import styles from './carousel.module.css';

type Props = {
    wrapClass?: string;
    progressSpeed?: number;
    data?: Main;
    startIndex?: number;
};

const VideoCarousel: React.FC<Props> = ({ wrapClass, progressSpeed, data, startIndex = 0 }) => {
    const { lang } = useContext(Context);
    const [selectedIndex, setSelectedIndex] = useState(startIndex);
    const [viewportRef, embla] = useEmblaCarousel({
        containScroll: 'trimSnaps',
        draggable: false,
        startIndex: selectedIndex
    });
    const [refs, setRefs] = useState<React.RefObject<HTMLVideoElement>[]>([].map(() => React.createRef()));
    const slideContent = useMemo(() => data.fields || [], [data.fields]);

    useEffect(() => {
        const visibilityHandler = () => {
            refs.forEach((ref) => {
                const elem = (ref as React.RefObject<HTMLVideoElement & { prevState: boolean }>).current;

                if (!elem) {
                    return;
                }

                if (document.visibilityState === 'visible') {
                    elem.prevState && elem.play().catch();
                    elem.prevState = false;
                } else if (document.visibilityState === 'hidden') {
                    elem.prevState = !elem.paused;
                    elem.prevState && elem.pause();
                }
            });
        };

        document.addEventListener('visibilitychange', visibilityHandler);

        return () => document.removeEventListener('visibilitychange', visibilityHandler);
    }, [refs]);

    const onSelect = useCallback(() => {
        if (!embla) return;

        setSelectedIndex(embla.selectedScrollSnap());

        const visibleSlides = embla.slidesInView(true);

        refs.forEach((ref, index) => {
            if (!ref?.current) {
                return;
            }

            const elem = ref.current;

            if (elem.dataset.novideo) {
                return;
            }

            if (visibleSlides.includes(index)) {
                const playPromise = elem.play();
                // const playPromise = Promise.resolve();

                if (playPromise) {
                    playPromise.catch(() => {});
                }
            } else {
                elem.pause();
            }
        });
    }, [embla, refs]);

    const scrollTo = useCallback(
        (index) => {
            if (!embla) return;

            embla.scrollTo(index < embla.slideNodes().length ? index : 0);
        },
        [embla]
    );

    useEffect(() => {
        if (!embla) return;

        onSelect();

        embla.on('select', onSelect);
    }, [embla, onSelect]);

    const carousel = useMemo(() => {
        const result = slideContent.reduce(
            (result, slide, index) => {
                const ref = React.createRef<HTMLVideoElement>();

                result.videoRefs.push(ref);

                result.slides.push(
                    // @ts-ignore
                    <VideoSlide
                        key={`slide_${lang}_${slide.media?.url || index}`}
                        videoSrc={slide.media?.url}
                        poster={slide.image?.url}
                        link={buildUrl('main', lang)}
                        ref={ref}
                        index={index}
                        {...slide}
                    />
                );

                return result;
            },
            { videoRefs: [], slides: [] }
        );

        setRefs(result.videoRefs);

        return result;
    }, [slideContent, lang]);

    const thumbs = useMemo(
        () =>
            slideContent.reduce((result, { media, thumbName, slide_interval }, index) => {
                result.push(
                    <Thumb
                        key={`slide_${lang}_${media?.url || index}`}
                        index={index}
                        selectedIndex={selectedIndex}
                        scrollTo={scrollTo}
                        speed={slide_interval || progressSpeed}
                        thumbName={thumbName}
                        videoRef={refs[index]}
                    />
                );

                return result;
            }, []),
        [slideContent, lang, selectedIndex, scrollTo, progressSpeed, refs]
    );

    return (
        <>
            <div className={classNames(styles.carousel, wrapClass, 'text-white')}>
                <div className={styles.viewport} ref={viewportRef}>
                    <div className={styles.container}>{carousel?.slides?.length ? carousel.slides : null}</div>
                </div>
                {thumbs?.length ? <Progress className="absolute bottom-0">{thumbs}</Progress> : null}
            </div>
        </>
    );
};

VideoCarousel.displayName = 'VideoCarousel';

export default VideoCarousel;
