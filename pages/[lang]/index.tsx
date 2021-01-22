import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { getMain, Main, PreviewData } from '../../lib/api';
import { getStaticI18nPaths, getStaticI18nProps, Lang, contentLanguageMap } from '../../lib/i18n';

import Layout from '../../components/layout';
import VideoCarousel from '../../components/carousel/index-video';
import Header from '../../components/header';

export default function Index({ preview, main, lang }: Props) {
    return (
        <>
            <Layout preview={preview} type="main" lang={lang} alternates={main?._meta.alternateLanguages}>
                <Head>
                    <title>TF</title>
                </Head>
                <VideoCarousel
                    progressSpeed={main.interval || 5000}
                    data={main}
                />
                <Header />
            </Layout>
        </>
    );
}

type Params = {
    preview: boolean;
    previewData: PreviewData;
    params: { lang: Lang };
};
type Props = { preview: boolean; lang: Lang; main?: Main };
export const getStaticProps: GetStaticProps<Props> = async ({
    preview = false,
    previewData,
    params: { lang }
}: Params) => {
    const main = await getMain(previewData, { locale: contentLanguageMap[lang] });

    return {
        ...(await getStaticI18nProps({ preview, main, lang })),
        revalidate: 1
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    return getStaticI18nPaths({ paths: [''] });
};
