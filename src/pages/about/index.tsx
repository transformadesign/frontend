import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image';

import { I18NProps } from '@pages/_app';
import Counters from '@cmp/Counters';
import Container from '@cmp/Container';
import Info from '@cmp/Info';
import Heading from '@cmp/Heading';
import useI18N from '@hooks/useI18N';

import img1 from '@pub/content/about/about-00.jpeg';
import Contact from '@cmp/Contact';

import styles from './About.module.css';
import { classNames } from '@lib/classNames';

export default function Index(params: InferGetStaticPropsType<typeof getStaticProps>) {
    const { messages: { about } } = useI18N();
    return (
        <>
            <Container as="section" className="mb-14">
                <Heading level="4">{about.intro.title}</Heading>
                <Heading level="2">{about.intro.subTitle}</Heading>
                {
                    about.intro.text.map((text, index) => (
                        <p key={index} className="pt-4">{text}</p>
                    ))
                }
            </Container>
            <section className="mb-20 max-w-screen-2xl mx-auto">
                <Image src={img1} layout="responsive" />
            </section>
            <Container as="section" className="flex mb-20 flex-col sm:flex-row">
                <Counters
                    content={about.counters}
                    noWrap
                    innerCn="flex-1 flex-wrap sm:pr-2"
                    elemCn="flex-quad"
                    textCn="items-start text-xs"
                />
                <div className="flex-1 flex flex-col sm:pl-2">
                    {about.stats.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>
            </Container>
            <Info data={about.specs} showItemNumber />
            <section className={classNames(styles.stickyBg, 'mb-20 py-10 sm:px-20')}>
                <Container as="p" className="text-white bg-gray-700 py-6 px-8">{about.moto}</Container>
            </section>
            <Info data={about.mission} />
            <Info data={about.credit} />
            <Contact />
        </>
    );
}

export const getStaticProps: GetStaticProps<I18NProps> = async ({ locale }) => {
    return {
        props: {
            locale,
            messages: {
                ...require(`../../i18n/about.${locale}`).default
            },
            now: Date.now()
        }
    }
};
