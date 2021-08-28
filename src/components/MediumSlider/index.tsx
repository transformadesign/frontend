import React, { useMemo } from 'react';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { EmblaOptionsType } from 'embla-carousel/embla-carousel-vanilla/options';

import useSlider from '@cmp/Slider/useSlider';
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

type Props = {
    content: {
        slides: Array<Slide>
    };
    labels?: boolean;
    options?: EmblaOptionsType;
    sizeMod?: 'low' | 'medium'
};

const MediumSlider: React.FC<Props> = ({ options, labels, content, sizeMod= 'medium' }) => {
    const { emblaRef, nextBtnEnabled, prevBtnEnabled, scrollNext, scrollPrev } = useSlider({
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
                <a key={key} style={{ flex: '0 0 25%' }} className="ml-5 mr-5 last:mr-0">
                    <div className={classNames(styles.slide, styles[sizeMod])}>
                        <Image
                            src={img.src}
                            alt={slide.title}
                            layout="fill"
                            objectFit="cover"
                            placeholder={img.placeholder}
                            className={classNames(styles.img, 'pointer-events-none')}
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
        <section className="relative mb-8 sm:mb-14">
            <div className="overflow-hidden" style={{ overflow: 'hidden' }} ref={emblaRef}>
                <div className="flex" style={{ display: 'flex' }}>
                    {jsxSlides}
                </div>
            </div>
            <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
            <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
        </section>
    )
};

export default MediumSlider;
