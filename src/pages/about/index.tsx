import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { I18NProps } from '@pages/_app';

import Counters from '@cmp/Counters';
import Info from '@cmp/Info';
import Cut from '@cmp/Cut';
import Text from '@cmp/Text';

import useI18N from '@hooks/useI18N';
import useTitle from '@hooks/useTitle';

import styles from './About.module.css';
import MediumSlider from '@cmp/MediumSlider';

export default function About(params: InferGetStaticPropsType<typeof getStaticProps>) {
    const { messages: { about } } = useI18N();
    const title = useTitle({ title: [about.page.title] });

    return (
        <>
            {title}
            <Text data={about.intro} />
            <MediumSlider content={about.slider} sizeMod="low" options={{ containScroll: 'trimSnaps' }} autoplay={5000} />
            <Info data={about.counters}>
                <Counters content={about.counters.data} noWrap />
            </Info>
            <Info data={about.specs} />
            <Cut data={about.moto} className={styles.stickyBg} preset="image" />
            <Info data={about.mission} />
            <Info data={about.credit} />
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
