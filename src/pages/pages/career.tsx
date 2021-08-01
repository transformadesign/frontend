import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { I18NProps } from '@pages/_app';
import Container from '@cmp/Container';
import useI18N from '@hooks/useI18N';

export default function Career(params: InferGetStaticPropsType<typeof getStaticProps>) {
    const { messages } = useI18N();
    return (
        <Container>Career</Container>
    );
}

export const getStaticProps: GetStaticProps<I18NProps> = async ({ locale }) => {
    return {
        props: {
            locale,
            messages: {},
            now: Date.now()
        }
    }
};
