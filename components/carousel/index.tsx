import React, { useState, useEffect, useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';

import { PrevButton, NextButton } from './buttons';
import { Dots } from './dots';
import { useRecursiveTimeout } from '../../hooks/useRecursiveTimeout';
import { classNames } from '../../lib/class-names';
import { TSlide } from './slide';
import { TVideoSlide } from './videoSlide';

import styles from './carousel.module.css';

export { default as Slide } from './slide';
export { default as VideoSlide } from './videoSlide';
export { default as SlideTitle } from './title';

type SlideGenerators = {
    cmp: React.FC;
    props: object;
};

type Props = {
    slides?: TSlide[] | TVideoSlide[];
    slideGenerators?: SlideGenerators[];
    wrapClass?: string;
    autoplay?: boolean;
    autoplaySpeed?: number;
    showPrev?: boolean;
    showNext?: boolean;
};

const EmblaCarousel: React.FC<Props> = ({
    wrapClass,
    slides,
    slideGenerators,
    showPrev = true,
    showNext = true,
    autoplay: isAutoplayEnabled,
    autoplaySpeed = 5000
}) => {
    const [viewportRef, embla] = useEmblaCarousel({
        containScroll: 'trimSnaps',
        draggableClass: styles.isDraggable,
        draggingClass: styles.isDragging
    });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [refs] = useState<React.RefObject<HTMLVideoElement>[]>((slideGenerators || []).map(() => React.createRef()));

    const autoplay = useCallback(() => {
        if (!embla || !isAutoplayEnabled) return;

        if (embla.canScrollNext()) {
            embla.scrollNext();
        } else {
            embla.scrollTo(0);
        }
    }, [embla, isAutoplayEnabled]);

    const { play, stop } = useRecursiveTimeout(autoplay, autoplaySpeed);

    const scrollPrev = useCallback(() => {
        if (!embla) return;

        stop();
        embla.scrollPrev();
    }, [embla, stop]);
    const scrollNext = useCallback(() => {
        if (!embla) return;

        stop();
        embla.scrollNext();
    }, [embla, stop]);
    const scrollTo = useCallback(
        (index) => {
            if (!embla) return;

            stop();
            embla.scrollTo(index);
        },
        [embla, stop]
    );

    const onSelect = useCallback(() => {
        if (!embla) return;

        setSelectedIndex(embla.selectedScrollSnap());
        showPrev && setPrevBtnEnabled(embla.canScrollPrev());
        showNext && setNextBtnEnabled(embla.canScrollNext());

        const visibleSlides = embla.slidesInView(true);

        refs.forEach((ref, index) => {
            if (!ref?.current) {
                return;
            }

            const elem = ref.current;

            if (visibleSlides.includes(index)) {
                elem.play();
            } else {
                elem.pause();
            }
        });
    }, [embla]);

    useEffect(() => {
        isAutoplayEnabled && play();
    }, [play, isAutoplayEnabled]);

    useEffect(() => {
        if (!embla) return;

        onSelect();
        setScrollSnaps(embla.scrollSnapList());

        embla.on('select', onSelect);
    }, [embla, onSelect, setScrollSnaps]);

    return (
        <>
            <div className={classNames(styles.carousel, wrapClass)}>
                <div className={styles.viewport} ref={viewportRef}>
                    <div className={styles.container}>
                        {slides
                            ? slides
                            : slideGenerators
                            ? slideGenerators.map(({ cmp, props }, index) =>
                                  React.createElement(cmp, { ref: refs[index], ...props } as object)
                              )
                            : null}
                    </div>
                </div>
                {showPrev && <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />}
                {showNext && <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />}
            </div>
            <Dots {...{ scrollSnaps, scrollTo, selectedIndex }} />
        </>
    );
};

export default EmblaCarousel;
