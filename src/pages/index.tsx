import { GetStaticProps } from 'next'

import Layout from '@cmp/Layout';
import Intro from '@cmp/Intro';
import Counters from '@cmp/Counters';
import Contact from '@cmp/Contact';
import { I18NProps } from '@pages/_app';
import useI18N from '@hooks/useI18N';

export default function Home() {
    const { messages } = useI18N();

    return (
        <Layout mainCn="">
            <div className="h-20 bg-black absolute top-0 left-0 w-full" />
            <Intro
                content={messages.aboutShort.intro}
                url="/pages/about"
            />
            <Counters content={messages.counters} />
            <Intro
                content={messages.careerShort.intro}
                url="/pages/career"
            />
            <Contact />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<I18NProps> = ({ locale }) => {
    return {
        props: {
            messages: {
                ...require(`../i18n/aboutShort.${locale}`),
                ...require(`../i18n/careerShort.${locale}`),
                ...require(`../i18n/counters.${locale}`),
            },
            now: Date.now()
        }
    }
}
