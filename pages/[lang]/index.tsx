import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { getMain, Main, getConfig, Config, PreviewData } from '../../lib/api';
import { getStaticI18nPaths, getStaticI18nProps, Lang, contentLanguageMap } from '../../lib/i18n';

import Layout from '../../components/layout';
import VideoCarousel from '../../components/carousel/index-video';
import Header from '../../components/header';
import Container from '../../components/container';

export default function Index(props: Props) {
    const { main, config } = props;

    return (
        <>
            <Layout type="main" alternates={main?._meta.alternateLanguages} {...props}>
                <Head>
                    <title>TF</title>
                </Head>
                <VideoCarousel
                    progressSpeed={main.interval || 5000}
                    data={main}
                />
                <Header />
                <Container className="py-8">
                    <h3>Work in progress</h3>
                    <h4>Address</h4>
                    {config?.addresses?.map(elem => (
                        <div key={elem.address}>{elem.address}</div>
                    ))}
                    <h4>Contact us</h4>
                    {config?.phones?.map(elem => (
                        <div key={elem.phone}>{elem.phone}</div>
                    ))}
                    <div>{config?.email.url}</div>
                </Container>
            </Layout>
        </>
    );
}

type Params = {
    preview: boolean;
    previewData: PreviewData;
    params: { lang: Lang };
};
type Props = { preview: boolean; lang: Lang; main?: Main, config: Config };
export const getStaticProps: GetStaticProps<Props> = async ({
    preview = false,
    previewData,
    params: { lang }
}: Params) => {
    const [config, main] = await Promise.all([
        getConfig(previewData, { locale: contentLanguageMap[lang] }),
        getMain(previewData, { locale: contentLanguageMap[lang] })
    ]);

    return {
        ...(await getStaticI18nProps({ preview, main, config, lang })),
        revalidate: 1
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    return getStaticI18nPaths({ paths: [''] });
};
