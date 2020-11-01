import { useContext } from 'react';
import Link from 'next/link';

import { Context } from '../context/main';
import { buildUrl } from '../lib/url-builder';

export default function Header() {
    const { lang } = useContext(Context);

    return (
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
            <Link {...buildUrl('main', lang)}>
                <a className="hover:underline">Transforma</a>
            </Link>
            .
        </h2>
    );
}
