import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import Alert from './alert';
import Footer from './footer';
import Meta from './meta';

import { Context } from '../context/main';

type Props = {
    preview: boolean;
} & Context;

const Layout: React.FC<Props> = (props) => {
    const context = useContext(Context);
    const router = useRouter();
    const { preview, children } = props;

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Context.Provider value={{ ...context, ...props }}>
            <Meta />
            <Alert preview={preview} />
            <main className="relative min-h-screen">{children}</main>
            <Footer />
        </Context.Provider>
    );
};

export default Layout;
