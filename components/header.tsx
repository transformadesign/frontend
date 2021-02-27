import { useContext, FC } from 'react';
import Link from 'next/link';

import { Context } from '../context/main';
import { buildUrl } from '../lib/url-builder';
import { classNames } from '../lib/class-names';

import Container from './container';
import LangSwitcher from './lang-switcher';

type Props = {
    className?: string;
};

const logoAspectRatio = 76.38 / 229.8;

const Header: FC<Props> = props => {
    const { lang } = useContext(Context);
    const w = 163;
    const h = Math.round(w * logoAspectRatio);
    const containerCn = classNames(props.className, 'flex flex-col xxs:flex-row justify-between items-start')

    return (
        <header className="absolute top-0 pt-24 sm:pt-8 block w-full">
            <Container {...props} className={containerCn}>
                <Link {...buildUrl('main', lang)}>
                    <a className="flex-grow w-full xxs:w-auto pb-4 xxs:p-0">
                        <img src="/logo_large.svg" alt="Transforma" style={{ maxWidth: `${w}px`, maxHeight: `${h}px` }} />
                    </a>
                </Link>
                <LangSwitcher className="text-white uppercase border border-white p-2 leading-none" />
            </Container>
        </header>
    );
};

export default Header;
