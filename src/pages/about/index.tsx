import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image';

import { I18NProps } from '@pages/_app';

import Counters from '@cmp/Counters';
import Info from '@cmp/Info';
import Contact from '@cmp/Contact';
import Cut from '@cmp/Cut';
import Text from '@cmp/Text';

import useI18N from '@hooks/useI18N';

import img1 from '@pub/content/about/about-00.jpeg';

import styles from './About.module.css';

export default function About(params: InferGetStaticPropsType<typeof getStaticProps>) {
    const { messages: { about } } = useI18N();
    return (
        <>
            <Text data={about.intro} />
            <section className="mb-20 max-w-screen-2xl mx-auto">
                <Image src={img1} layout="responsive" placeholder="blur" alt="" />
            </section>
            <Info data={about.counters}>
                <Counters content={about.counters.data} />
            </Info>
            <Info data={about.specs} showItemNumber />
            <Cut data={about.moto} className={styles.stickyBg} preset="image" />
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
