import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEmblaCarousel } from 'embla-carousel/react';
import { EmblaOptionsType } from 'embla-carousel/embla-carousel-vanilla/options';

import LargeSliderTab from '@cmp/LargeSlider/LargeSliderTab';
import { leadZero } from '@lib/leadZero';
import Container from '@cmp/Container';
import Arrow from '@cmp/Arrow';
import { classNames } from '@lib/classNames';

import styles from './LargeSlider.module.css';

interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type Slide = {
    img: string;
    title: string;
    description: string;
    url: string;
    speed: number;
    tab: {
        name: string;
    }
};

type Props = {
    content: {
        slides: Array<Slide>
    };
    images: Map<string, StaticImageData>;
    options?: EmblaOptionsType;
};

const LargeSlider: React.FC<Props> = ({ options, content, images }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options || {
        selectedClass: styles.active
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
    }, [emblaApi, onSelect]);

    const { slides } = content;
    const jsxSlides: Array<React.ReactElement> = useMemo(() => {
        return slides.map((slide, index) => (
            <Link href={slide.url} key={slide.title} >
                <a className="flex-slide" style={{ flex: '0 0 100%' }}>
                    <div className="relative h-screen">
                        <Image
                            src={images.get(slide.img)}
                            alt={slide.title}
                            layout="fill"
                            objectFit="cover"
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
                                <p className="text-sm leading-6">{slide.description}</p>
                                <Arrow className="w-24 sm:w-32 text-xxs sm:text-xs opacity-60 bg-white" />
                            </Container>
                        </div>
                    </div>
                </a>
            </Link>

        ));
    }, [images, slides]);
    const jsxTabs: Array<React.ReactElement> = slides.map((slide, index) => {
        return (
            <LargeSliderTab
                key={slide.title}
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
                <div className="flex cursor-pointer" style={{ display: 'flex' }}>
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
