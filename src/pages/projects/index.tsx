import Layout from '@cmp/Layout';
import { GetStaticProps } from 'next';

import { I18NProps } from '@pages/_app';
import Container from '@cmp/Container';

export default function Projects() {
    return (
        <Layout>
            <Container>Projects</Container>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<I18NProps> = async ({ locale }) => {
    return {
        props: {
            messages: {},
            now: Date.now()
        }
    };
};
