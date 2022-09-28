import { GetStaticProps } from 'next'

import Intro from '@cmp/Intro';
import Counters from '@cmp/Counters';
import LargeSlider from '@cmp/LargeSlider';
import { I18NProps } from '@pages/_app';

import useI18N from '@hooks/useI18N';
import useMeta from '@hooks/useMeta';

import img1 from '@pub/content/main/premium.jpg';
import img2 from '@pub/content/main/ffe.jpg';
import img3 from '@pub/content/main/22-carat.jpg';
import img4 from '@pub/content/main/career.jpg';

const IMAGES = new Map([
    ['@pub/content/main/premium.jpg', img1],
    ['@pub/content/main/ffe.jpg', img2],
    ['@pub/content/main/22-carat.jpg', img3],
    ['@pub/content/main/career.jpg', img4]
]);

export default function Main() {
    const { messages } = useI18N();
    const meta = useMeta();

    return (
        <>
            {meta}
            <LargeSlider content={messages.mainSlider} images={IMAGES} options={{ speed: 8 }} />
            <Intro
                content={messages.aboutShort.intro}
                url="/about"
            />
            <Counters content={messages.counters} textCn="items-center" />
            <Intro
                content={messages.careerShort.intro}
                url="/career"
            />
        </>
    )
}

export const getStaticProps: GetStaticProps<I18NProps> = ({ locale }) => {
    return {
        props: {
            messages: {
                ...require(`../i18n/aboutShort.${locale}`),
                ...require(`../i18n/careerShort.${locale}`),
                ...require(`../i18n/counters.${locale}`),
                ...require(`../i18n/mainSlider.${locale}`).default,
            },
            now: Date.now()
        }
    }
}
