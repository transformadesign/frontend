import React from 'react';
import { GetStaticProps } from 'next';

import { I18NProps } from '@pages/_app';
import MediumSlider from '@cmp/MediumSlider';
import useI18N from '@hooks/useI18N';
import useMeta from '@hooks/useMeta';

export default function Projects() {
    const { messages: { projects: data, common } } = useI18N();
    const meta = useMeta({ title: [common.projects] });

    return (
        <>
            {meta}
            <MediumSlider content={data.slider} labels sizeMod="medium" options={{ loop: true, inViewThreshold: 0.8 }}  />
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
