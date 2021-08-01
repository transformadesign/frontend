import React from 'react';

import Container from '@cmp/Container';

const Counters: React.FC<{ content: Record<string, string>[] }> = ({ content }) => {
    return (
        <Container as="section" className="mb-20">
            <ol className="flex flex-row">
                {content.map(elem => (
                    <li key={elem.name} className="flex-1 pr-6">
                        <div className="font-bold text-3xl mb-2">{elem.val}+</div>
                        <div className="uppercase tracking-wider text-gray-700 leading-5">{elem.text}</div>
                    </li>
                ))}
            </ol>
        </Container>
    );
}

export default Counters;
