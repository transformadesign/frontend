import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { getMain, Main, getConfig, Config, getPage, Page as TPage, PreviewData } from '../../lib/api';
import { getStaticI18nPaths, getStaticI18nProps, Lang, contentLanguageMap } from '../../lib/i18n';

import VideoCarousel from '../../components/carousel/index-video';
import Layout from '../../components/layout';
import HtmlHeader from '../../components/html_header';
import HtmlAboutUs from '../../components/html_about_us';
import HtmlLatestProject from '../../components/html_latest_project';
import HtmlService from '../../components/html_service';
import HtmlTeam from '../../components/html_team';
import HtmlClients from '../../components/html_clients';
import Contacts from '../../components/contacts';
/* import Page from '../../components/page'; */

export default function Index(props: Props) {
    const { main, config /* page */ } = props;

    return (
        <>
            <Layout type="main" alternates={main?._meta.alternateLanguages} {...props}>
                <Head>
                    <title>TF</title>
                </Head>
                <HtmlHeader />
                <VideoCarousel progressSpeed={main.interval || 5000} data={main} startIndex={0} />
                <HtmlAboutUs />
                <HtmlLatestProject />
                <HtmlService />
                <HtmlTeam />
                <HtmlClients />
                {/* <Page page={page} /> */}
                <Contacts config={config} />
            </Layout>
        </>
    );
}

type Params = {
    preview: boolean;
    previewData: PreviewData;
    params: { lang: Lang };
};
type Props = { preview: boolean; lang: Lang; main?: Main; page?: TPage; config: Config };
export const getStaticProps: GetStaticProps<Props> = async ({
    preview = false,
    previewData,
    params: { lang }
}: Params) => {
    const [config, main, page] = await Promise.all([
        getConfig(previewData, { locale: contentLanguageMap[lang] }),
        getMain(previewData, { locale: contentLanguageMap[lang] }),
        getPage(previewData, { locale: contentLanguageMap[lang], uid: 'main' })
    ]);

    return {
        ...(await getStaticI18nProps({ preview, main, config, page, lang })),
        revalidate: 1
    };
};

export const getStaticPaths: GetStaticPaths = async () => getStaticI18nPaths({ paths: [''] });
