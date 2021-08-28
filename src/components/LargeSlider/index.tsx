import React, { useMemo } from 'react';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { EmblaOptionsType } from 'embla-carousel/embla-carousel-vanilla/options';

import LargeSliderTab from '@cmp/LargeSlider/LargeSliderTab';
import { leadZero } from '@lib/leadZero';
import Container from '@cmp/Container';
import Arrow from '@cmp/Arrow';
import useSlider from '@cmp/Slider/useSlider';
import { classNames } from '@lib/classNames';

import styles from './LargeSlider.module.css';

interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type Slide = {
    img: {
        src: string;
        placeholder?: ImageProps['placeholder'];
    };
    title: string;
    description: string | string[];
    url?: string;
    speed: number;
    tab: {
        name: string;
    }
};

type Props = {
    content: {
        slides: Array<Slide>
    };
    images?: Map<string, StaticImageData>;
    options?: EmblaOptionsType;
};

const LargeSlider: React.FC<Props> = ({ options, content, images }) => {
    const { emblaRef, selectedIndex, scrollTo } = useSlider({
        options: {
            selectedClass: styles.active,
            ...options
        }
    });

    const { slides } = content;
    const jsxSlides: Array<React.ReactElement> = useMemo(() => {
        return slides.map((slide, index) => {
            const { img } = slide;
            const key = slide.title || index;
            const cmp = (
                <a className="flex-slide mx-5" key={key} style={{ flex: '0 0 100%' }}>
                    <div className="relative h-large">
                        <Image
                            src={images?.get(img.src) || img.src}
                            alt={slide.title}
                            layout="fill"
                            objectFit="cover"
                            placeholder={img.placeholder}
                            className={classNames(styles.img, 'pointer-events-none')}
                        />
                        <i className="absolute left-0 top-0 right-0 bottom-0 bg-slide" />
                        <div
                            className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end sm:flex-row sm:justify-center"
                            aria-hidden="true"
                        >

                            <Container className="flex flex-col justify-end overflow-hidden w-full mb-24 sm:mb-40 text-white">
                                <div className="text-sm mb-2">{leadZero(index + 1)}</div>
                                <h3 className="text-4-5xl font-bold sm:text-5xl sm:font-extrabold leading-tight mb-6">
                                    {slide.title}
                                </h3>
                                {
                                    (Array.isArray(slide.description) ?
                                        slide.description :
                                        slide.description ? [slide.description] : []
                                    ).map((description, index) => (
                                    <p className="text-sm leading-6 mr-0 sm:mr-16" key={index}>{description}</p>
                                ))}
                                <Arrow className="w-24 sm:w-32 text-xxs sm:text-xs opacity-60 bg-white" />
                            </Container>
                        </div>
                    </div>
                </a>
            );

            return slide.url ? (
                <Link href={slide.url} key={key}>
                    {cmp}
                </Link>
            ) : cmp;
        });
    }, [images, slides]);
    const jsxTabs: Array<React.ReactElement> = slides.map((slide, index) => {
        return (
            <LargeSliderTab
                key={slide.title || index}
                index={index}
                current={selectedIndex}
                scrollTo={scrollTo}
                speed={slide.speed}
                className="flex-1 text-left text-white pb-4 sm:pb-12 flex flex-col"
            >
                <div className="font-light opacity-50">{leadZero(index + 1)}</div>
                <div className="font-light text-xs sm:text-sm mb-2 uppercase pr-4">{slide.tab.name}</div>
            </LargeSliderTab>
        );
    });

    return (
        <section className="relative mb-8 sm:mb-14">
            <div className="overflow-hidden" style={{ overflow: 'hidden' }} ref={emblaRef}>
                <div className="flex" style={{ display: 'flex' }}>
                    {jsxSlides}
                </div>
            </div>
            <div className="absolute bottom-0 w-full">
                <Container className="flex">
                    {jsxTabs}
                </Container>
            </div>
        </section>
    )
};

export default LargeSlider;
