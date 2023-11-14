import React, { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useI18N from '@hooks/useI18N';
import { classNames } from '@lib/classNames';

const Menu: React.FC<{ whiteFlag: boolean }> = ({ whiteFlag }) => {
    const { messages } = useI18N();
    const items = useMemo(() => [
        { name: 'about', href: '/about' },
        { name: 'projects', href: '/projects' },
        { name: 'career', href: '/career', className: 'hidden min:flex' },
        { name: 'anikin', href: 'https://anikin.ae' },
    ], []);
    const { route } = useRouter();

    return (
        <nav className="flex flex-col content-end">
            <ul className="flex flex-row justify-between items-stretch min-h-full">
                {items.map(({ name, href, className }) => (
                    <li key={name} aria-current={route.startsWith(href) ? 'page' : undefined}>
                        <Link href={href}>
                            <a
                                className={classNames(
                                    'flex items-center min-h-full px-2 text-sm sm:px-4',
                                    whiteFlag ? 'text-white' : undefined,
                                    className
                                )}
                            >
                                {messages.common.menu[name]}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default  Menu;
