import React from 'react';

import Alert from '../components/alert';
import Footer from '../components/footer';
import Meta from '../components/meta';

import { Context } from '../context/main';

type Props = {
    preview: boolean;
} & Context;

const Layout: React.FC<Props> = ({ preview, children, type, alternates = [], lang }) => {
    const context = React.useContext(Context);

    return (
        <Context.Provider value={{ ...context, lang, type, alternates }}>
            <Meta />
            <Alert preview={preview} />
            <main className="relative min-h-screen">{children}</main>
            <Footer />
        </Context.Provider>
    );
};

export default Layout;
