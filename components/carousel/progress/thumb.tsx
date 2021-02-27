import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { RichText, RichTextBlock } from 'prismic-reactjs';

import { classNames } from '../../../lib/class-names';
import { leadZero } from '../../../lib/leadZero';

import styles from './thumb.module.css';

type Props = {
    index: number;
    selectedIndex: number;
    scrollTo: (index: number) => void;
    speed: number;
    thumbName: RichTextBlock[];
    videoRef: React.RefObject<HTMLVideoElement>;
};

const Thumb: React.FC<Props> = ({ index, selectedIndex, scrollTo, thumbName, speed, videoRef }) => {
    const isCurrent = index === selectedIndex;
    const speedMs = useMemo(() => speed / 100, [speed]);
    const raf = useRef(0);
    const time = useRef(0);
    const isPassed = useMemo(() => index < selectedIndex, [index, selectedIndex]);
    const [progress, setProgress] = useState(isPassed ? 100 : 0);
    const getProgress = useCallback((hrTime: number) => {
        const { currentTime, duration } = videoRef.current || {};

        return isNaN(duration) || !duration ?
            (hrTime - time.current) / speedMs :
            currentTime / duration * 100;
    }, [videoRef, speedMs]);

    const ticker = useCallback((hrTime: number) => {
        if (!time.current) {
            time.current = hrTime;
        }

        const progress = getProgress(hrTime);

        if (progress < 100) {
            raf.current = requestAnimationFrame(ticker);
        } else {
            scrollTo(index + 1);
        }

        setProgress(Math.min(Math.floor(progress), 100));
    }, [videoRef, speedMs, scrollTo]);

    const onClick = useCallback(() => {
        scrollTo(index);
    }, [scrollTo]);

    useEffect(() => {
        if (isCurrent) {
            time.current = 0;
            raf.current = requestAnimationFrame(ticker);
        } else {
            cancelAnimationFrame(raf.current);
        }

        return () => cancelAnimationFrame(raf.current);
    }, [isCurrent, ticker]);

    useEffect(() => {
        if (isPassed) {
            setProgress(100);
        } else {
            setProgress(0);
        }
    }, [isPassed, selectedIndex]);

    return (
        <button
            className={classNames(
                styles.btn,
                index < selectedIndex && styles.passed,
                isCurrent && styles.current,
                'pr-1 sm:pr-2 pt-4 pb-9 flex flex-col cursor-pointer border-none ' +
                'text-left focus:outline-none flex-grow'
            )}
            onClick={onClick}
        >
            <div className="text-xs sm:text-sm mb-2">{leadZero(index + 1)}</div>
            <div className="max-w-xxs uppercase text-xs tracking-widest mb-8 hidden sm:block">{RichText.asText(thumbName)}</div>
            <div className="h-0.5 mt-auto sm:h-px relative overflow-hidden w-full">
                <span className={classNames(styles.bar, 'absolute block w-full h-full bg-white')} style={{ transform: `translate3D(${progress}%, 0, 0)` }} />
            </div>
        </button>
    );
};

export type TThumb = typeof Thumb;

export default Thumb;
