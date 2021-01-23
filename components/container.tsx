import { FC } from 'react';

import { classNames } from '../lib/class-names';

type Props = {
    className?: string;
    as?: keyof JSX.IntrinsicElements;
};

const Container: FC<Props> = props => {
    const Cmp = props.as || 'div';

    return <Cmp className={classNames(
        props.className,
        'px-4',
        'lg:max-w-xxl',
        'mx-auto'
    )}>{props.children}</Cmp>
};

export default Container;
