import React from 'react';

import Container from '@cmp/Container';
import { classNames } from '@lib/classNames';

const Counters: React.FC<{
    content: Record<string, string>[];
    noWrap?: boolean;
    innerCn?: string;
    elemCn?: string;
    textCn?: string;
}> = ({ content, noWrap, innerCn, elemCn, textCn }) => {
    const inner = (
        <ol className={classNames('flex flex-col sm:flex-row', innerCn)}>
            {content.map(elem => (
                <li key={elem.name} className={classNames('flex flex-col flex-1 sm:pr-6 mb-10 sm:mb-0 last:pr-0', elemCn)}>
                    <div className="font-normal text-3xl mb-2 flex-initial">{elem.val}+</div>
                    <div className={classNames(
                        'flex flex-1 leading-5 text-gray-400 font-light text-xl',
                        textCn
                    )}>{elem.text}</div>
                </li>
            ))}
        </ol>
    );

    if (noWrap) {
        return inner;
    }

    return (
        <Container as="section" className="mb-20">
            {inner}
        </Container>
    );
}

export default Counters;
