import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { I18NProps } from '@pages/_app';

import Cut from '@cmp/Cut';
import Text from '@cmp/Text';
import Image from '@cmp/Image';

import useI18N from '@hooks/useI18N';

import img1 from '@pub/content/xxii-carat/cover.png';
import img2 from '@pub/content/xxii-carat/cover-2.png';

import styles from './XXIICarat.module.css';

export default function XXIICarat(params: InferGetStaticPropsType<typeof getStaticProps>) {
    const { messages: { 'xxii-carat': data } } = useI18N();

    return (
        <>
            <Text data={data.intro} />
            <Image src={img1} layout="responsive" placeholder="blur" alt="" />
            <Text data={data.architecture} />
            <Text data={data.villas} />
            <Cut data={data.cut} preset="color" />
            <Text data={data.interiors} />
            <Image src={img2} layout="responsive" placeholder="blur" alt="" />
            <Text data={data.atmosphere} />
            <Cut data={data.moto} className={styles.stickyBg} preset="image" />
        </>
    );
}

export const getStaticProps: GetStaticProps<I18NProps> = async ({ locale }) => {
    return {
        props: {
            locale,
            messages: {
                ...require(`../../i18n/xxii-carat.${locale}`).default
            },
            now: Date.now()
        }
    }
};
