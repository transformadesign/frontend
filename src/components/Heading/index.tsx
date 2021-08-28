import React from 'react';

import { classNames } from '@lib/classNames';

type Level = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

const classes = {
    '2': 'text-3xl my-5 font-normal',
    '3': 'uppercase text-xs text-gray-700 font-light tracking-widest my-5',
    '4': 'text-xs tracking-wider uppercase mb-2 sm:mb-4 text-gray-700'
};

const Heading: React.FC<{ level?: Level; className?: string }> = ({ level = '4', className, children }) => {
    const Cmp = `h${level}` as keyof JSX.IntrinsicElements;
    return <Cmp className={classNames(classes[level], className)}>{children}</Cmp>;
};

export default Heading;
