import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { I18NProps } from '@pages/_app';

import Cut from '@cmp/Cut';
import Text from '@cmp/Text';
import Image from '@cmp/Image';
import Info from '@cmp/Info';

import useI18N from '@hooks/useI18N';
import useTitle from '@hooks/useTitle';

import img1 from '@pub/content/interior-design/foto_interior.jpeg';

import styles from './InteriorDesign.module.css';

export default function InteriorDesign(params: InferGetStaticPropsType<typeof getStaticProps>) {
    const { messages: { 'interior-design': data, common } } = useI18N();
    const title = useTitle({ title: [common.services, data.page.title] });

    return (
        <>
            {title}
            <Text data={data.intro} />
            <Image src={img1} layout="responsive" placeholder="blur" alt="" />
            <Info data={data.interior} />
            <Cut data={data.cut} preset="color" />
            <Text data={data.challenge} />
            <Cut data={data.moto} className={styles.stickyBg} preset="image" />
        </>
    );
}

export const getStaticProps: GetStaticProps<I18NProps> = async ({ locale }) => {
    return {
        props: {
            locale,
            messages: {
                ...require(`../../i18n/interior-design.${locale}`).default
            },
            now: Date.now()
        }
    }
};
