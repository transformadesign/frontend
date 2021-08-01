import React, { useMemo } from 'react';
import Link from 'next/link';

import useI18N from '@hooks/useI18N';
import { classNames } from '@lib/classNames';

const Menu: React.FC<{ whiteFlag: boolean }> = ({ whiteFlag }) => {
    const { messages } = useI18N();
    const items = useMemo(() => [
        { name: 'main', href: '/' },
        { name: 'about', href: '/pages/about' },
        { name: 'projects', href: '/projects' },
        { name: 'career', href: '/pages/career' },
    ], []);

    return (
        <nav className="flex flex-col content-end">
            <ul className="sm:flex flex-row justify-between items-stretch min-h-full hidden">
                {items.map(({ name, href }) => (
                    <li className="" key={name}>
                        <Link href={href}>
                            <a
                                className={classNames(
                                    'flex items-center min-h-full px-4 text-sm',
                                    whiteFlag ? 'text-white' : undefined
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
