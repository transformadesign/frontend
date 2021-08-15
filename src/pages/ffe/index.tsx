import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image';

import { I18NProps } from '@pages/_app';

import Cut from '@cmp/Cut';
import Info from '@cmp/Info';
import Text from '@cmp/Text';
import Contact from '@cmp/Contact';

import useI18N from '@hooks/useI18N';

import img1 from '@pub/content/ffe/SPA_View04_12.webp';

import styles from './FFE.module.css';

export default function FFE(params: InferGetStaticPropsType<typeof getStaticProps>) {
    const { messages: { ffe } } = useI18N();
    return (
        <>
            <Text data={ffe.intro} />
            <section className="mb-20 max-w-screen-2xl mx-auto">
                <Image src={img1} layout="responsive" placeholder="blur" alt="" />
            </section>
            <Info data={ffe.stages} />
            <Cut data={ffe.cut} preset="color" />
            <Text data={ffe.text} />
            <Cut data={ffe.moto} className={styles.stickyBg} preset="image" />
            <Contact />
        </>
    );
}

export const getStaticProps: GetStaticProps<I18NProps> = async ({ locale }) => {
    return {
        props: {
            locale,
            messages: {
                ...require(`../../i18n/ffe.${locale}`).default
            },
            now: Date.now()
        }
    }
};
