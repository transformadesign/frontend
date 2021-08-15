import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { I18NProps } from '@pages/_app';
import useI18N from '@hooks/useI18N';

import Text from '@cmp/Text';

export default function Career(params: InferGetStaticPropsType<typeof getStaticProps>) {
    const { messages: { career: data } } = useI18N();
    return (
        <>
            <Text data={data.intro} />
        </>
    );
}

export const getStaticProps: GetStaticProps<I18NProps> = async ({ locale }) => {
    return {
        props: {
            locale,
            messages: {
                ...require(`../../i18n/career.${locale}`).default
            },
            now: Date.now()
        }
    }
};
