import React from 'react';

import Button from '@cmp/Button';
import Container from '@cmp/Container';
import Heading from '@cmp/Heading';

const Intro: React.FC<{ content: Record<string, string>, url: string }> = ({ content, url }) => {
    return (
        <Container as="section" className="mb-20">
            <Heading level="3">
                {content.memo}
            </Heading>
            <Heading level="2">{content.title}</Heading>
            <p className="my-6 text-gray-700">{content.text}</p>
            <Button url={url} />
        </Container>
    );
}

export default Intro;
