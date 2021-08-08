import React, { useMemo } from 'react';
import Link from 'next/link';

import useI18N from '@hooks/useI18N';
import { classNames } from '@lib/classNames';

const Menu: React.FC<{ whiteFlag: boolean }> = ({ whiteFlag }) => {
    const { messages } = useI18N();
    const items = useMemo(() => [
        { name: 'about', href: '/pages/about' },
        { name: 'projects', href: '/projects' },
        { name: 'career', href: '/pages/career' },
    ], []);

    return (
        <nav className="flex flex-col content-end">
            <ul className="flex flex-row justify-between items-stretch min-h-full">
                {items.map(({ name, href }) => (
                    <li className="" key={name}>
                        <Link href={href}>
                            <a
                                className={classNames(
                                    'flex items-center min-h-full px-2 text-sm sm:px-4',
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
