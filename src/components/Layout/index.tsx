import Head from 'next/head'

import Header from '@cmp/Header';
import Footer from '@cmp/Footer';
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    )
}
