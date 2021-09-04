import { useCallback, useEffect, useRef, useState } from 'react';
import { useEmblaCarousel, UseEmblaCarouselType } from 'embla-carousel/react';
import { EmblaOptionsType } from 'embla-carousel/embla-carousel-vanilla/options';

import styles from './Slider.module.css';

type Props = {
    options?: EmblaOptionsType;
};

export default function useSlider(props: Props) {
    const { options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel({
        draggableClass: styles.draggable,
        draggingClass: styles.dragging,
        ...options
    });
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
    }, [emblaApi]);
    const scrollNext = useCallback(() => {
        if (!emblaApi) return;

        emblaApi.scrollNext();
    }, [emblaApi]);
    const scrollTo = useCallback(
        (index) => {
            if (!emblaApi) return;

            emblaApi.scrollTo(index < emblaApi.slideNodes().length ? index : 0);
        },
        [emblaApi]
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
