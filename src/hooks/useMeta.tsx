import React from 'react';
import Head from 'next/head';
import useI18N from '@hooks/useI18N';

type Props = {
    title: string | string[];
    description?: string;
};

export default function useMeta(props?: Props) {
    const { title: pTitle, description: pDescription } = props || {};
    const { messages: { common } } = useI18N();
    const titleContent = [
        common.name,
    ];

    if (pTitle) {
        titleContent.push(...Array.isArray(pTitle) ? pTitle : [pTitle]);
    }

    const title = titleContent.join(' | ');
    const description = pDescription || common.description;

    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
        </Head>
    );
}
