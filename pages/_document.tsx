import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { defaultLanguage, Lang } from '../lib/i18n';
import Styles from '../components/html_styles';
import Scripts from '../components/html_scripts';

export default class MyDocument extends Document {
    render() {
        const {
            query: { lang: queryLang }
        } = this.props.__NEXT_DATA__;
        const lang = ((Array.isArray(queryLang) ? queryLang[0] : queryLang) as Lang) || defaultLanguage;

        return (
            <Html lang={lang} className="antialiased">
                <Head />
                <Styles />
                <body>
                    <Main />
                    <NextScript />
                    <Scripts />
                </body>
            </Html>
        );
    }
}
