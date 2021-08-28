import React from 'react';
import NextImage, { ImageProps } from 'next/image';

import { classNames } from '@lib/classNames';

import styles from './Image.module.css';

export type Props = ImageProps & { className?: string };

const Image: React.FC<Props> = props => {
    const imageProps = {
        ...props
    };

    delete imageProps.className;

    // @ts-ignore
    const img = <NextImage placeholder="blur" alt="" {...imageProps} className="pointer-events-none" />;

    return (
        <section className={classNames('mb-20 mx-auto relative max-w-screen-2xl', props.className, props.layout !== 'responsive' && styles.image)}>
            {img}
        </section>
    );
}

export default Image;
