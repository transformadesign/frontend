import { useCallback, useEffect, useState } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
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
        emblaRef,
        prevBtnEnabled,
        nextBtnEnabled,
        selectedIndex,
        scrollPrev,
        scrollNext,
        scrollTo
    };
}
