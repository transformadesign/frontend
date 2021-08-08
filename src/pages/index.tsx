import { GetStaticProps } from 'next'

import Intro from '@cmp/Intro';
import Counters from '@cmp/Counters';
import Contact from '@cmp/Contact';
import LargeSlider from '@cmp/LargeSlider';
import { I18NProps } from '@pages/_app';
import useI18N from '@hooks/useI18N';

import img1 from '@pub/content/main/1.jpeg';
import img2 from '@pub/content/main/2.jpeg';
import img3 from '@pub/content/main/3.jpeg';
import img4 from '@pub/content/main/4.jpeg';

const IMAGES = new Map([
    ['@pub/content/main/1.jpeg', img1],
    ['@pub/content/main/2.jpeg', img2],
    ['@pub/content/main/3.jpeg', img3],
    ['@pub/content/main/4.jpeg', img4]
]);

export default function Main() {
    const { messages } = useI18N();

    return (
        <>
            <LargeSlider content={messages.mainSlider} images={IMAGES} />
            <Intro
                content={messages.aboutShort.intro}
                url="/about"
            />
            <Counters content={messages.counters} textCn="items-center" />
            <Intro
                content={messages.careerShort.intro}
                url="/career"
            />
            <Contact />
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
                ...require(`../i18n/mainSlider.${locale}`),
            },
            now: Date.now()
        }
    }
}
