import React from 'react';
import Head from 'next/head';

import Header from '@cmp/Header';
import Footer from '@cmp/Footer';

import { classNames } from '@lib/classNames';

const SITE_NAME = 'Transforma';

const Layout: React.FC<{ mainCn?: string; hideContacts?: boolean }> = ({ children, mainCn = 'pt-8', hideContacts }) => {
    return (
        <div className="relative min-h-screen flex flex-col">
            <Head>
                <title>{SITE_NAME}</title>
                <meta property="og:image" content="/og_image.jpeg" />
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
