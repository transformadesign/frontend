import { GetStaticProps, InferGetStaticPropsType } from 'next'

import Layout from '@cmp/Layout';
import { I18NProps } from '@pages/_app';
import Counters from '@cmp/Counters';
import Container from '@cmp/Container';
import useI18N from '@hooks/useI18N';

export default function About(params: InferGetStaticPropsType<typeof getStaticProps>) {
    const { messages } = useI18N();
    return (
        <Layout>
            <Container>
                <Counters content={messages.counters} />
            </Container>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<I18NProps> = async ({ locale }) => {
    return {
        props: {
            locale,
            messages: {
                ...require(`../../i18n/counters.${locale}`)
            },
            now: Date.now()
        }
    }
};
