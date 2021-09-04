import React from 'react';
import { GetStaticProps } from 'next';

import { I18NProps } from '@pages/_app';
import MediumSlider from '@cmp/MediumSlider';
import useI18N from '@hooks/useI18N';
import useTitle from '@hooks/useTitle';

export default function Projects() {
    const { messages: { projects: data, common } } = useI18N();
    const title = useTitle({ title: [common.projects] });

    return (
        <>
            {title}
            <MediumSlider content={data.slider} labels sizeMod="medium" options={{ loop: true }}  />
        </>
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
