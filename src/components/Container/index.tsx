import React from 'react';

import { classNames } from '@lib/classNames';

type Props = {
    className?: string;
    as?: keyof JSX.IntrinsicElements;
};

const Container: React.FC<Props> = ({ children, as, className }) => {
    const Cmp = as || 'div';

    return <Cmp className={classNames(className, 'max-w-screen-lg mx-auto px-3')}>{children}</Cmp>;
};

export default Container;
