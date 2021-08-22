import React from 'react';
import NextImage, { ImageProps } from 'next/image';

import { classNames } from '@lib/classNames';

type Props = ImageProps & { className?: string };

const Image: React.FC<Props> = props => {
    const imageProps = {
        ...props
    };

    delete imageProps.className;

    // @ts-ignore
    const img = <NextImage layout="responsive" placeholder="blur" alt="" {...imageProps} />;

    return (
        <section className={classNames('mb-20 max-w-screen-2xl mx-auto relative', props.className)}>
            {img}
        </section>
    );
}

export default Image;
