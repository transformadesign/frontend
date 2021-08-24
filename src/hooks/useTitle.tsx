import React from 'react';
import Head from 'next/head';
import useI18N from '@hooks/useI18N';

export default function useTitle({ title }: { title: string | string[] }) {
    const { messages: { common } } = useI18N();
    const textContent = [
        common.name,
        ...(Array.isArray(title) ? title : [title])
    ]

    return (
        <Head>
            <title>{textContent.join(' | ')}</title>
        </Head>
    );
}
