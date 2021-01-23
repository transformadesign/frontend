import { useContext, FC } from 'react';
import Link from 'next/link';

import { Context } from '../context/main';
import { buildUrl } from '../lib/url-builder';
import Container from './container';

type Props = {
    className?: string;
};

const logoAspectRatio = 76.38 / 229.8;

const Header: FC<Props> = props => {
    const { lang } = useContext(Context);
    const w = 163;
    const h = Math.round(w * logoAspectRatio);

    return (
        <header className="absolute top-0 pt-24 sm:pt-8 block w-full">
            <Container {...props}>
                <Link {...buildUrl('main', lang)}>
                    <a>
                        <img src="/logo_large.svg" alt="Transforma" style={{ maxWidth: `${w}px`, maxHeight: `${h}px` }} />
                    </a>
                </Link>
            </Container>
        </header>
    );
};

export default Header;
