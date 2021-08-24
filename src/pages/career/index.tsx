import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { I18NProps } from '@pages/_app';
import useI18N from '@hooks/useI18N';

import Text from '@cmp/Text';
import useTitle from '@hooks/useTitle';

export default function Career(params: InferGetStaticPropsType<typeof getStaticProps>) {
    const { messages: { career: data } } = useI18N();
    const title = useTitle({ title: [data.page.title] });

    return (
        <>
            {title}
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
