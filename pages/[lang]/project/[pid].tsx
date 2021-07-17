import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { getMain, Main, getConfig, Config, Page as TPage, PreviewData } from '../../../lib/api';
import { getStaticI18nPaths, getStaticI18nProps, Lang, contentLanguageMap } from '../../../lib/i18n';

import Layout from '../../../components/layout';
import HtmlHeader from '../../../components/html_header';
import Contacts from '../../../components/contacts';

export const DATA = {
    'xxii-carat': {
        title: 'XXII Carat',
        moto: 'Charm of Luxury',
        description:
            'XXII Carat Club Villas is a private residential area with 200 meter long beach and 22 villas placed on Palm Jumeirah island, close to the hotels One&Only the Palm and Jumeirah Zabeel Saray.\n' +
            '\n' +
            'Three lines of luxury villas lay on the crescent island in the background of the famous Dubai skyscrapers. The name of the village club is associated with jewelry. Carats measure the value of gold, diamonds and gemstones. "Carats" of new residential estate symbolize the value of life in one of the loveliest places created by man.'
    }
};

export default function Project(props: Props) {
    const { main, config, pid } = props;

    const data = DATA[pid] || DATA['xxii-carat'];

    return (
        <>
            <Layout type="main" alternates={main?._meta.alternateLanguages} {...props}>
                <Head>
                    <title>TF</title>
                </Head>
                <HtmlHeader />

                <div className="container">
                    <article className="project-style-1">
                        <header className="entry-header">
                            <h2 className="entry-title">{data.title}</h2>
                        </header>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="entry-meta">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="entry-meta__item">
                                                <h4 className="key">DATE:</h4>
                                                <span className="value">May - 21 - 2018</span>
                                            </div>
                                            <div className="entry-meta__item">
                                                <h4 className="key">status:</h4>
                                                <span className="value">Completed</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="entry-meta__item">
                                                <h4 className="key">client:</h4>
                                                <span className="value">Domingo Norton</span>
                                            </div>
                                            <div className="entry-meta__item">
                                                <h4 className="key">location:</h4>
                                                <span className="value">Perth , Australia</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="entry-content">{data.description}</div>
                                <div className="entry-share">
                                    <span className="key">Share :</span>
                                    <ul className="list-social list-social--md">
                                        <li className="list-social__item">
                                            <a className="ic-fb" href="#">
                                                <i className="zmdi zmdi-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-social__item">
                                            <a className="ic-insta" href="#">
                                                <i className="zmdi zmdi-instagram"></i>
                                            </a>
                                        </li>
                                        <li className="list-social__item">
                                            <a className="ic-twi" href="#">
                                                <i className="zmdi zmdi-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-social__item">
                                            <a className="ic-pinterest" href="#">
                                                <i className="zmdi zmdi-pinterest"></i>
                                            </a>
                                        </li>
                                        <li className="list-social__item">
                                            <a className="ic-google" href="#">
                                                <i className="zmdi zmdi-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img className="wp-post-image" src="/images/post-01.jpg" alt="Post 1" />
                        <img className="wp-post-image" src="/images/post-02.jpg" alt="Post 2" />
                        <img className="wp-post-image" src="/images/post-03.jpg" alt="Post 3" />
                        <img className="wp-post-image" src="/images/post-04.jpg" alt="Post 4" />
                    </article>
                </div>
                <nav className="navigation project-navigation">
                    <div className="container">
                        <div className="nav-links">
                            <div className="nav-previous">
                                <a href="#">
                                    <span className="ti-arrow-left"></span>
                                </a>
                            </div>
                            <div className="all-link-wrap">
                                <a className="all-link" href="#">
                                    <span className="ti-menu"></span>
                                </a>
                            </div>
                            <div className="nav-next">
                                <a href="#">
                                    <span className="ti-arrow-right"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                <Contacts config={config} />
            </Layout>
        </>
    );
}

type Params = {
    preview: boolean;
    previewData: PreviewData;
    params: { lang: Lang; pid: string };
};
type Props = { preview: boolean; lang: Lang; main?: Main; page?: TPage; config: Config; pid: string };
export const getStaticProps: GetStaticProps<Props> = async ({
    preview = false,
    previewData,
    params: { lang, pid }
}: Params) => {
    const [config, main] = await Promise.all([
        getConfig(previewData, { locale: contentLanguageMap[lang] }),
        getMain(previewData, { locale: contentLanguageMap[lang] })
    ]);

    return {
        ...(await getStaticI18nProps({ preview, main, config, lang, pid })),
        revalidate: 1
    };
};

export const getStaticPaths: GetStaticPaths = async () =>
    getStaticI18nPaths({
        paths: ['/project/xxii-carat'],
        fallback: true
    });
