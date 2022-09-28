import React, { useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '@cmp/Header';
import Footer from '@cmp/Footer';

import { classNames } from '@lib/classNames';

const SITE_NAME = 'Transforma';
const ogImage = '/og_image.jpeg?v=0';

const Layout: React.FC<{ mainCn?: string; hideContacts?: boolean }> = ({ children, mainCn = 'pt-8', hideContacts }) => {
    const { locale, locales } = useRouter();

    const alternates = useMemo(() => {
        return locales?.reduce((result, alternateLocale) => {
            if (alternateLocale !== locale) {
                result.og.push(<meta
                    key={alternateLocale}
                    property="og:locale:alternate"
                    content={alternateLocale}
                />);
            }

            return result;
        }, { og: [] } as { og: JSX.Element[] });
    }, [locale, locales]);

    return (
        <div className="relative min-h-screen flex flex-col">
            <Head>
                <title>{SITE_NAME}</title>

                <meta property="og:title" content={SITE_NAME} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content={locale} />
                {alternates.og}
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:width" content="1000" />
                <meta property="og:image:height" content="520" />
                <meta property="og:image" content={`https://transforma.design${ogImage}`} />
                <meta property="og:image:width" content="1000" />
                <meta property="og:image:height" content="520" />

                <link type="image/x-icon" rel="shortcut icon" href="/favicon.ico" />
                <link sizes="76x76" rel="apple-touch-icon" href="/favicon.png" />
                <link sizes="152x152" rel="apple-touch-icon" href="/favicon.png" />
                <meta name="description" content="Design studio" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header />
            <main className={classNames('flex-1', mainCn)}>{children}</main>
            <Footer hideContacts={hideContacts} />
        </div>
    )
}

export default Layout;
