import { MutableRefObject, useCallback, useEffect, useRef } from 'react';
import { UseEmblaCarouselType } from 'embla-carousel/react';

export type Props = {
    autoplay?: number;
    next: MutableRefObject<() => void>;
    emblaApi: UseEmblaCarouselType[1];
};

export default function useAutoplay(props: Props) {
    const { autoplay, next, emblaApi } = props;

    const autoPlayTimer = useRef(0);

    const stop = useCallback(() => {
        clearTimeout(autoPlayTimer.current);
    }, []);

    const stopOnPointerEvent = useCallback(() => {
        stop();
        emblaApi.off('pointerDown', stopOnPointerEvent);
    }, [emblaApi, stop]);

    const autoScrollNext = useCallback(() => {
        stop();
        autoPlayTimer.current = window.setTimeout(() => {
            next.current();
            autoScrollNext();
        }, autoplay);
    }, [stop, autoplay, next]);

    useEffect(() => {
        if (!autoplay || !emblaApi) {
            return;
        }

        autoScrollNext();

        emblaApi.on('pointerDown', stopOnPointerEvent);

        return () => {
            clearTimeout(autoPlayTimer.current);
            emblaApi.off('pointerDown', stopOnPointerEvent);
        };
    }, [autoScrollNext, autoplay, emblaApi, stop, stopOnPointerEvent]);

    return {
        stop
    };
}
