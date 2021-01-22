import { useContext, FC } from 'react';
import Link from 'next/link';

import { Context } from '../context/main';
import { buildUrl } from '../lib/url-builder';
import Container from './container';

type Props = {
    className?: string;
};

const Header: FC<Props> = props => {
    const { lang } = useContext(Context);

    return (
        <header className="absolute top-0 pt-8 block w-full">
            <Container {...props}>
                <Link {...buildUrl('main', lang)}>
                    <a>
                        <img src="/logo_large.png" alt="Transforma" />
                    </a>
                </Link>
            </Container>
        </header>
    );
};

export default Header;
