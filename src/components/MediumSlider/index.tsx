import React, { useMemo } from 'react';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

import useSlider, { Props as SliderHookProps } from '@cmp/Slider/useSlider';
import { PrevButton, NextButton } from '@cmp/MediumSlider/MediumSliderButton';
import { classNames } from '@lib/classNames';

import styles from './MediumSlider.module.css';
import Heading from '@cmp/Heading';

type Slide = {
    img: {
        src: string;
        placeholder?: ImageProps['placeholder'];
    };
    title: string;
    description: string;
    url?: string;
};

type Props = SliderHookProps & {
    content: {
        slides: Array<Slide>
    };
    labels?: boolean;
    sizeMod?: 'low' | 'medium'
};

const MediumSlider: React.FC<Props> = ({ options, labels, content, sizeMod= 'medium', autoplay }) => {
    const { emblaRef, nextBtnEnabled, prevBtnEnabled, scrollNext, scrollPrev } = useSlider({
        autoplay,
        options: {
            align: 'start',
            skipSnaps: false,
            ...options
        }
    });

    const { slides } = content;
    const jsxSlides: Array<React.ReactElement> = useMemo(() => {
        return slides.map((slide, index) => {
            const { img } = slide;
            const key = slide.title || index;
            const cmp = (
                <a key={key} className="sm:pl-5 sm:pr-5 last:pr-0">
                    <div className={classNames(styles.slide, styles[`slide-${sizeMod}`])}>
                        <Image
                            src={img.src}
                            alt={slide.title}
                            layout="fill"
                            objectFit="contain"
                            placeholder={img.placeholder}
                            className={classNames(styles.img, 'pointer-events-none')}
                            priority
                        />
                        {labels && <div
                            className={classNames(
                                'absolute bottom-0 mb-16 left-0 ml-16 px-8 py-4',
                                'text-white',
                            )}
                            aria-hidden="true"
                        >
                            <Heading level="2" className="mb-0">{slide.title}</Heading>
                            <p className="leading-6 tracking-wider">{slide.description}</p>
                        </div>}
                    </div>
                </a>
            );

            return slide.url ? (
                <Link href={slide.url} key={key}>
                    {cmp}
                </Link>
            ) : cmp;
        });
    }, [labels, sizeMod, slides]);

    return (
        <section className={classNames('relative mb-8 sm:mb-14', styles[`wrap-${sizeMod}`])}>
            <div className={classNames('overflow-hidden', styles[`container-${sizeMod}`])} ref={emblaRef}>
                <div className="flex">
                    {jsxSlides}
                </div>
            </div>
            <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} sizeMod={sizeMod} />
            <NextButton enabled={nextBtnEnabled} onClick={scrollNext} sizeMod={sizeMod} />
        </section>
    )
};

export default MediumSlider;
