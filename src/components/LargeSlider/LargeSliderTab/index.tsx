import React, { useCallback, useEffect, useRef } from 'react';
import { classNames } from '@lib/classNames';

import styles from './LargeSliderTab.module.css';

type Props = {
    index: number;
    current: number;
    speed: number;
    className: string;
    scrollTo: (index: number) => void;
}

const LargeSliderTab: React.FC<Props> = props => {
    const { index, current, scrollTo, speed, children, className } = props;
    const normalSpeed = useRef(speed / 100);
    const isCurrent = index === current;
    const isPassed = index < current;

    /**
     * транзишн медленнее на 1ms, чтобы не было видно стопов,
     * если raf сработал позднее завершения анимации
     */
    const fpsTimeDiff = 599;

    const progressRef = useRef<HTMLSpanElement>(null);

    const raf = useRef(0);
    const timeStart = useRef(0);
    const time = useRef(0);

    const drawProgress = useCallback((progress: number) => {
        const elem = progressRef.current;

        if (!elem) {
            return;
        }

        elem.style.transform = `translate3D(${progress}%, 0, 0)`;
    }, []);

    const loop = useCallback((hrTime: number) => {
        if (!time.current) {
            time.current = hrTime;
            timeStart.current = hrTime;

            return raf.current = requestAnimationFrame(loop);
        }

        if (hrTime - time.current < fpsTimeDiff) {
            return raf.current = requestAnimationFrame(loop);
        }

        time.current = hrTime;

        const progress = (hrTime - timeStart.current) / normalSpeed.current;

        if (progress >= 100) {
            return scrollTo(index + 1);
        }

        drawProgress(progress);

        return raf.current = requestAnimationFrame(loop);
    }, [drawProgress, index, scrollTo]);

    useEffect(() => {
        if (isPassed) {
            drawProgress(100);
            return;
        }

        drawProgress(0);

        if (isCurrent) {
            raf.current = requestAnimationFrame(loop);

            return () => {
                timeStart.current = 0;
                time.current = 0;
                cancelAnimationFrame(raf.current);
            }
        }
    }, [drawProgress, isCurrent, isPassed, loop]);

    return (
        <button
            className={classNames(styles.btn, className)}
            onClick={() => scrollTo(index)}
            type="button"
        >
            {children}
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
}

export default LargeSliderTab;
