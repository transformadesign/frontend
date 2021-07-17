import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { getMain, Main, getConfig, Config, getPage, Page as TPage, PreviewData } from '../../lib/api';
import { getStaticI18nPaths, getStaticI18nProps, Lang, contentLanguageMap } from '../../lib/i18n';

import Layout from '../../components/layout';
import HtmlHeader from '../../components/html_header';
import Contacts from '../../components/contacts';
import HtmlProjects from '../../components/html_projects';

export default function Projects(props: Props) {
    const { main, config } = props;

    return (
        <>
            <Layout type="main" alternates={main?._meta.alternateLanguages} {...props}>
                <Head>
                    <title>TF</title>
                </Head>
                <HtmlHeader />

                <section className="section p-t-100 p-b-65">
                    <div className="container">
                        <div className="page-heading">
                            <h4 className="title-sub title-sub--c8 m-b-15">Our project</h4>
                            <h2 className="title-2">
                                We shape our buildings
                                <br />
                                thereafter they shape us
                            </h2>
                        </div>
                    </div>
                </section>

                <HtmlProjects />

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
    const [config, main] = await Promise.all([
        getConfig(previewData, { locale: contentLanguageMap[lang] }),
        getMain(previewData, { locale: contentLanguageMap[lang] })
    ]);

    return {
        ...(await getStaticI18nProps({ preview, main, config, lang })),
        revalidate: 1
    };
};

export const getStaticPaths: GetStaticPaths = async () => getStaticI18nPaths({ paths: ['/projects'] });
