import React, { useContext } from 'react';

import Alert from '../components/alert';
import Footer from '../components/footer';
import Meta from '../components/meta';

import { Context } from '../context/main';

type Props = {
    preview: boolean;
} & Context;

const Layout: React.FC<Props> = props => {
    const context = useContext(Context);
    const { preview, children } = props;

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
