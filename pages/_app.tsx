import '../styles/index.css';

import { AppProps } from 'next/app';
import I18n from '../lib/i18n';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <I18n langDict={pageProps.langDict} lang={pageProps.lang}>
            <Component {...pageProps} />
        </I18n>
    );
}
