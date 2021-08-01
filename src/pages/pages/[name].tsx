import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

import { addLocales } from '@lib/staticPaths';

import Layout from '@cmp/Layout';
import { I18NProps } from '@pages/_app';
import Counters from '@cmp/Counters';
import useI18N from '@hooks/useI18N';

export default function Page(params: InferGetStaticPropsType<typeof getStaticProps>) {
    const { messages } = useI18N();
    return (
        <Layout>
            <Counters content={messages.counters} />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<I18NProps & { name: string }> = async ({ params = {}, locale }) => {
    const name = Array.isArray(params.name) ? params.name[0] : params.name;
    let messages = {};

    switch (name) {
        case 'about': messages = {
            ...require(`../../i18n/counters.${locale}`),
        }; break;
        default: break;
    }

    return {
        props: {
            name,
            locale,
            messages,
            now: Date.now()
        }
    }
};

export const getStaticPaths: GetStaticPaths<{ name: string }> = async ({ locales }) => {
    return {
        paths: addLocales([
            { params: { name: 'about' } },
            { params: { name: 'career' } }
        ], locales),
        fallback: false
    };
};
