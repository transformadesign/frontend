import React, { useMemo } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';

import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import Carousel, { VideoSlide, SlideTitle } from '../../components/carousel/index';
import { getMain, PreviewData } from '../../lib/api';
import { getStaticI18nPaths, getStaticI18nProps, Lang, contentLanguageMap } from '../../lib/i18n';
import { AsyncReturnType } from '../../lib/common';
import { buildUrl } from '../../lib/url-builder';

export default function Index({ preview, main, lang }: Props) {
    const slides = useMemo(
        () =>
            (main?.fields || []).reduce((result, { media, foreignTitle, mainTitle, thumbName }, index) => {
                result.push({
                    cmp: VideoSlide,
                    props: {
                        key: `${lang}_${index}`,
                        videoSrc: media.url,
                        link: buildUrl('main', lang),
                        children: <SlideTitle>{RichText.asText(mainTitle)}</SlideTitle>
                    }
                });

                return result;
            }, []),
        main?.fields
    );

    return (
        <>
            <Layout preview={preview} type="main" lang={lang} alternates={main?._meta.alternateLanguages}>
                <Head>
                    <title>TF</title>
                </Head>
                <Container>
                    <Header />
                    {slides.length ? (
                        <Carousel
                            wrapClass="-mx-5"
                            autoplay
                            autoplaySpeed={5000}
                            slideGenerators={slides}
                            showNext={false}
                            showPrev={false}
                        />
                    ) : null}
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
type Props = { preview: boolean; lang: Lang; main?: AsyncReturnType<typeof getMain> };
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
