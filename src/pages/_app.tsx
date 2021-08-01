import '../styles/global.css';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import I18nCtx from '@ctx/i18n';
import Layout from '@cmp/Layout';

export type I18NProps = {
    messages: any;
    now: number;
};

const pageNoPadTop = new Set(['', '/']);

export default function App({ Component, pageProps }: AppProps<I18NProps>) {
    const { locale, route } = useRouter();
    const messages = {
        ...require(`../i18n/common.${locale}`),
        ...pageProps.messages
    }

    return (
        <I18nCtx.Provider value={{
            messages,
            now: pageProps.now
        }}>
            <Layout mainCn={pageNoPadTop.has(route) ? '' : undefined}>
                <Component {...pageProps} />
            </Layout>
        </I18nCtx.Provider>
    );
}
