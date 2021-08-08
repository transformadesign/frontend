import '../styles/global.css';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import I18nCtx from '@ctx/i18n';
import Layout from '@cmp/Layout';
import useIsMainPage from '@hooks/useIsMainPage';

export type I18NProps = {
    messages: any;
    now: number;
};

export default function App({ Component, pageProps }: AppProps<I18NProps>) {
    const { locale } = useRouter();
    const messages = {
        ...require(`../i18n/common.${locale}`),
        ...pageProps.messages
    }
    const isMainPage = useIsMainPage();

    return (
        <I18nCtx.Provider value={{
            messages,
            now: pageProps.now
        }}>
            <Layout mainCn={isMainPage ? '' : undefined}>
                <Component {...pageProps} />
            </Layout>
        </I18nCtx.Provider>
    );
}
