import '../styles/global.css';

import { useEffect } from 'react';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import { useRouter } from 'next/router';
import I18nCtx from '@ctx/i18n';
import Layout from '@cmp/Layout';
import useIsMainPage from '@hooks/useIsMainPage';
import { pageview } from '@lib/gtag';

export type I18NProps = {
    messages: any;
    now: number;
    hideContacts?: boolean;
};

export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
    window.gtag('event', name, {
        event_category:
            label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
        value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
        event_label: id, // id unique to current page load
        non_interaction: true, // avoids affecting bounce rate.
    })
}

export default function App({ Component, pageProps }: AppProps<I18NProps>) {
    const { locale, events } = useRouter();
    const messages = {
        ...require(`../i18n/common.${locale}`),
        ...pageProps.messages
    }
    const isMainPage = useIsMainPage();

    useEffect(() => {
        const handleRouteChange = (url) => {
            pageview(url);
        }

        events.on('routeChangeComplete', handleRouteChange);

        return () => {
            events.off('routeChangeComplete', handleRouteChange);
        }
    }, [events])

    return (
        <I18nCtx.Provider value={{
            messages,
            now: pageProps.now
        }}>
            <Layout mainCn={isMainPage ? '' : undefined} hideContacts={pageProps.hideContacts}>
                <Component {...pageProps} />
            </Layout>
        </I18nCtx.Provider>
    );
}
