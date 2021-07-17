import React from 'react';
import { RichText } from 'prismic-reactjs';

import { Page as TPage } from '../lib/api';

import Container from './container';
import Heading from './heading';
import Arrow from './arrow';

type Props = {
    className?: string;
    page: TPage;
};

const Page: React.FC<Props> = ({ page }) => {
    if (!page) {
        return null;
    }

    return (
        <Container className="py-9 sm:py-16">
            <Heading level="4" className="uppercase mb-6">
                {RichText.asText(page.foreignTitle)}
            </Heading>
            <Heading level="2" className="mb-6">
                {RichText.asText(page.mainTitle)}
            </Heading>
            <p className="pb-1 sm:pb-2">{RichText.asText(page.description)}</p>
            <Arrow className="w-24 sm:w-32 text-xxs sm:text-xs opacity-60 bg-black" />
        </Container>
    );
};

export default Page;
