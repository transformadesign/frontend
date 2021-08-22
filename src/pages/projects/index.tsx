import React from 'react';
import { GetStaticProps } from 'next';

import { I18NProps } from '@pages/_app';
import MediumSlider from '@cmp/MediumSlider';
import useI18N from '@hooks/useI18N';

export default function Projects() {
    const { messages: { projects: data } } = useI18N();
    return (
        <MediumSlider content={data.slider} labels sizeMod="medium"  />
    );
}

export const getStaticProps: GetStaticProps<I18NProps> = async ({ locale }) => {
    return {
        props: {
            locale,
            messages: {
                ...require(`../../i18n/projects.${locale}`).default
            },
            now: Date.now()
        }
    };
};
