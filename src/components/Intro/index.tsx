import React from 'react';

import Button from '@cmp/Button';
import Container from '@cmp/Container';

const Intro: React.FC<{ content: Record<string, string>, url: string }> = ({ content, url }) => {
    return (
        <Container as="section" className="mb-20">
            <h3 className="uppercase text-xs text-gray-700 font-light tracking-widest my-5">{content.memo}</h3>
            <h2 className="text-3xl my-5">{content.title}</h2>
            <p className="my-6 text-gray-700">{content.text}</p>
            <Button url={url} />
        </Container>
    );
}

export default Intro;
