import React from 'react';

import { classNames } from '../lib/class-names';

type Level = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

const classes = {
    '2': 'text-2xl sm:text-4xl font-bold',
    '4': 'text-xs tracking-wider'
};

const Heading: React.FC<{ level?: Level, className?: string }> = ({ level = '4', className, children }) => {
    const Cmp = `h${level}` as keyof JSX.IntrinsicElements;
    return (<Cmp className={classNames(classes[level], className)}>{children}</Cmp>);
}

export default Heading;
