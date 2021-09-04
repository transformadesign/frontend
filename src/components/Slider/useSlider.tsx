import { useCallback, useEffect, useRef, useState } from 'react';
import { useEmblaCarousel, UseEmblaCarouselType } from 'embla-carousel/react';
import { EmblaOptionsType } from 'embla-carousel/embla-carousel-vanilla/options';

import useAutoplay from '@cmp/Slider/useAutoplay';

import styles from './Slider.module.css';

export type Props = {
    options?: EmblaOptionsType;
    autoplay?: number;
};

export default function useSlider(props: Props) {
    const { options, autoplay } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel({
        draggableClass: styles.draggable,
        draggingClass: styles.dragging,
        ...options
    });
    const autoPlayNext = useRef(() => {});
    const autoPlay = useAutoplay({ autoplay, emblaApi, next: autoPlayNext });
    const timerRef = useRef(0);
    const temporaryRef: UseEmblaCarouselType[0] = useCallback(instance => {
        if (instance) {
            timerRef.current = requestAnimationFrame(() => {
                emblaRef(instance);
            });
        }
    }, [emblaRef]);

    useEffect(() => {
        return () => {
            cancelAnimationFrame(timerRef.current);
        }
    }, []);

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;

        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    const scrollPrev = useCallback(() => {
        if (!emblaApi) return;

        emblaApi.scrollPrev();
        autoPlay.stop();
    }, [autoPlay, emblaApi]);
    const scrollNext = useCallback(() => {
        if (!emblaApi) return;

        emblaApi.scrollNext();
        autoPlay.stop();
    }, [autoPlay, emblaApi]);
    autoPlayNext.current = scrollNext;

    const scrollTo = useCallback(
        (index) => {
            if (!emblaApi) return;

            emblaApi.scrollTo(index < emblaApi.slideNodes().length ? index : 0);
            autoPlay.stop();
        },
        [autoPlay, emblaApi]
    );

    useEffect(() => {
        if (!emblaApi) return;

        onSelect();

        emblaApi.on('select', onSelect);

        return () => {
            emblaApi?.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);

    return {
        emblaApi,
        emblaRef: temporaryRef,
        prevBtnEnabled,
        nextBtnEnabled,
        selectedIndex,
        scrollPrev,
        scrollNext,
        scrollTo
    };
}
