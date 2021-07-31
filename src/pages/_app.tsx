import '../styles/global.css';

import { AppProps } from 'next/app';
import I18nCtx from '@ctx/i18n'
import { useRouter } from 'next/router';

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

    return (
        <I18nCtx.Provider value={{
            messages,
            now: pageProps.now
        }}>
            <Component {...pageProps} />
        </I18nCtx.Provider>
    );
}
