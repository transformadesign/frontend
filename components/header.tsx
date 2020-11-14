import { useContext, FC } from 'react';
import Link from 'next/link';

import { Context } from '../context/main';
import { classNames } from '../lib/class-names';
import { buildUrl } from '../lib/url-builder';

type Props = {
    className?: string;
};

const Header: FC<Props> = ({ className }) => {
    const { lang } = useContext(Context);

    return (
        <h2
            className={classNames(
                'text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8',
                className
            )}
        >
            <Link {...buildUrl('main', lang)}>
                <a className="hover:underline">Transforma</a>
            </Link>
            .
        </h2>
    );
};

export default Header;
