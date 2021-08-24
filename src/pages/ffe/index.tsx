import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { I18NProps } from '@pages/_app';

import Cut from '@cmp/Cut';
import Info from '@cmp/Info';
import Text from '@cmp/Text';
import Image from '@cmp/Image';

import useI18N from '@hooks/useI18N';
import useTitle from '@hooks/useTitle';

import img1 from '@pub/content/ffe/foto_ffe.jpeg';

import styles from './FFE.module.css';

export default function FFE(params: InferGetStaticPropsType<typeof getStaticProps>) {
    const { messages: { ffe, common } } = useI18N();
    const title = useTitle({ title: [common.services, ffe.page.title] });

    return (
        <>
            {title}
            <Text data={ffe.intro} />
            <Image src={img1} layout="responsive" placeholder="blur" alt="" />
            <Info data={ffe.stages} />
            <Cut data={ffe.cut} preset="color" />
            <Text data={ffe.text} />
            <Cut data={ffe.moto} className={styles.stickyBg} preset="image" />
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
