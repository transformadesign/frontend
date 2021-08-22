import React from 'react';

import Heading from '@cmp/Heading';
import Container from '@cmp/Container';

type Props = {
    data: {
        title?: string;
        subTitle?: string;
        description?: string;
        text?: Array<string>;
    };
}

const Text: React.FC<Props> = ({ data}) => {
    return (
        <Container as="section" className="mb-14">
            {data.title && <Heading level="4">{data.title}</Heading>}
            {data.subTitle && <Heading level="2">{data.subTitle}</Heading>}
            {
                data.text?.map((text, index) => (
                    <p key={index} className="pt-4">{text}</p>
                ))
            }
        </Container>
    );
}

export default Text;
