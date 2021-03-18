import React, { useCallback, useEffect, useMemo, useRef } from 'react';
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
    const speedMs = speed / 100;
    const isCurrent = index === selectedIndex;
    const isPassed = index < selectedIndex;
    /**
     * транзишн медленнее на 1ms, чтобы не было видно стопов,
     * если raf сработал позднее завершения анимации
     */
    const fpsTimeDiff = 599;

    const progressRef = useRef<HTMLSpanElement>(null);

    const raf = useRef(0);
    const time = useRef(0);
    const prevTime = useRef(0);

    const getProgress = useCallback(
        (hrTime: number) => {
            const { currentTime, duration, readyState } = videoRef.current || {};

            if (readyState === 4 && !duration) {
                return 0;
            }

            return isNaN(duration) || !duration ? (hrTime - time.current) / speedMs : (currentTime / duration) * 100;
        },
        [speedMs, videoRef]
    );

    const drawProgress = useCallback((progress: number) => {
        const elem = progressRef.current;

        if (!elem) {
            return;
        }

        elem.style.transform = `translate3D(${progress}%, 0, 0)`;
    }, []);

    const ticker = useCallback(
        (hrTime: number) => {
            if (hrTime - prevTime.current < fpsTimeDiff) {
                raf.current = requestAnimationFrame(ticker);
                return;
            }

            prevTime.current = hrTime;

            if (!time.current) {
                time.current = hrTime;
            }

            const progress = getProgress(hrTime);

            if (progress < 100) {
                raf.current = requestAnimationFrame(ticker);
            } else {
                scrollTo(index + 1);
            }

            drawProgress(Math.min(progress, 100));
        },
        [drawProgress, fpsTimeDiff, getProgress, index, scrollTo]
    );

    const onClick = useCallback(() => {
        scrollTo(index);
    }, [index, scrollTo]);

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
            drawProgress(100);
        } else {
            drawProgress(0);
        }
    }, [isPassed, selectedIndex, drawProgress]);

    return (
        <button
            type="button"
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
            <div className="max-w-xxs uppercase text-xs tracking-widest mb-8 hidden sm:block">
                {RichText.asText(thumbName)}
            </div>
            <div className="h-0.5 mt-auto sm:h-px relative overflow-hidden w-full">
                <span
                    ref={progressRef}
                    className={classNames(styles.bar, 'absolute block w-full h-full bg-white')}
                    style={{
                        transitionDuration: `${fpsTimeDiff + 1}ms`
                    }}
                />
            </div>
        </button>
    );
};

export type TThumb = typeof Thumb;

export default Thumb;
