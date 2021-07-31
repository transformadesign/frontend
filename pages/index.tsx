import { GetStaticProps } from 'next'

import Layout from '../components/Layout';

export default function Home() {
    return (
        <Layout>
            <div>Home</div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {}
    }
}
