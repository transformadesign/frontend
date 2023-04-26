import React from 'react';

import Button, { ButtonProps } from '@cmp/Button';
import Container from '@cmp/Container';
import Heading from '@cmp/Heading';

type Props = {
    content: {
        memo: string;
        title: string;
        text: string;
        links?: ({
            text: string;
            link: string;
        } & Pick<ButtonProps, 'variant'>)[];
    };
    url: string;
};

const BUTTON_CN = 'mr-4 last:mr-0 mb-2';

const Intro: React.FC<Props> = ({ content, url }) => {
    return (
        <Container as="section" className="mb-20">
            <Heading level="3">
                {content.memo}
            </Heading>
            <Heading level="2">{content.title}</Heading>
            <p className="my-6 text-gray-700">{content.text}</p>
            <Button
                url={url}
                className={BUTTON_CN}
            />
            {content.links ? (
                <>
                    {content.links.map(({ text, link, variant }) => (
                        <Button
                            url={link}
                            text={text}
                            key={link}
                            className={BUTTON_CN}
                            variant={variant}
                        />
                    ))}
                </>
            ) : null}
        </Container>
    );
}

export default Intro;
