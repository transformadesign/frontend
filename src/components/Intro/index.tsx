import React from 'react';

import Button from '@cmp/Button';
import Container from '@cmp/Container';

const Intro: React.FC<{ content: Record<string, string>, url: string }> = ({ content, url }) => {
    return (
        <Container as="section">
            <h3>{content.memo}</h3>
            <h2>{content.title}</h2>
            <p>{content.text}</p>
            <Button url={url} />
        </Container>
    );
}

export default Intro;
