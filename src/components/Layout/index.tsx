import Head from 'next/head'

import Header from '@cmp/Header';
import styles from './Layout.module.css'

const SITE_NAME = 'Transforma';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{SITE_NAME}</title>
                <link type="image/x-icon" rel="shortcut icon" href="/favicon.ico" />
                <link sizes="76x76" rel="apple-touch-icon" href="/favicon.png" />
                <link sizes="152x152" rel="apple-touch-icon" href="/favicon.png" />
                <meta name="description" content="Design studio" />
            </Head>
            <Header />
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer} />
        </div>
    )
}
