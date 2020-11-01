import React from 'react';
import { RichText, RichTextBlock, HTMLSerializer, Elements } from 'prismic-reactjs';

type HT = Parameters<HTMLSerializer<React.ReactNode>>;
type HV = ReturnType<HTMLSerializer<React.ReactNode>>;

type ElementsKeys = keyof JSX.IntrinsicElements;
type Opts = {
    className?: string;
    key?: string;
};

const TAGS = {
    [Elements.heading1]: 'h1' as ElementsKeys,
    [Elements.heading2]: 'h2' as ElementsKeys,
    [Elements.heading3]: 'h3' as ElementsKeys,
    [Elements.heading4]: 'h4' as ElementsKeys,
    [Elements.heading5]: 'h5' as ElementsKeys,
    [Elements.heading6]: 'h6' as ElementsKeys,
    [Elements.paragraph]: 'p' as ElementsKeys
};

// https://prismic.io/docs/javascript/beyond-the-api/html-serializer
const htmlSerializer = function (opts: Opts, type: Elements, element: HT[1], content: HT[2], children: HT[3]): HV {
    switch (type) {
        case Elements.heading1:
        case Elements.heading2:
        case Elements.heading3:
        case Elements.heading4:
        case Elements.heading5:
        case Elements.heading6:
        case Elements.paragraph:
            const Tag = TAGS[type];

            return <Tag {...opts}>{children.join('')}</Tag>;
        default:
            return null;
    }
};

const getContent: React.FC<{ data: RichTextBlock[]; opts?: Opts }> = ({ data, opts = {} }) => {
    return <RichText htmlSerializer={htmlSerializer.bind(null, opts)} render={data} />;
};

export default getContent;
