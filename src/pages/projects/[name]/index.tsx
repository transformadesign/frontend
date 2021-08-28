import React, { useMemo } from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { I18NProps } from '@pages/_app';
import Text from '@cmp/Text';
import Image from '@cmp/Image';
import Container from '@cmp/Container';

import useI18N from '@hooks/useI18N';
import useTitle from '@hooks/useTitle';

import styles from './Project.module.css';

export default function Project(params: InferGetStaticPropsType<typeof getStaticProps>) {
    const { messages: { project, common } } = useI18N();
    const text = useMemo(() => {
        return {
            title: common.project,
            subTitle: project.title
        };
    }, [common.project, project.title]);
    const title = useTitle({ title: [common.projects, project.title] });

    return (
        <>
            {title}
            <Text data={text} className="mb-0" />
            <Container className="mb-8 flex flex-row">
                <dl className="mr-4">
                    <dt className="uppercase">{common.location}:</dt>
                    <dd className="text-gray-700">{[project.location, project.country].filter(Boolean).join(', ')}</dd>
                </dl>
                <dl className="mr-4">
                    <dt className="uppercase">Square meters:</dt>
                    <dd className="text-gray-700">800m<sup>2</sup></dd>
                </dl>
                <dl className="mr-4">
                    <dt className="uppercase">Date:</dt>
                    <dd className="text-gray-700">2021</dd>
                </dl>
                <dl className="mr-4">
                    <dt className="uppercase">Brief:</dt>
                    <dd className="text-gray-700">Developing an image of living spaces unique in aesthetics and functionality, our designers are not bound in the frames of one style. We revise patterns of different countries and ages, striving for a holistic, complete and sometimes unexpected view.</dd>
                </dl>
            </Container>
            {project.images.map((image, i) => (
                <a href={image.src} target="_blank" key={i} rel="noreferrer">
                    <Image src={image.src} layout="fill" placeholder="empty" className={styles.image} />
                </a>
            ))}
        </>
    );
}

export const getStaticProps: GetStaticProps<I18NProps & { name: string }> = async ({ params, locale }) => {
    const name = Array.isArray(params.name) ? params.name[0] : params.name;

    return {
        props: {
            name,
            locale,
            messages: {
                ...require(`../../../i18n/projects/${name}.${locale}`).default
            },
            now: Date.now(),
        }
    }
};

export const getStaticPaths: GetStaticPaths<{ name: string }> = async args => {
    const { locales } = args;

    const paths = locales.reduce((paths, locale) => {
        const projects = require(`../../../i18n/projects.${locale}`).default.projects.list;

        projects.forEach(project => {
            paths.push({
                params: { name: project },
                locale
            });
        });

        return paths;
    }, []);

    return {
        paths,
        fallback: false
    };
};
