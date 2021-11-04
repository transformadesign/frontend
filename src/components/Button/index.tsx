import React from 'react';
import Link from 'next/link';

import useI18N from '@hooks/useI18N';
import { classNames } from '@lib/classNames';

import button from './Button.module.css';

const Button: React.FC<{ url: string }> = ({ url }) => {
    const { messages: { common } } = useI18N();

    return (
        <Link href={url}>
            <a className={classNames(
                button.btn,
                'inline-block pl-4 pr-6 leading-3 text-sm',
                'border border-solid border-black',
                'hover:bg-black hover:text-white hover:border-transparent'
            )}>
                {common.btnMore}
                <i className={classNames(button.ico, 'not-italic inline-block ml-2')} role="presentation"> &rarr;</i>
            </a>
        </Link>
    );
}

export default Button;
