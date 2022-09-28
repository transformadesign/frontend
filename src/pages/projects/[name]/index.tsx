import React, { useMemo } from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { I18NProps } from '@pages/_app';
import Text from '@cmp/Text';
import Image from '@cmp/Image';
import Container from '@cmp/Container';

import useI18N from '@hooks/useI18N';
import useMeta from '@hooks/useMeta';

import { classNames } from '@lib/classNames';

import styles from './Project.module.css';

export default function Project(params: InferGetStaticPropsType<typeof getStaticProps>) {
    const { messages: { project, common } } = useI18N();
    const text = useMemo(() => {
        return {
            title: common.project,
            subTitle: project.title
        };
    }, [common.project, project.title]);
    const meta = useMeta({
        title: [common.projects, project.title],
        description: project.brief
    });

    return (
        <>
            {meta}
            <Text data={text} className="mb-0" />
            <Container className="mb-8 flex flex-row flex-wrap">
                <dl className={classNames('mr-4 mb-4', styles.elem)}>
                    <dt className="uppercase">{common.location}<span aria-hidden>:</span></dt>
                    <dd className="text-gray-700">{[project.location, project.country].filter(Boolean).join(', ')}</dd>
                </dl>
                <dl className={classNames('mr-4 mb-4', styles.elem)}>
                    <dt className="uppercase">{common.size}<span aria-hidden>:</span></dt>
                    <dd className="text-gray-700">{project.size}m<sup>2</sup></dd>
                </dl>
                <dl className={classNames('mr-4 mb-4', styles.elem)}>
                    <dt className="uppercase">{common.date}<span aria-hidden>:</span></dt>
                    <dd className="text-gray-700">{project.year}</dd>
                </dl>
                <dl className="mr-4 mb-4">
                    <dt className="uppercase">{common.brief}<span aria-hidden>:</span></dt>
                    <dd className="text-gray-700">{project.brief}</dd>
                </dl>
            </Container>
            {project.images.map((image, i) => (
                <a href={image.src} target="_blank" key={i} rel="noreferrer" role="presentation">
                    <Image
                        src={image.src}
                        layout="fill"
                        objectFit={image.aspect === 'vert' ? 'contain' : 'cover'}
                        placeholder="empty"
                        className={classNames(styles.image, styles[image.aspect])}
                        alt=""
                    />
                </a>
                )
            )}
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
