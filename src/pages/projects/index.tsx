import Layout from '@cmp/Layout';
import { GetStaticProps } from 'next';
import { I18NProps } from '@pages/_app';

export default function Projects() {
    return (
        <Layout>
            <div>Projects</div>
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
