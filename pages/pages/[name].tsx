import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

import Layout from '../../components/Layout';

export default function Page(params: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>
            <div>Page: {params.name}</div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<{ name: string }> = async context => ({
    props: {
        name: Array.isArray(context.params.name) ? context.params.name[0] : context.params.name,
        locale: context.locale
    }
});

export const getStaticPaths: GetStaticPaths<{ name: string }> = async () => ({
    paths: [
        { params: { name: 'xxi' } }
    ],
    fallback: false
})
