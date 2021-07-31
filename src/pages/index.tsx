import { GetStaticProps } from 'next'

import Layout from '@cmp/Layout';
import { I18NProps } from '@pages/_app';
import useI18N from '@hooks/useI18N';

export default function Home() {
    return (
        <Layout>
            <div>Home</div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<I18NProps> = ({ locale }) => {
    console.log(locale);
    return {
        props: {
            messages: {
                ...require(`../i18n/common.${locale}`)
            },
            now: Date.now()
        }
    }
}
