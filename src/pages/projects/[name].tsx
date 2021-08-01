import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

import { addLocales } from '@lib/staticPaths';

import Container from '@cmp/Container';
import { I18NProps } from '@pages/_app';

export default function Project(params: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Container>Project: {params.name}</Container>
    );
}

export const getStaticProps: GetStaticProps<I18NProps & { name: string }> = async ({ params, locale }) => ({
    props: {
        name: Array.isArray(params.name) ? params.name[0] : params.name,
        locale,
        messages: {},
        now: Date.now(),
    }
});

export const getStaticPaths: GetStaticPaths<{ name: string }> = async ({ locales }) => {
    return {
        paths: addLocales([
            { params: { name: 'xxi' } }
        ], locales),
        fallback: false
    };
};
