import React from 'react';
import NextImage, { ImageProps } from 'next/image';

type Props = ImageProps;

const Image: React.FC<Props> = ({ src }) => {
    // @ts-ignore
    const img = <NextImage src={src} layout="responsive" placeholder="blur" alt="" />;

    return (
        <section className="mb-20 max-w-screen-2xl mx-auto">
            {img}
        </section>
    );
}

export default Image;
